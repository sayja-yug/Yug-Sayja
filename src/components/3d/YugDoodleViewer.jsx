import React from 'react';
import { User, Cpu, Sparkles, CheckCircle2, ShieldCheck, Code2, Bot } from 'lucide-react';
import Card3D from './Card3D';

export const YugDoodleViewer = () => {
  return (
    <Card3D maxTilt={6} className="w-full">
      <div className="rounded-2xl p-6 bg-slate-900/90 border border-cyan-500/30 backdrop-blur-xl shadow-2xl shadow-cyan-950/40 relative overflow-hidden text-white space-y-5">
        
        {/* Glow ambient background elements */}
        <div className="absolute -top-24 -right-24 w-60 h-60 bg-cyan-500/15 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute -bottom-24 -left-24 w-60 h-60 bg-purple-500/15 rounded-full blur-3xl pointer-events-none"></div>

        {/* Clean Header */}
        <div className="flex items-center justify-between border-b border-slate-800 pb-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 to-purple-600 flex items-center justify-center text-slate-950 font-bold shadow-md shadow-cyan-500/25">
              <Cpu className="w-5 h-5 text-slate-950" />
            </div>
            <div>
              <h3 className="text-lg font-heading font-extrabold text-white tracking-wide flex items-center gap-1.5">
                <span>Yug Sayja</span>
                <ShieldCheck className="w-4 h-4 text-cyan-400" />
              </h3>
              <span className="font-mono text-xs font-bold text-cyan-400 uppercase tracking-wider block">
                Machine Learning & AI Engineer
              </span>
            </div>
          </div>

          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/20 border border-cyan-400/40 text-cyan-300 font-mono text-xs font-bold">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping"></span>
            Open to Roles
          </span>
        </div>

        {/* Custom Avatar Image Frame */}
        <div className="relative rounded-xl overflow-hidden border border-cyan-500/30 bg-slate-950 group shadow-2xl">
          <img
            src="/yug_avatar.png"
            alt="Yug Sayja Machine Learning Engineer Custom Digital Avatar"
            className="w-full h-80 sm:h-96 object-cover object-top group-hover:scale-105 transition-transform duration-500"
          />

          {/* Holographic Glowing Overlay Accents */}
          <div className="absolute top-3 right-3 px-3 py-1 rounded-lg bg-slate-950/80 border border-cyan-400/40 backdrop-blur-md font-mono text-[11px] text-cyan-300 font-bold flex items-center gap-1 shadow-lg">
            <Bot className="w-3.5 h-3.5 text-cyan-400" />
            <span>AI Engineer Avatar</span>
          </div>

          <div className="absolute bottom-3 left-3 px-3 py-1 rounded-lg bg-slate-950/80 border border-purple-400/40 backdrop-blur-md font-mono text-[11px] text-purple-300 font-bold flex items-center gap-1 shadow-lg">
            <Sparkles className="w-3.5 h-3.5 text-purple-400" />
            <span>Python & PyTorch Specialist</span>
          </div>

          {/* Bottom Gradient Fade */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60 pointer-events-none"></div>
        </div>

        {/* Executive Stats Bar */}
        <div className="grid grid-cols-3 gap-2 pt-1 font-mono text-xs">
          <div className="p-2.5 rounded-lg bg-slate-950/80 border border-slate-800 text-center">
            <span className="text-[10px] text-slate-400 block uppercase font-semibold">Specialization</span>
            <span className="text-cyan-300 font-bold text-xs mt-0.5 block">ML & Deep Learning</span>
          </div>
          <div className="p-2.5 rounded-lg bg-slate-950/80 border border-slate-800 text-center">
            <span className="text-[10px] text-slate-400 block uppercase font-semibold">Core Stack</span>
            <span className="text-purple-300 font-bold text-xs mt-0.5 block">PyTorch & Django</span>
          </div>
          <div className="p-2.5 rounded-lg bg-slate-950/80 border border-slate-800 text-center">
            <span className="text-[10px] text-slate-400 block uppercase font-semibold">Experience</span>
            <span className="text-emerald-400 font-bold text-xs mt-0.5 block">FlyRank AI Intern</span>
          </div>
        </div>

      </div>
    </Card3D>
  );
};

export default YugDoodleViewer;
