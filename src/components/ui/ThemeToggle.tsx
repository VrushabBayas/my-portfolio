'use client';

import { useThemeContext } from '@/components/layout/ThemeProvider';
import { Theme } from '@/lib/types';
import { useEffect, useState } from 'react';

const themeIcons = {
  light: '☀️',
  dark: '🌙',
  terminal: '💻'
};

const themeLabels = {
  light: 'Light',
  dark: 'Dark',
  terminal: 'Terminal'
};

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useThemeContext();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="flex items-center gap-1 sm:gap-2 p-2 bg-secondary rounded-lg">
        <div className="w-20 sm:w-24 h-10 bg-border rounded-md animate-pulse" />
      </div>
    );
  }

  const handleThemeChange = (newTheme: Theme) => {
    setTheme(newTheme);
  };

  return (
    <div className="flex items-center gap-1 sm:gap-2 p-2 bg-secondary rounded-lg">
      {(Object.keys(themeIcons) as Theme[]).map((themeOption) => (
        <button
          key={themeOption}
          onClick={() => handleThemeChange(themeOption)}
          className={`
            flex items-center gap-1 sm:gap-2 px-2 sm:px-3 py-2 rounded-md text-xs sm:text-sm font-medium transition-all duration-200 min-h-[40px] min-w-[40px] justify-center
            ${theme === themeOption 
              ? 'bg-primary text-white shadow-md' 
              : 'text-muted hover:bg-border hover:text-foreground'
            }
          `}
          aria-label={`Switch to ${themeLabels[themeOption]} theme`}
        >
          <span className="text-base sm:text-lg">{themeIcons[themeOption]}</span>
          <span className="hidden md:inline text-xs">{themeLabels[themeOption]}</span>
        </button>
      ))}
    </div>
  );
}