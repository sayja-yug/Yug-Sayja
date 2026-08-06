import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import SectionHeading from '../components/common/SectionHeading';
import { Briefcase, GraduationCap, Target, Terminal, CheckCircle2, FileText, Mail, Eye } from 'lucide-react';
import SkillsExplorer from '../components/interactive/SkillsExplorer';
import ResumeModal from '../components/interactive/ResumeModal';

export const About = () => {
  const { personal, experience, skills, education } = portfolioData;
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-12 font-sans">
      
      <ResumeModal isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} />

      {/* Header */}
      <SectionHeading
        eyebrow="Background & Credentials"
        title="About & Machine Learning Engineering Experience"
        description="Applied Machine Learning Engineer focused on computer vision, deep learning architecture design, and latency optimization."
      />

      {/* Profile Overview Card */}
      <div className="bg-bg-card border border-border rounded-xl p-6 sm:p-8 grid grid-cols-1 md:grid-cols-12 gap-8 shadow-sm">
        <div className="md:col-span-4 flex flex-col items-center justify-center p-6 bg-bg-subtle rounded-lg border border-border text-center space-y-3">
          <div className="w-24 h-24 rounded-full bg-primary text-white flex items-center justify-center font-heading font-bold text-3xl shadow-sm border-2 border-accent">
            MLE
          </div>
          <div>
            <h3 className="font-heading font-bold text-lg text-dark">{personal.name}</h3>
            <p className="font-mono text-xs text-accent font-semibold">{personal.title}</p>
            <p className="font-mono text-[11px] text-dark-subtle mt-1">{personal.location}</p>
          </div>
          <div className="flex flex-col gap-2 w-full pt-1">
            <button
              onClick={() => setIsResumeOpen(true)}
              className="inline-flex items-center justify-center gap-1.5 px-3 py-1.5 rounded bg-accent text-white font-mono text-xs font-semibold hover:bg-accent-hover transition-colors"
            >
              <Eye className="w-3.5 h-3.5" />
              <span>Preview Resume</span>
            </button>
            <a
              href={personal.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-1.5 px-3 py-1.5 rounded bg-bg-subtle border border-border text-dark font-mono text-xs font-semibold hover:border-dark-subtle transition-colors"
            >
              <FileText className="w-3.5 h-3.5 text-accent" />
              <span>Download PDF</span>
            </a>
          </div>
        </div>

        <div className="md:col-span-8 space-y-4 flex flex-col justify-center">
          <span className="font-mono text-xs text-accent font-semibold uppercase tracking-wider block">
            Professional Overview
          </span>
          <p className="text-dark-muted leading-relaxed font-sans text-sm sm:text-base">
            {personal.summary}
          </p>

          <div className="p-4 rounded bg-bg-subtle border border-border border-l-4 border-l-accent space-y-1">
            <span className="font-mono text-xs font-semibold text-dark flex items-center gap-1.5">
              <Target className="w-4 h-4 text-accent" />
              Career Objective & Role Alignment
            </span>
            <p className="text-xs sm:text-sm text-dark-muted font-sans leading-relaxed">
              {personal.careerGoals}
            </p>
          </div>
        </div>
      </div>

      {/* FLYRANK AI INTERNSHIP SECTION */}
      <div className="space-y-6">
        <div className="flex items-center gap-2">
          <Briefcase className="w-5 h-5 text-accent" />
          <h2 className="text-xl sm:text-2xl font-heading font-bold text-dark">
            Work Experience: FlyRank AI Internship
          </h2>
        </div>

        {experience.map((exp, idx) => (
          <div key={idx} className="bg-bg-card border border-border rounded-xl p-6 sm:p-8 space-y-6 shadow-sm">
            <div className="flex flex-wrap items-center justify-between gap-2 pb-4 border-b border-border">
              <div>
                <h3 className="text-xl font-heading font-bold text-dark">{exp.role}</h3>
                <p className="text-sm font-mono text-accent font-semibold">{exp.company} • {exp.location}</p>
              </div>
              <span className="px-3 py-1 rounded bg-bg-subtle border border-border font-mono text-xs font-medium text-dark-muted">
                {exp.period} • {exp.type}
              </span>
            </div>

            <div className="space-y-3">
              <span className="font-mono text-xs font-semibold text-dark uppercase tracking-wider block">
                Key Accomplishments & Contributions
              </span>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {exp.highlights.map((item, hIdx) => (
                  <div key={hIdx} className="flex items-start gap-2.5 p-3 rounded bg-bg-subtle border border-border text-sm">
                    <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                    <span className="text-dark-muted font-sans">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-2 flex flex-wrap items-center gap-2">
              <span className="font-mono text-xs font-semibold text-dark-subtle mr-2">Technologies Used:</span>
              {exp.techStack.map((tech, tIdx) => (
                <span key={tIdx} className="px-2.5 py-0.5 rounded bg-bg-subtle border border-border font-mono text-xs text-dark-muted">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* TECHNICAL SKILLS BREAKDOWN */}
      <div className="space-y-6">
        <SkillsExplorer />
      </div>

      {/* EDUCATION SECTION */}
      <div className="space-y-6">
        <div className="flex items-center gap-2">
          <GraduationCap className="w-5 h-5 text-accent" />
          <h2 className="text-xl sm:text-2xl font-heading font-bold text-dark">
            Education
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-4">
          {education.map((edu, idx) => (
            <div key={idx} className="bg-bg-card border border-border rounded-xl p-6 space-y-3 shadow-sm">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h3 className="font-heading font-bold text-lg text-dark">{edu.degree}</h3>
                <span className="font-mono text-xs text-dark-subtle">{edu.period}</span>
              </div>
              <p className="font-mono text-xs font-semibold text-accent">{edu.institution}</p>
              <ul className="space-y-1.5 pt-2">
                {edu.highlights.map((h, hIdx) => (
                  <li key={hIdx} className="text-sm text-dark-muted font-sans flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0"></span>
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default About;
