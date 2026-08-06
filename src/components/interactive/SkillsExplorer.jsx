import React, { useState } from 'react';
import { Search, Terminal, Cpu, Layers, CheckCircle2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const SKILL_ITEMS = [
  {
    category: 'Computer Vision & Deep Learning',
    name: 'Object Detection & Segmentation',
    tools: 'YOLOv8, Faster R-CNN, U-Net',
    projects: ['smart-shiksha'],
    level: 'Advanced',
  },
  {
    category: 'Computer Vision & Deep Learning',
    name: 'Classification Architectures',
    tools: 'ResNet, DenseNet-121, EfficientNet, MobileNetV3',
    projects: ['chest-xray-disease-detection', 'swasthya-care'],
    level: 'Expert',
  },
  {
    category: 'Computer Vision & Deep Learning',
    name: 'Explainable AI (XAI)',
    tools: 'Grad-CAM, Layer-CAM, Captum',
    projects: ['chest-xray-disease-detection'],
    level: 'Advanced',
  },
  {
    category: 'Computer Vision & Deep Learning',
    name: 'Medical Image Processing',
    tools: 'CLAHE, Albumentations, OpenCV, PIL',
    projects: ['chest-xray-disease-detection'],
    level: 'Advanced',
  },
  {
    category: 'ML Frameworks & Optimization',
    name: 'Core Neural Frameworks',
    tools: 'PyTorch 2.x, torchvision, Scikit-Learn',
    projects: ['chest-xray-disease-detection', 'swasthya-care', 'smart-shiksha'],
    level: 'Expert',
  },
  {
    category: 'ML Frameworks & Optimization',
    name: 'Quantization & Acceleration',
    tools: 'ONNX Runtime, PyTorch PTQ/QAT, TensorRT',
    projects: ['chest-xray-disease-detection', 'swasthya-care'],
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

  const categories = ['All', 'Computer Vision & Deep Learning', 'ML Frameworks & Optimization', 'MLOps & Systems'];

  const filteredSkills = SKILL_ITEMS.filter((skill) => {
    const matchesCategory = selectedCategory === 'All' || skill.category === selectedCategory;
    const matchesSearch =
      skill.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      skill.tools.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="bg-bg-card border border-border rounded-xl p-6 sm:p-8 space-y-6 shadow-sm font-sans">
      
      {/* Header & Controls */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-border pb-4">
        <div>
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-primary/10 text-primary font-mono text-xs font-semibold mb-1">
            <Terminal className="w-3.5 h-3.5 text-accent" />
            <span>Filterable Machine Learning Engineering Skill Matrix</span>
          </div>
          <h3 className="text-xl font-heading font-bold text-dark">
            Technical Stack & Verified Capabilities
          </h3>
        </div>

        {/* Search Bar */}
        <div className="relative w-full sm:w-64">
          <Search className="w-4 h-4 text-dark-subtle absolute left-3 top-3" />
          <input
            type="text"
            placeholder="Search PyTorch, ONNX, Grad-CAM..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-3 py-2 rounded bg-bg-subtle border border-border text-xs font-mono text-dark focus:outline-none focus:border-accent"
          />
        </div>
      </div>

      {/* Category Pills */}
      <div className="flex flex-wrap gap-2">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-3 py-1.5 rounded font-mono text-xs font-semibold transition-colors ${
              selectedCategory === cat
                ? 'bg-primary text-white shadow-sm'
                : 'bg-bg-subtle border border-border text-dark-muted hover:text-dark'
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
            className="p-4 rounded-lg bg-bg-subtle border border-border space-y-3 flex flex-col justify-between hover:border-dark-subtle transition-all"
          >
            <div className="space-y-1">
              <div className="flex items-center justify-between gap-2">
                <span className="font-heading font-bold text-sm text-dark">{skill.name}</span>
                <span className="px-2 py-0.5 rounded bg-accent/10 border border-accent/20 text-accent font-mono text-[10px] font-semibold">
                  {skill.level}
                </span>
              </div>
              <p className="font-mono text-xs text-dark-muted">{skill.tools}</p>
            </div>

            <div className="pt-2 border-t border-border/80 flex items-center justify-between text-[11px] font-mono">
              <span className="text-dark-subtle">Applied In:</span>
              <div className="flex items-center gap-1.5">
                {skill.projects.map((pId) => (
                  <Link
                    key={pId}
                    to={`/projects/${pId}`}
                    className="px-2 py-0.5 rounded bg-bg-card border border-border text-primary hover:text-accent font-bold transition-colors"
                  >
                    {pId === 'chest-xray-disease-detection' ? 'ChestX-Ray' : pId === 'swasthya-care' ? 'Swasthya' : 'Shiksha'}
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
