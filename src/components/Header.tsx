import React, { useState } from 'react';
import { ArrowRight, Menu, X, Sun, Moon } from 'lucide-react';

interface HeaderProps {
  activePage: string;
  onNavigate: (page: string) => void;
  isDarkMode?: boolean;
  onToggleTheme?: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  activePage,
  onNavigate,
  isDarkMode = true,
  onToggleTheme,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'services', label: 'Services' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#ffffff]/85 dark:bg-[#090714]/85 backdrop-blur-xl shadow-[0_1px_12px_rgba(124,58,237,0.08)] dark:shadow-[0_4px_25px_rgba(0,0,0,0.6)] border-b border-[#e2e8f0]/60 dark:border-white/10 transition-colors duration-300">
      <div className="h-20 max-w-7xl mx-auto px-4 md:px-8 lg:px-12 flex items-center justify-between">
        {/* Brand Zone */}
        <button
          onClick={() => handleNavClick('home')}
          className="flex items-center group text-left cursor-pointer focus:outline-none py-1"
        >
          <img
            src="/assets/logo.png"
            alt="Sailesh Designs"
            className="h-10 sm:h-11 md:h-12 w-auto object-contain transition-all duration-300 group-hover:scale-105 drop-shadow-[0_2px_8px_rgba(124,58,237,0.12)] dark:drop-shadow-[0_2px_14px_rgba(168,85,247,0.35)]"
          />
        </button>

        {/* Navigation Zone */}
        <nav className="hidden lg:flex items-center gap-1 bg-[#f5f3ff] dark:bg-[#151130] px-2 py-1 rounded-full border border-[#ede9fe] dark:border-white/10 transition-colors">
          {navItems.map((item) => {
            const isActive = activePage === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`px-4 py-1.5 rounded-full transition-all duration-200 text-sm font-semibold cursor-pointer ${
                  isActive
                    ? 'bg-[#ffffff] dark:bg-[#7c3aed] text-[#0f172a] dark:text-white shadow-sm'
                    : 'text-[#475569] dark:text-slate-300 hover:text-[#0f172a] dark:hover:text-white hover:bg-[#ede9fe] dark:hover:bg-white/10'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Action Zone */}
        <div className="flex items-center gap-2 sm:gap-2.5">
          {/* Theme Toggle Button */}
          {onToggleTheme && (
            <button
              onClick={onToggleTheme}
              className="w-10 h-10 rounded-full bg-[#f5f3ff] dark:bg-[#181338] text-[#7c3aed] dark:text-[#c084fc] flex items-center justify-center border border-[#ede9fe] dark:border-white/10 hover:scale-105 active:scale-95 transition-all shadow-xs cursor-pointer"
              aria-label="Toggle theme"
              title={isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            >
              {isDarkMode ? (
                <Sun className="w-4.5 h-4.5 text-amber-300 animate-fadeIn" />
              ) : (
                <Moon className="w-4.5 h-4.5 text-[#7c3aed] animate-fadeIn" />
              )}
            </button>
          )}

          {/* Primary CTA */}
          <button
            onClick={() => handleNavClick('contact')}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-[#7c3aed] to-[#9333ea] hover:from-[#6d28d9] hover:to-[#7c3aed] text-white text-sm font-semibold px-4 sm:px-5 py-2.5 rounded-full shadow-[0_4px_16px_rgba(124,58,237,0.35)] transition-all duration-200 active:scale-95 cursor-pointer hover:shadow-[0_6px_20px_rgba(124,58,237,0.45)]"
          >
            <span>Let's Talk</span>
            <ArrowRight className="w-4 h-4 text-white" />
          </button>

          {/* PROFILE AVATAR IMAGE */}
          <div className="flex items-center pl-0.5 sm:pl-1">
            <div className="w-9 h-9 rounded-full bg-[#f5f3ff] dark:bg-[#181338] text-[#7c3aed] font-bold text-xs flex items-center justify-center border-2 border-[#ede9fe] dark:border-[#7c3aed]/40 shadow-sm overflow-hidden relative">
              <img
                src="/assets/sailesh-portrait.jpg"
                alt="Sailesh Profile Avatar"
                className="w-full h-full object-cover absolute inset-0 z-10"
              />
              <span>S</span>
            </div>
          </div>

          {/* Mobile Menu Trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl text-[#0f172a] dark:text-white hover:bg-[#f5f3ff] dark:hover:bg-white/10 focus:outline-none cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white/95 dark:bg-[#090714]/95 backdrop-blur-xl border-b border-[#e2e8f0] dark:border-white/10 px-6 py-4 shadow-xl animate-fadeIn">
          <nav className="flex flex-col gap-2">
            {navItems.map((item) => {
              const isActive = activePage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`flex items-center justify-between px-4 py-3 rounded-xl text-left font-semibold text-base transition-colors ${
                    isActive
                      ? 'bg-[#ede9fe] dark:bg-[#7c3aed] text-[#581c87] dark:text-white'
                      : 'text-[#475569] dark:text-slate-300 hover:bg-[#f5f3ff] dark:hover:bg-white/10 hover:text-[#0f172a] dark:hover:text-white'
                  }`}
                >
                  <span>{item.label}</span>
                  {isActive && <span className="w-2 h-2 rounded-full bg-[#7c3aed] dark:bg-white"></span>}
                </button>
              );
            })}
            <div className="pt-2 border-t border-[#ede9fe] dark:border-white/10 flex flex-col gap-2">
              <button
                onClick={() => handleNavClick('contact')}
                className="flex items-center justify-center gap-2 bg-gradient-to-r from-[#7c3aed] to-[#9333ea] text-white py-3 rounded-xl font-semibold text-sm shadow-md"
              >
                <span>Let's Talk</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
