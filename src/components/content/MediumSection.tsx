'use client';

import { useState, useEffect } from 'react';
import ScrollAnimation from '@/components/ui/ScrollAnimations';
import Carousel from '@/components/ui/Carousel';
import { MediumArticle, MediumApiResponse, MediumAnalytics } from '@/lib/types/api';

// Helper function to estimate reading time from content or word count
function estimateReadingTime(content: string, wordCount?: number): number {
  const wordsPerMinute = 200;
  const words = wordCount || content.split(' ').length;
  return Math.ceil(words / wordsPerMinute);
}


interface MediumSectionProps {
  showStats?: boolean;
  maxArticles?: number;
  title?: string;
  className?: string;
}

export default function MediumSection({ 
  showStats = true, 
  maxArticles = 10, 
  title = "Latest Articles",
  className = ""
}: MediumSectionProps) {
  const [articles, setArticles] = useState<MediumArticle[]>([]);
  const [analytics, setAnalytics] = useState<MediumAnalytics | null>(null);
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
          setAnalytics(data.data.analytics || null);
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
          <div className="glass rounded-3xl p-8 border border-green-500/20 mb-12">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-8">
              <div className="flex items-center gap-6">
                <div className="w-20 h-20 bg-green-500/20 rounded-3xl flex items-center justify-center">
                  <span className="text-3xl">📝</span>
                </div>
                <div>
                  <h3 className="font-heading text-2xl lg:text-3xl font-bold text-foreground">Medium Blog</h3>
                  <p className="text-green-500 font-semibold text-lg">Technical Insights & Stories</p>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="text-center p-6 bg-background/50 border border-green-500/20 rounded-2xl hover:bg-background/70 transition-colors duration-200">
                <div className="text-3xl font-bold text-primary mb-2">{analytics?.totalArticles || articles.length}</div>
                <div className="text-sm font-medium text-foreground/70">Published Articles</div>
              </div>
              <div className="text-center p-6 bg-background/50 border border-green-500/20 rounded-2xl hover:bg-background/70 transition-colors duration-200">
                <div className="text-3xl font-bold text-primary mb-2">{analytics?.uniqueCategories || 16}</div>
                <div className="text-sm font-medium text-foreground/70">Topics Covered</div>
              </div>
              <div className="text-center p-6 bg-background/50 border border-green-500/20 rounded-2xl hover:bg-background/70 transition-colors duration-200">
                <div className="text-3xl font-bold text-primary mb-2">{analytics?.daysSinceLastPost === 0 ? 'Today' : `${analytics?.daysSinceLastPost || 55} days`}</div>
                <div className="text-sm font-medium text-foreground/70">Last Article</div>
              </div>
            </div>
            
            <div className="mt-6 p-4 bg-secondary/30 border border-border rounded-xl">
              <p className="text-sm text-muted text-center">
                📊 Analytics calculated from RSS feed data • Real-time stats from Medium API
              </p>
            </div>
            {isFallback && (
              <div className="mt-4 p-4 bg-yellow-500/10 border border-yellow-500/20 rounded-xl">
                <p className="text-sm text-yellow-600 dark:text-yellow-400 text-center">
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
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
            <h2 className="font-heading text-3xl lg:text-4xl font-bold text-foreground">
              {title}
            </h2>
            <a
              href="https://medium.com/@vrushabh-bayas"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 px-6 py-3 bg-primary/10 hover:bg-primary/20 border border-primary/20 hover:border-primary/40 rounded-xl text-primary hover:text-primary transition-all duration-300 font-semibold"
            >
              <span className="flex items-center gap-2">
                Read More
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </span>
            </a>
          </div>
        </ScrollAnimation>
      )}

      {/* Articles Carousel */}
      <Carousel className="mt-8">
        {articles.map((article, index) => (
          <ScrollAnimation key={article.guid} animation="fadeUp" delay={200 + index * 100}>
            <a
              href={article.link}
              target="_blank"
              rel="noopener noreferrer"
              className="carousel-item group relative block"
            >
              <div className="glass rounded-2xl p-6 border border-border group-hover:border-primary/30 group-hover:scale-[1.02] transition-all duration-300">
                {/* Article Header */}
                <div className="space-y-3 mb-4">
                  <h3 className="font-heading text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-200 line-clamp-2">
                    {article.title}
                  </h3>
                  <p className="text-muted text-sm font-medium">
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
                      className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-lg border border-primary/20"
                    >
                      {tag}
                    </span>
                  ))}
                  {article.categories.length > 3 && (
                    <span className="px-2 py-1 bg-secondary/50 text-foreground/70 text-xs rounded-lg border border-border">
                      +{article.categories.length - 3} more
                    </span>
                  )}
                </div>

                {/* Article Meta */}
                <div className="flex items-center justify-between text-sm text-muted pt-3 border-t border-border">
                  <div className="flex items-center gap-3">
                    <span className="flex items-center gap-1 font-medium">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {estimateReadingTime(article.contentSnippet, article.wordCount)} min read
                    </span>
                  </div>
                  <span className="font-medium">{new Date(article.pubDate).toLocaleDateString()}</span>
                </div>

                {/* External link indicator */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </div>
              </div>
            </a>
          </ScrollAnimation>
        ))}
      </Carousel>


    </div>
  );
}