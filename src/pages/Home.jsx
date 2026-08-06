import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Briefcase, GraduationCap, Award, Trophy, Github, Linkedin, CheckCircle2, ShieldCheck, ExternalLink, Code2, Bot, HeartPulse } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import SectionHeading from '../components/common/SectionHeading';
import SkillsExplorer from '../components/interactive/SkillsExplorer';
import Card3D from '../components/3d/Card3D';
import YugDoodleViewer from '../components/3d/YugDoodleViewer';

export const Home = () => {
  const { personal, experience, education, achievements, certificates, projects } = portfolioData;

  return (
    <div className="space-y-24 py-8 sm:py-12 relative z-10 text-white font-sans">
      
      {/* HERO SECTION */}
      <section className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 space-y-6"
          >
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-400/40 text-cyan-300 font-mono text-xs font-semibold shadow-lg shadow-cyan-500/10">
              <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-ping"></span>
              <span>Available for Machine Learning & AI Engineering Roles</span>
            </div>

            {/* Name & Title */}
            <div className="space-y-2">
              <span className="font-mono text-sm text-cyan-400 font-bold tracking-widest uppercase block">
                Machine Learning & AI Engineering Portfolio
              </span>
              <h1 className="text-4xl sm:text-6xl font-heading font-extrabold text-white tracking-tight leading-[1.1]">
                <span className="text-gradient-cyan">{personal.name}</span>
              </h1>
              <p className="text-xl sm:text-2xl font-heading font-semibold text-purple-300">
                {personal.title} • Computer Science Student at IITRAM
              </p>
            </div>

            {/* Core Mission Glass Card */}
            <Card3D maxTilt={4} className="p-6">
              <span className="font-mono text-xs text-cyan-400 font-bold uppercase tracking-wider block mb-2">
                Core Engineering Mission
              </span>
              <p className="text-lg font-heading font-semibold text-slate-100 leading-relaxed">
                "{personal.claim}"
              </p>
            </Card3D>

            {/* Subtext Summary */}
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl font-sans">
              Building end-to-end Machine Learning models, Django full-stack platforms, and AI Agent workflows using Python, PyTorch, Scikit-learn, React, and n8n.
            </p>

            {/* Social & CTA Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                to="/projects"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-mono font-bold text-sm hover:from-cyan-400 hover:to-blue-500 shadow-lg shadow-cyan-500/25 transition-all transform hover:-translate-y-0.5"
              >
                <span>View All Projects</span>
                <ArrowRight className="w-4 h-4 text-slate-950" />
              </Link>

              <a
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-3.5 rounded-xl bg-slate-900/90 border border-slate-700 font-mono text-xs font-bold text-white hover:border-cyan-400 hover:text-cyan-300 transition-all"
              >
                <Github className="w-4 h-4 text-cyan-400" />
                <span>GitHub</span>
              </a>

              <a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-3.5 rounded-xl bg-slate-900/90 border border-slate-700 font-mono text-xs font-bold text-white hover:border-purple-400 hover:text-purple-300 transition-all"
              >
                <Linkedin className="w-4 h-4 text-purple-400" />
                <span>LinkedIn</span>
              </a>
            </div>

            {/* Quick Stats Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-slate-800 font-mono text-xs">
              <div>
                <span className="text-slate-400 block">Education</span>
                <span className="text-cyan-300 font-bold text-sm">IITRAM B.Tech CSE</span>
              </div>
              <div>
                <span className="text-slate-400 block">Experience</span>
                <span className="text-purple-300 font-bold text-sm">FlyRank AI Intern</span>
              </div>
              <div>
                <span className="text-slate-400 block">Hackathon</span>
                <span className="text-amber-300 font-bold text-sm">1st Runner-Up</span>
              </div>
              <div>
                <span className="text-slate-400 block">Core Languages</span>
                <span className="text-emerald-400 font-bold text-sm">Python, JS, SQL</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Clean Yug Sayja Avatar Card */}
          <div className="lg:col-span-5">
            <YugDoodleViewer />
          </div>

        </div>
      </section>

      {/* HACKATHON ACHIEVEMENT BANNER */}
      {achievements && achievements[0] && (
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card3D maxTilt={3} className="p-6 sm:p-8 bg-gradient-to-r from-amber-950/30 via-slate-950 to-slate-950 border border-amber-500/40">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-400/30 text-amber-400 shrink-0">
                  <Trophy className="w-8 h-8" />
                </div>
                <div className="space-y-1">
                  <span className="px-2.5 py-0.5 rounded bg-amber-500/20 text-amber-300 font-mono text-xs font-bold border border-amber-400/30 inline-block">
                    Hackathon Award
                  </span>
                  <h3 className="text-xl font-heading font-extrabold text-white">
                    {achievements[0].title}
                  </h3>
                  <p className="text-slate-300 text-sm font-sans">
                    {achievements[0].description}
                  </p>
                </div>
              </div>

              <Link
                to="/projects/smart-shiksha"
                className="px-4 py-2.5 rounded-lg bg-amber-400 text-slate-950 font-mono text-xs font-bold hover:bg-amber-300 transition-colors shrink-0 shadow-md shadow-amber-400/20"
              >
                View Smart Shiksha Project
              </Link>
            </div>
          </Card3D>
        </section>
      )}

      {/* WORK EXPERIENCE DASHBOARD */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Briefcase className="w-5 h-5 text-cyan-400" />
            <h2 className="text-2xl font-heading font-bold text-white">
              Professional Work Experience
            </h2>
          </div>
          <Link to="/about" className="font-mono text-xs font-bold text-cyan-400 hover:text-cyan-300 flex items-center gap-1">
            View Full Background <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {experience.map((exp, idx) => (
          <Card3D key={idx} maxTilt={3} className="p-6 sm:p-8 space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-2 pb-4 border-b border-slate-800">
              <div>
                <h3 className="text-xl font-heading font-bold text-white">{exp.role}</h3>
                <p className="text-sm font-mono text-cyan-400 font-semibold">{exp.company} • {exp.location}</p>
              </div>
              <span className="px-3 py-1 rounded bg-slate-950 border border-slate-800 font-mono text-xs font-bold text-purple-300">
                {exp.period}
              </span>
            </div>

            <div className="space-y-3">
              <span className="font-mono text-xs font-bold text-cyan-400 uppercase tracking-wider block">
                Engineering Highlights & Responsibilities
              </span>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {exp.highlights.map((item, hIdx) => (
                  <div key={hIdx} className="flex items-start gap-2.5 p-3.5 rounded-lg bg-slate-950/80 border border-slate-800 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span className="text-slate-300 font-sans">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-2 flex flex-wrap items-center gap-2">
              <span className="font-mono text-xs font-bold text-slate-400 mr-2">Technologies Used:</span>
              {exp.techStack.map((tech, tIdx) => (
                <span key={tIdx} className="px-2.5 py-0.5 rounded bg-slate-950 border border-slate-800 font-mono text-xs text-cyan-300 font-bold">
                  {tech}
                </span>
              ))}
            </div>
          </Card3D>
        ))}
      </section>

      {/* TECHNICAL STACK & SKILLS DASHBOARD */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SkillsExplorer />
      </section>

      {/* VERIFIED CERTIFICATIONS DASHBOARD */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Award className="w-5 h-5 text-cyan-400" />
            <h2 className="text-2xl font-heading font-bold text-white">
              Verified IBM Credentials
            </h2>
          </div>
          <Link to="/certificates" className="font-mono text-xs font-bold text-cyan-400 hover:text-cyan-300 flex items-center gap-1">
            View All Certificates <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {certificates.map((cert) => (
            <Card3D key={cert.id} maxTilt={5} className="p-6 space-y-4 flex flex-col justify-between h-full">
              <div className="space-y-3">
                <div className="flex items-center justify-between gap-2">
                  <div className="w-9 h-9 rounded-lg bg-cyan-500/10 border border-cyan-400/30 flex items-center justify-center text-cyan-400 font-bold">
                    <Award className="w-5 h-5" />
                  </div>
                  <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded text-[10px] font-mono font-bold bg-cyan-500/20 text-cyan-300 border border-cyan-400/30">
                    <CheckCircle2 className="w-3 h-3 text-cyan-400" />
                    {cert.badgeText}
                  </span>
                </div>

                <h3 className="font-heading font-bold text-base text-white leading-snug">
                  {cert.title}
                </h3>

                <div className="space-y-0.5 font-mono text-xs">
                  <span className="text-cyan-400 font-semibold block">{cert.issuer}</span>
                  <span className="text-slate-400 block">{cert.date}</span>
                </div>
              </div>

              <div className="pt-3 border-t border-slate-800">
                <a
                  href={cert.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 font-mono text-xs font-bold text-cyan-400 hover:text-cyan-300 transition-colors"
                >
                  <span>Verify Credential Link</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </Card3D>
          ))}
        </div>
      </section>

      {/* PROJECTS CALLOUT BANNER */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <Card3D maxTilt={3} className="p-8 sm:p-10 bg-gradient-to-r from-slate-900 via-slate-950 to-slate-900 border border-cyan-500/30 text-center space-y-6">
          <h3 className="text-2xl sm:text-4xl font-heading font-bold text-white max-w-3xl mx-auto">
            Explore Yug Sayja's Real-World Projects
          </h3>

          <p className="text-slate-300 text-sm sm:text-base font-sans max-w-2xl mx-auto leading-relaxed">
            Including <strong className="text-cyan-300">SwasthyaCare</strong> (Hospital Management System with Django & Auth0 deployed at <a href="https://swasthyacare.onrender.com/" target="_blank" rel="noopener noreferrer" className="underline text-cyan-400 hover:text-cyan-300">swasthyacare.onrender.com</a>), <strong className="text-purple-300">Smart Shiksha</strong> (Hack Genesis 1st Runner-Up AI Learning Platform), and <strong className="text-amber-300">WhatsApp AI Agent</strong>.
          </p>

          <div className="pt-2 flex justify-center">
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-mono font-bold text-sm hover:from-cyan-400 hover:to-blue-500 shadow-xl shadow-cyan-500/25 transition-all transform hover:-translate-y-0.5"
            >
              <span>Explore Projects Showcase</span>
              <ArrowRight className="w-4 h-4 text-slate-950" />
            </Link>
          </div>
        </Card3D>
      </section>

    </div>
  );
};

export default Home;
