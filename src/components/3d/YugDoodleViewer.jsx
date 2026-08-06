import React from 'react';
import { Cpu, Activity, CheckCircle2, ShieldCheck, Terminal, Layers, Database, Sparkles, Server } from 'lucide-react';
import Card3D from './Card3D';

export const YugDoodleViewer = () => {
  return (
    <Card3D maxTilt={4} className="w-full">
      <div className="rounded-2xl p-6 sm:p-8 bg-slate-900/90 border border-cyan-500/30 backdrop-blur-xl shadow-2xl shadow-cyan-950/40 relative overflow-hidden text-white space-y-6">
        
        {/* Glow ambient background elements */}
        <div className="absolute -top-24 -right-24 w-60 h-60 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute -bottom-24 -left-24 w-60 h-60 bg-purple-500/10 rounded-full blur-3xl pointer-events-none"></div>

        {/* Dashboard Title Header */}
        <div className="flex items-center justify-between border-b border-slate-800 pb-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-400/30 flex items-center justify-center text-cyan-400 font-bold shadow-md">
              <Terminal className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-heading font-extrabold text-white flex items-center gap-1.5">
                <span>ML Pipeline & Stack</span>
                <ShieldCheck className="w-4 h-4 text-cyan-400" />
              </h3>
              <span className="font-mono text-xs text-slate-400">
                End-to-End System Engineering
              </span>
            </div>
          </div>

          <span className="px-2.5 py-1 rounded bg-cyan-500/20 text-cyan-300 font-mono text-[11px] font-bold border border-cyan-400/30 flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping"></span>
            Production Ready
          </span>
        </div>

        {/* Core ML Architecture Workflow Cards */}
        <div className="space-y-3 font-mono text-xs">
          
          <div className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800 flex items-center justify-between hover:border-cyan-400/40 transition-colors">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded bg-cyan-500/10 text-cyan-400">
                <Cpu className="w-4 h-4" />
              </div>
              <div>
                <span className="text-white font-bold block">Machine Learning & Deep Learning</span>
                <span className="text-slate-400 text-[11px]">Scikit-learn, PyTorch, Pandas, NumPy</span>
              </div>
            </div>
            <span className="text-cyan-400 font-bold text-[10px] uppercase">Active</span>
          </div>

          <div className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800 flex items-center justify-between hover:border-purple-400/40 transition-colors">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded bg-purple-500/10 text-purple-400">
                <Server className="w-4 h-4" />
              </div>
              <div>
                <span className="text-white font-bold block">Backend & Full-Stack Systems</span>
                <span className="text-slate-400 text-[11px]">Python, Django, PostgreSQL, Auth0</span>
              </div>
            </div>
            <span className="text-purple-400 font-bold text-[10px] uppercase">Deployed</span>
          </div>

          <div className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800 flex items-center justify-between hover:border-amber-400/40 transition-colors">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded bg-amber-500/10 text-amber-400">
                <Layers className="w-4 h-4" />
              </div>
              <div>
                <span className="text-white font-bold block">Agentic AI & Workflow Automation</span>
                <span className="text-slate-400 text-[11px]">n8n, No-Code Pipelines, WhatsApp API</span>
              </div>
            </div>
            <span className="text-amber-400 font-bold text-[10px] uppercase">Automated</span>
          </div>

        </div>

        {/* Key Engineering Badges */}
        <div className="pt-2 grid grid-cols-2 gap-2 font-mono text-[11px]">
          <div className="p-2.5 rounded-lg bg-slate-950 border border-slate-800 text-center">
            <span className="text-slate-400 block text-[10px] uppercase">Academic Baseline</span>
            <span className="text-cyan-300 font-bold block mt-0.5">IITRAM B.Tech CSE</span>
          </div>
          <div className="p-2.5 rounded-lg bg-slate-950 border border-slate-800 text-center">
            <span className="text-slate-400 block text-[10px] uppercase">Industry Role</span>
            <span className="text-purple-300 font-bold block mt-0.5">FlyRank AI Intern</span>
          </div>
        </div>

      </div>
    </Card3D>
  );
};

export default YugDoodleViewer;
