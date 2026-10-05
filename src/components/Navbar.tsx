import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { NavPage } from '../types';
import { 
  Sparkles, 
  Flame, 
  Moon, 
  Sun, 
  Menu, 
  X, 
  GraduationCap, 
  Bot, 
  Compass, 
  BookOpen, 
  FileText, 
  Briefcase, 
  Award, 
  CreditCard, 
  Info,
  ChevronDown,
  User,
  LogOut,
  Zap
} from 'lucide-react';

export const Navbar: React.FC = () => {
  const { 
    currentPage, 
    setCurrentPage, 
    darkMode, 
    toggleDarkMode, 
    user, 
    openAuthModal,
    showToast 
  } = useApp();
  
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [userDropdownOpen, setUserDropdownOpen] = useState(false);

  const navItems: { id: NavPage; label: string; icon: React.ReactNode; badge?: string }[] = [
    { id: 'home', label: 'Home', icon: <GraduationCap className="w-4 h-4" /> },
    { id: 'paths', label: 'Learning Paths', icon: <Compass className="w-4 h-4" /> },
    { id: 'mentor', label: 'AI Mentor', icon: <Bot className="w-4 h-4" />, badge: 'AI 2.0' },
    { id: 'dashboard', label: 'Dashboard', icon: <Zap className="w-4 h-4" /> },
    { id: 'quizzes', label: 'Smart Quizzes', icon: <Award className="w-4 h-4" /> },
    { id: 'career', label: 'Career', icon: <Briefcase className="w-4 h-4" /> },
    { id: 'resume', label: 'Resume AI', icon: <FileText className="w-4 h-4" />, badge: 'ATS' },
    { id: 'pricing', label: 'Pricing', icon: <CreditCard className="w-4 h-4" /> },
    { id: 'about', label: 'About', icon: <Info className="w-4 h-4" /> },
  ];

  const handleNavClick = (page: NavPage) => {
    setCurrentPage(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200/80 dark:border-slate-800/80 bg-white/80 dark:bg-slate-950/80 backdrop-blur-md transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          
          {/* Logo */}
          <button 
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3 group focus:outline-none text-left"
          >
            <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-tr from-brand-600 via-brand-500 to-accent-cyan text-white shadow-md shadow-brand-500/20 group-hover:scale-105 transition-transform duration-200">
              <Sparkles className="w-5 h-5 animate-pulse" />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-accent-emerald rounded-full border-2 border-white dark:border-slate-900 animate-ping opacity-75" />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-accent-emerald rounded-full border-2 border-white dark:border-slate-900" />
            </div>
            <div>
              <span className="font-heading text-xl font-bold tracking-tight text-slate-900 dark:text-white flex items-center gap-1.5">
                EduMentor <span className="text-gradient font-extrabold">AI</span>
              </span>
              <span className="text-[10px] text-slate-500 dark:text-slate-400 font-medium tracking-wide uppercase block -mt-1">
                Personal AI Mentor
              </span>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navItems.slice(0, 7).map((item) => {
              const isActive = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`relative px-3 py-2 rounded-lg text-xs xl:text-sm font-medium transition-all duration-150 flex items-center gap-1.5 ${
                    isActive 
                      ? 'text-brand-600 dark:text-brand-400 bg-brand-50/80 dark:bg-brand-950/50 font-semibold shadow-xs'
                      : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100/70 dark:hover:bg-slate-800/60'
                  }`}
                >
                  {item.label}
                  {item.badge && (
                    <span className="px-1.5 py-0.2 rounded-full text-[9px] font-bold bg-brand-100 dark:bg-brand-900/80 text-brand-700 dark:text-brand-300 tracking-wider">
                      {item.badge}
                    </span>
                  )}
                  {isActive && (
                    <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-brand-600 dark:bg-brand-400 rounded-full" />
                  )}
                </button>
              );
            })}

            {/* More Dropdown (Pricing, About) */}
            <div className="relative group">
              <button className="px-2.5 py-2 rounded-lg text-xs xl:text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100/70 dark:hover:bg-slate-800/60 flex items-center gap-1">
                More <ChevronDown className="w-3.5 h-3.5 text-slate-400 group-hover:rotate-180 transition-transform duration-200" />
              </button>
              <div className="absolute right-0 mt-1 w-44 rounded-xl shadow-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 py-1 hidden group-hover:block transition-all z-50">
                <button
                  onClick={() => handleNavClick('pricing')}
                  className="w-full text-left px-4 py-2 text-xs xl:text-sm text-slate-700 dark:text-slate-200 hover:bg-brand-50 dark:hover:bg-slate-800 flex items-center gap-2"
                >
                  <CreditCard className="w-4 h-4 text-brand-500" /> Pricing Plans
                </button>
                <button
                  onClick={() => handleNavClick('about')}
                  className="w-full text-left px-4 py-2 text-xs xl:text-sm text-slate-700 dark:text-slate-200 hover:bg-brand-50 dark:hover:bg-slate-800 flex items-center gap-2"
                >
                  <Info className="w-4 h-4 text-accent-cyan" /> About EduMentor
                </button>
              </div>
            </div>
          </nav>

          {/* Right Action Bar */}
          <div className="flex items-center gap-2.5 sm:gap-3">
            
            {/* Streak Counter Badge */}
            <button
              onClick={() => {
                handleNavClick('dashboard');
                showToast(`🔥 Fantastic! You are on a ${user.streakDays}-day learning streak!`);
              }}
              title="Current Daily Learning Streak"
              className="hidden sm:flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-950/40 dark:to-orange-950/40 border border-amber-200 dark:border-amber-800 text-amber-700 dark:text-amber-300 hover:scale-105 transition-transform"
            >
              <Flame className="w-3.5 h-3.5 fill-amber-500 text-amber-500 animate-bounce" />
              <span>{user.streakDays}d Streak</span>
            </button>

            {/* Dark Mode Toggle */}
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors focus:outline-none"
              title={darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
              aria-label="Toggle Theme"
            >
              {darkMode ? (
                <Sun className="w-4 h-4 text-amber-400 hover:rotate-45 transition-transform" />
              ) : (
                <Moon className="w-4 h-4 text-slate-600 hover:-rotate-12 transition-transform" />
              )}
            </button>

            {/* Student Profile / Login Dropdown */}
            <div className="relative">
              <button
                onClick={() => setUserDropdownOpen(!userDropdownOpen)}
                className="flex items-center gap-2 p-1.5 sm:px-3 sm:py-1.5 rounded-full border border-slate-200 dark:border-slate-800 hover:border-brand-400 dark:hover:border-brand-500 bg-slate-50 dark:bg-slate-900 transition-all focus:outline-none"
              >
                <img
                  src={user.avatar}
                  alt={user.name}
                  className="w-7 h-7 rounded-full object-cover ring-2 ring-brand-500/30"
                />
                <span className="hidden md:inline text-xs font-semibold text-slate-800 dark:text-slate-200">
                  {user.name.split(' ')[0]} 👋
                </span>
                <ChevronDown className="hidden md:inline w-3 h-3 text-slate-400" />
              </button>

              {userDropdownOpen && (
                <div 
                  className="absolute right-0 mt-2 w-56 rounded-2xl shadow-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-2 z-50 animate-in fade-in slide-in-from-top-2 duration-150"
                  onMouseLeave={() => setUserDropdownOpen(false)}
                >
                  <div className="px-3 py-2.5 border-b border-slate-100 dark:border-slate-800 mb-1">
                    <p className="text-xs font-bold text-slate-900 dark:text-white">{user.name}</p>
                    <p className="text-[11px] text-slate-500 dark:text-slate-400 truncate">{user.email}</p>
                    <div className="mt-1 flex items-center gap-1.5">
                      <span className="px-2 py-0.5 rounded-full text-[9px] font-semibold bg-brand-100 dark:bg-brand-900/60 text-brand-700 dark:text-brand-300">
                        {user.role}
                      </span>
                      <span className="text-[10px] text-slate-400 font-medium">
                        Target: {user.targetRole}
                      </span>
                    </div>
                  </div>

                  <button
                    onClick={() => {
                      handleNavClick('dashboard');
                      setUserDropdownOpen(false);
                    }}
                    className="w-full text-left px-3 py-2 text-xs font-medium text-slate-700 dark:text-slate-200 hover:bg-brand-50 dark:hover:bg-slate-800 rounded-lg flex items-center gap-2"
                  >
                    <Zap className="w-3.5 h-3.5 text-brand-500" /> Student Dashboard
                  </button>

                  <button
                    onClick={() => {
                      handleNavClick('resume');
                      setUserDropdownOpen(false);
                    }}
                    className="w-full text-left px-3 py-2 text-xs font-medium text-slate-700 dark:text-slate-200 hover:bg-brand-50 dark:hover:bg-slate-800 rounded-lg flex items-center gap-2"
                  >
                    <FileText className="w-3.5 h-3.5 text-purple-500" /> My Resume ({user.atsScore}% ATS)
                  </button>

                  <div className="my-1 border-t border-slate-100 dark:border-slate-800" />

                  <button
                    onClick={() => {
                      setUserDropdownOpen(false);
                      openAuthModal('login');
                    }}
                    className="w-full text-left px-3 py-2 text-xs font-medium text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg flex items-center gap-2"
                  >
                    <User className="w-3.5 h-3.5 text-slate-400" /> Switch Profile / Account
                  </button>
                </div>
              )}
            </div>

            {/* CTA Get Started button */}
            <button
              onClick={() => handleNavClick('mentor')}
              className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-brand-600 via-brand-500 to-indigo-600 hover:from-brand-500 hover:to-indigo-500 shadow-md shadow-brand-500/25 hover:shadow-brand-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all"
            >
              <Bot className="w-3.5 h-3.5" />
              <span>Get Started</span>
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              aria-label="Open Mobile Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 px-4 pt-2 pb-6 space-y-2 shadow-2xl animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="grid grid-cols-2 gap-2 pb-2">
            {navItems.map((item) => {
              const isActive = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`flex items-center gap-2 px-3 py-2.5 rounded-xl text-xs font-medium text-left ${
                    isActive
                      ? 'bg-brand-50 dark:bg-brand-950/60 text-brand-600 dark:text-brand-300 font-bold border border-brand-200 dark:border-brand-800'
                      : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-900'
                  }`}
                >
                  {item.icon}
                  <span className="truncate">{item.label}</span>
                </button>
              );
            })}
          </div>

          <div className="pt-2 border-t border-slate-100 dark:border-slate-800 flex flex-col gap-2">
            <button
              onClick={() => handleNavClick('mentor')}
              className="w-full py-2.5 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-brand-600 to-indigo-600 flex items-center justify-center gap-2 shadow-md"
            >
              <Bot className="w-4 h-4" /> Start AI Learning Free
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                openAuthModal('login');
              }}
              className="w-full py-2 rounded-xl text-xs font-semibold text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-900"
            >
              Login / Sign Up
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
