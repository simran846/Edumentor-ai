import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { careerRolesData } from '../data/mockData';
import { CareerRole } from '../types';
import { 
  Briefcase, 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  AlertCircle, 
  Building2, 
  MapPin, 
  Coins, 
  Plus, 
  ExternalLink,
  Code2,
  FileCheck,
  Send,
  Users,
  Trophy,
  Zap,
  Filter
} from 'lucide-react';

export const CareerPage: React.FC = () => {
  const { setCurrentPage, showToast, triggerAIPrompt } = useApp();
  const [selectedRole, setSelectedRole] = useState<CareerRole>(careerRolesData[0]);
  const [appliedJobs, setAppliedJobs] = useState<Record<string, boolean>>({});

  const roadmapSteps = [
    { step: 1, label: "Learn", icon: <Code2 className="w-5 h-5 text-blue-500" />, desc: "Structured 12-Week AI tracks" },
    { step: 2, label: "Build Projects", icon: <Sparkles className="w-5 h-5 text-indigo-500" />, desc: "Production microservices" },
    { step: 3, label: "Improve Resume", icon: <FileCheck className="w-5 h-5 text-purple-500" />, desc: "ATS 85%+ optimization" },
    { step: 4, label: "Apply", icon: <Send className="w-5 h-5 text-cyan-500" />, desc: "Curated tech internships" },
    { step: 5, label: "Interview", icon: <Users className="w-5 h-5 text-amber-500" />, desc: "AI live mocks & feedback" },
    { step: 6, label: "Get Hired", icon: <Trophy className="w-5 h-5 text-emerald-500" />, desc: "High-paying tech offers" }
  ];

  const handleApply = (companyName: string) => {
    setAppliedJobs({ ...appliedJobs, [companyName]: true });
    showToast(`🎉 Application & ATS Resume sent to ${companyName}! Priority fast-track enabled.`);
  };

  const handleAddSkillToPath = (skillName: string) => {
    showToast(`Added "${skillName}" to your 12-week learning path queue!`);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-12">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-200 dark:border-slate-800">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-brand-50 dark:bg-brand-950/60 border border-brand-200 dark:border-brand-800 text-brand-700 dark:text-brand-300 mb-2">
            <Briefcase className="w-3.5 h-3.5" />
            <span>AI Career Accelerator</span>
          </div>
          <h1 className="font-heading text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
            Turn Your Skills Into a Career
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
            Real-time skill gap analysis, verified tech internships, salary benchmarking, and ATS resume engineering.
          </p>
        </div>

        <button
          onClick={() => setCurrentPage('resume')}
          className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-brand-600 to-indigo-600 hover:from-brand-500 hover:to-indigo-500 text-white font-bold text-xs shadow-md flex items-center gap-2 self-start md:self-auto"
        >
          <FileCheck className="w-4 h-4" />
          <span>Launch ATS Resume Builder</span>
        </button>
      </div>

      {/* 6-Step Career Roadmap Pipeline */}
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

      {/* Role Selection Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
        {careerRolesData.map((role) => (
          <button
            key={role.id}
            onClick={() => setSelectedRole(role)}
            className={`px-5 py-2.5 rounded-2xl text-xs sm:text-sm font-bold transition-all whitespace-nowrap flex items-center gap-2 ${
              selectedRole.id === role.id
                ? 'bg-brand-600 text-white shadow-md shadow-brand-500/20'
                : 'bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
            }`}
          >
            <span>{role.title.split('/')[0]}</span>
            <span className="px-2 py-0.5 rounded-full text-[10px] font-extrabold bg-white/20">
              {role.matchScore}% Match
            </span>
          </button>
        ))}
      </div>

      {/* 2 Columns: Skill Gap Analysis & Verified Internship Matches */}
      <div className="grid lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Col (6): Skill Gap Breakdown */}
        <div className="lg:col-span-6 p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-soft space-y-6">
          <div className="flex items-start justify-between">
            <div>
              <span className="px-3 py-1 rounded-full text-[10px] font-bold bg-brand-50 dark:bg-brand-950/60 text-brand-700 dark:text-brand-300">
                AI Skill Gap Analysis
              </span>
              <h2 className="font-heading text-xl font-extrabold text-slate-900 dark:text-white mt-2">
                {selectedRole.title}
              </h2>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                Avg Starting Compensation: <strong className="text-slate-900 dark:text-white">{selectedRole.averageSalary}</strong> • Growth: <span className="text-emerald-600 dark:text-emerald-400 font-bold">{selectedRole.growthRate}</span>
              </p>
            </div>

            <div className="text-center p-3 rounded-2xl bg-brand-50 dark:bg-brand-950/50 border border-brand-200 dark:border-brand-800">
              <span className="text-[10px] font-bold text-brand-600 dark:text-brand-400 uppercase block">Match Score</span>
              <span className="font-heading text-2xl font-extrabold text-brand-700 dark:text-brand-300">
                {selectedRole.matchScore}%
              </span>
            </div>
          </div>

          {/* Demanded Skills Checklist */}
          <div className="space-y-2.5">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
              Industry Demanded Competencies:
            </h3>
            {selectedRole.demandedSkills.map((sk, idx) => (
              <div 
                key={idx}
                className={`p-3 rounded-2xl border flex items-center justify-between text-xs ${
                  sk.hasSkill
                    ? 'bg-emerald-50/50 dark:bg-emerald-950/20 border-emerald-200 dark:border-emerald-800/40 text-emerald-900 dark:text-emerald-200'
                    : 'bg-amber-50/50 dark:bg-amber-950/20 border-amber-200 dark:border-amber-800/40 text-amber-900 dark:text-amber-200'
                }`}
              >
                <div className="flex items-center gap-2 font-semibold">
                  {sk.hasSkill ? (
                    <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                  ) : (
                    <AlertCircle className="w-4 h-4 text-amber-500" />
                  )}
                  <span>{sk.name}</span>
                </div>

                {sk.hasSkill ? (
                  <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-100 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-400">
                    Verified
                  </span>
                ) : (
                  <button
                    onClick={() => handleAddSkillToPath(sk.name)}
                    className="px-2.5 py-1 rounded-xl bg-amber-500 hover:bg-amber-600 text-white text-[10px] font-bold shadow-xs flex items-center gap-1"
                  >
                    <Plus className="w-3 h-3" />
                    <span>Bridge Gap</span>
                  </button>
                )}
              </div>
            ))}
          </div>

          {/* Recommended Capstone Projects */}
          <div className="pt-4 border-t border-slate-100 dark:border-slate-800 space-y-2">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 flex items-center gap-1.5">
              <Code2 className="w-3.5 h-3.5 text-brand-500" /> Recommended Portfolio Projects:
            </h3>
            <div className="space-y-2">
              {selectedRole.recommendedProjects.map((p, idx) => (
                <div key={idx} className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700 text-xs font-medium text-slate-800 dark:text-slate-200">
                  ⚡ {p}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Col (6): Curated Internship & Entry Roles Matching Student */}
        <div className="lg:col-span-6 p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-soft space-y-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Building2 className="w-5 h-5 text-brand-500" />
              <h2 className="font-heading text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
                Matched Tech Openings & Internships
              </h2>
            </div>
            <span className="text-xs text-brand-600 dark:text-brand-400 font-bold">
              Direct Referral Partner
            </span>
          </div>

          <div className="space-y-4">
            {selectedRole.jobOpenings.map((job, idx) => {
              const hasApplied = !!appliedJobs[job.company];

              return (
                <div 
                  key={idx}
                  className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200/80 dark:border-slate-800 space-y-3"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{job.logo}</span>
                      <div>
                        <h4 className="font-heading text-sm font-bold text-slate-900 dark:text-white">
                          {job.role}
                        </h4>
                        <p className="text-xs font-semibold text-slate-600 dark:text-slate-400">
                          {job.company} • <span className="text-slate-400 font-normal">{job.location}</span>
                        </p>
                      </div>
                    </div>

                    <span className="px-2.5 py-1 rounded-full text-xs font-extrabold bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800">
                      {job.stipendOrSalary}
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-1.5">
                    {job.tags.map((t, i) => (
                      <span key={i} className="px-2 py-0.5 rounded text-[10px] font-semibold bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400">
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="pt-2 flex items-center justify-between">
                    <span className="text-[11px] text-emerald-600 dark:text-emerald-400 font-medium flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5" /> 86% ATS Profile Match
                    </span>

                    <button
                      onClick={() => handleApply(job.company)}
                      disabled={hasApplied}
                      className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
                        hasApplied
                          ? 'bg-emerald-600 text-white'
                          : 'bg-brand-600 hover:bg-brand-500 text-white shadow-xs'
                      }`}
                    >
                      {hasApplied ? (
                        <>
                          <CheckCircle2 className="w-3.5 h-3.5" />
                          <span>Applied ✓</span>
                        </>
                      ) : (
                        <>
                          <span>Apply with AI Resume</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </>
                      )}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          {/* AI Mock Interview Prep banner */}
          <div className="p-4 rounded-2xl bg-gradient-to-r from-purple-500/10 via-brand-500/10 to-indigo-500/10 border border-purple-200 dark:border-purple-800/60 flex items-center justify-between gap-4">
            <div>
              <h4 className="font-heading text-xs font-bold text-slate-900 dark:text-white">
                Preparing for Razorpay / Swiggy Interviews?
              </h4>
              <p className="text-[11px] text-slate-500 dark:text-slate-400">
                Practice 1-on-1 AI technical & behavioral mock sessions.
              </p>
            </div>
            <button
              onClick={() => triggerAIPrompt("Start a 15-minute Backend Developer Mock Interview.")}
              className="px-3.5 py-2 rounded-xl bg-purple-600 hover:bg-purple-500 text-white text-xs font-bold shrink-0 shadow-sm"
            >
              Start AI Mock
            </button>
          </div>

        </div>

      </div>

    </div>
  );
};
