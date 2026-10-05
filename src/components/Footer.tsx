import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { NavPage } from '../types';
import { 
  Sparkles, 
  Send, 
  Globe, 
  Share2, 
  Code, 
  CheckCircle2, 
  Shield, 
  Heart,
  ArrowRight
} from 'lucide-react';

export const Footer: React.FC = () => {
  const { setCurrentPage, showToast } = useApp();
  const [emailInput, setEmailInput] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!emailInput || !emailInput.includes('@')) {
      showToast('Please enter a valid student or institutional email');
      return;
    }
    setSubscribed(true);
    showToast('🎉 Subscribed to EduMentor AI Weekly Learning Digest!');
    setEmailInput('');
  };

  const navigateTo = (page: NavPage) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-slate-200/90 dark:border-slate-800/90 bg-slate-50 dark:bg-slate-950 text-slate-600 dark:text-slate-400 transition-colors duration-200">
      {/* Top newsletter banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-b border-slate-200 dark:border-slate-800/80">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-brand-600 via-brand-700 to-indigo-800 p-8 sm:p-12 text-white shadow-xl shadow-brand-500/10">
          <div className="absolute -right-16 -top-16 w-64 h-64 bg-accent-cyan/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -left-16 -bottom-16 w-64 h-64 bg-accent-purple/30 rounded-full blur-3xl pointer-events-none" />
          
          <div className="relative z-10 grid lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-white/15 backdrop-blur-md text-white border border-white/20 mb-3">
                <Sparkles className="w-3.5 h-3.5 text-accent-cyan" />
                <span>Weekly AI Career & Learning Digest</span>
              </div>
              <h3 className="font-heading text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                Get Personalized Tech Insights & Internships in Your Inbox
              </h3>
              <p className="mt-2 text-brand-100 text-sm max-w-xl">
                Join 10,000+ engineers receiving curated roadmap tips, mock interview questions, and priority early-bird internship listings.
              </p>
            </div>

            <div className="lg:col-span-5">
              {subscribed ? (
                <div className="flex items-center gap-2 p-4 bg-emerald-500/20 border border-emerald-400/40 rounded-2xl text-emerald-100 text-sm font-medium">
                  <CheckCircle2 className="w-5 h-5 text-emerald-300 shrink-0" />
                  <span>You're all set! Check your inbox for this week's AI roadmap guide.</span>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2.5">
                  <input
                    type="email"
                    value={emailInput}
                    onChange={(e) => setEmailInput(e.target.value)}
                    placeholder="Enter your student email..."
                    className="flex-1 px-4 py-3 rounded-xl bg-white/10 dark:bg-slate-900/60 border border-white/20 text-white placeholder-brand-200 text-sm focus:outline-none focus:ring-2 focus:ring-accent-cyan/60 backdrop-blur-md"
                    required
                  />
                  <button
                    type="submit"
                    className="px-6 py-3 rounded-xl bg-white text-brand-700 hover:bg-brand-50 text-sm font-bold shadow-lg transition-all flex items-center justify-center gap-2 group shrink-0"
                  >
                    <span>Subscribe</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Main footer grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 lg:gap-12">
          
          {/* Brand Col */}
          <div className="col-span-2">
            <button 
              onClick={() => navigateTo('home')}
              className="flex items-center gap-2.5 text-left group mb-4"
            >
              <div className="flex items-center justify-center w-9 h-9 rounded-xl bg-gradient-to-tr from-brand-600 to-accent-cyan text-white shadow-md">
                <Sparkles className="w-4 h-4" />
              </div>
              <span className="font-heading text-xl font-bold text-slate-900 dark:text-white">
                EduMentor <span className="text-gradient">AI</span>
              </span>
            </button>
            <p className="text-sm text-slate-600 dark:text-slate-400 mb-6 leading-relaxed max-w-sm">
              Empowering students to learn, grow, and build their dream tech careers with personalized 24/7 AI mentorship, adaptive quizzes, and ATS resume engineering.
            </p>
            <div className="flex items-center gap-3 text-slate-400 dark:text-slate-500">
              <a href="#" className="p-2 rounded-lg bg-slate-100 dark:bg-slate-900 hover:text-brand-500 transition-colors" aria-label="Website"><Globe className="w-4 h-4" /></a>
              <a href="#" className="p-2 rounded-lg bg-slate-100 dark:bg-slate-900 hover:text-brand-500 transition-colors" aria-label="Social"><Share2 className="w-4 h-4" /></a>
              <a href="#" className="p-2 rounded-lg bg-slate-100 dark:bg-slate-900 hover:text-brand-500 transition-colors" aria-label="Code"><Code className="w-4 h-4" /></a>
            </div>
          </div>

          {/* Col 1: Product */}
          <div>
            <h4 className="font-heading text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white mb-4">
              Product & Features
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button onClick={() => navigateTo('mentor')} className="hover:text-brand-500 transition-colors">
                  AI Personal Mentor
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('paths')} className="hover:text-brand-500 transition-colors">
                  Personalized Learning Paths
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('quizzes')} className="hover:text-brand-500 transition-colors">
                  Adaptive Smart Quizzes
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('dashboard')} className="hover:text-brand-500 transition-colors">
                  Student Dashboard
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('resume')} className="hover:text-brand-500 transition-colors">
                  ATS Resume Builder
                </button>
              </li>
            </ul>
          </div>

          {/* Col 2: Learning Tracks */}
          <div>
            <h4 className="font-heading text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white mb-4">
              Popular Tracks
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button onClick={() => navigateTo('paths')} className="hover:text-brand-500 transition-colors">
                  Backend (Node.js & Postgres)
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('paths')} className="hover:text-brand-500 transition-colors">
                  Full Stack React & Next.js
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('paths')} className="hover:text-brand-500 transition-colors">
                  AI & LLM Engineering
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('paths')} className="hover:text-brand-500 transition-colors">
                  Cloud & DevOps (Docker/K8s)
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('paths')} className="hover:text-brand-500 transition-colors">
                  Competitive Programming
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Company & Institution */}
          <div>
            <h4 className="font-heading text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white mb-4">
              Company
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button onClick={() => navigateTo('about')} className="hover:text-brand-500 transition-colors">
                  About Us & Story
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('pricing')} className="hover:text-brand-500 transition-colors">
                  Pricing Plans
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('pricing')} className="hover:text-brand-500 transition-colors">
                  For Colleges & Universities
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('career')} className="hover:text-brand-500 transition-colors">
                  Hiring & Careers
                </button>
              </li>
              <li>
                <button onClick={() => showToast('🔒 SOC2 Type II & GDPR Compliant Privacy Policy')} className="hover:text-brand-500 transition-colors">
                  Privacy Policy & Terms
                </button>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-slate-200 dark:border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 dark:text-slate-500">
          <p>© 2026 EduMentor AI Inc. All rights reserved. Built with precision for the next generation of engineers.</p>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400 font-medium">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              AI Mentor 2.4 Operational
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Shield className="w-3.5 h-3.5" /> 256-Bit SSL Encrypted
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
