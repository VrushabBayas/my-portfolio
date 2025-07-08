import { NextRequest, NextResponse } from 'next/server';
import { YouTubeVideo, YouTubeChannel, YouTubeApiResponse } from '@/lib/types/api';
import { ApiCache, CACHE_DURATION, CACHE_KEYS } from '@/lib/utils/apiCache';

interface YouTubeSearchItem {
  id: {
    videoId: string;
  };
  snippet: {
    title: string;
    description: string;
    thumbnails: {
      high: {
        url: string;
      };
      medium?: {
        url: string;
      };
      default?: {
        url: string;
      };
    };
    publishedAt: string;
  };
}

interface YouTubeVideoDetails {
  statistics: {
    viewCount: string;
  };
  contentDetails: {
    duration: string;
  };
}

// Helper function to format large numbers
function formatCount(count: string | number): string {
  const num = typeof count === 'string' ? parseInt(count) : count;
  if (num >= 1000000) {
    return (num / 1000000).toFixed(1) + 'M';
  } else if (num >= 1000) {
    return (num / 1000).toFixed(1) + 'K';
  }
  return num.toString();
}

// Helper function to format duration from ISO 8601 to readable format
function formatDuration(duration: string): string {
  const match = duration.match(/PT(\d+H)?(\d+M)?(\d+S)?/);
  if (!match) return '0:00';
  
  const hours = parseInt(match[1]?.replace('H', '') || '0');
  const minutes = parseInt(match[2]?.replace('M', '') || '0');
  const seconds = parseInt(match[3]?.replace('S', '') || '0');
  
  if (hours > 0) {
    return `${hours}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  }
  return `${minutes}:${seconds.toString().padStart(2, '0')}`;
}

// Helper function to check if a video is a YouTube Short (≤60 seconds)
function isShort(duration: string): boolean {
  const match = duration.match(/PT(\d+H)?(\d+M)?(\d+S)?/);
  if (!match) return true; // Assume short if no duration found
  
  const hours = parseInt(match[1]?.replace('H', '') || '0');
  const minutes = parseInt(match[2]?.replace('M', '') || '0');
  const seconds = parseInt(match[3]?.replace('S', '') || '0');
  
  const totalSeconds = hours * 3600 + minutes * 60 + seconds;
  return totalSeconds <= 60; // 60 seconds or less = Short
}

// Helper function to parse view count for sorting
function parseViewCount(viewCount: string): number {
  if (!viewCount || viewCount === '0') return 0;
  
  // Remove commas and convert K/M suffixes
  const cleanCount = viewCount.replace(/,/g, '');
  
  if (cleanCount.includes('M')) {
    return parseFloat(cleanCount.replace('M', '')) * 1000000;
  } else if (cleanCount.includes('K')) {
    return parseFloat(cleanCount.replace('K', '')) * 1000;
  }
  
  return parseInt(cleanCount) || 0;
}

// Helper function to sort videos by view count (highest first)
function sortByViews(videos: YouTubeVideo[]): YouTubeVideo[] {
  return videos.sort((a, b) => parseViewCount(b.viewCount) - parseViewCount(a.viewCount));
}

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const maxVideos = parseInt(searchParams.get('limit') || '10');
    const apiKey = process.env.YOUTUBE_API_KEY;
    
    if (!apiKey) {
      throw new Error('YouTube API key not configured');
    }

    // Check cache first
    const cached = ApiCache.isValid<YouTubeApiResponse>(CACHE_KEYS.YOUTUBE_DATA, CACHE_DURATION.YOUTUBE);
    if (cached.valid && cached.data) {
      const cachedData = { ...cached.data };
      if (cachedData.data) {
        cachedData.data.videos = cachedData.data.videos.slice(0, maxVideos);
        cachedData.cached = true;
      }
      return NextResponse.json(cachedData);
    }

    const channelHandle = '@codingfun';
    const baseUrl = 'https://www.googleapis.com/youtube/v3';
    
    // First, get channel ID from handle
    const searchResponse = await fetch(
      `${baseUrl}/search?part=snippet&type=channel&q=${encodeURIComponent(channelHandle)}&key=${apiKey}`
    );
    
    if (!searchResponse.ok) {
      throw new Error(`YouTube API search error: ${searchResponse.status}`);
    }
    
    const searchData = await searchResponse.json();
    
    if (!searchData.items || searchData.items.length === 0) {
      throw new Error('Channel not found');
    }
    
    const channelId = searchData.items[0].id.channelId;
    
    // Get channel details and statistics
    const channelResponse = await fetch(
      `${baseUrl}/channels?part=snippet,statistics&id=${channelId}&key=${apiKey}`
    );
    
    if (!channelResponse.ok) {
      throw new Error(`YouTube API channel error: ${channelResponse.status}`);
    }
    
    const channelData = await channelResponse.json();
    const channelInfo = channelData.items[0];
    
    // Get channel's videos - order by viewCount and fetch more to account for filtering shorts
    const searchLimit = Math.min(maxVideos * 2, 50); // Fetch up to 2x requested to compensate for shorts filtering
    const videosResponse = await fetch(
      `${baseUrl}/search?part=snippet&channelId=${channelId}&type=video&order=viewCount&maxResults=${searchLimit}&key=${apiKey}`
    );
    
    if (!videosResponse.ok) {
      throw new Error(`YouTube API videos error: ${videosResponse.status}`);
    }
    
    const videosData = await videosResponse.json();
    
    // Get video statistics and content details
    const videoIds = videosData.items.map((item: YouTubeSearchItem) => item.id.videoId).join(',');
    const videoDetailsResponse = await fetch(
      `${baseUrl}/videos?part=statistics,contentDetails&id=${videoIds}&key=${apiKey}`
    );
    
    if (!videoDetailsResponse.ok) {
      throw new Error(`YouTube API video details error: ${videoDetailsResponse.status}`);
    }
    
    const videoDetailsData = await videoDetailsResponse.json();
    
    // Combine video data and filter out shorts
    const allVideos: YouTubeVideo[] = videosData.items.map((item: YouTubeSearchItem, index: number) => {
      const details: YouTubeVideoDetails = videoDetailsData.items[index];
      return {
        id: item.id.videoId,
        title: item.snippet.title,
        description: item.snippet.description,
        thumbnail: item.snippet.thumbnails.medium?.url || item.snippet.thumbnails.default?.url,
        publishedAt: item.snippet.publishedAt,
        viewCount: formatCount(details?.statistics?.viewCount || 0),
        duration: formatDuration(details?.contentDetails?.duration || 'PT0S'),
        url: `https://www.youtube.com/watch?v=${item.id.videoId}`
      };
    });
    
    // Filter out shorts and sort by view count, then limit to requested amount
    const videos: YouTubeVideo[] = sortByViews(
      allVideos.filter(video => !isShort(videoDetailsData.items[allVideos.indexOf(video)]?.contentDetails?.duration || 'PT0S'))
    ).slice(0, maxVideos);
    
    const channel: YouTubeChannel = {
      subscriberCount: formatCount(channelInfo.statistics.subscriberCount),
      videoCount: formatCount(channelInfo.statistics.videoCount),
      viewCount: formatCount(channelInfo.statistics.viewCount),
      title: channelInfo.snippet.title,
      description: channelInfo.snippet.description,
      customUrl: channelInfo.snippet.customUrl || channelHandle,
      thumbnails: {
        default: channelInfo.snippet.thumbnails.default?.url || '',
        medium: channelInfo.snippet.thumbnails.medium?.url || '',
        high: channelInfo.snippet.thumbnails.high?.url || ''
      }
    };

    const response: YouTubeApiResponse = {
      success: true,
      data: {
        channel,
        videos
      },
      cached: false
    };

    // Update cache
    ApiCache.set(CACHE_KEYS.YOUTUBE_DATA, response);

    return NextResponse.json(response);
    
  } catch (error) {
    console.error('Error fetching YouTube data:', error);
    console.error('API Key present:', !!process.env.YOUTUBE_API_KEY);
    console.error('Error details:', error instanceof Error ? error.message : error);
    
    // Return mock data as fallback
    const mockResponse: YouTubeApiResponse = {
      success: false,
      error: error instanceof Error ? error.message : 'Failed to fetch YouTube data. Using fallback data.',
      data: {
        channel: {
          subscriberCount: '1.2K',
          videoCount: '45',
          viewCount: '50K',
          title: 'Coding Fun',
          description: 'Programming tutorials and web development content',
          customUrl: '@codingfun',
          thumbnails: {
            default: '/api/placeholder/88/88',
            medium: '/api/placeholder/240/240',
            high: '/api/placeholder/800/800'
          }
        },
        videos: [
          {
            id: 'mock-1',
            title: 'Complete React Tutorial: Build a Full-Stack Application',
            description: 'Learn React from scratch by building a complete full-stack application with authentication, database, and deployment...',
            thumbnail: '/api/placeholder/320/180',
            publishedAt: '2024-01-10T00:00:00Z',
            viewCount: '12.5K',
            duration: '45:32',
            url: 'https://www.youtube.com/@codingfun'
          },
          {
            id: 'mock-2',
            title: 'JavaScript ES6+ Features Every Developer Should Know',
            description: 'Explore modern JavaScript features including arrow functions, destructuring, promises, and async/await...',
            thumbnail: '/api/placeholder/320/180',
            publishedAt: '2024-01-15T00:00:00Z',
            viewCount: '8.3K',
            duration: '22:45',
            url: 'https://www.youtube.com/@codingfun'
          },
          {
            id: 'mock-3',
            title: 'Advanced React Patterns: Hooks, Context, and Performance',
            description: 'Deep dive into advanced React patterns including custom hooks, context optimization, and performance techniques...',
            thumbnail: '/api/placeholder/320/180',
            publishedAt: '2024-01-05T00:00:00Z',
            viewCount: '5.7K',
            duration: '38:15',
            url: 'https://www.youtube.com/@codingfun'
          },
          {
            id: 'mock-4',
            title: 'Modern CSS Techniques: Grid, Flexbox, and Animations',
            description: 'Master modern CSS with comprehensive examples of CSS Grid, Flexbox layouts, and smooth animations...',
            thumbnail: '/api/placeholder/320/180',
            publishedAt: '2023-12-28T00:00:00Z',
            viewCount: '4.2K',
            duration: '28:50',
            url: 'https://www.youtube.com/@codingfun'
          }
        ]
      }
    };

    return NextResponse.json(mockResponse, { status: 200 });
  }
}