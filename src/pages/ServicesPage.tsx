import React from 'react';
import { ArrowRight, CheckCircle2, MessageSquare, Compass, Brush, Rocket } from 'lucide-react';
import { SERVICES_LIST } from '../data/portfolioData';

interface ServicesPageProps {
  onNavigate: (page: string) => void;
  onSelectService: (serviceName: string) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ onNavigate, onSelectService }) => {
  const handleDiscuss = (serviceTitle: string) => {
    onSelectService(serviceTitle);
    onNavigate('contact');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="flex flex-col w-full">
      {/* Ambient Glows */}
      <div className="relative w-full overflow-hidden">
        <div className="pointer-events-none absolute -top-40 right-1/4 w-[540px] h-[540px] rounded-full bg-[#7c3aed]/10 blur-[130px] -z-10"></div>
        <div className="pointer-events-none absolute top-[38%] -left-32 w-[600px] h-[600px] rounded-full bg-[#9333ea]/10 blur-[150px] -z-10"></div>
        <div className="pointer-events-none absolute bottom-40 right-0 w-[500px] h-[500px] rounded-full bg-[#7c3aed]/8 blur-[120px] -z-10"></div>

        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 pt-10 pb-16">
          {/* Header */}
          <header className="max-w-3xl flex flex-col gap-3 mb-12">
            <h1 className="text-4xl md:text-5xl font-extrabold text-[#0f172a] tracking-tight">
              Services That Help Your Brand Stand Out
            </h1>
            <p className="text-base sm:text-lg text-[#475569] leading-relaxed">
              Tailored creative and technical solutions engineered to communicate your vision and convert visitors into clients.
            </p>
          </header>

          {/* Services Grid (3 + 2 layout) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {/* Card 1: UI/UX Design */}
            <article className="group relative flex flex-col justify-between bg-white rounded-2xl p-6 md:p-8 shadow-[0_4px_24px_rgba(124,58,237,0.06)] border border-[#f1f5f9] hover:shadow-[0_16px_40px_rgba(124,58,237,0.14)] hover:-translate-y-1.5 transition-all duration-300">
              <div className="flex flex-col gap-6">
                <div className="flex items-center justify-between">
                  <div className="w-14 h-14 rounded-2xl bg-[#ede9fe] flex items-center justify-center text-[#7c3aed] group-hover:bg-[#7c3aed] group-hover:text-white transition-colors duration-300">
                    <span className="material-symbols-outlined text-[28px]">devices_fold</span>
                  </div>
                  <span className="text-xs text-[#777587] font-mono">01 // UI-UX</span>
                </div>

                {/* ========================================================================= */}
                {/* SERVICE 1 IMAGE: UI/UX Design - Replace src="" with your preview image */}
                {/* Example: src="/assets/service-uiux.jpg" */}
                {/* ========================================================================= */}
                <div className="w-full h-44 rounded-xl overflow-hidden bg-gradient-to-br from-[#1e1b4b] to-[#0f172a] p-3.5 relative border border-white/10 flex flex-col justify-between">
                  <img
                    src="/assets/project-fintech.png"
                    alt="UI/UX Design Preview"
                    className="w-full h-full object-cover absolute inset-0 z-10 transition-transform duration-500 group-hover:scale-105"
                    onError={(e) => {
                      (e.currentTarget as HTMLElement).style.display = 'none';
                    }}
                  />
                  <div className="flex items-center justify-between text-white/50 text-[10px] font-mono border-b border-white/10 pb-1.5">
                    <span className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#a855f7]"></span>
                      Frame 01: 1440 × 900
                    </span>
                    <span>100% Zoom</span>
                  </div>

                  <div className="grid grid-cols-12 gap-2 my-auto">
                    <div className="col-span-4 bg-white/10 rounded-lg p-2 border border-white/15 flex flex-col gap-1.5">
                      <div className="w-8 h-2 bg-[#a855f7] rounded-sm"></div>
                      <div className="w-full h-1.5 bg-white/20 rounded-sm"></div>
                      <div className="w-3/4 h-1.5 bg-white/15 rounded-sm"></div>
                      <div className="w-12 h-3.5 bg-[#7c3aed] rounded text-[8px] text-white flex items-center justify-center font-bold mt-1">CTA</div>
                    </div>
                    <div className="col-span-8 bg-white/5 rounded-lg p-2 border border-white/10 flex flex-col gap-1.5 justify-center">
                      <div className="flex items-center gap-1">
                        <div className="w-3 h-3 rounded-full bg-emerald-400/80"></div>
                        <div className="w-16 h-1.5 bg-white/40 rounded-sm"></div>
                      </div>
                      <div className="h-10 w-full rounded bg-white/10 p-1 flex items-end gap-1">
                        <div className="w-1/5 h-4 bg-[#a855f7]/60 rounded-t-sm"></div>
                        <div className="w-1/5 h-7 bg-[#a855f7]/80 rounded-t-sm"></div>
                        <div className="w-1/5 h-9 bg-[#7c3aed] rounded-t-sm"></div>
                        <div className="w-1/5 h-6 bg-[#a855f7]/70 rounded-t-sm"></div>
                        <div className="w-1/5 h-8 bg-[#a855f7] rounded-t-sm"></div>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-[9px] text-white/40 font-mono">
                    <span>Tool: Pen / Vector</span>
                    <span className="text-emerald-400 font-semibold">● 60 FPS Prototype</span>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-[#0f172a] mb-1">UI/UX Design</h2>
                  <p className="text-sm text-[#475569] leading-relaxed">
                    Intuitive, user-centered digital product interfaces designed for clarity, usability, and effortless adoption.
                  </p>
                </div>

                <div className="flex flex-col gap-2 pt-1 border-t border-[#f1f5f9]">
                  <span className="text-xs text-[#0f172a] uppercase tracking-wider font-bold mb-1">
                    What's Included
                  </span>
                  <ul className="flex flex-col gap-1.5 text-xs text-[#475569]">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#7c3aed] shrink-0" />
                      <span>User journey mapping</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#7c3aed] shrink-0" />
                      <span>Wireframing &amp; UX prototypes</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#7c3aed] shrink-0" />
                      <span>Interactive Figma prototypes</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#7c3aed] shrink-0" />
                      <span>Scalable design systems &amp; tokens</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#7c3aed] shrink-0" />
                      <span>Mobile &amp; desktop adaptive layouts</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="pt-6 mt-4">
                <button
                  onClick={() => handleDiscuss('UI/UX Design')}
                  className="inline-flex items-center justify-between w-full bg-[#f5f3ff] hover:bg-[#7c3aed] hover:text-white text-[#0f172a] text-sm font-semibold px-6 py-3 rounded-full transition-all duration-200 group/btn cursor-pointer"
                >
                  <span>Discuss Your Project</span>
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </article>

            {/* Card 2: Website Design & Development */}
            <article className="group relative flex flex-col justify-between bg-white rounded-2xl p-6 md:p-8 shadow-[0_4px_24px_rgba(124,58,237,0.06)] border border-[#f1f5f9] hover:shadow-[0_16px_40px_rgba(124,58,237,0.14)] hover:-translate-y-1.5 transition-all duration-300">
              <div className="flex flex-col gap-6">
                <div className="flex items-center justify-between">
                  <div className="w-14 h-14 rounded-2xl bg-[#ede9fe] flex items-center justify-center text-[#7c3aed] group-hover:bg-[#7c3aed] group-hover:text-white transition-colors duration-300">
                    <span className="material-symbols-outlined text-[28px]">code</span>
                  </div>
                  <span className="text-xs text-[#777587] font-mono">02 // WEB-DEV</span>
                </div>

                {/* ========================================================================= */}
                {/* SERVICE 2 IMAGE: Website Design & Dev - Replace src="" with your preview image */}
                {/* Example: src="/assets/service-webdev.jpg" */}
                {/* ========================================================================= */}
                <div className="w-full h-44 rounded-xl overflow-hidden bg-[#0d1117] p-3 text-left font-mono border border-white/10 flex flex-col justify-between relative">
                  <img
                    src="/assets/service-webdev.png"
                    alt="Website Development Preview"
                    className="w-full h-full object-cover absolute inset-0 z-10 transition-transform duration-500 group-hover:scale-105"
                    onError={(e) => {
                      (e.currentTarget as HTMLElement).style.display = 'none';
                    }}
                  />
                  <div className="flex items-center justify-between border-b border-white/10 pb-2">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80"></span>
                      <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80"></span>
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80"></span>
                      <span className="ml-2 text-[10px] text-white/50">index.html — Bootstrap 5</span>
                    </div>
                    <span className="text-[9px] text-emerald-400 font-semibold bg-emerald-500/10 px-2 py-0.5 rounded">READY</span>
                  </div>

                  <div className="text-[10px] leading-relaxed text-white/80 py-1 space-y-0.5">
                    <div><span className="text-purple-400">&lt;section</span> <span className="text-sky-300">class</span>=<span className="text-emerald-300">"container py-5"</span><span className="text-purple-400">&gt;</span></div>
                    <div className="pl-3"><span className="text-purple-400">&lt;div</span> <span className="text-sky-300">class</span>=<span className="text-emerald-300">"row g-4 align-items-center"</span><span className="text-purple-400">&gt;</span></div>
                    <div className="pl-6"><span className="text-purple-400">&lt;h1</span> <span className="text-sky-300">class</span>=<span className="text-emerald-300">"display-5 fw-bold"</span><span className="text-purple-400">&gt;</span>Sailesh Portfolio<span className="text-purple-400">&lt;/h1&gt;</span></div>
                    <div className="pl-6"><span className="text-purple-400">&lt;button</span> <span className="text-sky-300">class</span>=<span className="text-emerald-300">"btn btn-primary"</span><span className="text-purple-400">&gt;</span>Hire Me<span className="text-purple-400">&lt;/button&gt;</span></div>
                    <div className="pl-3"><span className="text-purple-400">&lt;/div&gt;</span></div>
                    <div><span className="text-purple-400">&lt;/section&gt;</span></div>
                  </div>

                  <div className="flex items-center justify-between text-[9px] text-white/40 pt-1.5 border-t border-white/10">
                    <span>Clean Semantics &amp; SEO</span>
                    <span className="text-[#c084fc]">100% Mobile Responsive</span>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-[#0f172a] mb-1">
                    Website Design &amp; Development
                  </h2>
                  <p className="text-sm text-[#475569] leading-relaxed">
                    Responsive, lightning-fast modern websites built with semantic HTML5, CSS3, modern JavaScript, and Bootstrap 5.
                  </p>
                </div>

                <div className="flex flex-col gap-2 pt-1 border-t border-[#f1f5f9]">
                  <span className="text-xs text-[#0f172a] uppercase tracking-wider font-bold mb-1">
                    What's Included
                  </span>
                  <ul className="flex flex-col gap-1.5 text-xs text-[#475569]">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#7c3aed] shrink-0" />
                      <span>Custom landing pages &amp; portfolios</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#7c3aed] shrink-0" />
                      <span>Mobile-first responsive architecture</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#7c3aed] shrink-0" />
                      <span>Modern JS &amp; Bootstrap 5 integration</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#7c3aed] shrink-0" />
                      <span>Cross-browser speed optimization</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#7c3aed] shrink-0" />
                      <span>Clean documentation &amp; source handoff</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="pt-6 mt-4">
                <button
                  onClick={() => handleDiscuss('Website Design & Development')}
                  className="inline-flex items-center justify-between w-full bg-[#f5f3ff] hover:bg-[#7c3aed] hover:text-white text-[#0f172a] text-sm font-semibold px-6 py-3 rounded-full transition-all duration-200 group/btn cursor-pointer"
                >
                  <span>Discuss Your Project</span>
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </article>

            {/* Card 3: Social Media & Marketing Posts */}
            <article className="group relative flex flex-col justify-between bg-white rounded-2xl p-6 md:p-8 shadow-[0_4px_24px_rgba(124,58,237,0.06)] border border-[#f1f5f9] hover:shadow-[0_16px_40px_rgba(124,58,237,0.14)] hover:-translate-y-1.5 transition-all duration-300">
              <div className="flex flex-col gap-6">
                <div className="flex items-center justify-between">
                  <div className="w-14 h-14 rounded-2xl bg-[#ede9fe] flex items-center justify-center text-[#7c3aed] group-hover:bg-[#7c3aed] group-hover:text-white transition-colors duration-300">
                    <span className="material-symbols-outlined text-[28px]">auto_awesome_motion</span>
                  </div>
                  <span className="text-xs text-[#777587] font-mono">03 // SOCIAL</span>
                </div>

                {/* ========================================================================= */}
                {/* SERVICE 3 IMAGE: Social Media Posts - Replace src="" with your preview image */}
                {/* Example: src="/assets/service-social.jpg" */}
                {/* ========================================================================= */}
                <div className="w-full h-44 rounded-xl overflow-hidden bg-gradient-to-tr from-[#2d124d] via-[#1f1641] to-[#3b1261] p-3 text-left border border-white/10 flex flex-col justify-between relative">
                  <img
                    src="/assets/service-ai-visuals.png"
                    alt="Social Media Creative Preview"
                    className="w-full h-full object-cover absolute inset-0 z-10 transition-transform duration-500 group-hover:scale-105"
                    onError={(e) => {
                      (e.currentTarget as HTMLElement).style.display = 'none';
                    }}
                  />
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono text-pink-300 font-semibold bg-pink-500/20 px-2 py-0.5 rounded-full border border-pink-500/30">
                      1080 × 1080 Carousel
                    </span>
                    <span className="text-[10px] text-emerald-400 font-bold flex items-center gap-1">
                      <span>▲ 284%</span> CTR
                    </span>
                  </div>

                  <div className="grid grid-cols-3 gap-2 my-auto">
                    <div className="aspect-[4/5] rounded-lg bg-white/10 border border-white/20 p-2 flex flex-col justify-between">
                      <div className="w-4 h-4 rounded bg-pink-400/80"></div>
                      <div className="space-y-1">
                        <div className="w-full h-1 bg-white/60 rounded"></div>
                        <div className="w-2/3 h-1 bg-white/40 rounded"></div>
                      </div>
                      <span className="text-[7px] text-white/50">Slide 1</span>
                    </div>

                    <div className="aspect-[4/5] rounded-lg bg-gradient-to-b from-[#7c3aed] to-[#a855f7] p-2 flex flex-col justify-between shadow-md">
                      <span className="text-[9px] font-bold text-white leading-tight">Brand Launch</span>
                      <div className="w-8 h-2.5 bg-white text-[#581c87] text-[7px] font-bold rounded flex items-center justify-center">SWIPE</div>
                      <span className="text-[7px] text-white/80">Slide 2</span>
                    </div>

                    <div className="aspect-[4/5] rounded-lg bg-white/10 border border-white/20 p-2 flex flex-col justify-between">
                      <div className="w-4 h-4 rounded-full bg-emerald-400/80"></div>
                      <div className="space-y-1">
                        <div className="w-full h-1 bg-white/60 rounded"></div>
                        <div className="w-1/2 h-1 bg-white/40 rounded"></div>
                      </div>
                      <span className="text-[7px] text-white/50">Slide 3</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-[9px] text-white/50 font-mono">
                    <span>IG / LinkedIn / X Suites</span>
                    <span className="text-white/80">Figma + Canva Kits</span>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-[#0f172a] mb-1">
                    Social Media &amp; Marketing Posts
                  </h2>
                  <p className="text-sm text-[#475569] leading-relaxed">
                    Visually magnetic promotional graphics that stop the scroll, strengthen brand authority, and boost engagement.
                  </p>
                </div>

                <div className="flex flex-col gap-2 pt-1 border-t border-[#f1f5f9]">
                  <span className="text-xs text-[#0f172a] uppercase tracking-wider font-bold mb-1">
                    What's Included
                  </span>
                  <ul className="flex flex-col gap-1.5 text-xs text-[#475569]">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#7c3aed] shrink-0" />
                      <span>Instagram multi-slide carousels</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#7c3aed] shrink-0" />
                      <span>LinkedIn banner sets &amp; executive assets</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#7c3aed] shrink-0" />
                      <span>High-conversion ad creative suites</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#7c3aed] shrink-0" />
                      <span>Custom reusable Figma / Canva templates</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#7c3aed] shrink-0" />
                      <span>Product promotional campaign packs</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="pt-6 mt-4">
                <button
                  onClick={() => handleDiscuss('Social Media & Marketing Posts')}
                  className="inline-flex items-center justify-between w-full bg-[#f5f3ff] hover:bg-[#7c3aed] hover:text-white text-[#0f172a] text-sm font-semibold px-6 py-3 rounded-full transition-all duration-200 group/btn cursor-pointer"
                >
                  <span>Discuss Your Project</span>
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </article>

            {/* Card 4: AI Video & Reels Creation */}
            <article className="group relative flex flex-col justify-between bg-white rounded-2xl p-6 md:p-8 shadow-[0_4px_24px_rgba(124,58,237,0.06)] border border-[#f1f5f9] hover:shadow-[0_16px_40px_rgba(124,58,237,0.14)] hover:-translate-y-1.5 transition-all duration-300">
              <div className="flex flex-col gap-6">
                <div className="flex items-center justify-between">
                  <div className="w-14 h-14 rounded-2xl bg-[#ede9fe] flex items-center justify-center text-[#7c3aed] group-hover:bg-[#7c3aed] group-hover:text-white transition-colors duration-300">
                    <span className="material-symbols-outlined text-[28px]">movie_filter</span>
                  </div>
                  <span className="text-xs text-[#777587] font-mono">04 // AI-VIDEO</span>
                </div>

                {/* ========================================================================= */}
                {/* SERVICE 4 IMAGE: AI Video & Reels - Replace src="" with your preview image */}
                {/* Example: src="/assets/service-video.jpg" */}
                {/* ========================================================================= */}
                <div className="w-full h-44 rounded-xl overflow-hidden bg-gradient-to-br from-[#121420] to-[#1c1333] p-3 text-left border border-white/10 flex flex-col justify-between relative">
                  <img
                    src="/assets/service-ai-visuals.png"
                    alt="AI Video & Reels Preview"
                    className="w-full h-full object-cover absolute inset-0 z-10 transition-transform duration-500 group-hover:scale-105"
                    onError={(e) => {
                      (e.currentTarget as HTMLElement).style.display = 'none';
                    }}
                  />
                  <div className="flex items-center justify-between text-[10px] font-mono text-white/50 border-b border-white/10 pb-1.5">
                    <span className="flex items-center gap-1.5 text-rose-400">
                      <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse"></span>
                      REC 00:00:15:24
                    </span>
                    <span className="text-white/70">4K 60fps • 9:16</span>
                  </div>

                  <div className="flex items-center justify-center gap-4 my-auto">
                    {/* 9:16 Mini Reel Frame */}
                    <div className="w-14 h-24 rounded-lg bg-black border border-white/20 p-1 flex flex-col justify-between items-center relative overflow-hidden shadow-md">
                      <div className="w-4 h-1 bg-white/30 rounded-full mt-0.5"></div>
                      <div className="w-6 h-6 rounded-full bg-[#7c3aed] flex items-center justify-center text-white shadow-sm">
                        <span className="text-[10px]">▶</span>
                      </div>
                      <div className="w-full text-center">
                        <span className="text-[6px] font-mono text-emerald-400">#AIReels</span>
                      </div>
                    </div>

                    {/* Timeline Tracks */}
                    <div className="flex-1 flex flex-col gap-1.5">
                      <div className="h-4 bg-white/10 rounded px-2 flex items-center justify-between text-[8px] text-white/70 border border-white/10">
                        <span>Video: Prompt_Gen_v3</span>
                        <span className="text-purple-300 font-mono">100%</span>
                      </div>
                      <div className="h-4 bg-[#7c3aed]/40 rounded px-2 flex items-center justify-between text-[8px] text-[#ddd6fe] border border-[#7c3aed]/50">
                        <span>Audio: BeatSync_128bpm</span>
                        <span className="font-mono">♫ FX</span>
                      </div>
                      <div className="h-4 bg-amber-500/20 rounded px-2 flex items-center justify-between text-[8px] text-amber-200 border border-amber-500/30">
                        <span>Captions: Kinetic Subtitles</span>
                        <span>Auto</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-[9px] text-white/50 font-mono">
                    <span>Export: Reels / TikTok / Shorts</span>
                    <span className="text-emerald-400">Render Ready</span>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-[#0f172a] mb-1">
                    AI Video &amp; Reels Creation
                  </h2>
                  <p className="text-sm text-[#475569] leading-relaxed">
                    High-impact short-form video content and AI-assisted dynamic reels crafted for Instagram, TikTok, and YouTube Shorts.
                  </p>
                </div>

                <div className="flex flex-col gap-2 pt-1 border-t border-[#f1f5f9]">
                  <span className="text-xs text-[#0f172a] uppercase tracking-wider font-bold mb-1">
                    What's Included
                  </span>
                  <ul className="flex flex-col gap-1.5 text-xs text-[#475569]">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#7c3aed] shrink-0" />
                      <span>Dynamic narrative scripting &amp; hooks</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#7c3aed] shrink-0" />
                      <span>AI visual generation &amp; smart avatars</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#7c3aed] shrink-0" />
                      <span>Kinetic motion subtitle design</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#7c3aed] shrink-0" />
                      <span>Precise beat matching &amp; sound styling</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#7c3aed] shrink-0" />
                      <span>Platform-optimized 9:16 delivery</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="pt-6 mt-4">
                <button
                  onClick={() => handleDiscuss('AI Video & Reels Creation')}
                  className="inline-flex items-center justify-between w-full bg-[#f5f3ff] hover:bg-[#7c3aed] hover:text-white text-[#0f172a] text-sm font-semibold px-6 py-3 rounded-full transition-all duration-200 group/btn cursor-pointer"
                >
                  <span>Discuss Your Project</span>
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </article>

            {/* Card 5: Resume & Portfolio Design (Span 2) */}
            <article className="group relative flex flex-col justify-between bg-white rounded-2xl p-6 md:p-8 shadow-[0_4px_24px_rgba(124,58,237,0.06)] border border-[#f1f5f9] hover:shadow-[0_16px_40px_rgba(124,58,237,0.14)] hover:-translate-y-1.5 transition-all duration-300 md:col-span-2">
              <div className="flex flex-col gap-6">
                <div className="flex items-center justify-between">
                  <div className="w-14 h-14 rounded-2xl bg-[#ede9fe] flex items-center justify-center text-[#7c3aed] group-hover:bg-[#7c3aed] group-hover:text-white transition-colors duration-300">
                    <span className="material-symbols-outlined text-[28px]">badge</span>
                  </div>
                  <span className="text-xs text-[#777587] font-mono">05 // CAREER-ASSETS</span>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                  <div className="lg:col-span-6 flex flex-col gap-3">
                    <h2 className="text-2xl font-bold text-[#0f172a]">
                      Resume &amp; Portfolio Design
                    </h2>
                    <p className="text-sm text-[#475569] leading-relaxed">
                      Standout professional resumes and visual portfolio kits designed to highlight your expertise and land career opportunities.
                    </p>

                    <div className="flex flex-col gap-2 pt-2 border-t border-[#f1f5f9]">
                      <span className="text-xs text-[#0f172a] uppercase tracking-wider font-bold mb-1">
                        What's Included
                      </span>
                      <ul className="flex flex-col gap-1.5 text-xs text-[#475569]">
                        <li className="flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-[#7c3aed] shrink-0" />
                          <span>ATS-friendly executive document architectures</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-[#7c3aed] shrink-0" />
                          <span>Editorial typography hierarchy &amp; readability</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-[#7c3aed] shrink-0" />
                          <span>Custom interactive portfolio case-study decks</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-[#7c3aed] shrink-0" />
                          <span>Print-ready CMYK &amp; web-optimized interactive PDF</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  {/* ========================================================================= */}
                  {/* SERVICE 5 IMAGE: Resume & Portfolio - Replace src="" with your preview image */}
                  {/* Example: src="/assets/service-resume.jpg" */}
                  {/* ========================================================================= */}
                  <div className="lg:col-span-6 w-full h-56 rounded-xl overflow-hidden bg-gradient-to-br from-[#181926] to-[#25283d] p-4 text-left border border-white/10 flex flex-col justify-between relative">
                    <img
                      src="/assets/service-webdev.png"
                      alt="Resume & Portfolio Design Preview"
                      className="w-full h-full object-cover absolute inset-0 z-10 transition-transform duration-500 group-hover:scale-105"
                      onError={(e) => {
                        (e.currentTarget as HTMLElement).style.display = 'none';
                      }}
                    />
                    <div className="flex items-center justify-between border-b border-white/10 pb-2">
                      <div className="flex items-center gap-2">
                        <span className="w-2.5 h-2.5 rounded-full bg-emerald-400"></span>
                        <span className="text-xs font-bold text-white tracking-wide">EXECUTIVE RESUME &amp; DECK</span>
                      </div>
                      <span className="text-[10px] font-mono text-emerald-300 bg-emerald-500/20 px-2 py-0.5 rounded border border-emerald-500/30">
                        ATS SCORE: 99/100
                      </span>
                    </div>

                    <div className="grid grid-cols-12 gap-3 my-auto items-center">
                      <div className="col-span-7 bg-white/10 rounded-lg p-2.5 border border-white/10 flex flex-col gap-1.5">
                        <div className="flex items-center justify-between">
                          <div className="w-20 h-2 bg-white/80 rounded"></div>
                          <div className="w-10 h-1.5 bg-[#a855f7] rounded"></div>
                        </div>
                        <div className="w-full h-1 bg-white/30 rounded mt-1"></div>
                        <div className="w-4/5 h-1 bg-white/30 rounded"></div>
                        <div className="flex gap-1 mt-1">
                          <span className="w-8 h-2 bg-purple-400/40 rounded text-[6px] text-white flex items-center justify-center font-mono">React</span>
                          <span className="w-8 h-2 bg-purple-400/40 rounded text-[6px] text-white flex items-center justify-center font-mono">Figma</span>
                          <span className="w-10 h-2 bg-purple-400/40 rounded text-[6px] text-white flex items-center justify-center font-mono">Tailwind</span>
                        </div>
                      </div>

                      <div className="col-span-5 flex flex-col gap-1.5 text-[9px] text-white/70 font-mono">
                        <div className="bg-white/5 p-1.5 rounded border border-white/10">
                          <span className="text-purple-300 block font-bold">Typography</span>
                          <span>Plus Jakarta Sans</span>
                        </div>
                        <div className="bg-white/5 p-1.5 rounded border border-white/10">
                          <span className="text-emerald-300 block font-bold">Format</span>
                          <span>Vector PDF + Figma</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between text-[9px] text-white/50 font-mono pt-1.5 border-t border-white/10">
                      <span>Recruiter Optimized Architecture</span>
                      <span className="text-[#c084fc]">1-Page &amp; 2-Page Options</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-6 mt-4">
                <button
                  onClick={() => handleDiscuss('Resume & Portfolio Design')}
                  className="inline-flex items-center justify-between w-full md:w-fit md:min-w-[260px] bg-[#f5f3ff] hover:bg-[#7c3aed] hover:text-white text-[#0f172a] text-sm font-semibold px-8 py-3 rounded-full transition-all duration-200 group/btn cursor-pointer"
                >
                  <span>Discuss Your Project</span>
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </article>
          </div>

          {/* Workflow Section */}
          <section className="flex flex-col gap-8 mb-16">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-4 border-b border-[#f1f5f9]">
              <div className="max-w-2xl flex flex-col gap-1">
                <div className="inline-flex items-center gap-1.5 text-[#7c3aed] text-xs uppercase font-bold tracking-wider">
                  <Compass className="w-4 h-4" />
                  <span>The Methodology</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-[#0f172a]">
                  A Simple, Transparent Workflow
                </h2>
                <p className="text-sm md:text-base text-[#475569]">
                  From initial idea to polished launch in four structured stages.
                </p>
              </div>
              <div className="hidden md:flex items-center gap-1.5 text-[#5f5e64] text-xs font-semibold">
                <CheckCircle2 className="w-4 h-4 text-[#7c3aed]" />
                <span>Iterative &amp; Milestone Driven</span>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="relative flex flex-col justify-between bg-[#f5f3ff] rounded-2xl p-6 hover:bg-[#f1f5f9] transition-colors border border-[#f1f5f9]">
                <div className="flex flex-col gap-3">
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-[#7c3aed] font-mono">01</span>
                    <span className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#7c3aed] shadow-sm">
                      <MessageSquare className="w-4 h-4" />
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-[#0f172a]">Briefing</h3>
                  <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                    Discussing goals, brand identity, project scope, target audience, and deadlines to align vision.
                  </p>
                </div>
                <div className="mt-6 pt-2 border-t border-[#e2e2e9]">
                  <span className="text-[11px] text-[#7c3aed] uppercase font-bold tracking-wider">
                    Phase 1 • Discovery
                  </span>
                </div>
              </div>

              <div className="relative flex flex-col justify-between bg-[#f5f3ff] rounded-2xl p-6 hover:bg-[#f1f5f9] transition-colors border border-[#f1f5f9]">
                <div className="flex flex-col gap-3">
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-[#7c3aed] font-mono">02</span>
                    <span className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#7c3aed] shadow-sm">
                      <Compass className="w-4 h-4" />
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-[#0f172a]">Planning</h3>
                  <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                    Creating sitemaps, wireframes, moodboards, and structural blueprints before writing a line of code.
                  </p>
                </div>
                <div className="mt-6 pt-2 border-t border-[#e2e2e9]">
                  <span className="text-[11px] text-[#7c3aed] uppercase font-bold tracking-wider">
                    Phase 2 • Architecture
                  </span>
                </div>
              </div>

              <div className="relative flex flex-col justify-between bg-[#f5f3ff] rounded-2xl p-6 hover:bg-[#f1f5f9] transition-colors border border-[#f1f5f9]">
                <div className="flex flex-col gap-3">
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-[#7c3aed] font-mono">03</span>
                    <span className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#7c3aed] shadow-sm">
                      <Brush className="w-4 h-4" />
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-[#0f172a]">Design</h3>
                  <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                    Crafting high-fidelity concepts with collaborative iterations until 100% satisfied with the outcome.
                  </p>
                </div>
                <div className="mt-6 pt-2 border-t border-[#e2e2e9]">
                  <span className="text-[11px] text-[#7c3aed] uppercase font-bold tracking-wider">
                    Phase 3 • Execution
                  </span>
                </div>
              </div>

              <div className="relative flex flex-col justify-between bg-[#f5f3ff] rounded-2xl p-6 hover:bg-[#f1f5f9] transition-colors border border-[#f1f5f9]">
                <div className="flex flex-col gap-3">
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-[#7c3aed] font-mono">04</span>
                    <span className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#7c3aed] shadow-sm">
                      <Rocket className="w-4 h-4" />
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-[#0f172a]">Delivery</h3>
                  <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                    Handing over production-ready code, organized design files, assets, and deployment guides.
                  </p>
                </div>
                <div className="mt-6 pt-2 border-t border-[#e2e2e9]">
                  <span className="text-[11px] text-[#7c3aed] uppercase font-bold tracking-wider">
                    Phase 4 • Launch
                  </span>
                </div>
              </div>
            </div>
          </section>

          {/* Bottom Purple CTA Banner */}
          <section className="relative w-full rounded-3xl bg-[#7c3aed] text-white overflow-hidden shadow-[0_24px_50px_rgba(124,58,237,0.35)] p-8 md:p-14">
            <div className="pointer-events-none absolute -right-16 -top-20 w-96 h-96 rounded-full bg-[#9333ea]/40 blur-[80px]"></div>
            <div className="pointer-events-none absolute left-1/3 -bottom-24 w-80 h-80 rounded-full bg-[#ddd6fe]/20 blur-[70px]"></div>

            <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
              <div className="max-w-2xl flex flex-col gap-2">
                <span className="text-xs bg-white/20 text-[#fffbff] px-3 py-1 rounded-full w-fit uppercase tracking-widest font-semibold backdrop-blur-md">
                  Start The Conversation
                </span>
                <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
                  Ready to elevate your digital presence?
                </h2>
                <p className="text-base text-white/90 max-w-xl leading-relaxed">
                  Let's build memorable design and high-performance experiences tailored to your goals.
                </p>
              </div>

              <button
                onClick={() => onNavigate('contact')}
                className="inline-flex items-center justify-center gap-2 bg-white text-[#7c3aed] font-semibold text-sm px-8 py-3.5 rounded-full shadow-[0_12px_24px_rgba(0,0,0,0.15)] hover:bg-[#f5f3ff] hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer"
              >
                <span>Get in Touch Today</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};
