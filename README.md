# 🚀 Vrushabh Bayas - Portfolio

A modern, interactive portfolio website built with Next.js 15, TypeScript, and Tailwind CSS featuring advanced animations, three theme system, and cutting-edge web technologies.

## ✨ Features

### 🎨 **Modern Design System**
- **Three Theme Support**: Light, Dark, and Nightfox Terminal themes
- **Glassmorphism Effects**: Modern backdrop blur and transparency effects
- **3D Animations**: Card hover effects and photo integration with transforms
- **Particle Background**: Interactive animated particle system with connecting lines

### 🎭 **Advanced Animations**
- **Scroll-Triggered Animations**: IntersectionObserver-based reveals with stagger timing
- **Typewriter Effect**: Cycling text animation for dynamic content
- **Micro-Interactions**: Ripple effects, magnetic buttons, and smooth hover states
- **Floating Dock Navigation**: MacOS-style dock that appears on scroll

### 📱 **Performance & Accessibility**
- **Mobile Optimized**: Responsive design with touch-friendly interactions
- **Performance Optimized**: GPU acceleration, reduced motion support, and efficient animations
- **Accessibility First**: WCAG compliant with screen reader support, keyboard navigation, and high contrast mode
- **SEO Ready**: Optimized meta tags and semantic HTML structure

### 🛠 **Technical Stack**
- **Next.js 15** with App Router and Turbopack
- **TypeScript** for type safety
- **Tailwind CSS v4** with custom design tokens
- **Modern CSS** with custom properties and advanced animations
- **Inter + Poppins** fonts for typography hierarchy
- **JetBrains Mono** for code elements

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/my-portfolio.git
   cd my-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   # Edit .env.local with your configuration
   ```

4. **Add your photo** (optional)
   ```bash
   # Add your profile photo to public/images/profile.jpg
   # The placeholder will automatically be replaced
   ```

5. **Start development server**
   ```bash
   npm run dev
   ```

6. **Open in browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🏗 Build & Deploy

### Build for Production
```bash
npm run build
npm start
```

### Deployment Options

#### **Vercel (Recommended)**
1. Push to GitHub
2. Connect repository to Vercel
3. Deploy automatically with zero configuration

#### **Netlify**
1. Push to GitHub
2. Connect repository to Netlify
3. Build settings are already configured in `netlify.toml`

#### **Other Platforms**
- Supports any platform that can serve static files
- Build output is in the `out` directory after running `npm run build`

## 🎨 Customization

### **Themes**
Edit theme colors in `src/app/globals.css`:
```css
:root {
  --primary: #2563eb;    /* Primary color */
  --accent: #7c3aed;     /* Accent color */
  --background: #fafafa; /* Background */
  /* ... */
}
```

### **Content**
Update personal information in:
- `PORTFOLIOINFO.md` - Reference for content
- `src/app/page.tsx` - Main page content
- `src/app/layout.tsx` - Meta tags and site info

### **Animations**
Modify animation settings in `src/app/globals.css`:
```css
.animate-blob {
  animation: blob 7s infinite; /* Adjust timing */
}
```

## 📁 Project Structure

```
src/
├── app/                    # Next.js app directory
│   ├── globals.css        # Global styles and themes
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Homepage
├── components/
│   ├── layout/
│   │   ├── Navigation.tsx # Main navigation
│   │   └── ThemeProvider.tsx # Theme context
│   └── ui/
│       ├── FloatingDock.tsx    # Floating navigation dock
│       ├── ParticleBackground.tsx # Particle animation system
│       ├── ScrollAnimations.tsx   # Scroll-triggered animations
│       ├── ScrollProgress.tsx     # Scroll progress indicator
│       ├── ThemeToggle.tsx       # Theme switcher
│       └── TypewriterText.tsx    # Typewriter animation
└── lib/
    └── types.ts           # TypeScript type definitions
```

## 🎯 Performance Features

- **GPU Acceleration**: Hardware-accelerated animations
- **Reduced Motion**: Respects user motion preferences
- **Mobile Optimization**: Reduced particle count and simplified animations on mobile
- **Lazy Loading**: Images and components loaded on demand
- **Cache Headers**: Optimized caching for static assets

## ♿ Accessibility Features

- **Keyboard Navigation**: Full keyboard support
- **Screen Reader Support**: Proper ARIA labels and semantic HTML
- **High Contrast Mode**: Enhanced visibility for users with visual impairments
- **Skip Links**: Quick navigation to main content
- **Focus Management**: Clear focus indicators and logical tab order

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript compiler

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/yourusername/my-portfolio/issues).

## 📞 Contact

- **Website**: [https://yourportfolio.com](https://yourportfolio.com)
- **Email**: your.email@example.com
- **LinkedIn**: [Your LinkedIn Profile](https://linkedin.com/in/yourprofile)
- **GitHub**: [Your GitHub Profile](https://github.com/yourusername)

---

Built with ❤️ by Vrushabh Bayas