import React, { useState } from 'react';
import { Send, Lock, CheckCircle2, ChevronDown } from 'lucide-react';
import { FAQ_LIST } from '../data/portfolioData';

interface ContactPageProps {
  initialService?: string;
}

export const ContactPage: React.FC<ContactPageProps> = ({ initialService }) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [service, setService] = useState(initialService || 'webdev');
  const [timeline, setTimeline] = useState('standard');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // Accordion state
  const [expandedFaq, setExpandedFaq] = useState<string | null>('faq-1');

  const toggleFaq = (id: string) => {
    setExpandedFaq(expandedFaq === id ? null : id);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 800);
  };

  return (
    <div className="flex flex-col w-full">
      {/* Ambient Radial Glows */}
      <div className="relative w-full overflow-hidden">
        <div className="absolute -top-40 left-1/4 w-[600px] h-[600px] bg-[#9333ea]/10 rounded-full blur-[140px] pointer-events-none -z-10"></div>
        <div className="absolute top-96 right-10 w-[500px] h-[500px] bg-[#ede9fe]/20 rounded-full blur-[120px] pointer-events-none -z-10"></div>

        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 py-10">
          {/* Top Page Header */}
          <section className="flex flex-col items-center text-center gap-4 mb-10 relative max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-extrabold text-[#0f172a] tracking-tight">
              Let's Create Something <span className="text-[#7c3aed]">Amazing</span>.
            </h1>
            <p className="text-base sm:text-lg text-[#475569] max-w-xl leading-relaxed">
              Have a project in mind? Tell me what you need. From bespoke interfaces to scalable code architecture, let’s turn vision into reality.
            </p>
          </section>

          {/* Form Container */}
          <div className="max-w-3xl mx-auto w-full">
            <div className="bg-white rounded-3xl p-6 md:p-10 shadow-[0px_12px_32px_-8px_rgba(124,58,237,0.12)] border border-[#f1f5f9] relative">
              {submitted ? (
                <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-8 text-center flex flex-col items-center gap-3 animate-fadeIn">
                  <div className="w-14 h-14 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 mb-1">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-emerald-950">
                    Message Sent Successfully!
                  </h3>
                  <p className="text-sm text-emerald-800 max-w-md">
                    Thank you, <span className="font-semibold">{fullName || 'friend'}</span>. Your inquiry has been received. Sailesh will review your requirements and respond via <span className="font-semibold">{email || 'your email'}</span> within 24 business hours.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFullName('');
                      setEmail('');
                      setMessage('');
                    }}
                    className="mt-3 px-6 py-2 rounded-full bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-semibold shadow-sm transition-colors cursor-pointer"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  {/* Name and Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-semibold text-[#0f172a] flex items-center justify-between" htmlFor="fullName">
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
                        className="w-full bg-[#f5f3ff] focus:bg-white text-[#0f172a] placeholder:text-[#777587] text-sm px-4 py-3 rounded-xl transition-all duration-200 outline-none border border-transparent focus:border-[#7c3aed] focus:ring-2 focus:ring-[#7c3aed]/20"
                      />
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-semibold text-[#0f172a] flex items-center justify-between" htmlFor="emailAddr">
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
                        className="w-full bg-[#f5f3ff] focus:bg-white text-[#0f172a] placeholder:text-[#777587] text-sm px-4 py-3 rounded-xl transition-all duration-200 outline-none border border-transparent focus:border-[#7c3aed] focus:ring-2 focus:ring-[#7c3aed]/20"
                      />
                    </div>
                  </div>

                  {/* Service Required */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-semibold text-[#0f172a] flex items-center justify-between" htmlFor="serviceType">
                      <span>Service Required</span>
                      <span className="text-[#ba1a1a]">*</span>
                    </label>
                    <select
                      id="serviceType"
                      required
                      value={service}
                      onChange={(e) => setService(e.target.value)}
                      className="w-full bg-[#f5f3ff] focus:bg-white text-[#0f172a] text-sm px-4 py-3 rounded-xl transition-all duration-200 outline-none border border-transparent focus:border-[#7c3aed] focus:ring-2 focus:ring-[#7c3aed]/20 cursor-pointer"
                    >
                      <option value="uiux">UI/UX Design</option>
                      <option value="webdev">Website Design &amp; Development</option>
                      <option value="social">Social Media &amp; Marketing Posts</option>
                      <option value="aivideo">AI Video &amp; Reels Creation</option>
                      <option value="resume">Resume &amp; Portfolio Design</option>
                      <option value="custom">Multiple / Custom Project</option>
                    </select>
                  </div>

                  {/* Project Timeline */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-semibold text-[#0f172a]">
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
                              ? 'bg-[#7c3aed] text-white border-[#7c3aed] shadow-md'
                              : 'bg-[#f5f3ff] text-[#475569] border-[#f1f5f9] hover:bg-[#f1f5f9]'
                          }`}
                        >
                          <span>{t.label}</span>
                          <span className={`text-[10px] ${timeline === t.id ? 'text-white/80' : 'text-[#777587]'}`}>
                            {t.desc}
                          </span>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Project Goals */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-semibold text-[#0f172a] flex items-center justify-between" htmlFor="projectDetails">
                      <span>Project Goals &amp; Scope</span>
                      <span className="text-[11px] text-[#777587]">Optional references</span>
                    </label>
                    <textarea
                      id="projectDetails"
                      rows={4}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Describe your project goals, deliverables, and any references you like..."
                      className="w-full bg-[#f5f3ff] focus:bg-white text-[#0f172a] placeholder:text-[#777587] text-sm p-4 rounded-xl transition-all duration-200 outline-none border border-transparent focus:border-[#7c3aed] focus:ring-2 focus:ring-[#7c3aed]/20 resize-none"
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
                          <span>Send Message</span>
                          <Send className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                        </>
                      )}
                    </button>

                    <div className="flex items-center justify-center gap-1.5 text-[#5f5e64] pt-1">
                      <Lock className="w-3.5 h-3.5 text-[#777587]" />
                      <p className="text-[11px]">Your privacy is respected. No spam or unsolicited emails.</p>
                    </div>
                  </div>
                </form>
              )}
            </div>
          </div>

          {/* FAQ Accordion Section */}
          <section className="mt-16 pt-8 border-t border-[#f1f5f9]">
            <div className="bg-white rounded-3xl p-6 md:p-10 shadow-sm border border-[#f1f5f9]">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-3">
                <div>
                  <span className="text-xs text-[#7c3aed] uppercase tracking-widest font-bold">
                    Common Queries
                  </span>
                  <h2 className="text-2xl md:text-3xl font-bold text-[#0f172a] tracking-tight mt-1">
                    Frequently Asked Questions
                  </h2>
                </div>
                <p className="text-xs sm:text-sm text-[#475569] max-w-sm">
                  Quick answers about onboarding, delivery standards, and collaboration workflow before initiating a proposal.
                </p>
              </div>

              <div className="flex flex-col gap-3">
                {FAQ_LIST.map((faq) => {
                  const isExpanded = expandedFaq === faq.id;
                  return (
                    <div
                      key={faq.id}
                      className="bg-[#f5f3ff] rounded-2xl overflow-hidden transition-all duration-200 border border-[#f1f5f9]"
                    >
                      <button
                        onClick={() => toggleFaq(faq.id)}
                        className="w-full flex items-center justify-between p-5 text-left font-semibold text-base text-[#0f172a] hover:text-[#7c3aed] transition-colors cursor-pointer"
                      >
                        <span>{faq.question}</span>
                        <ChevronDown
                          className={`w-5 h-5 text-[#777587] transition-transform duration-200 ${
                            isExpanded ? 'rotate-180 text-[#7c3aed]' : ''
                          }`}
                        />
                      </button>
                      {isExpanded && (
                        <div className="px-5 pb-5 animate-fadeIn">
                          <p className="text-sm text-[#475569] leading-relaxed">
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
