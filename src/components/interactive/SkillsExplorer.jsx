import React, { useState } from 'react';
import { Search, Terminal, Cpu, Layers, CheckCircle2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const SKILL_ITEMS = [
  {
    category: 'Deep Learning & Neural Architectures',
    name: 'Object Detection & Segmentation',
    tools: 'YOLOv8, Lightweight CNNs, Region Detection',
    projects: ['smart-shiksha'],
    level: 'Advanced',
  },
  {
    category: 'Deep Learning & Neural Architectures',
    name: 'Classification & Feature Extractors',
    tools: 'ResNet, MobileNetV3, DistilBERT, Transformers',
    projects: ['swasthya-care'],
    level: 'Expert',
  },
  {
    category: 'Deep Learning & Neural Architectures',
    name: 'Explainable AI (XAI)',
    tools: 'Grad-CAM, Layer-CAM, Feature Mapping',
    projects: ['swasthya-care'],
    level: 'Advanced',
  },
  {
    category: 'ML Frameworks & Optimization',
    name: 'Core Neural Frameworks',
    tools: 'PyTorch 2.x, torchvision, Scikit-Learn',
    projects: ['swasthya-care', 'smart-shiksha'],
    level: 'Expert',
  },
  {
    category: 'ML Frameworks & Optimization',
    name: 'Quantization & Acceleration',
    tools: 'ONNX Runtime, PyTorch PTQ/QAT, TensorRT',
    projects: ['swasthya-care', 'smart-shiksha'],
    level: 'Advanced',
  },
  {
    category: 'ML Frameworks & Optimization',
    name: 'Multimodal NLP Fusion',
    tools: 'DistilBERT, HuggingFace Transformers, PyTorch Fusion',
    projects: ['swasthya-care'],
    level: 'Intermediate',
  },
  {
    category: 'MLOps & Systems',
    name: 'Containerization & REST APIs',
    tools: 'Docker, FastAPI, Git, GitHub Actions',
    projects: ['swasthya-care'],
    level: 'Advanced',
  },
  {
    category: 'MLOps & Systems',
    name: 'Web & Client Integration',
    tools: 'WebAssembly, ONNX Web, React, Vite',
    projects: ['smart-shiksha'],
    level: 'Advanced',
  },
];

export const SkillsExplorer = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = ['All', 'Deep Learning & Neural Architectures', 'ML Frameworks & Optimization', 'MLOps & Systems'];

  const filteredSkills = SKILL_ITEMS.filter((skill) => {
    const matchesCategory = selectedCategory === 'All' || skill.category === selectedCategory;
    const matchesSearch =
      skill.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      skill.tools.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-6 sm:p-8 space-y-6 shadow-sm font-sans text-white">
      
      {/* Header & Controls */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-800 pb-4">
        <div>
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-cyan-500/10 border border-cyan-400/30 text-cyan-300 font-mono text-xs font-semibold mb-1">
            <Terminal className="w-3.5 h-3.5 text-cyan-400" />
            <span>Filterable Machine Learning Engineering Skill Matrix</span>
          </div>
          <h3 className="text-xl font-heading font-bold text-white">
            Technical Stack & Verified Capabilities
          </h3>
        </div>

        {/* Search Bar */}
        <div className="relative w-full sm:w-64">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
          <input
            type="text"
            placeholder="Search PyTorch, ONNX, Transformers..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-3 py-2 rounded bg-slate-950 border border-slate-800 text-xs font-mono text-white focus:outline-none focus:border-cyan-400"
          />
        </div>
      </div>

      {/* Category Pills */}
      <div className="flex flex-wrap gap-2 font-mono text-xs">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-3 py-1.5 rounded font-semibold transition-colors ${
              selectedCategory === cat
                ? 'bg-cyan-500 text-slate-950 font-bold shadow-md'
                : 'bg-slate-950 border border-slate-800 text-slate-300 hover:text-white'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {filteredSkills.map((skill, idx) => (
          <div
            key={idx}
            className="p-4 rounded-lg bg-slate-950/80 border border-slate-800 space-y-3 flex flex-col justify-between hover:border-cyan-500/40 transition-all"
          >
            <div className="space-y-1">
              <div className="flex items-center justify-between gap-2">
                <span className="font-heading font-bold text-sm text-white">{skill.name}</span>
                <span className="px-2 py-0.5 rounded bg-cyan-500/20 border border-cyan-400/30 text-cyan-300 font-mono text-[10px] font-bold">
                  {skill.level}
                </span>
              </div>
              <p className="font-mono text-xs text-slate-400">{skill.tools}</p>
            </div>

            <div className="pt-2 border-t border-slate-800 flex items-center justify-between text-[11px] font-mono">
              <span className="text-slate-400">Applied In:</span>
              <div className="flex items-center gap-1.5">
                {skill.projects.map((pId) => (
                  <Link
                    key={pId}
                    to={`/projects/${pId}`}
                    className="px-2 py-0.5 rounded bg-slate-900 border border-slate-700 text-cyan-400 hover:text-cyan-300 font-bold transition-colors"
                  >
                    {pId === 'swasthya-care' ? 'Swasthya' : 'Shiksha'}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};

export default SkillsExplorer;
