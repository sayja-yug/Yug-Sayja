import React, { useState } from 'react';
import { Eye, Zap, Layers, RefreshCw, CheckCircle2, FileText, Smartphone } from 'lucide-react';

const SAMPLES = [
  {
    id: 'math',
    title: 'Handwritten Equation & Physics Diagram',
    detectedRegions: [
      { text: 'E = m c^2', box: { x: '15%', y: '20%', w: '40%', h: '25%' }, label: 'Equation (98.4%)' },
      { text: 'Vector F_net = ma', box: { x: '60%', y: '25%', w: '32%', h: '30%' }, label: 'Text Line (94.1%)' },
    ],
    ocrText: 'E = mc²\nVector F_net = m·a\nAcceleration vector points in direction of net external force.',
    fps: '34 FPS',
  },
  {
    id: 'bilingual',
    title: 'Bilingual Gujarati & English Lecture Notes',
    detectedRegions: [
      { text: 'ગુરુત્વાકર્ષણ બળ (Gravitational Force)', box: { x: '10%', y: '15%', w: '75%', h: '28%' }, label: 'Header Text (96.2%)' },
      { text: 'F = G * (m1 * m2) / r^2', box: { x: '15%', y: '50%', w: '65%', h: '30%' }, label: 'Formula (92.8%)' },
    ],
    ocrText: 'ગુરુત્વાકર્ષણ બળ (Gravitational Force)\nF = G · (m₁ · m₂) / r²',
    fps: '36 FPS',
  },
];

export const SmartShikshaOCRDemo = () => {
  const [activeSample, setActiveSample] = useState(SAMPLES[0]);
  const [showBoundingBoxes, setShowBoundingBoxes] = useState(true);
  const [binarize, setBinarize] = useState(false);

  return (
    <div className="bg-bg-card border border-border rounded-xl p-6 sm:p-8 space-y-6 shadow-sm font-sans">
      
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-border pb-4">
        <div>
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-accent-light border border-accent/30 text-accent-hover font-mono text-xs font-semibold mb-1">
            <Zap className="w-3.5 h-3.5 text-accent" />
            <span>Smart Shiksha Real-time Vision & OCR WebAssembly Demo</span>
          </div>
          <h3 className="text-xl font-heading font-bold text-dark">
            YOLOv8-Nano + Lightweight CNN OCR Canvas Simulator
          </h3>
        </div>
        <div className="flex items-center gap-2 bg-bg-subtle border border-border px-3 py-1.5 rounded font-mono text-xs">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
          <span className="text-dark font-bold">ONNX WASM: {activeSample.fps}</span>
        </div>
      </div>

      {/* Control Switchers */}
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          {SAMPLES.map((s) => (
            <button
              key={s.id}
              onClick={() => setActiveSample(s)}
              className={`px-3 py-1.5 rounded font-mono text-xs font-semibold border transition-colors ${
                activeSample.id === s.id
                  ? 'bg-primary text-white border-primary'
                  : 'bg-bg-subtle border-border text-dark hover:border-dark-subtle'
              }`}
            >
              {s.title.split(' ')[0]} {s.title.split(' ')[1]}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-3 font-mono text-xs">
          <label className="flex items-center gap-1.5 cursor-pointer">
            <input
              type="checkbox"
              checked={showBoundingBoxes}
              onChange={(e) => setShowBoundingBoxes(e.target.checked)}
              className="accent-accent"
            />
            <span>Show YOLO Bounding Boxes</span>
          </label>

          <label className="flex items-center gap-1.5 cursor-pointer ml-3">
            <input
              type="checkbox"
              checked={binarize}
              onChange={(e) => setBinarize(e.target.checked)}
              className="accent-accent"
            />
            <span>Adaptive Binarization Filter</span>
          </label>
        </div>
      </div>

      {/* Main Viewport + Output Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
        
        {/* Left: Canvas Viewport */}
        <div className="md:col-span-7 space-y-2">
          <div
            className={`relative aspect-[16/9] rounded-lg border border-border overflow-hidden transition-all ${
              binarize ? 'bg-black text-white filter grayscale contrast-200' : 'bg-slate-900 text-amber-100'
            }`}
          >
            {/* Simulated Notebook Background Grid Lines */}
            <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:100%_24px] pointer-events-none" />

            {/* Handwritten Text Canvas Representation */}
            <div className="p-6 font-mono text-sm sm:text-base leading-relaxed tracking-wider space-y-4 font-semibold select-none">
              {activeSample.ocrText.split('\n').map((line, i) => (
                <p key={i} className="text-amber-200/90 font-serif italic drop-shadow-sm">
                  {line}
                </p>
              ))}
            </div>

            {/* Bounding Box Overlays */}
            {showBoundingBoxes &&
              activeSample.detectedRegions.map((region, idx) => (
                <div
                  key={idx}
                  className="absolute border-2 border-accent bg-accent/10 rounded transition-all duration-300 pointer-events-none"
                  style={{
                    left: region.box.x,
                    top: region.box.y,
                    width: region.box.w,
                    height: region.box.h,
                  }}
                >
                  <span className="absolute -top-5 left-0 px-1.5 py-0.5 bg-accent text-white font-mono text-[9px] font-bold rounded">
                    {region.label}
                  </span>
                </div>
              ))}
          </div>
          <span className="font-mono text-[10px] text-dark-subtle block">
            Client-side WebAssembly Inference Canvas (0ms network roundtrip)
          </span>
        </div>

        {/* Right: Extracted Digital Text & Performance */}
        <div className="md:col-span-5 space-y-4">
          <div className="p-4 rounded-lg bg-bg-subtle border border-border space-y-2">
            <span className="font-mono text-xs text-dark-subtle font-semibold uppercase block">
              Extracted Digital Content (OCR Output)
            </span>
            <pre className="p-3 rounded bg-bg-card border border-border font-mono text-xs text-dark leading-relaxed whitespace-pre-wrap">
              {activeSample.ocrText}
            </pre>
          </div>

          <div className="p-4 rounded-lg bg-bg-subtle border border-border space-y-2 font-mono text-xs">
            <span className="text-dark-subtle font-semibold block uppercase">Model Efficiency Spec</span>
            <div className="flex justify-between text-dark">
              <span>Object Detection mAP:</span>
              <span className="font-bold text-accent">0.915</span>
            </div>
            <div className="flex justify-between text-dark">
              <span>Character Accuracy:</span>
              <span className="font-bold text-accent">93.4%</span>
            </div>
            <div className="flex justify-between text-dark">
              <span>ONNX Web WASM Size:</span>
              <span className="font-bold text-primary">6.4 MB</span>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
};

export default SmartShikshaOCRDemo;
