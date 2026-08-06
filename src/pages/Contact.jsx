import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import SectionHeading from '../components/common/SectionHeading';
import { Mail, Github, Linkedin, FileText, Send, CheckCircle2, ArrowUpRight } from 'lucide-react';

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
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-12 font-sans">
      
      {/* Header */}
      <SectionHeading
        eyebrow="Recruiter & Hiring Portal"
        title="Contact & Schedule Interview"
        description={personal.cta}
      />

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
        
        {/* Direct Contact Cards */}
        <div className="md:col-span-5 space-y-6">
          <div className="bg-bg-card border border-border rounded-xl p-6 space-y-6 shadow-sm">
            <span className="font-mono text-xs font-semibold text-accent uppercase tracking-wider block">
              Direct Contact Options
            </span>

            {/* Email Card */}
            <a
              href={`mailto:${personal.email}`}
              className="flex items-start gap-4 p-4 rounded-lg bg-bg-subtle border border-border hover:border-dark-subtle transition-all group"
            >
              <div className="p-2.5 rounded bg-primary text-white font-mono shrink-0 group-hover:bg-accent transition-colors">
                <Mail className="w-5 h-5 text-accent group-hover:text-white" />
              </div>
              <div className="space-y-0.5 overflow-hidden">
                <span className="text-xs font-mono text-dark-subtle block">Email Directly</span>
                <span className="text-sm font-mono font-bold text-dark truncate block group-hover:text-primary transition-colors">
                  {personal.email}
                </span>
                <span className="text-[11px] text-accent font-mono block">Responds within 24 hours</span>
              </div>
            </a>

            {/* LinkedIn */}
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-4 rounded-lg bg-bg-subtle border border-border hover:border-dark-subtle transition-all group"
            >
              <div className="flex items-center gap-3">
                <Linkedin className="w-5 h-5 text-primary" />
                <span className="text-sm font-heading font-semibold text-dark">LinkedIn Profile</span>
              </div>
              <ArrowUpRight className="w-4 h-4 text-dark-subtle group-hover:text-dark transition-colors" />
            </a>

            {/* GitHub */}
            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-4 rounded-lg bg-bg-subtle border border-border hover:border-dark-subtle transition-all group"
            >
              <div className="flex items-center gap-3">
                <Github className="w-5 h-5 text-dark" />
                <span className="text-sm font-heading font-semibold text-dark">GitHub Repositories</span>
              </div>
              <ArrowUpRight className="w-4 h-4 text-dark-subtle group-hover:text-dark transition-colors" />
            </a>

            {/* Resume Download */}
            <a
              href={personal.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-4 rounded-lg bg-primary text-white hover:bg-primary-hover transition-all group"
            >
              <div className="flex items-center gap-3">
                <FileText className="w-5 h-5 text-accent" />
                <span className="text-sm font-heading font-semibold">Download Official Resume (PDF)</span>
              </div>
              <ArrowUpRight className="w-4 h-4 text-white/80" />
            </a>
          </div>

          <div className="p-4 rounded-lg bg-bg-subtle border border-border text-xs text-dark-muted space-y-1">
            <span className="font-mono font-bold text-dark block">Location & Availability</span>
            <p>Based in India. Available for remote or on-site Machine Learning Engineer internships and entry-level full-time roles.</p>
          </div>
        </div>

        {/* Message / Recruiter Inquiry Form */}
        <div className="md:col-span-7">
          <div className="bg-bg-card border border-border rounded-xl p-6 sm:p-8 space-y-6 shadow-sm">
            <h3 className="text-xl font-heading font-bold text-dark">
              Send an Interview Invitation or Inquiry
            </h3>

            {submitted ? (
              <div className="p-6 rounded-lg bg-accent-light border border-accent/30 text-center space-y-3">
                <CheckCircle2 className="w-10 h-10 text-accent mx-auto" />
                <h4 className="font-heading font-bold text-lg text-dark">Message Sent Successfully</h4>
                <p className="text-xs sm:text-sm text-dark-muted font-sans max-w-md mx-auto">
                  Thank you for reaching out. I will review your message and reply promptly. You can also email me directly at <span className="font-mono font-bold">{personal.email}</span>.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-4 py-2 rounded bg-primary text-white font-mono text-xs font-semibold"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-sm font-sans">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="font-mono text-xs font-semibold text-dark block">Your Name</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Sarah Lin"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded bg-bg-subtle border border-border focus:outline-none focus:border-accent font-sans text-dark"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="font-mono text-xs font-semibold text-dark block">Work Email</label>
                    <input
                      type="email"
                      required
                      placeholder="s.lin@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded bg-bg-subtle border border-border focus:outline-none focus:border-accent font-sans text-dark"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="font-mono text-xs font-semibold text-dark block">Company / Organization</label>
                    <input
                      type="text"
                      placeholder="e.g. AI Research Lab / Startup"
                      value={formData.organization}
                      onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded bg-bg-subtle border border-border focus:outline-none focus:border-accent font-sans text-dark"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="font-mono text-xs font-semibold text-dark block">Role Type</label>
                    <select
                      value={formData.roleType}
                      onChange={(e) => setFormData({ ...formData, roleType: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded bg-bg-subtle border border-border focus:outline-none focus:border-accent font-sans text-dark"
                    >
                      <option value="MLE Internship">Machine Learning Internship</option>
                      <option value="Entry-Level MLE">Entry-Level Machine Learning Engineer</option>
                      <option value="Computer Vision Specialist">Computer Vision Engineer</option>
                      <option value="General Inquiry">General Technical Discussion</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="font-mono text-xs font-semibold text-dark block">Message Details</label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Share role details, team scope, or schedule an initial technical discussion..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded bg-bg-subtle border border-border focus:outline-none focus:border-accent font-sans text-dark resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-3 rounded bg-primary text-white font-mono text-xs font-bold hover:bg-primary-hover transition-colors flex items-center justify-center gap-2 shadow-sm"
                >
                  <Send className="w-4 h-4 text-accent" />
                  <span>Submit Inquiry</span>
                </button>
              </form>
            )}
          </div>
        </div>

      </div>

    </div>
  );
};

export default Contact;
