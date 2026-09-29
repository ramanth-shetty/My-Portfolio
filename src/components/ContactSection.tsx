import React, { useState } from 'react';
import { Mail, Phone, Github, Linkedin, Copy, Check, Send, ExternalLink, ArrowUpRight } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const ContactSection: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [senderName, setSenderName] = useState('');
  const [isSent, setIsSent] = useState(false);

  const copyToClipboard = (text: string, type: 'email' | 'phone') => {
    navigator.clipboard.writeText(text);
    if (type === 'email') {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2200);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2200);
    }
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;

    // Compose mailto
    const mailtoUrl = `mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent(
      subject || `Portfolio Inquiry from ${senderName || 'Visitor'}`
    )}&body=${encodeURIComponent(
      `Name: ${senderName || 'Anonymous'}\n\nMessage:\n${message}`
    )}`;

    window.location.href = mailtoUrl;
    setIsSent(true);
    setTimeout(() => {
      setIsSent(false);
      setMessage('');
      setSubject('');
      setSenderName('');
    }, 4000);
  };

  return (
    <div className="space-y-8">
      {/* Intro paragraph */}
      <div className="space-y-3">
        <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
          I am currently seeking an <span className="text-slate-200 font-medium">internship</span> or <span className="text-slate-200 font-medium">entry-level Full Stack Developer role</span> where I can apply my skills in Java, Spring Boot, MySQL, and React to build impactful solutions.
        </p>
        <p className="text-slate-400 text-sm leading-relaxed">
          Whether you have an open position, an engineering project inquiry, or just want to discuss software architecture, my inbox is always open. I will do my best to get back to you promptly!
        </p>
      </div>

      {/* Direct Contact Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Email Card */}
        <div className="group relative bg-slate-900/60 hover:bg-slate-900/90 border border-slate-800/80 hover:border-teal-500/40 rounded-xl p-4 sm:p-5 transition-all">
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-2.5">
              <div className="p-2 rounded-lg bg-teal-950/60 border border-teal-800/40 text-teal-400">
                <Mail className="w-4 h-4" />
              </div>
              <div>
                <span className="text-xs font-mono text-slate-500 uppercase tracking-wider block">Email Address</span>
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="text-xs sm:text-sm font-medium text-slate-200 hover:text-teal-300 break-all transition-colors"
                >
                  {PERSONAL_INFO.email}
                </a>
              </div>
            </div>
            <button
              onClick={() => copyToClipboard(PERSONAL_INFO.email, 'email')}
              className="p-1.5 text-slate-400 hover:text-teal-300 hover:bg-slate-800 rounded-lg transition-colors ml-2 shrink-0"
              title="Copy email to clipboard"
            >
              {copiedEmail ? <Check className="w-4 h-4 text-teal-400" /> : <Copy className="w-4 h-4" />}
            </button>
          </div>
          {copiedEmail && (
            <span className="absolute bottom-2 right-4 text-[10px] font-mono text-teal-300">
              Copied to clipboard!
            </span>
          )}
        </div>

        {/* Phone Card */}
        <div className="group relative bg-slate-900/60 hover:bg-slate-900/90 border border-slate-800/80 hover:border-teal-500/40 rounded-xl p-4 sm:p-5 transition-all">
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-2.5">
              <div className="p-2 rounded-lg bg-teal-950/60 border border-teal-800/40 text-teal-400">
                <Phone className="w-4 h-4" />
              </div>
              <div>
                <span className="text-xs font-mono text-slate-500 uppercase tracking-wider block">Direct Phone</span>
                <a
                  href={`tel:${PERSONAL_INFO.phone.replace(/\s+/g, '')}`}
                  className="text-xs sm:text-sm font-medium text-slate-200 hover:text-teal-300 transition-colors"
                >
                  {PERSONAL_INFO.phone}
                </a>
              </div>
            </div>
            <button
              onClick={() => copyToClipboard(PERSONAL_INFO.phone, 'phone')}
              className="p-1.5 text-slate-400 hover:text-teal-300 hover:bg-slate-800 rounded-lg transition-colors ml-2 shrink-0"
              title="Copy phone to clipboard"
            >
              {copiedPhone ? <Check className="w-4 h-4 text-teal-400" /> : <Copy className="w-4 h-4" />}
            </button>
          </div>
          {copiedPhone && (
            <span className="absolute bottom-2 right-4 text-[10px] font-mono text-teal-300">
              Copied to clipboard!
            </span>
          )}
        </div>
      </div>

      {/* Social Profile Links */}
      <div className="flex flex-wrap items-center gap-3 pt-1">
        <a
          href={PERSONAL_INFO.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-mono text-slate-300 hover:text-teal-300 bg-slate-900/80 hover:bg-slate-850 border border-slate-800 hover:border-teal-500/40 rounded-lg transition-all group"
        >
          <Github className="w-4 h-4 text-teal-400" />
          <span>GitHub</span>
          <ArrowUpRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-teal-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </a>

        <a
          href={PERSONAL_INFO.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-mono text-slate-300 hover:text-teal-300 bg-slate-900/80 hover:bg-slate-850 border border-slate-800 hover:border-teal-500/40 rounded-lg transition-all group"
        >
          <Linkedin className="w-4 h-4 text-teal-400" />
          <span>LinkedIn</span>
          <ArrowUpRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-teal-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </a>

        <a
          href={`mailto:${PERSONAL_INFO.email}`}
          className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-mono text-teal-300 hover:text-teal-200 bg-teal-950/40 hover:bg-teal-950/80 border border-teal-700/50 rounded-lg transition-all ml-auto group"
        >
          <span>Say Hello Directly</span>
          <Send className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
        </a>
      </div>

      {/* Quick In-Page Message Drafter */}
      <div className="bg-slate-900/40 border border-slate-800/80 rounded-xl p-5 sm:p-6">
        <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-300 mb-4 flex items-center gap-2">
          <Send className="w-3.5 h-3.5 text-teal-400" />
          Quick Message Form
        </h4>
        <form onSubmit={handleSendMessage} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label htmlFor="contact-name" className="text-xs text-slate-400 block mb-1">Your Name</label>
              <input
                id="contact-name"
                type="text"
                placeholder="e.g. Alex Miller"
                value={senderName}
                onChange={(e) => setSenderName(e.target.value)}
                className="w-full bg-slate-950/80 border border-slate-800 focus:border-teal-500/70 focus:outline-none rounded-lg px-3 py-2 text-xs text-slate-200 placeholder:text-slate-600 transition-colors"
              />
            </div>
            <div>
              <label htmlFor="contact-subject" className="text-xs text-slate-400 block mb-1">Subject / Role</label>
              <input
                id="contact-subject"
                type="text"
                placeholder="e.g. Full Stack Developer Opening"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                className="w-full bg-slate-950/80 border border-slate-800 focus:border-teal-500/70 focus:outline-none rounded-lg px-3 py-2 text-xs text-slate-200 placeholder:text-slate-600 transition-colors"
              />
            </div>
          </div>
          <div>
            <label htmlFor="contact-message" className="text-xs text-slate-400 block mb-1">Message</label>
            <textarea
              id="contact-message"
              rows={3}
              required
              placeholder="Hi Ramanth, I saw your portfolio and would like to connect regarding..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full bg-slate-950/80 border border-slate-800 focus:border-teal-500/70 focus:outline-none rounded-lg px-3 py-2 text-xs text-slate-200 placeholder:text-slate-600 transition-colors resize-none"
            />
          </div>
          <div className="flex items-center justify-between">
            <span className="text-[11px] text-slate-500 font-mono">
              Launches your email client directly with pre-filled content.
            </span>
            <button
              type="submit"
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-mono font-medium text-slate-900 bg-teal-400 hover:bg-teal-300 rounded-lg transition-colors shadow-sm cursor-pointer"
            >
              <span>{isSent ? 'Mail Client Opened!' : 'Send Message'}</span>
              <Send className="w-3.5 h-3.5" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
