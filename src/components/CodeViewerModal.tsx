import React, { useState } from 'react';
import { X, Copy, Check, Download, Code2, FileCode, ExternalLink } from 'lucide-react';

interface CodeViewerModalProps {
  isOpen: boolean;
  onClose: () => void;
  activePage: string;
}

export const CodeViewerModal: React.FC<CodeViewerModalProps> = ({ isOpen, onClose, activePage }) => {
  const [selectedFile, setSelectedFile] = useState<string>(activePage || 'home');
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  // Standalone HTML files mapping from /public/assets/aistudio/
  const fileOptions = [
    { id: 'home', label: 'index.html (Home)', sourcePath: '/assets/aistudio/Image_2_190cfe47.html' },
    { id: 'about', label: 'about.html (About Me)', sourcePath: '/assets/aistudio/Image_4_13f50b8a.html' },
    { id: 'services', label: 'services.html (Services)', sourcePath: '/assets/aistudio/Image_6_c85870f2.html' },
    { id: 'gallery', label: 'gallery.html (Gallery)', sourcePath: '/assets/aistudio/Image_8_145c9e3f.html' },
    { id: 'contact', label: 'contact.html (Contact)', sourcePath: '/assets/aistudio/Image_10_d7bbefa8.html' },
  ];

  const currentOption = fileOptions.find((f) => f.id === selectedFile) || fileOptions[0];

  const handleCopyPath = () => {
    navigator.clipboard.writeText(window.location.origin + currentOption.sourcePath);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleOpenRaw = () => {
    window.open(currentOption.sourcePath, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-md animate-fadeIn">
      <div
        className="relative w-full max-w-4xl max-h-[85vh] overflow-hidden bg-white rounded-3xl shadow-2xl border border-[#eeedf4] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Bar */}
        <div className="flex items-center justify-between px-6 py-4 bg-[#f4f3fa] border-b border-[#eeedf4]">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-[#4d41df] text-white flex items-center justify-center">
              <Code2 className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-base font-bold text-[#1a1b20]">
                HTML5 &amp; Bootstrap CSS Source Package
              </h3>
              <p className="text-xs text-[#5f5e64]">
                Pure standalone HTML &amp; modern CSS code for your project
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-white hover:bg-[#e8e7ee] text-[#1a1b20] flex items-center justify-center transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* File Tabs */}
        <div className="flex items-center gap-2 px-6 py-3 bg-[#eeedf4]/50 border-b border-[#eeedf4] overflow-x-auto">
          {fileOptions.map((opt) => (
            <button
              key={opt.id}
              onClick={() => setSelectedFile(opt.id)}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors cursor-pointer ${
                selectedFile === opt.id
                  ? 'bg-white text-[#4d41df] shadow-sm border border-[#e2e2e9]'
                  : 'text-[#464555] hover:bg-white/60'
              }`}
            >
              <FileCode className="w-3.5 h-3.5" />
              <span>{opt.label}</span>
            </button>
          ))}
        </div>

        {/* Information & Action Callout */}
        <div className="p-6 overflow-y-auto flex flex-col gap-6">
          {/* Download Entire ZIP Package Banner */}
          <div className="bg-gradient-to-r from-[#100069] via-[#4d41df] to-[#675df9] text-white p-5 rounded-2xl flex flex-col md:flex-row items-start md:items-center justify-between gap-4 shadow-md">
            <div>
              <span className="bg-white/20 text-white text-[10px] font-semibold px-2.5 py-0.5 rounded-full uppercase tracking-wider inline-block mb-1">
                Complete Project Package (.zip)
              </span>
              <h4 className="text-lg font-bold">
                Download Everything in 1 ZIP File
              </h4>
              <p className="text-xs text-white/80 mt-1 max-w-xl leading-relaxed">
                Contains both versions: <strong>1. Pure HTML5 &amp; Bootstrap 5</strong> (runs directly in Chrome/Edge/Safari without any setup) and <strong>2. React + TypeScript + Tailwind</strong> source code with full image insertion guide.
              </p>
            </div>
            <a
              href="/sailesh-designs-portfolio.zip"
              download="sailesh-designs-portfolio.zip"
              className="inline-flex items-center gap-2 bg-white text-[#100069] hover:bg-[#faf8ff] text-xs font-bold px-5 py-3 rounded-xl transition-all shadow-lg hover:scale-105 active:scale-95 shrink-0 cursor-pointer"
            >
              <Download className="w-4 h-4 text-[#4d41df]" />
              <span>Download Complete ZIP</span>
            </a>
          </div>

          <div className="bg-[#faf8ff] border border-[#e3dfff] p-5 rounded-2xl flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div>
              <span className="bg-[#4d41df] text-white text-[11px] font-semibold px-2 py-0.5 rounded-full uppercase tracking-wider inline-block mb-1">
                Single File Preview
              </span>
              <h4 className="text-base font-bold text-[#1a1b20]">
                {currentOption.label} — Standalone Web File
              </h4>
              <p className="text-xs text-[#464555] mt-1 max-w-xl">
                This file is built using standard HTML5 tags, Google Plus Jakarta Sans typography, and modern responsive CSS/Bootstrap utilities. You can open it in any browser or deploy directly to GitHub Pages, Netlify, or Apache/Nginx.
              </p>
            </div>
            <div className="flex items-center gap-2 shrink-0">
              <button
                onClick={handleCopyPath}
                className="inline-flex items-center gap-1.5 bg-white border border-[#c7c4d8] text-[#1a1b20] hover:bg-[#f4f3fa] text-xs font-semibold px-4 py-2.5 rounded-xl transition-all cursor-pointer shadow-sm"
              >
                {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                <span>{copied ? 'URL Copied!' : 'Copy Direct URL'}</span>
              </button>
              <button
                onClick={handleOpenRaw}
                className="inline-flex items-center gap-1.5 bg-[#4d41df] hover:bg-[#675df9] text-white text-xs font-semibold px-4 py-2.5 rounded-xl transition-all cursor-pointer shadow-sm"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Open File in Browser</span>
              </button>
            </div>
          </div>

          {/* Quick Integration Guide */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-[#f4f3fa] p-4 rounded-xl border border-[#eeedf4]">
              <span className="font-bold text-xs text-[#4d41df] uppercase tracking-wider block mb-1">
                1. Bootstrap &amp; CSS
              </span>
              <p className="text-xs text-[#464555]">
                Includes Bootstrap 5 &amp; modern Tailwind utility framework classes for zero-friction layout customization.
              </p>
            </div>
            <div className="bg-[#f4f3fa] p-4 rounded-xl border border-[#eeedf4]">
              <span className="font-bold text-xs text-[#4d41df] uppercase tracking-wider block mb-1">
                2. Semantic HTML5
              </span>
              <p className="text-xs text-[#464555]">
                Built with semantic `header`, `nav`, `main`, `section`, `article`, and `footer` elements optimized for 98+ SEO scores.
              </p>
            </div>
            <div className="bg-[#f4f3fa] p-4 rounded-xl border border-[#eeedf4]">
              <span className="font-bold text-xs text-[#4d41df] uppercase tracking-wider block mb-1">
                3. Zero Dependencies
              </span>
              <p className="text-xs text-[#464555]">
                Runs cleanly without any npm build step required — double-click to view immediately in Chrome, Edge, or Safari.
              </p>
            </div>
          </div>

          {/* Direct File Path Preview */}
          <div className="bg-[#1a1b20] text-[#f1f0f7] p-4 rounded-xl font-mono text-xs flex flex-col gap-2">
            <div className="flex items-center justify-between text-[#c7c4d8] text-[11px] pb-2 border-b border-white/10">
              <span>Workspace Relative Path</span>
              <span>Available in /public{currentOption.sourcePath}</span>
            </div>
            <code className="text-emerald-400 select-all py-1">
              {`<a href="${currentOption.sourcePath}">Download / Embed ${currentOption.label}</a>`}
            </code>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="flex items-center justify-between px-6 py-4 bg-[#f4f3fa] border-t border-[#eeedf4]">
          <span className="text-xs text-[#5f5e64]">
            Created for Sailesh Designs Portfolio
          </span>
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-full bg-[#1a1b20] text-white text-xs font-semibold hover:bg-black transition-colors cursor-pointer"
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
};
