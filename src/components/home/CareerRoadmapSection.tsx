import React from 'react';
import { useApp } from '../../context/AppContext';
import { 
  Briefcase, 
  Sparkles, 
  ArrowRight, 
  Code, 
  FileCheck, 
  Send, 
  Users, 
  Trophy, 
  CheckCircle2, 
  AlertCircle,
  ExternalLink
} from 'lucide-react';

export const CareerRoadmapSection: React.FC = () => {
  const { setCurrentPage, triggerAIPrompt } = useApp();

  const roadmapSteps = [
    { step: 1, label: "Learn", icon: <Code className="w-5 h-5 text-blue-500" />, desc: "Structured 12-Week AI tracks" },
    { step: 2, label: "Build Projects", icon: <Sparkles className="w-5 h-5 text-indigo-500" />, desc: "Production-grade microservices" },
    { step: 3, label: "Improve Resume", icon: <FileCheck className="w-5 h-5 text-purple-500" />, desc: "ATS 85%+ score optimization" },
    { step: 4, label: "Apply", icon: <Send className="w-5 h-5 text-cyan-500" />, desc: "Curated tech internship matches" },
    { step: 5, label: "Interview", icon: <Users className="w-5 h-5 text-amber-500" />, desc: "AI behavioral & live coding mocks" },
    { step: 6, label: "Get Hired", icon: <Trophy className="w-5 h-5 text-emerald-500" />, desc: "High-paying tech career offers" }
  ];

  return (
    <section className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-brand-50 dark:bg-brand-950/60 border border-brand-200 dark:border-brand-800 text-brand-700 dark:text-brand-300 mb-3">
            <Briefcase className="w-3.5 h-3.5" />
            <span>End-to-End Career Acceleration</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Turn Your Skills Into a Career
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-400">
            We bridge the gap between college curricula and high-paying engineering careers through algorithmic skill gap analysis and automated ATS resume polishing.
          </p>
        </div>

        {/* 6-Step Visual Career Roadmap Strip */}
        <div className="mb-16">
          <div className="p-6 sm:p-8 rounded-3xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 shadow-soft">
            <h3 className="font-heading text-xs font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500 text-center mb-8">
              The 6-Step Career Journey Pipeline
            </h3>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 relative">
              {roadmapSteps.map((s, idx) => (
                <div key={s.step} className="relative flex flex-col items-center text-center group">
                  <div className="w-14 h-14 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-md flex items-center justify-center mb-3 group-hover:scale-110 group-hover:border-brand-500 transition-all">
                    {s.icon}
                  </div>
                  
                  <div className="flex items-center gap-1.5 mb-1">
                    <span className="text-[10px] font-extrabold text-brand-600 dark:text-brand-400">0{s.step}.</span>
                    <h4 className="font-heading text-sm font-bold text-slate-900 dark:text-white">
                      {s.label}
                    </h4>
                  </div>
                  
                  <p className="text-[11px] text-slate-500 dark:text-slate-400 max-w-[130px]">
                    {s.desc}
                  </p>

                  {idx < roadmapSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-7 -right-3 text-slate-300 dark:text-slate-700">
                      →
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 2-Column Showcase: Skill Gap Analysis & ATS Resume Optimization */}
        <div className="grid lg:grid-cols-2 gap-8">
          
          {/* Card 1: Skill Gap Analysis */}
          <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-soft flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800">
                  Target: Junior Backend Engineer @ Razorpay
                </span>
                <span className="font-heading text-lg font-extrabold text-emerald-600 dark:text-emerald-400">
                  84% Match
                </span>
              </div>

              <h3 className="font-heading text-xl font-bold text-slate-900 dark:text-white">
                AI Skill Gap Analysis
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-2">
                Our AI scans verified job postings at high-growth tech companies and calculates your precise skill readiness:
              </p>

              {/* Skills Checklist */}
              <div className="mt-5 space-y-2.5">
                <div className="flex items-center justify-between p-2.5 rounded-xl bg-emerald-50/60 dark:bg-emerald-950/20 border border-emerald-200 dark:border-emerald-800/40 text-xs">
                  <span className="flex items-center gap-2 font-semibold text-emerald-800 dark:text-emerald-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                    Node.js & Express Architecture
                  </span>
                  <span className="text-[10px] font-bold text-emerald-600 dark:text-emerald-400">Mastered</span>
                </div>

                <div className="flex items-center justify-between p-2.5 rounded-xl bg-emerald-50/60 dark:bg-emerald-950/20 border border-emerald-200 dark:border-emerald-800/40 text-xs">
                  <span className="flex items-center gap-2 font-semibold text-emerald-800 dark:text-emerald-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                    PostgreSQL Indexing & Transactions
                  </span>
                  <span className="text-[10px] font-bold text-emerald-600 dark:text-emerald-400">Mastered</span>
                </div>

                <div className="flex items-center justify-between p-2.5 rounded-xl bg-amber-50/60 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-800/40 text-xs">
                  <span className="flex items-center gap-2 font-semibold text-amber-800 dark:text-amber-300">
                    <AlertCircle className="w-4 h-4 text-amber-500" />
                    Redis Caching & Pub/Sub
                  </span>
                  <span className="text-[10px] font-bold text-amber-600 dark:text-amber-400">Missing Gap (+8%)</span>
                </div>

                <div className="flex items-center justify-between p-2.5 rounded-xl bg-amber-50/60 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-800/40 text-xs">
                  <span className="flex items-center gap-2 font-semibold text-amber-800 dark:text-amber-300">
                    <AlertCircle className="w-4 h-4 text-amber-500" />
                    Docker Containerization Basics
                  </span>
                  <span className="text-[10px] font-bold text-amber-600 dark:text-amber-400">Missing Gap (+8%)</span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800">
              <button
                onClick={() => setCurrentPage('career')}
                className="w-full py-3 rounded-xl bg-brand-50 dark:bg-slate-800 hover:bg-brand-600 hover:text-white dark:hover:bg-brand-600 dark:hover:text-white text-brand-600 dark:text-brand-400 text-xs font-bold transition-all flex items-center justify-center gap-2"
              >
                <span>Run Skill Gap on My Profile</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Card 2: Resume Optimization & ATS Meter */}
          <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-soft flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-purple-50 dark:bg-purple-950/60 text-purple-700 dark:text-purple-300 border border-purple-200 dark:border-purple-800">
                  ATS Scanner: Pass Rate 92%
                </span>
                <span className="font-heading text-lg font-extrabold text-brand-600 dark:text-brand-400">
                  86 / 100
                </span>
              </div>

              <h3 className="font-heading text-xl font-bold text-slate-900 dark:text-white">
                AI Resume Bullet Point Optimizer
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-2">
                Convert generic student project bullets into high-impact, quantified achievement statements:
              </p>

              {/* Before / After comparison */}
              <div className="mt-5 space-y-3">
                <div className="p-3 rounded-xl bg-red-50/50 dark:bg-red-950/20 border border-red-200 dark:border-red-900/40 text-xs">
                  <span className="text-[10px] font-bold text-red-600 dark:text-red-400 uppercase tracking-wider block mb-1">
                    ❌ Before (Generic Draft):
                  </span>
                  <p className="text-slate-600 dark:text-slate-300 italic">
                    "Created an API for user authentication and made database faster."
                  </p>
                </div>

                <div className="p-3 rounded-xl bg-emerald-50/50 dark:bg-emerald-950/20 border border-emerald-200 dark:border-emerald-900/40 text-xs">
                  <span className="text-[10px] font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider block mb-1">
                    ✨ After (EduMentor AI Polish):
                  </span>
                  <p className="text-slate-800 dark:text-slate-200 font-medium">
                    "Engineered JWT authentication with refresh token rotation and PostgreSQL B-Tree indexing, reducing query response latency by 38% under 500 req/min load."
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800">
              <button
                onClick={() => setCurrentPage('resume')}
                className="w-full py-3 rounded-xl bg-gradient-to-r from-brand-600 to-indigo-600 text-white hover:from-brand-500 hover:to-indigo-500 text-xs font-bold shadow-md shadow-brand-500/20 transition-all flex items-center justify-center gap-2"
              >
                <span>Launch Interactive Resume Builder</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
