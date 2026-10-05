import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { learningPathsData } from '../data/mockData';
import { LearningPath, RoadmapMilestone } from '../types';
import { 
  Compass, 
  Clock, 
  Layers, 
  Star, 
  CheckCircle2, 
  PlayCircle, 
  Code2, 
  Sparkles, 
  BookOpen, 
  Briefcase, 
  ArrowRight,
  Filter,
  Search,
  Server,
  Brain,
  Cpu,
  BarChart3,
  Cloud,
  ShieldCheck
} from 'lucide-react';

export const CoursesAndPathsPage: React.FC = () => {
  const { selectedPath, setSelectedPath, setCurrentPage, showToast } = useApp();
  const [activeTab, setActiveTab] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [activePathDetails, setActivePathDetails] = useState<LearningPath>(selectedPath || learningPathsData[0]);

  const categories = ['All', 'Backend', 'Web Dev', 'AI & ML', 'Data Science', 'Cloud & DevOps', 'Cybersecurity', 'Programming'];

  const filteredPaths = learningPathsData.filter(p => {
    const matchesCategory = activeTab === 'All' || p.category === activeTab;
    const matchesSearch = p.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          p.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const handleSelectPath = (p: LearningPath) => {
    setActivePathDetails(p);
    setSelectedPath(p);
  };

  const handleEnroll = (p: LearningPath) => {
    showToast(`🎉 Successfully enrolled in ${p.title}! 12-Week AI roadmap activated.`);
    setCurrentPage('dashboard');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 pb-6 border-b border-slate-200 dark:border-slate-800">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-brand-50 dark:bg-brand-950/60 border border-brand-200 dark:border-brand-800 text-brand-700 dark:text-brand-300 mb-2">
            <Compass className="w-3.5 h-3.5" />
            <span>Comprehensive Tech Curriculums</span>
          </div>
          <h1 className="font-heading text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
            Learning Paths & Courses
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
            Industry-aligned structured tracks with automated milestone grading, practical code assignments, and career certifications.
          </p>
        </div>

        {/* Search Input */}
        <div className="relative w-full md:w-72">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search tracks (e.g., Node, Python)..."
            className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-xs focus:ring-2 focus:ring-brand-500 focus:outline-none"
          />
        </div>
      </div>

      {/* Category Pills */}
      <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveTab(cat)}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-all ${
              activeTab === cat
                ? 'bg-brand-600 text-white shadow-md shadow-brand-500/20'
                : 'bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Main Grid: Left Catalog + Right Deep Curriculum Explorer */}
      <div className="grid lg:grid-cols-12 gap-8 items-start">
        
        {/* Left: Path Cards List */}
        <div className="lg:col-span-6 space-y-4">
          {filteredPaths.map((p) => {
            const isSelected = activePathDetails.id === p.id;
            const progress = Math.round((p.completedModules / p.totalModules) * 100);

            return (
              <div
                key={p.id}
                onClick={() => handleSelectPath(p)}
                className={`p-5 rounded-3xl border transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-white dark:bg-slate-900 border-brand-500 shadow-xl ring-2 ring-brand-500/20'
                    : 'bg-white/80 dark:bg-slate-900/80 border-slate-200 dark:border-slate-800 hover:border-brand-300 dark:hover:border-brand-700'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-brand-50 dark:bg-brand-950/60 text-brand-700 dark:text-brand-300 border border-brand-200 dark:border-brand-800">
                      {p.category}
                    </span>
                    <span className="text-xs text-slate-400 font-medium">• {p.difficulty}</span>
                  </div>
                  <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400">
                    {p.salaryRange}
                  </span>
                </div>

                <h3 className="font-heading text-lg font-bold text-slate-900 dark:text-white">
                  {p.title}
                </h3>
                
                <p className="text-xs text-slate-600 dark:text-slate-400 mt-1 leading-relaxed line-clamp-2">
                  {p.description}
                </p>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-1.5 mt-3">
                  {p.tags.map((t, i) => (
                    <span key={i} className="px-2 py-0.5 rounded text-[10px] font-semibold bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
                      {t}
                    </span>
                  ))}
                </div>

                {/* Bottom row */}
                <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-4 text-slate-500 dark:text-slate-400 font-medium">
                    <span>⏱ {p.duration}</span>
                    <span>📚 {p.totalModules} Modules</span>
                    <span>⭐ {p.rating}</span>
                  </div>

                  <span className="font-bold text-brand-600 dark:text-brand-400 flex items-center gap-1">
                    Inspect Syllabus <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Right: Path Curriculum Explorer */}
        <div className="lg:col-span-6 sticky top-24 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xl p-6 sm:p-8 space-y-6">
          
          <div className="flex items-start justify-between gap-4 pb-4 border-b border-slate-100 dark:border-slate-800">
            <div>
              <span className="px-3 py-1 rounded-full text-[11px] font-bold bg-brand-50 dark:bg-brand-950/60 text-brand-700 dark:text-brand-300">
                Curriculum Breakdown
              </span>
              <h2 className="font-heading text-2xl font-extrabold text-slate-900 dark:text-white mt-2">
                {activePathDetails.title}
              </h2>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                {activePathDetails.duration} • {activePathDetails.totalModules} Step-by-Step Modules • Certificate Included
              </p>
            </div>

            <button
              onClick={() => handleEnroll(activePathDetails)}
              className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-brand-600 to-indigo-600 hover:from-brand-500 hover:to-indigo-500 text-white font-bold text-xs shadow-md shadow-brand-500/25 shrink-0"
            >
              Enroll in Track
            </button>
          </div>

          {/* Modules Accordion / List */}
          <div className="space-y-3 max-h-[480px] overflow-y-auto pr-1">
            {activePathDetails.milestones.map((m, idx) => (
              <div 
                key={m.id}
                className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200/80 dark:border-slate-800/80"
              >
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-[10px] font-extrabold uppercase tracking-wider text-brand-600 dark:text-brand-400">
                    Week {m.week}
                  </span>
                  <span className="text-[10px] font-semibold text-slate-400">
                    {m.duration}
                  </span>
                </div>

                <h4 className="font-heading text-sm font-bold text-slate-900 dark:text-white">
                  {m.title}
                </h4>

                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                  {m.description}
                </p>

                <div className="flex flex-wrap gap-1.5 mt-3">
                  {m.topics.map((top, tIdx) => (
                    <span key={tIdx} className="px-2 py-0.5 rounded text-[10px] font-medium bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300">
                      {top}
                    </span>
                  ))}
                </div>

                {m.project && (
                  <div className="mt-2.5 pt-2 border-t border-slate-200/60 dark:border-slate-800/60 flex items-center gap-1.5 text-[11px] font-semibold text-indigo-600 dark:text-indigo-400">
                    <Code2 className="w-3.5 h-3.5" />
                    <span>Project: {m.project}</span>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Bottom Career Placement Guarantee Note */}
          <div className="p-4 rounded-2xl bg-emerald-50/70 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800/60 flex items-center gap-3">
            <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0" />
            <p className="text-xs text-emerald-800 dark:text-emerald-300 leading-snug">
              Completing this path qualifies you for priority direct referrals with our 40+ hiring network partners.
            </p>
          </div>

        </div>

      </div>

    </div>
  );
};
