'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import ScrollAnimation from '@/components/ui/ScrollAnimations';
import Carousel from '@/components/ui/Carousel';
import { YouTubeVideo, YouTubeChannel, YouTubeApiResponse } from '@/lib/types/api';


interface YouTubeSectionProps {
  showStats?: boolean;
  maxVideos?: number;
  title?: string;
  className?: string;
}

export default function YouTubeSection({ 
  showStats = true, 
  maxVideos = 10, 
  title = "Latest YouTube Content",
  className = ""
}: YouTubeSectionProps) {
  const [channelData, setChannelData] = useState<YouTubeChannel | null>(null);
  const [videos, setVideos] = useState<YouTubeVideo[]>([]);
  const [selectedVideo, setSelectedVideo] = useState<YouTubeVideo | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchYouTubeData = async () => {
      try {
        setIsLoading(true);
        
        const response = await fetch(`/api/youtube?limit=${maxVideos}`);
        
        if (!response.ok) {
          throw new Error(`Failed to fetch: ${response.status}`);
        }
        
        const data: YouTubeApiResponse = await response.json();
        console.log('YouTube API Response:', data);
        console.log('Videos received:', data.data?.videos);
        
        if (data.data) {
          setChannelData(data.data.channel);
          setVideos(data.data.videos);
        } else {
          throw new Error(data.error || 'Failed to fetch YouTube data');
        }
      } catch (err) {
        console.error('Error fetching YouTube data:', err);
        // The API route will return fallback data even on error
      } finally {
        setIsLoading(false);
      }
    };
    
    fetchYouTubeData();
  }, [maxVideos]);

  const handleVideoClick = (video: YouTubeVideo) => {
    // Open video in new tab instead of modal for real YouTube videos
    window.open(video.url, '_blank');
  };

  const closeModal = () => {
    setSelectedVideo(null);
  };

  if (isLoading) {
    return (
      <div className={`space-y-8 ${className}`}>
        <div className="animate-pulse">
          <div className="h-8 bg-secondary/50 rounded-lg w-64 mb-4"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {Array.from({ length: maxVideos }).map((_, i) => (
              <div key={i} className="glass rounded-2xl p-4">
                <div className="aspect-video bg-secondary/50 rounded-lg mb-4"></div>
                <div className="h-4 bg-secondary/50 rounded mb-2"></div>
                <div className="h-3 bg-secondary/50 rounded w-3/4"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`space-y-8 ${className}`}>
      {/* Channel Stats */}
      {showStats && (
        <ScrollAnimation animation="fadeUp">
          <div className="glass rounded-3xl p-8 border border-red-500/20 mb-12">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-8">
              <div className="flex items-center gap-6">
                <div className="w-20 h-20 bg-red-500/20 rounded-3xl flex items-center justify-center">
                  <span className="text-3xl">🎬</span>
                </div>
                <div>
                  <h3 className="font-heading text-2xl lg:text-3xl font-bold text-foreground">{channelData?.title || 'Coding Fun'}</h3>
                  <p className="text-red-500 font-semibold text-lg">Programming Tutorials & Web Development</p>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="text-center p-6 bg-background/50 border border-red-500/20 rounded-2xl hover:bg-background/70 transition-colors duration-200">
                <div className="text-3xl font-bold text-red-500 mb-2">{channelData?.subscriberCount || '972'}</div>
                <div className="text-sm font-medium text-foreground/70">Subscribers</div>
              </div>
              <div className="text-center p-6 bg-background/50 border border-red-500/20 rounded-2xl hover:bg-background/70 transition-colors duration-200">
                <div className="text-3xl font-bold text-red-500 mb-2">{channelData?.videoCount || '85'}</div>
                <div className="text-sm font-medium text-foreground/70">Videos</div>
              </div>
              <div className="text-center p-6 bg-background/50 border border-red-500/20 rounded-2xl hover:bg-background/70 transition-colors duration-200">
                <div className="text-3xl font-bold text-red-500 mb-2">{channelData?.viewCount || '72.6K'}</div>
                <div className="text-sm font-medium text-foreground/70">Total Views</div>
              </div>
            </div>
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
              href="https://www.youtube.com/@codingfun"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 px-6 py-3 bg-red-500/10 hover:bg-red-500/20 border border-red-500/20 hover:border-red-500/40 rounded-xl text-red-500 hover:text-red-400 transition-all duration-300 font-semibold"
            >
              <span className="flex items-center gap-2">
                View Channel
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </span>
            </a>
          </div>
        </ScrollAnimation>
      )}

      {/* Videos Carousel */}
      <Carousel className="">
        {videos.map((video, index) => (
          <ScrollAnimation key={video.id} animation="fadeUp" delay={200 + index * 50}>
            <div 
              className="carousel-item group relative cursor-pointer"
              onClick={() => handleVideoClick(video)}
            >
              <div className="glass rounded-2xl p-4 border border-red-500/10 hover:border-red-500/30 hover:shadow-lg transition-all duration-300">
                {/* Thumbnail */}
                <div className="relative aspect-video bg-secondary/50 rounded-lg mb-4 overflow-hidden">
                  {video.thumbnail && video.thumbnail !== '/api/placeholder/320/180' ? (
                    <Image 
                      src={video.thumbnail} 
                      alt={video.title}
                      fill
                      className="object-cover"
                    />
                  ) : (
                    <div className="absolute inset-0 bg-gradient-to-br from-red-500/20 to-orange-500/20 flex items-center justify-center">
                      <div className="w-16 h-16 bg-red-500/30 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z"/>
                        </svg>
                      </div>
                    </div>
                  )}
                  
                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                    <div className="w-16 h-16 bg-red-600/80 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                    </div>
                  </div>
                  
                  {/* Duration */}
                  {video.duration && (
                    <div className="absolute bottom-2 right-2 bg-black/80 text-white text-xs px-2 py-1 rounded">
                      {video.duration}
                    </div>
                  )}
                </div>

                {/* Video Info */}
                <div className="space-y-3">
                  <h3 className="font-heading font-bold text-foreground line-clamp-2 group-hover:text-red-500 transition-colors duration-200 text-lg">
                    {video.title}
                  </h3>
                  <p className="text-sm text-muted line-clamp-2 leading-relaxed">
                    {video.description}
                  </p>
                  <div className="flex items-center justify-between text-sm text-muted pt-2 border-t border-border">
                    <span className="font-medium">{video.viewCount} views</span>
                    <span>{new Date(video.publishedAt).toLocaleDateString()}</span>
                  </div>
                </div>
              </div>
            </div>
          </ScrollAnimation>
        ))}
      </Carousel>

      {/* Video Modal */}
      {selectedVideo && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="relative w-full max-w-4xl">
            <div className="glass rounded-2xl p-6 border border-red-500/20">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-heading text-xl font-bold text-foreground">
                  {selectedVideo.title}
                </h3>
                <button
                  onClick={closeModal}
                  className="p-2 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors duration-200"
                >
                  <svg className="w-6 h-6 text-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              
              {/* Video Player Placeholder */}
              <div className="aspect-video bg-secondary/50 rounded-lg mb-4 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-20 h-20 bg-red-500/30 rounded-full flex items-center justify-center mb-4 mx-auto">
                    <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </div>
                  <p className="text-muted">Video player would be embedded here</p>
                  <p className="text-sm text-muted mt-2">
                    In production, this would show the actual YouTube video
                  </p>
                </div>
              </div>
              
              <div className="space-y-3">
                <p className="text-muted">{selectedVideo.description}</p>
                <div className="flex items-center gap-4 text-sm text-muted">
                  <span>{selectedVideo.viewCount} views</span>
                  <span>•</span>
                  <span>{new Date(selectedVideo.publishedAt).toLocaleDateString()}</span>
                  <span>•</span>
                  <span>{selectedVideo.duration}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}