import React, { useState } from 'react';
import { ArrowRight, Play } from 'lucide-react';
import { PORTFOLIO_PROJECTS, ProjectItem } from '../data/portfolioData';

interface GalleryPageProps {
  onNavigate: (page: string) => void;
  onOpenCaseStudy: (project: ProjectItem) => void;
}

export const GalleryPage: React.FC<GalleryPageProps> = ({ onNavigate, onOpenCaseStudy }) => {
  const [selectedFilter, setSelectedFilter] = useState<string>('all');

  const filterTabs = [
    { id: 'all', label: 'All' },
    { id: 'social', label: 'AI Marketing Images' },
    { id: 'websites', label: 'Websites' },
    { id: 'ai-video', label: 'AI Videos' },
    { id: 'resumes', label: 'Resume Designs' },
  ];

  const filteredProjects = selectedFilter === 'all'
    ? PORTFOLIO_PROJECTS
    : PORTFOLIO_PROJECTS.filter((p) => p.category === selectedFilter);

  return (
    <div className="flex flex-col w-full">
      {/* Subtle Ambient Glows */}
      <div className="relative w-full overflow-hidden">
        <div className="absolute top-12 left-1/4 w-96 h-96 bg-[#7c3aed]/10 rounded-full blur-3xl pointer-events-none -z-10 animate-float-slow"></div>
        <div className="absolute top-96 right-12 w-80 h-80 bg-[#ede9fe]/20 rounded-full blur-3xl pointer-events-none -z-10 animate-pulseGlow"></div>

        {/* Header Section */}
        <section className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 pt-10 pb-6">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-extrabold text-[#0f172a] dark:text-white tracking-tight mb-2">
              My Creative Work
            </h1>
            <p className="text-base sm:text-lg text-[#475569] dark:text-slate-300 max-w-2xl leading-relaxed">
              A selection of designs, websites, videos, and creative projects built with aesthetic discipline and modern digital craftsmanship.
            </p>
          </div>

          {/* Filter Controls Bar */}
          <div className="mt-8 flex items-center justify-start gap-4 overflow-x-auto pb-2 scrollbar-none">
            <div className="flex items-center gap-1.5 bg-[#f5f3ff] dark:bg-[#151130] p-1.5 rounded-full shadow-sm border border-[#f1f5f9] dark:border-white/10">
              {filterTabs.map((tab) => {
                const isActive = selectedFilter === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setSelectedFilter(tab.id)}
                    className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer whitespace-nowrap ${
                      isActive
                        ? 'bg-[#7c3aed] text-white shadow-sm dark:shadow-[0_0_20px_rgba(124,58,237,0.5)]'
                        : 'text-[#475569] dark:text-slate-300 hover:text-[#0f172a] dark:hover:text-white hover:bg-[#f1f5f9] dark:hover:bg-white/10'
                    }`}
                  >
                    {tab.label}
                  </button>
                );
              })}
            </div>
          </div>
        </section>

        {/* Curated Portfolio Project Grid */}
        <section className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 py-8 pb-20">
          <div className="mb-6">
            <h3 className="text-2xl font-bold text-[#0f172a] dark:text-white tracking-tight">
              Curated Works Collection
            </h3>
            <p className="text-xs sm:text-sm text-[#5f5e64] dark:text-slate-400">
              Dynamic filterable archive across disciplines
            </p>
          </div>

          {filteredProjects.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-20 px-4 text-center bg-white dark:bg-[#120f29]/90 rounded-3xl border border-[#f1f5f9] dark:border-white/10 shadow-xs animate-fadeIn">
              <div className="w-16 h-16 rounded-2xl bg-[#f5f3ff] dark:bg-[#1c1740] text-[#7c3aed] dark:text-[#c084fc] flex items-center justify-center mb-4 text-2xl font-bold">
                {selectedFilter === 'ai-video' ? '🎬' : '🌐'}
              </div>
              <h4 className="text-xl font-bold text-[#0f172a] dark:text-white mb-1">
                {selectedFilter === 'ai-video'
                  ? 'AI Video Reels Coming Soon'
                  : 'Website Projects Coming Soon'}
              </h4>
              <p className="text-sm text-[#475569] dark:text-slate-400 max-w-md">
                {selectedFilter === 'ai-video'
                  ? 'AI-generated video reels, motion graphics, and cinematic video clips (.mp4) will be added here shortly.'
                  : 'Exciting new website designs and client web builds will be added here shortly.'}
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProjects.map((project) => (
                <article
                  key={project.id}
                  onClick={() => onOpenCaseStudy(project)}
                  className="flex flex-col bg-white dark:bg-[#120f29]/90 rounded-2xl overflow-hidden shadow-sm dark:shadow-[0_4px_25px_rgba(0,0,0,0.5)] border border-[#f1f5f9] dark:border-white/10 hover:shadow-xl dark:hover:border-[#7c3aed]/50 hover:-translate-y-1 group cursor-pointer transition-all duration-300"
                >
                  {/* Pure Vector Project Showcase Graphic */}
                  <div className="relative aspect-[16/10] overflow-hidden bg-gradient-to-br from-[#121422] to-[#1e1e2f] p-4 flex flex-col justify-between group-hover:scale-[1.02] transition-transform duration-500">
                    <img
                      src={project.image || ""}
                      alt={project.title}
                      className="w-full h-full object-cover absolute inset-0 z-0 transition-transform duration-500 group-hover:scale-105"
                      onError={(e) => {
                        (e.currentTarget as HTMLElement).style.display = 'none';
                      }}
                    />

                    {/* Subtle Grid Pattern */}
                    <div
                      className="absolute inset-0 opacity-10 pointer-events-none"
                      style={{
                        backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)',
                        backgroundSize: '16px 16px',
                      }}
                    ></div>

                    {/* Top Badges */}
                    <div className="relative z-10 flex items-center justify-between">
                      <span className="px-3 py-1 bg-white/90 backdrop-blur-md text-[#7c3aed] text-xs font-bold rounded-full shadow-sm">
                        {project.categoryLabel}
                      </span>
                      <span className="px-2.5 py-0.5 bg-black/50 backdrop-blur-md text-white/90 text-[11px] rounded-md font-mono">
                        {project.tag}
                      </span>
                    </div>

                    {/* Video Play Badge if project is a video */}
                    {project.videoUrl && (
                      <div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none">
                        <div className="w-12 h-12 rounded-full bg-white/90 text-[#7c3aed] shadow-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                          <Play className="w-5 h-5 fill-current ml-0.5" />
                        </div>
                      </div>
                    )}

                    {/* Fallback Vector Graphic only if no image exists */}
                    {!project.image && (
                      <div className="relative z-10 my-auto flex flex-col items-center justify-center text-center px-4">
                        {project.category === 'websites' && (
                          <div className="w-full max-w-[220px] bg-white/10 rounded-xl p-2.5 border border-white/15 flex flex-col gap-2">
                            <div className="flex items-center gap-1 border-b border-white/10 pb-1.5">
                              <div className="w-1.5 h-1.5 rounded-full bg-rose-400"></div>
                              <div className="w-1.5 h-1.5 rounded-full bg-amber-400"></div>
                              <div className="w-1.5 h-1.5 rounded-full bg-emerald-400"></div>
                              <span className="text-[8px] text-white/50 ml-1 font-mono">https://modern-web.site</span>
                            </div>
                            <div className="text-left space-y-1">
                              <div className="w-24 h-2 bg-white/80 rounded"></div>
                              <div className="w-32 h-1 bg-white/40 rounded"></div>
                            </div>
                          </div>
                        )}

                        {project.category === 'social' && (
                          <div className="flex items-center gap-2">
                            <div className="w-16 h-16 rounded-xl bg-gradient-to-tr from-pink-500 to-purple-600 p-2 flex flex-col justify-between text-left shadow-lg">
                              <span className="text-[8px] font-bold text-white leading-none">POST</span>
                              <span className="text-[7px] text-white/80">#Design</span>
                            </div>
                          </div>
                        )}

                        {project.category === 'ai-video' && (
                          <div className="flex flex-col items-center gap-2">
                            <div className="w-12 h-12 rounded-full bg-white/90 text-[#7c3aed] flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                              <Play className="w-5 h-5 fill-current ml-0.5" />
                            </div>
                            <span className="text-[10px] font-mono text-purple-300">Video</span>
                          </div>
                        )}
                      </div>
                    )}

                    {/* Bottom Tool Spec only if no image */}
                    {!project.image && (
                      <div className="relative z-10 flex items-center justify-between text-[10px] text-white/50 font-mono pt-2 border-t border-white/10">
                        <span>{project.client}</span>
                        <span className="text-[#c084fc] flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                          Inspect <ArrowRight className="w-3 h-3" />
                        </span>
                      </div>
                    )}
                  </div>

                  <div className="p-6 flex flex-col flex-1 justify-between">
                    <div>
                      <h4 className="text-lg font-bold text-[#0f172a] dark:text-white mb-1 group-hover:text-[#7c3aed] dark:group-hover:text-[#c084fc] transition-colors">
                        {project.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-[#475569] dark:text-slate-400 line-clamp-2 mb-4 leading-relaxed">
                        {project.description}
                      </p>
                    </div>

                    <div className="pt-3 flex items-center justify-between border-t border-[#f1f5f9] dark:border-white/10 mt-2 bg-[#f5f3ff]/50 dark:bg-white/[0.04] p-3 rounded-xl">
                      <div className="flex items-center gap-1.5 text-[#5f5e64] dark:text-slate-400 text-xs">
                        <span>{project.tools}</span>
                      </div>
                      <span className="text-xs font-bold text-[#7c3aed] dark:text-[#c084fc] flex items-center gap-1 group-hover:gap-1.5 transition-all">
                        <span>View</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </section>
      </div>
    </div>
  );
};
