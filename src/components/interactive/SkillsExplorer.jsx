import React, { useState } from 'react';
import { Search, Terminal, Code2, Database, Cpu, Sparkles, Wrench } from 'lucide-react';
import { portfolioData } from '../../data/portfolioData';

export const SkillsExplorer = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const { skills } = portfolioData;

  const categories = ['All', ...skills.categories.map((c) => c.name)];

  const filteredCategories = skills.categories
    .map((cat) => {
      const filteredSkillsList = cat.skills.filter((skill) =>
        skill.toLowerCase().includes(searchQuery.toLowerCase())
      );
      return {
        ...cat,
        skills: filteredSkillsList,
      };
    })
    .filter((cat) => {
      const matchesCategory = selectedCategory === 'All' || cat.name === selectedCategory;
      const hasSkills = cat.skills.length > 0;
      return matchesCategory && hasSkills;
    });

  return (
    <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-6 shadow-xl font-sans text-white relative z-10">
      
      {/* Header & Controls */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-800 pb-4">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-400/30 text-cyan-300 font-mono text-xs font-bold mb-1">
            <Terminal className="w-3.5 h-3.5 text-cyan-400" />
            <span>Technical Skills & Core Stack</span>
          </div>
          <h3 className="text-xl font-heading font-extrabold text-white">
            Yug Sayja's Verified Technical Skill Matrix
          </h3>
        </div>

        {/* Search Bar */}
        <div className="relative w-full sm:w-64">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
          <input
            type="text"
            placeholder="Search Python, PyTorch, Django..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-3 py-2 rounded-lg bg-slate-950 border border-slate-800 text-xs font-mono text-white focus:outline-none focus:border-cyan-400"
          />
        </div>
      </div>

      {/* Category Pills */}
      <div className="flex flex-wrap gap-2 font-mono text-xs">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-3.5 py-1.5 rounded-lg font-bold transition-all ${
              selectedCategory === cat
                ? 'bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/20'
                : 'bg-slate-950 border border-slate-800 text-slate-300 hover:text-white hover:border-slate-700'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Skills Grid by Category */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCategories.map((cat, idx) => (
          <div
            key={idx}
            className="p-5 rounded-xl bg-slate-950/80 border border-slate-800 space-y-3 flex flex-col justify-between hover:border-cyan-500/40 transition-all"
          >
            <div className="space-y-3">
              <span className="font-heading font-bold text-sm text-cyan-400 uppercase tracking-wider block border-b border-slate-800 pb-2">
                {cat.name}
              </span>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skillItem, sIdx) => (
                  <span
                    key={sIdx}
                    className="px-3 py-1 rounded-md bg-slate-900 border border-slate-800 font-mono text-xs text-slate-200 font-semibold hover:border-cyan-400/50 hover:text-cyan-300 transition-colors"
                  >
                    {skillItem}
                  </span>
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
