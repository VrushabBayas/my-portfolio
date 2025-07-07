import PageLayout from '@/components/layout/PageLayout';
import ScrollAnimation from '@/components/ui/ScrollAnimations';
import YouTubeSection from '@/components/content/YouTubeSection';
import MediumSection from '@/components/content/MediumSection';

export default function About() {
  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden" aria-label="About me introduction">
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
                  About <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Vrushabh</span>
                </h1>
                <p className="text-xl text-muted max-w-3xl mx-auto leading-relaxed">
                  Software Engineer, Content Creator, and Technology Enthusiast
                </p>
              </div>
            </ScrollAnimation>

            {/* Bio Section */}
            <ScrollAnimation animation="fadeUp" delay={200}>
              <div className="glass rounded-3xl p-8 lg:p-12 mb-16 border border-primary/20">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  <div className="space-y-6">
                    <h2 className="font-heading text-2xl lg:text-3xl font-bold text-foreground">
                      👋 Hi, I&apos;m Vrushabh Bayas
                    </h2>
                    <div className="space-y-4 text-lg text-muted leading-relaxed">
                      <p>
                        I am an experienced <strong className="text-primary">React.js Developer</strong> with <strong className="text-accent">7+ years</strong> of expertise 
                        in building high-performance, scalable web applications. Proficient in <strong className="text-primary">React.js, Redux, Webpack, and JavaScript (ES6+)</strong>, 
                        I craft optimized and responsive user interfaces.
                      </p>
                      <p>
                        Throughout my career, I&apos;ve successfully delivered enterprise projects across 
                        various domains including <strong className="text-accent">Digital Advertising, Telecom, Security, and Real-time Communication</strong>. 
                        I excel at performance profiling, debugging, and implementing best practices in front-end development, 
                        including migrating applications from React 15.x/16.x to React 18.x.
                      </p>
                      <p>
                        Beyond coding, I&apos;m passionate about knowledge sharing through my <strong className="text-accent">&quot;Coding Fun&quot; YouTube channel</strong> 
                        and technical writing. I believe in continuous learning and staying ahead of the curve with emerging technologies 
                        and industry best practices.
                      </p>
                    </div>
                  </div>

                  {/* What I Do Cards */}
                  <div className="space-y-4">
                    <h3 className="font-heading text-xl font-bold text-foreground mb-6">What I Do</h3>
                    
                    {/* Web Development Card */}
                    <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-4 hover:bg-card transition-all duration-300 micro-bounce">
                      <div className="flex items-center gap-4">
                        <div className="w-16 h-16 bg-blue-500/20 rounded-xl flex items-center justify-center">
                          <span className="text-2xl">💻</span>
                        </div>
                        <div>
                          <h4 className="font-heading font-bold text-foreground">Frontend Development</h4>
                          <p className="text-sm text-muted">
                            Building responsive, accessible, and performant web applications using React.js, TypeScript, and modern development tools.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* YouTube Card */}
                    <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-4 hover:bg-card transition-all duration-300 micro-bounce">
                      <div className="flex items-center gap-4">
                        <div className="w-16 h-16 bg-red-500/20 rounded-xl flex items-center justify-center">
                          <span className="text-2xl">🎬</span>
                        </div>
                        <div>
                          <h4 className="font-heading font-bold text-foreground">Technical Content Creator</h4>
                          <p className="text-sm text-muted">
                            Sharing programming knowledge and web development insights through &quot;Coding Fun&quot; YouTube channel and technical articles.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Gaming Card */}
                    <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-4 hover:bg-card transition-all duration-300 micro-bounce">
                      <div className="flex items-center gap-4">
                        <div className="w-16 h-16 bg-green-500/20 rounded-xl flex items-center justify-center">
                          <span className="text-2xl">🧩</span>
                        </div>
                        <div>
                          <h4 className="font-heading font-bold text-foreground">Problem Solver</h4>
                          <p className="text-sm text-muted">
                            Passionate about solving complex technical challenges and optimizing user experiences through innovative solutions.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </section>

        {/* Stats Section */}
        <section className="relative py-20 lg:py-32 overflow-hidden" aria-label="Professional achievements">
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollAnimation animation="fadeUp">
              <div className="text-center mb-16">
                <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-4">
                  Professional Journey
                </h2>
                <p className="text-lg text-muted max-w-2xl mx-auto">
                  Key milestones and achievements in my software engineering career
                </p>
              </div>
            </ScrollAnimation>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
              <ScrollAnimation animation="scale" delay={100}>
                <div className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                  <div className="relative glass rounded-3xl p-4 sm:p-6 lg:p-8 text-center group-hover:scale-105 transition-all duration-300 border border-primary/20">
                    <div className="font-heading text-3xl lg:text-4xl font-bold text-primary mb-2">7+</div>
                    <div className="text-lg font-semibold text-foreground mb-1">Years</div>
                    <div className="text-sm text-muted">React.js Experience</div>
                  </div>
                </div>
              </ScrollAnimation>

              <ScrollAnimation animation="scale" delay={200}>
                <div className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-accent/20 to-green-500/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                  <div className="relative glass rounded-3xl p-4 sm:p-6 lg:p-8 text-center group-hover:scale-105 transition-all duration-300 border border-accent/20">
                    <div className="font-heading text-3xl lg:text-4xl font-bold text-accent mb-2">30k+</div>
                    <div className="text-lg font-semibold text-foreground mb-1">Lines of Code</div>
                    <div className="text-sm text-muted">Written & Maintained</div>
                  </div>
                </div>
              </ScrollAnimation>

              <ScrollAnimation animation="scale" delay={300}>
                <div className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                  <div className="relative glass rounded-3xl p-4 sm:p-6 lg:p-8 text-center group-hover:scale-105 transition-all duration-300 border border-green-500/20">
                    <div className="font-heading text-3xl lg:text-4xl font-bold text-green-500 mb-2">6+</div>
                    <div className="text-lg font-semibold text-foreground mb-1">Technical Skills</div>
                    <div className="text-sm text-muted">Mastered Technologies</div>
                  </div>
                </div>
              </ScrollAnimation>

              <ScrollAnimation animation="scale" delay={400}>
                <div className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                  <div className="relative glass rounded-3xl p-4 sm:p-6 lg:p-8 text-center group-hover:scale-105 transition-all duration-300 border border-blue-500/20">
                    <div className="font-heading text-3xl lg:text-4xl font-bold text-blue-500 mb-2">MSC</div>
                    <div className="text-lg font-semibold text-foreground mb-1">Computer Science</div>
                    <div className="text-sm text-muted">Nowrojee Wadia College</div>
                  </div>
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </section>

        {/* Professional Experience Section */}
        <section className="relative py-20 lg:py-32 overflow-hidden" aria-label="Professional experience">
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollAnimation animation="fadeUp">
              <div className="text-center mb-16">
                <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-4">
                  Professional Experience
                </h2>
                <p className="text-lg text-muted max-w-3xl mx-auto">
                  7+ years of expertise in React.js development across leading technology companies
                </p>
              </div>
            </ScrollAnimation>

            <div className="space-y-8">
              {/* Josh Software */}
              <ScrollAnimation animation="fadeUp" delay={100}>
                <div className="glass rounded-3xl p-8 border border-primary/20">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                    <div>
                      <h3 className="font-heading text-2xl font-bold text-foreground mb-2">Senior Software Engineer</h3>
                      <p className="text-primary font-semibold text-lg">Josh Software Private Limited</p>
                      <p className="text-muted">Pune, India</p>
                    </div>
                    <div className="mt-4 lg:mt-0">
                      <span className="bg-primary/10 text-primary px-4 py-2 rounded-full font-medium">
                        Feb 2020 - Present
                      </span>
                    </div>
                  </div>
                  <div className="space-y-3 text-muted">
                    <p>• Developed and optimized web-based applications using React.js, Redux, and Webpack</p>
                    <p>• Migrated features from React 16.x to React 18.x, improving component performance and load times</p>
                    <p>• Coordinated with backend developers to ensure seamless integration of APIs and UI components</p>
                    <p>• Conducted code reviews and mentorship, improving team efficiency and code quality</p>
                    <p>• Implemented best practices for TDD, unit testing, and integration testing</p>
                  </div>
                </div>
              </ScrollAnimation>

              {/* Spring Computing */}
              <ScrollAnimation animation="fadeUp" delay={200}>
                <div className="glass rounded-3xl p-8 border border-accent/20">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                    <div>
                      <h3 className="font-heading text-2xl font-bold text-foreground mb-2">Software Engineer</h3>
                      <p className="text-accent font-semibold text-lg">Spring Computing Technology</p>
                      <p className="text-muted">Pune, India</p>
                    </div>
                    <div className="mt-4 lg:mt-0">
                      <span className="bg-accent/10 text-accent px-4 py-2 rounded-full font-medium">
                        Jan 2018 - Feb 2020
                      </span>
                    </div>
                  </div>
                  <div className="space-y-3 text-muted">
                    <p>• Built single-page applications (SPA) with React.js and Redux</p>
                    <p>• Developed reusable components, significantly reducing development effort</p>
                    <p>• Migrated applications from React 15.x to 16.x, improving UI/UX and performance</p>
                    <p>• Collaborated in Agile teams, participating in sprint planning and stand-ups</p>
                  </div>
                </div>
              </ScrollAnimation>
            </div>

            {/* Skills Section */}
            <ScrollAnimation animation="fadeUp" delay={300}>
              <div className="glass rounded-3xl p-8 lg:p-12 mt-16 border border-primary/10">
                <div className="text-center mb-8">
                  <h3 className="font-heading text-2xl lg:text-3xl font-bold text-foreground mb-4">
                    Technical Skills & Education
                  </h3>
                </div>
                
                <div className="grid lg:grid-cols-2 gap-12">
                  {/* Skills */}
                  <div>
                    <h4 className="font-heading text-xl font-bold text-foreground mb-6">Technical Expertise</h4>
                    <div className="space-y-4">
                      <div>
                        <h5 className="font-semibold text-foreground mb-2">Languages</h5>
                        <div className="flex flex-wrap gap-2">
                          {['JavaScript (ES6+)', 'TypeScript', 'Python', 'HTML5', 'CSS3'].map((skill) => (
                            <span key={skill} className="px-3 py-1 bg-blue-500/10 text-blue-500 rounded-lg text-sm">
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      <div>
                        <h5 className="font-semibold text-foreground mb-2">Frameworks & Libraries</h5>
                        <div className="flex flex-wrap gap-2">
                          {['React.js', 'Redux', 'Next.js', 'Web Components', 'Node.js', 'SCSS'].map((skill) => (
                            <span key={skill} className="px-3 py-1 bg-green-500/10 text-green-500 rounded-lg text-sm">
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      <div>
                        <h5 className="font-semibold text-foreground mb-2">Testing & Tools</h5>
                        <div className="flex flex-wrap gap-2">
                          {['Jest', 'React Testing Library', 'TDD', 'Git', 'Jira'].map((skill) => (
                            <span key={skill} className="px-3 py-1 bg-purple-500/10 text-purple-500 rounded-lg text-sm">
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Education */}
                  <div>
                    <h4 className="font-heading text-xl font-bold text-foreground mb-6">Education</h4>
                    <div className="space-y-6">
                      <div className="bg-card/30 rounded-xl p-4">
                        <h5 className="font-semibold text-foreground">Master of Science (Computer Science)</h5>
                        <p className="text-primary font-medium">Nowrojee Wadia College, Pune</p>
                        <p className="text-sm text-muted">June 2018 • Percentage: 58%</p>
                      </div>
                      
                      <div className="bg-card/30 rounded-xl p-4">
                        <h5 className="font-semibold text-foreground">Bachelor of Science (Computer Science)</h5>
                        <p className="text-accent font-medium">Annasaheb Magar College, Pune</p>
                        <p className="text-sm text-muted">Apr 2016 • Percentage: 52%</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </section>

        {/* Skills & Interests Section */}
        <section className="relative py-20 lg:py-32 overflow-hidden" aria-label="Skills and interests">
          <div className="absolute inset-0 bg-gradient-to-t from-secondary/20 via-transparent to-transparent"></div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollAnimation animation="fadeUp">
              <div className="text-center mb-16">
                <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-4">
                  Beyond the Code
                </h2>
                <p className="text-lg text-muted max-w-3xl mx-auto">
                  My passion extends beyond software development into content creation and adventure
                </p>
              </div>
            </ScrollAnimation>

            <div className="grid lg:grid-cols-2 gap-12">
              {/* Terminal Setup */}
              <ScrollAnimation animation="fadeLeft" delay={100}>
                <div className="glass rounded-3xl p-8 border border-primary/20">
                  <h3 className="font-heading text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
                    <span className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center">
                      <span className="text-lg">⚡</span>
                    </span>
                    Terminal-First Workflow
                  </h3>
                  <div className="space-y-4">
                    <p className="text-muted">
                      Passionate about terminal-based development workflows with a highly customized setup:
                    </p>
                    <div className="bg-card/50 rounded-xl p-4 font-mono text-sm">
                      <div className="text-primary">~/dev $</div>
                      <div className="text-muted mt-2">
                        • Neovim (Lua-based config with lazy.nvim)<br/>
                        • tmux with Powerlevel10k theme<br/>
                        • Terminal tools: yazi, lazygit, fd, zoxide, fzf<br/>
                        • Git aliases and automated workflows
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollAnimation>

              {/* Personal Interests */}
              <ScrollAnimation animation="fadeRight" delay={200}>
                <div className="glass rounded-3xl p-8 border border-accent/20">
                  <h3 className="font-heading text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
                    <span className="w-8 h-8 bg-accent/20 rounded-lg flex items-center justify-center">
                      <span className="text-lg">🏍️</span>
                    </span>
                    Adventure & Content
                  </h3>
                  <div className="space-y-4">
                    <p className="text-muted">
                      Currently planning exciting ventures into moto-vlogging and adventure content:
                    </p>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3 p-3 bg-card/30 rounded-lg">
                        <span className="text-xl">🎬</span>
                        <div>
                          <div className="font-semibold text-foreground">Moto-Vlogging Channel</div>
                          <div className="text-sm text-muted">Adventure bike touring across India</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-3 p-3 bg-card/30 rounded-lg">
                        <span className="text-xl">📱</span>
                        <div>
                          <div className="font-semibold text-foreground">Instagram Content</div>
                          <div className="text-sm text-muted">Travel reels and adventure stories</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-3 p-3 bg-card/30 rounded-lg">
                        <span className="text-xl">🎮</span>
                        <div>
                          <div className="font-semibold text-foreground">Gaming & Tech</div>
                          <div className="text-sm text-muted">Strategy guides and tutorials</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollAnimation>
            </div>

            {/* CTA Section */}
            <ScrollAnimation animation="fadeUp" delay={300}>
              <div className="glass rounded-3xl p-8 lg:p-12 mt-16 text-center border border-primary/10">
                <h3 className="font-heading text-2xl lg:text-3xl font-bold text-foreground mb-4">
                  Let&apos;s Build Something Amazing Together
                </h3>
                <p className="text-lg text-muted mb-8 max-w-2xl mx-auto">
                  Whether it&apos;s discussing code, sharing adventure stories, or exploring new project ideas, 
                  I&apos;m always excited to connect with fellow creators and developers.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button className="group relative px-8 py-4 button-glow text-white rounded-2xl font-medium overflow-hidden transition-all duration-300 micro-bounce ripple-effect">
                    <span className="relative flex items-center justify-center gap-2">
                      View My Projects
                      <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </span>
                  </button>
                  
                  <button className="group px-8 py-4 bg-card/50 backdrop-blur-sm border border-border rounded-2xl font-medium text-foreground hover:bg-card transition-all duration-300 micro-bounce ripple-effect">
                    Get In Touch
                  </button>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </section>

        {/* Content Creation Section */}
        <section className="relative py-20 lg:py-32 overflow-hidden" aria-label="Content creation and social media">
          <div className="absolute inset-0 bg-gradient-to-t from-primary/5 via-transparent to-transparent"></div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollAnimation animation="fadeUp">
              <div className="text-center mb-16">
                <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-4">
                  Content & Knowledge Sharing
                </h2>
                <p className="text-lg text-muted max-w-3xl mx-auto">
                  Beyond coding, I love sharing knowledge through YouTube videos and technical articles
                </p>
              </div>
            </ScrollAnimation>

            {/* Content Grid with Clean Single Sections */}
            <div className="space-y-12">
              {/* Content Samples Grid */}
              <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
                {/* YouTube Content */}
                <ScrollAnimation animation="fadeLeft" delay={200}>
                  <YouTubeSection 
                    showStats={true}
                    maxVideos={2}
                    title="Latest YouTube Content"
                    className="space-y-4"
                  />
                </ScrollAnimation>

                {/* Medium Content */}
                <ScrollAnimation animation="fadeRight" delay={300}>
                  <MediumSection 
                    showStats={true}
                    maxArticles={2}
                    title="Medium Articles"
                    className="space-y-4"
                  />
                </ScrollAnimation>
              </div>

              {/* Call to Action */}
              <ScrollAnimation animation="fadeUp" delay={400}>
                <div className="glass rounded-3xl p-8 text-center border border-primary/10">
                  <h3 className="font-heading text-2xl font-bold text-foreground mb-4">
                    Follow My Content Journey
                  </h3>
                  <p className="text-muted mb-6 max-w-2xl mx-auto">
                    Stay updated with my latest tutorials, insights, and development tips across platforms
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <a
                      href="https://www.youtube.com/@codingfun"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-red-500 text-white rounded-xl font-medium hover:bg-red-600 transition-colors duration-200"
                    >
                      <span className="text-lg">🎬</span>
                      Subscribe on YouTube
                    </a>
                    <a
                      href="https://medium.com/@vrushabh-bayas"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-green-500 text-white rounded-xl font-medium hover:bg-green-600 transition-colors duration-200"
                    >
                      <span className="text-lg">📝</span>
                      Follow on Medium
                    </a>
                  </div>
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </section>
    </PageLayout>
  );
}