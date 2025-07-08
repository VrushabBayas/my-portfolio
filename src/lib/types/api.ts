// YouTube API Types
export interface YouTubeVideo {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  publishedAt: string;
  viewCount: string;
  duration: string;
  url: string;
}

export interface YouTubeChannel {
  subscriberCount: string;
  videoCount: string;
  viewCount: string;
  title: string;
  description: string;
  customUrl: string;
  thumbnails: {
    default: string;
    medium: string;
    high: string;
  };
}

export interface YouTubeApiResponse {
  success: boolean;
  data?: {
    channel: YouTubeChannel;
    videos: YouTubeVideo[];
  };
  error?: string;
  cached?: boolean;
}

// Medium API Types
export interface MediumArticle {
  title: string;
  link: string;
  pubDate: string;
  contentSnippet: string;
  categories: string[];
  content: string;
  creator: string;
  guid: string;
  wordCount?: number;
}

export interface MediumProfile {
  title: string;
  description: string;
  link: string;
  feedUrl: string;
  lastBuildDate: string;
}

export interface MediumAnalytics {
  totalArticles: number;
  uniqueCategories: number;
  avgDaysBetweenPosts: number;
  recentArticles: number;
  avgWordCount: number;
  daysSinceLastPost: number;
  topCategories: string[];
  publishingFrequency: string;
}

export interface MediumApiResponse {
  success: boolean;
  data?: {
    articles: MediumArticle[];
    profile: MediumProfile;
    analytics?: MediumAnalytics;
  };
  error?: string;
  cached?: boolean;
}

// Common API Types
export interface ApiCacheEntry<T> {
  data: T;
  timestamp: number;
}

export interface ApiError {
  message: string;
  status?: number;
  code?: string;
}