import React, { useState, useEffect } from 'react';
import { Cpu, RotateCw, Layers, Zap, Activity, Eye, ShieldCheck } from 'lucide-react';

export const Model3DViewer = () => {
  const [rotationX, setRotationX] = useState(15);
  const [rotationY, setRotationY] = useState(45);
  const [autoRotate, setAutoRotate] = useState(true);
  const [activeLayer, setActiveLayer] = useState('all'); // all, conv1, dense121, head
  const [wireframe, setWireframe] = useState(false);

  useEffect(() => {
    if (!autoRotate) return;
    const interval = setInterval(() => {
      setRotationY((prev) => (prev + 1) % 360);
    }, 40);
    return () => clearInterval(interval);
  }, [autoRotate]);

  return (
    <div className="bg-slate-900/90 border border-cyan-500/30 rounded-xl p-6 space-y-6 shadow-2xl backdrop-blur-xl font-sans text-white relative overflow-hidden">
      
      {/* Ambient Cyber Light Glow */}
      <div className="absolute -top-20 -left-20 w-48 h-48 bg-cyan-500/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 -right-20 w-48 h-48 bg-purple-500/20 rounded-full blur-3xl pointer-events-none" />

      {/* Top Holographic Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-cyan-500/20 pb-4 relative z-10">
        <div>
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 font-mono text-xs font-semibold mb-1">
            <Cpu className="w-3.5 h-3.5 text-cyan-400" />
            <span>Interactive 3D Holographic Neural Projection</span>
          </div>
          <h3 className="text-xl font-heading font-bold text-white tracking-wide">
            DenseNet-121 Architecture Wireframe
          </h3>
        </div>

        <div className="flex items-center gap-2 font-mono text-xs">
          <button
            onClick={() => setAutoRotate(!autoRotate)}
            className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded border transition-colors ${
              autoRotate
                ? 'bg-cyan-500/20 border-cyan-500/40 text-cyan-400 font-bold'
                : 'bg-white/5 border-white/10 text-white/60 hover:text-white'
            }`}
          >
            <RotateCw className={`w-3.5 h-3.5 ${autoRotate ? 'animate-spin' : ''}`} />
            <span>{autoRotate ? 'Auto Orbiting' : 'Paused'}</span>
          </button>

          <button
            onClick={() => setWireframe(!wireframe)}
            className={`px-3 py-1.5 rounded border transition-colors ${
              wireframe
                ? 'bg-purple-500/20 border-purple-500/40 text-purple-400 font-bold'
                : 'bg-white/5 border-white/10 text-white/60 hover:text-white'
            }`}
          >
            <span>{wireframe ? 'Mesh Skeleton' : 'Solid Shader'}</span>
          </button>
        </div>
      </div>

      {/* 3D Viewport Box */}
      <div className="relative aspect-[16/9] sm:aspect-[21/9] bg-slate-950/90 rounded-lg border border-cyan-500/30 overflow-hidden flex items-center justify-center select-none shadow-inner group">
        
        {/* Ambient Grid Lines Background */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,242,254,0.1)_0,transparent_70%)] pointer-events-none" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,242,254,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,242,254,0.05)_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />

        {/* 3D Model Scene CSS Perspective Container */}
        <div
          className="w-64 h-48 relative transition-transform duration-75"
          style={{
            transform: `perspective(800px) rotateX(${rotationX}deg) rotateY(${rotationY}deg)`,
            transformStyle: 'preserve-3d',
          }}
        >
          {/* Layer 1: Input Tensor Frame */}
          <div
            className={`absolute inset-0 rounded border-2 transition-all duration-500 flex items-center justify-center font-mono text-xs font-bold ${
              wireframe ? 'border-dashed border-cyan-400 bg-transparent' : 'border-cyan-400/80 bg-cyan-500/10'
            }`}
            style={{ transform: 'translateZ(-80px)' }}
          >
            <span className="text-cyan-300 drop-shadow-[0_0_8px_rgba(0,242,254,0.8)]">
              Input Radiograph Scan [3x224x224]
            </span>
          </div>

          {/* Layer 2: Dense Block Feature Extractor */}
          <div
            className={`absolute inset-4 rounded border-2 transition-all duration-500 flex items-center justify-center font-mono text-xs font-bold ${
              wireframe ? 'border-dashed border-purple-400 bg-transparent' : 'border-purple-400/80 bg-purple-500/15'
            }`}
            style={{ transform: 'translateZ(0px)' }}
          >
            <span className="text-purple-300 drop-shadow-[0_0_8px_rgba(127,0,255,0.8)]">
              Dense Blocks (1024-D Feature Map)
            </span>
          </div>

          {/* Layer 3: Grad-CAM Explainable Head */}
          <div
            className={`absolute inset-8 rounded border-2 transition-all duration-500 flex items-center justify-center font-mono text-xs font-bold ${
              wireframe ? 'border-dashed border-emerald-400 bg-transparent' : 'border-emerald-400/80 bg-emerald-500/20'
            }`}
            style={{ transform: 'translateZ(80px)' }}
          >
            <span className="text-emerald-300 drop-shadow-[0_0_8px_rgba(16,185,129,0.8)]">
              14-Pathology Multi-Label Head (0.892 AUC)
            </span>
          </div>

          {/* Connecting 3D Corner Strands */}
          <div className="absolute top-0 left-0 w-full h-full border border-cyan-500/30 opacity-40 pointer-events-none" style={{ transform: 'translateZ(-40px)' }} />
        </div>

        {/* Floating Telemetry HUD Badges */}
        <div className="absolute top-3 left-3 bg-black/70 backdrop-blur border border-cyan-500/30 px-3 py-1.5 rounded font-mono text-[11px] text-cyan-400 font-bold space-y-0.5">
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping"></span>
            <span>3D Telemetry: Live</span>
          </div>
          <span className="text-white/60 block text-[10px]">RotX: {rotationX}° | RotY: {rotationY}°</span>
        </div>

        <div className="absolute bottom-3 right-3 bg-black/70 backdrop-blur border border-purple-500/30 px-3 py-1.5 rounded font-mono text-[11px] text-purple-300 font-bold flex items-center gap-2">
          <Zap className="w-3.5 h-3.5 text-amber-400" />
          <span>FP16 Latency: 38ms</span>
        </div>
      </div>

      {/* Manual 3D Sliders */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 font-mono text-xs">
        <div className="space-y-1">
          <label className="text-cyan-400 font-semibold block">Orbit Pitch (X-Axis): {rotationX}°</label>
          <input
            type="range"
            min="-60"
            max="60"
            value={rotationX}
            onChange={(e) => {
              setAutoRotate(false);
              setRotationX(Number(e.target.value));
            }}
            className="w-full accent-cyan-400 bg-white/10 h-1.5 rounded"
          />
        </div>

        <div className="space-y-1">
          <label className="text-purple-400 font-semibold block">Orbit Yaw (Y-Axis): {rotationY}°</label>
          <input
            type="range"
            min="0"
            max="360"
            value={rotationY}
            onChange={(e) => {
              setAutoRotate(false);
              setRotationY(Number(e.target.value));
            }}
            className="w-full accent-purple-400 bg-white/10 h-1.5 rounded"
          />
        </div>
      </div>

    </div>
  );
};

export default Model3DViewer;
