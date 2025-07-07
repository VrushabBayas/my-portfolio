'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { dockItems } from '@/data/socialLinks';

export default function FloatingDock() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsVisible(scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const getItemScale = (index: number) => {
    if (hoveredIndex === null) return 1;
    const distance = Math.abs(index - hoveredIndex);
    if (distance === 0) return 1.2;
    if (distance === 1) return 1.1;
    return 1;
  };

  const getItemTranslateY = (index: number) => {
    if (hoveredIndex === null) return 0;
    const distance = Math.abs(index - hoveredIndex);
    if (distance === 0) return -8;
    if (distance === 1) return -4;
    return 0;
  };

  return (
    <div
      className={`
        fixed bottom-8 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ease-out
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12 pointer-events-none'}
      `}
    >
      {/* Dock Container */}
      <div className="relative">
        {/* Backdrop */}
        <div className="absolute inset-0 bg-background/80 backdrop-blur-xl rounded-2xl border border-border/50 shadow-2xl" />
        
        {/* Dock Items */}
        <div className="relative flex items-end gap-2 p-3">
          {dockItems.map((item, index) => {
            const isActive = pathname === item.href;
            const scale = getItemScale(index);
            const translateY = getItemTranslateY(index);
            
            const isExternal = item.href.startsWith('http');
            const Component = isExternal ? 'a' : Link;
            const linkProps = isExternal 
              ? { href: item.href, target: '_blank', rel: 'noopener noreferrer' }
              : { href: item.href };
            
            return (
              <Component
                key={item.href}
                {...linkProps}
                className={`
                  group relative flex items-center justify-center w-12 h-12 rounded-xl transition-all duration-300 ease-out
                  ${isActive 
                    ? 'bg-primary text-white shadow-lg shadow-primary/25' 
                    : 'bg-secondary/50 hover:bg-secondary text-muted hover:text-foreground'
                  }
                `}
                style={{
                  transform: `scale(${scale}) translateY(${translateY}px)`,
                }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Item Icon */}
                <span className="text-lg transition-transform duration-200 group-hover:scale-110">
                  {item.icon}
                </span>
                
                {/* Tooltip */}
                <div
                  className={`
                    absolute bottom-full mb-2 px-2 py-1 bg-background border border-border rounded-lg text-xs font-medium text-foreground
                    opacity-0 group-hover:opacity-100 transition-all duration-200 pointer-events-none
                    transform translate-y-1 group-hover:translate-y-0
                  `}
                >
                  {item.label}
                  <div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-l-2 border-r-2 border-t-2 border-transparent border-t-border" />
                </div>
                
                {/* Active Indicator */}
                {isActive && (
                  <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-white rounded-full" />
                )}
                
                {/* Ripple Effect */}
                <div className="absolute inset-0 rounded-xl overflow-hidden">
                  <div className="absolute inset-0 bg-white/20 rounded-xl scale-0 group-active:scale-100 transition-transform duration-200" />
                </div>
              </Component>
            );
          })}
        </div>
        
        {/* Dock Reflection Effect */}
        <div className="absolute top-full left-0 right-0 h-8 bg-gradient-to-b from-background/20 to-transparent rounded-b-2xl blur-sm" />
      </div>
    </div>
  );
}