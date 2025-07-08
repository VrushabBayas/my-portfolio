'use client';

import { createContext, useContext, ReactNode } from 'react';
import { useTheme } from '@/lib/hooks/useTheme';
import { ThemeContextType } from '@/lib/types';

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const { theme, setTheme, toggleTheme, mounted } = useTheme();

  if (!mounted) {
    return (
      <div className="min-h-screen bg-white">
        {children}
      </div>
    );
  }

  return (
    <ThemeContext.Provider value={{ theme, setTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useThemeContext() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    // Provide fallback for SSR
    return { theme: 'light' as const, setTheme: () => {}, toggleTheme: () => {} };
  }
  return context;
}