import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, ShieldCheck, ExternalLink, Activity, Sparkles, Terminal, FileText, Mail, Gauge } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import SectionHeading from '../components/common/SectionHeading';
import ProjectCard from '../components/common/ProjectCard';
import ChestXRaySimulator from '../components/interactive/ChestXRaySimulator';
import LatencyBenchmarkExplorer from '../components/interactive/LatencyBenchmarkExplorer';

export const Home = () => {
  const leadProject = portfolioData.projects.find((p) => p.isLead) || portfolioData.projects[0];
  const otherProjects = portfolioData.projects.filter((p) => !p.isLead);
  const flyrankExperience = portfolioData.experience[0];

  return (
    <div className="space-y-20 py-8 sm:py-12">
      
      {/* HERO SECTION */}
      <section className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="space-y-6 max-w-4xl"
        >
          {/* Status Pill */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent font-mono text-xs font-semibold">
            <span className="w-2 h-2 rounded-full bg-accent animate-ping"></span>
            <span>Available for MLE Internship & Entry-Level Roles</span>
          </div>

          {/* Heading Claim */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-heading font-bold text-dark tracking-tight leading-[1.1]">
            {portfolioData.personal.title}
          </h1>

          {/* Explicit Core Claim Box */}
          <div className="p-5 sm:p-6 rounded-lg bg-bg-card border border-border border-l-4 border-l-primary shadow-sm space-y-2">
            <span className="font-mono text-xs text-dark-subtle font-semibold uppercase tracking-wider block">
              Core Technical Mission
            </span>
            <p className="text-lg sm:text-xl font-heading font-semibold text-primary">
              "{portfolioData.personal.claim}"
            </p>
          </div>

          {/* Subtext Summary */}
          <p className="text-dark-muted text-base sm:text-lg font-sans leading-relaxed max-w-3xl">
            Focusing on medical image classification, multimodal diagnostics, and model latency optimization. 
            Combining PyTorch deep learning architectures with patient-disjoint evaluation standards and ONNX runtime quantization.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-primary text-white font-sans font-medium text-sm hover:bg-primary-hover shadow-sm transition-all"
            >
              <span>Explore Machine Learning Projects</span>
              <ArrowRight className="w-4 h-4 text-accent" />
            </Link>

            <a
              href={`mailto:${portfolioData.personal.email}`}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-md bg-bg-card border border-border font-mono text-xs font-semibold text-dark hover:border-dark-subtle transition-all"
            >
              <Mail className="w-4 h-4 text-accent" />
              <span>Contact for Interview</span>
            </a>
          </div>

          {/* Quick Stats Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-border/80 text-xs font-mono">
            <div>
              <span className="text-dark-subtle block">Primary Domain</span>
              <span className="text-dark font-bold text-sm">Computer Vision</span>
            </div>
            <div>
              <span className="text-dark-subtle block">Core Framework</span>
              <span className="text-dark font-bold text-sm">PyTorch 2.x</span>
            </div>
            <div>
              <span className="text-dark-subtle block">Key Experience</span>
              <span className="text-dark font-bold text-sm">FlyRank AI Intern</span>
            </div>
            <div>
              <span className="text-dark-subtle block">Evaluation Focus</span>
              <span className="text-dark font-bold text-sm">AUC-ROC & Latency</span>
            </div>
          </div>
        </motion.div>
      </section>

      {/* FEATURED LEAD PROJECT SECTION */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Primary Portfolio Showcase"
          title="Lead Project: Chest X-Ray Disease Detection"
          description="A multi-label classification model trained on 100k+ radiograph scans with patient-disjoint evaluation and Grad-CAM explainable AI."
          className="mb-8"
        />

        <div className="bg-bg-card border border-primary/30 rounded-xl p-6 sm:p-10 shadow-sm relative overflow-hidden space-y-8">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-border pb-6">
            <div>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-primary text-white font-mono text-xs font-semibold mb-2">
                <Activity className="w-3.5 h-3.5 text-accent" />
                Featured Lead Case Study
              </span>
              <h3 className="text-2xl sm:text-3xl font-heading font-bold text-dark">
                {leadProject.title}
              </h3>
              <p className="text-accent font-mono text-xs mt-1">
                {leadProject.subtitle}
              </p>
            </div>

            <div className="flex items-center gap-3">
              <Link
                to={`/projects/${leadProject.id}`}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded bg-primary text-white font-mono text-xs font-semibold hover:bg-primary-hover transition-colors"
              >
                <span>Full Technical Deep Dive</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Results Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {leadProject.results.map((res, i) => (
              <div key={i} className="p-4 rounded bg-bg-subtle border border-border">
                <span className="text-[10px] font-mono text-dark-subtle uppercase tracking-wider block font-semibold">
                  {res.label}
                </span>
                <span className="text-2xl font-mono font-bold text-primary mt-1 block">
                  {res.value}
                </span>
                <span className="text-xs text-dark-muted font-sans mt-1 block">
                  {res.description}
                </span>
              </div>
            ))}
          </div>

          {/* Architecture Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4 border-t border-border text-sm">
            <div>
              <span className="font-mono text-xs font-semibold text-accent uppercase block mb-1">
                Architecture & Model
              </span>
              <p className="text-dark font-sans text-sm font-medium">
                {leadProject.model.architecture}
              </p>
            </div>
            <div>
              <span className="font-mono text-xs font-semibold text-accent uppercase block mb-1">
                Loss Function
              </span>
              <p className="text-dark font-sans text-sm font-medium">
                {leadProject.model.lossFunction}
              </p>
            </div>
            <div>
              <span className="font-mono text-xs font-semibold text-accent uppercase block mb-1">
                Evaluation Rigor
              </span>
              <p className="text-dark font-sans text-sm font-medium">
                Patient-Disjoint Train/Val/Test Split (70/15/15)
              </p>
            </div>
          </div>

          {/* Embedded Interactive Diagnostic Simulator */}
          <div className="pt-6 border-t border-border">
            <span className="font-mono text-xs font-bold text-accent uppercase tracking-wider block mb-3">
              Live Interactive Visualizer Demo
            </span>
            <ChestXRaySimulator />
          </div>
        </div>
      </section>

      {/* INTERACTIVE MODEL LATENCY & QUANTIZATION SECTION */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Model Latency & Performance Optimization"
          title="Interactive Model Optimization Telemetry"
          description="Explore latency, memory footprint reduction, and throughput across PyTorch FP32, ONNX FP16, and INT8 Post-Training Quantization."
          className="mb-8"
        />

        <LatencyBenchmarkExplorer />
      </section>

      {/* SECONDARY PROJECTS GRID */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Applied AI Solutions"
          title="Other Machine Learning Projects"
          description="Practical computer vision and multimodal diagnostic applications built for edge devices and educational accessibility."
          className="mb-8"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {otherProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>

      {/* TECHNICAL COMPETENCIES / SKILLS MATRIX */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Technical Stack & Expertise"
          title="Machine Learning Engineering Capabilities"
          description="Built through hands-on project implementation, model benchmarking, and internship experience."
          className="mb-8"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {portfolioData.skills.categories.map((cat, idx) => (
            <div key={idx} className="p-6 rounded-lg bg-bg-card border border-border space-y-4">
              <div className="flex items-center gap-2 pb-3 border-b border-border">
                <Terminal className="w-4 h-4 text-accent" />
                <h3 className="font-heading font-bold text-base text-dark">
                  {cat.name}
                </h3>
              </div>
              <ul className="space-y-3">
                {cat.skills.map((skill, sIdx) => (
                  <li key={sIdx} className="space-y-0.5">
                    <span className="text-sm font-sans font-semibold text-dark block">
                      {skill.name}
                    </span>
                    <span className="text-xs font-mono text-dark-muted block">
                      {skill.detail}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* FLYRANK EXPERIENCE HIGHLIGHT */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-bg-subtle rounded-xl border border-border p-6 sm:p-8 space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-border">
            <div>
              <span className="text-xs font-mono text-accent font-semibold uppercase tracking-wider block">
                Work Experience Highlight
              </span>
              <h3 className="text-xl sm:text-2xl font-heading font-bold text-dark mt-1">
                {flyrankExperience.role} @ {flyrankExperience.company}
              </h3>
              <span className="text-xs font-mono text-dark-subtle">
                {flyrankExperience.period} • {flyrankExperience.type}
              </span>
            </div>
            <Link
              to="/about"
              className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-primary hover:text-accent transition-colors"
            >
              <span>View Full Experience & About</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {flyrankExperience.highlights.map((highlight, hIdx) => (
              <div key={hIdx} className="flex items-start gap-3 p-3 rounded bg-bg border border-border/60">
                <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                <p className="text-sm font-sans text-dark-muted leading-relaxed">
                  {highlight}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RECRUITER CALL TO ACTION */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-primary text-white rounded-xl p-8 sm:p-12 text-center space-y-6 shadow-md">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-white/10 text-accent font-mono text-xs font-semibold">
            <ShieldCheck className="w-4 h-4" />
            Ready for Technical Interview & Coding Assessment
          </span>

          <h2 className="text-2xl sm:text-4xl font-heading font-bold text-white max-w-2xl mx-auto leading-tight">
            Interested in adding a rigorous, evidence-driven Machine Learning Engineer to your team?
          </h2>

          <p className="text-white/80 font-sans text-sm sm:text-base max-w-xl mx-auto">
            {portfolioData.personal.cta}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <a
              href={`mailto:${portfolioData.personal.email}`}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-accent text-white font-sans font-semibold text-sm hover:bg-accent-hover transition-colors shadow-sm"
            >
              <Mail className="w-4 h-4" />
              <span>Send Interview Invitation</span>
            </a>
            <a
              href={portfolioData.personal.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-white/10 text-white border border-white/20 font-mono text-xs font-semibold hover:bg-white/20 transition-colors"
            >
              <FileText className="w-4 h-4 text-accent" />
              <span>View Resume PDF</span>
            </a>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;
