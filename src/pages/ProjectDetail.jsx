import React, { useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowLeft, Github, ExternalLink, CheckCircle2, Video, PlayCircle, Activity, Award, Eye, X } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import Card3D from '../components/3d/Card3D';

export const ProjectDetail = () => {
  const { id } = useParams();
  const project = portfolioData.projects.find((p) => p.id === id);
  const [isCertModalOpen, setIsCertModalOpen] = useState(false);

  if (!project) {
    return <Navigate to="/projects" replace />;
  }

  const {
    title,
    subtitle,
    shortDescription,
    problem,
    techStack,
    results,
    highlights,
    githubUrl,
    demoUrl,
    videoEmbedUrl,
    isVideoDemo,
    certImageUrl,
  } = project;

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-8 font-sans text-white relative z-10">
      
      {/* Full-Screen Certificate Modal */}
      {isCertModalOpen && certImageUrl && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/90 backdrop-blur-xl animate-fadeIn">
          <div className="bg-slate-900 border border-amber-500/40 rounded-2xl max-w-4xl w-full max-h-[92vh] flex flex-col shadow-2xl overflow-hidden relative">
            <div className="px-6 py-4 border-b border-slate-800 flex items-center justify-between bg-slate-950/80 font-mono">
              <div className="flex items-center gap-2">
                <Award className="w-5 h-5 text-amber-400" />
                <span className="font-bold text-sm text-white">
                  HackGenesis'26 — 2nd Position (1st Runner-Up) Certificate
                </span>
              </div>
              <button
                onClick={() => setIsCertModalOpen(false)}
                className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="p-4 sm:p-6 overflow-y-auto bg-slate-950 flex items-center justify-center">
              <img
                src={certImageUrl}
                alt="HackGenesis 2026 Certificate of Achievement - Team Byte Forge - Yug Sayja"
                className="w-full h-auto max-h-[75vh] object-contain rounded-lg border border-slate-800 shadow-2xl"
              />
            </div>
          </div>
        </div>
      )}

      {/* Back Navigation */}
      <Link
        to="/projects"
        className="inline-flex items-center gap-2 text-xs font-mono font-bold text-slate-400 hover:text-cyan-300 transition-colors"
      >
        <ArrowLeft className="w-4 h-4 text-cyan-400" />
        <span>Back to Projects Showcase</span>
      </Link>

      {/* Project Header Card */}
      <Card3D maxTilt={4} className="p-6 sm:p-10 space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-800 pb-6">
          <div className="space-y-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-cyan-500/20 border border-cyan-400/40 text-cyan-300 font-mono text-xs font-bold">
              <Activity className="w-3.5 h-3.5 text-cyan-400" />
              Project Breakdown
            </span>
            <h1 className="text-2xl sm:text-4xl font-heading font-extrabold text-white">
              {title}
            </h1>
            <p className="text-sm font-mono text-cyan-400">
              {subtitle}
            </p>
          </div>

          <div className="flex items-center gap-3">
            {githubUrl && (
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-slate-900 border border-slate-700 text-xs font-mono font-bold text-white hover:border-cyan-400 hover:text-cyan-300 transition-colors"
              >
                <Github className="w-4 h-4 text-cyan-400" />
                <span>GitHub Repository</span>
              </a>
            )}
            {demoUrl && (
              <a
                href={demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-cyan-400 text-slate-950 text-xs font-mono font-bold hover:bg-cyan-300 transition-colors shadow-lg shadow-cyan-400/20"
              >
                {isVideoDemo ? <Video className="w-4 h-4" /> : <ExternalLink className="w-4 h-4" />}
                <span>{isVideoDemo ? 'Watch Google Drive Video' : 'Live Project Demo'}</span>
              </a>
            )}
          </div>
        </div>

        {/* Short Description */}
        <p className="text-slate-300 text-base leading-relaxed font-sans">
          {shortDescription}
        </p>

        {/* Tech Stack Pills */}
        <div className="space-y-2 pt-2">
          <span className="font-mono text-xs font-bold text-cyan-400 uppercase tracking-wider block">
            Technologies & Frameworks Used
          </span>
          <div className="flex flex-wrap gap-2">
            {techStack.map((tech, idx) => (
              <span
                key={idx}
                className="px-3 py-1 rounded bg-slate-950 border border-slate-800 font-mono text-xs text-cyan-300 font-bold"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Results Grid */}
        {results && (
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 border-t border-slate-800 font-mono">
            {results.map((res, idx) => (
              <div key={idx} className="p-3.5 rounded-lg bg-slate-950/80 border border-slate-800">
                <span className="text-[10px] text-slate-400 uppercase tracking-wider block font-semibold">{res.label}</span>
                <span className="text-lg font-bold text-cyan-300 mt-0.5 block">{res.value}</span>
                <span className="text-[11px] text-slate-400 font-sans mt-0.5 block">{res.description}</span>
              </div>
            ))}
          </div>
        )}
      </Card3D>

      {/* HACKATHON CERTIFICATE PROOF SECTION (If certImageUrl exists) */}
      {certImageUrl && (
        <Card3D maxTilt={3} className="p-6 sm:p-8 space-y-4 border-amber-500/40 bg-gradient-to-r from-slate-900 via-slate-950 to-slate-900">
          <div className="flex items-center justify-between border-b border-slate-800 pb-4">
            <div className="flex items-center gap-2.5">
              <Award className="w-6 h-6 text-amber-400" />
              <div>
                <h3 className="text-lg font-heading font-extrabold text-white">
                  Official Hackathon Winner Certificate
                </h3>
                <span className="font-mono text-xs text-amber-300 block font-semibold">
                  HackGenesis'26 — 2nd Position (1st Runner-Up) | Team Byte Forge | IITRAM
                </span>
              </div>
            </div>

            <button
              onClick={() => setIsCertModalOpen(true)}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-amber-400 text-slate-950 font-mono text-xs font-bold hover:bg-amber-300 transition-colors shadow-md shadow-amber-400/20"
            >
              <Eye className="w-4 h-4" />
              <span>Inspect Full Certificate</span>
            </button>
          </div>

          {/* Certificate Image Frame */}
          <div
            onClick={() => setIsCertModalOpen(true)}
            className="relative rounded-xl overflow-hidden border border-amber-500/30 bg-slate-950 cursor-pointer group shadow-2xl aspect-[16/10] max-h-96"
          >
            <img
              src={certImageUrl}
              alt="HackGenesis 2026 Certificate - Team Byte Forge - Yug Sayja"
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-xs">
              <span className="px-4 py-2 rounded-lg bg-amber-400 text-slate-950 font-mono text-xs font-bold shadow-xl inline-flex items-center gap-2">
                <Eye className="w-4 h-4" />
                <span>Click to Open High-Res Certificate</span>
              </span>
            </div>
          </div>
        </Card3D>
      )}

      {/* EMBEDDED DEMO VIDEO SECTION (if videoEmbedUrl exists) */}
      {videoEmbedUrl && (
        <Card3D maxTilt={2} className="p-6 sm:p-8 space-y-4 border-cyan-500/30">
          <div className="flex items-center justify-between border-b border-slate-800 pb-4">
            <div className="flex items-center gap-2">
              <PlayCircle className="w-5 h-5 text-cyan-400" />
              <h3 className="text-lg font-heading font-bold text-white">
                Live Video Demonstration & Workflow Walkthrough
              </h3>
            </div>
            <a
              href={demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-cyan-500/20 border border-cyan-400/40 text-cyan-300 font-mono text-xs font-bold hover:bg-cyan-500 hover:text-slate-950 transition-colors"
            >
              <span>Open in Google Drive</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="relative rounded-xl overflow-hidden border border-slate-800 aspect-video bg-slate-950 shadow-2xl">
            <iframe
              src={videoEmbedUrl}
              title={`${title} Live Video Demo`}
              className="w-full h-full border-0"
              allow="autoplay; encrypted-media"
              allowFullScreen
            ></iframe>
          </div>
        </Card3D>
      )}

      {/* Problem & Key Highlights */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        
        {/* Problem Statement */}
        <div className="md:col-span-5">
          <Card3D maxTilt={4} className="p-6 sm:p-8 space-y-3 h-full">
            <span className="font-mono text-xs font-bold text-cyan-400 uppercase tracking-wider block">
              Problem & Core Objective
            </span>
            <p className="text-slate-300 text-sm leading-relaxed font-sans">
              {problem}
            </p>
          </Card3D>
        </div>

        {/* Key Features & Achievements */}
        <div className="md:col-span-7">
          <Card3D maxTilt={4} className="p-6 sm:p-8 space-y-4 h-full">
            <span className="font-mono text-xs font-bold text-cyan-400 uppercase tracking-wider block">
              Key System Highlights & Implementation
            </span>
            <div className="space-y-3">
              {highlights.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3 p-3.5 rounded-lg bg-slate-950/80 border border-slate-800 text-sm">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span className="text-slate-300 font-sans leading-relaxed">{item}</span>
                </div>
              ))}
            </div>
          </Card3D>
        </div>

      </div>

    </div>
  );
};

export default ProjectDetail;
