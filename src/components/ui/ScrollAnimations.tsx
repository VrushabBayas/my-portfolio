'use client';

import { useEffect, useRef, useCallback } from 'react';

interface ScrollAnimationProps {
  children: React.ReactNode;
  animation?: 'fadeUp' | 'fadeLeft' | 'fadeRight' | 'scale' | 'slideUp';
  delay?: number;
  threshold?: number;
  className?: string;
}

export default function ScrollAnimation({ 
  children, 
  animation = 'fadeUp', 
  delay = 0, 
  threshold = 0.1,
  className = ''
}: ScrollAnimationProps) {
  const elementRef = useRef<HTMLDivElement>(null);

  const handleIntersection = useCallback((entries: IntersectionObserverEntry[]) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const element = entry.target as HTMLElement;
        if (delay > 0) {
          requestAnimationFrame(() => {
            setTimeout(() => {
              element.classList.add('animate-in');
            }, delay);
          });
        } else {
          requestAnimationFrame(() => {
            element.classList.add('animate-in');
          });
        }
      }
    });
  }, [delay]);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(handleIntersection, { 
      threshold,
      rootMargin: '50px 0px'
    });

    observer.observe(element);

    return () => observer.disconnect();
  }, [handleIntersection, threshold]);

  const getAnimationClasses = () => {
    switch (animation) {
      case 'fadeUp':
        return 'scroll-fade-up';
      case 'fadeLeft':
        return 'scroll-fade-left';
      case 'fadeRight':
        return 'scroll-fade-right';
      case 'scale':
        return 'scroll-scale';
      case 'slideUp':
        return 'scroll-slide-up';
      default:
        return 'scroll-fade-up';
    }
  };

  return (
    <div 
      ref={elementRef} 
      className={`scroll-animation ${getAnimationClasses()} ${className}`}
    >
      {children}
    </div>
  );
}

// Batch scroll animations for better performance
export function ScrollAnimationBatch({ 
  children, 
  stagger = 100,
  className = ''
}: { 
  children: React.ReactNode[]; 
  stagger?: number;
  className?: string;
}) {
  return (
    <div className={className}>
      {children.map((child, index) => (
        <ScrollAnimation 
          key={index} 
          delay={index * stagger}
          animation="fadeUp"
        >
          {child}
        </ScrollAnimation>
      ))}
    </div>
  );
}