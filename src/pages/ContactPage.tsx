import React, { useState } from 'react';
import { Send, Lock, CheckCircle2, ChevronDown, MessageCircle, Phone, ExternalLink } from 'lucide-react';
import { FAQ_LIST } from '../data/portfolioData';

interface ContactPageProps {
  initialService?: string;
}

const SERVICE_LABELS: Record<string, string> = {
  uiux: 'UI/UX Design',
  webdev: 'Website Design & Development',
  social: 'AI Marketing Images',
  aivideo: 'AI Video & Reels Creation',
  resume: 'Resume & Portfolio Design',
  custom: 'Multiple / Custom Project',
};

const TIMELINE_LABELS: Record<string, string> = {
  urgent: '< 2 Weeks (Rush Sprint)',
  standard: '~ 1 Month (Standard Pace)',
  flexible: 'Flexible (Open Timeline)',
};

export const ContactPage: React.FC<ContactPageProps> = ({ initialService }) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [service, setService] = useState(initialService || 'webdev');
  const [timeline, setTimeline] = useState('standard');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [lastWhatsAppUrl, setLastWhatsAppUrl] = useState('');

  // Accordion state
  const [expandedFaq, setExpandedFaq] = useState<string | null>('faq-1');

  const toggleFaq = (id: string) => {
    setExpandedFaq(expandedFaq === id ? null : id);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const serviceName = SERVICE_LABELS[service] || service;
    const timelineName = TIMELINE_LABELS[timeline] || timeline;

    const whatsappMessage = 
`*New Project Inquiry — Sailesh Designs Studio*
━━━━━━━━━━━━━━━━━━━━
👤 *Client Name:* ${fullName.trim()}
📧 *Email:* ${email.trim()}
📱 *Phone / WhatsApp:* ${phone.trim() || 'Not provided'}
🎯 *Service:* ${serviceName}
⏱️ *Timeline:* ${timelineName}
📝 *Project Scope / Goals:*
${message.trim() || 'No additional message provided.'}
━━━━━━━━━━━━━━━━━━━━
_Direct message sent to Sailesh via website inquiry_`;

    const encoded = encodeURIComponent(whatsappMessage);
    const targetUrl = `https://wa.me/919316626998?text=${encoded}`;
    setLastWhatsAppUrl(targetUrl);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      // Directly dispatch message to Sailesh's phone via WhatsApp
      window.open(targetUrl, '_blank', 'noopener,noreferrer');
    }, 600);
  };

  return (
    <div className="flex flex-col w-full">
      {/* Ambient Radial Glows */}
      <div className="relative w-full overflow-hidden">
        <div className="absolute -top-40 left-1/4 w-[600px] h-[600px] bg-[#9333ea]/15 dark:bg-[#9333ea]/20 rounded-full blur-[140px] pointer-events-none -z-10"></div>
        <div className="absolute top-96 right-10 w-[500px] h-[500px] bg-[#ede9fe]/30 dark:bg-violet-900/15 rounded-full blur-[120px] pointer-events-none -z-10"></div>

        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 py-10">
          {/* Top Page Header */}
          <section className="flex flex-col items-center text-center gap-4 mb-10 relative max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 dark:bg-emerald-500/20 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 text-xs font-semibold">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              Direct Phone &amp; WhatsApp Integration Active
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-[#0f172a] dark:text-white tracking-tight">
              Let's Create Something <span className="text-[#7c3aed] dark:text-[#a855f7]">Amazing</span>.
            </h1>
            <p className="text-base sm:text-lg text-[#475569] dark:text-slate-300 max-w-xl leading-relaxed">
              Have a project in mind? Fill out the brief below — your inquiry goes <strong className="text-[#7c3aed] dark:text-[#c084fc] font-semibold">directly to Sailesh’s phone via WhatsApp (+91 93166 26998)</strong> for instant response.
            </p>
          </section>

          {/* Form Container */}
          <div className="max-w-3xl mx-auto w-full">
            <div className="bg-white dark:bg-[#12111d] rounded-3xl p-6 md:p-10 shadow-[0px_12px_32px_-8px_rgba(124,58,237,0.12)] border border-[#f1f5f9] dark:border-white/10 relative transition-colors duration-300">
              {submitted ? (
                <div className="bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800/40 rounded-2xl p-8 text-center flex flex-col items-center gap-4 animate-fadeIn">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 dark:bg-emerald-900/50 flex items-center justify-center text-emerald-600 dark:text-emerald-400 mb-1 shadow-inner">
                    <CheckCircle2 className="w-9 h-9" />
                  </div>
                  <h3 className="text-2xl font-bold text-emerald-950 dark:text-emerald-200">
                    Message Sent to Sailesh's Phone!
                  </h3>
                  <p className="text-sm text-emerald-800 dark:text-emerald-300/90 max-w-md leading-relaxed">
                    Thank you, <span className="font-semibold text-emerald-950 dark:text-white">{fullName || 'friend'}</span>. Your inquiry has been formatted and routed directly to Sailesh's personal WhatsApp (<span className="font-semibold">+91 93166 26998</span>).
                  </p>

                  <div className="flex flex-col sm:flex-row items-center gap-3 pt-2 w-full justify-center">
                    {lastWhatsAppUrl && (
                      <a
                        href={lastWhatsAppUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white text-sm font-semibold shadow-md transition-all hover:scale-[1.02] cursor-pointer"
                      >
                        <MessageCircle className="w-4 h-4 fill-white text-[#25D366]" />
                        <span>Open WhatsApp Chat Directly</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    )}
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setFullName('');
                        setEmail('');
                        setPhone('');
                        setMessage('');
                      }}
                      className="w-full sm:w-auto px-6 py-3 rounded-full bg-slate-200 dark:bg-white/10 hover:bg-slate-300 dark:hover:bg-white/20 text-slate-800 dark:text-slate-200 text-sm font-semibold transition-colors cursor-pointer"
                    >
                      Submit Another Inquiry
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  {/* Name and Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-semibold text-[#0f172a] dark:text-slate-200 flex items-center justify-between" htmlFor="fullName">
                        <span>Full Name</span>
                        <span className="text-[#ba1a1a]">*</span>
                      </label>
                      <input
                        id="fullName"
                        type="text"
                        required
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        placeholder="e.g. Alex Morgan"
                        className="w-full bg-[#f5f3ff] dark:bg-white/5 focus:bg-white dark:focus:bg-[#1a1728] text-[#0f172a] dark:text-white placeholder:text-[#777587] dark:placeholder:text-slate-500 text-sm px-4 py-3 rounded-xl transition-all duration-200 outline-none border border-transparent dark:border-white/5 focus:border-[#7c3aed] focus:ring-2 focus:ring-[#7c3aed]/20"
                      />
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-semibold text-[#0f172a] dark:text-slate-200 flex items-center justify-between" htmlFor="emailAddr">
                        <span>Email Address</span>
                        <span className="text-[#ba1a1a]">*</span>
                      </label>
                      <input
                        id="emailAddr"
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="e.g. alex@company.com"
                        className="w-full bg-[#f5f3ff] dark:bg-white/5 focus:bg-white dark:focus:bg-[#1a1728] text-[#0f172a] dark:text-white placeholder:text-[#777587] dark:placeholder:text-slate-500 text-sm px-4 py-3 rounded-xl transition-all duration-200 outline-none border border-transparent dark:border-white/5 focus:border-[#7c3aed] focus:ring-2 focus:ring-[#7c3aed]/20"
                      />
                    </div>
                  </div>

                  {/* Phone / WhatsApp Number and Service */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-semibold text-[#0f172a] dark:text-slate-200 flex items-center justify-between" htmlFor="phoneNumber">
                        <span className="flex items-center gap-1.5">
                          <Phone className="w-3.5 h-3.5 text-emerald-500" />
                          <span>Phone / WhatsApp Number</span>
                        </span>
                        <span className="text-[11px] text-[#777587] dark:text-slate-400">Optional</span>
                      </label>
                      <input
                        id="phoneNumber"
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="e.g. +91 98765 43210"
                        className="w-full bg-[#f5f3ff] dark:bg-white/5 focus:bg-white dark:focus:bg-[#1a1728] text-[#0f172a] dark:text-white placeholder:text-[#777587] dark:placeholder:text-slate-500 text-sm px-4 py-3 rounded-xl transition-all duration-200 outline-none border border-transparent dark:border-white/5 focus:border-[#7c3aed] focus:ring-2 focus:ring-[#7c3aed]/20"
                      />
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-semibold text-[#0f172a] dark:text-slate-200 flex items-center justify-between" htmlFor="serviceType">
                        <span>Service Required</span>
                        <span className="text-[#ba1a1a]">*</span>
                      </label>
                      <select
                        id="serviceType"
                        required
                        value={service}
                        onChange={(e) => setService(e.target.value)}
                        className="w-full bg-[#f5f3ff] dark:bg-[#1a1728] focus:bg-white dark:focus:bg-[#1a1728] text-[#0f172a] dark:text-white text-sm px-4 py-3 rounded-xl transition-all duration-200 outline-none border border-transparent dark:border-white/10 focus:border-[#7c3aed] focus:ring-2 focus:ring-[#7c3aed]/20 cursor-pointer"
                      >
                        <option value="uiux">UI/UX Design</option>
                        <option value="webdev">Website Design &amp; Development</option>
                        <option value="social">AI Marketing Images</option>
                        <option value="aivideo">AI Video &amp; Reels Creation</option>
                        <option value="resume">Resume &amp; Portfolio Design</option>
                        <option value="custom">Multiple / Custom Project</option>
                      </select>
                    </div>
                  </div>

                  {/* Project Timeline */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-semibold text-[#0f172a] dark:text-slate-200">
                      Project Timeline Target
                    </label>
                    <div className="grid grid-cols-3 gap-3 pt-0.5">
                      {[
                        { id: 'urgent', label: '< 2 Weeks', desc: 'Rush Sprint' },
                        { id: 'standard', label: '~ 1 Month', desc: 'Standard Pace' },
                        { id: 'flexible', label: 'Flexible', desc: 'Open Timeline' },
                      ].map((t) => (
                        <button
                          key={t.id}
                          type="button"
                          onClick={() => setTimeline(t.id)}
                          className={`p-3 text-center rounded-xl text-xs font-semibold transition-all cursor-pointer flex flex-col items-center gap-1 border ${
                            timeline === t.id
                              ? 'bg-[#7c3aed] text-white border-[#7c3aed] shadow-md shadow-[#7c3aed]/20'
                              : 'bg-[#f5f3ff] dark:bg-white/5 text-[#475569] dark:text-slate-300 border-[#f1f5f9] dark:border-white/5 hover:bg-[#f1f5f9] dark:hover:bg-white/10'
                          }`}
                        >
                          <span>{t.label}</span>
                          <span className={`text-[10px] ${timeline === t.id ? 'text-white/80' : 'text-[#777587] dark:text-slate-400'}`}>
                            {t.desc}
                          </span>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Project Goals */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-semibold text-[#0f172a] dark:text-slate-200 flex items-center justify-between" htmlFor="projectDetails">
                      <span>Project Goals &amp; Scope</span>
                      <span className="text-[11px] text-[#777587] dark:text-slate-400">Optional references</span>
                    </label>
                    <textarea
                      id="projectDetails"
                      rows={4}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Describe your project goals, deliverables, and any references you like..."
                      className="w-full bg-[#f5f3ff] dark:bg-white/5 focus:bg-white dark:focus:bg-[#1a1728] text-[#0f172a] dark:text-white placeholder:text-[#777587] dark:placeholder:text-slate-500 text-sm p-4 rounded-xl transition-all duration-200 outline-none border border-transparent dark:border-white/5 focus:border-[#7c3aed] focus:ring-2 focus:ring-[#7c3aed]/20 resize-none"
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <div className="flex flex-col gap-2 pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-[#7c3aed] hover:bg-[#9333ea] text-white font-semibold text-sm py-3.5 px-6 rounded-full shadow-[0_8px_24px_rgba(124,58,237,0.3)] hover:-translate-y-0.5 active:scale-[0.98] transition-all duration-200 flex items-center justify-center gap-2 group cursor-pointer disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <span>Sending Message...</span>
                      ) : (
                        <>
                          <span>Send a Message</span>
                          <Send className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                        </>
                      )}
                    </button>

                    <div className="flex items-center justify-center gap-1.5 text-[#5f5e64] dark:text-slate-400 pt-1">
                      <Lock className="w-3.5 h-3.5 text-[#777587] dark:text-slate-500" />
                      <p className="text-[11px]">Instant delivery to Sailesh's WhatsApp phone. No spam, guaranteed response.</p>
                    </div>
                  </div>
                </form>
              )}
            </div>
          </div>

          {/* FAQ Accordion Section */}
          <section className="mt-16 pt-8 border-t border-[#f1f5f9] dark:border-white/10">
            <div className="bg-white dark:bg-[#12111d] rounded-3xl p-6 md:p-10 shadow-sm border border-[#f1f5f9] dark:border-white/10 transition-colors duration-300">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-3">
                <div>
                  <span className="text-xs text-[#7c3aed] dark:text-[#a855f7] uppercase tracking-widest font-bold">
                    Common Queries
                  </span>
                  <h2 className="text-2xl md:text-3xl font-bold text-[#0f172a] dark:text-white tracking-tight mt-1">
                    Frequently Asked Questions
                  </h2>
                </div>
                <p className="text-xs sm:text-sm text-[#475569] dark:text-slate-400 max-w-sm">
                  Quick answers about onboarding, delivery standards, and collaboration workflow before initiating a proposal.
                </p>
              </div>

              <div className="flex flex-col gap-3">
                {FAQ_LIST.map((faq) => {
                  const isExpanded = expandedFaq === faq.id;
                  return (
                    <div
                      key={faq.id}
                      className="bg-[#f5f3ff] dark:bg-white/5 rounded-2xl overflow-hidden transition-all duration-200 border border-[#f1f5f9] dark:border-white/5"
                    >
                      <button
                        onClick={() => toggleFaq(faq.id)}
                        className="w-full flex items-center justify-between p-5 text-left font-semibold text-base text-[#0f172a] dark:text-white hover:text-[#7c3aed] dark:hover:text-[#c084fc] transition-colors cursor-pointer"
                      >
                        <span>{faq.question}</span>
                        <ChevronDown
                          className={`w-5 h-5 text-[#777587] dark:text-slate-400 transition-transform duration-200 ${
                            isExpanded ? 'rotate-180 text-[#7c3aed] dark:text-[#c084fc]' : ''
                          }`}
                        />
                      </button>
                      {isExpanded && (
                        <div className="px-5 pb-5 animate-fadeIn">
                          <p className="text-sm text-[#475569] dark:text-slate-300 leading-relaxed">
                            {faq.answer}
                          </p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};
