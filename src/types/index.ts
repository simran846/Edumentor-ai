export type NavPage = 
  | 'home' 
  | 'courses' 
  | 'paths' 
  | 'mentor' 
  | 'dashboard' 
  | 'quizzes' 
  | 'career' 
  | 'resume' 
  | 'pricing' 
  | 'about';

export interface UserProfile {
  name: string;
  email: string;
  avatar: string;
  role: 'Student' | 'Job Seeker' | 'Professional';
  targetRole: string;
  college: string;
  graduationYear: string;
  streakDays: number;
  totalHoursLearned: number;
  quizzesCompleted: number;
  averageQuizScore: number;
  skillsGained: number;
  atsScore: number;
}

export interface RoadmapMilestone {
  id: string;
  week: number;
  title: string;
  description: string;
  duration: string;
  status: 'completed' | 'in-progress' | 'upcoming';
  topics: string[];
  project?: string;
  quizId?: string;
}

export interface LearningPath {
  id: string;
  title: string;
  slug: string;
  category: 'Web Dev' | 'Backend' | 'AI & ML' | 'Data Science' | 'Cloud & DevOps' | 'Cybersecurity' | 'Programming';
  description: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  duration: string;
  totalModules: number;
  completedModules: number;
  enrolledStudents: number;
  rating: number;
  icon: string;
  color: string;
  tags: string[];
  salaryRange: string;
  milestones: RoadmapMilestone[];
  nextLesson?: string;
}

export interface CourseLesson {
  id: string;
  title: string;
  duration: string;
  type: 'video' | 'interactive' | 'quiz' | 'project';
  completed: boolean;
  summary?: string;
}

export interface CourseModule {
  id: string;
  title: string;
  lessons: CourseLesson[];
}

export interface QuizQuestion {
  id: string;
  question: string;
  codeSnippet?: string;
  options: {
    id: string;
    label: string;
    text: string;
  }[];
  correctOptionId: string;
  explanation: string;
  category: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
}

export interface QuizResult {
  score: number;
  totalQuestions: number;
  correctAnswers: number;
  timeTakenSeconds: number;
  passed: boolean;
  feedback: string;
}

export interface ChatMessage {
  id: string;
  sender: 'user' | 'ai';
  text: string;
  timestamp: string;
  roadmapData?: RoadmapMilestone[];
  suggestedPrompts?: string[];
  actionLink?: {
    page: NavPage;
    label: string;
  };
}

export interface CareerRole {
  id: string;
  title: string;
  matchScore: number;
  averageSalary: string;
  growthRate: string;
  description: string;
  demandedSkills: { name: string; hasSkill: boolean; category: 'core' | 'framework' | 'tool' }[];
  recommendedProjects: string[];
  jobOpenings: {
    company: string;
    logo: string;
    role: string;
    location: string;
    stipendOrSalary: string;
    tags: string[];
  }[];
}

export interface ResumeData {
  fullName: string;
  title: string;
  email: string;
  phone: string;
  location: string;
  linkedin: string;
  github: string;
  summary: string;
  skills: string[];
  experiences: {
    id: string;
    role: string;
    company: string;
    period: string;
    bullets: string[];
  }[];
  education: {
    degree: string;
    institution: string;
    year: string;
    gpa: string;
  }[];
  projects: {
    id: string;
    title: string;
    tech: string;
    description: string;
  }[];
}

export interface PricingPlan {
  id: string;
  name: string;
  priceMonthly: number;
  priceAnnual: number;
  period: string;
  tagline: string;
  popular?: boolean;
  badge?: string;
  features: string[];
  notIncluded?: string[];
  ctaText: string;
  ctaVariant: 'primary' | 'outline' | 'secondary';
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  collegeOrCompany: string;
  avatar: string;
  content: string;
  rating: number;
  outcomeBadge: string;
}
