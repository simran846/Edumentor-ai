import React from 'react';
import { testimonialsData } from '../../data/mockData';
import { Star, Quote, Sparkles, CheckCircle2 } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-20 bg-slate-50/60 dark:bg-slate-900/40 border-t border-slate-200/80 dark:border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-brand-50 dark:bg-brand-950/60 border border-brand-200 dark:border-brand-800 text-brand-700 dark:text-brand-300 mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Student Success Stories</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Loved by Ambitious Learners
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-400">
            Read how college students transformed their preparation into high-paying engineering offers.
          </p>
        </div>

        {/* Testimonials 3-Card Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonialsData.map((t) => (
            <div
              key={t.id}
              className="p-7 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-soft hover:shadow-soft-lg transition-all flex flex-col justify-between"
            >
              <div>
                {/* Rating & Outcome Badge */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-extrabold bg-emerald-100 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-400">
                    {t.outcomeBadge}
                  </span>
                </div>

                {/* Content */}
                <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed italic mb-6">
                  "{t.content}"
                </p>
              </div>

              {/* Author Footer */}
              <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center gap-3">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-10 h-10 rounded-full object-cover ring-2 ring-brand-500/30"
                />
                <div>
                  <h4 className="font-heading text-sm font-bold text-slate-900 dark:text-white">
                    {t.name}
                  </h4>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400 font-medium">
                    {t.role} • <span className="text-brand-600 dark:text-brand-400 font-semibold">{t.collegeOrCompany}</span>
                  </p>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
