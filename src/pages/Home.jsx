import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Activity, Terminal, FileText, Mail, Gauge, Github, Linkedin, Cpu, HeartPulse } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import SectionHeading from '../components/common/SectionHeading';
import ProjectCard from '../components/common/ProjectCard';
import SwasthyaTriageDemo from '../components/interactive/SwasthyaTriageDemo';
import Card3D from '../components/3d/Card3D';
import Model3DViewer from '../components/3d/Model3DViewer';

export const Home = () => {
  const leadProject = portfolioData.projects.find((p) => p.isLead) || portfolioData.projects[0];
  const otherProjects = portfolioData.projects.filter((p) => !p.isLead);
  const flyrankExperience = portfolioData.experience[0];

  return (
    <div className="space-y-24 py-8 sm:py-12 relative z-10 text-white font-sans">
      
      {/* 3D CYBERNETIC HERO SECTION */}
      <section className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 space-y-6"
          >
            {/* Holographic Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-400/40 text-cyan-300 font-mono text-xs font-semibold shadow-lg shadow-cyan-500/10">
              <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-ping"></span>
              <span>Available for Machine Learning Engineer Roles</span>
            </div>

            {/* Name & Title */}
            <div className="space-y-2">
              <span className="font-mono text-sm text-cyan-400 font-bold tracking-widest uppercase block">
                Machine Learning Engineering Portfolio
              </span>
              <h1 className="text-4xl sm:text-6xl font-heading font-extrabold text-white tracking-tight leading-[1.1]">
                <span className="text-gradient-cyan">{portfolioData.personal.name}</span>
              </h1>
              <p className="text-xl sm:text-2xl font-heading font-semibold text-purple-300">
                {portfolioData.personal.title}
              </p>
            </div>

            {/* Core Mission Glass Card */}
            <Card3D maxTilt={6} className="p-6">
              <span className="font-mono text-xs text-cyan-400 font-bold uppercase tracking-wider block mb-2">
                Core Technical Engineering Mission
              </span>
              <p className="text-lg font-heading font-semibold text-slate-100 leading-relaxed">
                "{portfolioData.personal.claim}"
              </p>
            </Card3D>

            {/* Subtext Summary */}
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl font-sans">
              Specializing in deep learning architecture design, multimodal diagnostic triage, ONNX model quantization, and low-latency edge/cloud inference optimization (PyTorch, TensorRT, FastAPI).
            </p>

            {/* Social & CTA Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                to="/projects"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-mono font-bold text-sm hover:from-cyan-400 hover:to-blue-500 shadow-lg shadow-cyan-500/25 transition-all transform hover:-translate-y-0.5"
              >
                <span>Explore 3D Machine Learning Projects</span>
                <ArrowRight className="w-4 h-4 text-slate-950" />
              </Link>

              <a
                href={portfolioData.personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-3.5 rounded-xl bg-slate-900/90 border border-slate-700 font-mono text-xs font-bold text-white hover:border-cyan-400 hover:text-cyan-300 transition-all"
              >
                <Github className="w-4 h-4 text-cyan-400" />
                <span>GitHub Profile</span>
              </a>

              <a
                href={portfolioData.personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-3.5 rounded-xl bg-slate-900/90 border border-slate-700 font-mono text-xs font-bold text-white hover:border-purple-400 hover:text-purple-300 transition-all"
              >
                <Linkedin className="w-4 h-4 text-purple-400" />
                <span>LinkedIn Profile</span>
              </a>
            </div>

            {/* Quick Cyber Stats Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-slate-800 font-mono text-xs">
              <div>
                <span className="text-slate-400 block">Role</span>
                <span className="text-cyan-300 font-bold text-sm">ML Engineer</span>
              </div>
              <div>
                <span className="text-slate-400 block">Frameworks</span>
                <span className="text-white font-bold text-sm">PyTorch & ONNX</span>
              </div>
              <div>
                <span className="text-slate-400 block">Work Experience</span>
                <span className="text-purple-300 font-bold text-sm">FlyRank AI Intern</span>
              </div>
              <div>
                <span className="text-slate-400 block">Optimization</span>
                <span className="text-emerald-400 font-bold text-sm">INT8 Quantization</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: 3D Holographic Model Projection Box */}
          <div className="lg:col-span-5">
            <Model3DViewer />
          </div>

        </div>
      </section>

      {/* FEATURED LEAD PROJECT SHOWCASE: SWASTHYACARE */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Primary Portfolio Showcase"
          title="Lead Project: SwasthyaCare AI Triage"
          description="Multimodal diagnostic platform combining MobileNetV3 with quantized clinical NLP transformers for low-latency offline execution."
          className="mb-8"
        />

        <Card3D maxTilt={4} className="p-6 sm:p-10 space-y-8">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-800 pb-6">
            <div>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-cyan-500/20 border border-cyan-400/40 text-cyan-300 font-mono text-xs font-bold mb-2">
                <HeartPulse className="w-3.5 h-3.5 text-cyan-400" />
                Featured Lead ML Case Study
              </span>
              <h3 className="text-2xl sm:text-4xl font-heading font-bold text-white">
                {leadProject.title}
              </h3>
              <p className="text-cyan-400 font-mono text-xs mt-1">
                {leadProject.subtitle}
              </p>
            </div>

            <div className="flex items-center gap-3">
              <Link
                to={`/projects/${leadProject.id}`}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-cyan-500 text-slate-950 font-mono text-xs font-bold hover:bg-cyan-400 transition-colors shadow-lg shadow-cyan-500/20"
              >
                <span>Full Case Study & 3D Interactive Demo</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Results Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {leadProject.results.map((res, i) => (
              <div key={i} className="p-4 rounded-lg bg-slate-950/80 border border-slate-800 font-mono">
                <span className="text-[10px] text-slate-400 uppercase tracking-wider block font-semibold">
                  {res.label}
                </span>
                <span className="text-2xl font-bold text-cyan-400 mt-1 block">
                  {res.value}
                </span>
                <span className="text-xs text-slate-300 font-sans mt-1 block">
                  {res.description}
                </span>
              </div>
            ))}
          </div>

          {/* Embedded Interactive Healthcare Diagnostic Simulator */}
          <div className="pt-6 border-t border-slate-800">
            <span className="font-mono text-xs font-bold text-cyan-400 uppercase tracking-wider block mb-3">
              Live Multimodal Diagnostic & Triage Simulator
            </span>
            <SwasthyaTriageDemo />
          </div>
        </Card3D>
      </section>

      {/* SECONDARY PROJECTS GRID */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Applied Machine Learning Engineering"
          title="Machine Learning Projects Showcase"
          description="Machine learning applications and deep neural networks engineered by Yug Sayja."
          className="mb-8"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {otherProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>

    </div>
  );
};

export default Home;
