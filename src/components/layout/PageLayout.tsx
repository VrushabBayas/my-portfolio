import { ReactNode } from 'react';
import Navigation from '@/components/layout/Navigation';
import ParticleBackground from '@/components/ui/ParticleBackground';
import ScrollProgress from '@/components/ui/ScrollProgress';
import FloatingDock from '@/components/ui/FloatingDock';

interface PageLayoutProps {
  children: ReactNode;
  className?: string;
}

export default function PageLayout({ children, className = "" }: PageLayoutProps) {
  return (
    <div className={`min-h-screen bg-background ${className}`}>
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      <ScrollProgress />
      <ParticleBackground />
      <Navigation />
      
      <main id="main-content" className="pt-16">
        {children}
      </main>
      
      <FloatingDock />
    </div>
  );
}