import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import SectionHeading from '../components/common/SectionHeading';
import { Mail, Github, Linkedin, FileText, Send, CheckCircle2, ArrowUpRight, Phone, MapPin } from 'lucide-react';
import Card3D from '../components/3d/Card3D';
import emailjs from '@emailjs/browser';

export const Contact = () => {
  const { personal } = portfolioData;
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    roleType: 'MLE Internship',
    message: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      await emailjs.send(
        'service_rdtcvo1',
        'template_2b58na7',
        {
          from_name: formData.name,
          reply_to: formData.email,
          organization: formData.organization,
          role_type: formData.roleType,
          message: formData.message,
          to_name: personal.name,
        },
        '7pF7VGslKCXyt8eVJ'
      );
      setSubmitted(true);
    } catch (err) {
      console.error('Failed to send email:', err);
      setError('Failed to send message. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-12 font-sans text-white relative z-10">
      
      {/* Header */}
      <SectionHeading
        eyebrow="Hiring & Interview Portal"
        title={`Contact ${personal.name}`}
        description={personal.cta}
      />

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
        
        {/* Direct Contact Cards */}
        <div className="md:col-span-5 space-y-6">
          <Card3D maxTilt={6} className="p-6 space-y-6">
            <span className="font-mono text-xs font-bold text-cyan-400 uppercase tracking-wider block">
              Direct Contact Information
            </span>

            {/* Phone Card */}
            <a
              href={`tel:${personal.phone}`}
              className="flex items-start gap-4 p-4 rounded-lg bg-slate-950/80 border border-slate-800 hover:border-cyan-400 transition-all group"
            >
              <div className="p-2.5 rounded bg-cyan-500/10 border border-cyan-400/30 text-cyan-400 shrink-0 group-hover:bg-cyan-500 group-hover:text-slate-950 transition-colors">
                <Phone className="w-5 h-5" />
              </div>
              <div className="space-y-0.5 overflow-hidden">
                <span className="text-xs font-mono text-slate-400 block">Phone / WhatsApp</span>
                <span className="text-sm font-mono font-bold text-white truncate block group-hover:text-cyan-300 transition-colors">
                  {personal.phone}
                </span>
              </div>
            </a>

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
                <span className="text-sm font-mono">Download Resume (PDF)</span>
              </div>
              <ArrowUpRight className="w-4 h-4 text-slate-950" />
            </a>
          </Card3D>

          <div className="p-4 rounded-lg bg-slate-900/80 border border-slate-800 text-xs text-slate-300 font-mono space-y-1">
            <span className="font-bold text-cyan-400 flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5 text-cyan-400" />
              Location & Availability
            </span>
            <p>Based in {personal.location}. Open to Machine Learning Engineer internships, software development, and AI agent roles.</p>
          </div>
        </div>

        {/* Message / Recruiter Inquiry Form */}
        <div className="md:col-span-7">
          <Card3D maxTilt={4} className="p-6 sm:p-8 space-y-6">
            <h3 className="text-xl font-heading font-bold text-white">
              Send Message to {personal.name}
            </h3>

            {submitted ? (
              <div className="p-6 rounded-lg bg-cyan-500/10 border border-cyan-500/30 text-center space-y-3 font-mono">
                <CheckCircle2 className="w-10 h-10 text-cyan-400 mx-auto" />
                <h4 className="font-heading font-bold text-lg text-white">Message Sent Successfully</h4>
                <p className="text-xs sm:text-sm text-slate-300 font-sans max-w-md mx-auto">
                  Thank you for reaching out. You can also contact Yug directly at <span className="font-bold text-cyan-400">{personal.email}</span> or <span className="font-bold text-cyan-400">{personal.phone}</span>.
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
                      placeholder="e.g. Recruiter Name"
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
                      placeholder="name@company.com"
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
                      placeholder="Company Name"
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
                      <option value="AI Engineer">AI Engineer / Agent Development</option>
                      <option value="Software Developer">Software Engineer</option>
                      <option value="General Inquiry">Technical Discussion</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="font-mono text-xs font-semibold text-cyan-400 block">Message Details</label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Share role details or schedule a technical discussion..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded bg-slate-950 border border-slate-800 focus:outline-none focus:border-cyan-400 font-sans text-white resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 rounded bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-mono text-xs font-bold hover:from-cyan-400 hover:to-blue-500 transition-colors flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/20 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Send className="w-4 h-4 text-slate-950" />
                  <span>{isSubmitting ? 'Sending...' : 'Submit Inquiry to Yug Sayja'}</span>
                </button>
                {error && (
                  <p className="text-red-400 text-xs font-mono text-center mt-2">{error}</p>
                )}
              </form>
            )}
          </Card3D>
        </div>

      </div>

    </div>
  );
};

export default Contact;
