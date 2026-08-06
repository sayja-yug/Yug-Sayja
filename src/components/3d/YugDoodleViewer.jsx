import React from 'react';
import { User, Activity, CheckCircle2 } from 'lucide-react';
import Card3D from './Card3D';

export const YugDoodleViewer = () => {
  return (
    <Card3D maxTilt={6} className="w-full">
      <div className="rounded-2xl p-6 bg-slate-900/90 border border-cyan-500/30 backdrop-blur-xl shadow-2xl shadow-cyan-950/40 relative overflow-hidden text-white space-y-5">
        
        {/* Glow ambient background elements */}
        <div className="absolute -top-24 -right-24 w-60 h-60 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute -bottom-24 -left-24 w-60 h-60 bg-purple-500/10 rounded-full blur-3xl pointer-events-none"></div>

        {/* Clean Header */}
        <div className="flex items-center justify-between border-b border-slate-800 pb-4">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-cyan-500 to-purple-600 flex items-center justify-center text-slate-950 font-bold shadow-md shadow-cyan-500/20">
              <User className="w-5 h-5 text-slate-950" />
            </div>
            <div>
              <h3 className="text-lg font-heading font-extrabold text-white">
                Yug Sayja
              </h3>
              <span className="font-mono text-xs font-bold text-cyan-400 uppercase tracking-wider block">
                Machine Learning Engineer
              </span>
            </div>
          </div>

          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/20 border border-cyan-400/40 text-cyan-300 font-mono text-xs font-bold">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping"></span>
            Available for Roles
          </span>
        </div>

        {/* Image Frame */}
        <div className="relative rounded-xl overflow-hidden border border-cyan-500/30 bg-slate-950/80 group shadow-inner">
          <img
            src="/yug_doodle.png"
            alt="Yug Sayja Machine Learning Engineer Avatar"
            className="w-full h-80 sm:h-96 object-cover object-center group-hover:scale-105 transition-transform duration-500"
          />

          {/* Subtle bottom gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-70 pointer-events-none"></div>
        </div>

        {/* Executive Stats Bar */}
        <div className="grid grid-cols-3 gap-2 pt-1 font-mono text-xs">
          <div className="p-2.5 rounded-lg bg-slate-950/80 border border-slate-800 text-center">
            <span className="text-[10px] text-slate-400 block uppercase font-semibold">Specialization</span>
            <span className="text-cyan-300 font-bold text-xs mt-0.5 block">ML & Deep Learning</span>
          </div>
          <div className="p-2.5 rounded-lg bg-slate-950/80 border border-slate-800 text-center">
            <span className="text-[10px] text-slate-400 block uppercase font-semibold">Core Stack</span>
            <span className="text-purple-300 font-bold text-xs mt-0.5 block">PyTorch & ONNX</span>
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
