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
    
    // Get channel's videos
    const videosResponse = await fetch(
      `${baseUrl}/search?part=snippet&channelId=${channelId}&type=video&order=date&maxResults=${maxVideos}&key=${apiKey}`
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
    
    // Combine video data
    const videos: YouTubeVideo[] = videosData.items.map((item: YouTubeSearchItem, index: number) => {
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
            title: 'React Hooks Explained: useState, useEffect, and Custom Hooks',
            description: 'Master React Hooks with practical examples and learn how to create custom hooks for reusable logic...',
            thumbnail: '/api/placeholder/320/180',
            publishedAt: '2024-01-15T00:00:00Z',
            viewCount: '2.5K',
            duration: '15:32',
            url: 'https://www.youtube.com/@codingfun'
          },
          {
            id: 'mock-2',
            title: 'JavaScript ES6+ Features Every Developer Should Know',
            description: 'Explore modern JavaScript features including arrow functions, destructuring, promises, and async/await...',
            thumbnail: '/api/placeholder/320/180',
            publishedAt: '2024-01-10T00:00:00Z',
            viewCount: '3.1K',
            duration: '22:45',
            url: 'https://www.youtube.com/@codingfun'
          }
        ]
      }
    };

    return NextResponse.json(mockResponse, { status: 200 });
  }
}