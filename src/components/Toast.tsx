import React from 'react';
import { useApp } from '../context/AppContext';
import { Sparkles, Info } from 'lucide-react';

export const Toast: React.FC = () => {
  const { toastMessage } = useApp();

  if (!toastMessage) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-in fade-in slide-in-from-bottom-5 duration-200 pointer-events-none">
      <div className="flex items-center gap-3 px-4 py-3 rounded-2xl bg-slate-900/95 dark:bg-white/95 text-white dark:text-slate-900 shadow-2xl border border-slate-700/50 dark:border-slate-200 backdrop-blur-md max-w-md">
        <div className="flex items-center justify-center w-7 h-7 rounded-xl bg-brand-500/20 text-brand-400 dark:text-brand-600 shrink-0">
          <Sparkles className="w-4 h-4 animate-spin text-brand-400 dark:text-brand-600" />
        </div>
        <p className="text-xs sm:text-sm font-medium leading-snug">
          {toastMessage}
        </p>
      </div>
    </div>
  );
};
