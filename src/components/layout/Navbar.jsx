import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X, FileText, Cpu, Eye } from 'lucide-react';
import { portfolioData } from '../../data/portfolioData';
import ResumeModal from '../interactive/ResumeModal';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Projects', path: '/projects' },
    { name: 'About & Experience', path: '/about' },
    { name: 'Certificates', path: '/certificates' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-bg/90 backdrop-blur-md border-b border-border/80 transition-colors">
      <ResumeModal isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo / Personal Title */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded bg-primary text-white flex items-center justify-center font-mono font-bold text-sm shadow-sm group-hover:bg-accent transition-colors">
              <Cpu className="w-4 h-4 text-accent group-hover:text-white transition-colors" />
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-bold text-sm sm:text-base text-dark tracking-tight leading-none">
                MLE Portfolio
              </span>
              <span className="text-[10px] font-mono text-dark-subtle tracking-wide uppercase mt-0.5">
                Computer Vision & Applied AI
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `text-sm font-sans font-medium transition-colors hover:text-primary ${
                    isActive ? 'text-primary font-semibold border-b-2 border-accent py-5 -mb-[2px]' : 'text-dark-muted'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </nav>

          {/* Action CTA Button */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={() => setIsResumeOpen(true)}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded text-xs font-mono font-medium text-dark bg-bg-subtle border border-border hover:border-dark-subtle hover:bg-bg transition-all"
            >
              <Eye className="w-3.5 h-3.5 text-accent" />
              <span>Resume Preview</span>
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded text-dark-muted hover:text-dark hover:bg-bg-subtle focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {isOpen && (
        <div className="md:hidden border-b border-border bg-bg-card px-4 pt-2 pb-6 space-y-3">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `block px-3 py-2 rounded text-base font-medium transition-colors ${
                  isActive ? 'bg-primary/10 text-primary font-semibold' : 'text-dark-muted hover:bg-bg-subtle'
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
          <div className="pt-2 border-t border-border">
            <a
              href={portfolioData.personal.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full px-4 py-2 text-sm font-mono font-medium text-white bg-primary rounded shadow-sm hover:bg-primary-hover"
            >
              <FileText className="w-4 h-4 text-accent" />
              <span>Download Resume PDF</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
