import React from 'react';
import { platformStats } from '../../data/mockData';
import { ShieldCheck, Award, Building2, Sparkles, GraduationCap } from 'lucide-react';

export const TrustSection: React.FC = () => {
  const alumniCompanies = [
    { name: "Google", logo: "Google" },
    { name: "Microsoft", logo: "Microsoft" },
    { name: "Amazon AWS", logo: "AWS" },
    { name: "Razorpay", logo: "Razorpay" },
    { name: "Swiggy", logo: "Swiggy" },
    { name: "Zerodha", logo: "Zerodha" },
  ];

  return (
    <section className="py-14 border-y border-slate-200/80 dark:border-slate-800/80 bg-white/60 dark:bg-slate-900/40 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-xl mx-auto mb-10">
          <p className="text-xs sm:text-sm font-bold uppercase tracking-widest text-brand-600 dark:text-brand-400 mb-1">
            Built for the next generation of learners
          </p>
          <h3 className="font-heading text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white">
            Trusted by Students Across 120+ Premier Colleges
          </h3>
        </div>

        {/* 4 Core Statistics */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12">
          {platformStats.map((stat, idx) => (
            <div 
              key={idx}
              className="p-6 rounded-2xl bg-slate-50/80 dark:bg-slate-950/60 border border-slate-200/80 dark:border-slate-800/80 text-center hover:border-brand-500/50 hover:shadow-soft transition-all"
            >
              <p className="font-heading text-3xl sm:text-4xl font-extrabold text-gradient mb-1">
                {stat.value}
              </p>
              <h4 className="font-heading text-sm font-bold text-slate-800 dark:text-slate-200">
                {stat.label}
              </h4>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                {stat.sub}
              </p>
            </div>
          ))}
        </div>

        {/* Company Alumni Strip */}
        <div className="pt-6 border-t border-slate-200/60 dark:border-slate-800/60 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 dark:text-slate-400">
            <GraduationCap className="w-4 h-4 text-brand-500" />
            <span>EduMentor students interview & intern at:</span>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 opacity-75 grayscale hover:grayscale-0 transition-all duration-300">
            {alumniCompanies.map((c, i) => (
              <span key={i} className="text-xs sm:text-sm font-extrabold tracking-wider text-slate-700 dark:text-slate-300">
                {c.name}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
