import React, { useState } from 'react';
import { Cpu, Zap, Gauge, BarChart2, ShieldCheck, Layers, Server } from 'lucide-react';

const HARDWARE_TARGETS = [
  { id: 'nvidia_t4', name: 'NVIDIA T4 Tensor Core GPU', type: 'Cloud Server', icon: Server },
  { id: 'arm_v8', name: 'ARM v8 Quad-Core CPU', type: 'Edge Mobile / Embedded', icon: Cpu },
  { id: 'webgpu', name: 'Browser WebGPU Backend', type: 'Client In-Browser', icon: Zap },
];

const BENCHMARK_DATA = {
  nvidia_t4: {
    FP32: { latency: 142, vram: 28.4, throughput: 7.0, auc: 0.895, f1: 0.832 },
    FP16: { latency: 54, vram: 14.2, throughput: 18.5, auc: 0.894, f1: 0.831 },
    INT8: { latency: 38, vram: 7.2, throughput: 26.3, auc: 0.892, f1: 0.829 },
  },
  arm_v8: {
    FP32: { latency: 480, vram: 28.4, throughput: 2.1, auc: 0.895, f1: 0.832 },
    FP16: { latency: 240, vram: 14.2, throughput: 4.2, auc: 0.894, f1: 0.831 },
    INT8: { latency: 120, vram: 7.2, throughput: 8.3, auc: 0.892, f1: 0.829 },
  },
  webgpu: {
    FP32: { latency: 220, vram: 32.0, throughput: 4.5, auc: 0.895, f1: 0.832 },
    FP16: { latency: 98, vram: 16.0, throughput: 10.2, auc: 0.894, f1: 0.831 },
    INT8: { latency: 62, vram: 8.5, throughput: 16.1, auc: 0.892, f1: 0.829 },
  },
};

