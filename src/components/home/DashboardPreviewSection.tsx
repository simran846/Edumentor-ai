import React from 'react';
import { useApp } from '../../context/AppContext';
import { 
  Flame, 
  Clock, 
  Award, 
  Sparkles, 
  PlayCircle, 
  CheckCircle2, 
  ArrowRight, 
  BookOpen, 
  Code2, 
  Calendar,
  Layers,
  ChevronRight,
  Zap,
  Target
} from 'lucide-react';

export const DashboardPreviewSection: React.FC = () => {
  const { setCurrentPage, user, showToast } = useApp();

  const daysOfWeek = [
    { day: 'Mon', active: true, hrs: '2.5h' },
    { day: 'Tue', active: true, hrs: '3.0h' },
    { day: 'Wed', active: true, hrs: '1.5h' },
    { day: 'Thu', active: true, hrs: '4.0h' },
    { day: 'Fri', active: true, hrs: '2.0h' },
    { day: 'Sat', active: true, hrs: '3.5h' },
    { day: 'Sun', active: true, hrs: '1.0h' }
  ];

  const upcomingGoals = [
    { id: 'g1', text: 'Build JWT Refresh Token Rotation Middleware', completed: true, tag: 'Backend' },
    { id: 'g2', text: 'Pass Adaptive Quiz: HTTP Status Codes (80%+)', completed: false, tag: 'Quiz' },
    { id: 'g3', text: 'Review Docker Multi-Stage Build Tutorial', completed: false, tag: 'DevOps' }
  ];

  const recommendedResources = [
    { title: 'Designing High-Throughput REST APIs', type: 'AI Deep Dive', duration: '12 min' },
    { title: 'PostgreSQL B-Tree vs Hash Indexing Under Load', type: 'Interactive Kata', duration: '20 min' },
    { title: 'How Razorpay Handles 5,000 Webhook Ingestions/sec', type: 'Case Study', duration: '15 min' }
  ];

  return (
    <section className="py-20 bg-slate-50/80 dark:bg-slate-900/50 border-y border-slate-200/80 dark:border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-brand-50 dark:bg-brand-950/60 border border-brand-200 dark:border-brand-800 text-brand-700 dark:text-brand-300 mb-3">
            <Zap className="w-3.5 h-3.5" />
            <span>Unified Command Center</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Your Personalized Learning Dashboard
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-slate-400">
            Real-time analytics, automated streak accountability, next-lesson recommendations, and skill mastery heatmaps.
          </p>
        </div>

        {/* Dashboard Frame */}
        <div className="rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xl p-6 sm:p-8 lg:p-10 space-y-8">
          
          {/* Top Welcome Bar */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-100 dark:border-slate-800">
            <div>
              <div className="flex items-center gap-3">
                <h3 className="font-heading text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
                  Good morning, {user.name.split(' ')[0]} 👋
                </h3>
                <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-brand-50 dark:bg-brand-950/60 text-brand-600 dark:text-brand-400 border border-brand-200 dark:border-brand-800">
                  Target: {user.targetRole}
                </span>
              </div>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
                You're on track to complete your 12-week backend milestone 4 days ahead of schedule!
              </p>
            </div>

            <button
              onClick={() => setCurrentPage('dashboard')}
              className="px-5 py-2.5 rounded-xl bg-brand-600 hover:bg-brand-500 text-white text-xs sm:text-sm font-bold shadow-md shadow-brand-500/20 flex items-center gap-2 self-start md:self-auto"
            >
              <span>Open Full Dashboard</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Core Metrics Ribbon */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            
            <div className="p-4 sm:p-5 rounded-2xl bg-amber-50/70 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800/60 flex items-center gap-4">
              <div className="p-3 rounded-xl bg-amber-500 text-white shadow-md">
                <Flame className="w-5 h-5 fill-white" />
              </div>
              <div>
                <p className="text-xs text-amber-700 dark:text-amber-300 font-semibold">Weekly Streak</p>
                <p className="font-heading text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white">
                  {user.streakDays} Days 🔥
                </p>
              </div>
            </div>

            <div className="p-4 sm:p-5 rounded-2xl bg-blue-50/70 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-800/60 flex items-center gap-4">
              <div className="p-3 rounded-xl bg-blue-500 text-white shadow-md">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs text-blue-700 dark:text-blue-300 font-semibold">Hours Learned</p>
                <p className="font-heading text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white">
                  {user.totalHoursLearned} hrs
                </p>
              </div>
            </div>

            <div className="p-4 sm:p-5 rounded-2xl bg-emerald-50/70 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800/60 flex items-center gap-4">
              <div className="p-3 rounded-xl bg-emerald-500 text-white shadow-md">
                <Award className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs text-emerald-700 dark:text-emerald-300 font-semibold">Quiz Performance</p>
                <p className="font-heading text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white">
                  {user.averageQuizScore}% Avg
                </p>
              </div>
            </div>

            <div className="p-4 sm:p-5 rounded-2xl bg-purple-50/70 dark:bg-purple-950/30 border border-purple-200 dark:border-purple-800/60 flex items-center gap-4">
              <div className="p-3 rounded-xl bg-purple-500 text-white shadow-md">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs text-purple-700 dark:text-purple-300 font-semibold">Skills Gained</p>
                <p className="font-heading text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white">
                  {user.skillsGained} Verified
                </p>
              </div>
            </div>

          </div>

          {/* Continue Learning Feature Box */}
          <div className="rounded-2xl p-6 sm:p-8 bg-gradient-to-r from-brand-600 via-indigo-600 to-slate-900 text-white shadow-xl relative overflow-hidden">
            <div className="absolute right-0 top-0 w-96 h-96 bg-accent-cyan/10 rounded-full blur-3xl pointer-events-none" />
            
            <div className="relative z-10 grid lg:grid-cols-12 gap-6 items-center">
              
              <div className="lg:col-span-8 space-y-3">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-white/15 backdrop-blur-md text-white border border-white/20">
                  <PlayCircle className="w-3.5 h-3.5 text-accent-cyan" />
                  <span>Continue Learning</span>
                </div>

                <h4 className="font-heading text-xl sm:text-2xl font-bold text-white">
                  Current Course: Backend Development with Node.js
                </h4>

                <p className="text-sm text-brand-100 flex items-center gap-2">
                  <span className="font-semibold text-white">Next lesson:</span> "Building REST APIs with Express"
                </p>

                {/* Progress bar */}
                <div className="pt-2 max-w-lg">
                  <div className="flex items-center justify-between text-xs font-bold text-brand-100 mb-1.5">
                    <span>Course Progress</span>
                    <span className="text-accent-cyan">68% Completed</span>
                  </div>
                  <div className="w-full bg-white/20 h-2.5 rounded-full overflow-hidden backdrop-blur-sm">
                    <div className="bg-gradient-to-r from-accent-cyan to-accent-emerald h-2.5 rounded-full w-[68%]" />
                  </div>
                </div>
              </div>

              <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-center">
                <button
                  onClick={() => {
                    setCurrentPage('paths');
                    showToast('Resuming lesson: Building REST APIs with Express');
                  }}
                  className="px-6 py-3.5 rounded-xl bg-white text-slate-900 hover:bg-brand-50 font-extrabold text-xs sm:text-sm shadow-lg flex items-center justify-center gap-2 group transition-all"
                >
                  <PlayCircle className="w-4 h-4 text-brand-600 group-hover:scale-110 transition-transform" />
                  <span>Resume Lesson</span>
                </button>

                <button
                  onClick={() => {
                    setCurrentPage('quizzes');
                    showToast('Loading Express & REST API Quiz');
                  }}
                  className="px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white border border-white/20 font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all backdrop-blur-md"
                >
                  <Award className="w-4 h-4 text-accent-cyan" />
                  <span>Take Module Quiz</span>
                </button>
              </div>

            </div>
          </div>

          {/* Two Columns: Weekly Activity Heatmap & Upcoming Goals */}
          <div className="grid lg:grid-cols-12 gap-6">
            
            {/* Left: Weekly Learning Streak Heatmap */}
            <div className="lg:col-span-7 p-5 sm:p-6 rounded-2xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-brand-600 dark:text-brand-400" />
                  <h4 className="font-heading text-sm font-bold text-slate-900 dark:text-white">
                    Weekly Consistency & Hours
                  </h4>
                </div>
                <span className="text-xs text-emerald-600 dark:text-emerald-400 font-bold">
                  17.5 hrs this week
                </span>
              </div>

              <div className="grid grid-cols-7 gap-2">
                {daysOfWeek.map((d, i) => (
                  <div key={i} className="text-center p-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 flex flex-col items-center justify-between gap-1">
                    <span className="text-[10px] text-slate-400 font-bold uppercase">{d.day}</span>
                    <div className="w-8 h-8 rounded-full bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-600 dark:text-emerald-400">
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                    <span className="text-[10px] font-extrabold text-slate-700 dark:text-slate-300">{d.hrs}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Upcoming Goals */}
            <div className="lg:col-span-5 p-5 sm:p-6 rounded-2xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <Target className="w-4 h-4 text-brand-600 dark:text-brand-400" />
                  <h4 className="font-heading text-sm font-bold text-slate-900 dark:text-white">
                    Target Goals
                  </h4>
                </div>
                <span className="text-xs text-slate-400 font-medium">1 of 3 Done</span>
              </div>

              <div className="space-y-2.5">
                {upcomingGoals.map((g) => (
                  <div 
                    key={g.id}
                    className="p-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 flex items-center justify-between gap-2"
                  >
                    <div className="flex items-center gap-2.5 min-w-0">
                      <div className={`w-4 h-4 rounded-full flex items-center justify-center shrink-0 ${
                        g.completed 
                          ? 'bg-emerald-500 text-white' 
                          : 'border-2 border-slate-300 dark:border-slate-700'
                      }`}>
                        {g.completed && <CheckCircle2 className="w-3.5 h-3.5" />}
                      </div>
                      <span className={`text-xs truncate ${
                        g.completed 
                          ? 'line-through text-slate-400' 
                          : 'text-slate-800 dark:text-slate-200 font-medium'
                      }`}>
                        {g.text}
                      </span>
                    </div>
                    <span className="px-2 py-0.5 rounded text-[9px] font-bold bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 shrink-0">
                      {g.tag}
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Recommended Resources Row */}
          <div className="pt-4 border-t border-slate-100 dark:border-slate-800">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
                <BookOpen className="w-3.5 h-3.5 text-brand-500" /> AI Recommended Readings for Today:
              </span>
            </div>
            
            <div className="grid sm:grid-cols-3 gap-3">
              {recommendedResources.map((res, idx) => (
                <div 
                  key={idx}
                  onClick={() => showToast(`Opening resource: "${res.title}"`)}
                  className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200/80 dark:border-slate-800 hover:border-brand-500 cursor-pointer transition-all flex flex-col justify-between"
                >
                  <div>
                    <span className="px-2 py-0.5 rounded text-[9px] font-extrabold bg-brand-100 dark:bg-brand-900/60 text-brand-700 dark:text-brand-300">
                      {res.type}
                    </span>
                    <h5 className="font-heading text-xs font-bold text-slate-900 dark:text-white mt-1.5 line-clamp-2">
                      {res.title}
                    </h5>
                  </div>
                  <span className="text-[10px] text-slate-400 font-medium mt-2">
                    ⏱ {res.duration}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
