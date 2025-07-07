import PageLayout from '@/components/layout/PageLayout';
import ScrollAnimation from '@/components/ui/ScrollAnimations';

const projects = [
  {
    id: 1,
    title: "MINT",
    description: "Digital Advertising Budget Streamlining Platform. Migrated existing features from React 16.x to 18.x. Optimized core modules for a faster, smoother user experience, eliminating component freezing and reducing response time from 7–8 seconds to milliseconds. Contributed to production deployments by creating release versions on GitHub.",
    category: "Digital Advertising Platform",
    technologies: ["React", "Redux", "JavaScript", "GitHub"],
    color: "from-blue-500/20 to-cyan-500/20",
    borderColor: "border-blue-500/20",
    icon: "💰",
    timeline: "Dec 2022 - April 2025"
  },
  {
    id: 2,
    title: "SAT (Security Assessment Training)",
    description: "A training platform designed to educate users about phishing attack prevention. Led the migration from React 15.x to 16.x. Redesigned and re-skinned the platform for better UI/UX, significantly improving user experience and training effectiveness.",
    category: "Security Training Platform",
    technologies: ["React", "JavaScript", "SCSS", "UI/UX Design"],
    color: "from-red-500/20 to-orange-500/20",
    borderColor: "border-red-500/20",
    icon: "🔒"
  },
  {
    id: 3,
    title: "Circles.Life",
    description: "Telecom Data Dashboard. Built an interactive data dashboard with comprehensive data visualization using Re-charts Library. Developed custom hooks and reusable components while providing ongoing bug fix support for enhanced platform stability.",
    category: "Telecom Data Dashboard",
    technologies: ["React", "Re-charts", "Custom Hooks", "JavaScript"],
    color: "from-green-500/20 to-emerald-500/20",
    borderColor: "border-green-500/20",
    icon: "📱"
  },
  {
    id: 4,
    title: "Wall Web Components",
    description: "A client-side package providing Web Components for paywalls and registration walls. Built using native Web Components technology allowing framework-agnostic usage across any web application. Includes multiple wall types (paywall, regwall, interactive variants) with CDN deployment, comprehensive testing, and AWS infrastructure.",
    category: "Web Components Library",
    technologies: ["Web Components", "TypeScript", "ESBuild", "Jest", "AWS CDN", "Vite"],
    color: "from-indigo-500/20 to-purple-500/20",
    borderColor: "border-indigo-500/20",
    icon: "🧱",
    timeline: "Current Project"
  },
  {
    id: 5,
    title: "LoookIt",
    description: "A real-time cloud-based whiteboard for seamless communication that enables consumers, educators, and support staff to interact easily. Developed the project from scratch, implementing core functionalities. Integrated Socket.io for real-time communication and designed an interactive cloud-based whiteboard.",
    category: "Real-time Communication Platform",
    technologies: ["React", "Socket.io", "Real-time Communication", "Cloud Platform"],
    color: "from-purple-500/20 to-pink-500/20",
    borderColor: "border-purple-500/20",
    icon: "🎨",
    timeline: "July 2018 - June 2019"
  },
  {
    id: 6,
    title: "Kristal.IO",
    description: "Digital investment portfolios platform built with unique trading strategies. Created by renowned traders worldwide using decades of financial expertise.",
    category: "FinTech Platform",
    technologies: ["React", "TypeScript", "D3.js", "Material-UI"],
    color: "from-indigo-500/20 to-blue-500/20",
    borderColor: "border-indigo-500/20",
    icon: "📈"
  },
  {
    id: 7,
    title: "BidWheelz",
    description: "Car auction platform with live bidding functionality. Users can buy and sell used cars through real-time bidding system. Responsible for feature development and bug fixes.",
    category: "Auction Platform",
    technologies: ["React", "Socket.io", "Redux", "Node.js"],
    color: "from-yellow-500/20 to-orange-500/20",
    borderColor: "border-yellow-500/20",
    icon: "🚗"
  }
];

