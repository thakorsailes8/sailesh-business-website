import React from 'react';
import { ArrowRight, MapPin, CheckCircle, Code, Layers, Sparkles, PenTool, ExternalLink } from 'lucide-react';
import { SKILLS_LIST, TOOLKIT_LIST, WORKFLOW_STAGES } from '../data/portfolioData';

interface AboutPageProps {
  onNavigate: (page: string) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  return (
    <div className="flex flex-col w-full">
      {/* Ambient Glows */}
      <div className="relative w-full overflow-hidden">
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[720px] h-[360px] bg-[#7c3aed]/10 rounded-full blur-[100px] pointer-events-none animate-float-slow"></div>
        <div className="absolute top-96 right-[-100px] w-[400px] h-[400px] bg-[#9333ea]/10 rounded-full blur-[90px] pointer-events-none animate-pulseGlow"></div>

        {/* Hero / Header Banner */}
        <section className="relative max-w-7xl mx-auto px-4 md:px-8 lg:px-12 pt-10 pb-8">
          <div className="flex flex-col items-start gap-4 max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#0f172a] tracking-tight">
              About Me
            </h1>
            <p className="text-xl md:text-2xl text-[#7c3aed] font-bold">
              Hi, I'm Sailesh — a creative designer and aspiring web developer.
            </p>
            <p className="text-base sm:text-lg text-[#475569] max-w-2xl leading-relaxed">
              I specialize in merging aesthetic visual design with structured frontend code. Passionate about helping startups, creators, and established brands communicate their value with clarity, poise, and uncompromised digital impact.
            </p>
          </div>
        </section>

        {/* Dual-Column Story & Bio */}
        <section className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 py-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Column: Portrait Showcase Card */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-[#0f172a] via-[#2d2a4a] to-[#581c87] shadow-xl group border border-[#f1f5f9]">
                {/* ========================================================================= */}
                {/* SAILESH ABOUT ME PORTRAIT IMAGE: Replace src="" with your portrait photo */}
                {/* Example: src="/assets/sailesh-portrait.jpg" */}
                {/* ========================================================================= */}
                <img
                  src="/assets/sailesh-portrait.jpg"
                  alt="Sailesh - Creative Designer & Aspiring Web Developer"
                  className="w-full h-full object-cover absolute inset-0 z-0 transition-transform duration-700 ease-out group-hover:scale-105"
                  onError={(e) => {
                    // Hidden until you provide an image src, so the geometric vector identity below remains visible
                    (e.currentTarget as HTMLElement).style.display = 'none';
                  }}
                />

                <div className="aspect-square w-full p-8 flex flex-col items-center justify-center relative overflow-hidden z-10">
                  {/* Subtle Grid Backdrop */}
                  <div
                    className="absolute inset-0 opacity-15"
                    style={{
                      backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)',
                      backgroundSize: '20px 20px',
                    }}
                  ></div>

                  {/* Geometric glowing circles */}
                  <div className="absolute w-64 h-64 rounded-full border border-white/10 animate-[spin_20s_linear_infinite]"></div>
                  <div className="absolute w-48 h-48 rounded-full border border-dashed border-[#a855f7]/30 animate-[spin_15s_linear_infinite_reverse]"></div>
                  <div className="absolute w-32 h-32 rounded-full bg-[#7c3aed]/30 blur-2xl"></div>

                  {/* Central Monogram Emblem */}
                  <div className="relative z-10 flex flex-col items-center gap-3">
                    <div className="w-24 h-24 rounded-3xl bg-gradient-to-tr from-[#7c3aed] to-[#a855f7] p-[2px] shadow-[0_0_30px_rgba(124,58,237,0.5)]">
                      <div className="w-full h-full rounded-[22px] bg-[#141226] flex items-center justify-center p-3">
                        <img src="/assets/logo-icon.png" alt="SD Logo" className="w-full h-full object-contain filter drop-shadow-[0_0_12px_rgba(168,85,247,0.6)]" />
                      </div>
                    </div>

                    <div className="flex items-center gap-2 px-3 py-1 bg-white/10 backdrop-blur-md rounded-full border border-white/15">
                      <Code className="w-3.5 h-3.5 text-[#c084fc]" />
                      <span className="text-xs font-mono text-white/90">&lt;Sailesh.designs /&gt;</span>
                    </div>

                    <div className="flex items-center gap-2 mt-2">
                      <span className="text-[10px] font-mono text-white/70 bg-white/10 px-2 py-0.5 rounded">Graphic Design</span>
                      <span className="text-[10px] font-mono text-white/70 bg-white/10 px-2 py-0.5 rounded">Social Media</span>
                      <span className="text-[10px] font-mono text-white/70 bg-white/10 px-2 py-0.5 rounded">AI &amp; Motion</span>
                    </div>
                  </div>
                </div>
                {/* Floating Frosted Glass Identity Chip */}
                <div className="absolute bottom-4 left-4 right-4 p-4 bg-white/90 backdrop-blur-xl rounded-xl shadow-lg flex flex-col gap-1 border border-white/60">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-bold text-[#0f172a]">Sailesh</span>
                    <div className="flex items-center gap-1.5 bg-[#ede9fe] px-2.5 py-0.5 rounded-full">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                      <span className="text-[11px] text-[#475569] font-medium">Available Worldwide</span>
                    </div>
                  </div>
                  <p className="text-xs text-[#7c3aed] font-semibold">
                    Aspiring Web Developer &amp; UI Specialist
                  </p>
                </div>
              </div>

              {/* Accent Stat Under Portrait */}
              <div className="mt-4 flex items-center justify-between bg-white p-4 rounded-xl shadow-sm border border-[#f1f5f9]">
                <div className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-[#7c3aed]" />
                  <span className="text-xs text-[#475569]">Based in Studio</span>
                </div>
                <div className="w-1 h-1 rounded-full bg-[#cbd5e1]"></div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-[#7c3aed]" />
                  <span className="text-xs font-semibold text-[#0f172a]">Bespoke Production</span>
                </div>
              </div>
            </div>

            {/* Right Column: Philosophy & Core Focus */}
            <div className="lg:col-span-7 flex flex-col gap-6">
              {/* Personal Statement */}
              <div className="flex flex-col gap-3 bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-[#f1f5f9]">
                <span className="text-xs font-bold uppercase tracking-widest text-[#7c3aed]">
                  Philosophy &amp; Vision
                </span>
                <blockquote className="text-xl md:text-2xl font-bold text-[#0f172a] leading-snug">
                  “Crafting interfaces that feel effortless to navigate and memorable to experience.”
                </blockquote>
                <p className="text-sm md:text-base text-[#475569] leading-relaxed">
                  Design is more than skin-deep decoration; it is functional clarity, rhythmic cadence, and purposeful motion. Every project begins by understanding user friction, stripping away visual clutter, and establishing clean structural code that supports scalable digital growth.
                </p>
              </div>

              {/* Core Focus Areas */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-2 bg-white p-6 rounded-2xl shadow-sm border border-[#f1f5f9] hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 rounded-full bg-[#ede9fe] flex items-center justify-center text-[#581c87]">
                    <Layers className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-[#0f172a]">UI/UX Architecture</h3>
                  <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                    Human-centric wireframing, high-fidelity prototypes, user journeys, and component design tokens built for scale.
                  </p>
                </div>

                <div className="flex flex-col gap-2 bg-white p-6 rounded-2xl shadow-sm border border-[#f1f5f9] hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 rounded-full bg-[#ede9fe] flex items-center justify-center text-[#581c87]">
                    <Code className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-[#0f172a]">Frontend Engineering</h3>
                  <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                    Semantic HTML5, contemporary CSS Grid/Flexbox, modern Tailwind CSS, and vanilla JS micro-interactions.
                  </p>
                </div>

                <div className="flex flex-col gap-2 bg-white p-6 rounded-2xl shadow-sm border border-[#f1f5f9] hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 rounded-full bg-[#ede9fe] flex items-center justify-center text-[#581c87]">
                    <Sparkles className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-[#0f172a]">AI Generative Media</h3>
                  <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                    Synthesized concept imagery, dynamic motion prompts, and futuristic creative assets crafted for viral impact.
                  </p>
                </div>

                <div className="flex flex-col gap-2 bg-white p-6 rounded-2xl shadow-sm border border-[#f1f5f9] hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 rounded-full bg-[#ede9fe] flex items-center justify-center text-[#581c87]">
                    <PenTool className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-[#0f172a]">Creative Direction</h3>
                  <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                    Brand narrative systems, typography pairing, aesthetic consistency, and memorable visual pacing.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 py-12">
          <div className="flex flex-col gap-1 mb-8">
            <span className="text-xs font-bold uppercase tracking-widest text-[#7c3aed]">Capabilities</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0f172a]">
              Core Competencies &amp; Technical Skills
            </h2>
            <p className="text-sm md:text-base text-[#475569] max-w-xl">
              A balanced synthesis of visual sensibilities and disciplined front-end implementation methodologies.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SKILLS_LIST.map((skill, idx) => (
              <div
                key={idx}
                className="flex flex-col justify-between bg-white p-6 rounded-2xl shadow-sm border border-[#f1f5f9] hover:-translate-y-1 hover:shadow-md transition-all duration-200"
              >
                <div className="flex flex-col gap-2">
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-full bg-[#ede9fe] flex items-center justify-center text-[#581c87]">
                      <span className="material-symbols-outlined text-[20px]">{skill.icon}</span>
                    </div>
                    <span className="text-xs font-bold text-[#7c3aed]">{skill.percent}%</span>
                  </div>
                  <h3 className="text-lg font-bold text-[#0f172a]">{skill.name}</h3>
                  <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">{skill.desc}</p>
                </div>
                <div className="w-full bg-[#f1f5f9] rounded-full h-2 mt-4 overflow-hidden">
                  <div
                    className="bg-[#7c3aed] h-full rounded-full transition-all duration-1000"
                    style={{ width: `${skill.percent}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Tools Section */}
        <section className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 py-10">
          <div className="bg-[#f5f3ff] p-6 md:p-10 rounded-3xl border border-[#f1f5f9]">
            <div className="flex flex-col gap-1 mb-8 text-center items-center">
              <span className="text-xs font-bold uppercase tracking-widest text-[#7c3aed]">Arsenal</span>
              <h2 className="text-2xl md:text-3xl font-bold text-[#0f172a]">
                Design &amp; Development Toolkit
              </h2>
              <p className="text-xs sm:text-sm text-[#475569] max-w-lg">
                Daily instruments chosen for razor-sharp precision, creative freedom, and production reliability.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4">
              {TOOLKIT_LIST.map((tool, idx) => (
                <div
                  key={idx}
                  className="flex flex-col items-center justify-center p-4 bg-white rounded-xl shadow-sm border border-[#f1f5f9] hover:shadow-md transition-all duration-200 group text-center"
                >
                  <span className="material-symbols-outlined text-[#7c3aed] text-[32px] group-hover:scale-110 transition-transform">
                    {tool.icon}
                  </span>
                  <span className="text-sm font-semibold text-[#0f172a] mt-1.5">{tool.name}</span>
                  <span className="text-[11px] text-[#5f5e64]">{tool.category}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* My Creative Process Section */}
        <section className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 py-12">
          <div className="flex flex-col gap-1 mb-8">
            <span className="text-xs font-bold uppercase tracking-widest text-[#7c3aed]">Methodology</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0f172a]">
              How Great Projects Come to Life
            </h2>
            <p className="text-sm md:text-base text-[#475569] max-w-xl">
              An intentional 4-step creative pipeline orchestrating ideation through execution with zero guesswork.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {WORKFLOW_STAGES.map((stage, idx) => (
              <div
                key={idx}
                className="flex flex-col justify-between bg-white p-6 rounded-2xl shadow-sm border border-[#f1f5f9] group hover:shadow-md transition-shadow"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-4xl font-extrabold text-[#f1f5f9] group-hover:text-[#ddd6fe] transition-colors">
                      {stage.step}
                    </span>
                    <div className="w-10 h-10 rounded-full bg-[#ede9fe] flex items-center justify-center text-[#581c87]">
                      <span className="material-symbols-outlined text-[20px]">{stage.icon}</span>
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-[#0f172a] mb-1">{stage.title}</h3>
                  <p className="text-xs sm:text-sm text-[#475569] leading-relaxed mb-4">
                    {stage.desc}
                  </p>
                </div>
                <div className="pt-2 border-t border-[#f1f5f9]">
                  <span className="text-xs font-bold text-[#7c3aed] uppercase tracking-wider">
                    {stage.badge}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Call to Action Banner */}
        <section className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 py-12">
          <div className="relative overflow-hidden bg-[#7c3aed] text-white rounded-3xl p-8 md:p-12 shadow-[0_16px_40px_rgba(124,58,237,0.25)] flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-[#9333ea]/40 rounded-full blur-[80px] pointer-events-none"></div>

            <div className="flex flex-col gap-2 max-w-xl z-10 text-center md:text-left">
              <span className="text-xs uppercase font-bold tracking-widest text-white/80">
                Selected Works
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
                Ready to explore my portfolio?
              </h2>
              <p className="text-base text-white/90 leading-relaxed">
                Take a closer look at my curated UI/UX concepts, modern web designs, and creative media explorations.
              </p>
            </div>

            <div className="z-10 shrink-0">
              <button
                onClick={() => onNavigate('gallery')}
                className="inline-flex items-center gap-2 bg-white text-[#0f172a] font-semibold text-sm px-8 py-3.5 rounded-full shadow-lg hover:bg-[#f5f3ff] transition-all duration-200 hover:-translate-y-0.5 active:scale-95 group cursor-pointer"
              >
                <span>View My Work</span>
                <ArrowRight className="w-4 h-4 text-[#7c3aed] group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
