'use client';

import { useState, useEffect } from 'react';
import { Theme } from '@/lib/types';

export function useTheme() {
  const [theme, setTheme] = useState<Theme>('light');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    // Get theme from localStorage, default to light theme
    const savedTheme = localStorage.getItem('theme') as Theme;
    if (savedTheme && ['light', 'dark', 'terminal'].includes(savedTheme)) {
      setTheme(savedTheme);
    }
    // Always default to light theme for first visit
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const root = document.documentElement;
    
    // Remove existing theme classes
    root.removeAttribute('data-theme');
    
    // Apply new theme
    if (theme !== 'light') {
      root.setAttribute('data-theme', theme);
    }
    
    // Save to localStorage
    localStorage.setItem('theme', theme);
  }, [theme, mounted]);

  const toggleTheme = () => {
    const themes: Theme[] = ['light', 'dark', 'terminal'];
    const currentIndex = themes.indexOf(theme);
    const nextIndex = (currentIndex + 1) % themes.length;
    setTheme(themes[nextIndex]);
  };

  return {
    theme,
    setTheme,
    toggleTheme,
    mounted
  };
}