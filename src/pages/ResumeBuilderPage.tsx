import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { 
  FileText, 
  Sparkles, 
  Download, 
  Printer, 
  CheckCircle2, 
  Plus, 
  Trash2, 
  Wand2, 
  Bot, 
  Mail, 
  Phone, 
  MapPin, 
  Globe,
  Code,
  AlertCircle
} from 'lucide-react';

export const ResumeBuilderPage: React.FC = () => {
  const { resumeData, setResumeData, user, showToast } = useApp();
  const [activeTab, setActiveTab] = useState<'editor' | 'preview'>('editor');
  const [atsScore, setAtsScore] = useState<number>(user.atsScore || 86);
  const [isPolishing, setIsPolishing] = useState<boolean>(false);

  const handleAIAutoPolish = () => {
    setIsPolishing(true);
    setTimeout(() => {
      setResumeData({
        ...resumeData,
        summary: "High-performing Software Engineering student specializing in scalable Node.js backend architectures, PostgreSQL database indexing, and distributed microservices. Proven track record of reducing API latencies by 38% under high load.",
        skills: [...resumeData.skills, "Redis (Caching)", "Docker (Multi-stage)"]
      });
      setAtsScore(94);
      setIsPolishing(false);
      showToast('✨ AI Polish Applied! ATS Score increased from 86 to 94!');
    }, 900);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-8">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-200 dark:border-slate-800">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-brand-50 dark:bg-brand-950/60 border border-brand-200 dark:border-brand-800 text-brand-700 dark:text-brand-300 mb-2">
            <FileText className="w-3.5 h-3.5" />
            <span>ATS Resume Engineering Studio</span>
          </div>
          <h1 className="font-heading text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
            AI Resume Builder & Optimizer
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
            Engineered with strict ATS formatting standards to pass recruiter filtering systems at tier-1 tech firms.
          </p>
        </div>

        <div className="flex items-center gap-2.5">
          <button
            onClick={handleAIAutoPolish}
            disabled={isPolishing}
            className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-purple-600 to-brand-600 hover:from-purple-500 hover:to-brand-500 text-white font-bold text-xs shadow-md flex items-center gap-2 transition-all"
          >
            <Wand2 className="w-4 h-4 animate-spin-slow" />
            <span>{isPolishing ? 'Analyzing Keywords...' : 'AI Auto-Polish Resume'}</span>
          </button>

          <button
            onClick={handlePrint}
            className="px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-200 font-bold text-xs flex items-center gap-2"
          >
            <Printer className="w-4 h-4" />
            <span>Print / PDF</span>
          </button>
        </div>
      </div>

      {/* 2-Column Editor + Live ATS Resume Preview */}
      <div className="grid lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Column (6): Form Editor */}
        <div className="lg:col-span-6 space-y-6">
          
          {/* ATS Score Card */}
          <div className="p-5 rounded-3xl bg-gradient-to-r from-brand-50 to-purple-50 dark:from-slate-900 dark:to-brand-950/40 border border-brand-200 dark:border-brand-800 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center w-12 h-12 rounded-2xl bg-brand-600 text-white font-heading text-lg font-extrabold shadow-md">
                {atsScore}
              </div>
              <div>
                <h4 className="font-heading text-sm font-bold text-slate-900 dark:text-white">
                  ATS Optimization Score
                </h4>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  {atsScore >= 90 ? '🔥 Exceptional keyword match for Backend Roles' : '⚠️ Missing Redis & Docker keywords'}
                </p>
              </div>
            </div>

            <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-emerald-100 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-400">
              {atsScore >= 90 ? '94% Recruiter Pass Rate' : '86% Recruiter Pass Rate'}
            </span>
          </div>

          {/* Personal Info Box */}
          <div className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-soft space-y-4">
            <h3 className="font-heading text-sm font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
              Personal Information
            </h3>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-[11px] font-semibold text-slate-600 dark:text-slate-400 mb-1">Full Name</label>
                <input
                  type="text"
                  value={resumeData.fullName}
                  onChange={(e) => setResumeData({ ...resumeData, fullName: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-xs focus:ring-2 focus:ring-brand-500 focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-[11px] font-semibold text-slate-600 dark:text-slate-400 mb-1">Professional Title</label>
                <input
                  type="text"
                  value={resumeData.title}
                  onChange={(e) => setResumeData({ ...resumeData, title: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-xs focus:ring-2 focus:ring-brand-500 focus:outline-none"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-[11px] font-semibold text-slate-600 dark:text-slate-400 mb-1">Email</label>
                <input
                  type="text"
                  value={resumeData.email}
                  onChange={(e) => setResumeData({ ...resumeData, email: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-xs focus:ring-2 focus:ring-brand-500 focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-[11px] font-semibold text-slate-600 dark:text-slate-400 mb-1">Phone</label>
                <input
                  type="text"
                  value={resumeData.phone}
                  onChange={(e) => setResumeData({ ...resumeData, phone: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-xs focus:ring-2 focus:ring-brand-500 focus:outline-none"
                />
              </div>
            </div>

            <div>
              <label className="block text-[11px] font-semibold text-slate-600 dark:text-slate-400 mb-1">Professional Summary</label>
              <textarea
                rows={3}
                value={resumeData.summary}
                onChange={(e) => setResumeData({ ...resumeData, summary: e.target.value })}
                className="w-full p-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-xs focus:ring-2 focus:ring-brand-500 focus:outline-none"
              />
            </div>
          </div>

          {/* Technical Skills Box */}
          <div className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-soft space-y-3">
            <h3 className="font-heading text-sm font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
              Technical Keywords & Skills
            </h3>
            <div className="flex flex-wrap gap-1.5">
              {resumeData.skills.map((sk, idx) => (
                <span key={idx} className="px-2.5 py-1 rounded-lg text-xs font-semibold bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200">
                  {sk}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* Right Column (6): Live ATS Document Preview */}
        <div className="lg:col-span-6 sticky top-24">
          <div className="p-8 rounded-3xl bg-white text-slate-900 border border-slate-300 shadow-2xl space-y-6 font-sans text-xs">
            
            {/* Resume Header */}
            <div className="text-center border-b border-slate-200 pb-4 space-y-1">
              <h2 className="font-heading text-2xl font-extrabold tracking-tight text-slate-900">
                {resumeData.fullName}
              </h2>
              <p className="text-xs font-semibold text-brand-700">
                {resumeData.title}
              </p>
              <div className="flex flex-wrap justify-center items-center gap-3 text-[11px] text-slate-600 pt-1">
                <span>{resumeData.email}</span>
                <span>•</span>
                <span>{resumeData.phone}</span>
                <span>•</span>
                <span>{resumeData.location}</span>
                <span>•</span>
                <span>{resumeData.linkedin}</span>
              </div>
            </div>

            {/* Resume Summary */}
            <div>
              <h3 className="font-heading text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-200 pb-1 mb-2">
                Professional Summary
              </h3>
              <p className="text-[11px] text-slate-700 leading-relaxed">
                {resumeData.summary}
              </p>
            </div>

            {/* Resume Skills */}
            <div>
              <h3 className="font-heading text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-200 pb-1 mb-2">
                Technical Skills
              </h3>
              <p className="text-[11px] text-slate-700 leading-relaxed font-mono">
                {resumeData.skills.join(', ')}
              </p>
            </div>

            {/* Resume Experience */}
            <div>
              <h3 className="font-heading text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-200 pb-1 mb-2">
                Experience & Apprenticeships
              </h3>
              <div className="space-y-3">
                {resumeData.experiences.map((exp) => (
                  <div key={exp.id} className="space-y-1">
                    <div className="flex justify-between font-bold text-[11px] text-slate-900">
                      <span>{exp.role} — {exp.company}</span>
                      <span className="text-slate-500 font-normal">{exp.period}</span>
                    </div>
                    <ul className="list-disc list-inside space-y-1 text-[11px] text-slate-700">
                      {exp.bullets.map((b, bIdx) => (
                        <li key={bIdx} className="leading-snug">{b}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Resume Projects */}
            <div>
              <h3 className="font-heading text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-200 pb-1 mb-2">
                Key Technical Projects
              </h3>
              <div className="space-y-2">
                {resumeData.projects.map((proj) => (
                  <div key={proj.id} className="space-y-0.5">
                    <div className="flex justify-between font-bold text-[11px] text-slate-900">
                      <span>{proj.title}</span>
                      <span className="text-slate-500 font-normal">{proj.tech}</span>
                    </div>
                    <p className="text-[11px] text-slate-700 leading-snug">
                      {proj.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Resume Education */}
            <div>
              <h3 className="font-heading text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-200 pb-1 mb-2">
                Education
              </h3>
              {resumeData.education.map((edu, idx) => (
                <div key={idx} className="flex justify-between text-[11px]">
                  <span className="font-bold text-slate-900">{edu.degree}, {edu.institution}</span>
                  <span className="text-slate-600 font-semibold">{edu.gpa} ({edu.year})</span>
                </div>
              ))}
            </div>

          </div>
        </div>

      </div>

    </div>
  );
};
