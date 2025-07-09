'use client';

import { useState } from 'react';
import PageLayout from '@/components/layout/PageLayout';
import HeroSection from '@/components/shared/HeroSection';
import ScrollAnimation from '@/components/ui/ScrollAnimations';
import { socialLinks } from '@/data/socialLinks';
import Link from 'next/link';

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export default function Contact() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Send email via API
  const sendEmail = async (formData: ContactFormData) => {
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to send email');
      }

      return await response.json();
    } catch (error) {
      console.error('Email sending error:', error);
      throw error;
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Validate required fields
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      setIsSubmitting(false);
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus('idle'), 3000);
      return;
    }
    
    try {
      // Send email via API
      await sendEmail(formData);
      
      // Show success message and reset form
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Reset status after 5 seconds
      setTimeout(() => {
        setSubmitStatus('idle');
      }, 5000);
    } catch {
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus('idle'), 3000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <PageLayout>
      {/* Hero Section */}
      <HeroSection backgroundVariant="minimal" ariaLabel="Contact information">
        <ScrollAnimation animation="fadeUp">
          <div className="text-center mb-16">
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Let&apos;s <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Connect</span>
            </h1>
            <p className="text-xl text-muted max-w-3xl mx-auto leading-relaxed">
              Feel free to reach out! Unlock endless possibilities by connecting – let&apos;s collaborate and create something extraordinary.
            </p>
          </div>
        </ScrollAnimation>

        {/* Contact Methods */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 mb-20 items-start">
          {/* Direct Contact */}
          <ScrollAnimation animation="fadeLeft" delay={200}>
            <div className="space-y-6 h-full flex flex-col">
              <h2 className="font-heading text-2xl lg:text-3xl font-bold text-foreground">
                Get In Touch
              </h2>
                  
              <div className="flex-1 space-y-6">
                  {/* Email */}
                  <div className="flex items-center gap-4 p-6 glass rounded-2xl border border-primary/20 micro-bounce group">
                    <div className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <span className="text-2xl">📧</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Email</h3>
                      <a 
                        href="mailto:bayasvrushabh@gmail.com"
                        className="text-primary hover:text-primary/80 transition-colors duration-200"
                      >
                        bayasvrushabh@gmail.com
                      </a>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-center gap-4 p-6 glass rounded-2xl border border-accent/20 micro-bounce group">
                    <div className="w-16 h-16 bg-accent/20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <span className="text-2xl">📱</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Phone</h3>
                      <a 
                        href="tel:+919607335159"
                        className="text-accent hover:text-accent/80 transition-colors duration-200"
                      >
                        +91 9607335159
                      </a>
                    </div>
                  </div>

                  {/* WhatsApp */}
                  <div className="flex items-center gap-4 p-6 glass rounded-2xl border border-[#25D366]/20 micro-bounce group">
                    <div className="w-16 h-16 bg-[#25D366]/20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-8 h-8 text-[#25D366]" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.703"/>
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">WhatsApp</h3>
                      <a 
                        href="https://wa.me/919607335159?text=Hi%20Vrushabh!%20I%20found%20your%20portfolio%20and%20would%20like%20to%20connect."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#25D366] hover:text-[#22c55e] transition-colors duration-200"
                      >
                        Start Chat
                      </a>
                    </div>
                  </div>

                  {/* Location */}
                  <div className="flex items-center gap-4 p-6 glass rounded-2xl border border-blue-500/20 micro-bounce group">
                    <div className="w-16 h-16 bg-blue-500/20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <span className="text-2xl">📍</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Location</h3>
                      <p className="text-muted">Pune, India 🇮🇳</p>
                    </div>
                  </div>

              </div>
              
              {/* Availability Status */}
              <div className="p-6 glass rounded-2xl border border-primary/10 mt-auto">
                <h3 className="font-semibold text-foreground mb-3">Current Status</h3>
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-green-500 font-medium">Available for new opportunities</span>
                </div>
                <p className="text-sm text-muted">
                  Open to discussing exciting projects and full-time positions
                </p>
              </div>
            </div>
          </ScrollAnimation>

          {/* Contact Form */}
          <ScrollAnimation animation="fadeRight" delay={400}>
            <div className="glass rounded-3xl p-8 border border-primary/20 h-full flex flex-col">
              <h2 className="font-heading text-2xl font-bold text-foreground mb-6">
                Send a Message
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6 flex-1 flex flex-col">
                <div className="flex-1 space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                          Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-4 bg-secondary/50 border border-border rounded-xl text-foreground placeholder-muted focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
                          placeholder="Your name"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                          Email *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-4 bg-secondary/50 border border-border rounded-xl text-foreground placeholder-muted focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                        Subject *
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-4 bg-secondary/50 border border-border rounded-xl text-foreground placeholder-muted focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
                        placeholder="Project inquiry, collaboration, etc."
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={6}
                        className="w-full px-4 py-4 bg-secondary/50 border border-border rounded-xl text-foreground placeholder-muted focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 resize-vertical min-h-[120px]"
                        placeholder="Tell me about your project or how we can work together..."
                      />
                    </div>
                </div>
                
                <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full relative px-8 py-4 bg-primary hover:bg-primary/90 text-white rounded-2xl font-medium overflow-hidden transition-all duration-300 micro-bounce ripple-effect disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl"
                    >
                      <span className="relative flex items-center justify-center gap-3">
                        {isSubmitting ? (
                          <>
                            <div className="w-5 h-5 border-2 border-white/20 border-t-white rounded-full animate-spin"></div>
                            Sending Email...
                          </>
                        ) : (
                          <>
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                            Send Email
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                            </svg>
                          </>
                        )}
                      </span>
                    </button>

                    {submitStatus === 'success' && (
                      <div className="mt-4 p-4 bg-green-500/10 border border-green-500/20 rounded-xl text-green-500 text-center">
                        ✅ Email sent successfully! I&apos;ll get back to you soon.
                      </div>
                    )}
                    
                    {submitStatus === 'error' && (
                      <div className="mt-4 p-4 bg-red-500/10 border border-red-500/20 rounded-xl text-red-500 text-center">
                        ❌ Failed to send email. Please try again or contact me directly.
                      </div>
                    )}
                </div>
                  </form>
            </div>
          </ScrollAnimation>
        </div>
      </HeroSection>

        {/* Social Media & Content */}
        <section className="relative py-20 lg:py-32 overflow-hidden" aria-label="Social media and content">
          <div className="absolute inset-0 bg-gradient-to-t from-secondary/20 via-transparent to-transparent"></div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollAnimation animation="fadeUp">
              <div className="text-center mb-16">
                <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-4">
                  Follow My Journey
                </h2>
                <p className="text-lg text-muted max-w-2xl mx-auto">
                  Connect with me across platforms to stay updated on my latest projects, content, and adventures
                </p>
              </div>
            </ScrollAnimation>

            {/* Social Links Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-16">
              {socialLinks.map((social, index) => (
                <ScrollAnimation key={social.name} animation="scale" delay={index * 100}>
                  <a
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative block"
                  >
                    <div className={`absolute inset-0 bg-gradient-to-br ${social.color} rounded-2xl blur-lg group-hover:blur-xl transition-all duration-300`}></div>
                    <div className={`relative glass rounded-2xl p-6 text-center ${social.borderColor} group-hover:scale-105 transition-all duration-300 micro-bounce`}>
                      <div className="text-4xl mb-4">{social.icon}</div>
                      <h3 className="font-heading text-lg font-bold text-foreground mb-2">{social.name}</h3>
                      <p className="text-sm text-muted">{social.description}</p>
                      
                      {/* External link indicator */}
                      <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                        <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </div>
                    </div>
                  </a>
                </ScrollAnimation>
              ))}
            </div>

            {/* Thank You Section */}
            <ScrollAnimation animation="fadeUp" delay={400}>
              <div className="glass rounded-3xl p-8 lg:p-12 text-center border border-primary/10">
                <h3 className="font-heading text-3xl lg:text-4xl font-bold text-foreground mb-6">
                  Thanks for Your Interest! 🙏
                </h3>
                <p className="text-lg text-muted mb-8 max-w-2xl mx-auto">
                  Whether you&apos;re looking to collaborate on a project, discuss opportunities, 
                  or just want to chat about technology and adventures, I&apos;m always excited to connect.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/projects" className="group relative px-8 py-4 button-glow text-white rounded-2xl font-medium overflow-hidden transition-all duration-300 micro-bounce ripple-effect">
                    <span className="relative flex items-center justify-center gap-2">
                      View My Work
                      <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </span>
                  </Link>
                  
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

                {/* Fun fact */}
                <div className="mt-8 p-4 bg-accent/10 rounded-xl">
                  <p className="text-sm text-muted">
                    💡 <strong>Fun fact:</strong> I usually respond within 24 hours, often much sooner! 
                    Currently based in Pune, India (UTC+5:30)
                  </p>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </section>
    </PageLayout>
  );
}