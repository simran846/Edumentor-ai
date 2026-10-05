import React from 'react';
import { HeroSection } from '../components/home/HeroSection';
import { TrustSection } from '../components/home/TrustSection';
import { FeaturesSection } from '../components/home/FeaturesSection';
import { AIMentorPreviewSection } from '../components/home/AIMentorPreviewSection';
import { LearningPathsSection } from '../components/home/LearningPathsSection';
import { DashboardPreviewSection } from '../components/home/DashboardPreviewSection';
import { CareerRoadmapSection } from '../components/home/CareerRoadmapSection';
import { QuizPreviewSection } from '../components/home/QuizPreviewSection';
import { PricingSection } from '../components/home/PricingSection';
import { TestimonialsSection } from '../components/home/TestimonialsSection';

export const HomePage: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection />
      <TrustSection />
      <FeaturesSection />
      <AIMentorPreviewSection />
      <LearningPathsSection />
      <DashboardPreviewSection />
      <CareerRoadmapSection />
      <QuizPreviewSection />
      <PricingSection />
      <TestimonialsSection />
    </div>
  );
};
