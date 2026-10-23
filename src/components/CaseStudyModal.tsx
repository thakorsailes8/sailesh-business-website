import React, { useEffect } from 'react';
import { ProjectItem } from '../data/portfolioData';
import { X } from 'lucide-react';

interface CaseStudyModalProps {
  project: ProjectItem | null;
  onClose: () => void;
  onSelectProjectForContact?: (projectTitle: string, category: string) => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({
  project,
  onClose,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="relative max-w-5xl max-h-[92vh] w-full flex flex-col items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Floating Close Button */}
        <button
          onClick={onClose}
          className="absolute -top-12 right-0 sm:right-2 w-10 h-10 rounded-full bg-white/20 hover:bg-white/40 text-white flex items-center justify-center transition-all cursor-pointer backdrop-blur-sm z-30"
          aria-label="Close"
          title="Close"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Clean Media Showcase - Video Player or High-Res Image (No text over media) */}
        <div className="relative w-full max-h-[85vh] flex items-center justify-center overflow-hidden rounded-2xl shadow-2xl bg-black/60 border border-white/10">
          {project.videoUrl ? (
            <video
              src={project.videoUrl}
              controls
              autoPlay
              playsInline
              className="w-auto h-auto max-h-[85vh] max-w-full rounded-xl shadow-2xl bg-black"
            >
              Your browser does not support the video tag.
            </video>
          ) : (
            <img
              src={project.image || ""}
              alt={project.title}
              className="w-auto h-auto max-h-[85vh] max-w-full object-contain rounded-xl select-none"
            />
          )}
        </div>
      </div>
    </div>
  );
};
