import React, { useState, useRef, useEffect } from 'react';
import { useApp } from '../context/AppContext';
import { backendRoadmapMilestones } from '../data/mockData';
import { RoadmapMilestone } from '../types';
import { 
  Bot, 
  Sparkles, 
  Send, 
  User, 
  CheckCircle2, 
  Clock, 
  Code2, 
  HelpCircle, 
  ArrowRight, 
  ChevronRight, 
  Lightbulb, 
  RefreshCw, 
  BookOpen, 
  FileText,
  Zap,
  Flame
} from 'lucide-react';

export const AIMentorPage: React.FC = () => {
  const { 
    chatMessages, 
    sendMessage, 
    user, 
    setCurrentPage, 
    setSelectedPath, 
    learningPathsData = [], 
    showToast 
  } = useApp() as any;

  const [inputVal, setInputVal] = useState('');
  const [selectedMilestone, setSelectedMilestone] = useState<RoadmapMilestone | null>(backendRoadmapMilestones[3]);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const quickPrompts = [
    "I want to become a backend developer.",
    "Explain REST API vs GraphQL simply.",
    "Review my resume bullet points for Razorpay.",
    "Generate a 5-question Node.js quiz.",
    "How does PostgreSQL B-Tree indexing work?"
  ];

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [chatMessages]);

  const handleSend = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!inputVal.trim()) return;
    sendMessage(inputVal);
    setInputVal('');
  };

  const handleQuickPrompt = (promptText: string) => {
    sendMessage(promptText);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      
      {/* Page Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 pb-6 border-b border-slate-200 dark:border-slate-800">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-brand-50 dark:bg-brand-950/60 border border-brand-200 dark:border-brand-800 text-brand-700 dark:text-brand-300 mb-2">
            <Bot className="w-3.5 h-3.5" />
            <span>EduMentor AI 2.0 Engine Active</span>
          </div>
          <h1 className="font-heading text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
            AI Personal Learning Mentor
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
            Real-time personalized instruction, instant roadmaps, code debugging, and interview prep.
          </p>
        </div>

        <div className="flex items-center gap-3 self-start md:self-auto">
          <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-xs font-semibold text-slate-700 dark:text-slate-300">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>Low Latency (Sub-200ms)</span>
          </div>
        </div>
      </div>

      {/* 2-Column AI Workspace Grid */}
      <div className="grid lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Column: AI Chat Conversation Window */}
        <div className="lg:col-span-7 flex flex-col h-[740px] rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xl overflow-hidden">
          
          {/* Chat Window Top Bar */}
          <div className="p-4 bg-slate-50 dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center w-9 h-9 rounded-xl bg-gradient-to-tr from-brand-600 to-accent-cyan text-white shadow-md">
                <Bot className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-heading text-xs sm:text-sm font-bold text-slate-900 dark:text-white">
                  EduMentor AI Assistant
                </h3>
                <p className="text-[11px] text-emerald-600 dark:text-emerald-400 font-medium">
                  • Online • Synced with Simran's 12-Week Roadmap
                </p>
              </div>
            </div>

            <button
              onClick={() => showToast('Conversation context reset')}
              className="p-1.5 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors"
              title="Reset Chat Session"
            >
              <RefreshCw className="w-4 h-4" />
            </button>
          </div>

          {/* Chat Messages Stream */}
          <div className="flex-1 p-4 sm:p-6 overflow-y-auto space-y-5">
            {chatMessages.map((msg: any) => {
              const isUser = msg.sender === 'user';

              return (
                <div 
                  key={msg.id} 
                  className={`flex items-start gap-3 ${isUser ? 'justify-end' : 'justify-start'}`}
                >
                  {!isUser && (
                    <div className="flex items-center justify-center w-8 h-8 rounded-xl bg-brand-500/20 text-brand-600 dark:text-brand-400 shrink-0 mt-0.5">
                      <Bot className="w-4 h-4" />
                    </div>
                  )}

                  <div className={`max-w-xl space-y-3 ${isUser ? 'items-end' : 'items-start'}`}>
                    
                    {/* Message bubble */}
                    <div
                      className={`p-4 rounded-2xl text-xs sm:text-sm leading-relaxed ${
                        isUser
                          ? 'bg-gradient-to-r from-brand-600 to-indigo-600 text-white rounded-tr-xs shadow-md'
                          : 'bg-slate-100 dark:bg-slate-800/90 text-slate-900 dark:text-slate-100 rounded-tl-xs shadow-xs'
                      }`}
                    >
                      <p className="whitespace-pre-line">{msg.text}</p>
                    </div>

                    {/* If message includes roadmap cards */}
                    {msg.roadmapData && (
                      <div className="p-4 rounded-2xl bg-brand-50/70 dark:bg-brand-950/40 border border-brand-200 dark:border-brand-800 space-y-2">
                        <div className="flex items-center justify-between text-xs font-bold text-brand-800 dark:text-brand-300">
                          <span>🎯 Personalized 12-Week Roadmap</span>
                          <span>9 Milestones</span>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                          {msg.roadmapData.slice(0, 4).map((m: any) => (
                            <button
                              key={m.id}
                              onClick={() => setSelectedMilestone(m)}
                              className="p-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-left hover:border-brand-500 transition-all flex items-center justify-between"
                            >
                              <div>
                                <span className="text-[10px] text-slate-400 font-bold uppercase">Week {m.week}</span>
                                <p className="text-xs font-bold text-slate-800 dark:text-slate-200 truncate">{m.title}</p>
                              </div>
                              <ChevronRight className="w-4 h-4 text-slate-400" />
                            </button>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Action link button if attached */}
                    {msg.actionLink && (
                      <div>
                        <button
                          onClick={() => setCurrentPage(msg.actionLink.page)}
                          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-brand-600 text-white text-xs font-bold shadow-sm hover:bg-brand-500 transition-all"
                        >
                          <span>{msg.actionLink.label}</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    )}

                    {/* Suggested follow-up prompt chips */}
                    {msg.suggestedPrompts && msg.suggestedPrompts.length > 0 && (
                      <div className="flex flex-wrap gap-1.5 pt-1">
                        {msg.suggestedPrompts.map((p: string, idx: number) => (
                          <button
                            key={idx}
                            onClick={() => handleQuickPrompt(p)}
                            className="px-2.5 py-1 rounded-full text-[11px] font-medium bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:border-brand-500 hover:text-brand-600 transition-colors"
                          >
                            💬 "{p}"
                          </button>
                        ))}
                      </div>
                    )}

                    <span className="text-[10px] text-slate-400 block px-1">
                      {msg.timestamp}
                    </span>

                  </div>

                  {isUser && (
                    <img
                      src={user.avatar}
                      alt={user.name}
                      className="w-8 h-8 rounded-xl object-cover ring-2 ring-brand-500/40 shrink-0 mt-0.5"
                    />
                  )}
                </div>
              );
            })}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Prompts Carousel */}
          <div className="p-3 bg-slate-50 dark:bg-slate-950/70 border-t border-slate-100 dark:border-slate-800/80 flex items-center gap-2 overflow-x-auto scrollbar-none">
            <span className="text-[10px] font-bold text-slate-400 uppercase shrink-0">Prompts:</span>
            {quickPrompts.map((prompt, i) => (
              <button
                key={i}
                onClick={() => handleQuickPrompt(prompt)}
                className="px-3 py-1 rounded-lg text-xs font-medium bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-brand-500 text-slate-700 dark:text-slate-300 whitespace-nowrap transition-colors"
              >
                {prompt}
              </button>
            ))}
          </div>

          {/* Chat Input Box */}
          <form 
            onSubmit={handleSend}
            className="p-3 sm:p-4 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 flex items-center gap-2"
          >
            <input
              type="text"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              placeholder="Ask anything (e.g., 'How do I build JWT middleware?')..."
              className="flex-1 px-4 py-3 rounded-2xl bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white placeholder-slate-400 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-brand-500"
            />
            <button
              type="submit"
              disabled={!inputVal.trim()}
              className="p-3 rounded-2xl bg-gradient-to-r from-brand-600 to-indigo-600 hover:from-brand-500 hover:to-indigo-500 text-white disabled:opacity-50 transition-all shadow-md shrink-0"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>

        </div>

        {/* Right Column: Active Learning Module & Roadmap Inspector */}
        <div className="lg:col-span-5 space-y-6">
          
          {/* Milestone Details Card */}
          <div className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-soft">
            <div className="flex items-center justify-between mb-4">
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-brand-50 dark:bg-brand-950/60 text-brand-700 dark:text-brand-300 border border-brand-200 dark:border-brand-800">
                Active Roadmap Milestone
              </span>
              <span className="text-xs font-bold text-slate-400">
                Week {selectedMilestone?.week} of 9
              </span>
            </div>

            <h3 className="font-heading text-xl font-bold text-slate-900 dark:text-white">
              {selectedMilestone?.title}
            </h3>
            
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-2 leading-relaxed">
              {selectedMilestone?.description}
            </p>

            {/* Topics Included */}
            <div className="mt-5 pt-4 border-t border-slate-100 dark:border-slate-800">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
                Core Mastery Concepts:
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {selectedMilestone?.topics.map((t, idx) => (
                  <div 
                    key={idx}
                    className="p-2 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700 text-xs font-medium text-slate-800 dark:text-slate-200 flex items-center gap-2"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-brand-500 shrink-0" />
                    <span className="truncate">{t}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Capstone Project Deliverable */}
            {selectedMilestone?.project && (
              <div className="mt-4 p-3.5 rounded-2xl bg-indigo-50/60 dark:bg-indigo-950/30 border border-indigo-200 dark:border-indigo-800/60">
                <div className="flex items-center gap-2 text-indigo-700 dark:text-indigo-300 text-xs font-bold mb-1">
                  <Code2 className="w-4 h-4" />
                  <span>Module Capstone Project:</span>
                </div>
                <p className="text-xs text-slate-800 dark:text-slate-200 font-semibold">
                  "{selectedMilestone.project}"
                </p>
              </div>
            )}

            {/* Actions */}
            <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800 grid grid-cols-2 gap-2.5">
              <button
                onClick={() => {
                  setCurrentPage('quizzes');
                  showToast(`Launching quiz for: ${selectedMilestone?.title}`);
                }}
                className="py-2.5 rounded-xl bg-brand-600 hover:bg-brand-500 text-white text-xs font-bold shadow-md shadow-brand-500/20 transition-all flex items-center justify-center gap-1.5"
              >
                <span>Take Milestone Quiz</span>
              </button>

              <button
                onClick={() => {
                  setCurrentPage('paths');
                  showToast('Opened full interactive course curriculum');
                }}
                className="py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-200 text-xs font-bold transition-all flex items-center justify-center gap-1.5"
              >
                <span>View Syllabus</span>
              </button>
            </div>
          </div>

          {/* Quick AI Study Assistant Tips Box */}
          <div className="p-6 rounded-3xl bg-gradient-to-br from-brand-50 via-purple-50 to-cyan-50 dark:from-slate-900 dark:via-brand-950/40 dark:to-slate-900 border border-brand-200 dark:border-brand-800/60 shadow-soft">
            <div className="flex items-center gap-2 text-brand-700 dark:text-brand-300 text-xs font-bold mb-2">
              <Lightbulb className="w-4 h-4" />
              <span>AI Study Tip of the Day</span>
            </div>
            <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed font-medium">
              "When implementing Express middleware, always place your global error handler <code className="text-brand-600 dark:text-brand-400 font-mono">(err, req, res, next)</code> as the very last app.use() declaration. Otherwise, unhandled asynchronous exceptions will crash the Node worker process!"
            </p>
          </div>

        </div>

      </div>

    </div>
  );
};
