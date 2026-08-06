import React, { useState } from 'react';
import { Activity, ShieldAlert, Cpu, HeartPulse, CheckCircle2, MessageSquareText, Layers, FileText } from 'lucide-react';

const PRESET_CLINICAL_CASES = [
  {
    id: 'case_1',
    name: 'Acute Respiratory Symptom Log',
    symptoms: 'Patient reports high fever, persistent dry cough, chest tightness, and mild dyspnea for 3 days.',
    visualSample: 'Chest / Throat Visual Scan',
    triageCategory: 'Urgent Triage (High Priority)',
    badgeColor: 'bg-red-500/10 text-red-600 border-red-500/30',
    topRisk: 'Acute Lower Respiratory Infection',
    confidence: 0.912,
    fusedEmbeddingDim: '512-D MobileNetV3 + DistilBERT',
    latency: '118 ms (ONNX CPU)',
  },
  {
    id: 'case_2',
    name: 'Dermal Lesion & Inflammation',
    symptoms: 'Localized localized erythematous rash with mild itching on left forearm, no systemic fever.',
    visualSample: 'Dermal Scan (Macro View)',
    triageCategory: 'Routine / Non-Urgent',
    badgeColor: 'bg-emerald-500/10 text-emerald-600 border-emerald-500/30',
    topRisk: 'Contact Dermatitis / Mild Allergy',
    confidence: 0.887,
    fusedEmbeddingDim: '512-D MobileNetV3 + DistilBERT',
    latency: '124 ms (ONNX CPU)',
  },
  {
    id: 'case_3',
    name: 'Pediatric Fever & Dehydration Log',
    symptoms: 'Child presents with low grade fever, mild fatigue, decreased oral intake, no respiratory distress.',
    visualSample: 'General Physical Record',
    triageCategory: 'Moderate Priority',
    badgeColor: 'bg-amber-500/10 text-amber-600 border-amber-500/30',
    topRisk: 'Viral Gastroenteritis / Dehydration Risk',
    confidence: 0.854,
    fusedEmbeddingDim: '512-D MobileNetV3 + DistilBERT',
    latency: '115 ms (ONNX CPU)',
  },
];

export const SwasthyaTriageDemo = () => {
  const [activeCase, setActiveCase] = useState(PRESET_CLINICAL_CASES[0]);
  const [symptomText, setSymptomText] = useState(PRESET_CLINICAL_CASES[0].symptoms);

  const handleSelectCase = (c) => {
    setActiveCase(c);
    setSymptomText(c.symptoms);
  };

  return (
    <div className="bg-bg-card border border-border rounded-xl p-6 sm:p-8 space-y-6 shadow-sm font-sans">
      
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-border pb-4">
        <div>
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-accent-light border border-accent/30 text-accent-hover font-mono text-xs font-semibold mb-1">
            <HeartPulse className="w-3.5 h-3.5 text-accent" />
            <span>SwasthyaCare Multimodal Diagnostics & Triage Widget</span>
          </div>
          <h3 className="text-xl font-heading font-bold text-dark">
            MobileNetV3 + DistilBERT Healthcare Assistant Simulation
          </h3>
        </div>
        <span className="font-mono text-xs text-dark-subtle bg-bg-subtle border border-border px-3 py-1 rounded">
          ONNX Offline Execution (18.4 MB Model Size)
        </span>
      </div>

      {/* Preset Selector */}
      <div className="space-y-2">
        <span className="font-mono text-xs font-semibold text-dark-subtle uppercase tracking-wider block">
          Select Clinical Assessment Preset:
        </span>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {PRESET_CLINICAL_CASES.map((c) => (
            <button
              key={c.id}
              onClick={() => handleSelectCase(c)}
              className={`p-3 rounded-lg text-left border transition-all ${
                activeCase.id === c.id
                  ? 'bg-primary text-white border-primary shadow-sm'
                  : 'bg-bg-subtle border-border text-dark hover:border-dark-subtle'
              }`}
            >
              <span className="font-heading font-bold text-xs block">{c.name}</span>
              <span className="font-mono text-[10px] opacity-75 block truncate mt-0.5">{c.topRisk}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Main Interactive Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
        
        {/* Left Column: Multimodal Inputs */}
        <div className="md:col-span-7 space-y-4">
          <div className="p-4 rounded-lg bg-bg-subtle border border-border space-y-3">
            <div className="flex items-center gap-2 text-xs font-mono font-bold text-dark">
              <MessageSquareText className="w-4 h-4 text-accent" />
              <span>Symptom NLP Input (DistilBERT Encoder)</span>
            </div>
            <textarea
              rows={3}
              value={symptomText}
              onChange={(e) => setSymptomText(e.target.value)}
              className="w-full p-3 rounded bg-bg-card border border-border text-xs font-sans text-dark focus:outline-none focus:border-accent resize-none"
            />
          </div>

          <div className="p-4 rounded-lg bg-bg-subtle border border-border flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded bg-accent/10 border border-accent/30 flex items-center justify-center text-accent">
                <FileText className="w-5 h-5" />
              </div>
              <div>
                <span className="font-mono text-xs font-bold text-dark block">Visual Triage Channel</span>
                <span className="font-sans text-xs text-dark-muted block">{activeCase.visualSample}</span>
              </div>
            </div>
            <span className="font-mono text-[11px] text-accent font-semibold px-2.5 py-1 rounded bg-bg-card border border-border">
              MobileNetV3 Output 256-D
            </span>
          </div>
        </div>

        {/* Right Column: Multimodal Diagnostic Output */}
        <div className="md:col-span-5 space-y-4">
          <div className="p-5 rounded-lg bg-bg-subtle border border-border space-y-3">
            <span className="font-mono text-xs text-dark-subtle font-semibold uppercase block">
              Triage Priority Output
            </span>

            <div className={`p-3 rounded border font-mono text-xs font-bold ${activeCase.badgeColor}`}>
              {activeCase.triageCategory}
            </div>

            <div className="space-y-1">
              <span className="font-mono text-xs text-dark-subtle block">Primary Differential Diagnosis</span>
              <span className="font-heading font-bold text-base text-dark block">{activeCase.topRisk}</span>
            </div>

            <div className="pt-2 border-t border-border flex items-center justify-between text-xs font-mono">
              <span className="text-dark-subtle">Fusion Confidence:</span>
              <span className="text-primary font-bold">{(activeCase.confidence * 100).toFixed(1)}%</span>
            </div>

            <div className="flex items-center justify-between text-xs font-mono">
              <span className="text-dark-subtle">Offline ARM Latency:</span>
              <span className="text-accent font-bold">{activeCase.latency}</span>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
};

export default SwasthyaTriageDemo;
