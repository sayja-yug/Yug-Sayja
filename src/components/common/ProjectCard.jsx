import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Github, ExternalLink, Activity } from 'lucide-react';
import MetricBadge from './MetricBadge';

export const ProjectCard = ({ project }) => {
  const { id, isLead, title, subtitle, shortDescription, model, results, githubUrl, demoUrl } = project;

  return (
    <div 
      className={`group relative bg-bg-card rounded-lg border transition-all duration-200 hover:shadow-md flex flex-col justify-between ${
        isLead ? 'border-primary/40 ring-1 ring-primary/10 p-6 sm:p-8' : 'border-border p-6'
      }`}
    >
      <div>
        {/* Header Badges */}
        <div className="flex items-center justify-between gap-2 mb-3">
          <div className="flex items-center gap-2">
            {isLead && (
              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded text-[11px] font-mono font-semibold bg-primary text-white">
                <Activity className="w-3 h-3 text-accent" />
                Featured Lead Project
              </span>
            )}
            <span className="text-xs font-mono text-dark-subtle bg-bg-subtle px-2 py-0.5 rounded border border-border">
              {model.architecture.split(' ')[0]}
            </span>
          </div>

          <span className="text-xs font-mono text-dark-muted hidden sm:inline-block">
            {model.framework.split(',')[0]}
          </span>
        </div>

        {/* Title & Subtitle */}
        <h3 className="text-xl sm:text-2xl font-heading font-bold text-dark group-hover:text-primary transition-colors">
          <Link to={`/projects/${id}`} className="hover:underline">
            {title}
          </Link>
        </h3>
        <p className="text-xs font-mono text-accent font-medium mt-1 mb-3">
          {subtitle}
        </p>

        {/* Description */}
        <p className="text-dark-muted text-sm font-sans leading-relaxed mb-6">
          {shortDescription}
        </p>

        {/* Metrics Grid */}
        <div className="grid grid-cols-2 gap-2 mb-6">
          {results.slice(0, 4).map((res, idx) => (
            <MetricBadge 
              key={idx} 
              label={res.label} 
              value={res.value} 
              description={res.description}
              variant={idx === 0 ? 'accent' : 'neutral'} 
            />
          ))}
        </div>
      </div>

      {/* Action Footer */}
      <div className="pt-4 border-t border-border flex flex-wrap items-center justify-between gap-3 text-sm">
        <Link
          to={`/projects/${id}`}
          className="inline-flex items-center gap-1.5 font-semibold text-primary hover:text-accent font-sans transition-colors"
        >
          View Case Study & Metrics
          <ArrowUpRight className="w-4 h-4" />
        </Link>

        <div className="flex items-center gap-3">
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-dark-subtle hover:text-dark transition-colors inline-flex items-center gap-1 text-xs font-mono"
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
              className="text-dark-subtle hover:text-dark transition-colors inline-flex items-center gap-1 text-xs font-mono"
              aria-label={`Live Demo for ${title}`}
            >
              <ExternalLink className="w-4 h-4" />
              <span>Notebook/Demo</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
