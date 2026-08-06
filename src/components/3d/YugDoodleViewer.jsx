import React from 'react';

export const YugDoodleViewer = () => {
  return (
    <div className="relative w-full flex items-center justify-center py-4">
      
      {/* Background Neon Glowing Aura Rings */}
      <div className="absolute w-72 h-72 sm:w-96 sm:h-96 rounded-full bg-gradient-to-tr from-cyan-500/20 via-purple-500/20 to-blue-500/20 blur-3xl -z-10 animate-pulse"></div>
      <div className="absolute w-64 h-64 sm:w-80 sm:h-80 rounded-full border border-cyan-500/30 -z-10 animate-[spin_20s_linear_infinite] opacity-60"></div>
      <div className="absolute w-80 h-80 sm:w-[26rem] sm:h-[26rem] rounded-full border border-dashed border-purple-500/30 -z-10 animate-[spin_35s_linear_infinite_reverse] opacity-40"></div>

      {/* Main Hero Portrait Cutout (Clean, Card-Free & Tag-Free) */}
      <div className="relative z-10 w-full max-w-sm sm:max-w-md aspect-[4/5] flex items-center justify-center">
        <img
          src="/yug_hero_portrait.png"
          alt="Yug Sayja Machine Learning Engineer Hero Digital Portrait"
          className="w-full h-full object-contain filter drop-shadow-[0_10px_25px_rgba(0,242,254,0.35)] transition-transform duration-500 hover:scale-105"
        />

        {/* Bottom Smooth Blend Gradient */}
        <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-slate-950 to-transparent pointer-events-none"></div>
      </div>

    </div>
  );
};

export default YugDoodleViewer;
