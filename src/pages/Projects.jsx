import React from 'react';
import { portfolioData } from '../data/portfolioData';
import SectionHeading from '../components/common/SectionHeading';
import ProjectCard from '../components/common/ProjectCard';

export const Projects = () => {
  const leadProject = portfolioData.projects.find((p) => p.isLead) || portfolioData.projects[0];
  const secondaryProjects = portfolioData.projects.filter((p) => !p.isLead);

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-12">
      
      {/* Header */}
      <SectionHeading
        eyebrow="Practical AI Portfolio"
        title="Machine Learning Projects & Technical Deep Dives"
        description="Detailed breakdowns of dataset engineering, neural network architectures, loss formulations, quantitative evaluation, and latency optimizations."
      />

      {/* Featured Lead Project Showcase */}
      <div className="space-y-4">
        <span className="font-mono text-xs font-bold text-accent uppercase tracking-wider block">
          Lead Project Showcase
        </span>
        <ProjectCard project={leadProject} />
      </div>

      {/* Secondary Projects Grid */}
      <div className="space-y-6 pt-6 border-t border-border">
        <span className="font-mono text-xs font-bold text-accent uppercase tracking-wider block">
          Secondary Applied Projects
        </span>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {secondaryProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>

    </div>
  );
};

export default Projects;
