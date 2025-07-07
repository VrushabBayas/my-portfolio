import { ApiCacheEntry } from '@/lib/types/api';

// Generic cache storage
const cacheStore = new Map<string, ApiCacheEntry<unknown>>();

/**
 * Generic cache utility for API responses
 */
export class ApiCache {
  /**
   * Check if cached data exists and is still valid
   */
  static isValid<T>(key: string, duration: number): { valid: boolean; data?: T } {
    const cached = cacheStore.get(key);
    
    if (!cached) {
      return { valid: false };
    }
    
    const isExpired = Date.now() - cached.timestamp > duration;
    
    if (isExpired) {
      cacheStore.delete(key);
      return { valid: false };
    }
    
    return { valid: true, data: cached.data as T };
  }
  
  /**
   * Set cache data with timestamp
   */
  static set<T>(key: string, data: T): void {
    cacheStore.set(key, {
      data,
      timestamp: Date.now()
    });
  }
  
  /**
   * Clear specific cache entry
   */
  static clear(key: string): void {
    cacheStore.delete(key);
  }
  
  /**
   * Clear all cache entries
   */
  static clearAll(): void {
    cacheStore.clear();
  }
  
  /**
   * Get cache info for debugging
   */
  static getInfo(): { size: number; keys: string[] } {
    return {
      size: cacheStore.size,
      keys: Array.from(cacheStore.keys())
    };
  }
}

// Cache duration constants (in milliseconds)
export const CACHE_DURATION = {
  MEDIUM: 6 * 60 * 60 * 1000, // 6 hours
  YOUTUBE: 60 * 60 * 1000,     // 1 hour
  SHORT: 5 * 60 * 1000,        // 5 minutes
  LONG: 24 * 60 * 60 * 1000    // 24 hours
} as const;

// Cache keys
export const CACHE_KEYS = {
  MEDIUM_FEED: 'medium_feed',
  YOUTUBE_DATA: 'youtube_data'
} as const;