const githubProjects = [
  {
    title: "Loan Calculator in React JS",
    description: "Interactive loan calculator built with React.js featuring dynamic calculations and responsive design.",
    link: "https://github.com/VrushabBayas/LoanCalculator-in-React-JS",
    technologies: ["React", "JavaScript", "CSS3"],
    icon: "🧮"
  },
  {
    title: "Node REST API",
    description: "Comprehensive Node.js REST API boilerplate with authentication, validation, and database integration.",
    link: "https://github.com/VrushabBayas/node-rest-api",
    technologies: ["Node.js", "Express", "MongoDB"],
    icon: "🔗"
  }
];

export default function Projects() {
  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden" aria-label="Projects showcase">
        {/* Background Elements */}
        <div className="absolute inset-0 -z-20">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5"></div>
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        </div>

        {/* Floating Orbs */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
          <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-accent/10 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <ScrollAnimation animation="fadeUp">
              <div className="text-center mb-16">
                <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                  My <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Projects</span>
                </h1>
                <p className="text-xl text-muted max-w-3xl mx-auto leading-relaxed">
                  A showcase of professional work, innovative solutions, and technical excellence across various domains
                </p>
              </div>
            </ScrollAnimation>

            {/* Stats Overview */}
            <ScrollAnimation animation="fadeUp" delay={200}>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
                <div className="glass rounded-2xl p-6 text-center border border-primary/10">
                  <div className="text-2xl font-bold text-primary mb-1">7+</div>
                  <div className="text-sm text-muted">Enterprise Projects</div>
                </div>
                <div className="glass rounded-2xl p-6 text-center border border-accent/10">
                  <div className="text-2xl font-bold text-accent mb-1">5</div>
                  <div className="text-sm text-muted">Different Domains</div>
                </div>
                <div className="glass rounded-2xl p-6 text-center border border-green-500/10">
                  <div className="text-2xl font-bold text-green-500 mb-1">10+</div>
                  <div className="text-sm text-muted">Technologies Used</div>
                </div>
                <div className="glass rounded-2xl p-6 text-center border border-blue-500/10">
                  <div className="text-2xl font-bold text-blue-500 mb-1">7+</div>
                  <div className="text-sm text-muted">Years Experience</div>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </section>

        {/* Professional Projects */}
        <section className="relative py-20 lg:py-32 overflow-hidden" aria-label="Professional projects">
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollAnimation animation="fadeUp">
              <div className="text-center mb-16">
                <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-4">
                  Professional Work
                </h2>
                <p className="text-lg text-muted max-w-2xl mx-auto">
                  Enterprise-level projects showcasing expertise in React, TypeScript, and modern web technologies
                </p>
              </div>
            </ScrollAnimation>

            {/* Projects Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {projects.map((project, index) => (
                <ScrollAnimation key={project.id} animation="fadeUp" delay={index * 100}>
                  <div className="group relative">
                    <div className={`absolute inset-0 bg-gradient-to-br ${project.color} rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-300`}></div>
                    <div className={`relative glass rounded-3xl p-8 h-full ${project.borderColor} group-hover:scale-[1.02] transition-all duration-300 micro-bounce`}>
                      {/* Project Header */}
                      <div className="flex items-start justify-between mb-6">
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 bg-primary/20 rounded-2xl flex items-center justify-center text-2xl">
                            {project.icon}
                          </div>
                          <div>
                            <h3 className="font-heading text-xl font-bold text-foreground">{project.title}</h3>
                            <p className="text-sm text-primary font-medium">{project.category}</p>
                          </div>
                        </div>
                        <button className="p-2 rounded-lg bg-primary/10 hover:bg-primary/20 transition-colors duration-200">
                          <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </button>
                      </div>

                      {/* Project Description */}
                      <p className="text-muted mb-6 leading-relaxed">
                        {project.description}
                      </p>

                      {/* Technologies */}
                      <div className="space-y-3">
                        <h4 className="font-semibold text-foreground text-sm">Technologies Used</h4>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="px-3 py-1 bg-secondary/50 rounded-lg text-xs font-medium text-muted hover:text-foreground hover:bg-secondary transition-colors duration-200"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Hover Effect Overlay */}
                      <div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                    </div>
                  </div>
                </ScrollAnimation>
              ))}
            </div>
          </div>
        </section>

        {/* GitHub Projects */}
        <section className="relative py-20 lg:py-32 overflow-hidden" aria-label="Open source projects">
          <div className="absolute inset-0 bg-gradient-to-t from-secondary/20 via-transparent to-transparent"></div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollAnimation animation="fadeUp">
              <div className="text-center mb-16">
                <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-4">
                  Open Source & Personal Projects
                </h2>
                <p className="text-lg text-muted max-w-2xl mx-auto">
                  Exploring new technologies and sharing knowledge through open source contributions
                </p>
              </div>
            </ScrollAnimation>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
              {githubProjects.map((project, index) => (
                <ScrollAnimation key={project.title} animation="fadeUp" delay={index * 150}>
                  <div className="group relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl blur-lg group-hover:blur-xl transition-all duration-300"></div>
                    <div className="relative glass rounded-2xl p-6 border border-primary/10 group-hover:scale-105 transition-all duration-300">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center gap-3">
                          <span className="text-2xl">{project.icon}</span>
                          <div>
                            <h3 className="font-heading text-lg font-bold text-foreground">{project.title}</h3>
                            <a 
                              href={project.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-sm text-primary hover:text-primary/80 transition-colors duration-200"
                            >
                              View on GitHub ↗
                            </a>
                          </div>
                        </div>
                      </div>
                      
                      <p className="text-muted mb-4 text-sm leading-relaxed">
                        {project.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-1 bg-secondary/30 rounded text-xs text-muted"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </ScrollAnimation>
              ))}
            </div>

            {/* Skills Highlight */}
            <ScrollAnimation animation="fadeUp" delay={300}>
              <div className="glass rounded-3xl p-8 lg:p-12 border border-primary/10">
                <div className="text-center mb-8">
                  <h3 className="font-heading text-2xl lg:text-3xl font-bold text-foreground mb-4">
                    🚀 Technical Excellence
                  </h3>
                  <p className="text-muted max-w-2xl mx-auto">
                    Expertise in modern web technologies with focus on performance, scalability, and user experience
                  </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  <div className="text-center group">
                    <div className="w-16 h-16 bg-blue-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <span className="text-2xl">⚛️</span>
                    </div>
                    <h4 className="font-heading text-lg font-semibold text-foreground mb-2">Frontend Mastery</h4>
                    <p className="text-sm text-muted">React, TypeScript, Next.js with modern CSS and responsive design principles</p>
                  </div>

                  <div className="text-center group">
                    <div className="w-16 h-16 bg-green-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <span className="text-2xl">🔧</span>
                    </div>
                    <h4 className="font-heading text-lg font-semibold text-foreground mb-2">Full-Stack Development</h4>
                    <p className="text-sm text-muted">Node.js, Express, databases, and API design following best practices</p>
                  </div>

                  <div className="text-center group">
                    <div className="w-16 h-16 bg-purple-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <span className="text-2xl">⚡</span>
                    </div>
                    <h4 className="font-heading text-lg font-semibold text-foreground mb-2">Performance Focus</h4>
                    <p className="text-sm text-muted">Code optimization, bundle analysis, and user experience enhancement</p>
                  </div>
                </div>
              </div>
            </ScrollAnimation>

            {/* CTA Section */}
            <ScrollAnimation animation="fadeUp" delay={400}>
              <div className="text-center mt-16">
                <div className="glass rounded-3xl p-8 lg:p-12 border border-accent/10">
                  <h3 className="font-heading text-2xl lg:text-3xl font-bold text-foreground mb-4">
                    Ready to Collaborate?
                  </h3>
                  <p className="text-lg text-muted mb-8 max-w-2xl mx-auto">
                    Let&apos;s discuss your next project and create something extraordinary together.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button className="group relative px-8 py-4 button-glow text-white rounded-2xl font-medium overflow-hidden transition-all duration-300 micro-bounce ripple-effect">
                      <span className="relative flex items-center justify-center gap-2">
                        Start a Project
                        <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </span>
                    </button>
                    
                    <a 
                      href="/Resume-Vrushabh_Bayas.pdf" 
                      download="Vrushabh_Bayas_Resume.pdf"
                      className="group px-8 py-4 bg-card/50 backdrop-blur-sm border border-border rounded-2xl font-medium text-foreground hover:bg-card transition-all duration-300 micro-bounce ripple-effect inline-flex items-center justify-center gap-2"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                      Download Resume
                    </a>
                  </div>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </section>
    </PageLayout>
  );
}