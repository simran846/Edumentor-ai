import React from 'react';
import { useApp } from '../../context/AppContext';
import { backendRoadmapMilestones } from '../../data/mockData';
import { 
  Bot, 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  Clock, 
  Send, 
  Layers, 
  MessageSquareCode,
  ShieldCheck,
  ChevronRight
} from 'lucide-react';

export const AIMentorPreviewSection: React.FC = () => {
  const { setCurrentPage, triggerAIPrompt } = useApp();

  return (
    <section className="py-20 bg-slate-50/70 dark:bg-slate-900/40 border-y border-slate-200/80 dark:border-slate-800/80 relative overflow-hidden">
      
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-brand-500/10 dark:bg-brand-500/15 blur-3xl rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold bg-brand-100 dark:bg-brand-900/60 text-brand-700 dark:text-brand-300 mb-3">
            <Bot className="w-4 h-4" />
            <span>Interactive AI Conversational Engine</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Meet Your 24/7 Personal AI Mentor
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-400">
            Ask any question, state your dream target role, and get adaptive weekly roadmaps generated instantly.
          </p>
        </div>

        {/* AI Chat Window Container */}
        <div className="max-w-4xl mx-auto rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden">
          
          {/* Mock Chat Header */}
          <div className="p-4 sm:p-5 bg-slate-100/80 dark:bg-slate-950/80 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative flex items-center justify-center w-10 h-10 rounded-2xl bg-gradient-to-tr from-brand-600 to-accent-cyan text-white shadow-md">
                <Bot className="w-5 h-5" />
                <span className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-500 rounded-full border-2 border-white dark:border-slate-950" />
              </div>
              <div>
                <h3 className="font-heading text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
                  EduMentor AI Assistant
                  <span className="px-2 py-0.5 rounded-full text-[10px] font-extrabold bg-brand-100 dark:bg-brand-900/80 text-brand-700 dark:text-brand-300">
                    GPT-4o + DeepReason
                  </span>
                </h3>
                <p className="text-[11px] text-slate-500 dark:text-slate-400">
                  Real-time Roadmap & Curriculum Synthesis
                </p>
              </div>
            </div>

            <div className="hidden sm:flex items-center gap-2">
              <span className="text-xs text-slate-400 font-mono">Status: Connected (18ms)</span>
            </div>
          </div>

          {/* Chat Messages Body */}
          <div className="p-5 sm:p-8 space-y-6 max-h-[620px] overflow-y-auto">
            
            {/* User Message */}
            <div className="flex justify-end">
              <div className="max-w-lg rounded-2xl rounded-tr-xs bg-gradient-to-r from-brand-600 to-indigo-600 text-white p-4 shadow-md">
                <p className="text-xs font-semibold text-brand-200 mb-1">Student</p>
                <p className="text-sm font-medium">
                  "I want to become a backend developer."
                </p>
              </div>
            </div>

            {/* AI Response */}
            <div className="flex items-start gap-3.5">
              <div className="flex items-center justify-center w-8 h-8 rounded-xl bg-brand-500/20 text-brand-600 dark:text-brand-400 shrink-0 mt-1">
                <Bot className="w-4 h-4" />
              </div>
              <div className="space-y-4 max-w-2xl">
                <div className="p-4 sm:p-5 rounded-2xl rounded-tl-xs bg-slate-100 dark:bg-slate-800/90 text-slate-800 dark:text-slate-200 shadow-xs">
                  <p className="text-xs font-bold text-brand-600 dark:text-brand-400 mb-1 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5" /> AI Mentor Response
                  </p>
                  <p className="text-sm leading-relaxed">
                    "Great! Based on your current skills, I've created a personalized 12-week backend development roadmap tailored for top Indian & Global tech startups."
                  </p>
                </div>

                {/* 9 Roadmap Cards Grid */}
                <div className="space-y-2.5">
                  <div className="flex items-center justify-between px-1">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                      Generated 9-Module Learning Sequence:
                    </span>
                    <span className="text-xs font-bold text-brand-600 dark:text-brand-400">
                      12 Weeks • 9 Milestones
                    </span>
                  </div>

                  <div className="grid sm:grid-cols-3 gap-2.5">
                    {backendRoadmapMilestones.map((item) => (
                      <div
                        key={item.id}
                        className={`p-3 rounded-2xl border transition-all ${
                          item.status === 'completed'
                            ? 'bg-emerald-50/70 dark:bg-emerald-950/20 border-emerald-200 dark:border-emerald-800/60'
                            : item.status === 'in-progress'
                            ? 'bg-brand-50/80 dark:bg-brand-950/40 border-brand-300 dark:border-brand-700 ring-2 ring-brand-500/20'
                            : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800'
                        }`}
                      >
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-[10px] font-extrabold text-slate-400 uppercase">
                            Week {item.week}
                          </span>
                          {item.status === 'completed' && (
                            <span className="flex items-center gap-0.5 text-[10px] font-bold text-emerald-600 dark:text-emerald-400">
                              <CheckCircle2 className="w-3 h-3" /> Done
                            </span>
                          )}
                          {item.status === 'in-progress' && (
                            <span className="px-1.5 py-0.2 rounded-full text-[9px] font-extrabold bg-brand-600 text-white animate-pulse">
                              ACTIVE
                            </span>
                          )}
                        </div>

                        <h4 className="font-heading text-xs font-bold text-slate-900 dark:text-white line-clamp-1">
                          {item.title}
                        </h4>

                        <p className="text-[11px] text-slate-500 dark:text-slate-400 line-clamp-1 mt-0.5">
                          {item.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            </div>

          </div>

          {/* Interactive Chat Prompt Bar */}
          <div className="p-4 sm:p-5 bg-slate-50 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
            
            {/* Prompt pills */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs font-semibold text-slate-500">Quick prompts:</span>
              <button
                onClick={() => triggerAIPrompt("I want to become a backend developer.")}
                className="px-3 py-1 rounded-full text-xs font-medium bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-brand-500 text-slate-700 dark:text-slate-300 hover:text-brand-600 transition-colors"
              >
                "Generate Backend Roadmap"
              </button>
              <button
                onClick={() => triggerAIPrompt("Explain REST APIs vs GraphQL simply.")}
                className="px-3 py-1 rounded-full text-xs font-medium bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-brand-500 text-slate-700 dark:text-slate-300 hover:text-brand-600 transition-colors"
              >
                "Explain REST vs GraphQL"
              </button>
            </div>

            {/* CTA button */}
            <button
              onClick={() => setCurrentPage('mentor')}
              className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-gradient-to-r from-brand-600 to-indigo-600 hover:from-brand-500 hover:to-indigo-500 text-white font-bold text-xs sm:text-sm shadow-md shadow-brand-500/25 flex items-center justify-center gap-2 group shrink-0"
            >
              <span>Ask Your AI Mentor</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

          </div>

        </div>

      </div>
    </section>
  );
};
