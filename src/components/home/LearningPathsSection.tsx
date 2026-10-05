import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { learningPathsData } from '../../data/mockData';
import { LearningPath } from '../../types';
import { 
  Compass, 
  Clock, 
  Layers, 
  Star, 
  Users, 
  ArrowRight, 
  Sparkles,
  Server,
  Brain,
  Cpu,
  BarChart3,
  Cloud,
  ShieldCheck,
  Code2,
  CheckCircle
} from 'lucide-react';

export const LearningPathsSection: React.FC = () => {
  const { setCurrentPage, setSelectedPath, showToast } = useApp();
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Backend', 'Web Dev', 'AI & ML', 'Data Science', 'Cloud & DevOps', 'Cybersecurity', 'Programming'];

  const filteredPaths = selectedCategory === 'All'
    ? learningPathsData
    : learningPathsData.filter(p => p.category === selectedCategory || (selectedCategory === 'AI & ML' && (p.category === 'AI & ML')));

  const getPathIcon = (iconName: string) => {
    switch (iconName) {
      case 'Server': return <Server className="w-5 h-5" />;
      case 'Layers': return <Layers className="w-5 h-5" />;
      case 'Brain': return <Brain className="w-5 h-5" />;
      case 'Cpu': return <Cpu className="w-5 h-5" />;
      case 'BarChart3': return <BarChart3 className="w-5 h-5" />;
      case 'Cloud': return <Cloud className="w-5 h-5" />;
      case 'ShieldCheck': return <ShieldCheck className="w-5 h-5" />;
      case 'Code2': return <Code2 className="w-5 h-5" />;
      default: return <Compass className="w-5 h-5" />;
    }
  };

  const handleStartPath = (path: LearningPath) => {
    setSelectedPath(path);
    setCurrentPage('paths');
    showToast(`Loaded ${path.title} curriculum & modules`);
  };

  return (
    <section className="py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-brand-50 dark:bg-brand-950/60 border border-brand-200 dark:border-brand-800 text-brand-700 dark:text-brand-300 mb-3">
              <Compass className="w-3.5 h-3.5" />
              <span>Job-Ready Curriculums</span>
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Popular Learning Paths
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 mt-2 max-w-xl">
              Engineered backwards from real tech interview rounds, job descriptions, and production engineering requirements.
            </p>
          </div>

          <button
            onClick={() => setCurrentPage('paths')}
            className="inline-flex items-center gap-2 text-sm font-bold text-brand-600 dark:text-brand-400 hover:text-brand-700 group"
          >
            <span>View All Curriculums</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-all ${
                selectedCategory === cat
                  ? 'bg-brand-600 text-white shadow-md shadow-brand-500/20'
                  : 'bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Learning Paths Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredPaths.map((path) => {
            const progressPercent = Math.round((path.completedModules / path.totalModules) * 100);
            return (
              <div
                key={path.id}
                className="group relative rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800/80 p-6 shadow-soft hover:shadow-soft-lg hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  
                  {/* Top Bar with Icon & Difficulty */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 rounded-2xl bg-gradient-to-tr from-brand-50 to-indigo-50 dark:from-brand-950/60 dark:to-indigo-950/60 text-brand-600 dark:text-brand-400 border border-brand-100 dark:border-brand-900/50">
                      {getPathIcon(path.icon)}
                    </div>
                    <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold tracking-wider uppercase ${
                      path.difficulty === 'Beginner' 
                        ? 'bg-emerald-100 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-400'
                        : path.difficulty === 'Intermediate'
                        ? 'bg-blue-100 dark:bg-blue-950/60 text-blue-700 dark:text-blue-400'
                        : 'bg-purple-100 dark:bg-purple-950/60 text-purple-700 dark:text-purple-400'
                    }`}>
                      {path.difficulty}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="font-heading text-lg font-bold text-slate-900 dark:text-white group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors">
                    {path.title}
                  </h3>
                  
                  <p className="text-xs text-slate-600 dark:text-slate-400 mt-2 leading-relaxed line-clamp-2">
                    {path.description}
                  </p>

                  {/* Metadata Chips: Duration & Modules */}
                  <div className="grid grid-cols-2 gap-2 mt-4 pt-3 border-t border-slate-100 dark:border-slate-800 text-[11px] text-slate-500 dark:text-slate-400 font-medium">
                    <div className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-slate-400" />
                      <span>{path.duration}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Layers className="w-3.5 h-3.5 text-slate-400" />
                      <span>{path.totalModules} Modules</span>
                    </div>
                  </div>

                  {/* Progress Indicator */}
                  <div className="mt-4">
                    <div className="flex items-center justify-between text-[11px] font-bold mb-1">
                      <span className="text-slate-500 dark:text-slate-400">Progress</span>
                      <span className={progressPercent > 0 ? 'text-brand-600 dark:text-brand-400' : 'text-slate-400'}>
                        {progressPercent}% ({path.completedModules}/{path.totalModules} completed)
                      </span>
                    </div>
                    <div className="w-full bg-slate-100 dark:bg-slate-800 h-1.5 rounded-full overflow-hidden">
                      <div 
                        className="bg-gradient-to-r from-brand-600 to-accent-cyan h-1.5 rounded-full transition-all duration-500" 
                        style={{ width: `${progressPercent}%` }}
                      />
                    </div>
                  </div>

                </div>

                {/* Bottom CTA Button */}
                <div className="mt-6 pt-3 border-t border-slate-100 dark:border-slate-800">
                  <button
                    onClick={() => handleStartPath(path)}
                    className="w-full py-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-brand-600 hover:text-white dark:hover:bg-brand-600 dark:hover:text-white text-slate-800 dark:text-slate-200 text-xs font-bold transition-all flex items-center justify-center gap-2 group/btn"
                  >
                    <span>{path.completedModules > 0 ? 'Continue Path' : 'Start Learning'}</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
