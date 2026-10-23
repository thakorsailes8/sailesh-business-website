import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { GalleryPage } from './pages/GalleryPage';
import { ContactPage } from './pages/ContactPage';
import { CaseStudyModal } from './components/CaseStudyModal';
import { WhatsAppButton } from './components/WhatsAppButton';
import { ProjectItem } from './data/portfolioData';

export default function App() {
  const [activePage, setActivePage] = useState<string>('home');
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<ProjectItem | null>(null);
  const [selectedServiceForContact, setSelectedServiceForContact] = useState<string>('webdev');

  // Handle URL hash changes for deep linking
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '').toLowerCase();
      if (['home', 'about', 'gallery', 'services', 'contact'].includes(hash)) {
        setActivePage(hash);
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigate = (page: string) => {
    setActivePage(page);
    window.location.hash = page;
  };

  const handleOpenCaseStudy = (project: ProjectItem) => {
    setSelectedCaseStudy(project);
  };

  const handleSelectProjectForContact = (projectTitle: string, category: string) => {
    // Map category to service id
    const serviceMap: Record<string, string> = {
      uiux: 'uiux',
      websites: 'webdev',
      social: 'social',
      'ai-video': 'aivideo',
      resumes: 'resume',
    };
    setSelectedServiceForContact(serviceMap[category] || 'custom');
    handleNavigate('contact');
  };

  const handleSelectServiceFromList = (serviceName: string) => {
    if (serviceName.includes('UI/UX')) setSelectedServiceForContact('uiux');
    else if (serviceName.includes('Web')) setSelectedServiceForContact('webdev');
    else if (serviceName.includes('Social')) setSelectedServiceForContact('social');
    else if (serviceName.includes('Video')) setSelectedServiceForContact('aivideo');
    else if (serviceName.includes('Resume')) setSelectedServiceForContact('resume');
    else setSelectedServiceForContact('custom');
  };

  return (
    <div className="min-h-screen bg-[#faf5ff] text-[#0f172a] font-sans flex flex-col selection:bg-[#ede9fe] selection:text-[#581c87]">
      {/* Fixed Navigation Header */}
      <Header
        activePage={activePage}
        onNavigate={handleNavigate}
      />

      {/* Main Page Viewport with Page Transition Animation */}
      <main key={activePage} className="w-full pt-20 flex-1 animate-fadeInUp">
        {activePage === 'home' && (
          <HomePage
            onNavigate={handleNavigate}
            onOpenCaseStudy={handleOpenCaseStudy}
          />
        )}
        {activePage === 'about' && (
          <AboutPage onNavigate={handleNavigate} />
        )}
        {activePage === 'services' && (
          <ServicesPage
            onNavigate={handleNavigate}
            onSelectService={handleSelectServiceFromList}
          />
        )}
        {activePage === 'gallery' && (
          <GalleryPage
            onNavigate={handleNavigate}
            onOpenCaseStudy={handleOpenCaseStudy}
          />
        )}
        {activePage === 'contact' && (
          <ContactPage initialService={selectedServiceForContact} />
        )}
      </main>

      {/* Global Footer */}
      <Footer onNavigate={handleNavigate} />

      {/* Case Study Deep-Dive Modal */}
      <CaseStudyModal
        project={selectedCaseStudy}
        onClose={() => setSelectedCaseStudy(null)}
        onSelectProjectForContact={handleSelectProjectForContact}
      />

      {/* Floating Sticky WhatsApp Quick-Action Button */}
      <WhatsAppButton phoneNumber="919316626998" />
    </div>
  );
}
