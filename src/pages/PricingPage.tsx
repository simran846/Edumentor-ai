import React, { useState } from 'react';
import { PricingSection } from '../components/home/PricingSection';
import { Check, X, Sparkles, HelpCircle, ChevronDown, ChevronUp, Shield, Building2 } from 'lucide-react';
import { useApp } from '../context/AppContext';

export const PricingPage: React.FC = () => {
  const { showToast } = useApp();
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const faqs = [
    {
      q: "How does the AI Mentor differ from generic chatbots like ChatGPT?",
      a: "EduMentor AI is specifically fine-tuned on verified engineering roadmaps, software architecture patterns, and technical interview rubrics. It remembers your active code progress, calculates your live ATS score, and suggests adaptive quizzes based on your past errors."
    },
    {
      q: "Can I cancel my Pro subscription at any time?",
      a: "Yes! There are zero long-term commitments. You can cancel your subscription with 1-click in your account settings and keep full access until the end of your billing cycle."
    },
    {
      q: "How do institutional licenses work for colleges and universities?",
      a: "Our Institution tier provides a department-wide analytics dashboard where professors and placement heads can track student completion, automate weekly coding challenges, and prepare entire cohorts for campus placement drives."
    },
    {
      q: "Is there a student discount available?",
      a: "Yes! Our Pro plan is already heavily subsidized at ₹299/mo (less than ₹10/day). Annual billing grants an additional 20% discount."
    }
  ];

  return (
    <div className="space-y-16 pb-20">
      <PricingSection />

      {/* Feature Comparison Matrix */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xl space-y-6">
          <div className="text-center max-w-xl mx-auto">
            <h3 className="font-heading text-2xl font-bold text-slate-900 dark:text-white">
              Plan Comparison Matrix
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
              Detailed breakdown of features across individual and institutional tiers.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead>
                <tr className="border-b border-slate-200 dark:border-slate-800">
                  <th className="pb-4 font-bold text-slate-900 dark:text-white">Feature</th>
                  <th className="pb-4 font-bold text-slate-600 dark:text-slate-400 text-center">FREE</th>
                  <th className="pb-4 font-bold text-brand-600 dark:text-brand-400 text-center">PRO (₹299)</th>
                  <th className="pb-4 font-bold text-slate-600 dark:text-slate-400 text-center">INSTITUTION</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800/60">
                <tr>
                  <td className="py-3 font-medium text-slate-800 dark:text-slate-200">24/7 AI Mentor Queries</td>
                  <td className="py-3 text-center text-slate-500">20 / day</td>
                  <td className="py-3 text-center font-bold text-brand-600">Unlimited</td>
                  <td className="py-3 text-center font-bold text-emerald-600">Unlimited</td>
                </tr>
                <tr>
                  <td className="py-3 font-medium text-slate-800 dark:text-slate-200">Personalized 12-Week Roadmaps</td>
                  <td className="py-3 text-center text-slate-400">Basic</td>
                  <td className="py-3 text-center font-bold text-emerald-600">Dynamic AI</td>
                  <td className="py-3 text-center font-bold text-emerald-600">Custom Syllabus Mapped</td>
                </tr>
                <tr>
                  <td className="py-3 font-medium text-slate-800 dark:text-slate-200">Adaptive Smart Quizzes</td>
                  <td className="py-3 text-center text-slate-500">5 / month</td>
                  <td className="py-3 text-center font-bold text-brand-600">Unlimited</td>
                  <td className="py-3 text-center font-bold text-emerald-600">Unlimited + Gradebook</td>
                </tr>
                <tr>
                  <td className="py-3 font-medium text-slate-800 dark:text-slate-200">ATS Resume Builder & AI Polish</td>
                  <td className="py-3 text-center text-slate-400">❌</td>
                  <td className="py-3 text-center font-bold text-emerald-600">✅ Included</td>
                  <td className="py-3 text-center font-bold text-emerald-600">✅ Included</td>
                </tr>
                <tr>
                  <td className="py-3 font-medium text-slate-800 dark:text-slate-200">AI Mock Interviews</td>
                  <td className="py-3 text-center text-slate-400">❌</td>
                  <td className="py-3 text-center font-bold text-emerald-600">✅ Unlimited</td>
                  <td className="py-3 text-center font-bold text-emerald-600">✅ Unlimited</td>
                </tr>
                <tr>
                  <td className="py-3 font-medium text-slate-800 dark:text-slate-200">Direct Internship Placement Referrals</td>
                  <td className="py-3 text-center text-slate-400">Community</td>
                  <td className="py-3 text-center font-bold text-brand-600">Priority Fast-Track</td>
                  <td className="py-3 text-center font-bold text-emerald-600">Campus Drive Integration</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* FAQ Accordion */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-xl mx-auto mb-10">
          <h3 className="font-heading text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
            Frequently Asked Questions
          </h3>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openFaq === idx;
            return (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs cursor-pointer transition-all"
                onClick={() => setOpenFaq(isOpen ? null : idx)}
              >
                <div className="flex items-center justify-between">
                  <h4 className="font-heading text-sm sm:text-base font-bold text-slate-900 dark:text-white">
                    {faq.q}
                  </h4>
                  {isOpen ? <ChevronUp className="w-4 h-4 text-brand-500" /> : <ChevronDown className="w-4 h-4 text-slate-400" />}
                </div>
                {isOpen && (
                  <p className="mt-3 text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed animate-in fade-in duration-150">
                    {faq.a}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>

    </div>
  );
};
