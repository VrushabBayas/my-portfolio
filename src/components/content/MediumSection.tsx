'use client';

import { useState, useEffect } from 'react';
import ScrollAnimation from '@/components/ui/ScrollAnimations';
import { MediumArticle, MediumApiResponse } from '@/lib/types/api';

// Helper function to estimate reading time from content
function estimateReadingTime(content: string): number {
  const wordsPerMinute = 200;
  const words = content.split(' ').length;
  return Math.ceil(words / wordsPerMinute);
}

// Helper function to calculate real article metrics
function getRealStats(articles: MediumArticle[]) {
  return {
    articleCount: articles.length
  };
}

interface MediumSectionProps {
  showStats?: boolean;
  maxArticles?: number;
  title?: string;
  className?: string;
}

export default function MediumSection({ 
  showStats = true, 
  maxArticles = 4, 
  title = "Latest Articles",
  className = ""
}: MediumSectionProps) {
  const [articles, setArticles] = useState<MediumArticle[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isFallback, setIsFallback] = useState(false);

  useEffect(() => {
    const fetchMediumData = async () => {
      try {
        setIsLoading(true);
        
        const response = await fetch(`/api/medium?limit=${maxArticles}`);
        
        if (!response.ok) {
          throw new Error(`Failed to fetch: ${response.status}`);
        }
        
        const data: MediumApiResponse = await response.json();
        console.log('Medium API Response:', data);
        console.log('Articles received:', data.data?.articles);
        
        if (data.success && data.data) {
          setArticles(data.data.articles);
          setIsFallback(!data.success);
        } else {
          throw new Error(data.error || 'Failed to fetch Medium data');
        }
      } catch (err) {
        console.error('Error fetching Medium data:', err);
        setIsFallback(true);
        // The API route will return fallback data even on error
      } finally {
        setIsLoading(false);
      }
    };
    
    fetchMediumData();
  }, [maxArticles]);

  if (isLoading) {
    return (
      <div className={`space-y-8 ${className}`}>
        <div className="animate-pulse">
          <div className="h-8 bg-secondary/50 rounded-lg w-64 mb-4"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {Array.from({ length: maxArticles }).map((_, i) => (
              <div key={i} className="glass rounded-2xl p-6">
                <div className="h-6 bg-secondary/50 rounded mb-3"></div>
                <div className="h-4 bg-secondary/50 rounded mb-2"></div>
                <div className="h-4 bg-secondary/50 rounded w-3/4 mb-4"></div>
                <div className="flex gap-2">
                  <div className="h-6 bg-secondary/50 rounded-full w-16"></div>
                  <div className="h-6 bg-secondary/50 rounded-full w-16"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`space-y-8 ${className}`}>
      {/* Profile Stats */}
      {showStats && (
        <ScrollAnimation animation="fadeUp">
          <div className="glass rounded-2xl p-6 border border-green-500/20 min-h-[280px] flex flex-col">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-green-500/20 rounded-2xl flex items-center justify-center">
                <span className="text-2xl">📝</span>
              </div>
              <div>
                <h3 className="font-heading text-xl font-bold text-foreground">Medium Blog</h3>
                <p className="text-green-500 font-medium">Technical Insights & Stories</p>
              </div>
            </div>
            
            <div className="grid grid-cols-3 gap-4 flex-1">
              <div className="text-center p-4 bg-card/30 rounded-xl">
                <div className="text-xl font-bold text-green-500">{getRealStats(articles).articleCount}</div>
                <div className="text-sm text-muted">Published Articles</div>
              </div>
              <div className="text-center p-4 bg-card/30 rounded-xl opacity-50">
                <div className="text-xl font-bold text-muted">N/A</div>
                <div className="text-sm text-muted">Followers</div>
              </div>
              <div className="text-center p-4 bg-card/30 rounded-xl opacity-50">
                <div className="text-xl font-bold text-muted">N/A</div>
                <div className="text-sm text-muted">Total Reads</div>
              </div>
            </div>
            <div className="mt-4 p-3 bg-green-500/10 border border-green-500/20 rounded-lg">
              <p className="text-xs text-green-600 dark:text-green-400 text-center">
                📝 RSS feed provides article count only • Follower/read metrics not available
              </p>
            </div>
            {isFallback && (
              <div className="mt-4 p-3 bg-yellow-500/10 border border-yellow-500/20 rounded-lg">
                <p className="text-sm text-yellow-600 dark:text-yellow-400">
                  📡 Using cached data or fallback content
                </p>
              </div>
            )}
          </div>
        </ScrollAnimation>
      )}

      {/* Section Title */}
      {title && (
        <ScrollAnimation animation="fadeUp" delay={100}>
          <div className="flex items-center justify-between">
            <h2 className="font-heading text-2xl lg:text-3xl font-bold text-foreground">
              {title}
            </h2>
            <a
              href="https://medium.com/@vrushabh-bayas"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 px-4 py-2 bg-green-500/10 hover:bg-green-500/20 border border-green-500/20 hover:border-green-500/40 rounded-lg text-green-500 hover:text-green-400 transition-all duration-300 font-medium text-sm"
            >
              <span className="flex items-center gap-2">
                Read More
                <svg className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </span>
            </a>
          </div>
        </ScrollAnimation>
      )}

      {/* Articles Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-8">
        {articles.map((article, index) => (
          <ScrollAnimation key={article.guid} animation="fadeUp" delay={200 + index * 100}>
            <a
              href={article.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative block"
            >
              <div className="glass rounded-2xl p-6 border border-green-500/10 group-hover:scale-[1.02] transition-all duration-300">
                {/* Article Header */}
                <div className="space-y-3 mb-4">
                  <h3 className="font-heading text-lg font-bold text-foreground group-hover:text-green-500 transition-colors duration-200 line-clamp-2">
                    {article.title}
                  </h3>
                  <p className="text-muted text-sm line-clamp-1">
                    by {article.creator}
                  </p>
                </div>

                {/* Article Preview */}
                <p className="text-muted text-sm mb-4 line-clamp-3">
                  {article.contentSnippet}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {article.categories.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-green-500/10 text-green-500 text-xs rounded-lg"
                    >
                      {tag}
                    </span>
                  ))}
                  {article.categories.length > 3 && (
                    <span className="px-2 py-1 bg-secondary/30 text-muted text-xs rounded-lg">
                      +{article.categories.length - 3} more
                    </span>
                  )}
                </div>

                {/* Article Meta */}
                <div className="flex items-center justify-between text-sm text-muted">
                  <div className="flex items-center gap-4">
                    <span className="flex items-center gap-1">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {estimateReadingTime(article.contentSnippet)} min read
                    </span>
                    <span className="flex items-center gap-1">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                      Medium
                    </span>
                  </div>
                  <span>{new Date(article.pubDate).toLocaleDateString()}</span>
                </div>

                {/* External link indicator */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </div>
              </div>
            </a>
          </ScrollAnimation>
        ))}
      </div>

    </div>
  );
}