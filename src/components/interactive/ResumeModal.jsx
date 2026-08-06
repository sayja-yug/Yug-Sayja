import React from 'react';
import { X, Download, FileText, ExternalLink, Printer, CheckCircle2 } from 'lucide-react';
import { portfolioData } from '../../data/portfolioData';

export const ResumeModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const { personal, experience, projects, skills, education } = portfolioData;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fadeIn font-sans">
      <div className="bg-bg-card border border-border rounded-xl w-full max-w-4xl max-h-[90vh] flex flex-col shadow-2xl overflow-hidden">
        
        {/* Modal Top Bar */}
        <div className="px-6 py-4 border-b border-border flex items-center justify-between bg-bg-subtle">
          <div className="flex items-center gap-2">
            <FileText className="w-5 h-5 text-accent" />
            <span className="font-heading font-bold text-base text-dark">
              Resume Preview — {personal.name}
            </span>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={personal.resumeUrl}
              download="Yug_Sayja_MLE_Resume.pdf"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-primary text-white font-mono text-xs font-semibold hover:bg-primary-hover transition-colors"
            >
              <Download className="w-3.5 h-3.5 text-accent" />
              <span>Download PDF</span>
            </a>

            <button
              onClick={onClose}
              className="p-1.5 rounded text-dark-muted hover:text-dark hover:bg-border/50 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Resume Document Viewport */}
        <div className="p-6 sm:p-10 overflow-y-auto space-y-6 text-sm font-sans text-dark bg-white">
          
          {/* Header */}
          <div className="border-b border-gray-200 pb-5 space-y-2">
            <h1 className="text-2xl sm:text-3xl font-heading font-bold text-gray-900 tracking-tight">
              {personal.name}
            </h1>
            <p className="font-mono text-sm text-cyan-600 font-semibold">{personal.title}</p>
            <div className="flex flex-wrap items-center gap-4 font-mono text-xs text-gray-600 pt-1">
              <span>Email: {personal.email}</span>
              <span>•</span>
              <span>Location: {personal.location}</span>
              <span>•</span>
              <span>GitHub: github.com/sayja-yug</span>
              <span>•</span>
              <span>LinkedIn: linkedin.com/in/yug-sayja-435a45382</span>
            </div>
          </div>

          {/* Core Technical Objective */}
          <div className="space-y-1.5">
            <h2 className="font-mono text-xs font-bold text-gray-500 uppercase tracking-wider">
              Professional Summary & Role Target
            </h2>
            <p className="text-gray-700 text-sm leading-relaxed">
              {personal.summary}
            </p>
          </div>

          {/* Technical Skills */}
          <div className="space-y-2">
            <h2 className="font-mono text-xs font-bold text-gray-500 uppercase tracking-wider">
              Technical Skill Matrix
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 font-mono text-xs">
              <div>
                <strong className="text-gray-900">Machine Learning:</strong> Neural Networks, Transformers, YOLOv8, ResNet, MobileNetV3, DistilBERT
              </div>
              <div>
                <strong className="text-gray-900">Frameworks:</strong> PyTorch 2.x, ONNX Runtime, Scikit-Learn, TensorFlow
              </div>
              <div>
                <strong className="text-gray-900">Optimization:</strong> Post-Training Quantization (INT8), FP16, Latency Benchmarking
              </div>
              <div>
                <strong className="text-gray-900">Tools & Deployment:</strong> Docker, FastAPI, Git, WebAssembly, Python, Bash
              </div>
            </div>
          </div>

          {/* Experience */}
          <div className="space-y-3">
            <h2 className="font-mono text-xs font-bold text-gray-500 uppercase tracking-wider">
              Experience
            </h2>
            {experience.map((exp, i) => (
              <div key={i} className="space-y-1.5">
                <div className="flex justify-between font-mono text-xs">
                  <strong className="text-gray-900">{exp.role} — {exp.company}</strong>
                  <span className="text-gray-500">{exp.period}</span>
                </div>
                <ul className="list-disc list-inside space-y-1 text-xs text-gray-700 font-sans">
                  {exp.highlights.map((h, hIdx) => (
                    <li key={hIdx}>{h}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Selected Projects */}
          <div className="space-y-3">
            <h2 className="font-mono text-xs font-bold text-gray-500 uppercase tracking-wider">
              Machine Learning Projects
            </h2>
            {projects.map((proj) => (
              <div key={proj.id} className="space-y-1">
                <div className="flex justify-between font-mono text-xs">
                  <strong className="text-gray-900">{proj.title}</strong>
                  <span className="text-cyan-700 font-semibold">{proj.results[0]?.label}: {proj.results[0]?.value}</span>
                </div>
                <p className="text-xs text-gray-600 font-sans">{proj.shortDescription}</p>
              </div>
            ))}
          </div>

          {/* Education */}
          <div className="space-y-2 border-t border-gray-200 pt-4">
            <h2 className="font-mono text-xs font-bold text-gray-500 uppercase tracking-wider">
              Education
            </h2>
            {education.map((edu, i) => (
              <div key={i} className="flex justify-between font-mono text-xs">
                <div>
                  <strong className="text-gray-900">{edu.degree}</strong>
                  <p className="text-gray-600 font-sans">{edu.institution}</p>
                </div>
                <span className="text-gray-500">{edu.period}</span>
              </div>
            ))}
          </div>

        </div>

      </div>
    </div>
  );
};

export default ResumeModal;
