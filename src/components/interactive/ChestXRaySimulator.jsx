import React, { useState } from 'react';
import { Activity, Sliders, Eye, EyeOff, Cpu, Info, CheckCircle2, Zap, Layers } from 'lucide-react';

const SAMPLE_SCANS = [
  {
    id: 'pneumonia',
    title: 'Patient Scan #4029 - Pneumonia & Infiltration',
    indication: 'Right Lower Lobe Consolidation',
    primaryDiagnosis: 'Pneumonia',
    confidence: 0.942,
    secondaryPathologies: [
      { name: 'Infiltration', score: 0.884 },
      { name: 'Atelectasis', score: 0.412 },
      { name: 'Effusion', score: 0.231 },
    ],
    heatmapParams: { cx: '68%', cy: '58%', rx: '22%', ry: '18%', rot: -15, color: 'rgba(239, 68, 68, opacity)' },
    triageLevel: 'Urgent Triage Required',
    triageColor: 'bg-red-500/10 text-red-600 border-red-500/30',
  },
  {
    id: 'cardiomegaly',
    title: 'Patient Scan #1184 - Cardiac Enlargement',
    indication: 'Enlarged Cardiac Silhouette (CTR > 0.55)',
    primaryDiagnosis: 'Cardiomegaly',
    confidence: 0.965,
    secondaryPathologies: [
      { name: 'Edema', score: 0.521 },
      { name: 'Effusion', score: 0.485 },
      { name: 'Atelectasis', score: 0.180 },
    ],
    heatmapParams: { cx: '50%', cy: '62%', rx: '32%', ry: '24%', rot: 5, color: 'rgba(245, 158, 11, opacity)' },
    triageLevel: 'Moderate Priority',
    triageColor: 'bg-amber-500/10 text-amber-600 border-amber-500/30',
  },
  {
    id: 'pneumothorax',
    title: 'Patient Scan #7721 - Pneumothorax',
    indication: 'Left Pleural Air Line & Lung Apex Collapse',
    primaryDiagnosis: 'Pneumothorax',
    confidence: 0.918,
    secondaryPathologies: [
      { name: 'Pleural Thickening', score: 0.354 },
      { name: 'Atelectasis', score: 0.312 },
      { name: 'Emphysema', score: 0.198 },
    ],
    heatmapParams: { cx: '30%', cy: '35%', rx: '18%', ry: '25%', rot: -20, color: 'rgba(239, 68, 68, opacity)' },
    triageLevel: 'Emergency Critical',
    triageColor: 'bg-red-600/15 text-red-700 border-red-600/40 animate-pulse',
  },
  {
    id: 'normal',
    title: 'Patient Scan #9042 - Normal Control Scan',
    indication: 'Clear Lung Fields, Normal Cardiac Contour',
    primaryDiagnosis: 'No Finding (Normal)',
    confidence: 0.981,
    secondaryPathologies: [
      { name: 'Infiltration', score: 0.042 },
      { name: 'Atelectasis', score: 0.031 },
      { name: 'Effusion', score: 0.015 },
    ],
    heatmapParams: { cx: '50%', cy: '50%', rx: '5%', ry: '5%', rot: 0, color: 'rgba(16, 185, 129, opacity)' },
    triageLevel: 'Routine / Normal',
    triageColor: 'bg-emerald-500/10 text-emerald-600 border-emerald-500/30',
  },
];

