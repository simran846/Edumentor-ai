import React from 'react';
import { Sparkles, Bot, GraduationCap, Target, ShieldCheck, Heart, Award, ArrowRight } from 'lucide-react';
import { useApp } from '../context/AppContext';

export const AboutPage: React.FC = () => {
  const { setCurrentPage } = useApp();

  const team = [
    {
      name: "Dr. Ananya Roy",
      role: "Co-Founder & Chief AI Officer",
      bio: "Former AI Researcher at Stanford NLP Lab. PhD in Adaptive Learning Models.",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80"
    },
    {
      name: "Vikram Malhotra",
      role: "Co-Founder & CEO",
      bio: "Ex-Engineering Director at Razorpay. Passionate about democratizing engineering education.",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80"
    },
    {
      name: "Karan Singhal",
      role: "Head of Learning Architecture",
      bio: "Ex-Google Senior Staff Engineer. Created curricula used by 50,000+ developers.",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      
      {/* Hero */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-brand-50 dark:bg-brand-950/60 border border-brand-200 dark:border-brand-800 text-brand-700 dark:text-brand-300">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Our Vision & Mission</span>
        </div>
        <h1 className="font-heading text-4xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          Democratizing 1-on-1 AI Mentorship for Every Student
        </h1>
        <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed font-normal">
          Traditional higher education leaves a massive gap between university theory and high-growth startup engineering standards. EduMentor AI exists to bridge that chasm through hyper-personalized, 24/7 intelligent mentorship.
        </p>
      </div>

      {/* 3 Core Pillars */}
      <div className="grid md:grid-cols-3 gap-8">
        <div className="p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-soft">
          <div className="p-3.5 rounded-2xl bg-brand-500/10 text-brand-600 dark:text-brand-400 w-fit mb-4">
            <Bot className="w-6 h-6" />
          </div>
          <h3 className="font-heading text-lg font-bold text-slate-900 dark:text-white mb-2">
            Adaptive Personalization
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
            No two students learn alike. Our AI calculates your knowledge gaps in real-time, tailoring 12-week roadmaps dynamically to your pace.
          </p>
        </div>

        <div className="p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-soft">
          <div className="p-3.5 rounded-2xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 w-fit mb-4">
            <Target className="w-6 h-6" />
          </div>
          <h3 className="font-heading text-lg font-bold text-slate-900 dark:text-white mb-2">
            Job-First Engineering Rigor
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
            We focus on production competencies—concurrency, SQL indexing, middleware, and system design—ensuring immediate industry readiness.
          </p>
        </div>

        <div className="p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-soft">
          <div className="p-3.5 rounded-2xl bg-purple-500/10 text-purple-600 dark:text-purple-400 w-fit mb-4">
            <GraduationCap className="w-6 h-6" />
          </div>
          <h3 className="font-heading text-lg font-bold text-slate-900 dark:text-white mb-2">
            Equal Career Opportunity
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
            Whether you study at an elite tier-1 institute or a tier-3 regional college, EduMentor provides the same world-class AI mentoring power.
          </p>
        </div>
      </div>

      {/* Team */}
      <div className="space-y-8">
        <div className="text-center max-w-xl mx-auto">
          <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
            Built by Engineers & Educators
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
            Backed by leading founders and advisors across Silicon Valley and Bengaluru.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {team.map((m, idx) => (
            <div key={idx} className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-soft text-center space-y-3">
              <img
                src={m.avatar}
                alt={m.name}
                className="w-20 h-20 rounded-full mx-auto object-cover ring-4 ring-brand-500/20"
              />
              <h4 className="font-heading text-base font-bold text-slate-900 dark:text-white">
                {m.name}
              </h4>
              <p className="text-xs font-semibold text-brand-600 dark:text-brand-400">
                {m.role}
              </p>
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                {m.bio}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Box */}
      <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-brand-600 to-indigo-700 text-white text-center shadow-xl space-y-4">
        <h3 className="font-heading text-2xl sm:text-3xl font-extrabold">
          Ready to Accelerate Your Career?
        </h3>
        <p className="text-sm text-brand-100 max-w-lg mx-auto">
          Join 10,000+ students mastering backend, AI, and full-stack engineering today.
        </p>
        <button
          onClick={() => setCurrentPage('mentor')}
          className="px-8 py-3.5 rounded-2xl bg-white text-brand-700 font-bold text-sm shadow-lg hover:bg-brand-50 transition-all inline-flex items-center gap-2"
        >
          <span>Start Learning Free</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>

    </div>
  );
};
