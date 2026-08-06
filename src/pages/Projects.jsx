import React from 'react';
import { portfolioData } from '../data/portfolioData';
import SectionHeading from '../components/common/SectionHeading';
import ProjectCard from '../components/common/ProjectCard';

export const Projects = () => {
  const { projects } = portfolioData;

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-12 font-sans text-white relative z-10">
      
      {/* Header */}
      <SectionHeading
        eyebrow="Applied AI & Software Solutions"
        title="Machine Learning & Intelligent Agent Projects"
        description="Real-world projects developed using Python, Django, PyTorch, Scikit-learn, and n8n workflow automation."
      />

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

    </div>
  );
};

export default Projects;
