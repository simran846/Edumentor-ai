import React from 'react';
import { useApp } from './context/AppContext';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { AuthModal } from './components/AuthModal';
import { Toast } from './components/Toast';

import { HomePage } from './pages/HomePage';
import { AIMentorPage } from './pages/AIMentorPage';
import { CoursesAndPathsPage } from './pages/CoursesAndPathsPage';
import { DashboardPage } from './pages/DashboardPage';
import { QuizPage } from './pages/QuizPage';
import { CareerPage } from './pages/CareerPage';
import { ResumeBuilderPage } from './pages/ResumeBuilderPage';
import { PricingPage } from './pages/PricingPage';
import { AboutPage } from './pages/AboutPage';

export const App: React.FC = () => {
  const { currentPage } = useApp();

  const renderActivePage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage />;
      case 'mentor':
        return <AIMentorPage />;
      case 'courses':
      case 'paths':
        return <CoursesAndPathsPage />;
      case 'dashboard':
        return <DashboardPage />;
      case 'quizzes':
        return <QuizPage />;
      case 'career':
        return <CareerPage />;
      case 'resume':
        return <ResumeBuilderPage />;
      case 'pricing':
        return <PricingPage />;
      case 'about':
        return <AboutPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#fafcff] dark:bg-[#0b0f19] text-slate-900 dark:text-slate-100 selection:bg-brand-500 selection:text-white transition-colors duration-200">
      <Navbar />
      <main className="flex-grow">
        {renderActivePage()}
      </main>
      <Footer />
      <AuthModal />
      <Toast />
    </div>
  );
};

export default App;
