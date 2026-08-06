import React from 'react';
import { Cpu, ShieldCheck, Sparkles, Code2, Bot, Award } from 'lucide-react';
import { motion } from 'framer-motion';

export const YugDoodleViewer = () => {
  return (
    <div className="relative w-full flex items-center justify-center py-4">
      
      {/* Background Neon Glowing Aura Rings (No Box Card) */}
      <div className="absolute w-72 h-72 sm:w-96 sm:h-96 rounded-full bg-gradient-to-tr from-cyan-500/20 via-purple-500/20 to-blue-500/20 blur-3xl -z-10 animate-pulse"></div>
      <div className="absolute w-64 h-64 sm:w-80 sm:h-80 rounded-full border border-cyan-500/30 -z-10 animate-[spin_20s_linear_infinite] opacity-60"></div>
      <div className="absolute w-80 h-80 sm:w-[26rem] sm:h-[26rem] rounded-full border border-dashed border-purple-500/30 -z-10 animate-[spin_35s_linear_infinite_reverse] opacity-40"></div>

      {/* Floating Interactive Skill Pills around the Portrait */}
      <motion.div 
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-2 left-0 sm:left-4 z-20 px-3 py-1.5 rounded-xl bg-slate-950/80 border border-cyan-400/50 backdrop-blur-md font-mono text-xs text-cyan-300 font-bold flex items-center gap-2 shadow-lg shadow-cyan-500/20"
      >
        <Bot className="w-4 h-4 text-cyan-400" />
        <span>Machine Learning Engineer</span>
      </motion.div>

      <motion.div 
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        className="absolute top-12 -right-2 sm:-right-4 z-20 px-3 py-1.5 rounded-xl bg-slate-950/80 border border-purple-400/50 backdrop-blur-md font-mono text-xs text-purple-300 font-bold flex items-center gap-2 shadow-lg shadow-purple-500/20"
      >
        <Sparkles className="w-4 h-4 text-purple-400" />
        <span>PyTorch & Django Specialist</span>
      </motion.div>

      <motion.div 
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-6 left-0 sm:-left-2 z-20 px-3 py-1.5 rounded-xl bg-slate-950/80 border border-amber-400/50 backdrop-blur-md font-mono text-xs text-amber-300 font-bold flex items-center gap-2 shadow-lg shadow-amber-500/20"
      >
        <Award className="w-4 h-4 text-amber-400" />
        <span>IITRAM CSE • Hackathon Runner-Up</span>
      </motion.div>

      {/* Main Hero Portrait Cutout (Clean & Card-Free) */}
      <div className="relative z-10 w-full max-w-sm sm:max-w-md aspect-[4/5] flex items-center justify-center">
        <img
          src="/yug_hero_portrait.png"
          alt="Yug Sayja Machine Learning Engineer Hero Digital Portrait"
          className="w-full h-full object-contain filter drop-shadow-[0_10px_25px_rgba(0,242,254,0.3)] transition-transform duration-500 hover:scale-105"
        />

        {/* Bottom Smooth Blend Gradient */}
        <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-slate-950 to-transparent pointer-events-none"></div>
      </div>

    </div>
  );
};

export default YugDoodleViewer;
