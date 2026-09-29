/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from 'react';
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  ExternalLink,
  ArrowUpRight,
  FileText,
  Menu,
  X,
  Code2,
  Server,
  Layers,
  Award,
  GraduationCap,
  Sparkles,
  ChevronRight,
  CheckCircle2,
  Terminal,
  Cpu
} from 'lucide-react';
import {
  PERSONAL_INFO,
  SKILLS_DATA,
  PROJECTS_DATA,
  CERTIFICATIONS_DATA,
  EDUCATION_DATA,
  Project
} from './data/portfolioData';
import { ResumeModal } from './components/ResumeModal';
import { ProjectModal } from './components/ProjectModal';
import { ContactSection } from './components/ContactSection';

const NAV_ITEMS = [
  { id: 'about', label: 'ABOUT' },
  { id: 'skills', label: 'SKILLS' },
  { id: 'projects', label: 'PROJECTS' },
  { id: 'certifications', label: 'CERTIFICATIONS' },
  { id: 'education', label: 'EDUCATION' },
  { id: 'contact', label: 'CONTACT' },
];

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('about');
  const [mousePosition, setMousePosition] = useState({ x: -1000, y: -1000 });
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [selectedSkillFilter, setSelectedSkillFilter] = useState<'all' | 'technical' | 'personal' | 'backend' | 'frontend' | 'tools'>('all');

  // Track cursor position for the Brittany Chiang signature radial spotlight
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // IntersectionObserver to sync active section indicator in sidebar
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -60% 0px',
      threshold: 0,
    };

    const handleIntersect: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);
    NAV_ITEMS.forEach((item) => {
      const element = document.getElementById(item.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  // Filter skills
  const filteredSkills = React.useMemo(() => {
    if (selectedSkillFilter === 'all') return SKILLS_DATA.technical;
    if (selectedSkillFilter === 'technical') return SKILLS_DATA.technical;
    if (selectedSkillFilter === 'backend') {
      return SKILLS_DATA.technical.filter((s) => s.group === 'Backend & Core');
    }
    if (selectedSkillFilter === 'frontend') {
      return SKILLS_DATA.technical.filter((s) => s.group === 'Frontend');
    }
    if (selectedSkillFilter === 'tools') {
      return SKILLS_DATA.technical.filter((s) => s.group === 'Database & Tools');
    }
    return [];
  }, [selectedSkillFilter]);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const topOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="relative min-h-screen bg-slate-950 font-sans text-slate-400 selection:bg-teal-300 selection:text-slate-900">
      {/* Background Interactive Mouse Spotlight (Brittany Chiang Signature Effect) */}
      <div
        className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-300 lg:block hidden"
        style={{
          background: `radial-gradient(650px at ${mousePosition.x}px ${mousePosition.y}px, rgba(45, 212, 191, 0.08), transparent 80%)`,
        }}
      />

      {/* Subtle Noise / Ambient Grid Texture */}
      <div className="pointer-events-none fixed inset-0 z-10 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:24px_24px] opacity-25" />

      {/* Mobile Top Header */}
      <header className="lg:hidden sticky top-0 z-40 flex items-center justify-between px-6 py-4 bg-slate-950/85 backdrop-blur-md border-b border-slate-800/80">
        <div>
          <a href="#about" className="text-base font-bold text-slate-200 tracking-tight">
            {PERSONAL_INFO.name}
          </a>
          <p className="text-xs text-teal-400 font-mono">Full Stack Developer</p>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setIsResumeOpen(true)}
            className="px-2.5 py-1 text-xs font-mono text-teal-300 border border-teal-700/60 rounded bg-teal-950/40"
          >
            Resume
          </button>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 text-slate-400 hover:text-white rounded-lg focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5 text-teal-400" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </header>

      {/* Mobile Dropdown Navigation */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[65px] z-40 bg-slate-900/95 backdrop-blur-lg border-b border-slate-800 px-6 py-6 shadow-2xl animate-in slide-in-from-top duration-200">
          <nav className="flex flex-col space-y-4">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => scrollToSection(e, item.id)}
                className={`flex items-center justify-between text-sm font-mono tracking-wider transition-colors py-1 ${
                  activeSection === item.id ? 'text-teal-300 font-semibold' : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                <span>{item.label}</span>
                <ChevronRight className="w-4 h-4 text-slate-600" />
              </a>
            ))}
            <div className="pt-4 border-t border-slate-800 flex items-center justify-between text-xs font-mono">
              <span className="text-slate-500">Contact:</span>
              <a href={`mailto:${PERSONAL_INFO.email}`} className="text-teal-400">
                {PERSONAL_INFO.email}
              </a>
            </div>
          </nav>
        </div>
      )}

      {/* Main Two-Column Container */}
      <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 md:px-12 md:py-16 lg:px-24 lg:py-0">
        <div className="lg:flex lg:justify-between lg:gap-8">
          
          {/* LEFT COLUMN: Fixed Sticky Sidebar on Desktop */}
          <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-[48%] lg:flex-col lg:justify-between lg:py-24">
            <div>
              {/* Name & Title (Pure Typography-Driven Hero - No Photos) */}
              <div>
                <span className="inline-flex items-center gap-2 text-xs font-mono tracking-wider text-teal-400 uppercase mb-2">
                  <span className="inline-block w-2 h-2 rounded-full bg-teal-400 animate-pulse"></span>
                  {PERSONAL_INFO.status}
                </span>

                <h1 className="text-4xl font-bold tracking-tight text-slate-100 sm:text-5xl">
                  <a href="/" className="hover:text-teal-300 transition-colors">
                    {PERSONAL_INFO.name}
                  </a>
                </h1>

                <h2 className="mt-3 text-lg font-medium tracking-tight text-teal-300 sm:text-xl">
                  {PERSONAL_INFO.role}
                </h2>

                <p className="mt-4 max-w-xs text-sm leading-relaxed text-slate-400">
                  {PERSONAL_INFO.tagline}
                </p>
              </div>

              {/* Desktop Section Navigation (Brittany Chiang Indicator Line Pattern) */}
              <nav className="nav hidden lg:block mt-16" aria-label="In-page jump links">
                <ul className="w-max space-y-1">
                  {NAV_ITEMS.map((item) => {
                    const isActive = activeSection === item.id;
                    return (
                      <li key={item.id}>
                        <a
                          href={`#${item.id}`}
                          onClick={(e) => scrollToSection(e, item.id)}
                          className={`group flex items-center py-3 transition-all ${
                            isActive ? 'active' : ''
                          }`}
                        >
                          <span
                            className={`nav-indicator mr-4 h-px transition-all duration-200 motion-reduce:transition-none ${
                              isActive
                                ? 'w-16 bg-teal-300'
                                : 'w-8 bg-slate-600 group-hover:w-16 group-hover:bg-teal-300 group-focus-visible:w-16 group-focus-visible:bg-teal-300'
                            }`}
                          />
                          <span
                            className={`nav-text text-xs font-mono font-medium tracking-widest uppercase transition-colors ${
                              isActive
                                ? 'text-teal-300 font-semibold'
                                : 'text-slate-400 group-hover:text-slate-200 group-focus-visible:text-slate-200'
                            }`}
                          >
                            {item.label}
                          </span>
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </nav>
            </div>

            {/* Bottom Actions & Social Profile Links */}
            <div className="mt-12 lg:mt-0 space-y-6">
              {/* Quick Resume Button */}
              <div>
                <button
                  onClick={() => setIsResumeOpen(true)}
                  className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-mono text-teal-300 bg-teal-950/40 hover:bg-teal-950/80 border border-teal-700/50 hover:border-teal-500 rounded-lg transition-all group shadow-sm cursor-pointer"
                >
                  <FileText className="w-4 h-4 text-teal-400 group-hover:scale-110 transition-transform" />
                  <span>View Technical Resume</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-teal-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </button>
              </div>

              {/* Social Media & Direct Links */}
              <ul className="flex items-center gap-5 text-slate-400" aria-label="Social media">
                <li>
                  <a
                    href={PERSONAL_INFO.github}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="block hover:text-teal-300 transition-colors"
                    aria-label="GitHub Profile"
                    title="GitHub (github.com/ramanth-shetty)"
                  >
                    <Github className="w-5 h-5 hover:scale-110 transition-transform" />
                  </a>
                </li>
                <li>
                  <a
                    href={PERSONAL_INFO.linkedin}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="block hover:text-teal-300 transition-colors"
                    aria-label="LinkedIn Profile"
                    title="LinkedIn (linkedin.com/in/ramanth-shetty)"
                  >
                    <Linkedin className="w-5 h-5 hover:scale-110 transition-transform" />
                  </a>
                </li>
                <li>
                  <a
                    href={`mailto:${PERSONAL_INFO.email}`}
                    className="block hover:text-teal-300 transition-colors"
                    aria-label="Send Email"
                    title={`Email (${PERSONAL_INFO.email})`}
                  >
                    <Mail className="w-5 h-5 hover:scale-110 transition-transform" />
                  </a>
                </li>
                <li>
                  <a
                    href={`tel:${PERSONAL_INFO.phone.replace(/\s+/g, '')}`}
                    className="block hover:text-teal-300 transition-colors"
                    aria-label="Call Phone"
                    title={`Phone (${PERSONAL_INFO.phone})`}
                  >
                    <Phone className="w-5 h-5 hover:scale-110 transition-transform" />
                  </a>
                </li>
              </ul>
            </div>
          </header>

          {/* RIGHT COLUMN: Scrollable Content Area */}
          <main className="pt-16 lg:w-[52%] lg:py-24 space-y-24">

            {/* 1. ABOUT SECTION */}
            <section id="about" className="scroll-mt-16 lg:scroll-mt-24" aria-label="About Ramanth Shetty">
              {/* Mobile Sticky Section Header */}
              <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-950/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0 border-b border-slate-800/80 lg:border-none">
                <h2 className="text-sm font-mono font-bold uppercase tracking-widest text-teal-300">
                  About
                </h2>
              </div>

              <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
                {PERSONAL_INFO.bioParagraphs.map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}

                {/* Key Metrics / Highlights Strip */}
                <div className="pt-4 grid grid-cols-3 gap-3">
                  <div className="p-3 bg-slate-900/50 rounded-lg border border-slate-800">
                    <span className="block text-xl sm:text-2xl font-bold font-mono text-teal-300">9.2</span>
                    <span className="text-[11px] font-mono text-slate-400">Current CGPA</span>
                  </div>
                  <div className="p-3 bg-slate-900/50 rounded-lg border border-slate-800">
                    <span className="block text-xl sm:text-2xl font-bold font-mono text-teal-300">3</span>
                    <span className="text-[11px] font-mono text-slate-400">Certifications</span>
                  </div>
                  <div className="p-3 bg-slate-900/50 rounded-lg border border-slate-800">
                    <span className="block text-xl sm:text-2xl font-bold font-mono text-teal-300">Full Stack</span>
                    <span className="text-[11px] font-mono text-slate-400">Java & React</span>
                  </div>
                </div>
              </div>
            </section>

            {/* 2. SKILLS SECTION */}
            <section id="skills" className="scroll-mt-16 lg:scroll-mt-24" aria-label="Technical and Personal Skills">
              {/* Mobile Sticky Section Header */}
              <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-950/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0 border-b border-slate-800/80 lg:border-none">
                <h2 className="text-sm font-mono font-bold uppercase tracking-widest text-teal-300">
                  Skills
                </h2>
              </div>

              <div className="space-y-6">
                {/* Filter buttons */}
                <div className="flex flex-wrap items-center gap-1.5 p-1 bg-slate-900/80 rounded-lg border border-slate-800 text-xs">
                  <button
                    onClick={() => setSelectedSkillFilter('all')}
                    className={`px-3 py-1.5 rounded-md font-mono transition-colors cursor-pointer ${
                      selectedSkillFilter === 'all'
                        ? 'bg-teal-950 text-teal-300 border border-teal-800/60 font-semibold'
                        : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    All Technical ({SKILLS_DATA.technical.length})
                  </button>
                  <button
                    onClick={() => setSelectedSkillFilter('backend')}
                    className={`px-3 py-1.5 rounded-md font-mono transition-colors cursor-pointer ${
                      selectedSkillFilter === 'backend'
                        ? 'bg-teal-950 text-teal-300 border border-teal-800/60 font-semibold'
                        : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    Backend
                  </button>
                  <button
                    onClick={() => setSelectedSkillFilter('frontend')}
                    className={`px-3 py-1.5 rounded-md font-mono transition-colors cursor-pointer ${
                      selectedSkillFilter === 'frontend'
                        ? 'bg-teal-950 text-teal-300 border border-teal-800/60 font-semibold'
                        : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    Frontend
                  </button>
                  <button
                    onClick={() => setSelectedSkillFilter('tools')}
                    className={`px-3 py-1.5 rounded-md font-mono transition-colors cursor-pointer ${
                      selectedSkillFilter === 'tools'
                        ? 'bg-teal-950 text-teal-300 border border-teal-800/60 font-semibold'
                        : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    Database & Tools
                  </button>
                </div>

                {/* Technical Skills Badges */}
                <div>
                  <h3 className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-1.5">
                    <Terminal className="w-3.5 h-3.5 text-teal-400" />
                    Technical Proficiencies
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {filteredSkills.map((skill) => (
                      <div
                        key={skill.name}
                        className={`group flex items-center gap-2 px-3 py-1.5 rounded-lg border font-mono text-xs transition-all ${
                          skill.isPrimary
                            ? 'bg-slate-900/90 border-slate-700/70 text-slate-200 hover:border-teal-400/60 hover:text-teal-300'
                            : 'bg-slate-900/50 border-slate-800 text-slate-400 hover:border-slate-700 hover:text-slate-300'
                        }`}
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-teal-400 group-hover:scale-125 transition-transform" />
                        <span>{skill.name}</span>
                        <span className="text-[10px] text-slate-600 font-sans group-hover:text-teal-500/70">
                          {skill.group}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Personal / Soft Skills */}
                <div className="pt-2">
                  <h3 className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-teal-400" />
                    Personal Strengths & Work Ethic
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {SKILLS_DATA.personal.map((attr) => (
                      <div
                        key={attr.name}
                        className="p-3 bg-slate-900/60 hover:bg-slate-900 border border-slate-800/80 hover:border-teal-500/40 rounded-xl transition-all"
                      >
                        <span className="font-mono text-xs font-semibold text-teal-300 block mb-1">
                          {attr.name}
                        </span>
                        <span className="text-xs text-slate-400 leading-normal">
                          {attr.description}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* 3. PROJECTS SECTION */}
            <section id="projects" className="scroll-mt-16 lg:scroll-mt-24" aria-label="Projects">
              {/* Mobile Sticky Section Header */}
              <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-950/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0 border-b border-slate-800/80 lg:border-none">
                <h2 className="text-sm font-mono font-bold uppercase tracking-widest text-teal-300">
                  Projects
                </h2>
              </div>

              <div className="space-y-12">
                {PROJECTS_DATA.map((project) => (
                  <div
                    key={project.id}
                    className="group relative grid gap-4 transition-all sm:grid-cols-8 sm:gap-6 md:gap-4 p-4 -mx-4 rounded-xl hover:bg-slate-900/50 hover:border hover:border-slate-800/80 hover:shadow-lg transition-all"
                  >
                    {/* Period metadata */}
                    <div className="z-10 font-mono text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2">
                      <span>{project.period}</span>
                      <div className="mt-2 text-[10px] text-teal-400/80 hidden sm:block">
                        Featured Work
                      </div>
                    </div>

                    {/* Project Body */}
                    <div className="z-10 sm:col-span-6 space-y-3">
                      <h3 className="font-medium leading-snug text-slate-200">
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noreferrer noopener"
                          className="inline-flex items-center font-semibold text-slate-100 hover:text-teal-300 focus-visible:text-teal-300 group/link text-base"
                        >
                          <span>{project.title}</span>
                          <ArrowUpRight className="ml-1 inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1" />
                        </a>
                      </h3>

                      <p className="text-xs sm:text-sm leading-relaxed text-slate-400">
                        {project.shortDesc}
                      </p>

                      {/* Tech stack badge tags */}
                      <ul className="flex flex-wrap gap-1.5" aria-label="Technologies used">
                        {project.tags.map((tag) => (
                          <li
                            key={tag}
                            className="font-mono text-[11px] text-teal-300 bg-teal-950/60 px-2 py-0.5 rounded border border-teal-800/40"
                          >
                            {tag}
                          </li>
                        ))}
                      </ul>

                      {/* Actions */}
                      <div className="pt-2 flex items-center gap-3">
                        <button
                          onClick={() => setSelectedProject(project)}
                          className="inline-flex items-center gap-1.5 text-xs font-mono text-slate-300 hover:text-teal-300 underline underline-offset-4 cursor-pointer"
                        >
                          <span>View Architecture & Specs</span>
                          <ChevronRight className="w-3.5 h-3.5" />
                        </button>
                        <span className="text-slate-600">·</span>
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noreferrer noopener"
                          className="inline-flex items-center gap-1 text-xs font-mono text-slate-400 hover:text-teal-300"
                        >
                          <Github className="w-3.5 h-3.5" />
                          <span>Source Code</span>
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* 4. CERTIFICATIONS SECTION */}
            <section id="certifications" className="scroll-mt-16 lg:scroll-mt-24" aria-label="Certifications">
              {/* Mobile Sticky Section Header */}
              <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-950/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0 border-b border-slate-800/80 lg:border-none">
                <h2 className="text-sm font-mono font-bold uppercase tracking-widest text-teal-300">
                  Certifications
                </h2>
              </div>

              <div className="space-y-4">
                {CERTIFICATIONS_DATA.map((cert) => (
                  <div
                    key={cert.id}
                    className="p-4 sm:p-5 bg-slate-900/40 hover:bg-slate-900/80 border border-slate-800/70 hover:border-teal-500/40 rounded-xl transition-all group"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-2">
                      <div className="flex items-center gap-2">
                        <Award className="w-4 h-4 text-teal-400 shrink-0" />
                        <h3 className="font-semibold text-slate-200 text-sm sm:text-base group-hover:text-teal-300 transition-colors">
                          {cert.title}
                        </h3>
                      </div>
                      <span className="font-mono text-xs text-teal-400 sm:text-right shrink-0">
                        {cert.date}
                      </span>
                    </div>

                    <div className="flex items-center gap-2 text-xs text-slate-400 mb-3 font-mono">
                      <span>Issued by: <strong className="text-slate-300 font-normal">{cert.issuer}</strong></span>
                      <span>·</span>
                      <span className="text-emerald-400 flex items-center gap-1">
                        <CheckCircle2 className="w-3 h-3" />
                        Verified
                      </span>
                    </div>

                    <div className="flex flex-wrap gap-1.5">
                      {cert.skillsLearned.map((skill, idx) => (
                        <span
                          key={idx}
                          className="text-[11px] font-mono text-slate-400 bg-slate-950/60 px-2 py-0.5 rounded border border-slate-800/80"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* 5. EDUCATION SECTION */}
            <section id="education" className="scroll-mt-16 lg:scroll-mt-24" aria-label="Education history">
              {/* Mobile Sticky Section Header */}
              <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-950/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0 border-b border-slate-800/80 lg:border-none">
                <h2 className="text-sm font-mono font-bold uppercase tracking-widest text-teal-300">
                  Education
                </h2>
              </div>

              <div className="space-y-6">
                {EDUCATION_DATA.map((item, index) => (
                  <div
                    key={item.id}
                    className="relative pl-6 sm:pl-8 border-l border-slate-800 group hover:border-teal-500/50 transition-colors pb-6 last:pb-0"
                  >
                    {/* Timeline Node */}
                    <div className="absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full bg-slate-700 group-hover:bg-teal-400 group-hover:scale-125 transition-all" />

                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                      <h3 className="font-semibold text-slate-100 text-sm sm:text-base group-hover:text-teal-300 transition-colors">
                        {item.degree}
                      </h3>
                      <span className="font-mono text-xs font-semibold text-teal-300 bg-teal-950/60 px-2.5 py-0.5 rounded border border-teal-800/40 w-fit">
                        {item.score}
                      </span>
                    </div>

                    <div className="text-xs font-medium text-slate-400 mt-1">
                      {item.institution}
                    </div>

                    <div className="font-mono text-xs text-slate-500 mt-0.5">
                      {item.period}
                    </div>

                    <p className="text-xs sm:text-sm text-slate-400 mt-2 leading-relaxed">
                      {item.details}
                    </p>

                    {item.coursework && (
                      <div className="mt-3 flex flex-wrap gap-1.5">
                        {item.coursework.map((course, idx) => (
                          <span
                            key={idx}
                            className="text-[10px] font-mono text-slate-400 bg-slate-900/60 px-2 py-0.5 rounded border border-slate-800"
                          >
                            {course}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </section>

            {/* 6. CONTACT SECTION & FOOTER */}
            <section id="contact" className="scroll-mt-16 lg:scroll-mt-24" aria-label="Contact Ramanth Shetty">
              {/* Mobile Sticky Section Header */}
              <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-950/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0 border-b border-slate-800/80 lg:border-none">
                <h2 className="text-sm font-mono font-bold uppercase tracking-widest text-teal-300">
                  Contact
                </h2>
              </div>

              <ContactSection />
            </section>

            {/* Footer Notice (Brittany Chiang aesthetic) */}
            <footer className="pt-8 pb-16 text-xs text-slate-500 font-mono space-y-2 border-t border-slate-800/60">
              <p>
                Built with <span className="text-slate-300 font-medium">React, Tailwind CSS & TypeScript</span>.
                Clean typography set in <span className="text-slate-300">Inter</span> & <span className="text-slate-300">JetBrains Mono</span>.
              </p>
              <p>
                Design inspired by the minimal, developer-focused aesthetic of <a href="https://brittanychiang.com" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-teal-300 underline underline-offset-2">Brittany Chiang</a>.
              </p>
              <p className="text-slate-600">
                © {new Date().getFullYear()} Ramanth Shetty. All rights reserved.
              </p>
            </footer>

          </main>
        </div>
      </div>

      {/* Modals */}
      <ResumeModal isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} />
      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </div>
  );
}
