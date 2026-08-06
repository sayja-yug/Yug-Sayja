import React, { useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowLeft, Github, ExternalLink, Activity, Database, Cpu, BarChart3, CheckCircle2, AlertTriangle, Layers, PlayCircle } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import MetricBadge from '../components/common/MetricBadge';
import SwasthyaTriageDemo from '../components/interactive/SwasthyaTriageDemo';
import SmartShikshaOCRDemo from '../components/interactive/SmartShikshaOCRDemo';

export const ProjectDetail = () => {
  const { id } = useParams();
  const project = portfolioData.projects.find((p) => p.id === id);

  const [activeTab, setActiveTab] = useState('demo');

  if (!project) {
    return <Navigate to="/projects" replace />;
  }

  const {
    title,
    subtitle,
    problem,
    dataset,
    model,
    results,
    methodology,
    evaluationMetrics,
    screenshots,
    githubUrl,
    demoUrl,
    lessonsLearned,
  } = project;

  const tabs = [
    { id: 'demo', label: 'Interactive Demo & Simulator', icon: PlayCircle },
    { id: 'overview', label: 'Problem & Methodology', icon: Activity },
    { id: 'dataset', label: 'Dataset & Preprocessing', icon: Database },
    { id: 'architecture', label: 'Model & Training', icon: Cpu },
    { id: 'metrics', label: 'Evaluation Metrics', icon: BarChart3 },
    { id: 'lessons', label: 'Lessons Learned', icon: AlertTriangle },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-8 font-sans">
      
      {/* Back Navigation */}
      <Link
        to="/projects"
        className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-dark-muted hover:text-primary transition-colors"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>Back to Projects Showcase</span>
      </Link>

      {/* Project Header Banner */}
      <div className="bg-bg-card border border-border rounded-xl p-6 sm:p-8 space-y-6 shadow-sm">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <span className="text-xs font-mono text-accent font-semibold uppercase tracking-wider block mb-1">
              Technical Case Study
            </span>
            <h1 className="text-2xl sm:text-4xl font-heading font-bold text-dark">
              {title}
            </h1>
            <p className="text-sm font-mono text-dark-muted mt-1">
              {subtitle}
            </p>
          </div>

          <div className="flex items-center gap-3">
            {githubUrl && (
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded bg-bg-subtle border border-border text-xs font-mono font-semibold text-dark hover:border-dark-subtle transition-colors"
              >
                <Github className="w-4 h-4" />
                <span>GitHub Repo</span>
              </a>
            )}
            {demoUrl && (
              <a
                href={demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded bg-primary text-white text-xs font-mono font-semibold hover:bg-primary-hover transition-colors"
              >
                <ExternalLink className="w-4 h-4 text-accent" />
                <span>Notebook / Demo</span>
              </a>
            )}
          </div>
        </div>

        {/* Highlights Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 border-t border-border">
          {results.map((res, idx) => (
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

      {/* Tabbed Navigation Control */}
      <div className="border-b border-border flex flex-wrap gap-2 sm:gap-6 overflow-x-auto pb-1">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`inline-flex items-center gap-2 px-3 py-2 text-xs sm:text-sm font-mono font-medium border-b-2 transition-colors whitespace-nowrap ${
                isActive
                  ? 'border-accent text-primary font-bold'
                  : 'border-transparent text-dark-muted hover:text-dark'
              }`}
            >
              <Icon className={`w-4 h-4 ${isActive ? 'text-accent' : 'text-dark-subtle'}`} />
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* TAB CONTENT PANELS */}
      <div className="bg-bg-card border border-border rounded-xl p-6 sm:p-8 space-y-6">
        
        {/* INTERACTIVE DEMO TAB */}
        {activeTab === 'demo' && (
          <div className="space-y-8">
            {project.id === 'swasthya-care' && <SwasthyaTriageDemo />}
            {project.id === 'smart-shiksha' && <SmartShikshaOCRDemo />}
          </div>
        )}

        {/* OVERVIEW & METHODOLOGY TAB */}
        {activeTab === 'overview' && (
          <div className="space-y-6">
            <div className="space-y-2">
              <h3 className="text-lg font-heading font-bold text-dark flex items-center gap-2">
                <Activity className="w-5 h-5 text-accent" />
                Problem Statement & Engineering Objective
              </h3>
              <p className="text-dark-muted text-sm sm:text-base leading-relaxed font-sans">
                {problem}
              </p>
            </div>

            <div className="space-y-3 pt-4 border-t border-border">
              <h3 className="text-lg font-heading font-bold text-dark flex items-center gap-2">
                <Layers className="w-5 h-5 text-accent" />
                Methodology & System Pipeline
              </h3>
              <div className="grid grid-cols-1 gap-3">
                {methodology.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-3.5 rounded bg-bg-subtle border border-border">
                    <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                    <p className="text-sm font-sans text-dark leading-relaxed">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* DATASET & PREPROCESSING TAB */}
        {activeTab === 'dataset' && (
          <div className="space-y-6">
            <h3 className="text-lg font-heading font-bold text-dark flex items-center gap-2">
              <Database className="w-5 h-5 text-accent" />
              Dataset Specifications & Augmentation Strategy
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-4 rounded bg-bg-subtle border border-border space-y-2">
                <span className="text-xs font-mono text-accent font-semibold uppercase block">Dataset Name</span>
                <p className="text-dark font-sans font-medium text-sm">{dataset.name}</p>
                <span className="text-xs font-mono text-dark-subtle block">{dataset.samples}</span>
              </div>

              <div className="p-4 rounded bg-bg-subtle border border-border space-y-2">
                <span className="text-xs font-mono text-accent font-semibold uppercase block">Class Distribution</span>
                <p className="text-dark font-sans text-sm">{dataset.distribution}</p>
              </div>
            </div>

            <div className="p-4 rounded bg-bg-subtle border border-border space-y-2">
              <span className="text-xs font-mono text-accent font-semibold uppercase block">Preprocessing Pipeline</span>
              <p className="text-dark font-sans text-sm leading-relaxed">{dataset.preprocessing}</p>
            </div>
          </div>
        )}

        {/* MODEL & ARCHITECTURE TAB */}
        {activeTab === 'architecture' && (
          <div className="space-y-6">
            <h3 className="text-lg font-heading font-bold text-dark flex items-center gap-2">
              <Cpu className="w-5 h-5 text-accent" />
              Neural Architecture & Training Configuration
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-4 rounded bg-bg-subtle border border-border space-y-2">
                <span className="text-xs font-mono text-accent font-semibold uppercase block">Neural Backbone</span>
                <p className="text-dark font-sans font-medium text-sm">{model.architecture}</p>
              </div>

              <div className="p-4 rounded bg-bg-subtle border border-border space-y-2">
                <span className="text-xs font-mono text-accent font-semibold uppercase block">Loss Formulation</span>
                <p className="text-dark font-sans font-medium text-sm">{model.lossFunction}</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-4 rounded bg-bg-subtle border border-border space-y-2">
                <span className="text-xs font-mono text-accent font-semibold uppercase block">Optimization Schedule</span>
                <p className="text-dark font-sans font-medium text-sm">{model.optimization}</p>
              </div>

              <div className="p-4 rounded bg-bg-subtle border border-border space-y-2">
                <span className="text-xs font-mono text-accent font-semibold uppercase block">Framework Stack</span>
                <p className="text-dark font-mono text-sm">{model.framework}</p>
              </div>
            </div>
          </div>
        )}

        {/* EVALUATION METRICS TAB */}
        {activeTab === 'metrics' && (
          <div className="space-y-6">
            <h3 className="text-lg font-heading font-bold text-dark flex items-center gap-2">
              <BarChart3 className="w-5 h-5 text-accent" />
              Quantitative Evaluation Metrics & Results
            </h3>

            {evaluationMetrics ? (
              <div className="divide-y divide-border border border-border rounded-lg overflow-hidden">
                {evaluationMetrics.map((item, idx) => (
                  <div key={idx} className="flex items-center justify-between p-4 bg-bg-subtle font-mono text-sm">
                    <span className="text-dark-muted font-sans font-medium">{item.metric}</span>
                    <span className="text-primary font-bold text-base">{item.score}</span>
                  </div>
                ))}
              </div>
            ) : (
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {results.map((res, idx) => (
                  <div key={idx} className="p-4 rounded bg-bg-subtle border border-border">
                    <span className="text-xs font-mono text-dark-subtle uppercase block">{res.label}</span>
                    <span className="text-xl font-mono font-bold text-primary block mt-1">{res.value}</span>
                  </div>
                ))}
              </div>
            )}

            {/* Screenshots / Artifact Cards */}
            {screenshots && screenshots.length > 0 && (
              <div className="space-y-4 pt-4 border-t border-border">
                <span className="text-xs font-mono text-accent font-semibold uppercase block">
                  Evaluation Artifact Placeholders
                </span>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {screenshots.map((screen, sIdx) => (
                    <div key={sIdx} className="p-4 rounded border border-border bg-bg space-y-2">
                      <span className="text-[10px] font-mono bg-bg-subtle px-2 py-0.5 rounded text-dark-subtle border border-border inline-block">
                        {screen.type}
                      </span>
                      <h4 className="font-heading font-bold text-sm text-dark">{screen.title}</h4>
                      <p className="text-xs text-dark-muted font-sans">{screen.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {/* LESSONS LEARNED TAB */}
        {activeTab === 'lessons' && (
          <div className="space-y-6">
            <h3 className="text-lg font-heading font-bold text-dark flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-accent" />
              Engineering Trade-offs & Lessons Learned
            </h3>

            <div className="space-y-3">
              {lessonsLearned.map((lesson, idx) => (
                <div key={idx} className="p-4 rounded bg-bg-subtle border border-border flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-accent/20 text-accent font-mono text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                    {idx + 1}
                  </span>
                  <p className="text-sm font-sans text-dark leading-relaxed">
                    {lesson}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>

    </div>
  );
};

export default ProjectDetail;
