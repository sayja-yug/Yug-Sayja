import React from 'react';
import { portfolioData } from '../data/portfolioData';
import SectionHeading from '../components/common/SectionHeading';
import { Award, ExternalLink, ShieldCheck, CheckCircle2 } from 'lucide-react';

export const Certificates = () => {
  const { certificates } = portfolioData;

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-10 font-sans">
      
      {/* Header */}
      <SectionHeading
        eyebrow="Verified Credentials"
        title="Certificates & Specializations"
        description="Verified machine learning and deep learning certifications from IBM, DeepLearning.AI / Coursera, and FlyRank AI."
      />

      {/* Verification Policy Banner */}
      <div className="p-4 rounded-lg bg-bg-card border border-border border-l-4 border-l-accent flex items-start gap-3 shadow-sm">
        <ShieldCheck className="w-5 h-5 text-accent shrink-0 mt-0.5" />
        <div className="space-y-1 text-xs sm:text-sm">
          <span className="font-mono font-semibold text-dark block">Strict Verification Protocol</span>
          <p className="text-dark-muted font-sans leading-relaxed">
            All listed certificates represent completed coursework and evaluated technical assessments. Click any credential card to verify directly with the issuing institution.
          </p>
        </div>
      </div>

      {/* Certificate Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {certificates.map((cert) => (
          <div
            key={cert.id}
            className="bg-bg-card border border-border rounded-xl p-6 space-y-5 flex flex-col justify-between shadow-sm hover:border-dark-subtle transition-all group"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between gap-2">
                <div className="w-9 h-9 rounded bg-bg-subtle border border-border flex items-center justify-center text-accent">
                  <Award className="w-5 h-5" />
                </div>
                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded text-[10px] font-mono font-semibold bg-accent-light text-accent-hover border border-accent/20">
                  <CheckCircle2 className="w-3 h-3 text-accent" />
                  {cert.badgeText}
                </span>
              </div>

              <h3 className="font-heading font-bold text-lg text-dark group-hover:text-primary transition-colors">
                {cert.title}
              </h3>

              <div className="space-y-0.5 font-mono text-xs">
                <span className="text-accent font-semibold block">{cert.issuer}</span>
                <span className="text-dark-subtle block">{cert.date}</span>
              </div>

              {/* Skills Tags */}
              <div className="pt-2 flex flex-wrap gap-1.5">
                {cert.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="px-2 py-0.5 rounded bg-bg-subtle border border-border font-mono text-[11px] text-dark-muted"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-border">
              <a
                href={cert.credentialUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 font-mono text-xs font-semibold text-primary hover:text-accent transition-colors"
              >
                <span>Verify Credential Link</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};

export default Certificates;
