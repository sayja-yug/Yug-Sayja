import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Linkedin, Mail, ArrowUpRight, Cpu } from 'lucide-react';
import { portfolioData } from '../../data/portfolioData';

export const Footer = () => {
  return (
    <footer className="bg-slate-950 border-t border-cyan-500/20 mt-20 font-sans text-sm text-slate-300 relative z-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-8 border-b border-slate-800">
          
          {/* Claim Reinforcement */}
          <div className="md:col-span-6 space-y-3">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse"></span>
              <span className="font-mono text-xs text-cyan-400 font-bold uppercase tracking-wider">
                {portfolioData.personal.name} — Machine Learning Engineer
              </span>
            </div>
            <p className="text-white font-heading font-semibold text-lg leading-snug">
              "{portfolioData.personal.claim}"
            </p>
            <p className="text-slate-400 text-xs font-mono">
              Python • PyTorch • Django • Scikit-learn • React.js • n8n
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-2">
            <span className="font-mono text-xs font-bold text-cyan-400 uppercase tracking-wider block">
              Navigation
            </span>
            <ul className="space-y-1.5 text-xs font-mono">
              <li>
                <Link to="/" className="text-slate-400 hover:text-cyan-300 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/projects" className="text-slate-400 hover:text-cyan-300 transition-colors">
                  ML Projects & Case Studies
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-slate-400 hover:text-cyan-300 transition-colors">
                  Experience & About
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-slate-400 hover:text-cyan-300 transition-colors">
                  Contact & Hiring Portal
                </Link>
              </li>
              <li>
                <Link to="/certificates" className="text-slate-400 hover:text-cyan-300 transition-colors">
                  Certificates
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect & CTA */}
          <div className="md:col-span-3 space-y-3">
            <span className="font-mono text-xs font-bold text-cyan-400 uppercase tracking-wider block">
              Recruiter & Social Links
            </span>
            <div className="flex items-center gap-3 text-slate-300">
              <a
                href={portfolioData.personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded bg-slate-900 border border-slate-800 hover:border-cyan-400 hover:text-cyan-300 transition-colors"
                aria-label="GitHub Profile"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={portfolioData.personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded bg-slate-900 border border-slate-800 hover:border-purple-400 hover:text-purple-300 transition-colors"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${portfolioData.personal.email}`}
                className="p-2 rounded bg-slate-900 border border-slate-800 hover:border-cyan-400 hover:text-cyan-300 transition-colors"
                aria-label="Email Direct"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
            
            <a
              href={`mailto:${portfolioData.personal.email}`}
              className="inline-flex items-center gap-1 text-xs font-mono font-bold text-cyan-400 hover:text-cyan-300 transition-colors"
            >
              <span>Discuss ML Internship</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400 font-mono">
          <p>
            © {new Date().getFullYear()} {portfolioData.personal.name}. Machine Learning Engineer.
          </p>
          <p>
            Built with 3D Canvas, WebGL, React & Tailwind CSS.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
