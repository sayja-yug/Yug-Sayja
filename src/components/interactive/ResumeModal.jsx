import React from 'react';
import { X, Download, FileText, ExternalLink, Printer, CheckCircle2, Award } from 'lucide-react';
import { portfolioData } from '../../data/portfolioData';

export const ResumeModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const { personal, experience, projects, skills, education, achievements, certificates } = portfolioData;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md animate-fadeIn font-sans">
      <div className="bg-bg-card border border-border rounded-xl w-full max-w-4xl max-h-[92vh] flex flex-col shadow-2xl overflow-hidden">
        
        {/* Modal Top Bar */}
        <div className="px-6 py-4 border-b border-border flex items-center justify-between bg-bg-subtle">
          <div className="flex items-center gap-2">
            <FileText className="w-5 h-5 text-accent" />
            <span className="font-heading font-bold text-base text-dark">
              Resume Preview — {personal.name}
            </span>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={personal.resumeUrl}
              download="Yug_Sayja_Resume.pdf"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded bg-primary text-white font-mono text-xs font-semibold hover:bg-primary-hover transition-colors"
            >
              <Download className="w-3.5 h-3.5 text-accent" />
              <span>Download PDF</span>
            </a>

            <button
              onClick={onClose}
              className="p-1.5 rounded text-dark-muted hover:text-dark hover:bg-border/50 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Resume Document Viewport */}
        <div className="p-6 sm:p-10 overflow-y-auto space-y-6 text-sm font-sans text-dark bg-white">
          
          {/* Header */}
          <div className="border-b border-gray-200 pb-5 space-y-2 text-center sm:text-left">
            <h1 className="text-3xl font-heading font-bold text-gray-900 tracking-tight">
              {personal.name}
            </h1>
            <p className="font-mono text-xs font-semibold text-gray-700">
              📞 {personal.phone} | ✉️ {personal.email} | 🔗 linkedin.com/in/yug-sayja-435a45382 | 💻 github.com/sayja-yug | 📍 {personal.location}
            </p>
          </div>

          {/* Career Objective */}
          <div className="space-y-1.5">
            <h2 className="font-mono text-xs font-bold text-gray-900 uppercase tracking-wider border-b border-gray-200 pb-1">
              CAREER OBJECTIVE
            </h2>
            <p className="text-gray-800 text-xs leading-relaxed">
              {personal.summary}
            </p>
          </div>

          {/* Experience */}
          <div className="space-y-3">
            <h2 className="font-mono text-xs font-bold text-gray-900 uppercase tracking-wider border-b border-gray-200 pb-1">
              EXPERIENCE
            </h2>
            {experience.map((exp, i) => (
              <div key={i} className="space-y-1">
                <div className="flex justify-between font-mono text-xs">
                  <strong className="text-gray-900">{exp.company} — {exp.role} ({exp.location})</strong>
                  <span className="text-gray-600">{exp.period}</span>
                </div>
                <ul className="list-disc list-inside space-y-1 text-xs text-gray-800 font-sans pl-1">
                  {exp.highlights.map((h, hIdx) => (
                    <li key={hIdx}>{h}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Projects */}
          <div className="space-y-3">
            <h2 className="font-mono text-xs font-bold text-gray-900 uppercase tracking-wider border-b border-gray-200 pb-1">
              PROJECTS
            </h2>
            {projects.map((proj) => (
              <div key={proj.id} className="space-y-1">
                <div className="font-mono text-xs">
                  <strong className="text-gray-900">{proj.title}</strong>
                </div>
                <ul className="list-disc list-inside space-y-1 text-xs text-gray-800 font-sans pl-1">
                  {proj.highlights.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Education */}
          <div className="space-y-2">
            <h2 className="font-mono text-xs font-bold text-gray-900 uppercase tracking-wider border-b border-gray-200 pb-1">
              EDUCATION
            </h2>
            {education.map((edu, i) => (
              <div key={i} className="flex justify-between font-mono text-xs">
                <div>
                  <strong className="text-gray-900">{edu.institution}</strong>
                  <p className="text-gray-700">{edu.degree}</p>
                </div>
                <div className="text-right text-gray-600">
                  <p>{edu.period}</p>
                  <p>{edu.location}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Skills */}
          <div className="space-y-2">
            <h2 className="font-mono text-xs font-bold text-gray-900 uppercase tracking-wider border-b border-gray-200 pb-1">
              SKILLS
            </h2>
            <div className="space-y-1 font-mono text-xs text-gray-800">
              {skills.categories.map((cat, idx) => (
                <div key={idx}>
                  <strong className="text-gray-900">{cat.name}:</strong> {cat.skills.join(', ')}
                </div>
              ))}
            </div>
          </div>

          {/* Achievements */}
          {achievements && (
            <div className="space-y-2">
              <h2 className="font-mono text-xs font-bold text-gray-900 uppercase tracking-wider border-b border-gray-200 pb-1">
                ACHIEVEMENTS
              </h2>
              {achievements.map((ach, idx) => (
                <p key={idx} className="text-xs text-gray-800">
                  <strong className="text-gray-900">{ach.title}:</strong> {ach.description}
                </p>
              ))}
            </div>
          )}

          {/* Certifications */}
          <div className="space-y-2">
            <h2 className="font-mono text-xs font-bold text-gray-900 uppercase tracking-wider border-b border-gray-200 pb-1">
              CERTIFICATIONS
            </h2>
            <ul className="list-disc list-inside text-xs text-gray-800">
              {certificates.map((cert) => (
                <li key={cert.id}>
                  <strong>{cert.title}</strong> — {cert.issuer}
                </li>
              ))}
            </ul>
          </div>

        </div>

      </div>
    </div>
  );
};

export default ResumeModal;
