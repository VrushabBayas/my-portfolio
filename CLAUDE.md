# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- `npm run dev` - Start development server with Turbopack (Next.js 15)
- `npm run build` - Build for production
- `npm run start` - Start production server  
- `npm run lint` - Run ESLint

## Project Architecture

### Tech Stack
- **Next.js 15** with App Router and Turbopack
- **React 19** with TypeScript
- **Tailwind CSS v4** with custom design tokens
- **Three Theme System**: Light, Dark, Terminal (Nightfox-inspired)

### Core Architecture Patterns

**API Integration**:
- Server-side API routes in `/src/app/api/` for external content (YouTube, Medium)
- Client-side caching system via `ApiCache` utility with configurable durations
- Graceful fallback to mock data when APIs unavailable
- Type-safe API responses with comprehensive error handling

**Theme System**:
- CSS custom properties in `globals.css` with three complete theme variants
- Context-based theme switching with SSR hydration handling
- Terminal theme features authentic CLI aesthetics with glow effects

**Component Structure**:
- `/components/layout/` - Core layout components (Navigation, ThemeProvider, PageLayout)
- `/components/content/` - Content-specific components (YouTubeSection, MediumSection) 
- `/components/ui/` - Reusable UI components (animations, backgrounds, interactions)
- `/components/shared/` - Shared components across pages

**Animation & Interactions**:
- Custom CSS animations with GPU acceleration and reduced motion support
- Intersection Observer-based scroll animations via `ScrollAnimations.tsx`
- Glassmorphism effects controlled by `.glass` CSS class
- Performance optimizations for mobile (reduced particle counts, simplified animations)

### Key Implementation Details

**Content Management**:
- YouTube integration requires `YOUTUBE_API_KEY` environment variable
- Medium integration uses RSS parsing (no API key needed)
- Both APIs implement 6-hour and 1-hour caching respectively
- Content components show real-time data vs fallback indicators

**Styling Conventions**:
- Three-theme CSS system with automatic dark mode detection override
- Custom Tailwind configuration with theme-aware design tokens
- Responsive breakpoints: mobile-first with xs (475px) custom breakpoint
- Glass effects: Use `.glass` class for consistent glassmorphism styling

**Performance Features**:
- Lazy loading for images and animations
- GPU-accelerated transforms using `translateZ(0)` and `backface-visibility: hidden`
- Conditional animation complexity based on device capabilities
- Tree-shaking and code splitting via Next.js 15

### Environment Setup

Required for full functionality:
```bash
# .env.local
YOUTUBE_API_KEY=your_youtube_api_key_here  # Optional - uses fallback without
MEDIUM_RSS_URL=https://medium.com/feed/@username  # Optional - defaults to Vrushabh's feed
```

### Content Updates

- Personal information: Update `/src/app/layout.tsx` metadata and page content
- Project data: Modify `/src/data/portfolio.ts` 
- API configurations: Adjust cache durations in `/src/lib/utils/apiCache.ts`
- Theme customization: Edit CSS custom properties in `/src/app/globals.css`

### Deployment Notes

- Optimized for Vercel with zero-config deployment
- Netlify support via `netlify.toml`
- Static export capable for other hosting platforms
- All assets optimized with Next.js Image component and proper external domain configuration

### Commit Message Guidelines

- Never add any claude reference while creating commit message in the end