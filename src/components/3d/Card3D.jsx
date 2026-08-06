import React, { useState, useRef } from 'react';

export const Card3D = ({ children, className = '', maxTilt = 12, glowColor = 'rgba(0, 242, 254, 0.15)' }) => {
  const cardRef = useRef(null);
  const [transform, setTransform] = useState('perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)');
  const [glarePosition, setGlarePosition] = useState({ x: 50, y: 50, opacity: 0 });

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left; // Mouse position within card
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -maxTilt; // Rotate inversely on X
    const rotateY = ((x - centerX) / centerX) * maxTilt;

    setTransform(`perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) scale3d(1.02, 1.02, 1.02)`);
    setGlarePosition({
      x: (x / rect.width) * 100,
      y: (y / rect.height) * 100,
      opacity: 0.35,
    });
  };

  const handleMouseLeave = () => {
    setTransform('perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)');
    setGlarePosition((prev) => ({ ...prev, opacity: 0 }));
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform,
        transition: 'transform 0.15s cubic-bezier(0.03, 0.98, 0.52, 0.99)',
        transformStyle: 'preserve-3d',
      }}
      className={`relative overflow-hidden rounded-xl border border-cyan-500/20 bg-slate-900/80 backdrop-blur-md shadow-xl transition-all duration-300 group hover:border-cyan-400/50 hover:shadow-cyan-500/10 ${className}`}
    >
      {/* Dynamic 3D Specular Glare Overlay */}
      <div
        className="pointer-events-none absolute inset-0 z-20 transition-opacity duration-300 rounded-xl"
        style={{
          background: `radial-gradient(circle at ${glarePosition.x}% ${glarePosition.y}%, ${glowColor} 0%, transparent 70%)`,
          opacity: glarePosition.opacity,
        }}
      />

      {/* Cyber Grid Border Highlight */}
      <div className="pointer-events-none absolute -inset-[1px] rounded-xl bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-emerald-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />

      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default Card3D;
