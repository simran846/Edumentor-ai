import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { pricingPlansData } from '../../data/mockData';
import { 
  CreditCard, 
  Check, 
  X, 
  Sparkles, 
  ArrowRight, 
  Building2, 
  ShieldCheck, 
  HelpCircle 
} from 'lucide-react';

export const PricingSection: React.FC = () => {
  const { setCurrentPage, showToast, openAuthModal } = useApp();
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('monthly');

  const handlePlanCTA = (planId: string) => {
    if (planId === 'free') {
      openAuthModal('signup');
    } else if (planId === 'pro') {
      showToast('🎉 PRO Plan selected! Redirecting to secure Stripe checkout...');
    } else {
      showToast('📩 Campus Partnership form loaded! We will reach out in 24 hours.');
    }
  };

  return (
    <section className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-brand-50 dark:bg-brand-950/60 border border-brand-200 dark:border-brand-800 text-brand-700 dark:text-brand-300 mb-3">
            <CreditCard className="w-3.5 h-3.5" />
            <span>Transparent Student-First Pricing</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Invest in Your Tech Career
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-400">
            Less than the cost of a single textbook, with 100x the career ROI.
          </p>

          {/* Billing Cycle Switch */}
          <div className="mt-8 inline-flex items-center p-1.5 rounded-2xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
            <button
              onClick={() => setBillingCycle('monthly')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                billingCycle === 'monthly'
                  ? 'bg-white dark:bg-slate-900 text-brand-600 dark:text-brand-400 shadow-sm'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
              }`}
            >
              Monthly Billing
            </button>
            <button
              onClick={() => setBillingCycle('annual')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-2 ${
                billingCycle === 'annual'
                  ? 'bg-white dark:bg-slate-900 text-brand-600 dark:text-brand-400 shadow-sm'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
              }`}
            >
              <span>Annual Billing</span>
              <span className="px-1.5 py-0.2 rounded-full text-[9px] font-extrabold bg-emerald-100 dark:bg-emerald-950/80 text-emerald-700 dark:text-emerald-400">
                SAVE 20%
              </span>
            </button>
          </div>
        </div>

        {/* 3 Pricing Cards Grid */}
        <div className="grid lg:grid-cols-3 gap-8 items-stretch">
          {pricingPlansData.map((plan) => {
            const isPro = plan.id === 'pro';
            const price = billingCycle === 'annual' ? plan.priceAnnual : plan.priceMonthly;

            return (
              <div
                key={plan.id}
                className={`relative rounded-3xl p-7 sm:p-8 flex flex-col justify-between transition-all duration-300 ${
                  isPro
                    ? 'bg-white dark:bg-slate-900 border-2 border-brand-500 shadow-2xl shadow-brand-500/15 lg:-translate-y-2 ring-4 ring-brand-500/10'
                    : 'bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-soft hover:shadow-soft-lg'
                }`}
              >
                {/* Popular Badge */}
                {plan.badge && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3.5 py-1 rounded-full text-[10px] font-extrabold tracking-wider bg-gradient-to-r from-brand-600 to-indigo-600 text-white shadow-md">
                    {plan.badge}
                  </div>
                )}

                <div>
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-heading text-xl font-bold text-slate-900 dark:text-white">
                      {plan.name}
                    </h3>
                  </div>

                  <p className="text-xs text-slate-500 dark:text-slate-400 min-h-[32px]">
                    {plan.tagline}
                  </p>

                  {/* Price display */}
                  <div className="mt-4 mb-6 pb-6 border-b border-slate-100 dark:border-slate-800">
                    {plan.id === 'institution' ? (
                      <div className="font-heading text-3xl font-extrabold text-slate-900 dark:text-white">
                        Contact Us
                      </div>
                    ) : (
                      <div className="flex items-baseline gap-1">
                        <span className="font-heading text-4xl font-extrabold text-slate-900 dark:text-white">
                          ₹{price}
                        </span>
                        <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                          /month
                        </span>
                      </div>
                    )}
                    <span className="text-[11px] text-slate-400 block mt-1">
                      {plan.id === 'institution' ? 'Custom campus licensing' : plan.period}
                    </span>
                  </div>

                  {/* Features List */}
                  <div className="space-y-3 mb-8">
                    <p className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white">
                      Included Features:
                    </p>
                    {plan.features.map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-700 dark:text-slate-300">
                        <div className="p-0.5 rounded-full bg-emerald-100 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5">
                          <Check className="w-3.5 h-3.5" />
                        </div>
                        <span className="leading-snug">{feat}</span>
                      </div>
                    ))}

                    {plan.notIncluded && plan.notIncluded.map((notFeat, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-400 dark:text-slate-600">
                        <div className="p-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-400 shrink-0 mt-0.5">
                          <X className="w-3.5 h-3.5" />
                        </div>
                        <span className="line-through leading-snug">{notFeat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Plan CTA Button */}
                <div>
                  <button
                    onClick={() => handlePlanCTA(plan.id)}
                    className={`w-full py-3.5 rounded-2xl font-bold text-xs sm:text-sm transition-all flex items-center justify-center gap-2 ${
                      isPro
                        ? 'bg-gradient-to-r from-brand-600 to-indigo-600 hover:from-brand-500 hover:to-indigo-500 text-white shadow-lg shadow-brand-500/25'
                        : 'bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-900 dark:text-white'
                    }`}
                  >
                    <span>{plan.ctaText}</span>
                    <ArrowRight className="w-4 h-4" />
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
