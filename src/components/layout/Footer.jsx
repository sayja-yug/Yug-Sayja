import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Linkedin, Mail, ArrowUpRight } from 'lucide-react';
import { portfolioData } from '../../data/portfolioData';

export const Footer = () => {
  return (
    <footer className="bg-bg-subtle border-t border-border mt-20 font-sans text-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-8 border-b border-border/80">
          
          {/* Claim Reinforcement */}
          <div className="md:col-span-6 space-y-3">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
              <span className="font-mono text-xs text-dark-subtle font-semibold uppercase tracking-wider">
                Machine Learning Portfolio
              </span>
            </div>
            <p className="text-dark font-heading font-semibold text-lg leading-snug">
              "{portfolioData.personal.claim}"
            </p>
            <p className="text-dark-muted text-xs font-mono">
              Computer Vision • Applied AI • PyTorch • Latency Optimization
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-2">
            <span className="font-mono text-xs font-semibold text-dark uppercase tracking-wider">
              Navigation
            </span>
            <ul className="space-y-1.5 text-xs">
              <li>
                <Link to="/" className="text-dark-muted hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/projects" className="text-dark-muted hover:text-primary transition-colors">
                  Projects & Case Studies
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-dark-muted hover:text-primary transition-colors">
                  About & Experience
                </Link>
              </li>
              <li>
                <Link to="/certificates" className="text-dark-muted hover:text-primary transition-colors">
                  Certificates
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-dark-muted hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect & CTA */}
          <div className="md:col-span-3 space-y-3">
            <span className="font-mono text-xs font-semibold text-dark uppercase tracking-wider">
              Connect & Recruit
            </span>
            <div className="flex items-center gap-3 text-dark-muted">
              <a
                href={portfolioData.personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded bg-bg border border-border hover:border-dark-subtle hover:text-dark transition-colors"
                aria-label="GitHub Profile"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={portfolioData.personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded bg-bg border border-border hover:border-dark-subtle hover:text-dark transition-colors"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${portfolioData.personal.email}`}
                className="p-2 rounded bg-bg border border-border hover:border-dark-subtle hover:text-dark transition-colors"
                aria-label="Email Direct"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
            
            <a
              href={`mailto:${portfolioData.personal.email}`}
              className="inline-flex items-center gap-1 text-xs font-mono font-medium text-accent hover:text-accent-hover transition-colors"
            >
              <span>Schedule Interview Discussion</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-dark-subtle font-mono">
          <p>
            © {new Date().getFullYear()} Applied Machine Learning Engineer. Evidence-first architecture.
          </p>
          <p>
            Built with React, Vite & Tailwind CSS.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
