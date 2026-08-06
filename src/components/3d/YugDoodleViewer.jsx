import React, { useState } from 'react';
import { Sparkles, Cpu, Activity, User, ShieldCheck, Zap } from 'lucide-react';
import Card3D from './Card3D';

export const YugDoodleViewer = () => {
  const [activeTab, setActiveTab] = useState('doodle');

  return (
    <Card3D maxTilt={8} className="w-full">
      <div className="rounded-2xl p-6 bg-slate-900/90 border border-cyan-500/30 backdrop-blur-xl shadow-2xl shadow-cyan-950/40 relative overflow-hidden text-white space-y-5">
        
        {/* Glow ambient background element */}
        <div className="absolute -top-24 -right-24 w-60 h-60 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute -bottom-24 -left-24 w-60 h-60 bg-purple-500/10 rounded-full blur-3xl pointer-events-none"></div>

        {/* Header HUD */}
        <div className="flex items-center justify-between border-b border-slate-800 pb-4">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-500 to-purple-600 flex items-center justify-center text-slate-950 font-bold shadow-md shadow-cyan-500/20">
              <User className="w-4 h-4 text-slate-950" />
            </div>
            <div>
              <span className="font-mono text-xs font-bold text-cyan-400 uppercase tracking-widest block">
                Official ML Avatar
              </span>
              <h3 className="text-base font-heading font-extrabold text-white">
                Yug Sayja — Cybernetic Doodle
              </h3>
            </div>
          </div>

          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-cyan-500/20 border border-cyan-400/40 text-cyan-300 font-mono text-[11px] font-bold">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping"></span>
            MLE Active
          </span>
        </div>

        {/* Interactive Image Frame */}
        <div className="relative rounded-xl overflow-hidden border border-cyan-500/30 bg-slate-950/80 group">
          
          {/* Cyber Overlay HUD corner elements */}
          <div className="absolute top-3 left-3 z-10 flex items-center gap-2 px-2.5 py-1 rounded bg-slate-950/80 border border-cyan-500/40 text-cyan-300 font-mono text-[10px] font-bold backdrop-blur-md">
            <Activity className="w-3 h-3 text-cyan-400" />
            <span>Neural Identity: Yug Sayja</span>
          </div>

          <div className="absolute bottom-3 right-3 z-10 flex items-center gap-1.5 px-2.5 py-1 rounded bg-purple-950/80 border border-purple-500/40 text-purple-300 font-mono text-[10px] font-bold backdrop-blur-md">
            <Zap className="w-3 h-3 text-purple-400" />
            <span>3D Vector Doodle Art</span>
          </div>

          {/* Generated Doodle Avatar */}
          <img
            src="/yug_doodle.png"
            alt="Yug Sayja 3D Cybernetic Machine Learning Engineer Doodle Avatar"
            className="w-full h-80 sm:h-96 object-cover object-center group-hover:scale-105 transition-transform duration-500"
          />

          {/* Subtle Cyber Grid scanline overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80 pointer-events-none"></div>
        </div>

        {/* Footer HUD Stats */}
        <div className="grid grid-cols-3 gap-2 pt-1 font-mono text-xs">
          <div className="p-2.5 rounded-lg bg-slate-950/80 border border-slate-800 text-center">
            <span className="text-[10px] text-slate-400 block uppercase font-semibold">Specialization</span>
            <span className="text-cyan-300 font-bold text-xs mt-0.5 block">ML Engineer</span>
          </div>
          <div className="p-2.5 rounded-lg bg-slate-950/80 border border-slate-800 text-center">
            <span className="text-[10px] text-slate-400 block uppercase font-semibold">Tech Stack</span>
            <span className="text-purple-300 font-bold text-xs mt-0.5 block">PyTorch & ONNX</span>
          </div>
          <div className="p-2.5 rounded-lg bg-slate-950/80 border border-slate-800 text-center">
            <span className="text-[10px] text-slate-400 block uppercase font-semibold">Status</span>
            <span className="text-emerald-400 font-bold text-xs mt-0.5 block">Available</span>
          </div>
        </div>

      </div>
    </Card3D>
  );
};

export default YugDoodleViewer;
