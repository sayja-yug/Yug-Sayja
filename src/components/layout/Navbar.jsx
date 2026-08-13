import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X, FileText, Cpu, Eye, Github, Linkedin } from 'lucide-react';
import { portfolioData } from '../../data/portfolioData';
import ResumeModal from '../interactive/ResumeModal';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'ML Projects', path: '/projects' },
    { name: 'Experience', path: '/about' },
    { name: 'Contact', path: '/contact' },
    { name: 'Certificates', path: '/certificates' },
  ];

  return (
    <>
      <ResumeModal isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} />
      <header className="sticky top-0 z-50 bg-slate-950/80 backdrop-blur-xl border-b border-cyan-500/20 shadow-lg shadow-cyan-950/20 font-sans text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo / Yug Sayja Branding */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-cyan-500 to-purple-600 text-slate-950 flex items-center justify-center font-mono font-bold text-sm shadow-md shadow-cyan-500/20 group-hover:scale-105 transition-transform">
              <Cpu className="w-5 h-5 text-slate-950" />
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-extrabold text-base text-white tracking-wide group-hover:text-cyan-300 transition-colors">
                {portfolioData.personal.name}
              </span>
              <span className="text-[10px] font-mono text-cyan-400/90 tracking-widest uppercase font-semibold">
                Machine Learning Engineer
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
                  `text-sm font-mono font-medium transition-colors hover:text-cyan-300 ${
                    isActive
                      ? 'text-cyan-300 font-bold border-b-2 border-cyan-400 py-5 -mb-[2px] drop-shadow-[0_0_8px_rgba(0,242,254,0.6)]'
                      : 'text-slate-300'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </nav>

          {/* Action CTA Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href={portfolioData.personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-slate-900 border border-slate-700 text-slate-300 hover:text-cyan-300 hover:border-cyan-400 transition-colors"
              aria-label="GitHub Profile"
            >
              <Github className="w-4 h-4" />
            </a>

            <a
              href={portfolioData.personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-slate-900 border border-slate-700 text-slate-300 hover:text-purple-300 hover:border-purple-400 transition-colors"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-4 h-4" />
            </a>

            <button
              onClick={() => setIsResumeOpen(true)}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-mono font-bold text-slate-950 bg-cyan-400 hover:bg-cyan-300 shadow-md shadow-cyan-400/20 transition-all"
            >
              <Eye className="w-3.5 h-3.5" />
              <span>Resume</span>
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800 focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {isOpen && (
        <div className="md:hidden border-b border-cyan-500/20 bg-slate-950/95 px-4 pt-2 pb-6 space-y-3 font-mono">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `block px-3 py-2 rounded text-sm font-semibold transition-colors ${
                  isActive ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40' : 'text-slate-300 hover:bg-slate-900'
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
          <div className="pt-2 border-t border-slate-800 flex items-center gap-3">
            <button
              onClick={() => {
                setIsOpen(false);
                setIsResumeOpen(true);
              }}
              className="flex items-center justify-center gap-2 w-full px-4 py-2 text-xs font-mono font-bold text-slate-950 bg-cyan-400 rounded-lg shadow-md"
            >
              <Eye className="w-4 h-4" />
              <span>Preview Resume</span>
            </button>
          </div>
        </div>
      )}
      </header>
    </>
  );
};

export default Navbar;
