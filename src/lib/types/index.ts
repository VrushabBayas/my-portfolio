export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  tech: string[];
  github: string;
  live?: string;
  image: string;
  featured: boolean;
  challenges?: string[];
  learnings?: string[];
}

export interface Skill {
  name: string;
  category: 'Frontend' | 'Backend' | 'DevOps' | 'Tools';
  level: number; // 1-5 scale
  icon?: string;
}

export interface Experience {
  company: string;
  position: string;
  duration: string;
  description: string[];
  tech: string[];
}

export interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export type Theme = 'light' | 'dark' | 'terminal';

export interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}