import { Project, Skill, Experience } from '@/lib/types';

export const personalInfo = {
  name: 'Vrushabh Bayas',
  role: 'Software Engineer',
  location: 'Pune, India',
  age: 29,
  experience: '6+ years',
  focus: 'Frontend Development',
  bio: 'Passionate about terminal-based development workflows and building performance-focused UIs. Currently planning a moto-vlogging channel and Instagram content strategy around adventure bike touring in India.',
  email: 'contact@vrushabbayas.dev',
  social: {
    github: 'https://github.com/VrushabBayas',
    linkedin: 'https://linkedin.com/in/vrushabbayas',
    twitter: 'https://twitter.com/vrushabbayas',
  },
};

export const skills: Skill[] = [
  // Frontend
  { name: 'React', category: 'Frontend', level: 5 },
  { name: 'TypeScript', category: 'Frontend', level: 4 },
  { name: 'Next.js', category: 'Frontend', level: 4 },
  { name: 'Redux', category: 'Frontend', level: 4 },
  { name: 'Tailwind CSS', category: 'Frontend', level: 5 },
  { name: 'SCSS', category: 'Frontend', level: 4 },
  { name: 'HTML/CSS', category: 'Frontend', level: 5 },
  { name: 'JavaScript', category: 'Frontend', level: 5 },
  { name: 'Ant Design', category: 'Frontend', level: 4 },
  { name: 'Highcharts', category: 'Frontend', level: 3 },
  
  // Backend
  { name: 'Node.js', category: 'Backend', level: 4 },
  { name: 'Express.js', category: 'Backend', level: 4 },
  { name: 'PostgreSQL', category: 'Backend', level: 3 },
  { name: 'MySQL', category: 'Backend', level: 3 },
  { name: 'MongoDB', category: 'Backend', level: 3 },
  { name: 'CouchDB', category: 'Backend', level: 2 },
  
  // DevOps
  { name: 'Docker', category: 'DevOps', level: 3 },
  { name: 'CI/CD', category: 'DevOps', level: 3 },
  { name: 'AWS', category: 'DevOps', level: 3 },
  
  // Tools
  { name: 'Neovim', category: 'Tools', level: 5 },
  { name: 'tmux', category: 'Tools', level: 4 },
  { name: 'Git', category: 'Tools', level: 5 },
  { name: 'Linux/Unix', category: 'Tools', level: 4 },
  { name: 'Zsh', category: 'Tools', level: 4 },
];

export const projects: Project[] = [
  {
    id: 'loan-calculator',
    title: 'Loan Calculator',
    description: 'Interactive loan calculator built with React.js featuring real-time calculations and responsive design.',
    longDescription: 'A comprehensive loan calculator application that helps users calculate monthly payments, interest rates, and loan terms. Features include amortization schedules, comparison tools, and export functionality.',
    tech: ['React', 'JavaScript', 'CSS3', 'HTML5'],
    github: 'https://github.com/VrushabBayas/LoanCalculator-in-React-JS',
    live: 'https://vrushabbayas.github.io/LoanCalculator-in-React-JS/',
    image: '/projects/loan-calculator.png',
    featured: true,
    challenges: [
      'Implementing real-time calculations with performance optimization',
      'Creating responsive design for mobile devices',
      'Building intuitive user interface for complex financial calculations'
    ],
    learnings: [
      'Advanced React state management',
      'Financial calculation algorithms',
      'Performance optimization techniques'
    ]
  },
  {
    id: 'node-rest-api',
    title: 'Node.js REST API',
    description: 'Scalable REST API boilerplate with authentication, validation, and comprehensive documentation.',
    longDescription: 'A production-ready Node.js REST API boilerplate featuring JWT authentication, input validation, error handling, and comprehensive API documentation.',
    tech: ['Node.js', 'Express.js', 'MongoDB', 'JWT', 'Swagger'],
    github: 'https://github.com/VrushabBayas/node-rest-api',
    image: '/projects/node-api.png',
    featured: true,
    challenges: [
      'Implementing secure authentication system',
      'Designing scalable API architecture',
      'Creating comprehensive error handling'
    ],
    learnings: [
      'API security best practices',
      'MongoDB optimization techniques',
      'Automated testing strategies'
    ]
  },
  {
    id: 'circles-life-dashboard',
    title: 'Circles.Life Dashboard',
    description: 'Comprehensive telecom dashboard with interactive charts and data visualizations for operational decisions.',
    longDescription: 'Built a dashboard for telecom client featuring real-time data visualization, interactive charts, and analytics tools to improve operational decision-making.',
    tech: ['React', 'TypeScript', 'Highcharts', 'Tailwind CSS', 'Redux'],
    github: '#',
    image: '/projects/circles-dashboard.png',
    featured: true,
    challenges: [
      'Handling large datasets with performance optimization',
      'Creating complex data visualizations',
      'Implementing real-time updates'
    ],
    learnings: [
      'Advanced charting techniques',
      'Data visualization best practices',
      'Performance optimization for large datasets'
    ]
  },
  {
    id: 'selectable-table-hoc',
    title: 'Selectable Table HOC',
    description: 'Higher-Order Component for React tables with dynamic selection capabilities and reusable logic.',
    longDescription: 'A proof-of-concept HOC that enables column, row, and cell selection with dynamic checkbox states and reusable logic for any table implementation.',
    tech: ['React', 'TypeScript', 'HOC Pattern', 'Custom Hooks'],
    github: '#',
    image: '/projects/selectable-table.png',
    featured: false,
    challenges: [
      'Designing flexible HOC architecture',
      'Managing complex selection states',
      'Ensuring reusability across different table implementations'
    ],
    learnings: [
      'Advanced React patterns',
      'HOC design principles',
      'State management optimization'
    ]
  }
];

export const experience: Experience[] = [
  {
    company: 'Circles.Life',
    position: 'Frontend Developer',
    duration: '2022 - Present',
    description: [
      'Built comprehensive dashboard for telecom client with interactive charts and data visualizations',
      'Improved operational decision-making through data-driven UI components',
      'Implemented performance optimizations reducing load times by 40%',
      'Led frontend architecture decisions for scalable component design'
    ],
    tech: ['React', 'TypeScript', 'Highcharts', 'Tailwind CSS', 'Redux']
  },
  {
    company: 'Previous Companies',
    position: 'Software Engineer',
    duration: '2018 - 2022',
    description: [
      'Developed and maintained React applications with focus on performance',
      'Implemented custom table components with dynamic selection capabilities',
      'Collaborated with backend teams for API integration and optimization',
      'Mentored junior developers on React best practices and code quality'
    ],
    tech: ['React', 'JavaScript', 'Node.js', 'Express.js', 'PostgreSQL']
  }
];

export const achievements = [
  'Built performance-optimized UIs following DRY, KISS, and SOLID principles',
  'Created reusable component library reducing development time by 30%',
  'Implemented CI/CD pipelines improving deployment efficiency',
  'Mentored 5+ junior developers on modern React development practices'
];