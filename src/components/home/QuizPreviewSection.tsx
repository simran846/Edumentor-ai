import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { sampleQuizQuestions } from '../../data/mockData';
import { 
  Award, 
  Sparkles, 
  CheckCircle2, 
  XCircle, 
  ArrowRight, 
  HelpCircle, 
  Timer, 
  Zap,
  RefreshCw
} from 'lucide-react';
import confetti from 'canvas-confetti';

export const QuizPreviewSection: React.FC = () => {
  const { setCurrentPage, showToast } = useApp();
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  // The featured question from user requirement: "Which HTTP method is commonly used to create a new resource?"
  const question = sampleQuizQuestions[0];

  const handleOptionClick = (optId: string) => {
    if (isSubmitted) return;
    setSelectedOption(optId);
  };

  const handleSubmitAnswer = () => {
    if (!selectedOption) {
      showToast('Please pick an option to submit your answer!');
      return;
    }
    setIsSubmitted(true);

    if (selectedOption === question.correctOptionId) {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 }
      });
      showToast('🎉 Correct! POST is the standard REST method to create resources.');
    } else {
      showToast('Not quite! Check the AI explanation below.');
    }
  };

  const handleReset = () => {
    setSelectedOption(null);
    setIsSubmitted(false);
  };

  return (
    <section className="py-20 bg-slate-50/70 dark:bg-slate-900/40 border-y border-slate-200/80 dark:border-slate-800/80 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-brand-50 dark:bg-brand-950/60 border border-brand-200 dark:border-brand-800 text-brand-700 dark:text-brand-300 mb-3">
            <Award className="w-3.5 h-3.5" />
            <span>Interactive Knowledge Checks</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Adaptive Smart Quizzes
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-slate-400">
            Quizzes that don't just test rote memorization, but test conceptual understanding, edge cases, and code comprehension.
          </p>
        </div>

        {/* Interactive Quiz Box Mockup */}
        <div className="max-w-3xl mx-auto rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xl p-6 sm:p-8">
          
          {/* Quiz Top Status Bar */}
          <div className="flex items-center justify-between pb-4 mb-6 border-b border-slate-100 dark:border-slate-800 text-xs font-bold">
            <div className="flex items-center gap-2 text-brand-600 dark:text-brand-400">
              <Sparkles className="w-4 h-4" />
              <span>Topic: REST APIs & HTTP Verbs</span>
            </div>
            
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-1 text-slate-500 dark:text-slate-400">
                <Timer className="w-3.5 h-3.5 text-amber-500" /> 00:45
              </span>
              <span className="px-2.5 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                Question 4 of 10
              </span>
            </div>
          </div>

          {/* Progress bar */}
          <div className="w-full bg-slate-100 dark:bg-slate-800 h-1.5 rounded-full overflow-hidden mb-6">
            <div className="bg-gradient-to-r from-brand-600 to-accent-cyan h-1.5 rounded-full w-[40%]" />
          </div>

          {/* Question Text */}
          <div className="mb-6">
            <h3 className="font-heading text-lg sm:text-xl font-bold text-slate-900 dark:text-white leading-relaxed">
              {question.question}
            </h3>

            {question.codeSnippet && (
              <pre className="mt-3 p-3.5 rounded-xl bg-slate-900 text-emerald-300 text-xs font-mono overflow-x-auto border border-slate-800">
                <code>{question.codeSnippet}</code>
              </pre>
            )}
          </div>

          {/* Options Grid */}
          <div className="space-y-3 mb-6">
            {question.options.map((opt) => {
              const isSelected = selectedOption === opt.id;
              const isCorrect = opt.id === question.correctOptionId;
              
              let cardStyle = 'border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-brand-400 dark:hover:border-brand-500';

              if (isSubmitted) {
                if (isCorrect) {
                  cardStyle = 'border-emerald-500 bg-emerald-50/80 dark:bg-emerald-950/40 text-emerald-900 dark:text-emerald-200';
                } else if (isSelected && !isCorrect) {
                  cardStyle = 'border-rose-500 bg-rose-50/80 dark:bg-rose-950/40 text-rose-900 dark:text-rose-200';
                }
              } else if (isSelected) {
                cardStyle = 'border-brand-600 bg-brand-50/60 dark:bg-brand-950/40 ring-2 ring-brand-500/20';
              }

              return (
                <button
                  key={opt.id}
                  onClick={() => handleOptionClick(opt.id)}
                  disabled={isSubmitted}
                  className={`w-full p-4 rounded-2xl border text-left transition-all flex items-center justify-between ${cardStyle}`}
                >
                  <div className="flex items-center gap-3">
                    <span className={`w-8 h-8 rounded-xl flex items-center justify-center font-heading text-xs font-bold shrink-0 ${
                      isSelected && !isSubmitted
                        ? 'bg-brand-600 text-white'
                        : isSubmitted && isCorrect
                        ? 'bg-emerald-600 text-white'
                        : isSubmitted && isSelected && !isCorrect
                        ? 'bg-rose-600 text-white'
                        : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300'
                    }`}>
                      {opt.label}
                    </span>
                    <span className="text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200">
                      {opt.text}
                    </span>
                  </div>

                  {isSubmitted && isCorrect && (
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                  )}
                  {isSubmitted && isSelected && !isCorrect && (
                    <XCircle className="w-5 h-5 text-rose-600 dark:text-rose-400" />
                  )}
                </button>
              );
            })}
          </div>

          {/* AI Explanation Box if submitted */}
          {isSubmitted && (
            <div className="mb-6 p-4 rounded-2xl bg-brand-50/90 dark:bg-brand-950/50 border border-brand-200 dark:border-brand-800/80 animate-in fade-in duration-200">
              <div className="flex items-center gap-2 mb-1.5">
                <Sparkles className="w-4 h-4 text-brand-600 dark:text-brand-400" />
                <span className="text-xs font-bold text-brand-800 dark:text-brand-200">
                  AI Detailed Explanation
                </span>
              </div>
              <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                {question.explanation}
              </p>
            </div>
          )}

          {/* Bottom Action Row */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-4 border-t border-slate-100 dark:border-slate-800">
            
            {isSubmitted ? (
              <button
                onClick={handleReset}
                className="w-full sm:w-auto px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 text-xs font-bold text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 flex items-center justify-center gap-2"
              >
                <RefreshCw className="w-3.5 h-3.5" />
                <span>Try Again</span>
              </button>
            ) : (
              <span className="text-xs text-slate-400 font-medium">
                Pick the most accurate HTTP verb to proceed.
              </span>
            )}

            <div className="flex items-center gap-3 w-full sm:w-auto">
              {!isSubmitted ? (
                <button
                  onClick={handleSubmitAnswer}
                  className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-gradient-to-r from-brand-600 to-indigo-600 hover:from-brand-500 hover:to-indigo-500 text-white font-bold text-xs sm:text-sm shadow-md shadow-brand-500/25 transition-all flex items-center justify-center gap-2"
                >
                  <span>Submit Answer</span>
                  <Zap className="w-4 h-4" />
                </button>
              ) : (
                <button
                  onClick={() => setCurrentPage('quizzes')}
                  className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-brand-600 hover:bg-brand-500 text-white font-bold text-xs sm:text-sm shadow-md shadow-brand-500/25 transition-all flex items-center justify-center gap-2"
                >
                  <span>Play Full 10-Question Quiz</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              )}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
