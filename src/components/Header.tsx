import React, { useState } from 'react';
import { ArrowRight, Menu, X } from 'lucide-react';

interface HeaderProps {
  activePage: string;
  onNavigate: (page: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ activePage, onNavigate }) => {
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
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#ffffff]/85 backdrop-blur-xl shadow-[0_1px_12px_rgba(124,58,237,0.08)] border-b border-[#e2e8f0]/60 transition-all duration-200">
      <div className="h-20 max-w-7xl mx-auto px-4 md:px-8 lg:px-12 flex items-center justify-between">
        {/* Brand Zone */}
        <button
          onClick={() => handleNavClick('home')}
          className="flex items-center gap-2.5 group text-left cursor-pointer focus:outline-none"
        >
          <img
            src="/assets/logo.png"
            alt="Sailesh Designs"
            className="h-9 md:h-10 w-auto object-contain transition-transform group-hover:scale-105"
          />
          <span className="bg-[#ede9fe] text-[#581c87] border border-[#ddd6fe] text-xs font-semibold px-2 py-0.5 rounded-full uppercase tracking-wider hidden sm:inline-block shadow-xs">
            Studio
          </span>
        </button>

        {/* Navigation Zone */}
        <nav className="hidden lg:flex items-center gap-1 bg-[#f5f3ff] px-2 py-1 rounded-full border border-[#ede9fe]">
          {navItems.map((item) => {
            const isActive = activePage === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`px-4 py-1.5 rounded-full transition-all duration-200 text-sm font-semibold cursor-pointer ${
                  isActive
                    ? 'bg-[#ffffff] text-[#0f172a] shadow-sm'
                    : 'text-[#475569] hover:text-[#0f172a] hover:bg-[#ede9fe]'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Action Zone */}
        <div className="flex items-center gap-2.5">
          {/* Primary CTA */}
          <button
            onClick={() => handleNavClick('contact')}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-[#7c3aed] to-[#9333ea] hover:from-[#6d28d9] hover:to-[#7c3aed] text-white text-sm font-semibold px-5 py-2.5 rounded-full shadow-[0_4px_16px_rgba(124,58,237,0.35)] transition-all duration-200 active:scale-95 cursor-pointer hover:shadow-[0_6px_20px_rgba(124,58,237,0.45)]"
          >
            <span>Let's Talk</span>
            <ArrowRight className="w-4 h-4 text-white" />
          </button>

          {/* PROFILE AVATAR IMAGE */}
          <div className="flex items-center pl-1">
            <div className="w-9 h-9 rounded-full bg-[#f5f3ff] text-[#7c3aed] font-bold text-xs flex items-center justify-center border-2 border-[#ede9fe] shadow-sm overflow-hidden relative">
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
            className="lg:hidden p-2 rounded-xl text-[#0f172a] hover:bg-[#f5f3ff] focus:outline-none cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white/95 backdrop-blur-xl border-b border-[#e2e8f0] px-6 py-4 shadow-xl animate-fadeIn">
          <nav className="flex flex-col gap-2">
            {navItems.map((item) => {
              const isActive = activePage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`flex items-center justify-between px-4 py-3 rounded-xl text-left font-semibold text-base transition-colors ${
                    isActive
                      ? 'bg-[#ede9fe] text-[#581c87]'
                      : 'text-[#475569] hover:bg-[#f5f3ff] hover:text-[#0f172a]'
                  }`}
                >
                  <span>{item.label}</span>
                  {isActive && <span className="w-2 h-2 rounded-full bg-[#7c3aed]"></span>}
                </button>
              );
            })}
            <div className="pt-2 border-t border-[#ede9fe] flex flex-col gap-2">
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