export const LatencyBenchmarkExplorer = () => {
  const [targetDevice, setTargetDevice] = useState('nvidia_t4');
  const [precision, setPrecision] = useState('INT8');
  const [batchSize, setBatchSize] = useState(1);

  const deviceConfig = BENCHMARK_DATA[targetDevice][precision];
  const scaledLatency = Math.round(deviceConfig.latency * Math.pow(batchSize, 0.45));
  const scaledThroughput = (deviceConfig.throughput * Math.pow(batchSize, 0.55)).toFixed(1);

  // Max bounds for relative bar fills
  const maxLatency = 600;
  const maxVram = 35;

  return (
    <div className="bg-bg-card border border-border rounded-xl p-6 sm:p-8 space-y-6 shadow-sm font-sans">
      
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-border pb-4">
        <div>
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-primary/10 border border-primary/20 text-primary font-mono text-xs font-semibold mb-1">
            <Gauge className="w-3.5 h-3.5 text-accent" />
            <span>Interactive Quantization & Latency Benchmark Calculator</span>
          </div>
          <h3 className="text-xl font-heading font-bold text-dark">
            Model Optimization Telemetry & Precision Explorer
          </h3>
        </div>
      </div>

      {/* Target Device & Batch Controls */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
        
        {/* Hardware Selector */}
        <div className="md:col-span-6 space-y-1.5">
          <label className="font-mono text-xs font-semibold text-dark-subtle block uppercase tracking-wider">
            Target Execution Hardware:
          </label>
          <div className="grid grid-cols-3 gap-2">
            {HARDWARE_TARGETS.map((hw) => {
              const Icon = hw.icon;
              return (
                <button
                  key={hw.id}
                  onClick={() => setTargetDevice(hw.id)}
                  className={`p-2.5 rounded-lg text-left border transition-all ${
                    targetDevice === hw.id
                      ? 'bg-primary text-white border-primary shadow-sm'
                      : 'bg-bg-subtle border-border text-dark hover:border-dark-subtle'
                  }`}
                >
                  <Icon className={`w-4 h-4 mb-1 ${targetDevice === hw.id ? 'text-accent' : 'text-primary'}`} />
                  <span className="font-heading font-bold text-xs block truncate">{hw.name.split(' ')[0]}</span>
                  <span className="font-mono text-[10px] opacity-70 block truncate">{hw.type.split(' ')[0]}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Precision Selector */}
        <div className="md:col-span-3 space-y-1.5">
          <label className="font-mono text-xs font-semibold text-dark-subtle block uppercase tracking-wider">
            Precision Mode:
          </label>
          <div className="flex rounded-lg border border-border bg-bg-subtle p-1 font-mono text-xs">
            {['FP32', 'FP16', 'INT8'].map((p) => (
              <button
                key={p}
                onClick={() => setPrecision(p)}
                className={`flex-1 py-2 rounded transition-colors text-center font-semibold ${
                  precision === p
                    ? 'bg-primary text-white shadow-sm'
                    : 'text-dark-muted hover:text-dark'
                }`}
              >
                {p}
              </button>
            ))}
          </div>
        </div>

        {/* Batch Size Selector */}
        <div className="md:col-span-3 space-y-1.5">
          <label className="font-mono text-xs font-semibold text-dark-subtle block uppercase tracking-wider">
            Batch Size: <span className="text-primary font-bold">{batchSize}</span>
          </label>
          <div className="flex items-center gap-2">
            {[1, 4, 8, 16].map((bs) => (
              <button
                key={bs}
                onClick={() => setBatchSize(bs)}
                className={`flex-1 py-2 rounded font-mono text-xs font-bold border transition-colors ${
                  batchSize === bs
                    ? 'bg-accent text-white border-accent'
                    : 'bg-bg-subtle border-border text-dark hover:border-dark-subtle'
                }`}
              >
                {bs}
              </button>
            ))}
          </div>
        </div>

      </div>

      {/* Metrics Dynamic Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        
        <div className="p-4 rounded-lg bg-bg-subtle border border-border space-y-2">
          <span className="font-mono text-xs text-dark-subtle uppercase block font-semibold">End-to-End Latency</span>
          <div className="flex items-baseline gap-2">
            <span className="text-2xl font-mono font-bold text-primary">{scaledLatency} ms</span>
            <span className="text-xs font-mono text-accent font-semibold">
              {precision === 'INT8' ? '3.7x Faster' : precision === 'FP16' ? '2.6x Faster' : 'Baseline'}
            </span>
          </div>
          <div className="h-2 rounded-full bg-border overflow-hidden mt-1">
            <div
              className="h-full bg-primary transition-all duration-300 rounded-full"
              style={{ width: `${Math.min(100, (scaledLatency / maxLatency) * 100)}%` }}
            ></div>
          </div>
        </div>

        <div className="p-4 rounded-lg bg-bg-subtle border border-border space-y-2">
          <span className="font-mono text-xs text-dark-subtle uppercase block font-semibold">Model Memory Footprint</span>
          <div className="flex items-baseline gap-2">
            <span className="text-2xl font-mono font-bold text-primary">{deviceConfig.vram} MB</span>
            <span className="text-xs font-mono text-accent font-semibold">
              {precision === 'INT8' ? '-74.6% Memory' : precision === 'FP16' ? '-50% Memory' : 'Full Weight'}
            </span>
          </div>
          <div className="h-2 rounded-full bg-border overflow-hidden mt-1">
            <div
              className="h-full bg-accent transition-all duration-300 rounded-full"
              style={{ width: `${(deviceConfig.vram / maxVram) * 100}%` }}
            ></div>
          </div>
        </div>

        <div className="p-4 rounded-lg bg-bg-subtle border border-border space-y-2">
          <span className="font-mono text-xs text-dark-subtle uppercase block font-semibold">Inference Throughput</span>
          <div className="flex items-baseline gap-2">
            <span className="text-2xl font-mono font-bold text-primary">{scaledThroughput}</span>
            <span className="text-xs font-mono text-dark-muted">img / sec</span>
          </div>
          <p className="text-[11px] font-mono text-dark-subtle">Parallel execution yield</p>
        </div>

        <div className="p-4 rounded-lg bg-bg-subtle border border-border space-y-2">
          <span className="font-mono text-xs text-dark-subtle uppercase block font-semibold">Accuracy AUC Metric</span>
          <div className="flex items-baseline gap-2">
            <span className="text-2xl font-mono font-bold text-emerald-600">{deviceConfig.auc}</span>
            <span className="text-xs font-mono text-emerald-600 font-semibold">
              {precision === 'INT8' ? '<0.3% degradation' : '100% baseline'}
            </span>
          </div>
          <p className="text-[11px] font-mono text-dark-subtle">Patient-Disjoint Test Set</p>
        </div>

      </div>

      {/* Insight Note */}
      <div className="p-3.5 rounded-lg bg-accent-light border border-accent/30 flex items-center gap-3 text-xs font-mono text-dark">
        <ShieldCheck className="w-4 h-4 text-accent shrink-0" />
        <span>
          <strong>Quantization Strategy Note:</strong> Post-Training Quantization (PTQ) converts FP32 floating point weights to INT8 integers using symmetric linear calibration, maintaining 99.7% of the original diagnostic AUC while enabling 38ms latency on edge hardware.
        </span>
      </div>

    </div>
  );
};

export default LatencyBenchmarkExplorer;
