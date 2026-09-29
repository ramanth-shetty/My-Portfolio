import React from 'react';
import { X, Printer, Download, Mail, Phone, MapPin, ExternalLink, Award, GraduationCap, Code } from 'lucide-react';
import { PERSONAL_INFO, SKILLS_DATA, PROJECTS_DATA, CERTIFICATIONS_DATA, EDUCATION_DATA } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="resume-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-slate-950/80 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-slate-900 border border-slate-700/60 rounded-xl shadow-2xl text-slate-300 p-6 sm:p-10 my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Action Controls */}
        <div className="flex items-center justify-between pb-6 border-b border-slate-800">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-teal-400"></span>
            <span className="text-xs font-mono uppercase tracking-wider text-teal-300">Curriculum Vitae Preview</span>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-lg transition-colors"
              title="Print Resume"
            >
              <Printer className="w-3.5 h-3.5 text-teal-400" />
              <span>Print / Save PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Resume Content Body */}
        <div className="mt-6 space-y-8 font-sans">
          {/* Header */}
          <div className="text-center sm:text-left sm:flex sm:justify-between sm:items-start border-b border-slate-800 pb-6">
            <div>
              <h1 id="resume-title" className="text-2xl sm:text-3xl font-bold text-slate-100 tracking-tight">
                {PERSONAL_INFO.name}
              </h1>
              <p className="text-sm sm:text-base text-teal-400 font-medium mt-1">
                {PERSONAL_INFO.role}
              </p>
              <p className="text-xs text-slate-400 mt-1 flex items-center gap-1.5 justify-center sm:justify-start">
                <MapPin className="w-3.5 h-3.5 text-slate-500" />
                {PERSONAL_INFO.location} · CGPA 9.2 (AIET)
              </p>
            </div>
            <div className="mt-4 sm:mt-0 text-xs space-y-1.5 font-mono text-slate-400 text-center sm:text-right">
              <div className="flex items-center justify-center sm:justify-end gap-1.5">
                <Mail className="w-3.5 h-3.5 text-teal-400" />
                <a href={`mailto:${PERSONAL_INFO.email}`} className="hover:text-teal-300 underline underline-offset-2">
                  {PERSONAL_INFO.email}
                </a>
              </div>
              <div className="flex items-center justify-center sm:justify-end gap-1.5">
                <Phone className="w-3.5 h-3.5 text-teal-400" />
                <span>{PERSONAL_INFO.phone}</span>
              </div>
              <div className="flex items-center justify-center sm:justify-end gap-1.5">
                <ExternalLink className="w-3.5 h-3.5 text-teal-400" />
                <a href={PERSONAL_INFO.github} target="_blank" rel="noopener noreferrer" className="hover:text-teal-300">
                  {PERSONAL_INFO.githubDisplay}
                </a>
              </div>
              <div className="flex items-center justify-center sm:justify-end gap-1.5">
                <ExternalLink className="w-3.5 h-3.5 text-teal-400" />
                <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-teal-300">
                  {PERSONAL_INFO.linkedinDisplay}
                </a>
              </div>
            </div>
          </div>

          {/* Professional Summary */}
          <div>
            <h2 className="text-xs font-mono font-semibold uppercase tracking-wider text-teal-400 mb-2">
              Career Objective
            </h2>
            <p className="text-sm text-slate-300 leading-relaxed">
              Motivated Computer Science Engineering undergraduate (CGPA 9.2) at Alva's Institute of Engineering and Technology with practical experience in building full-stack applications using Java, Spring Boot, MySQL, and modern React. Passionate about architecting scalable REST APIs and clean web applications. Seeking an internship or entry-level Full Stack Developer position to contribute to real-world engineering solutions.
            </p>
          </div>

          {/* Education */}
          <div>
            <h2 className="text-xs font-mono font-semibold uppercase tracking-wider text-teal-400 mb-3 flex items-center gap-1.5">
              <GraduationCap className="w-4 h-4" />
              Education
            </h2>
            <div className="space-y-4">
              {EDUCATION_DATA.map((edu) => (
                <div key={edu.id} className="text-sm flex flex-col sm:flex-row sm:justify-between sm:items-start">
                  <div>
                    <h3 className="font-semibold text-slate-200">{edu.degree}</h3>
                    <p className="text-xs text-slate-400">{edu.institution}</p>
                    <p className="text-xs text-slate-400 mt-0.5">{edu.details}</p>
                  </div>
                  <div className="mt-1 sm:mt-0 text-left sm:text-right font-mono shrink-0 sm:pl-4">
                    <span className="text-xs font-semibold text-teal-300 bg-teal-950/60 px-2 py-0.5 rounded border border-teal-800/40">
                      {edu.score}
                    </span>
                    <p className="text-xs text-slate-500 mt-1">{edu.period}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Skills */}
          <div>
            <h2 className="text-xs font-mono font-semibold uppercase tracking-wider text-teal-400 mb-3 flex items-center gap-1.5">
              <Code className="w-4 h-4" />
              Technical & Personal Skills
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="bg-slate-950/50 p-3 rounded-lg border border-slate-800">
                <span className="text-slate-200 font-semibold block mb-1">Backend & Languages:</span>
                <span className="text-slate-400">Java, Spring Boot, RESTful APIs, MySQL</span>
              </div>
              <div className="bg-slate-950/50 p-3 rounded-lg border border-slate-800">
                <span className="text-slate-200 font-semibold block mb-1">Frontend Engineering:</span>
                <span className="text-slate-400">React, JavaScript (ES6+), HTML5, CSS3, Tailwind CSS</span>
              </div>
              <div className="bg-slate-950/50 p-3 rounded-lg border border-slate-800">
                <span className="text-slate-200 font-semibold block mb-1">Tools & Platforms:</span>
                <span className="text-slate-400">Git, GitHub, IntelliJ IDEA, Postman, Vite</span>
              </div>
              <div className="bg-slate-950/50 p-3 rounded-lg border border-slate-800">
                <span className="text-slate-200 font-semibold block mb-1">Personal Strengths:</span>
                <span className="text-slate-400">Hardworking, Patience, Analytical Problem Solving</span>
              </div>
            </div>
          </div>

          {/* Projects */}
          <div>
            <h2 className="text-xs font-mono font-semibold uppercase tracking-wider text-teal-400 mb-3">
              Key Projects
            </h2>
            <div className="space-y-4">
              {PROJECTS_DATA.map((proj) => (
                <div key={proj.id} className="text-sm">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                    <h3 className="font-semibold text-slate-100 flex items-center gap-2">
                      {proj.title}
                      <span className="text-xs font-mono text-teal-400 font-normal">
                        ({proj.tags.slice(0, 3).join(', ')})
                      </span>
                    </h3>
                    <span className="text-xs font-mono text-slate-500">{proj.period}</span>
                  </div>
                  <p className="text-xs text-slate-400 mt-1">{proj.shortDesc}</p>
                  <ul className="mt-1.5 space-y-0.5 text-xs text-slate-300 list-disc list-inside">
                    {proj.highlights.slice(0, 2).map((h, i) => (
                      <li key={i}>{h}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h2 className="text-xs font-mono font-semibold uppercase tracking-wider text-teal-400 mb-3 flex items-center gap-1.5">
              <Award className="w-4 h-4" />
              Certifications
            </h2>
            <div className="space-y-2 text-xs">
              {CERTIFICATIONS_DATA.map((cert) => (
                <div key={cert.id} className="flex justify-between items-center bg-slate-950/30 p-2.5 rounded border border-slate-800/80">
                  <div>
                    <span className="font-medium text-slate-200 block">{cert.title}</span>
                    <span className="text-slate-400">{cert.issuer}</span>
                  </div>
                  <span className="font-mono text-teal-400 shrink-0 ml-3">{cert.date}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer note */}
        <div className="mt-8 pt-4 border-t border-slate-800 text-center text-xs text-slate-500">
          References & credentials available upon request · Contact: {PERSONAL_INFO.email}
        </div>
      </div>
    </div>
  );
};
