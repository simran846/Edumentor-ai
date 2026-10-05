import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { X, Sparkles, Bot, Lock, Mail, User, GraduationCap, ArrowRight, Check } from 'lucide-react';

export const AuthModal: React.FC = () => {
  const { isAuthModalOpen, closeAuthModal, authMode, setUser, showToast, user } = useApp();
  const [tab, setTab] = useState<'login' | 'signup'>(authMode);
  const [selectedRole, setSelectedRole] = useState<'Student' | 'Job Seeker' | 'Professional'>('Student');
  const [name, setName] = useState('Simran Kaur');
  const [email, setEmail] = useState('simran.k@learn.edu');
  const [password, setPassword] = useState('••••••••');
  const [targetRole, setTargetRole] = useState('Backend Developer');

  if (!isAuthModalOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setUser({
      ...user,
      name: name || 'Simran Kaur',
      email: email || 'simran.k@learn.edu',
      role: selectedRole,
      targetRole: targetRole || 'Backend Developer',
    });
    showToast(`Welcome back, ${name || 'Simran'}! AI Mentor is synced.`);
    closeAuthModal();
  };

  const handleQuickDemoLogin = (roleName: 'Student' | 'Job Seeker') => {
    if (roleName === 'Student') {
      setUser({
        ...user,
        name: 'Simran Kaur',
        email: 'simran.k@learn.edu',
        role: 'Student',
        targetRole: 'Backend Developer',
        streakDays: 14,
        totalHoursLearned: 42.5,
        atsScore: 86
      });
      showToast('Logged in as Simran (Student Profile)');
    } else {
      setUser({
        ...user,
        name: 'Rahul Sharma',
        email: 'rahul.s@tech.io',
        role: 'Job Seeker',
        targetRole: 'Full Stack Engineer',
        streakDays: 22,
        totalHoursLearned: 68.0,
        atsScore: 91
      });
      showToast('Logged in as Rahul (Career Switcher Profile)');
    }
    closeAuthModal();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-md rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xl p-6 sm:p-8 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Background glow */}
        <div className="absolute -right-20 -top-20 w-48 h-48 bg-brand-500/15 rounded-full blur-2xl pointer-events-none" />
        <div className="absolute -left-20 -bottom-20 w-48 h-48 bg-accent-cyan/15 rounded-full blur-2xl pointer-events-none" />

        {/* Close button */}
        <button
          onClick={closeAuthModal}
          className="absolute top-5 right-5 p-2 rounded-xl text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="text-center mb-6">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-gradient-to-tr from-brand-600 to-accent-cyan text-white shadow-lg shadow-brand-500/25 mb-3">
            <Bot className="w-6 h-6" />
          </div>
          <h3 className="font-heading text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
            {tab === 'login' ? 'Welcome Back to EduMentor' : 'Start Your AI Learning Journey'}
          </h3>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
            {tab === 'login' ? 'Sign in to access your adaptive roadmap & streak' : 'Generate your tailored 12-week tech career roadmap'}
          </p>
        </div>

        {/* Quick Demo Login Pill */}
        <div className="mb-5 p-3 rounded-2xl bg-brand-50/80 dark:bg-brand-950/40 border border-brand-200/80 dark:border-brand-800/60">
          <p className="text-[11px] font-bold text-brand-700 dark:text-brand-300 uppercase tracking-wider mb-2 flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5" /> Instant 1-Click Demo Profiles:
          </p>
          <div className="grid grid-cols-2 gap-2">
            <button
              type="button"
              onClick={() => handleQuickDemoLogin('Student')}
              className="px-2.5 py-1.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs font-semibold text-slate-800 dark:text-slate-200 hover:border-brand-500 flex items-center justify-center gap-1.5 shadow-xs"
            >
              <span>Simran (Student)</span>
            </button>
            <button
              type="button"
              onClick={() => handleQuickDemoLogin('Job Seeker')}
              className="px-2.5 py-1.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs font-semibold text-slate-800 dark:text-slate-200 hover:border-brand-500 flex items-center justify-center gap-1.5 shadow-xs"
            >
              <span>Rahul (Job Seeker)</span>
            </button>
          </div>
        </div>

        {/* Tab switch */}
        <div className="flex rounded-xl bg-slate-100 dark:bg-slate-800 p-1 mb-5">
          <button
            type="button"
            onClick={() => setTab('login')}
            className={`flex-1 py-1.5 rounded-lg text-xs font-bold transition-all ${
              tab === 'login' 
                ? 'bg-white dark:bg-slate-900 text-brand-600 dark:text-brand-400 shadow-xs' 
                : 'text-slate-500 dark:text-slate-400 hover:text-slate-900'
            }`}
          >
            Sign In
          </button>
          <button
            type="button"
            onClick={() => setTab('signup')}
            className={`flex-1 py-1.5 rounded-lg text-xs font-bold transition-all ${
              tab === 'signup' 
                ? 'bg-white dark:bg-slate-900 text-brand-600 dark:text-brand-400 shadow-xs' 
                : 'text-slate-500 dark:text-slate-400 hover:text-slate-900'
            }`}
          >
            Create Account
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-3.5">
          {tab === 'signup' && (
            <>
              <div>
                <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1">Your Full Name</label>
                <div className="relative">
                  <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    placeholder="Simran Kaur"
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/70 text-slate-900 dark:text-white text-xs focus:ring-2 focus:ring-brand-500 focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1">Target Career Role</label>
                <select
                  value={targetRole}
                  onChange={(e) => setTargetRole(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/70 text-slate-900 dark:text-white text-xs focus:ring-2 focus:ring-brand-500 focus:outline-none"
                >
                  <option value="Backend Developer">Backend Developer (Node.js/Go)</option>
                  <option value="Full Stack Engineer">Full Stack Engineer (React/Next)</option>
                  <option value="AI & ML Engineer">AI & LLM Application Engineer</option>
                  <option value="Cloud & DevOps Engineer">Cloud & DevOps Engineer</option>
                  <option value="Data Scientist">Data Scientist</option>
                </select>
              </div>
            </>
          )}

          <div>
            <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1">Email Address</label>
            <div className="relative">
              <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="simran.k@learn.edu"
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/70 text-slate-900 dark:text-white text-xs focus:ring-2 focus:ring-brand-500 focus:outline-none"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between mb-1">
              <label className="text-xs font-medium text-slate-700 dark:text-slate-300">Password</label>
              {tab === 'login' && (
                <a href="#forgot" onClick={(e) => { e.preventDefault(); showToast('Password reset link simulated sent!'); }} className="text-[11px] text-brand-600 dark:text-brand-400 hover:underline">
                  Forgot?
                </a>
              )}
            </div>
            <div className="relative">
              <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/70 text-slate-900 dark:text-white text-xs focus:ring-2 focus:ring-brand-500 focus:outline-none"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-3 rounded-xl bg-gradient-to-r from-brand-600 via-brand-500 to-indigo-600 text-white font-bold text-xs sm:text-sm hover:from-brand-500 hover:to-indigo-500 shadow-md shadow-brand-500/25 transition-all flex items-center justify-center gap-2 mt-4"
          >
            <span>{tab === 'login' ? 'Sign In to Dashboard' : 'Create Free Account'}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </form>

        <p className="text-center text-[11px] text-slate-400 dark:text-slate-500 mt-4">
          By continuing, you agree to EduMentor's Terms of Service and Privacy Policy.
        </p>
      </div>
    </div>
  );
};
