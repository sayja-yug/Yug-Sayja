import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Github, ExternalLink, Activity } from 'lucide-react';
import MetricBadge from './MetricBadge';
import Card3D from '../3d/Card3D';

export const ProjectCard = ({ project }) => {
  const { id, isLead, title, subtitle, shortDescription, model, results, githubUrl, demoUrl } = project;

  return (
    <Card3D maxTilt={10} className="h-full">
      <div 
        className={`group relative rounded-xl p-6 sm:p-8 flex flex-col justify-between h-full border border-cyan-500/20 bg-slate-900/80 backdrop-blur-md ${
          isLead ? 'ring-1 ring-cyan-400/30' : ''
        }`}
      >
        <div>
          {/* Header Badges */}
          <div className="flex items-center justify-between gap-2 mb-3">
            <div className="flex items-center gap-2">
              {isLead && (
                <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded text-[11px] font-mono font-bold bg-cyan-500/20 border border-cyan-400/40 text-cyan-300">
                  <Activity className="w-3 h-3 text-cyan-400" />
                  Lead ML Case Study
                </span>
              )}
              <span className="text-xs font-mono text-purple-300 bg-purple-950/60 px-2 py-0.5 rounded border border-purple-500/30">
                {model.architecture.split(' ')[0]}
              </span>
            </div>

            <span className="text-xs font-mono text-cyan-400/80 hidden sm:inline-block">
              {model.framework.split(',')[0]}
            </span>
          </div>

          {/* Title & Subtitle */}
          <h3 className="text-xl sm:text-2xl font-heading font-bold text-white group-hover:text-cyan-300 transition-colors">
            <Link to={`/projects/${id}`} className="hover:underline">
              {title}
            </Link>
          </h3>
          <p className="text-xs font-mono text-cyan-400 font-medium mt-1 mb-3">
            {subtitle}
          </p>

          {/* Description */}
          <p className="text-slate-300 text-sm font-sans leading-relaxed mb-6">
            {shortDescription}
          </p>

          {/* Metrics Grid */}
          <div className="grid grid-cols-2 gap-2 mb-6">
            {results.slice(0, 4).map((res, idx) => (
              <div key={idx} className="p-2.5 rounded bg-slate-950/70 border border-slate-800 text-xs font-mono">
                <span className="text-[10px] text-slate-400 uppercase tracking-wider block">{res.label}</span>
                <span className="text-base font-bold text-cyan-400 mt-0.5 block">{res.value}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Action Footer */}
        <div className="pt-4 border-t border-slate-800 flex flex-wrap items-center justify-between gap-3 text-sm">
          <Link
            to={`/projects/${id}`}
            className="inline-flex items-center gap-1.5 font-semibold text-cyan-400 hover:text-cyan-300 font-sans transition-colors"
          >
            View Case Study & 3D Telemetry
            <ArrowUpRight className="w-4 h-4" />
          </Link>

          <div className="flex items-center gap-3">
            {githubUrl && (
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-cyan-400 transition-colors inline-flex items-center gap-1 text-xs font-mono"
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
                className="text-slate-400 hover:text-cyan-400 transition-colors inline-flex items-center gap-1 text-xs font-mono"
                aria-label={`Live Demo for ${title}`}
              >
                <ExternalLink className="w-4 h-4" />
                <span>Demo</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </Card3D>
  );
};

export default ProjectCard;
