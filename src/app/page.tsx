import PageLayout from '@/components/layout/PageLayout';
import TypewriterText from '@/components/ui/TypewriterText';
import ScrollAnimation from '@/components/ui/ScrollAnimations';
import Image from 'next/image';

export default function Home() {
  return (
    <PageLayout>
      {/* Modern Split-Screen Hero Section */}
      <section
        className='relative min-h-screen flex items-center justify-center overflow-hidden'
        aria-label='Hero section with introduction'
      >
        {/* Background Elements */}
        <div className='absolute inset-0 -z-20'>
          <div className='absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5'></div>
          <div className='absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]'></div>
        </div>

        {/* Floating Orbs - Responsive */}
        <div className='absolute inset-0 -z-10'>
          <div className='floating-orb absolute top-1/4 left-1/4 w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 bg-primary/10 rounded-full mix-blend-multiply filter blur-3xl animate-blob'></div>
          <div className='floating-orb absolute top-1/3 right-1/4 w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 bg-accent/10 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000'></div>
          <div className='floating-orb absolute bottom-1/4 left-1/3 w-48 h-48 sm:w-64 sm:h-64 lg:w-96 lg:h-96 bg-primary/5 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000'></div>
        </div>

        <div className='relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20'>
          <div className='grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center min-h-[calc(100vh-8rem)]'>
            {/* Content Side */}
            <div className='space-y-8 lg:order-2 reveal-left'>
              <div className='space-y-6'>
                {/* Animated Badge */}
                <div className='inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-primary text-sm font-medium backdrop-blur-sm reveal-up stagger-1'>
                  <div className='w-2 h-2 bg-primary rounded-full animate-pulse'></div>
                  Available for new opportunities
                </div>

                {/* Main Heading with Typewriter Effect */}
                <div className='space-y-4 reveal-up stagger-2'>
                  <h1 className='font-heading text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground leading-tight'>
                    <span className='block'>👋 Hi, I&apos;m</span>
                    <span className='block bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]'>
                      Vrushabh
                    </span>
                  </h1>

                  <div className='space-y-2'>
                    <p className='text-xl sm:text-2xl lg:text-3xl font-heading font-semibold text-foreground'>
                      I craft{' '}
                      <TypewriterText
                        words={[
                          'beautiful UIs',
                          'scalable apps',
                          'user experiences',
                          'digital solutions',
                        ]}
                        className='text-primary'
                      />
                    </p>
                    <p className='text-lg sm:text-xl text-muted max-w-xl'>
                      Experienced React.js Developer with 7+ years of expertise in
                      building high-performance, scalable web applications using
                      React.js, Redux, and modern web technologies.
                    </p>
                  </div>
                </div>

                {/* Quick Stats */}
                <div className='flex flex-wrap gap-4 sm:gap-6 lg:gap-8 py-4 reveal-up stagger-3'>
                  <div className='text-center min-w-[4rem]'>
                    <div className='text-xl sm:text-2xl lg:text-3xl font-bold text-primary'>
                      7+
                    </div>
                    <div className='text-xs sm:text-sm text-muted'>
                      Years Exp
                    </div>
                  </div>
                  <div className='text-center min-w-[4rem]'>
                    <div className='text-xl sm:text-2xl lg:text-3xl font-bold text-primary'>
                      15+
                    </div>
                    <div className='text-xs sm:text-sm text-muted'>
                      Projects
                    </div>
                  </div>
                  <div className='text-center min-w-[4rem]'>
                    <div className='text-xl sm:text-2xl lg:text-3xl font-bold text-primary'>
                      ⚡
                    </div>
                    <div className='text-xs sm:text-sm text-muted'>
                      Performance
                    </div>
                  </div>
                </div>
              </div>

              {/* Modern Action Buttons */}
              <div className='flex flex-col sm:flex-row gap-4 reveal-up stagger-4'>
                <button className='group relative px-8 py-4 button-glow text-white rounded-2xl font-medium overflow-hidden transition-all duration-300 micro-bounce ripple-effect focus-enhanced focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background'>
                  <div className='absolute inset-0 bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
                  <span className='relative flex items-center justify-center gap-2'>
                    View My Work
                    <svg
                      className='w-5 h-5 group-hover:translate-x-1 transition-transform duration-200'
                      fill='none'
                      stroke='currentColor'
                      viewBox='0 0 24 24'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M17 8l4 4m0 0l-4 4m4-4H3'
                      />
                    </svg>
                  </span>
                </button>

                <button className='group px-8 py-4 bg-card/50 backdrop-blur-sm border border-border rounded-2xl font-medium text-foreground hover:bg-card transition-all duration-300 micro-bounce ripple-effect focus-enhanced focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background'>
                  Get In Touch
                </button>
              </div>

              {/* Tech Stack Icons */}
              <div className='pt-6'>
                <p className='text-sm text-muted mb-4'>
                  Built with modern technologies
                </p>
                <div className='flex gap-4 flex-wrap'>
                  {['React', 'TypeScript', 'Web Components', 'Next.js', 'Tailwind'].map(
                    (tech) => (
                      <div
                        key={tech}
                        className='px-3 py-1 bg-secondary/50 rounded-lg text-xs font-medium text-muted hover:text-foreground transition-colors'
                      >
                        {tech}
                      </div>
                    ),
                  )}
                </div>
              </div>
            </div>

            {/* Photo Side */}
            <div className='relative lg:order-1 reveal-right'>
              <div className='relative group'>
                {/* Glassmorphism Container */}
                <div className='relative w-full max-w-md mx-auto'>
                  {/* Photo Container with Enhanced 3D Effect */}
                  <div className='relative aspect-square rounded-3xl overflow-hidden bg-gradient-to-br from-primary/20 to-accent/20 backdrop-blur-sm border border-primary/20 group-hover:scale-105 transition-all duration-500 group-hover:rotate-1 perspective-1000'>
                    {/* 3D Photo Frame */}
                    <div className='absolute inset-2 rounded-2xl bg-gradient-to-br from-background to-card shadow-2xl transform group-hover:rotateY-5 group-hover:rotateX-2 transition-transform duration-500 preserve-3d'>
                      {/* Inner Photo Container */}
                      <div className='absolute inset-2 rounded-xl overflow-hidden bg-gradient-to-br from-primary/5 to-accent/5'>
                        {/* Professional Photo */}
                        <div className='w-full h-full relative overflow-hidden'>
                          <Image
                            src='/images/profile.png'
                            alt='Vrushabh Bayas - Frontend Engineer'
                            fill
                            className='object-cover object-[center_2%]'
                            priority
                          />

                          {/* Photo Overlay Effects */}
                          <div className='absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
                          <div className='absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 mix-blend-overlay'></div>
                        </div>
                      </div>

                      {/* 3D Border Effect */}
                      <div className='absolute inset-0 rounded-2xl border border-primary/30 shadow-inner'></div>
                    </div>

                    {/* Enhanced Floating Elements */}
                    <div className='absolute -top-6 -right-6 w-12 h-12 bg-gradient-to-br from-primary to-primary/70 rounded-full animate-bounce shadow-lg flex items-center justify-center text-white text-sm font-bold'>
                      ⚡
                    </div>
                    <div className='absolute -bottom-6 -left-6 w-10 h-10 bg-gradient-to-br from-accent to-accent/70 rounded-full animate-bounce animation-delay-1000 shadow-lg flex items-center justify-center text-white text-xs'>
                      🚀
                    </div>

                    {/* Orbital Elements */}
                    <div className='absolute top-1/4 -left-3 w-4 h-4 bg-green-500 rounded-full animate-pulse shadow-lg'></div>
                    <div className='absolute bottom-1/4 -right-3 w-3 h-3 bg-blue-500 rounded-full animate-pulse animation-delay-2000 shadow-lg'></div>
                  </div>

                  {/* Floating Cards */}
                  <div className='absolute -top-8 -left-8 bg-card/80 backdrop-blur-sm border border-border rounded-xl p-3 shadow-lg animate-float'>
                    <div className='flex items-center gap-2'>
                      <div className='w-3 h-3 bg-green-500 rounded-full'></div>
                      <span className='text-xs font-medium'>Available</span>
                    </div>
                  </div>

                  <div className='absolute -bottom-8 -right-8 bg-card/80 backdrop-blur-sm border border-border rounded-xl p-3 shadow-lg animate-float animation-delay-2000'>
                    <div className='flex items-center gap-2'>
                      <span className='text-xs font-medium'>
                        Based in Pune, India
                      </span>
                      <div className='text-xs'>🇮🇳</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className='absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce'>
          <div className='w-6 h-10 border-2 border-primary/30 rounded-full flex justify-center'>
            <div className='w-1 h-3 bg-primary rounded-full mt-2 animate-pulse'></div>
          </div>
        </div>
      </section>

      {/* Modern Stats Section with Glassmorphism */}
      <section className='relative py-20 lg:py-32 overflow-hidden'>
        {/* Background Elements */}
        <div className='absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5'></div>
        <div className='absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full mix-blend-multiply filter blur-3xl'></div>
        <div className='absolute bottom-0 right-1/4 w-96 h-96 bg-accent/10 rounded-full mix-blend-multiply filter blur-3xl'></div>

        <div className='relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          {/* Section Header */}
          <ScrollAnimation animation='fadeUp'>
            <div className='text-center mb-16'>
              <h2 className='font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4'>
                Building Digital Excellence
              </h2>
              <p className='text-lg text-muted max-w-2xl mx-auto'>
                Transforming ideas into production-ready applications with
                modern technologies and best practices
              </p>
            </div>
          </ScrollAnimation>

          {/* Glass Cards Grid */}
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8'>
            {/* Experience Card */}
            <ScrollAnimation animation='scale' delay={100}>
              <div className='group relative'>
                <div className='absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-300'></div>
                <div className='relative glass rounded-3xl p-8 text-center group-hover:scale-105 transition-all duration-300 border border-primary/20'>
                  <div className='w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300'>
                    <span className='text-2xl'>🚀</span>
                  </div>
                  <div className='font-heading text-3xl lg:text-4xl font-bold text-primary mb-2'>
                    7+
                  </div>
                  <div className='text-lg font-semibold text-foreground mb-1'>
                    Years
                  </div>
                  <div className='text-sm text-muted'>React.js Experience</div>
                </div>
              </div>
            </ScrollAnimation>

            {/* Projects Card */}
            <ScrollAnimation animation='scale' delay={200}>
              <div className='group relative'>
                <div className='absolute inset-0 bg-gradient-to-r from-accent/20 to-primary/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-300'></div>
                <div className='relative glass rounded-3xl p-8 text-center group-hover:scale-105 transition-all duration-300 border border-accent/20'>
                  <div className='w-16 h-16 bg-accent/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300'>
                    <span className='text-2xl'>🎯</span>
                  </div>
                  <div className='font-heading text-3xl lg:text-4xl font-bold text-accent mb-2'>
                    15+
                  </div>
                  <div className='text-lg font-semibold text-foreground mb-1'>
                    Projects
                  </div>
                  <div className='text-sm text-muted'>
                    Successfully Delivered
                  </div>
                </div>
              </div>
            </ScrollAnimation>

            {/* Performance Card */}
            <ScrollAnimation animation='scale' delay={300}>
              <div className='group relative'>
                <div className='absolute inset-0 bg-gradient-to-r from-primary/20 to-green-500/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-300'></div>
                <div className='relative glass rounded-3xl p-8 text-center group-hover:scale-105 transition-all duration-300 border border-green-500/20'>
                  <div className='w-16 h-16 bg-green-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300'>
                    <span className='text-2xl'>⚡</span>
                  </div>
                  <div className='font-heading text-3xl lg:text-4xl font-bold text-green-500 mb-2'>
                    99%
                  </div>
                  <div className='text-lg font-semibold text-foreground mb-1'>
                    Performance
                  </div>
                  <div className='text-sm text-muted'>Lighthouse Scores</div>
                </div>
              </div>
            </ScrollAnimation>

            {/* Availability Card */}
            <ScrollAnimation animation='scale' delay={400}>
              <div className='group relative'>
                <div className='absolute inset-0 bg-gradient-to-r from-accent/20 to-orange-500/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-300'></div>
                <div className='relative glass rounded-3xl p-8 text-center group-hover:scale-105 transition-all duration-300 border border-orange-500/20'>
                  <div className='w-16 h-16 bg-orange-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300'>
                    <span className='text-2xl'>💼</span>
                  </div>
                  <div className='font-heading text-3xl lg:text-4xl font-bold text-orange-500 mb-2'>
                    24/7
                  </div>
                  <div className='text-lg font-semibold text-foreground mb-1'>
                    Available
                  </div>
                  <div className='text-sm text-muted'>For New Projects</div>
                </div>
              </div>
            </ScrollAnimation>
          </div>

          {/* Bottom CTA */}
          <div className='text-center mt-16'>
            <div className='glass rounded-2xl p-8 max-w-2xl mx-auto border border-primary/10'>
              <h3 className='font-heading text-2xl font-bold text-foreground mb-4'>
                Ready to build something amazing?
              </h3>
              <p className='text-muted mb-6'>
                Let&apos;s discuss your next project and create something
                extraordinary together.
              </p>
              <button className='modern-button px-8 py-3 bg-primary text-white rounded-xl font-medium hover:scale-105 transition-all duration-300'>
                Start a Conversation
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Modern Bento Box Tech Stack */}
      <section className='relative py-20 lg:py-32 overflow-hidden'>
        {/* Background */}
        <div className='absolute inset-0 bg-gradient-to-t from-secondary/20 via-transparent to-transparent'></div>

        <div className='relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          {/* Section Header */}
          <ScrollAnimation animation='fadeUp'>
            <div className='text-center mb-16'>
              <h2 className='font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4'>
                My Technology Arsenal
              </h2>
              <p className='text-lg text-muted max-w-3xl mx-auto'>
                Cutting-edge tools and technologies I use to bring ideas to life
              </p>
            </div>
          </ScrollAnimation>

          {/* Improved Skills Grid Layout */}
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16'>
            {/* Frontend Card */}
            <ScrollAnimation animation='fadeUp' delay={100}>
              <div className='group relative card-3d'>
                <div className='absolute inset-0 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-2xl blur-lg group-hover:blur-xl transition-all duration-300'></div>
                <div className='relative glass rounded-2xl p-6 h-full border border-blue-500/20 group-hover:scale-105 transition-all duration-300 micro-bounce'>
                  <div className='flex items-center gap-3 mb-4'>
                    <div className='w-10 h-10 bg-blue-500/20 rounded-xl flex items-center justify-center'>
                      <span className='text-xl'>⚛️</span>
                    </div>
                    <div>
                      <h3 className='font-heading text-lg font-bold text-foreground'>Frontend</h3>
                      <p className='text-xs text-muted'>Modern UI Development</p>
                    </div>
                  </div>
                  <div className='space-y-2 text-sm text-muted'>
                    <div className='hover:text-foreground transition-colors duration-200'>React</div>
                    <div className='hover:text-foreground transition-colors duration-200'>TypeScript</div>
                    <div className='hover:text-foreground transition-colors duration-200'>Web Components</div>
                    <div className='hover:text-foreground transition-colors duration-200'>Next.js</div>
                    <div className='hover:text-foreground transition-colors duration-200'>Tailwind CSS</div>
                  </div>
                </div>
              </div>
            </ScrollAnimation>

            {/* Backend Card */}
            <ScrollAnimation animation='fadeUp' delay={200}>
              <div className='group relative card-3d'>
                <div className='absolute inset-0 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-2xl blur-lg group-hover:blur-xl transition-all duration-300'></div>
                <div className='relative glass rounded-2xl p-6 h-full border border-green-500/20 group-hover:scale-105 transition-all duration-300 micro-bounce'>
                  <div className='flex items-center gap-3 mb-4'>
                    <div className='w-10 h-10 bg-green-500/20 rounded-xl flex items-center justify-center'>
                      <span className='text-xl'>🔧</span>
                    </div>
                    <div>
                      <h3 className='font-heading text-lg font-bold text-foreground'>Backend</h3>
                      <p className='text-xs text-muted'>Server & Database</p>
                    </div>
                  </div>
                  <div className='space-y-2 text-sm text-muted'>
                    <div className='hover:text-foreground transition-colors duration-200'>Node.js</div>
                    <div className='hover:text-foreground transition-colors duration-200'>Express.js</div>
                    <div className='hover:text-foreground transition-colors duration-200'>PostgreSQL</div>
                    <div className='hover:text-foreground transition-colors duration-200'>REST APIs</div>
                    <div className='hover:text-foreground transition-colors duration-200'>MongoDB</div>
                  </div>
                </div>
              </div>
            </ScrollAnimation>

            {/* DevOps Card */}
            <ScrollAnimation animation='fadeUp' delay={300}>
              <div className='group relative card-3d'>
                <div className='absolute inset-0 bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-2xl blur-lg group-hover:blur-xl transition-all duration-300'></div>
                <div className='relative glass rounded-2xl p-6 h-full border border-orange-500/20 group-hover:scale-105 transition-all duration-300 micro-bounce'>
                  <div className='flex items-center gap-3 mb-4'>
                    <div className='w-10 h-10 bg-orange-500/20 rounded-xl flex items-center justify-center'>
                      <span className='text-xl'>🚀</span>
                    </div>
                    <div>
                      <h3 className='font-heading text-lg font-bold text-foreground'>DevOps</h3>
                      <p className='text-xs text-muted'>Cloud & Deployment</p>
                    </div>
                  </div>
                  <div className='space-y-2 text-sm text-muted'>
                    <div className='hover:text-foreground transition-colors duration-200'>Docker</div>
                    <div className='hover:text-foreground transition-colors duration-200'>AWS</div>
                    <div className='hover:text-foreground transition-colors duration-200'>CI/CD</div>
                    <div className='hover:text-foreground transition-colors duration-200'>GitHub Actions</div>
                    <div className='hover:text-foreground transition-colors duration-200'>CDN</div>
                  </div>
                </div>
              </div>
            </ScrollAnimation>

            {/* Development Tools Card */}
            <ScrollAnimation animation='fadeUp' delay={400}>
              <div className='group relative card-3d'>
                <div className='absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-2xl blur-lg group-hover:blur-xl transition-all duration-300'></div>
                <div className='relative glass rounded-2xl p-6 h-full border border-purple-500/20 group-hover:scale-105 transition-all duration-300 micro-bounce'>
                  <div className='flex items-center gap-3 mb-4'>
                    <div className='w-10 h-10 bg-purple-500/20 rounded-xl flex items-center justify-center'>
                      <span className='text-xl'>💻</span>
                    </div>
                    <div>
                      <h3 className='font-heading text-lg font-bold text-foreground'>Development Tools</h3>
                      <p className='text-xs text-muted'>Productivity & Workflow</p>
                    </div>
                  </div>
                  <div className='space-y-2 text-sm text-muted'>
                    <div className='hover:text-foreground transition-colors duration-200'>Neovim</div>
                    <div className='hover:text-foreground transition-colors duration-200'>tmux</div>
                    <div className='hover:text-foreground transition-colors duration-200'>Git</div>
                    <div className='hover:text-foreground transition-colors duration-200'>Zsh</div>
                    <div className='hover:text-foreground transition-colors duration-200'>ESBuild</div>
                  </div>
                </div>
              </div>
            </ScrollAnimation>
          </div>

          {/* What Makes Me Different */}
          <div className='glass rounded-3xl p-8 lg:p-12 border border-primary/10'>
            <div className='text-center mb-8'>
              <h3 className='font-heading text-2xl lg:text-3xl font-bold text-foreground mb-4'>
                🚀 What Sets Me Apart
              </h3>
              <p className='text-muted max-w-2xl mx-auto'>
                My unique approach to development combines technical excellence
                with modern workflows
              </p>
            </div>

            <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
              <div className='text-center group'>
                <div className='w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300'>
                  <span className='text-2xl'>⚡</span>
                </div>
                <h4 className='font-heading text-lg font-semibold text-foreground mb-2'>
                  Terminal-First Workflow
                </h4>
                <p className='text-sm text-muted'>
                  Neovim, tmux, and CLI-first development for maximum efficiency
                  and speed
                </p>
              </div>

              <div className='text-center group'>
                <div className='w-16 h-16 bg-accent/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300'>
                  <span className='text-2xl'>🎯</span>
                </div>
                <h4 className='font-heading text-lg font-semibold text-foreground mb-2'>
                  Performance Obsessed
                </h4>
                <p className='text-sm text-muted'>
                  DRY, KISS, and SOLID principles applied to every line of code
                  I write
                </p>
              </div>

              <div className='text-center group'>
                <div className='w-16 h-16 bg-green-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300'>
                  <span className='text-2xl'>🔄</span>
                </div>
                <h4 className='font-heading text-lg font-semibold text-foreground mb-2'>
                  Modern Practices
                </h4>
                <p className='text-sm text-muted'>
                  CI/CD pipelines, containerization, and cloud-native
                  development
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
