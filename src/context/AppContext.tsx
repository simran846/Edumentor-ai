import React, { createContext, useContext, useState, useEffect } from 'react';
import { NavPage, UserProfile, LearningPath, ChatMessage, ResumeData } from '../types';
import { initialUserProfile, learningPathsData, sampleResumeData, backendRoadmapMilestones } from '../data/mockData';

interface AppContextType {
  currentPage: NavPage;
  setCurrentPage: (page: NavPage) => void;
  darkMode: boolean;
  toggleDarkMode: () => void;
  user: UserProfile;
  setUser: React.Dispatch<React.SetStateAction<UserProfile>>;
  isAuthModalOpen: boolean;
  authMode: 'login' | 'signup';
  openAuthModal: (mode?: 'login' | 'signup') => void;
  closeAuthModal: () => void;
  selectedPath: LearningPath | null;
  setSelectedPath: (path: LearningPath | null) => void;
  toastMessage: string | null;
  showToast: (message: string) => void;
  chatMessages: ChatMessage[];
  sendMessage: (text: string) => void;
  resumeData: ResumeData;
  setResumeData: React.Dispatch<React.SetStateAction<ResumeData>>;
  activeQuickPrompt: string | null;
  triggerAIPrompt: (prompt: string) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

const initialChatMessages: ChatMessage[] = [
  {
    id: "msg-1",
    sender: "ai",
    text: "👋 Hi Simran! I'm your EduMentor AI guide. What learning or career milestone would you like to conquer today?",
    timestamp: "10:30 AM",
    suggestedPrompts: [
      "I want to become a backend developer.",
      "Explain REST APIs vs GraphQL simply.",
      "How can I boost my resume ATS score?",
      "Create a 12-week AI Engineering roadmap."
    ]
  },
  {
    id: "msg-2",
    sender: "user",
    text: "I want to become a backend developer.",
    timestamp: "10:31 AM"
  },
  {
    id: "msg-3",
    sender: "ai",
    text: "Great choice, Simran! Based on your current progress in JavaScript, I've constructed a high-yield, 12-week Backend Development roadmap tailored to meet production requirements at top tech firms like Razorpay and Swiggy.",
    timestamp: "10:31 AM",
    roadmapData: backendRoadmapMilestones,
    suggestedPrompts: [
      "Start Week 4: Express Middleware",
      "Quiz me on REST API HTTP methods",
      "What projects should I put on my resume?",
      "Compare PostgreSQL vs MongoDB for FinTech"
    ],
    actionLink: {
      page: "paths",
      label: "View Full 12-Week Interactive Roadmap"
    }
  }
];

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentPage, setCurrentPage] = useState<NavPage>('home');
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  });
  const [user, setUser] = useState<UserProfile>(initialUserProfile);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState<boolean>(false);
  const [authMode, setAuthMode] = useState<'login' | 'signup'>('login');
  const [selectedPath, setSelectedPath] = useState<LearningPath | null>(learningPathsData[0]);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>(initialChatMessages);
  const [resumeData, setResumeData] = useState<ResumeData>(sampleResumeData);
  const [activeQuickPrompt, setActiveQuickPrompt] = useState<string | null>(null);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(prev => !prev);
  };

  const showToast = (message: string) => {
    setToastMessage(message);
    setTimeout(() => {
      setToastMessage(null);
    }, 4000);
  };

  const openAuthModal = (mode: 'login' | 'signup' = 'login') => {
    setAuthMode(mode);
    setIsAuthModalOpen(true);
  };

  const closeAuthModal = () => {
    setIsAuthModalOpen(false);
  };

  const triggerAIPrompt = (promptText: string) => {
    setCurrentPage('mentor');
    sendMessage(promptText);
  };

  const sendMessage = (text: string) => {
    const userMsgId = 'usr-' + Date.now();
    const newUserMsg: ChatMessage = {
      id: userMsgId,
      sender: 'user',
      text,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setChatMessages(prev => [...prev, newUserMsg]);

    // Simulate intelligent AI response
    setTimeout(() => {
      let aiReplyText = "";
      let roadmapData = undefined;
      let actionLink = undefined;
      let suggestedPrompts = [
        "Give me a 5-minute code challenge",
        "Review my project architecture",
        "Explain with an analogy",
        "How do I prepare for technical interviews?"
      ];

      const lower = text.toLowerCase();
      if (lower.includes('backend') || lower.includes('roadmap')) {
        aiReplyText = `Here is your customized backend development pathway! I've structured it into 9 core milestones spanning programming fundamentals, Node.js internals, Express routing, database indexing, and Docker cloud deployment.`;
        roadmapData = backendRoadmapMilestones;
        actionLink = { page: 'paths' as NavPage, label: 'Explore Interactive Modules' };
      } else if (lower.includes('rest') || lower.includes('graphql') || lower.includes('http')) {
        aiReplyText = `REST vs GraphQL breakdown in simple terms:\n\n• **REST (Representational State Transfer)**: Uses standard HTTP verbs (GET, POST, PUT, DELETE) with distinct endpoints per resource (e.g. \`/api/users/42\`). Great for standard caching, simple mental models, and decoupled services.\n\n• **GraphQL**: Single endpoint where the client requests *precisely* the schema fields it needs, preventing over-fetching and under-fetching.\n\n👉 *AI Tip for Backend Roles:* Most enterprise hiring tests prioritize mastering REST status codes and idempotent PUT/DELETE behaviors before GraphQL!`;
        suggestedPrompts = [
          "Take a 5-question REST API Quiz",
          "Show me sample Express middleware code",
          "How does caching with Redis work?"
        ];
        actionLink = { page: 'quizzes' as NavPage, label: 'Practice REST API Quiz Now' };
      } else if (lower.includes('resume') || lower.includes('ats')) {
        aiReplyText = `Your current ATS Score is **86/100**! 🌟\n\n**Key Strengths:**\n✅ Strong quantifiable metrics in bullets (e.g., 'sub-60ms response latency', 'optimized query speed by 38%')\n✅ High keyword density for Node.js, Express, PostgreSQL\n\n**Improvement Recommendation:**\n⚠️ Add *Redis* and *Docker* containerization to your Skills section to match 92% of Junior Backend job descriptions.`;
        actionLink = { page: 'resume' as NavPage, label: 'Open ATS Resume Builder' };
      } else if (lower.includes('quiz') || lower.includes('test')) {
        aiReplyText = `Ready to test your knowledge? I've loaded an adaptive 5-question assessment on Backend Architecture and HTTP Methods. Let's see if you can achieve a streak!`;
        actionLink = { page: 'quizzes' as NavPage, label: 'Start Interactive Quiz' };
      } else if (lower.includes('ai engineering') || lower.includes('machine learning')) {
        aiReplyText = `AI & LLM Application Engineering requires 4 pillars:\n1. Python & Vector Embeddings (Pinecone/Chroma)\n2. LangChain / LlamaIndex orchestration\n3. RAG (Retrieval-Augmented Generation) Architecture\n4. Fast API microservice deployment.\n\nI've added the full 14-week curriculum to your Learning Paths!`;
        actionLink = { page: 'paths' as NavPage, label: 'View AI Learning Path' };
      } else {
        aiReplyText = `Analyzing your question: "${text}"...\n\nHere is your tailored AI breakdown: In modern software engineering, consistent micro-learning coupled with deliberate project building yields a 3.4x faster mastery rate. Would you like me to generate a tailored quiz, a step-by-step code tutorial, or map this to an upcoming interview topic?`;
      }

      const aiMsg: ChatMessage = {
        id: 'ai-' + Date.now(),
        sender: 'ai',
        text: aiReplyText,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        roadmapData,
        suggestedPrompts,
        actionLink
      };

      setChatMessages(prev => [...prev, aiMsg]);
    }, 600);
  };

  return (
    <AppContext.Provider
      value={{
        currentPage,
        setCurrentPage,
        darkMode,
        toggleDarkMode,
        user,
        setUser,
        isAuthModalOpen,
        authMode,
        openAuthModal,
        closeAuthModal,
        selectedPath,
        setSelectedPath,
        toastMessage,
        showToast,
        chatMessages,
        sendMessage,
        resumeData,
        setResumeData,
        activeQuickPrompt,
        triggerAIPrompt
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};
