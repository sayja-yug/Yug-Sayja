import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Github, ExternalLink, Activity, Sparkles, Video } from 'lucide-react';
import Card3D from '../3d/Card3D';

export const ProjectCard = ({ project }) => {
  const { id, isLead, title, subtitle, shortDescription, techStack, results, githubUrl, demoUrl, isVideoDemo } = project;

  return (
    <Card3D maxTilt={6} className="h-full">
      <div 
        className={`group relative rounded-2xl p-6 sm:p-8 flex flex-col justify-between h-full border border-cyan-500/20 bg-slate-900/90 backdrop-blur-xl shadow-xl transition-all duration-300 ${
          isLead ? 'ring-1 ring-cyan-400/40 shadow-cyan-950/40' : ''
        }`}
      >
        <div>
          {/* Header Badge */}
          <div className="flex items-center justify-between gap-2 mb-4">
            {isLead ? (
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold bg-cyan-500/20 border border-cyan-400/40 text-cyan-300">
                <Activity className="w-3.5 h-3.5 text-cyan-400" />
                Lead Showcase Project
              </span>
            ) : (
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold bg-purple-500/20 border border-purple-400/40 text-purple-300">
                <Sparkles className="w-3.5 h-3.5 text-purple-400" />
                Featured AI Solution
              </span>
            )}

            <span className="text-xs font-mono text-slate-400">
              {techStack && techStack[0]}
            </span>
          </div>

          {/* Title & Subtitle */}
          <h3 className="text-xl sm:text-2xl font-heading font-extrabold text-white group-hover:text-cyan-300 transition-colors">
            <Link to={`/projects/${id}`} className="hover:underline">
              {title}
            </Link>
          </h3>
          <p className="text-xs font-mono text-cyan-400 font-semibold mt-1 mb-3">
            {subtitle}
          </p>

          {/* Description */}
          <p className="text-slate-300 text-sm font-sans leading-relaxed mb-5">
            {shortDescription}
          </p>

          {/* Tech Stack Pills */}
          {techStack && (
            <div className="flex flex-wrap gap-1.5 mb-5">
              {techStack.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-[11px] font-mono text-cyan-300 font-semibold"
                >
                  {tech}
                </span>
              ))}
            </div>
          )}

          {/* Key Metrics / Features Grid */}
          {results && (
            <div className="grid grid-cols-2 gap-2 mb-6">
              {results.slice(0, 4).map((res, idx) => (
                <div key={idx} className="p-3 rounded-lg bg-slate-950/80 border border-slate-800 text-xs font-mono">
                  <span className="text-[10px] text-slate-400 uppercase tracking-wider block font-semibold">{res.label}</span>
                  <span className="text-sm font-bold text-cyan-300 mt-0.5 block truncate">{res.value}</span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Action Footer */}
        <div className="pt-4 border-t border-slate-800 flex flex-wrap items-center justify-between gap-3 text-sm font-mono">
          <Link
            to={`/projects/${id}`}
            className="inline-flex items-center gap-1.5 font-bold text-cyan-400 hover:text-cyan-300 transition-colors text-xs"
          >
            <span>View Full Details</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>

          <div className="flex items-center gap-3">
            {githubUrl && (
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-cyan-400 transition-colors inline-flex items-center gap-1 text-xs font-bold"
                aria-label={`GitHub Repository for ${title}`}
              >
                <Github className="w-4 h-4" />
                <span>Code</span>
              </a>
            )}
            {demoUrl && (
              <a
                href={demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-950 font-bold bg-cyan-400 hover:bg-cyan-300 px-3 py-1 rounded transition-colors inline-flex items-center gap-1 text-xs shadow-md shadow-cyan-400/20"
                aria-label={`Demo Video for ${title}`}
              >
                {isVideoDemo ? <Video className="w-3.5 h-3.5" /> : <ExternalLink className="w-3.5 h-3.5" />}
                <span>{isVideoDemo ? 'Watch Video' : 'Live Demo'}</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </Card3D>
  );
};

export default ProjectCard;
