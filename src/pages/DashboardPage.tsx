import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
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
  Target,
  Plus,
  TrendingUp,
  FileText,
  Bot
} from 'lucide-react';

export const DashboardPage: React.FC = () => {
  const { user, setCurrentPage, showToast, triggerAIPrompt } = useApp();

  const [goals, setGoals] = useState([
    { id: '1', text: 'Build JWT Refresh Token Rotation Middleware', completed: true, category: 'Backend' },
    { id: '2', text: 'Pass Adaptive Quiz: HTTP Status Codes (80%+)', completed: false, category: 'Quiz' },
    { id: '3', text: 'Review Docker Multi-Stage Build Tutorial', completed: false, category: 'DevOps' },
    { id: '4', text: 'Benchmark PostgreSQL Query with EXPLAIN ANALYZE', completed: false, category: 'Database' }
  ]);

  const [newGoalText, setNewGoalText] = useState('');

  const daysOfWeek = [
    { day: 'Mon', active: true, hrs: '2.5h' },
    { day: 'Tue', active: true, hrs: '3.0h' },
    { day: 'Wed', active: true, hrs: '1.5h' },
    { day: 'Thu', active: true, hrs: '4.0h' },
    { day: 'Fri', active: true, hrs: '2.0h' },
    { day: 'Sat', active: true, hrs: '3.5h' },
    { day: 'Sun', active: true, hrs: '1.0h' }
  ];

  const toggleGoal = (id: string) => {
    setGoals(goals.map(g => g.id === id ? { ...g, completed: !g.completed } : g));
    showToast('Goal status updated');
  };

  const handleAddGoal = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newGoalText.trim()) return;
    setGoals([...goals, {
      id: Date.now().toString(),
      text: newGoalText.trim(),
      completed: false,
      category: 'Custom'
    }]);
    setNewGoalText('');
    showToast('New target goal added to your AI queue');
  };

  const skillMatrix = [
    { name: "Node.js & Express Architecture", score: 85, level: "Advanced" },
    { name: "RESTful HTTP & API Idempotency", score: 92, level: "Expert" },
    { name: "PostgreSQL Modeling & Indexing", score: 74, level: "Proficient" },
    { name: "JWT Auth & Security", score: 80, level: "Proficient" },
    { name: "Docker Containerization", score: 45, level: "Beginner" },
    { name: "Redis Caching & Queue Workers", score: 50, level: "Intermediate" }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-8">
      
      {/* Top Welcome Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-brand-600 via-brand-700 to-indigo-900 text-white shadow-xl relative overflow-hidden">
        <div className="absolute -right-16 -top-16 w-64 h-64 bg-accent-cyan/20 rounded-full blur-3xl pointer-events-none" />
        
        <div className="relative z-10 space-y-2">
          <div className="flex items-center gap-2">
            <span className="px-3 py-1 rounded-full text-xs font-bold bg-white/20 backdrop-blur-md text-white border border-white/20">
              Student Command Center
            </span>
            <span className="text-xs text-brand-200">Target Role: {user.targetRole}</span>
          </div>

          <h1 className="font-heading text-3xl sm:text-4xl font-extrabold text-white">
            Good morning, {user.name.split(' ')[0]} 👋
          </h1>

          <p className="text-xs sm:text-sm text-brand-100 max-w-xl">
            You're currently in the top 5% of learners this week. Keep up the consistency to unlock priority placement interviews!
          </p>
        </div>

        <div className="relative z-10 flex flex-wrap items-center gap-3">
          <button
            onClick={() => triggerAIPrompt("I want to become a backend developer.")}
            className="px-5 py-3 rounded-2xl bg-white text-brand-700 hover:bg-brand-50 text-xs sm:text-sm font-bold shadow-lg transition-all flex items-center gap-2"
          >
            <Bot className="w-4 h-4 text-brand-600" />
            <span>Ask AI Mentor</span>
          </button>

          <button
            onClick={() => setCurrentPage('resume')}
            className="px-4 py-3 rounded-2xl bg-white/10 hover:bg-white/20 text-white text-xs sm:text-sm font-semibold backdrop-blur-md border border-white/20 transition-all flex items-center gap-2"
          >
            <FileText className="w-4 h-4 text-accent-cyan" />
            <span>ATS Resume ({user.atsScore}%)</span>
          </button>
        </div>
      </div>

      {/* 4 KPI Metrics */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        
        <div className="p-5 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-soft flex items-center gap-4">
          <div className="p-3.5 rounded-2xl bg-amber-500/15 text-amber-600 dark:text-amber-400">
            <Flame className="w-6 h-6 fill-amber-500" />
          </div>
          <div>
            <p className="text-xs font-semibold text-slate-500 dark:text-slate-400">Streak</p>
            <p className="font-heading text-2xl font-extrabold text-slate-900 dark:text-white">
              {user.streakDays} Days
            </p>
          </div>
        </div>

        <div className="p-5 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-soft flex items-center gap-4">
          <div className="p-3.5 rounded-2xl bg-blue-500/15 text-blue-600 dark:text-blue-400">
            <Clock className="w-6 h-6" />
          </div>
          <div>
            <p className="text-xs font-semibold text-slate-500 dark:text-slate-400">Hours Learned</p>
            <p className="font-heading text-2xl font-extrabold text-slate-900 dark:text-white">
              {user.totalHoursLearned} hrs
            </p>
          </div>
        </div>

        <div className="p-5 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-soft flex items-center gap-4">
          <div className="p-3.5 rounded-2xl bg-emerald-500/15 text-emerald-600 dark:text-emerald-400">
            <Award className="w-6 h-6" />
          </div>
          <div>
            <p className="text-xs font-semibold text-slate-500 dark:text-slate-400">Quiz Accuracy</p>
            <p className="font-heading text-2xl font-extrabold text-slate-900 dark:text-white">
              {user.averageQuizScore}%
            </p>
          </div>
        </div>

        <div className="p-5 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-soft flex items-center gap-4">
          <div className="p-3.5 rounded-2xl bg-purple-500/15 text-purple-600 dark:text-purple-400">
            <Sparkles className="w-6 h-6" />
          </div>
          <div>
            <p className="text-xs font-semibold text-slate-500 dark:text-slate-400">Skills Verified</p>
            <p className="font-heading text-2xl font-extrabold text-slate-900 dark:text-white">
              {user.skillsGained}
            </p>
          </div>
        </div>

      </div>

      {/* Main Grid: Active Course Progress & Weekly Streak Activity */}
      <div className="grid lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Col (8): Current Active Track Card */}
        <div className="lg:col-span-8 space-y-6">
          
          {/* Active Course */}
          <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-soft space-y-5">
            <div className="flex items-center justify-between">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-brand-50 dark:bg-brand-950/60 text-brand-700 dark:text-brand-300">
                <PlayCircle className="w-3.5 h-3.5" /> Continue Learning
              </span>
              <span className="text-xs font-extrabold text-brand-600 dark:text-brand-400">
                68% Completed
              </span>
            </div>

            <div>
              <h2 className="font-heading text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                Current Course: Backend Development with Node.js
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
                Next lesson: <strong className="text-slate-800 dark:text-slate-200">"Building REST APIs with Express"</strong> (Week 5 • 45 min)
              </p>
            </div>

            {/* Progress Bar */}
            <div className="space-y-1.5">
              <div className="w-full bg-slate-100 dark:bg-slate-800 h-3 rounded-full overflow-hidden">
                <div className="bg-gradient-to-r from-brand-600 via-indigo-600 to-accent-cyan h-3 rounded-full w-[68%]" />
              </div>
              <div className="flex justify-between text-[11px] text-slate-400 font-medium">
                <span>Milestone 4 of 9 in progress</span>
                <span>5 Milestones remaining</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => {
                  setCurrentPage('paths');
                  showToast('Resuming lesson: Building REST APIs with Express');
                }}
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-brand-600 to-indigo-600 hover:from-brand-500 hover:to-indigo-500 text-white font-bold text-xs sm:text-sm shadow-md flex items-center justify-center gap-2"
              >
                <PlayCircle className="w-4 h-4" />
                <span>Resume Lesson Now</span>
              </button>

              <button
                onClick={() => setCurrentPage('quizzes')}
                className="px-5 py-3 rounded-xl border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-200 font-semibold text-xs sm:text-sm flex items-center justify-center gap-2"
              >
                <Award className="w-4 h-4 text-brand-500" />
                <span>Practice Module Quiz</span>
              </button>
            </div>
          </div>

          {/* Skill Mastery Breakdown */}
          <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-soft">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-brand-500" />
                <h3 className="font-heading text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                  Skill Proficiency Matrix
                </h3>
              </div>
              <span className="text-xs text-slate-400 font-medium">AI Verified</span>
            </div>

            <div className="space-y-4">
              {skillMatrix.map((sk, idx) => (
                <div key={idx} className="space-y-1.5">
                  <div className="flex items-center justify-between text-xs font-semibold">
                    <span className="text-slate-800 dark:text-slate-200">{sk.name}</span>
                    <span className="text-slate-500 dark:text-slate-400">{sk.score}% • {sk.level}</span>
                  </div>
                  <div className="w-full bg-slate-100 dark:bg-slate-800 h-2 rounded-full overflow-hidden">
                    <div 
                      className={`h-2 rounded-full ${
                        sk.score >= 80 
                          ? 'bg-emerald-500' 
                          : sk.score >= 60 
                          ? 'bg-brand-500' 
                          : 'bg-amber-500'
                      }`}
                      style={{ width: `${sk.score}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Right Col (4): Goals Checklist & Streak Widget */}
        <div className="lg:col-span-4 space-y-6">
          
          {/* Weekly Heatmap */}
          <div className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-soft">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-brand-500" />
                <h4 className="font-heading text-sm font-bold text-slate-900 dark:text-white">
                  Weekly Streak Heatmap
                </h4>
              </div>
              <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400">100% On Track</span>
            </div>

            <div className="grid grid-cols-7 gap-1.5 text-center">
              {daysOfWeek.map((d, i) => (
                <div key={i} className="p-2 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800 flex flex-col items-center gap-1">
                  <span className="text-[10px] text-slate-400 font-bold uppercase">{d.day}</span>
                  <div className="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-[9px] font-bold text-slate-700 dark:text-slate-300">{d.hrs}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Target Goals */}
          <div className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-soft space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Target className="w-4 h-4 text-brand-500" />
                <h4 className="font-heading text-sm font-bold text-slate-900 dark:text-white">
                  Upcoming Goals
                </h4>
              </div>
              <span className="text-xs text-slate-400">
                {goals.filter(g => g.completed).length}/{goals.length} Done
              </span>
            </div>

            <div className="space-y-2 max-h-60 overflow-y-auto pr-1">
              {goals.map(g => (
                <div 
                  key={g.id}
                  onClick={() => toggleGoal(g.id)}
                  className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/80 flex items-center justify-between gap-2 cursor-pointer hover:border-brand-400 transition-all"
                >
                  <div className="flex items-center gap-2.5 min-w-0">
                    <div className={`w-4 h-4 rounded-full flex items-center justify-center shrink-0 ${
                      g.completed 
                        ? 'bg-emerald-500 text-white' 
                        : 'border-2 border-slate-300 dark:border-slate-600'
                    }`}>
                      {g.completed && <CheckCircle2 className="w-3.5 h-3.5" />}
                    </div>
                    <span className={`text-xs truncate ${
                      g.completed ? 'line-through text-slate-400' : 'text-slate-800 dark:text-slate-200 font-medium'
                    }`}>
                      {g.text}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Add Goal input */}
            <form onSubmit={handleAddGoal} className="flex gap-2 pt-2 border-t border-slate-100 dark:border-slate-800">
              <input
                type="text"
                value={newGoalText}
                onChange={(e) => setNewGoalText(e.target.value)}
                placeholder="Add a new daily goal..."
                className="flex-1 px-3 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-xs text-slate-900 dark:text-white focus:outline-none focus:ring-1 focus:ring-brand-500"
              />
              <button
                type="submit"
                className="p-2 rounded-xl bg-brand-600 text-white hover:bg-brand-500 text-xs shrink-0"
              >
                <Plus className="w-4 h-4" />
              </button>
            </form>
          </div>

        </div>

      </div>

    </div>
  );
};
