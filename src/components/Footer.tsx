import React from 'react';
import { Palette, Dribbble, Linkedin, Instagram, Github } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const handleNav = (page: string) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-[#ffffff] dark:bg-[#0c091f] mt-16 shadow-[0_-1px_16px_rgba(124,58,237,0.04)] border-t border-[#ede9fe] dark:border-white/10 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 pt-12 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 pb-10 border-b border-[#f1f5f9] dark:border-white/10">
          {/* Brand Info */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            <div className="flex items-center">
              <img
                src="/assets/logo.png"
                alt="Sailesh Designs"
                className="h-12 md:h-14 w-auto object-contain drop-shadow-[0_2px_8px_rgba(124,58,237,0.12)] dark:drop-shadow-[0_2px_14px_rgba(168,85,247,0.35)]"
              />
            </div>
            <p className="text-base text-[#475569] dark:text-slate-300 max-w-sm leading-relaxed">
              Creative Designs. Modern Websites. Powerful Visuals.
            </p>
            <div className="flex items-center gap-2 mt-2">
              <a
                href="https://behance.net"
                target="_blank"
                rel="noreferrer"
                aria-label="Behance"
                className="w-10 h-10 rounded-full bg-[#f5f3ff] dark:bg-[#181338] flex items-center justify-center text-[#475569] dark:text-slate-300 hover:bg-[#7c3aed] hover:text-white transition-all duration-200"
              >
                <Palette className="w-4 h-4" />
              </a>
              <a
                href="https://dribbble.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Dribbble"
                className="w-10 h-10 rounded-full bg-[#f5f3ff] dark:bg-[#181338] flex items-center justify-center text-[#475569] dark:text-slate-300 hover:bg-[#7c3aed] hover:text-white transition-all duration-200"
              >
                <Dribbble className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="w-10 h-10 rounded-full bg-[#f5f3ff] dark:bg-[#181338] flex items-center justify-center text-[#475569] dark:text-slate-300 hover:bg-[#7c3aed] hover:text-white transition-all duration-200"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="w-10 h-10 rounded-full bg-[#f5f3ff] dark:bg-[#181338] flex items-center justify-center text-[#475569] dark:text-slate-300 hover:bg-[#7c3aed] hover:text-white transition-all duration-200"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="w-10 h-10 rounded-full bg-[#f5f3ff] dark:bg-[#181338] flex items-center justify-center text-[#475569] dark:text-slate-300 hover:bg-[#7c3aed] hover:text-white transition-all duration-200"
              >
                <Github className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3 flex flex-col gap-2">
            <span className="font-semibold text-xs text-[#0f172a] dark:text-white uppercase tracking-wider mb-2">
              Quick Links
            </span>
            <button
              onClick={() => handleNav('home')}
              className="text-left text-sm text-[#475569] dark:text-slate-300 hover:text-[#7c3aed] dark:hover:text-[#c084fc] transition-colors cursor-pointer"
            >
              Home
            </button>
            <button
              onClick={() => handleNav('about')}
              className="text-left text-sm text-[#475569] dark:text-slate-300 hover:text-[#7c3aed] dark:hover:text-[#c084fc] transition-colors cursor-pointer"
            >
              About
            </button>
            <button
              onClick={() => handleNav('gallery')}
              className="text-left text-sm text-[#475569] dark:text-slate-300 hover:text-[#7c3aed] dark:hover:text-[#c084fc] transition-colors cursor-pointer"
            >
              Gallery
            </button>
            <button
              onClick={() => handleNav('services')}
              className="text-left text-sm text-[#475569] dark:text-slate-300 hover:text-[#7c3aed] dark:hover:text-[#c084fc] transition-colors cursor-pointer"
            >
              Services
            </button>
            <button
              onClick={() => handleNav('contact')}
              className="text-left text-sm text-[#475569] dark:text-slate-300 hover:text-[#7c3aed] dark:hover:text-[#c084fc] transition-colors cursor-pointer"
            >
              Contact
            </button>
          </div>

          {/* Services Offered */}
          <div className="lg:col-span-4 flex flex-col gap-2">
            <span className="font-semibold text-xs text-[#0f172a] dark:text-white uppercase tracking-wider mb-2">
              Services
            </span>
            <div className="flex flex-col gap-1.5 text-sm text-[#475569] dark:text-slate-300">
              <span className="hover:text-[#7c3aed] dark:hover:text-[#c084fc] cursor-pointer" onClick={() => handleNav('services')}>
                AI Marketing Images &amp; Graphics
              </span>
              <span className="hover:text-[#7c3aed] dark:hover:text-[#c084fc] cursor-pointer" onClick={() => handleNav('services')}>
                Web Development &amp; Modern UI
              </span>
              <span className="hover:text-[#7c3aed] dark:hover:text-[#c084fc] cursor-pointer" onClick={() => handleNav('services')}>
                AI Visuals &amp; Reels Creation
              </span>
              <span className="hover:text-[#7c3aed] dark:hover:text-[#c084fc] cursor-pointer" onClick={() => handleNav('services')}>
                Resume &amp; Portfolio Design
              </span>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 bg-[#f5f3ff]/60 dark:bg-[#14102c]/70 px-4 py-3 rounded-xl mt-4 border border-[#ede9fe] dark:border-white/10">
          <p className="text-xs text-[#475569] dark:text-slate-400">
            © 2025 Sailesh Designs. Designed with precision &amp; passion.
          </p>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span className="text-xs font-semibold text-[#475569] dark:text-slate-300">
              Available for new projects
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
