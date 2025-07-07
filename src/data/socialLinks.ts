export interface SocialLink {
  name: string;
  icon: string;
  url: string;
  description: string;
  color: string;
  borderColor: string;
}

export const socialLinks: SocialLink[] = [
  {
    name: 'GitHub',
    icon: '🔗',
    url: 'https://github.com/VrushabBayas',
    description: 'Open source projects and contributions',
    color: 'from-gray-500/20 to-gray-600/20',
    borderColor: 'border-gray-500/20'
  },
  {
    name: 'LinkedIn',
    icon: '💼',
    url: 'https://www.linkedin.com/in/vrushabh-bayas-32ba8415b/',
    description: 'Professional networking and career updates',
    color: 'from-blue-500/20 to-blue-600/20',
    borderColor: 'border-blue-500/20'
  },
  {
    name: 'Twitter/X',
    icon: '🐦',
    url: 'https://twitter.com/VrushabBayas',
    description: 'Tech updates and coding thoughts',
    color: 'from-sky-500/20 to-blue-500/20',
    borderColor: 'border-sky-500/20'
  },
  {
    name: 'YouTube',
    icon: '🎬',
    url: 'https://www.youtube.com/@codingfun',
    description: 'Programming tutorials and coding adventures',
    color: 'from-red-500/20 to-red-600/20',
    borderColor: 'border-red-500/20'
  },
  {
    name: 'Medium',
    icon: '📝',
    url: 'https://medium.com/@vrushabh-bayas',
    description: 'Technical articles and development insights',
    color: 'from-green-500/20 to-green-600/20',
    borderColor: 'border-green-500/20'
  }
];

// Navigation dock items (subset of social links + navigation)
export interface DockItem {
  icon: string;
  label: string;
  href: string;
}

export const dockItems: DockItem[] = [
  { icon: '🏠', label: 'Home', href: '/' },
  { icon: '👨‍💼', label: 'About', href: '/about' },
  { icon: '💼', label: 'Projects', href: '/projects' },
  { icon: '📧', label: 'Contact', href: '/contact' },
  { icon: '🎬', label: 'YouTube', href: 'https://www.youtube.com/@codingfun' },
];