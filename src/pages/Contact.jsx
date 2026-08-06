import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import SectionHeading from '../components/common/SectionHeading';
import { Mail, Github, Linkedin, FileText, Send, CheckCircle2, ArrowUpRight, Cpu } from 'lucide-react';
import Card3D from '../components/3d/Card3D';

export const Contact = () => {
  const { personal } = portfolioData;
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    roleType: 'MLE Internship',
    message: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-12 font-sans text-white relative z-10">
      
      {/* Header */}
      <SectionHeading
        eyebrow="Recruiter & Hiring Portal"
        title={`Contact ${personal.name}`}
        description={personal.cta}
      />

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
        
        {/* Direct Contact Cards */}
        <div className="md:col-span-5 space-y-6">
          <Card3D maxTilt={6} className="p-6 space-y-6">
            <span className="font-mono text-xs font-bold text-cyan-400 uppercase tracking-wider block">
              Direct Recruiter Contacts
            </span>

            {/* Email Card */}
            <a
              href={`mailto:${personal.email}`}
              className="flex items-start gap-4 p-4 rounded-lg bg-slate-950/80 border border-slate-800 hover:border-cyan-400 transition-all group"
            >
              <div className="p-2.5 rounded bg-cyan-500/10 border border-cyan-400/30 text-cyan-400 shrink-0 group-hover:bg-cyan-500 group-hover:text-slate-950 transition-colors">
                <Mail className="w-5 h-5" />
              </div>
              <div className="space-y-0.5 overflow-hidden">
                <span className="text-xs font-mono text-slate-400 block">Email Directly</span>
                <span className="text-sm font-mono font-bold text-white truncate block group-hover:text-cyan-300 transition-colors">
                  {personal.email}
                </span>
                <span className="text-[11px] text-cyan-400 font-mono block">Fast response within 24h</span>
              </div>
            </a>

            {/* LinkedIn */}
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-4 rounded-lg bg-slate-950/80 border border-slate-800 hover:border-purple-400 transition-all group"
            >
              <div className="flex items-center gap-3">
                <Linkedin className="w-5 h-5 text-purple-400" />
                <span className="text-sm font-heading font-semibold text-white group-hover:text-purple-300">LinkedIn Profile</span>
              </div>
              <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-purple-300 transition-colors" />
            </a>

            {/* GitHub */}
            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-4 rounded-lg bg-slate-950/80 border border-slate-800 hover:border-cyan-400 transition-all group"
            >
              <div className="flex items-center gap-3">
                <Github className="w-5 h-5 text-cyan-400" />
                <span className="text-sm font-heading font-semibold text-white group-hover:text-cyan-300">GitHub Repositories</span>
              </div>
              <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-cyan-300 transition-colors" />
            </a>

            {/* Resume Download */}
            <a
              href={personal.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-4 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-bold hover:from-cyan-400 hover:to-blue-500 transition-all group shadow-lg shadow-cyan-500/20"
            >
              <div className="flex items-center gap-3">
                <FileText className="w-5 h-5 text-slate-950" />
                <span className="text-sm font-mono">Download Official Resume (PDF)</span>
              </div>
              <ArrowUpRight className="w-4 h-4 text-slate-950" />
            </a>
          </Card3D>

          <div className="p-4 rounded-lg bg-slate-900/80 border border-slate-800 text-xs text-slate-300 font-mono space-y-1">
            <span className="font-bold text-cyan-400 block">Location & Role Availability</span>
            <p>Based in {personal.location}. Open to remote or on-site Machine Learning Engineer internships and entry-level full-time roles globally.</p>
          </div>
        </div>

        {/* Message / Recruiter Inquiry Form */}
        <div className="md:col-span-7">
          <Card3D maxTilt={4} className="p-6 sm:p-8 space-y-6">
            <h3 className="text-xl font-heading font-bold text-white">
              Send Interview Invitation to {personal.name}
            </h3>

            {submitted ? (
              <div className="p-6 rounded-lg bg-cyan-500/10 border border-cyan-500/30 text-center space-y-3 font-mono">
                <CheckCircle2 className="w-10 h-10 text-cyan-400 mx-auto" />
                <h4 className="font-heading font-bold text-lg text-white">Message Sent Successfully</h4>
                <p className="text-xs sm:text-sm text-slate-300 font-sans max-w-md mx-auto">
                  Thank you for reaching out to Yug Sayja. Your message has been dispatched. You can also email directly at <span className="font-bold text-cyan-400">{personal.email}</span>.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-4 py-2 rounded bg-cyan-400 text-slate-950 font-bold text-xs"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-sm font-sans">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="font-mono text-xs font-semibold text-cyan-400 block">Your Name</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Sarah Lin"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded bg-slate-950 border border-slate-800 focus:outline-none focus:border-cyan-400 font-sans text-white"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="font-mono text-xs font-semibold text-cyan-400 block">Work Email</label>
                    <input
                      type="email"
                      required
                      placeholder="s.lin@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded bg-slate-950 border border-slate-800 focus:outline-none focus:border-cyan-400 font-sans text-white"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="font-mono text-xs font-semibold text-cyan-400 block">Company / Organization</label>
                    <input
                      type="text"
                      placeholder="e.g. AI Research Lab / Tech Team"
                      value={formData.organization}
                      onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded bg-slate-950 border border-slate-800 focus:outline-none focus:border-cyan-400 font-sans text-white"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="font-mono text-xs font-semibold text-cyan-400 block">Role Type</label>
                    <select
                      value={formData.roleType}
                      onChange={(e) => setFormData({ ...formData, roleType: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded bg-slate-950 border border-slate-800 focus:outline-none focus:border-cyan-400 font-sans text-white"
                    >
                      <option value="MLE Internship">Machine Learning Internship</option>
                      <option value="Entry-Level MLE">Entry-Level Machine Learning Engineer</option>
                      <option value="Computer Vision Specialist">Computer Vision Engineer</option>
                      <option value="General Inquiry">Technical Discussion</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="font-mono text-xs font-semibold text-cyan-400 block">Message Details</label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Share role details, team scope, or schedule an initial technical discussion..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded bg-slate-950 border border-slate-800 focus:outline-none focus:border-cyan-400 font-sans text-white resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-3 rounded bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-mono text-xs font-bold hover:from-cyan-400 hover:to-blue-500 transition-colors flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/20"
                >
                  <Send className="w-4 h-4 text-slate-950" />
                  <span>Submit Inquiry to Yug Sayja</span>
                </button>
              </form>
            )}
          </Card3D>
        </div>

      </div>

    </div>
  );
};

export default Contact;
