import React from 'react';
import { portfolioData } from '../data/portfolioData';
import SectionHeading from '../components/common/SectionHeading';
import { Award, ExternalLink, ShieldCheck, CheckCircle2 } from 'lucide-react';
import Card3D from '../components/3d/Card3D';

export const Certificates = () => {
  const { certificates } = portfolioData;

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-10 font-sans text-white relative z-10">
      
      {/* Header */}
      <SectionHeading
        eyebrow="Verified Credentials"
        title="Certificates & Specializations"
        description="Verified machine learning and deep learning certifications earned by Yug Sayja from IBM, DeepLearning.AI / Coursera, and FlyRank AI."
      />

      {/* Verification Policy Banner */}
      <Card3D maxTilt={3} className="p-4 flex items-start gap-3 border-l-4 border-l-cyan-400">
        <ShieldCheck className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
        <div className="space-y-1 text-xs sm:text-sm font-sans">
          <span className="font-mono font-bold text-white block">Strict Verification Protocol</span>
          <p className="text-slate-300 leading-relaxed">
            All listed certificates represent completed coursework and evaluated technical assessments. Click any credential card to verify directly with the issuing institution.
          </p>
        </div>
      </Card3D>

      {/* Certificate Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {certificates.map((cert) => (
          <Card3D key={cert.id} maxTilt={8} className="p-6 space-y-5 flex flex-col justify-between h-full">
            <div className="space-y-3">
              <div className="flex items-center justify-between gap-2">
                <div className="w-9 h-9 rounded bg-cyan-500/10 border border-cyan-400/30 flex items-center justify-center text-cyan-400">
                  <Award className="w-5 h-5" />
                </div>
                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded text-[10px] font-mono font-bold bg-cyan-500/20 text-cyan-300 border border-cyan-400/30">
                  <CheckCircle2 className="w-3 h-3 text-cyan-400" />
                  {cert.badgeText}
                </span>
              </div>

              <h3 className="font-heading font-bold text-lg text-white group-hover:text-cyan-300 transition-colors">
                {cert.title}
              </h3>

              <div className="space-y-0.5 font-mono text-xs">
                <span className="text-cyan-400 font-semibold block">{cert.issuer}</span>
                <span className="text-slate-400 block">{cert.date}</span>
              </div>

              {/* Skills Tags */}
              <div className="pt-2 flex flex-wrap gap-1.5">
                {cert.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="px-2 py-0.5 rounded bg-slate-950 border border-slate-800 font-mono text-[11px] text-cyan-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-slate-800">
              <a
                href={cert.credentialUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 font-mono text-xs font-bold text-cyan-400 hover:text-cyan-300 transition-colors"
              >
                <span>Verify Credential Link</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </Card3D>
        ))}
      </div>

    </div>
  );
};

export default Certificates;
