import { NextRequest, NextResponse } from 'next/server';
import Parser from 'rss-parser';
import { MediumArticle, MediumApiResponse } from '@/lib/types/api';
import { ApiCache, CACHE_DURATION, CACHE_KEYS } from '@/lib/utils/apiCache';

const parser = new Parser({
  customFields: {
    item: ['category', 'content:encoded', 'dc:creator']
  }
});

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const maxArticles = parseInt(searchParams.get('limit') || '10');
    
    // Check cache first
    const cached = ApiCache.isValid<MediumApiResponse>(CACHE_KEYS.MEDIUM_FEED, CACHE_DURATION.MEDIUM);
    if (cached.valid && cached.data) {
      const cachedData = { ...cached.data };
      if (cachedData.data) {
        cachedData.data.articles = cachedData.data.articles.slice(0, maxArticles);
        cachedData.cached = true;
      }
      return NextResponse.json(cachedData);
    }

    const mediumRssUrl = process.env.MEDIUM_RSS_URL || 'https://medium.com/feed/@vrushabh-bayas';
    
    const feed = await parser.parseURL(mediumRssUrl);
    
    const articles: MediumArticle[] = feed.items.slice(0, maxArticles).map(item => {
      // Extract content snippet from description or content
      let contentSnippet = item.contentSnippet || '';
      if (!contentSnippet && item.content) {
        // Remove HTML tags and get first 200 characters
        contentSnippet = item.content.replace(/<[^>]*>/g, '').substring(0, 200) + '...';
      }
      
      // Extract categories/tags
      const categories = item.categories || [];
      
      return {
        title: item.title || 'Untitled',
        link: item.link || '',
        pubDate: item.pubDate || new Date().toISOString(),
        contentSnippet: contentSnippet,
        categories: categories,
        content: item.content || '',
        creator: item.creator || 'Vrushabh Bayas',
        guid: item.guid || item.link || Math.random().toString(36)
      };
    });

    const response: MediumApiResponse = {
      success: true,
      data: {
        articles,
        profile: {
          title: feed.title || 'Vrushabh Bayas - Medium',
          description: feed.description || 'Technical articles and insights',
          link: feed.link || 'https://medium.com/@vrushabh-bayas',
          feedUrl: mediumRssUrl,
          lastBuildDate: feed.lastBuildDate || new Date().toISOString()
        }
      },
      cached: false
    };

    // Update cache
    ApiCache.set(CACHE_KEYS.MEDIUM_FEED, response);

    return NextResponse.json(response);
    
  } catch (error) {
    console.error('Error fetching Medium RSS feed:', error);
    
    // Return mock data as fallback
    const mockResponse: MediumApiResponse = {
      success: false,
      error: 'Failed to fetch Medium articles. Using fallback data.',
      data: {
        articles: [
          {
            title: 'Building a Modern React Application with TypeScript and Tailwind CSS',
            link: 'https://medium.com/@vrushabh-bayas/building-modern-react-app',
            pubDate: '2024-01-20T00:00:00.000Z',
            contentSnippet: 'A comprehensive guide to setting up a scalable React project with modern tooling and best practices...',
            categories: ['React', 'TypeScript', 'Tailwind CSS', 'Frontend'],
            content: '',
            creator: 'Vrushabh Bayas',
            guid: 'mock-1'
          },
          {
            title: 'Terminal Productivity: My Neovim Setup for Web Development',
            link: 'https://medium.com/@vrushabh-bayas/neovim-setup-web-dev',
            pubDate: '2024-01-15T00:00:00.000Z',
            contentSnippet: 'Boost your coding efficiency with a customized development environment using Neovim and modern terminal tools...',
            categories: ['Neovim', 'Terminal', 'Productivity', 'DevTools'],
            content: '',
            creator: 'Vrushabh Bayas',
            guid: 'mock-2'
          }
        ],
        profile: {
          title: 'Vrushabh Bayas - Medium (Fallback)',
          description: 'Technical articles and insights',
          link: 'https://medium.com/@vrushabh-bayas',
          feedUrl: 'https://medium.com/feed/@vrushabh-bayas',
          lastBuildDate: new Date().toISOString()
        }
      }
    };

    return NextResponse.json(mockResponse, { status: 200 });
  }
}