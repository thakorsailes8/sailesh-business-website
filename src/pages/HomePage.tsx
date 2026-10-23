import React from 'react';
import { ArrowRight, Mail, ExternalLink, UserCheck, Layers, Terminal, Sparkles, Film, FileText, CheckCircle2, TrendingUp, Cpu, Flame, Code } from 'lucide-react';
import { ProjectItem } from '../data/portfolioData';

interface HomePageProps {
  onNavigate: (page: string) => void;
  onOpenCaseStudy: (project: ProjectItem) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate, onOpenCaseStudy }) => {
  const featuredProjects: ProjectItem[] = [
    {
      id: 'fintech-flow',
      title: 'Fintech Flow Dashboard',
      subtitle: 'Multi-asset portfolio management & telemetry',
      category: 'uiux',
      categoryLabel: 'UI/UX Design',
      tag: 'UI/UX • Web App',
      tools: 'Figma • React • Tailwind',
      client: 'Flow Financial',
      year: '2024',
      image: '',
      description: 'A multi-asset portfolio management system focusing on instant readability, data visualization, and frictionless micro-transactions.',
      challenge: 'Managing high volumes of dynamic cryptocurrency and forex market pairs without overwhelming retail traders.',
      solution: 'Created an adaptive widget interface with real-time spline sparklines, customizable KPI widgets, and high-contrast color accessibility.',
      deliverables: ['Custom UI Components', 'Design System Architecture', 'Micro-Interactions Flow', 'Interactive Prototype'],
      metrics: '+64% Faster Order Execution',
    },
    {
      id: 'nova-ai-cloud',
      title: 'Nova AI Cloud Platform',
      subtitle: 'Conversion landing page for AI enterprise infrastructure',
      category: 'websites',
      categoryLabel: 'Web Development',
      tag: 'Web Development • HTML5',
      tools: 'HTML5 • CSS3 • Bootstrap 5 • JS',
      client: 'Nova Systems',
      year: '2024',
      image: '',
      description: 'High-performance conversion landing page designed and developed with modern CSS responsive architecture, silky micro-interactions, and 98+ PageSpeed.',
      challenge: 'Low conversion on initial product launch due to dense technical jargon and generic layout.',
      solution: 'Restructured user narrative into a 4-tier benefit showcase, added lightweight interactive pricing calculators, and optimized asset delivery.',
      deliverables: ['Production HTML/CSS Code', 'Responsive Mobile Layout', 'Interactive Feature Tabs', '98+ Google Lighthouse Performance'],
      metrics: '3.8x Increase in Demo Registrations',
    },
    {
      id: 'aura-parfumerie',
      title: 'Aura Haute Parfumerie',
      subtitle: 'Luxury brand identity & synthetic visual campaign',
      category: 'social',
      categoryLabel: 'AI Visuals & Branding',
      tag: 'AI Visuals • Branding',
      tools: 'Midjourney • Photoshop • Canva',
      client: 'Aura Parfums Milan',
      year: '2024',
      image: '',
      description: 'Synthetic visual campaigns, generated cinematic product imagery, and viral promotional reels driving 4.8x higher engagement metrics.',
      challenge: 'Crafting high-fashion editorial imagery without the $50k cost of a multi-location European photo shoot.',
      solution: 'Used fine-tuned prompt engineering to synthesize ultra-luxurious bottle reflections, tactile marble backgrounds, and dramatic editorial studio lighting.',
      deliverables: ['16 High-Res Campaign Images', 'Social Media Carousel Deck', 'Product Packaging Concepts', 'Brand Style Guide'],
      metrics: '4.8x Higher Social Media Engagement',
    },
  ];

  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative w-full overflow-hidden pt-10 pb-16 lg:pb-24">
        {/* Ambient Glows */}
        <div className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-[800px] h-[450px] bg-[#7c3aed]/10 rounded-full blur-[120px] -z-10 animate-float-slow"></div>
        <div className="pointer-events-none absolute top-1/3 -right-32 w-[420px] h-[420px] bg-[#9333ea]/15 rounded-full blur-[100px] -z-10 animate-pulseGlow"></div>

        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
            {/* Main Headline */}
            <h1 className="font-extrabold text-4xl sm:text-5xl lg:text-6xl text-[#0f172a] tracking-tight mb-4 leading-tight">
              Creative Designs.{' '}
              <span className="bg-gradient-to-r from-[#7c3aed] via-[#9333ea] to-[#581c87] bg-clip-text text-transparent">
                Modern Websites.
              </span>{' '}
              Powerful Visuals.
            </h1>

            {/* Supporting Subtext */}
            <p className="text-base sm:text-lg text-[#475569] max-w-2xl mx-auto mb-8 leading-relaxed">
              I help businesses build a professional online presence through creative design, modern responsive websites, and AI-powered visual storytelling.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-4">
              <button
                onClick={() => onNavigate('gallery')}
                className="inline-flex items-center gap-2 bg-[#7c3aed] text-white font-semibold text-sm px-8 py-3.5 rounded-full shadow-[0_8px_24px_rgba(124,58,237,0.32)] hover:bg-[#9333ea] hover:-translate-y-0.5 active:scale-95 transition-all duration-200 cursor-pointer"
              >
                <span>Explore My Work</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => onNavigate('contact')}
                className="inline-flex items-center gap-2 bg-white text-[#7c3aed] font-semibold text-sm px-7 py-3.5 rounded-full shadow-[0_2px_12px_rgba(124,58,237,0.08)] border border-[#e2e2e9] hover:bg-[#f5f3ff] transition-all duration-200 hover:-translate-y-0.5 cursor-pointer"
              >
                <span>Contact Me</span>
                <Mail className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Master Showcase: Pure CSS/SVG Architecture Canvas (No external image) */}
          <div className="relative mt-12 lg:mt-16 w-full">
            {/* Floating Badges */}
            <div className="hidden md:flex absolute -top-5 left-6 z-20 items-center gap-2 bg-white/95 backdrop-blur-xl px-4 py-2 rounded-full shadow-[0_12px_32px_-6px_rgba(124,58,237,0.18)] border border-[#f1f5f9] animate-float-1">
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></div>
              <span className="text-xs text-[#0f172a] font-semibold">
                UI/UX • 99.8% Client Satisfaction
              </span>
            </div>

            <div className="hidden md:flex absolute -bottom-5 right-8 z-20 items-center gap-2 bg-[#2f3035]/95 text-[#f1f0f7] backdrop-blur-xl px-4 py-2 rounded-full shadow-[0_16px_36px_-6px_rgba(15,15,20,0.3)] animate-float-2">
              <Sparkles className="w-4 h-4 text-[#ddd6fe]" />
              <span className="text-xs font-semibold tracking-wide">
                Next-Gen AI Visuals &amp; Motion
              </span>
            </div>

            {/* Master Showcase Container */}
            <div className="relative bg-white rounded-2xl md:rounded-3xl p-4 md:p-6 shadow-[0_20px_50px_-10px_rgba(124,58,237,0.12)] border border-[#f1f5f9]">
              <div
                onClick={() => onNavigate('gallery')}
                className="relative rounded-xl md:rounded-2xl overflow-hidden aspect-[16/9] md:aspect-[21/9] bg-[#0f172a] text-white p-6 md:p-10 flex flex-col justify-between group cursor-pointer border border-[#2f3035]"
              >
                {/* ========================================================================= */}
                {/* HERO MAIN SHOWCASE IMAGE: Replace src="" with your hero workstation image */}
                {/* Example: src="/assets/hero-showcase.png" */}
                {/* ========================================================================= */}
                <img
                  src="/assets/hero-showcase.png"
                  alt="Hero Creative Showcase"
                  className="w-full h-full object-cover absolute inset-0 z-0 transition-transform duration-700 group-hover:scale-105"
                  onError={(e) => {
                    // Hidden until you provide an image src, so the vector dashboard modules below remain visible
                    (e.currentTarget as HTMLElement).style.display = 'none';
                  }}
                />

                {/* Background UI Grid Lines */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-[#7c3aed]/25 rounded-full blur-[90px] pointer-events-none"></div>

                {/* Top Mockup Header Bar */}
                <div className="relative z-10 flex items-center justify-between border-b border-white/10 pb-4">
                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-rose-500/80"></div>
                      <div className="w-3 h-3 rounded-full bg-amber-500/80"></div>
                      <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
                    </div>
                    <span className="text-xs font-mono text-[#cbd5e1] bg-white/10 px-3 py-1 rounded-md">
                      sailesh.studio // live-interface-preview
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                    <span className="text-xs text-emerald-400 font-mono font-semibold">100% Code &amp; Vector</span>
                  </div>
                </div>

                {/* Center Creative Visual Modules */}
                <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-4 my-auto py-6">
                  {/* Module 1: UI/UX Component */}
                  <div className="bg-[#2f3035]/80 backdrop-blur-md rounded-xl p-4 border border-white/10 shadow-lg flex flex-col justify-between">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-[11px] font-mono text-[#ddd6fe] uppercase">Interface System</span>
                      <Layers className="w-4 h-4 text-[#ddd6fe]" />
                    </div>
                    <div className="space-y-2">
                      <div className="h-2 w-3/4 bg-white/30 rounded-full"></div>
                      <div className="h-2 w-1/2 bg-[#7c3aed] rounded-full"></div>
                    </div>
                    <div className="mt-4 flex items-center justify-between text-xs font-mono text-[#ede9fe]">
                      <span>Latency: 0ms</span>
                      <span className="text-emerald-400">99.8% Uptime</span>
                    </div>
                  </div>

                  {/* Module 2: Web Dev Architecture */}
                  <div className="bg-[#2f3035]/80 backdrop-blur-md rounded-xl p-4 border border-white/10 shadow-lg flex flex-col justify-between">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-[11px] font-mono text-emerald-300 uppercase">Semantic Frontend</span>
                      <Terminal className="w-4 h-4 text-emerald-400" />
                    </div>
                    <div className="space-y-1.5 font-mono text-[11px] text-gray-300 bg-black/40 p-2 rounded-lg">
                      <span className="text-purple-300">&lt;main&gt;</span>
                      <span className="text-emerald-300 ml-2">&lt;BootstrapGrid /&gt;</span>
                      <span className="text-purple-300">&lt;/main&gt;</span>
                    </div>
                    <div className="mt-2 text-xs font-mono text-[#ede9fe]">
                      Clean HTML5 + CSS Architecture
                    </div>
                  </div>

                  {/* Module 3: Visual Storytelling */}
                  <div className="bg-[#2f3035]/80 backdrop-blur-md rounded-xl p-4 border border-white/10 shadow-lg flex flex-col justify-between">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-[11px] font-mono text-amber-300 uppercase">Motion &amp; AI</span>
                      <Sparkles className="w-4 h-4 text-amber-300" />
                    </div>
                    <div className="h-10 rounded-lg bg-gradient-to-r from-[#7c3aed] via-[#9333ea] to-pink-500/80 flex items-center justify-center text-xs font-bold tracking-wide">
                      Kinetic Brand Cadence
                    </div>
                    <div className="mt-3 text-xs font-mono text-[#ede9fe]">
                      High-Retention Narrative Assets
                    </div>
                  </div>
                </div>

                {/* Bottom Overlay Highlight */}
                <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between w-full gap-4 text-white border-t border-white/10 pt-4">
                  <div>
                    <span className="text-xs text-[#ddd6fe] uppercase tracking-wider block mb-0.5 font-semibold">
                      Featured Creative Suite
                    </span>
                    <p className="text-base md:text-lg font-bold">
                      Comprehensive Digital Ecosystems &amp; Modern Experiences
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="px-3 py-1 rounded-full bg-white/15 backdrop-blur-md text-xs font-medium text-white">
                      Web Architecture
                    </span>
                    <span className="px-3 py-1 rounded-full bg-white/15 backdrop-blur-md text-xs font-medium text-white">
                      Visual AI
                    </span>
                    <span className="px-3 py-1 rounded-full bg-white/15 backdrop-blur-md text-xs font-medium text-white">
                      Branding
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Animated Infinite Skills & Tech Marquee Banner */}
      <div className="w-full py-3.5 bg-white/70 backdrop-blur-md border-y border-[#ede9fe] overflow-hidden">
        <div className="animate-marquee flex items-center gap-8 whitespace-nowrap">
          {[
            'UI/UX Architecture',
            'Modern Web Development',
            'React & Next.js',
            'Tailwind CSS',
            'AI Visual Art',
            'Figma Design Systems',
            'Interactive Prototyping',
            'Motion & 3D Graphics',
            'Bootstrap 5 Clean Code',
            'Brand Identity Systems',
            'UI/UX Architecture',
            'Modern Web Development',
            'React & Next.js',
            'Tailwind CSS',
            'AI Visual Art',
            'Figma Design Systems',
            'Interactive Prototyping',
            'Motion & 3D Graphics',
            'Bootstrap 5 Clean Code',
            'Brand Identity Systems',
          ].map((item, idx) => (
            <div key={idx} className="flex items-center gap-3">
              <span className="text-xs font-bold text-[#0f172a] uppercase tracking-wider">
                {item}
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#7c3aed]"></span>
            </div>
          ))}
        </div>
      </div>

      {/* Services Overview Section */}
      <section className="w-full py-16 bg-[#f5f3ff]/60 relative border-y border-[#f1f5f9]">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
          {/* Section Header */}
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs text-[#7c3aed] uppercase font-bold tracking-widest px-3 py-1 rounded-full bg-[#ede9fe]/60 mb-3">
              Core Offerings
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0f172a] tracking-tight mb-3">
              Comprehensive Design &amp; Digital Solutions
            </h2>
            <p className="text-sm md:text-base text-[#475569]">
              Crafted to elevate your brand presence and drive real conversion across every customer touchpoint.
            </p>
          </div>

          {/* 5 Service Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Service 1 */}
            <div className="group relative flex flex-col justify-between bg-white p-8 rounded-2xl shadow-[0_4px_20px_rgba(124,58,237,0.05)] border border-[#f1f5f9] hover:shadow-[0_16px_36px_rgba(124,58,237,0.12)] hover:-translate-y-1 transition-all duration-300">
              <div>
                <div className="w-14 h-14 rounded-2xl bg-[#ede9fe] flex items-center justify-center text-[#7c3aed] mb-6 group-hover:scale-110 transition-transform duration-200">
                  <Layers className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-[#0f172a] mb-2 group-hover:text-[#7c3aed] transition-colors">
                  UI/UX Design
                </h3>
                <p className="text-sm text-[#475569] leading-relaxed mb-6">
                  Clean wireframing, high-fidelity prototypes, user research, and modern intuitive design systems tailored for seamless product interactions.
                </p>
              </div>
              <button
                onClick={() => onNavigate('services')}
                className="inline-flex items-center gap-1 text-sm font-semibold text-[#7c3aed] group-hover:translate-x-1 transition-transform cursor-pointer"
              >
                <span>Learn more</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Service 2 */}
            <div className="group relative flex flex-col justify-between bg-white p-8 rounded-2xl shadow-[0_4px_20px_rgba(124,58,237,0.05)] border border-[#f1f5f9] hover:shadow-[0_16px_36px_rgba(124,58,237,0.12)] hover:-translate-y-1 transition-all duration-300">
              <div>
                <div className="w-14 h-14 rounded-2xl bg-[#ede9fe] flex items-center justify-center text-[#7c3aed] mb-6 group-hover:scale-110 transition-transform duration-200">
                  <Terminal className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-[#0f172a] mb-2 group-hover:text-[#7c3aed] transition-colors">
                  Website Development
                </h3>
                <p className="text-sm text-[#475569] leading-relaxed mb-6">
                  Responsive, clean-coded websites built with HTML5, CSS3, modern JavaScript, and Bootstrap 5 engineered for speed, SEO, and device adaptation.
                </p>
              </div>
              <button
                onClick={() => onNavigate('services')}
                className="inline-flex items-center gap-1 text-sm font-semibold text-[#7c3aed] group-hover:translate-x-1 transition-transform cursor-pointer"
              >
                <span>Learn more</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Service 3 */}
            <div className="group relative flex flex-col justify-between bg-white p-8 rounded-2xl shadow-[0_4px_20px_rgba(124,58,237,0.05)] border border-[#f1f5f9] hover:shadow-[0_16px_36px_rgba(124,58,237,0.12)] hover:-translate-y-1 transition-all duration-300">
              <div>
                <div className="w-14 h-14 rounded-2xl bg-[#ede9fe] flex items-center justify-center text-[#7c3aed] mb-6 group-hover:scale-110 transition-transform duration-200">
                  <Sparkles className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-[#0f172a] mb-2 group-hover:text-[#7c3aed] transition-colors">
                  AI Image &amp; Social Posts
                </h3>
                <p className="text-sm text-[#475569] leading-relaxed mb-6">
                  Eye-catching marketing creatives, carousel decks, branded banners, and AI-assisted visual art calibrated for maximum feed engagement.
                </p>
              </div>
              <button
                onClick={() => onNavigate('services')}
                className="inline-flex items-center gap-1 text-sm font-semibold text-[#7c3aed] group-hover:translate-x-1 transition-transform cursor-pointer"
              >
                <span>Learn more</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Service 4 */}
            <div className="group relative flex flex-col justify-between bg-white p-8 rounded-2xl shadow-[0_4px_20px_rgba(124,58,237,0.05)] border border-[#f1f5f9] hover:shadow-[0_16px_36px_rgba(124,58,237,0.12)] hover:-translate-y-1 transition-all duration-300">
              <div>
                <div className="w-14 h-14 rounded-2xl bg-[#ede9fe] flex items-center justify-center text-[#7c3aed] mb-6 group-hover:scale-110 transition-transform duration-200">
                  <Film className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-[#0f172a] mb-2 group-hover:text-[#7c3aed] transition-colors">
                  AI Video &amp; Reels Creation
                </h3>
                <p className="text-sm text-[#475569] leading-relaxed mb-6">
                  High-engagement short-form videos, promotional motion clips, and viral social media reels that tell compelling brand stories dynamically.
                </p>
              </div>
              <button
                onClick={() => onNavigate('services')}
                className="inline-flex items-center gap-1 text-sm font-semibold text-[#7c3aed] group-hover:translate-x-1 transition-transform cursor-pointer"
              >
                <span>Learn more</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Service 5 (Wide card) */}
            <div className="group relative flex flex-col justify-between bg-white p-8 rounded-2xl shadow-[0_4px_20px_rgba(124,58,237,0.05)] border border-[#f1f5f9] hover:shadow-[0_16px_36px_rgba(124,58,237,0.12)] hover:-translate-y-1 transition-all duration-300 md:col-span-2">
              <div className="flex flex-col md:flex-row md:items-start md:gap-8">
                <div className="w-14 h-14 shrink-0 rounded-2xl bg-[#ede9fe] flex items-center justify-center text-[#7c3aed] mb-6 md:mb-0 group-hover:scale-110 transition-transform duration-200">
                  <FileText className="w-7 h-7" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#0f172a] mb-2 group-hover:text-[#7c3aed] transition-colors">
                    Resume &amp; Portfolio Design
                  </h3>
                  <p className="text-sm text-[#475569] leading-relaxed mb-6 max-w-xl">
                    Executive CVs, interactive visual portfolios, and comprehensive personal branding kits that capture attention and open prestigious career opportunities.
                  </p>
                </div>
              </div>
              <div className="flex justify-start md:justify-end">
                <button
                  onClick={() => onNavigate('services')}
                  className="inline-flex items-center gap-1 text-sm font-semibold text-[#7c3aed] group-hover:translate-x-1 transition-transform cursor-pointer"
                >
                  <span>Learn more</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Preview (CSS & SVG Rendered - No external images) */}
      <section className="w-full py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
            <div>
              <span className="text-xs text-[#7c3aed] uppercase font-bold tracking-widest px-3 py-1 rounded-full bg-[#ede9fe]/60 mb-2 inline-block">
                Featured Work
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0f172a] tracking-tight">
                Recent Creative Highlights
              </h2>
            </div>
            <button
              onClick={() => onNavigate('gallery')}
              className="inline-flex items-center gap-1.5 text-[#7c3aed] font-semibold text-sm hover:text-[#9333ea] transition-colors cursor-pointer self-start md:self-auto"
            >
              <span>View full gallery</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* 3 Pure Vector / CSS Showcase Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Card 1: Fintech Flow */}
            <div
              className="group bg-white rounded-2xl overflow-hidden shadow-[0_4px_24px_rgba(124,58,237,0.06)] border border-[#f1f5f9] hover:shadow-[0_16px_36px_rgba(124,58,237,0.14)] transition-all duration-300 flex flex-col cursor-pointer"
              onClick={() => onOpenCaseStudy(featuredProjects[0])}
            >
              {/* Vector UI Canvas with User Image Tag */}
              <div className="relative aspect-[16/10] bg-[#0f172a] p-5 flex flex-col justify-between overflow-hidden">
                {/* ========================================================================= */}
                {/* FEATURED PROJECT 1 IMAGE: Replace src="" with your Fintech project image */}
                {/* Example: src="/assets/project-fintech.jpg" */}
                {/* ========================================================================= */}
                <img
                  src="/assets/project-fintech.png"
                  alt={featuredProjects[0].title}
                  className="w-full h-full object-cover absolute inset-0 z-10 transition-transform duration-500 group-hover:scale-105"
                  onError={(e) => {
                    (e.currentTarget as HTMLElement).style.display = 'none';
                  }}
                />

                <div className="flex items-center justify-between relative z-20">
                  <span className="bg-white/10 backdrop-blur-md text-[11px] font-mono text-[#ddd6fe] px-2.5 py-1 rounded-full">
                    UI/UX • Web App
                  </span>
                  <TrendingUp className="w-4 h-4 text-emerald-400" />
                </div>
                {/* Simulated Chart spline fallback */}
                <div className="my-auto py-2 relative z-0">
                  <div className="flex items-baseline gap-2 mb-2">
                    <span className="text-xl font-bold text-white font-mono">$48,500</span>
                    <span className="text-xs text-emerald-400 font-mono">+18.4%</span>
                  </div>
                  <div className="w-full h-12 flex items-end gap-1.5 pt-2">
                    {[40, 55, 35, 70, 60, 85, 95, 75, 90, 100].map((h, i) => (
                      <div
                        key={i}
                        className="flex-1 bg-gradient-to-t from-[#7c3aed]/40 to-[#9333ea] rounded-t-sm group-hover:brightness-125 transition-all"
                        style={{ height: `${h}%` }}
                      ></div>
                    ))}
                  </div>
                </div>
                <div className="flex items-center justify-between text-[11px] text-[#cbd5e1] font-mono border-t border-white/10 pt-2 relative z-20">
                  <span>Flow Liquidity Terminal</span>
                  <span className="text-emerald-400">Low Latency</span>
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-bold text-[#0f172a] mb-2 group-hover:text-[#7c3aed] transition-colors">
                    {featuredProjects[0].title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#475569] leading-relaxed mb-4">
                    {featuredProjects[0].description}
                  </p>
                </div>
                <div className="inline-flex items-center gap-1 text-sm font-semibold text-[#7c3aed]">
                  <span>View Case Study</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </div>
              </div>
            </div>

            {/* Card 2: Nova AI Cloud Platform */}
            <div
              className="group bg-white rounded-2xl overflow-hidden shadow-[0_4px_24px_rgba(124,58,237,0.06)] border border-[#f1f5f9] hover:shadow-[0_16px_36px_rgba(124,58,237,0.14)] transition-all duration-300 flex flex-col cursor-pointer"
              onClick={() => onOpenCaseStudy(featuredProjects[1])}
            >
              {/* Vector UI Canvas with User Image Tag */}
              <div className="relative aspect-[16/10] bg-[#f5f3ff] p-5 flex flex-col justify-between border-b border-[#f1f5f9] overflow-hidden">
                {/* ========================================================================= */}
                {/* FEATURED PROJECT 2 IMAGE: Replace src="" with your Nova AI project image */}
                {/* Example: src="/assets/project-nova.jpg" */}
                {/* ========================================================================= */}
                <img
                  src="/assets/project-nova-ai.png"
                  alt={featuredProjects[1].title}
                  className="w-full h-full object-cover absolute inset-0 z-10 transition-transform duration-500 group-hover:scale-105"
                  onError={(e) => {
                    (e.currentTarget as HTMLElement).style.display = 'none';
                  }}
                />

                <div className="flex items-center justify-between relative z-20">
                  <span className="bg-white text-[11px] font-semibold text-[#7c3aed] px-2.5 py-1 rounded-full shadow-sm">
                    Web Development • HTML5
                  </span>
                  <Cpu className="w-4 h-4 text-[#7c3aed]" />
                </div>
                <div className="my-auto bg-white p-3.5 rounded-xl border border-[#f1f5f9] shadow-sm relative z-0">
                  <div className="flex items-center justify-between text-xs font-bold text-[#0f172a] mb-2">
                    <span>Performance Benchmark</span>
                    <span className="text-emerald-600 font-mono">98/100</span>
                  </div>
                  <div className="w-full bg-[#f1f5f9] h-2 rounded-full overflow-hidden mb-2">
                    <div className="bg-emerald-500 h-full w-[98%] rounded-full"></div>
                  </div>
                  <div className="flex items-center gap-2 text-[11px] text-[#5f5e64]">
                    <span>Semantic HTML5</span>
                    <span>·</span>
                    <span>Bootstrap 5 Grid</span>
                  </div>
                </div>
                <div className="flex items-center justify-between text-[11px] text-[#5f5e64] font-mono relative z-20">
                  <span>Nova AI Cloud Architecture</span>
                  <span>Modern JS</span>
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-bold text-[#0f172a] mb-2 group-hover:text-[#7c3aed] transition-colors">
                    {featuredProjects[1].title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#475569] leading-relaxed mb-4">
                    {featuredProjects[1].description}
                  </p>
                </div>
                <div className="inline-flex items-center gap-1 text-sm font-semibold text-[#7c3aed]">
                  <span>View Case Study</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </div>
              </div>
            </div>

            {/* Card 3: Aura Haute Parfumerie */}
            <div
              className="group bg-white rounded-2xl overflow-hidden shadow-[0_4px_24px_rgba(124,58,237,0.06)] border border-[#f1f5f9] hover:shadow-[0_16px_36px_rgba(124,58,237,0.14)] transition-all duration-300 flex flex-col cursor-pointer"
              onClick={() => onOpenCaseStudy(featuredProjects[2])}
            >
              {/* Vector Luxury Canvas with User Image Tag */}
              <div className="relative aspect-[16/10] bg-gradient-to-br from-[#2f3035] to-[#0f172a] p-5 flex flex-col justify-between text-white overflow-hidden">
                {/* ========================================================================= */}
                {/* FEATURED PROJECT 3 IMAGE: Replace src="" with your Aura project image */}
                {/* Example: src="/assets/project-aura.jpg" */}
                {/* ========================================================================= */}
                <img
                  src="/assets/project-aura-luxury.png"
                  alt={featuredProjects[2].title}
                  className="w-full h-full object-cover absolute inset-0 z-10 transition-transform duration-500 group-hover:scale-105"
                  onError={(e) => {
                    (e.currentTarget as HTMLElement).style.display = 'none';
                  }}
                />

                <div className="flex items-center justify-between relative z-20">
                  <span className="bg-white/10 backdrop-blur-md text-[11px] font-semibold text-[#ede9fe] px-2.5 py-1 rounded-full">
                    AI Visuals • Branding
                  </span>
                  <Flame className="w-4 h-4 text-amber-400" />
                </div>
                <div className="my-auto text-center py-2 relative z-0">
                  <span className="text-xs uppercase tracking-[0.3em] text-[#ddd6fe] block mb-1">
                    Haute Parfumerie
                  </span>
                  <h4 className="text-2xl font-serif tracking-widest text-white italic">
                    A U R A
                  </h4>
                  <span className="text-[11px] text-[#cbd5e1] mt-1 block">
                    Visual Brand Campaign
                  </span>
                </div>
                <div className="flex items-center justify-between text-[11px] text-[#cbd5e1] font-mono border-t border-white/10 pt-2 relative z-20">
                  <span>Milan Rollout</span>
                  <span className="text-amber-300 font-semibold">4.8x Viral Reach</span>
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-bold text-[#0f172a] mb-2 group-hover:text-[#7c3aed] transition-colors">
                    {featuredProjects[2].title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#475569] leading-relaxed mb-4">
                    {featuredProjects[2].description}
                  </p>
                </div>
                <div className="inline-flex items-center gap-1 text-sm font-semibold text-[#7c3aed]">
                  <span>View Case Study</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Short About Me Teaser (Vector Monogram - No Image) */}
      <section className="w-full py-16 bg-[#f5f3ff]/50 border-t border-[#f1f5f9]">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Monogram Card */}
            <div className="lg:col-span-5 relative flex justify-center">
              <div className="relative w-full max-w-sm">
                <div className="absolute inset-0 bg-[#7c3aed]/20 rounded-3xl blur-2xl transform -rotate-3 scale-95"></div>
                <div className="relative bg-white p-6 rounded-3xl shadow-[0_12px_40px_rgba(124,58,237,0.12)] border border-[#f1f5f9] flex flex-col items-center text-center overflow-hidden">
                  {/* ========================================================================= */}
                  {/* ABOUT ME TEASER IMAGE: Replace src="" with your profile/portrait image */}
                  {/* Example: src="/assets/sailesh-portrait.jpg" */}
                  {/* ========================================================================= */}
                  <div className="w-28 h-28 rounded-2xl bg-gradient-to-tr from-[#7c3aed] to-[#9333ea] text-white flex items-center justify-center font-extrabold text-4xl shadow-md mb-4 overflow-hidden relative">
                    <img
                      src="/assets/sailesh-portrait.jpg"
                      alt="Sailesh Portrait"
                      className="w-full h-full object-cover absolute inset-0 z-10"
                      onError={(e) => {
                        (e.currentTarget as HTMLElement).style.display = 'none';
                      }}
                    />
                    <span>SD</span>
                  </div>
                  <h3 className="text-xl font-bold text-[#0f172a]">Sailesh</h3>
                  <p className="text-xs text-[#7c3aed] font-semibold mb-4">
                    Creative Designer &amp; Frontend Developer
                  </p>
                  <div className="w-full px-4 py-3 bg-[#f5f3ff] rounded-xl flex items-center justify-between text-xs">
                    <span className="text-[#5f5e64]">Availability:</span>
                    <span className="text-emerald-700 font-semibold flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                      Open Worldwide
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Narrative */}
            <div className="lg:col-span-7 flex flex-col items-start">
              <span className="text-xs text-[#7c3aed] uppercase font-bold tracking-widest px-3 py-1 rounded-full bg-[#ede9fe]/60 mb-3">
                About Me
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0f172a] tracking-tight mb-4 leading-tight">
                Hi, I'm Sailesh — crafting digital experiences where aesthetics meet functionality.
              </h2>
              <p className="text-base text-[#475569] mb-6 leading-relaxed">
                I bridge the gap between imaginative creative design and rock-solid front-end execution. Whether designing an enterprise UI system from scratch or generating viral AI visuals, my approach is grounded in clarity, purpose, and visual distinction.
              </p>

              {/* Stats Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full mb-6">
                <div className="bg-white p-4 rounded-xl shadow-sm border border-[#f1f5f9]">
                  <span className="block text-2xl font-bold text-[#7c3aed]">5+</span>
                  <span className="text-xs text-[#5f5e64]">Service Specializations</span>
                </div>
                <div className="bg-white p-4 rounded-xl shadow-sm border border-[#f1f5f9]">
                  <span className="block text-2xl font-bold text-[#7c3aed]">100%</span>
                  <span className="text-xs text-[#5f5e64]">Focused on Quality</span>
                </div>
                <div className="bg-white p-4 rounded-xl shadow-sm border border-[#f1f5f9]">
                  <span className="block text-2xl font-bold text-[#7c3aed]">Modern</span>
                  <span className="text-xs text-[#5f5e64]">Tech &amp; AI Stack</span>
                </div>
              </div>

              <button
                onClick={() => onNavigate('about')}
                className="inline-flex items-center gap-2 bg-[#ede9fe] text-[#0f172a] hover:bg-[#7c3aed] hover:text-white text-sm font-semibold px-6 py-3 rounded-full transition-all duration-200 cursor-pointer"
              >
                <span>Read Full Story</span>
                <UserCheck className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Sailesh Designs Section */}
      <section className="w-full py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs text-[#7c3aed] uppercase font-bold tracking-widest px-3 py-1 rounded-full bg-[#ede9fe]/60 mb-2 inline-block">
              The Advantage
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0f172a] tracking-tight mb-2">
              Why Choose Sailesh Designs
            </h2>
            <p className="text-sm md:text-base text-[#475569]">
              A disciplined blend of creative intuition, modern technical standards, and reliable collaborative workflows.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-2xl shadow-[0_2px_12px_rgba(124,58,237,0.04)] border border-[#f1f5f9] hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-[#ede9fe] flex items-center justify-center text-[#7c3aed] mb-4">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-[#0f172a] mb-1">Pixel-Perfect Craft</h3>
              <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                Every margin, typography scale, and color gradient is intentionally chosen to project premium authority.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-[0_2px_12px_rgba(124,58,237,0.04)] border border-[#f1f5f9] hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-[#ede9fe] flex items-center justify-center text-[#7c3aed] mb-4">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-[#0f172a] mb-1">Modern Tech &amp; AI</h3>
              <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                Blending cutting-edge UI design tools with AI efficiency for faster turnarounds without quality compromise.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-[0_2px_12px_rgba(124,58,237,0.04)] border border-[#f1f5f9] hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-[#ede9fe] flex items-center justify-center text-[#7c3aed] mb-4">
                <Terminal className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-[#0f172a] mb-1">Clean Frontend Code</h3>
              <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                Semantic HTML, modern CSS architectures, and Bootstrap 5 structured with high maintainability standards.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-[0_2px_12px_rgba(124,58,237,0.04)] border border-[#f1f5f9] hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-[#ede9fe] flex items-center justify-center text-[#7c3aed] mb-4">
                <Mail className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-[#0f172a] mb-1">Direct Collaboration</h3>
              <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                Transparent, zero-bureaucracy communication from concept discovery sprints to final production handoff.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA Banner */}
      <section className="w-full pb-16 pt-6">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
          <div className="relative overflow-hidden bg-[#2f3035] text-[#f1f0f7] rounded-3xl p-8 md:p-14 shadow-[0_24px_60px_-12px_rgba(124,58,237,0.3)]">
            <div className="pointer-events-none absolute -right-20 -bottom-20 w-96 h-96 bg-[#7c3aed] rounded-full blur-[100px] opacity-30"></div>
            <div className="pointer-events-none absolute left-10 -top-20 w-80 h-80 bg-[#9333ea] rounded-full blur-[90px] opacity-20"></div>

            <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-8">
              <div className="max-w-2xl">
                <span className="inline-flex items-center gap-2 text-[#ddd6fe] text-xs uppercase font-bold tracking-wider mb-3">
                  <span className="w-2 h-2 rounded-full bg-emerald-400"></span> Let's Work Together
                </span>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight mb-3 text-[#f1f0f7]">
                  Have a project in mind? Let's build something exceptional together.
                </h2>
                <p className="text-sm md:text-base text-[#ede9fe] max-w-xl leading-relaxed">
                  Available for freelance projects, UI/UX design sprints, and custom web builds. Let's discuss your timeline and vision.
                </p>
              </div>

              <div className="shrink-0">
                <button
                  onClick={() => onNavigate('contact')}
                  className="inline-flex items-center justify-center gap-2 bg-[#7c3aed] text-white text-sm font-semibold px-8 py-4 rounded-full shadow-[0_8px_24px_rgba(124,58,237,0.4)] hover:bg-[#9333ea] transition-all duration-200 hover:-translate-y-0.5 active:scale-95 cursor-pointer"
                >
                  <span>Start a Conversation</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
