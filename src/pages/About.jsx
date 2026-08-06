import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import SectionHeading from '../components/common/SectionHeading';
import { Briefcase, GraduationCap, Target, Terminal, CheckCircle2, FileText, Mail, Eye, Github, Linkedin } from 'lucide-react';
import SkillsExplorer from '../components/interactive/SkillsExplorer';
import ResumeModal from '../components/interactive/ResumeModal';
import Card3D from '../components/3d/Card3D';

export const About = () => {
  const { personal, experience, skills, education } = portfolioData;
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-12 font-sans text-white relative z-10">
      
      <ResumeModal isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} />

      {/* Header */}
      <SectionHeading
        eyebrow="Background & Credentials"
        title={`About ${personal.name}`}
        description="Machine Learning Engineer focused on deep learning architecture design, explainable AI, and latency optimization."
      />

      {/* Profile Overview Card */}
      <Card3D maxTilt={5} className="p-6 sm:p-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-4 flex flex-col items-center justify-center p-6 bg-slate-950/80 rounded-xl border border-slate-800 text-center space-y-3">
            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-cyan-500 to-purple-600 text-slate-950 flex items-center justify-center font-heading font-extrabold text-3xl shadow-xl shadow-cyan-500/20 border-2 border-cyan-400">
              YS
            </div>
            <div>
              <h3 className="font-heading font-bold text-xl text-white">{personal.name}</h3>
              <p className="font-mono text-xs text-cyan-400 font-semibold">{personal.title}</p>
              <p className="font-mono text-[11px] text-slate-400 mt-1">{personal.location}</p>
            </div>
            
            <div className="flex items-center gap-2 pt-1">
              <a
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded bg-slate-900 border border-slate-800 text-slate-300 hover:text-cyan-400 hover:border-cyan-400 transition-colors"
                aria-label="GitHub Profile"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded bg-slate-900 border border-slate-800 text-slate-300 hover:text-purple-400 hover:border-purple-400 transition-colors"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>

            <div className="flex flex-col gap-2 w-full pt-1">
              <button
                onClick={() => setIsResumeOpen(true)}
                className="inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg bg-cyan-400 text-slate-950 font-mono text-xs font-bold hover:bg-cyan-300 transition-colors shadow-md shadow-cyan-400/20"
              >
                <Eye className="w-3.5 h-3.5" />
                <span>Preview Resume</span>
              </button>
              <a
                href={personal.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg bg-slate-900 border border-slate-800 text-white font-mono text-xs font-semibold hover:border-cyan-400 transition-colors"
              >
                <FileText className="w-3.5 h-3.5 text-cyan-400" />
                <span>Download PDF</span>
              </a>
            </div>
          </div>

          <div className="md:col-span-8 space-y-4 flex flex-col justify-center">
            <span className="font-mono text-xs text-cyan-400 font-bold uppercase tracking-wider block">
              Professional Engineering Profile
            </span>
            <p className="text-slate-300 leading-relaxed font-sans text-sm sm:text-base">
              {personal.summary}
            </p>

            <div className="p-4 rounded-lg bg-slate-950/80 border border-slate-800 border-l-4 border-l-cyan-400 space-y-1">
              <span className="font-mono text-xs font-bold text-white flex items-center gap-1.5">
                <Target className="w-4 h-4 text-cyan-400" />
                Career Objective & Target Roles
              </span>
              <p className="text-xs sm:text-sm text-slate-300 font-sans leading-relaxed">
                {personal.careerGoals}
              </p>
            </div>
          </div>
        </div>
      </Card3D>

      {/* FLYRANK AI INTERNSHIP SECTION */}
      <div className="space-y-6">
        <div className="flex items-center gap-2">
          <Briefcase className="w-5 h-5 text-cyan-400" />
          <h2 className="text-xl sm:text-2xl font-heading font-bold text-white">
            Work Experience & Internship
          </h2>
        </div>

        {experience.map((exp, idx) => (
          <Card3D key={idx} maxTilt={4} className="p-6 sm:p-8 space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-2 pb-4 border-b border-slate-800">
              <div>
                <h3 className="text-xl font-heading font-bold text-white">{exp.role}</h3>
                <p className="text-sm font-mono text-cyan-400 font-semibold">{exp.company} • {exp.location}</p>
              </div>
              <span className="px-3 py-1 rounded bg-slate-950 border border-slate-800 font-mono text-xs font-semibold text-purple-300">
                {exp.period} • {exp.type}
              </span>
            </div>

            <div className="space-y-3">
              <span className="font-mono text-xs font-bold text-cyan-400 uppercase tracking-wider block">
                Key Engineering Accomplishments
              </span>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {exp.highlights.map((item, hIdx) => (
                  <div key={hIdx} className="flex items-start gap-2.5 p-3 rounded-lg bg-slate-950/80 border border-slate-800 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span className="text-slate-300 font-sans">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-2 flex flex-wrap items-center gap-2">
              <span className="font-mono text-xs font-bold text-slate-400 mr-2">Technologies Used:</span>
              {exp.techStack.map((tech, tIdx) => (
                <span key={tIdx} className="px-2.5 py-0.5 rounded bg-slate-950 border border-slate-800 font-mono text-xs text-cyan-300">
                  {tech}
                </span>
              ))}
            </div>
          </Card3D>
        ))}
      </div>

      {/* TECHNICAL SKILLS BREAKDOWN */}
      <div className="space-y-6">
        <SkillsExplorer />
      </div>

      {/* EDUCATION SECTION */}
      <div className="space-y-6">
        <div className="flex items-center gap-2">
          <GraduationCap className="w-5 h-5 text-cyan-400" />
          <h2 className="text-xl sm:text-2xl font-heading font-bold text-white">
            Education
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-4">
          {education.map((edu, idx) => (
            <Card3D key={idx} maxTilt={3} className="p-6 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h3 className="font-heading font-bold text-lg text-white">{edu.degree}</h3>
                <span className="font-mono text-xs text-slate-400">{edu.period}</span>
              </div>
              <p className="font-mono text-xs font-bold text-cyan-400">{edu.institution}</p>
              <ul className="space-y-1.5 pt-2">
                {edu.highlights.map((h, hIdx) => (
                  <li key={hIdx} className="text-sm text-slate-300 font-sans flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 shrink-0"></span>
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </Card3D>
          ))}
        </div>
      </div>

    </div>
  );
};

export default About;