export const ChestXRaySimulator = () => {
  const [selectedScan, setSelectedScan] = useState(SAMPLE_SCANS[0]);
  const [opacity, setOpacity] = useState(75);
  const [showGradCam, setShowGradCam] = useState(true);
  const [quantMode, setQuantMode] = useState('INT8'); // FP32, FP16, INT8

  const getLatency = () => {
    switch (quantMode) {
      case 'FP32':
        return { latency: '142 ms', vram: '28.4 MB', auc: '0.895', device: 'NVIDIA T4 (FP32)' };
      case 'FP16':
        return { latency: '54 ms', vram: '14.2 MB', auc: '0.894', device: 'NVIDIA T4 (FP16 TensorCore)' };
      case 'INT8':
      default:
        return { latency: '38 ms', vram: '7.2 MB', auc: '0.892', device: 'NVIDIA T4 (INT8 PTQ)' };
    }
  };

  const currentPerf = getLatency();

  return (
    <div className="bg-dark/95 text-white rounded-xl p-6 sm:p-8 space-y-6 shadow-xl border border-white/10 font-sans">
      
      {/* Header Bar */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-5">
        <div>
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-accent/20 border border-accent/40 text-accent font-mono text-xs font-semibold mb-2">
            <Activity className="w-3.5 h-3.5" />
            <span>Interactive PyTorch + Grad-CAM Explainable AI Simulator</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-heading font-bold text-white">
            Chest X-Ray Disease Triage & Heatmap Visualizer
          </h3>
          <p className="text-xs font-mono text-white/60 mt-0.5">
            Model: DenseNet-121 (Patient-Disjoint Val) | Output: 14 Multi-label Pathologies
          </p>
        </div>

        {/* Quantization Mode Selector */}
        <div className="flex items-center gap-2 bg-white/5 p-1 rounded-lg border border-white/10 font-mono text-xs">
          <span className="text-white/40 px-2 font-medium">Precision:</span>
          {['FP32', 'FP16', 'INT8'].map((mode) => (
            <button
              key={mode}
              onClick={() => setQuantMode(mode)}
              className={`px-2.5 py-1 rounded transition-colors ${
                quantMode === mode
                  ? 'bg-accent text-white font-bold shadow'
                  : 'text-white/60 hover:text-white hover:bg-white/10'
              }`}
            >
              {mode}
            </button>
          ))}
        </div>
      </div>

      {/* Sample Scan Selector Bar */}
      <div className="space-y-2">
        <span className="text-xs font-mono font-semibold text-white/60 uppercase tracking-wider block">
          Select Clinical Radiograph Test Case:
        </span>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
          {SAMPLE_SCANS.map((scan) => (
            <button
              key={scan.id}
              onClick={() => setSelectedScan(scan)}
              className={`p-3 rounded-lg text-left transition-all border ${
                selectedScan.id === scan.id
                  ? 'bg-white/10 border-accent shadow-md text-white'
                  : 'bg-white/5 border-white/10 text-white/70 hover:bg-white/10 hover:text-white'
              }`}
            >
              <span className="font-heading text-xs font-bold block truncate">{scan.primaryDiagnosis}</span>
              <span className="font-mono text-[10px] text-white/50 block mt-0.5 truncate">{scan.indication}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Main Visualizer Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        
        {/* Left Column: Simulated Radiograph Viewport */}
        <div className="lg:col-span-7 space-y-4">
          <div className="relative aspect-[4/3] bg-black rounded-lg border border-white/20 overflow-hidden group shadow-inner">
            
            {/* SVG Radiograph Representation */}
            <svg className="w-full h-full object-cover" viewBox="0 0 400 300">
              {/* Background dark chest cavity */}
              <rect width="400" height="300" fill="#0A0D12" />
              
              {/* Spine and Ribcage silhouette */}
              <path d="M 200 20 L 200 280" stroke="#252D3A" strokeWidth="18" strokeDasharray="10 4" opacity="0.8" />
              <path d="M 200 40 L 200 280" stroke="#3A4659" strokeWidth="8" />

              {/* Left & Right Lung Field silhouettes */}
              {/* Right lung (screen left) */}
              <path
                d="M 170 50 C 100 50, 70 100, 70 210 C 70 240, 110 250, 170 240 Z"
                fill="#121824"
                stroke="#2B364A"
                strokeWidth="3"
              />
              {/* Left lung (screen right) */}
              <path
                d="M 230 50 C 300 50, 330 100, 330 210 C 330 240, 290 250, 230 240 Z"
                fill="#121824"
                stroke="#2B364A"
                strokeWidth="3"
              />

              {/* Heart Contour (Cardiac Silhouette) */}
              <path
                d="M 185 140 C 185 140, 245 150, 245 210 C 245 235, 205 240, 185 240 Z"
                fill="#1C2433"
                stroke="#3B4961"
                strokeWidth="2"
              />
              
              {/* Rib overlay curves */}
              <path d="M 80 80 Q 140 100 190 90" stroke="#2A3547" strokeWidth="4" fill="none" opacity="0.6" />
              <path d="M 80 120 Q 140 140 190 130" stroke="#2A3547" strokeWidth="4" fill="none" opacity="0.6" />
              <path d="M 80 160 Q 140 180 190 170" stroke="#2A3547" strokeWidth="4" fill="none" opacity="0.6" />

              <path d="M 320 80 Q 260 100 210 90" stroke="#2A3547" strokeWidth="4" fill="none" opacity="0.6" />
              <path d="M 320 120 Q 260 140 210 130" stroke="#2A3547" strokeWidth="4" fill="none" opacity="0.6" />
              <path d="M 320 160 Q 260 180 210 170" stroke="#2A3547" strokeWidth="4" fill="none" opacity="0.6" />

              {/* Grad-CAM Heatmap Radial Gradient Overlay */}
              {showGradCam && (
                <defs>
                  <radialGradient id="gradCamHeat" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#EF4444" stopOpacity={opacity / 100} />
                    <stop offset="35%" stopColor="#F59E0B" stopOpacity={(opacity / 100) * 0.8} />
                    <stop offset="70%" stopColor="#3B82F6" stopOpacity={(opacity / 100) * 0.4} />
                    <stop offset="100%" stopColor="#3B82F6" stopOpacity="0" />
                  </radialGradient>
                </defs>
              )}

              {showGradCam && (
                <ellipse
                  cx={selectedScan.heatmapParams.cx}
                  cy={selectedScan.heatmapParams.cy}
                  rx={selectedScan.heatmapParams.rx}
                  ry={selectedScan.heatmapParams.ry}
                  fill="url(#gradCamHeat)"
                  transform={`rotate(${selectedScan.heatmapParams.rot} 200 150)`}
                  className="transition-all duration-500 ease-out"
                />
              )}
            </svg>

            {/* Viewport Overlay Controls */}
            <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
              <span className="px-2.5 py-1 rounded bg-black/70 backdrop-blur border border-white/20 font-mono text-[11px] text-white font-semibold">
                {selectedScan.title}
              </span>

              <span className={`px-2.5 py-1 rounded font-mono text-[11px] font-bold border ${selectedScan.triageColor}`}>
                {selectedScan.triageLevel}
              </span>
            </div>

            {/* Bottom Telemetry Bar */}
            <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between bg-black/80 backdrop-blur border border-white/20 p-2 rounded text-[11px] font-mono">
              <div className="flex items-center gap-3">
                <span className="text-white/60">Grad-CAM: <strong className="text-accent">{showGradCam ? 'ACTIVE' : 'OFF'}</strong></span>
                <span className="text-white/60">Opacity: <strong className="text-white">{opacity}%</strong></span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="w-3.5 h-3.5 text-amber-400" />
                <span className="text-amber-400 font-bold">{currentPerf.latency}</span>
                <span className="text-white/40">({currentPerf.device})</span>
              </div>
            </div>
          </div>

          {/* Interactive Controls Bar */}
          <div className="p-4 rounded-lg bg-white/5 border border-white/10 space-y-3">
            <div className="flex items-center justify-between gap-4">
              <button
                onClick={() => setShowGradCam(!showGradCam)}
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded bg-accent/20 border border-accent/40 text-accent font-mono text-xs font-semibold hover:bg-accent/30 transition-colors"
              >
                {showGradCam ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                <span>{showGradCam ? 'Hide Heatmap Overlay' : 'Show Grad-CAM Heatmap'}</span>
              </button>

              <div className="flex items-center gap-3 flex-1 max-w-xs">
                <Sliders className="w-4 h-4 text-white/50 shrink-0" />
                <span className="font-mono text-xs text-white/60 shrink-0">Opacity:</span>
                <input
                  type="range"
                  min="10"
                  max="100"
                  value={opacity}
                  onChange={(e) => setOpacity(Number(e.target.value))}
                  className="w-full accent-accent bg-white/20 h-1.5 rounded-lg cursor-pointer"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Model Output Diagnostics & Class Probabilities */}
        <div className="lg:col-span-5 space-y-5">
          
          {/* Primary Diagnosis Box */}
          <div className="p-4 rounded-lg bg-white/5 border border-white/10 space-y-2">
            <span className="font-mono text-xs text-white/50 uppercase tracking-wider block font-semibold">
              Top Model Pathology Prediction
            </span>
            <div className="flex items-center justify-between gap-2">
              <h4 className="text-xl font-heading font-bold text-white">{selectedScan.primaryDiagnosis}</h4>
              <span className="px-3 py-1 rounded bg-accent text-white font-mono text-sm font-bold">
                {(selectedScan.confidence * 100).toFixed(1)}% Prob
              </span>
            </div>
            <p className="text-xs font-mono text-accent/90">
              Indication: {selectedScan.indication}
            </p>
          </div>

          {/* Secondary Pathologies Multi-Label Probability Gauges */}
          <div className="p-4 rounded-lg bg-white/5 border border-white/10 space-y-3">
            <span className="font-mono text-xs text-white/50 uppercase tracking-wider block font-semibold">
              Multi-Label Class Probabilities (Top 4)
            </span>

            <div className="space-y-2.5">
              {/* Primary item */}
              <div className="space-y-1">
                <div className="flex justify-between text-xs font-mono">
                  <span className="text-white font-bold">{selectedScan.primaryDiagnosis}</span>
                  <span className="text-accent font-bold">{(selectedScan.confidence * 100).toFixed(1)}%</span>
                </div>
                <div className="h-2 rounded-full bg-white/10 overflow-hidden">
                  <div
                    className="h-full bg-accent transition-all duration-500 rounded-full"
                    style={{ width: `${selectedScan.confidence * 100}%` }}
                  ></div>
                </div>
              </div>

              {/* Secondary items */}
              {selectedScan.secondaryPathologies.map((item, idx) => (
                <div key={idx} className="space-y-1">
                  <div className="flex justify-between text-xs font-mono">
                    <span className="text-white/70">{item.name}</span>
                    <span className="text-white/60">{(item.score * 100).toFixed(1)}%</span>
                  </div>
                  <div className="h-2 rounded-full bg-white/10 overflow-hidden">
                    <div
                      className="h-full bg-white/40 transition-all duration-500 rounded-full"
                      style={{ width: `${item.score * 100}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Performance & Quantization Telemetry Panel */}
          <div className="p-4 rounded-lg bg-white/5 border border-white/10 space-y-3 text-xs font-mono">
            <span className="text-white/50 uppercase tracking-wider block font-semibold">
              Live Inference & Quantization Metrics
            </span>
            <div className="grid grid-cols-2 gap-2">
              <div className="p-2.5 rounded bg-black/40 border border-white/5">
                <span className="text-white/40 block">Inference Speed</span>
                <span className="text-amber-400 font-bold text-sm block mt-0.5">{currentPerf.latency}</span>
              </div>
              <div className="p-2.5 rounded bg-black/40 border border-white/5">
                <span className="text-white/40 block">Model Memory Size</span>
                <span className="text-white font-bold text-sm block mt-0.5">{currentPerf.vram}</span>
              </div>
              <div className="p-2.5 rounded bg-black/40 border border-white/5">
                <span className="text-white/40 block">Mean Test AUC</span>
                <span className="text-accent font-bold text-sm block mt-0.5">{currentPerf.auc}</span>
              </div>
              <div className="p-2.5 rounded bg-black/40 border border-white/5">
                <span className="text-white/40 block">Evaluation Rigor</span>
                <span className="text-white font-bold text-xs block mt-0.5">Patient-Disjoint</span>
              </div>
            </div>
          </div>

        </div>

      </div>

    </div>
  );
};

export default ChestXRaySimulator;
