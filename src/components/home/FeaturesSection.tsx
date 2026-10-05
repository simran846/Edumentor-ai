import React from 'react';
import { useApp } from '../../context/AppContext';
import { NavPage } from '../../types';
import { 
  Bot, 
  Compass, 
  Award, 
  TrendingUp, 
  Briefcase, 
  FileText, 
  BellRing, 
  HelpCircle,
  ArrowRight,
  Sparkles
} from 'lucide-react';

export const FeaturesSection: React.FC = () => {
  const { setCurrentPage, triggerAIPrompt } = useApp();

  const features: {
    id: number;
    title: string;
    description: string;
    icon: React.ReactNode;
    color: string;
    bgHover: string;
    badge: string;
    targetPage: NavPage;
    actionPrompt?: string;
  }[] = [
    {
      id: 1,
      title: "AI Personal Mentor",
      description: "AI-powered assistance available 24/7 with deep context on your learning velocity and code.",
      icon: <Bot className="w-6 h-6 text-brand-600 dark:text-brand-400" />,
      color: "border-brand-200 dark:border-brand-800/80",
      bgHover: "group-hover:bg-brand-500/10",
      badge: "24/7 ACTIVE",
      targetPage: "mentor",
      actionPrompt: "I want to become a backend developer."
    },
    {
      id: 2,
      title: "Personalized Learning Paths",
      description: "Generate adaptive learning plans based on your target role, background skills, and timeline.",
      icon: <Compass className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />,
      color: "border-indigo-200 dark:border-indigo-800/80",
      bgHover: "group-hover:bg-indigo-500/10",
      badge: "DYNAMIC 12-WEEK",
      targetPage: "paths"
    },
    {
      id: 3,
      title: "Smart Quizzes",
      description: "AI-generated quizzes that continuously adapt question difficulty to your real-time knowledge gaps.",
      icon: <Award className="w-6 h-6 text-accent-emerald dark:text-emerald-400" />,
      color: "border-emerald-200 dark:border-emerald-800/80",
      bgHover: "group-hover:bg-emerald-500/10",
      badge: "ADAPTIVE",
      targetPage: "quizzes"
    },
    {
      id: 4,
      title: "Progress Tracking",
      description: "Track lessons completed, skills acquired, weekly streaks, and learning consistency heatmaps.",
      icon: <TrendingUp className="w-6 h-6 text-accent-cyan dark:text-cyan-400" />,
      color: "border-cyan-200 dark:border-cyan-800/80",
      bgHover: "group-hover:bg-cyan-500/10",
      badge: "HEATMAP & XP",
      targetPage: "dashboard"
    },
    {
      id: 5,
      title: "Career Guidance",
      description: "Get data-driven career recommendations and skill gap analysis tailored to tech hiring standards.",
      icon: <Briefcase className="w-6 h-6 text-accent-purple dark:text-purple-400" />,
      color: "border-purple-200 dark:border-purple-800/80",
      bgHover: "group-hover:bg-purple-500/10",
      badge: "SALARY BENCHMARKS",
      targetPage: "career"
    },
    {
      id: 6,
      title: "Resume Builder",
      description: "Create ATS-friendly resumes and receive AI bullet optimizations to stand out to tech recruiters.",
      icon: <FileText className="w-6 h-6 text-pink-600 dark:text-pink-400" />,
      color: "border-pink-200 dark:border-pink-800/80",
      bgHover: "group-hover:bg-pink-500/10",
      badge: "ATS SCORE METER",
      targetPage: "resume"
    },
    {
      id: 7,
      title: "Daily Learning Reminders",
      description: "Stay consistent with personalized smart nudges, daily micro-goals, and streak rewards.",
      icon: <BellRing className="w-6 h-6 text-amber-600 dark:text-amber-400" />,
      color: "border-amber-200 dark:border-amber-800/80",
      bgHover: "group-hover:bg-amber-500/10",
      badge: "HABIT BUILDER",
      targetPage: "dashboard"
    },
    {
      id: 8,
      title: "AI Study Assistant",
      description: "Ask deep questions, summarize complex engineering papers, and get difficult concepts explained simply.",
      icon: <HelpCircle className="w-6 h-6 text-accent-teal dark:text-teal-400" />,
      color: "border-teal-200 dark:border-teal-800/80",
      bgHover: "group-hover:bg-teal-500/10",
      badge: "INSTANT CLARITY",
      targetPage: "mentor",
      actionPrompt: "Explain REST API vs GraphQL simply."
    }
  ];

  return (
    <section className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-brand-50 dark:bg-brand-950/60 border border-brand-200 dark:border-brand-800 text-brand-700 dark:text-brand-300 mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Complete EdTech Engine</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Everything You Need to Learn Better
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-400 font-normal">
            Designed to replace fragmented YouTube tutorials and disjointed roadmaps with one coherent, AI-guided ecosystem.
          </p>
        </div>

        {/* 8 Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feat) => (
            <div
              key={feat.id}
              onClick={() => {
                if (feat.actionPrompt) {
                  triggerAIPrompt(feat.actionPrompt);
                } else {
                  setCurrentPage(feat.targetPage);
                }
              }}
              className={`group relative p-6 rounded-3xl bg-white dark:bg-slate-900 border ${feat.color} shadow-soft hover:shadow-soft-lg hover:-translate-y-1.5 transition-all duration-300 cursor-pointer flex flex-col justify-between`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-3 rounded-2xl bg-slate-50 dark:bg-slate-800 ${feat.bgHover} transition-colors duration-200`}>
                    {feat.icon}
                  </div>
                  <span className="text-[10px] font-extrabold tracking-wider px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                    {feat.badge}
                  </span>
                </div>

                <h3 className="font-heading text-lg font-bold text-slate-900 dark:text-white group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors">
                  {feat.id}. {feat.title}
                </h3>
                
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-2 leading-relaxed">
                  {feat.description}
                </p>
              </div>

              <div className="pt-6 mt-4 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between text-xs font-bold text-brand-600 dark:text-brand-400 group-hover:translate-x-1 transition-transform">
                <span>Try Feature</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
