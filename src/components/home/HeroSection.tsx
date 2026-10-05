import React from 'react';
import { useApp } from '../../context/AppContext';
import { 
  Sparkles, 
  ArrowRight, 
  Bot, 
  CheckCircle2, 
  Flame, 
  TrendingUp, 
  PlayCircle, 
  Code2, 
  ShieldCheck, 
  Star,
  Zap
} from 'lucide-react';

export const HeroSection: React.FC = () => {
  const { setCurrentPage, triggerAIPrompt } = useApp();

  return (
    <section className="relative overflow-hidden pt-12 pb-20 lg:pt-20 lg:pb-28 hero-gradient">
      {/* Background Decorative Blobs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[450px] bg-gradient-to-tr from-brand-500/10 via-accent-purple/10 to-accent-cyan/10 blur-3xl rounded-full pointer-events-none" />
      <div className="absolute top-20 right-10 w-72 h-72 bg-accent-cyan/10 rounded-full blur-3xl pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Hero Copy */}
          <div className="lg:col-span-6 text-center lg:text-left space-y-6">
            
            {/* Top Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-brand-50 dark:bg-brand-950/70 border border-brand-200 dark:border-brand-800/80 text-brand-700 dark:text-brand-300 shadow-xs">
              <span className="flex h-2 w-2 rounded-full bg-brand-600 dark:bg-brand-400 animate-ping" />
              <Sparkles className="w-3.5 h-3.5 text-brand-600 dark:text-brand-400" />
              <span>Next-Gen AI Mentor 2.0 is Live</span>
            </div>

            {/* Headline */}
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-[1.12]">
              Learn Smarter.{' '}
              <span className="text-gradient block sm:inline">Build Your Future.</span>
            </h1>

            {/* Subheading */}
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              Your personal AI mentor that creates personalized learning paths, tracks your progress, prepares you for exams, and guides your career journey.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-2">
              <button
                onClick={() => triggerAIPrompt("I want to become a backend developer.")}
                className="w-full sm:w-auto px-7 py-3.5 rounded-2xl bg-gradient-to-r from-brand-600 via-brand-500 to-indigo-600 hover:from-brand-500 hover:to-indigo-500 text-white font-bold text-sm sm:text-base shadow-lg shadow-brand-500/25 hover:shadow-brand-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2.5 group"
              >
                <span>Start Learning Free</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => setCurrentPage('paths')}
                className="w-full sm:w-auto px-6 py-3.5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-brand-500 text-slate-800 dark:text-slate-200 hover:text-brand-600 dark:hover:text-brand-400 font-semibold text-sm sm:text-base transition-all flex items-center justify-center gap-2 shadow-xs"
              >
                <span>Explore Learning Paths</span>
              </button>
            </div>

            {/* Trust Highlights */}
            <div className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-y-2 gap-x-6 text-xs font-medium text-slate-500 dark:text-slate-400">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                <span>No Credit Card Required</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                <span>Adaptive 12-Week Roadmaps</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                <span>ATS Resume Analyzer Included</span>
              </div>
            </div>

          </div>

          {/* Right Column: High-End Live Student Dashboard Visual */}
          <div className="lg:col-span-6 relative">
            
            {/* Main Interactive Glass Card */}
            <div className="relative rounded-3xl p-5 sm:p-7 glass-panel shadow-2xl transition-all hover:shadow-glow-primary duration-300">
              
              {/* Header inside mockup */}
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-200/80 dark:border-slate-800/80">
                <div className="flex items-center gap-3">
                  <img
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80"
                    alt="Simran"
                    className="w-10 h-10 rounded-full ring-2 ring-brand-500/50 object-cover"
                  />
                  <div>
                    <div className="flex items-center gap-1.5">
                      <span className="font-heading text-sm font-bold text-slate-900 dark:text-white">Simran Kaur</span>
                      <span className="px-1.5 py-0.2 rounded text-[9px] font-bold bg-emerald-100 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-400">
                        ACTIVE
                      </span>
                    </div>
                    <span className="text-[11px] text-slate-500 dark:text-slate-400">Target: Backend Engineer</span>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <span className="flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-bold bg-amber-50 dark:bg-amber-950/60 border border-amber-200 dark:border-amber-800/60 text-amber-700 dark:text-amber-400">
                    <Flame className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
                    14d Streak
                  </span>
                </div>
              </div>

              {/* AI Live Recommendation Pill */}
              <div className="mb-4 p-3.5 rounded-2xl bg-gradient-to-r from-brand-500/10 via-accent-purple/10 to-accent-cyan/10 border border-brand-200/80 dark:border-brand-800/80">
                <div className="flex items-start gap-2.5">
                  <div className="p-1.5 rounded-lg bg-brand-600 text-white shrink-0 mt-0.5">
                    <Bot className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <div className="flex items-center gap-1.5 mb-0.5">
                      <span className="text-xs font-bold text-brand-800 dark:text-brand-300">AI Daily Recommendation</span>
                      <span className="text-[10px] text-brand-600 dark:text-brand-400 font-medium">• 15 min task</span>
                    </div>
                    <p className="text-xs text-slate-700 dark:text-slate-300 leading-snug">
                      "Complete <strong>Building REST APIs with Express</strong> module to bridge your Razorpay skill gap by +14%."
                    </p>
                  </div>
                </div>
              </div>

              {/* Active Course Card */}
              <div className="p-4 rounded-2xl bg-slate-50/90 dark:bg-slate-900/90 border border-slate-200/80 dark:border-slate-800/80 mb-4">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <div className="p-2 rounded-xl bg-blue-100 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400">
                      <Code2 className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white">
                        Backend Development with Node.js
                      </h4>
                      <p className="text-[11px] text-slate-500 dark:text-slate-400">
                        Current: Week 4 • Express Middleware Pipeline
                      </p>
                    </div>
                  </div>
                  <span className="text-xs font-extrabold text-brand-600 dark:text-brand-400">68%</span>
                </div>

                {/* Progress Bar */}
                <div className="w-full bg-slate-200 dark:bg-slate-800 h-2 rounded-full overflow-hidden">
                  <div className="bg-gradient-to-r from-brand-600 via-brand-500 to-accent-cyan h-2 rounded-full w-[68%]" />
                </div>
              </div>

              {/* Bottom Quick Metric Pills */}
              <div className="grid grid-cols-3 gap-2.5">
                <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/70 dark:border-slate-800/70 text-center">
                  <span className="text-[10px] font-medium text-slate-500 dark:text-slate-400 block">Hours Learned</span>
                  <span className="font-heading text-sm font-bold text-slate-900 dark:text-white">42.5 hrs</span>
                </div>
                <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/70 dark:border-slate-800/70 text-center">
                  <span className="text-[10px] font-medium text-slate-500 dark:text-slate-400 block">Quiz Accuracy</span>
                  <span className="font-heading text-sm font-bold text-emerald-600 dark:text-emerald-400">88% Avg</span>
                </div>
                <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/70 dark:border-slate-800/70 text-center">
                  <span className="text-[10px] font-medium text-slate-500 dark:text-slate-400 block">ATS Score</span>
                  <span className="font-heading text-sm font-bold text-brand-600 dark:text-brand-400">86 / 100</span>
                </div>
              </div>

            </div>

            {/* Floating Badge Left */}
            <div className="absolute -bottom-5 -left-4 sm:-left-6 p-3 rounded-2xl glass-dropdown shadow-xl border border-slate-200 dark:border-slate-800 flex items-center gap-3 animate-float">
              <div className="p-2 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                <TrendingUp className="w-5 h-5" />
              </div>
              <div>
                <p className="text-[10px] text-slate-500 dark:text-slate-400 font-medium">Placement Readiness</p>
                <p className="text-xs font-extrabold text-slate-900 dark:text-white">Top 5% of Batch</p>
              </div>
            </div>

            {/* Floating Badge Right */}
            <div className="absolute -top-4 -right-2 sm:-right-4 p-3 rounded-2xl glass-dropdown shadow-xl border border-slate-200 dark:border-slate-800 flex items-center gap-2.5">
              <div className="p-2 rounded-xl bg-brand-500/10 text-brand-600 dark:text-brand-400">
                <Sparkles className="w-4 h-4" />
              </div>
              <div>
                <p className="text-[10px] text-slate-500 dark:text-slate-400 font-medium">AI Feedback</p>
                <p className="text-xs font-bold text-slate-900 dark:text-white">Ready for Razorpay Mock</p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
