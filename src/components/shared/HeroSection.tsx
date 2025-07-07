import { ReactNode } from 'react';
import HeroBackground from './HeroBackground';

interface HeroSectionProps {
  children: ReactNode;
  className?: string;
  backgroundVariant?: 'default' | 'minimal';
  ariaLabel?: string;
}

export default function HeroSection({ 
  children, 
  className = "", 
  backgroundVariant = 'default',
  ariaLabel = "Hero section"
}: HeroSectionProps) {
  return (
    <section 
      className={`relative min-h-screen flex items-center justify-center overflow-hidden ${className}`}
      aria-label={ariaLabel}
    >
      <HeroBackground variant={backgroundVariant} />
      
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {children}
      </div>
    </section>
  );
}