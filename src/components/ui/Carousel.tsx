'use client';

import { useRef } from 'react';

interface CarouselProps {
  children: React.ReactNode;
  className?: string;
  showNavigation?: boolean;
}

export default function Carousel({ children, className = "", showNavigation = true }: CarouselProps) {
  const carouselRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (carouselRef.current) {
      const cardWidth = carouselRef.current.children[0]?.clientWidth || 300;
      carouselRef.current.scrollBy({
        left: -cardWidth * 2,
        behavior: 'smooth'
      });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      const cardWidth = carouselRef.current.children[0]?.clientWidth || 300;
      carouselRef.current.scrollBy({
        left: cardWidth * 2,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className={`relative ${className}`}>
      {/* Navigation Buttons */}
      {showNavigation && (
        <>
          <button
            onClick={scrollLeft}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-background/80 backdrop-blur-sm border border-border rounded-full shadow-lg hover:bg-background transition-all duration-200 flex items-center justify-center group"
            aria-label="Scroll left"
          >
            <svg className="w-5 h-5 text-foreground group-hover:text-primary transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button
            onClick={scrollRight}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-background/80 backdrop-blur-sm border border-border rounded-full shadow-lg hover:bg-background transition-all duration-200 flex items-center justify-center group"
            aria-label="Scroll right"
          >
            <svg className="w-5 h-5 text-foreground group-hover:text-primary transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </>
      )}

      {/* Carousel Container */}
      <div
        ref={carouselRef}
        className="flex gap-4 overflow-x-auto scrollbar-hide scroll-smooth px-1"
        style={{
          scrollSnapType: 'x mandatory',
          WebkitOverflowScrolling: 'touch'
        }}
      >
        {children}
      </div>
    </div>
  );
}