import React, { useRef } from 'react';
import { X, Download, FileText, Printer, ExternalLink, Mail, Phone, MapPin, Globe, Award, CheckCircle2, Copy, Check } from 'lucide-react';
import { portfolioData } from '../../data/portfolioData';

export const ResumeModal = ({ isOpen, onClose }) => {
  const [copied, setCopied] = React.useState(false);
  const resumeRef = useRef(null);

  if (!isOpen) return null;

  const { personal, experience, projects, skills, education, achievements, certificates } = portfolioData;

  const handlePrint = () => {
    window.print();
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.origin + personal.resumeUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div 
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      className="fixed inset-0 z-[999] flex items-center justify-center p-2 sm:p-4 bg-slate-950/85 backdrop-blur-md animate-fadeIn font-sans print:p-0 print:bg-white print:static print:inset-auto"
    >
      
      {/* Print Specific CSS to ensure ONLY the resume document prints cleanly */}
      <style>{`
        @media print {
          body * {
            visibility: hidden;
          }
          #printable-resume, #printable-resume * {
            visibility: visible;
          }
          #printable-resume {
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            margin: 0;
            padding: 20px !important;
            box-shadow: none !important;
            border: none !important;
            background: white !important;
            color: black !important;
          }
          .no-print {
            display: none !important;
          }
        }
      `}</style>

      {/* Main Modal Window */}
      <div className="bg-slate-900 border border-cyan-500/30 rounded-2xl w-full max-w-5xl h-[92vh] flex flex-col shadow-2xl shadow-cyan-950/50 overflow-hidden no-print">
        
        {/* Top Control Bar */}
        <div className="px-4 sm:px-6 py-3.5 border-b border-slate-800 flex items-center justify-between bg-slate-950 flex-shrink-0">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
              <FileText className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-heading font-bold text-sm sm:text-base text-white flex items-center gap-2">
                Resume Preview — {personal.name}
              </h3>
              <p className="text-[11px] font-mono text-cyan-400 hidden sm:block">
                Machine Learning Engineer | IITRAM Computer Science
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 border border-slate-700 text-slate-200 text-xs font-mono font-medium hover:bg-slate-700 hover:text-white transition-colors"
              title="Print Resume"
            >
              <Printer className="w-3.5 h-3.5 text-cyan-400" />
              <span className="hidden sm:inline">Print</span>
            </button>

            <a
              href={personal.resumeUrl}
              download="Yug_Sayja_Resume.pdf"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 text-xs font-mono font-bold hover:from-cyan-400 hover:to-blue-500 transition-all shadow-md shadow-cyan-500/20"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download PDF</span>
            </a>

            <div className="h-4 w-px bg-slate-800 mx-0.5 hidden sm:block"></div>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Document Container */}
        <div className="flex-1 overflow-y-auto bg-slate-950/80 p-3 sm:p-8">
          
          {/* Executive Printable A4 Resume Sheet */}
          <div
            id="printable-resume"
            ref={resumeRef}
            className="w-full max-w-[800px] mx-auto bg-white text-slate-900 shadow-2xl rounded-sm p-6 sm:p-10 font-sans leading-relaxed text-xs sm:text-sm space-y-5 select-text border border-slate-200 h-auto my-0 sm:my-2"
          >
            {/* Resume Header */}
            <div className="border-b-2 border-slate-900 pb-4 text-center sm:text-left space-y-2">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900 font-heading uppercase">
                  {personal.name}
                </h1>
                <span className="text-xs font-mono font-bold text-cyan-800 uppercase tracking-wider">
                  {personal.title}
                </span>
              </div>

              {/* Contact Information Bar */}
              <div className="flex flex-wrap items-center justify-center sm:justify-start gap-x-4 gap-y-1 text-[11px] font-mono text-slate-700 pt-1 border-t border-slate-200">
                <span className="flex items-center gap-1">
                  📍 {personal.location}
                </span>
                <span className="flex items-center gap-1">
                  📞 {personal.phone}
                </span>
                <a href={`mailto:${personal.email}`} className="text-slate-900 font-semibold hover:underline">
                  ✉️ {personal.email}
                </a>
                <a href={personal.linkedin} target="_blank" rel="noreferrer" className="text-blue-800 font-semibold hover:underline">
                  🔗 LinkedIn
                </a>
                <a href={personal.github} target="_blank" rel="noreferrer" className="text-slate-900 font-semibold hover:underline">
                  💻 GitHub
                </a>
              </div>
            </div>

            {/* Career Objective */}
            <section className="space-y-1.5">
              <h2 className="font-heading font-bold text-xs text-slate-900 uppercase tracking-widest border-b border-slate-300 pb-0.5">
                CAREER OBJECTIVE
              </h2>
              <p className="text-slate-800 text-[11px] sm:text-xs leading-relaxed text-justify">
                {personal.summary}
              </p>
            </section>

            {/* Work Experience */}
            <section className="space-y-2.5">
              <h2 className="font-heading font-bold text-xs text-slate-900 uppercase tracking-widest border-b border-slate-300 pb-0.5">
                WORK EXPERIENCE
              </h2>
              {experience.map((exp, i) => (
                <div key={i} className="space-y-1">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between font-bold text-xs text-slate-900">
                    <div>
                      <span>{exp.company}</span>
                      <span className="font-normal text-slate-700"> — {exp.role} ({exp.location})</span>
                    </div>
                    <span className="font-mono text-[11px] text-slate-600 font-medium">{exp.period}</span>
                  </div>
                  <ul className="list-disc list-outside space-y-1 text-[11px] sm:text-xs text-slate-800 pl-4">
                    {exp.highlights.map((h, hIdx) => (
                      <li key={hIdx} className="leading-snug">{h}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </section>

            {/* Key Projects */}
            <section className="space-y-2.5">
              <h2 className="font-heading font-bold text-xs text-slate-900 uppercase tracking-widest border-b border-slate-300 pb-0.5">
                FEATURED PROJECTS
              </h2>
              {projects.map((proj) => (
                <div key={proj.id} className="space-y-1">
                  <div className="flex justify-between items-baseline text-xs">
                    <strong className="text-slate-900 font-bold">{proj.title}</strong>
                    {proj.techStack && (
                      <span className="font-mono text-[10px] text-slate-600 font-medium">
                        [{proj.techStack.slice(0, 5).join(', ')}]
                      </span>
                    )}
                  </div>
                  <ul className="list-disc list-outside space-y-0.5 text-[11px] sm:text-xs text-slate-800 pl-4">
                    {proj.highlights.map((item, idx) => (
                      <li key={idx} className="leading-snug">{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </section>

            {/* Education */}
            <section className="space-y-2">
              <h2 className="font-heading font-bold text-xs text-slate-900 uppercase tracking-widest border-b border-slate-300 pb-0.5">
                EDUCATION
              </h2>
              {education.map((edu, i) => (
                <div key={i} className="flex flex-col sm:flex-row sm:items-start justify-between text-xs gap-1">
                  <div>
                    <strong className="text-slate-900 block font-bold">{edu.institution}</strong>
                    <span className="text-slate-700 font-medium text-[11px]">{edu.degree}</span>
                  </div>
                  <div className="sm:text-right font-mono text-[11px] text-slate-600 font-medium flex-shrink-0">
                    <div>{edu.period}</div>
                    <div>{edu.location}</div>
                  </div>
                </div>
              ))}
            </section>

            {/* Technical Skills */}
            <section className="space-y-1.5">
              <h2 className="font-heading font-bold text-xs text-slate-900 uppercase tracking-widest border-b border-slate-300 pb-0.5">
                TECHNICAL SKILLS
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1 text-[11px] text-slate-800">
                {skills.categories.map((cat, idx) => (
                  <div key={idx} className="flex items-baseline gap-1.5">
                    <strong className="text-slate-900 font-semibold flex-shrink-0">{cat.name}:</strong>
                    <span className="text-slate-700">{cat.skills.join(', ')}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Honors & Certifications */}
            <section className="space-y-1.5">
              <h2 className="font-heading font-bold text-xs text-slate-900 uppercase tracking-widest border-b border-slate-300 pb-0.5">
                HONORS & CERTIFICATIONS
              </h2>
              <ul className="list-disc list-outside text-[11px] sm:text-xs text-slate-800 pl-4 space-y-0.5">
                {achievements && achievements.map((ach, idx) => (
                  <li key={`ach-${idx}`}>
                    <strong className="text-slate-900 font-semibold">{ach.title}</strong> — {ach.description}
                  </li>
                ))}
                {certificates.slice(0, 3).map((cert) => (
                  <li key={cert.id}>
                    <strong className="text-slate-900 font-semibold">{cert.title}</strong> — {cert.issuer} ({cert.date})
                  </li>
                ))}
              </ul>
            </section>

          </div>

        </div>

      </div>
    </div>
  );
};

export default ResumeModal;
