import React, { useState, useEffect } from 'react';
import { useApp } from '../context/AppContext';
import { sampleQuizQuestions } from '../data/mockData';
import { QuizQuestion } from '../types';
import { 
  Award, 
  Sparkles, 
  CheckCircle2, 
  XCircle, 
  ArrowRight, 
  RefreshCw, 
  Timer, 
  Zap, 
  Trophy, 
  Flame, 
  HelpCircle,
  Play
} from 'lucide-react';
import confetti from 'canvas-confetti';

export const QuizPage: React.FC = () => {
  const { user, setUser, setCurrentPage, showToast } = useApp();
  
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, string>>({});
  const [submittedQuestions, setSubmittedQuestions] = useState<Record<string, boolean>>({});
  const [quizFinished, setQuizFinished] = useState<boolean>(false);
  const [secondsRemaining, setSecondsRemaining] = useState<number>(180); // 3 minutes total
  const [isTimerRunning, setIsTimerRunning] = useState<boolean>(true);

  const questions = sampleQuizQuestions;
  const currentQuestion: QuizQuestion = questions[currentIndex];

  useEffect(() => {
    let timer: any = null;
    if (isTimerRunning && secondsRemaining > 0 && !quizFinished) {
      timer = setInterval(() => {
        setSecondsRemaining(prev => prev - 1);
      }, 1000);
    } else if (secondsRemaining === 0 && !quizFinished) {
      handleFinishQuiz();
    }
    return () => clearInterval(timer);
  }, [isTimerRunning, secondsRemaining, quizFinished]);

  const handleSelectOption = (optId: string) => {
    if (submittedQuestions[currentQuestion.id]) return;
    setSelectedAnswers({
      ...selectedAnswers,
      [currentQuestion.id]: optId
    });
  };

  const handleSubmitCurrentAnswer = () => {
    const selected = selectedAnswers[currentQuestion.id];
    if (!selected) {
      showToast('Please pick an option to submit your answer!');
      return;
    }

    setSubmittedQuestions({
      ...submittedQuestions,
      [currentQuestion.id]: true
    });

    const isCorrect = selected === currentQuestion.correctOptionId;
    if (isCorrect) {
      confetti({ particleCount: 50, spread: 60, origin: { y: 0.7 } });
      showToast('✨ Correct Answer! +10 Mastery XP');
    } else {
      showToast('Review the AI explanation to reinforce the concept.');
    }
  };

  const handleNextQuestion = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(prev => prev + 1);
    } else {
      handleFinishQuiz();
    }
  };

  const handleFinishQuiz = () => {
    setQuizFinished(true);
    setIsTimerRunning(false);

    // Calculate score
    let correctCount = 0;
    questions.forEach(q => {
      if (selectedAnswers[q.id] === q.correctOptionId) {
        correctCount++;
      }
    });

    const scorePercent = Math.round((correctCount / questions.length) * 100);
    if (scorePercent >= 80) {
      confetti({ particleCount: 150, spread: 90, origin: { y: 0.5 } });
      showToast(`🏆 Outstanding! You scored ${scorePercent}% and earned a badge!`);
    }

    setUser(prev => ({
      ...prev,
      quizzesCompleted: prev.quizzesCompleted + 1,
      averageQuizScore: Math.round((prev.averageQuizScore + scorePercent) / 2)
    }));
  };

  const handleRestartQuiz = () => {
    setCurrentIndex(0);
    setSelectedAnswers({});
    setSubmittedQuestions({});
    setQuizFinished(false);
    setSecondsRemaining(180);
    setIsTimerRunning(true);
  };

  const formatTime = (secs: number) => {
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    return `${m}:${s < 10 ? '0' : ''}${s}`;
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      
      {/* Quiz Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-6 border-b border-slate-200 dark:border-slate-800">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-brand-50 dark:bg-brand-950/60 border border-brand-200 dark:border-brand-800 text-brand-700 dark:text-brand-300 mb-2">
            <Award className="w-3.5 h-3.5" />
            <span>AI Adaptive Assessment Engine</span>
          </div>
          <h1 className="font-heading text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
            Smart Quiz: Backend Engineering & REST APIs
          </h1>
        </div>

        {!quizFinished && (
          <div className="flex items-center gap-3 self-start sm:self-auto">
            <div className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl border text-xs font-bold ${
              secondsRemaining < 60 
                ? 'bg-rose-50 dark:bg-rose-950/60 border-rose-300 dark:border-rose-800 text-rose-600 dark:text-rose-400 animate-pulse'
                : 'bg-slate-100 dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300'
            }`}>
              <Timer className="w-4 h-4" />
              <span>{formatTime(secondsRemaining)}</span>
            </div>

            <div className="px-3.5 py-1.5 rounded-xl bg-brand-50 dark:bg-brand-950/60 border border-brand-200 dark:border-brand-800 text-xs font-bold text-brand-700 dark:text-brand-300">
              Q{currentIndex + 1} of {questions.length}
            </div>
          </div>
        )}
      </div>

      {!quizFinished ? (
        <div className="rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xl p-6 sm:p-8 space-y-6">
          
          {/* Progress Tracker */}
          <div className="space-y-2">
            <div className="flex justify-between text-xs font-bold text-slate-400">
              <span>Overall Assessment Progress</span>
              <span>{Math.round(((currentIndex + 1) / questions.length) * 100)}%</span>
            </div>
            <div className="w-full bg-slate-100 dark:bg-slate-800 h-2 rounded-full overflow-hidden">
              <div 
                className="bg-gradient-to-r from-brand-600 to-accent-cyan h-2 rounded-full transition-all duration-300"
                style={{ width: `${((currentIndex + 1) / questions.length) * 100}%` }}
              />
            </div>
          </div>

          {/* Question Box */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded text-[10px] font-extrabold bg-brand-100 dark:bg-brand-900/60 text-brand-700 dark:text-brand-300 uppercase">
                {currentQuestion.category}
              </span>
              <span className="text-xs text-slate-400 font-medium">• Difficulty: {currentQuestion.difficulty}</span>
            </div>

            <h2 className="font-heading text-lg sm:text-xl font-bold text-slate-900 dark:text-white leading-relaxed">
              {currentQuestion.question}
            </h2>

            {currentQuestion.codeSnippet && (
              <pre className="p-4 rounded-2xl bg-slate-950 text-emerald-300 text-xs font-mono overflow-x-auto border border-slate-800 leading-relaxed">
                <code>{currentQuestion.codeSnippet}</code>
              </pre>
            )}
          </div>

          {/* Options */}
          <div className="space-y-3">
            {currentQuestion.options.map((opt) => {
              const isSelected = selectedAnswers[currentQuestion.id] === opt.id;
              const isSubmitted = !!submittedQuestions[currentQuestion.id];
              const isCorrect = opt.id === currentQuestion.correctOptionId;

              let style = 'border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-brand-400';

              if (isSubmitted) {
                if (isCorrect) {
                  style = 'border-emerald-500 bg-emerald-50/80 dark:bg-emerald-950/40 text-emerald-900 dark:text-emerald-200 ring-2 ring-emerald-500/20';
                } else if (isSelected && !isCorrect) {
                  style = 'border-rose-500 bg-rose-50/80 dark:bg-rose-950/40 text-rose-900 dark:text-rose-200';
                }
              } else if (isSelected) {
                style = 'border-brand-600 bg-brand-50/60 dark:bg-brand-950/40 ring-2 ring-brand-500/20';
              }

              return (
                <button
                  key={opt.id}
                  onClick={() => handleSelectOption(opt.id)}
                  disabled={isSubmitted}
                  className={`w-full p-4 rounded-2xl border text-left transition-all flex items-center justify-between ${style}`}
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

                  {isSubmitted && isCorrect && <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />}
                  {isSubmitted && isSelected && !isCorrect && <XCircle className="w-5 h-5 text-rose-600 dark:text-rose-400" />}
                </button>
              );
            })}
          </div>

          {/* AI Explanation Accordion */}
          {submittedQuestions[currentQuestion.id] && (
            <div className="p-4 rounded-2xl bg-brand-50/80 dark:bg-brand-950/40 border border-brand-200 dark:border-brand-800 space-y-1.5 animate-in fade-in duration-200">
              <div className="flex items-center gap-2 text-xs font-bold text-brand-700 dark:text-brand-300">
                <Sparkles className="w-4 h-4" />
                <span>AI Concept Explanation</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                {currentQuestion.explanation}
              </p>
            </div>
          )}

          {/* Action Row */}
          <div className="flex items-center justify-between pt-4 border-t border-slate-100 dark:border-slate-800">
            <button
              onClick={() => {
                if (currentIndex > 0) setCurrentIndex(prev => prev - 1);
              }}
              disabled={currentIndex === 0}
              className="px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 disabled:opacity-30 text-xs font-semibold"
            >
              Previous Question
            </button>

            {!submittedQuestions[currentQuestion.id] ? (
              <button
                onClick={handleSubmitCurrentAnswer}
                className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-brand-600 to-indigo-600 hover:from-brand-500 hover:to-indigo-500 text-white font-bold text-xs sm:text-sm shadow-md"
              >
                Submit Answer
              </button>
            ) : (
              <button
                onClick={handleNextQuestion}
                className="px-6 py-2.5 rounded-xl bg-brand-600 hover:bg-brand-500 text-white font-bold text-xs sm:text-sm shadow-md flex items-center gap-1.5"
              >
                <span>{currentIndex === questions.length - 1 ? 'View Final Results' : 'Next Question'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            )}
          </div>

        </div>
      ) : (
        /* Quiz Completed Results Card */
        <div className="rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xl p-8 sm:p-12 text-center space-y-6">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-gradient-to-tr from-amber-400 to-orange-500 text-white shadow-xl mb-2">
            <Trophy className="w-10 h-10 animate-bounce" />
          </div>

          <div>
            <span className="px-3 py-1 rounded-full text-xs font-bold bg-emerald-100 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-400">
              ASSESSMENT COMPLETE
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mt-3">
              Score: {Object.keys(selectedAnswers).filter(id => {
                const q = questions.find(item => item.id === id);
                return q && selectedAnswers[id] === q.correctOptionId;
              }).length} / {questions.length} (
                {Math.round(
                  (Object.keys(selectedAnswers).filter(id => {
                    const q = questions.find(item => item.id === id);
                    return q && selectedAnswers[id] === q.correctOptionId;
                  }).length / questions.length) * 100
                )}%
              )
            </h2>
            <p className="text-sm text-slate-500 dark:text-slate-400 max-w-md mx-auto mt-2">
              Your performance has been recorded in your student dashboard. Your mastery in REST APIs & Node.js architecture has leveled up!
            </p>
          </div>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              onClick={handleRestartQuiz}
              className="w-full sm:w-auto px-6 py-3 rounded-xl border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 font-bold text-xs sm:text-sm flex items-center justify-center gap-2"
            >
              <RefreshCw className="w-4 h-4" />
              <span>Retake Assessment</span>
            </button>

            <button
              onClick={() => setCurrentPage('dashboard')}
              className="w-full sm:w-auto px-6 py-3 rounded-xl bg-gradient-to-r from-brand-600 to-indigo-600 hover:from-brand-500 hover:to-indigo-500 text-white font-bold text-xs sm:text-sm shadow-md flex items-center justify-center gap-2"
            >
              <Zap className="w-4 h-4" />
              <span>Back to Dashboard</span>
            </button>
          </div>
        </div>
      )}

    </div>
  );
};
