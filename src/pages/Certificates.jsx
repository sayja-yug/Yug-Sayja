import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import SectionHeading from '../components/common/SectionHeading';
import { Award, ExternalLink, ShieldCheck, CheckCircle2, Eye, X, ZoomIn } from 'lucide-react';
import Card3D from '../components/3d/Card3D';

export const Certificates = () => {
  const { certificates } = portfolioData;
  const [selectedCert, setSelectedCert] = useState(null);

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-10 font-sans text-white relative z-10">
      
      {/* Full-Screen Certificate Modal Viewer */}
      {selectedCert && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/90 backdrop-blur-xl animate-fadeIn">
          <div className="bg-slate-900 border border-cyan-500/30 rounded-2xl max-w-4xl w-full max-h-[92vh] flex flex-col shadow-2xl overflow-hidden relative">
            
            {/* Modal Header */}
            <div className="px-6 py-4 border-b border-slate-800 flex items-center justify-between bg-slate-950/80 font-mono">
              <div className="flex items-center gap-2">
                <Award className="w-5 h-5 text-cyan-400" />
                <span className="font-bold text-sm text-white truncate max-w-md">
                  {selectedCert.title}
                </span>
              </div>
              <div className="flex items-center gap-3">
                <a
                  href={selectedCert.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-cyan-500 text-slate-950 text-xs font-bold hover:bg-cyan-400 transition-colors"
                >
                  <span>Coursera Link</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
                <button
                  onClick={() => setSelectedCert(null)}
                  className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
            </div>

            {/* Certificate Document Display */}
            <div className="p-4 sm:p-6 overflow-y-auto bg-slate-950 flex items-center justify-center">
              <img
                src={selectedCert.imageUrl}
                alt={selectedCert.title}
                className="w-full h-auto max-h-[75vh] object-contain rounded-lg border border-slate-800 shadow-2xl"
              />
            </div>
          </div>
        </div>
      )}

      {/* Header */}
      <SectionHeading
        eyebrow="Official IBM Credentials"
        title="Verified IBM Certificates Portfolio"
        description="Official certificate documents issued by IBM and Coursera earned by Yug Sayja."
      />

      {/* Verification Protocol Banner */}
      <Card3D maxTilt={3} className="p-4 flex items-start gap-3 border-l-4 border-l-cyan-400">
        <ShieldCheck className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
        <div className="space-y-1 text-xs sm:text-sm font-sans">
          <span className="font-mono font-bold text-white block">Visual Certificate Documents</span>
          <p className="text-slate-300 leading-relaxed">
            Click any certificate card below to view the official full-resolution certificate document directly inside the website.
          </p>
        </div>
      </Card3D>

      {/* Certificate Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {certificates.map((cert) => (
          <Card3D key={cert.id} maxTilt={6} className="p-5 space-y-4 flex flex-col justify-between h-full group">
            <div className="space-y-3">
              
              {/* Visual Certificate Thumbnail Container */}
              <div 
                onClick={() => setSelectedCert(cert)}
                className="relative rounded-xl overflow-hidden border border-slate-800 group-hover:border-cyan-500/50 cursor-pointer bg-slate-950 aspect-[4/3] shadow-inner"
              >
                <img
                  src={cert.imageUrl}
                  alt={cert.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                
                {/* Hover Overlay Icon */}
                <div className="absolute inset-0 bg-slate-950/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 backdrop-blur-xs">
                  <span className="px-3 py-1.5 rounded-lg bg-cyan-400 text-slate-950 font-mono text-xs font-bold inline-flex items-center gap-1.5 shadow-lg">
                    <Eye className="w-4 h-4" />
                    <span>View Certificate</span>
                  </span>
                </div>
              </div>

              {/* Title & Badge */}
              <div className="flex items-center justify-between gap-2">
                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded text-[10px] font-mono font-bold bg-cyan-500/20 text-cyan-300 border border-cyan-400/30">
                  <CheckCircle2 className="w-3 h-3 text-cyan-400" />
                  {cert.badgeText}
                </span>
                <span className="text-[11px] font-mono text-slate-400">{cert.date}</span>
              </div>

              <h3 className="font-heading font-bold text-base text-white group-hover:text-cyan-300 transition-colors leading-snug">
                {cert.title}
              </h3>

              {/* Skills Tags */}
              <div className="pt-1 flex flex-wrap gap-1.5">
                {cert.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="px-2.5 py-0.5 rounded bg-slate-950 border border-slate-800 font-mono text-[11px] text-cyan-300 font-semibold"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="pt-3 border-t border-slate-800 flex items-center justify-between font-mono text-xs">
              <button
                onClick={() => setSelectedCert(cert)}
                className="inline-flex items-center gap-1.5 font-bold text-cyan-400 hover:text-cyan-300 transition-colors"
              >
                <ZoomIn className="w-3.5 h-3.5" />
                <span>View Full Photo</span>
              </button>

              <a
                href={cert.credentialUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-cyan-300 transition-colors inline-flex items-center gap-1"
                aria-label="Verify on Coursera"
              >
                <span>Coursera</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </Card3D>
        ))}
      </div>

    </div>
  );
};

export default Certificates;
