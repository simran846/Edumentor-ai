import { LearningPath, UserProfile, QuizQuestion, CareerRole, ResumeData, PricingPlan, Testimonial } from '../types';

export const initialUserProfile: UserProfile = {
  name: "Simran Kaur",
  email: "simran.k@learn.edu",
  avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
  role: "Student",
  targetRole: "Backend Developer",
  college: "National Institute of Technology",
  graduationYear: "2026",
  streakDays: 14,
  totalHoursLearned: 42.5,
  quizzesCompleted: 28,
  averageQuizScore: 88,
  skillsGained: 18,
  atsScore: 86
};

export const backendRoadmapMilestones = [
  {
    id: "m-1",
    week: 1,
    title: "Programming Fundamentals",
    description: "Data types, memory structures, OOP concepts & clean coding habits.",
    duration: "1 Week",
    status: "completed" as const,
    topics: ["Memory allocation", "Algorithms (Big-O)", "Data Structures", "Design Patterns"],
    project: "CLI Task Manager in Node"
  },
  {
    id: "m-2",
    week: 2,
    title: "Modern JavaScript (ES6+)",
    description: "Deep dive into Event Loop, Closures, Promises, and Async/Await mechanisms.",
    duration: "1.5 Weeks",
    status: "completed" as const,
    topics: ["Event Loop & Microtasks", "Async/Await", "Prototypes", "ES Modules"],
    project: "Async Event Emitter & Streamer"
  },
  {
    id: "m-3",
    week: 3,
    title: "Node.js Core Architecture",
    description: "V8 Engine, Libuv, Streams, Buffers, and the Native File System modules.",
    duration: "1.5 Weeks",
    status: "completed" as const,
    topics: ["Libuv Thread Pool", "Streams & Buffers", "Child Processes", "Error Handling"],
    project: "High-Performance File Upload Service"
  },
  {
    id: "m-4",
    week: 4,
    title: "Express.js Framework",
    description: "Routing, Custom Middleware pipelines, Controller patterns, and Request Validation.",
    duration: "1.5 Weeks",
    status: "in-progress" as const,
    topics: ["Middleware Chains", "Router Architecture", "Zod Validation", "Global Error Handlers"],
    project: "Enterprise Middleware Suite"
  },
  {
    id: "m-5",
    week: 5,
    title: "REST APIs & Best Practices",
    description: "HTTP Verbs, Idempotency, Status codes, Rate Limiting, Versioning, and OpenAPI specs.",
    duration: "1 Week",
    status: "in-progress" as const,
    topics: ["REST Principles", "Status Code Hierarchy", "Rate Limiting (Redis)", "Swagger / OpenAPI"],
    project: "E-Commerce REST API v1"
  },
  {
    id: "m-6",
    week: 6,
    title: "Databases (PostgreSQL & MongoDB)",
    description: "Relational modeling, Indexing, Transactions (ACID), Prisma ORM, and Mongoose.",
    duration: "2 Weeks",
    status: "upcoming" as const,
    topics: ["PostgreSQL Schema Design", "B-Tree Indexing", "Prisma ORM", "MongoDB Aggregations"],
    project: "Multi-tenant Database Pipeline"
  },
  {
    id: "m-7",
    week: 7,
    title: "Authentication & Security",
    description: "JWT, Refresh tokens, OAuth 2.0, RBAC, Password hashing (bcrypt), and CSRF/CORS.",
    duration: "1.5 Weeks",
    status: "upcoming" as const,
    topics: ["JWT vs Session cookies", "OAuth2 & SSO", "RBAC / Permissions", "OWASP Top 10 Protections"],
    project: "Secure Identity Auth Provider"
  },
  {
    id: "m-8",
    week: 8,
    title: "Deployment, Docker & Cloud",
    description: "Containerization with Docker, CI/CD pipelines, AWS EC2, and Nginx reverse proxies.",
    duration: "1 Week",
    status: "upcoming" as const,
    topics: ["Docker Multi-stage builds", "GitHub Actions CI/CD", "Nginx Reverse Proxy", "Cloud Hosting"],
    project: "Containerized Cloud API Deploy"
  },
  {
    id: "m-9",
    week: 9,
    title: "Capstone Backend Project",
    description: "Build a scalable, real-world microservice with caching, queuing, and monitoring.",
    duration: "1.5 Weeks",
    status: "upcoming" as const,
    topics: ["BullMQ Message Queues", "Redis Caching", "Prometheus & Grafana", "Load Testing with k6"],
    project: "FinTech Transaction Engine with Kafka"
  }
];

export const learningPathsData: LearningPath[] = [
  {
    id: "path-backend",
    title: "Backend Development",
    slug: "backend-development",
    category: "Backend",
    description: "Master Node.js, Express, PostgreSQL, Microservices, and Cloud API Architecture.",
    difficulty: "Intermediate",
    duration: "12 Weeks",
    totalModules: 9,
    completedModules: 4,
    enrolledStudents: 3420,
    rating: 4.9,
    icon: "Server",
    color: "from-blue-600 to-indigo-600",
    tags: ["Node.js", "Express", "PostgreSQL", "Docker", "REST API", "Redis"],
    salaryRange: "₹8L - ₹24L / yr",
    milestones: backendRoadmapMilestones,
    nextLesson: "Building REST APIs with Express"
  },
  {
    id: "path-fullstack",
    title: "Full Stack Development",
    slug: "full-stack-development",
    category: "Web Dev",
    description: "Build end-to-end modern web applications with React, Next.js, Node, and TypeScript.",
    difficulty: "Beginner",
    duration: "16 Weeks",
    totalModules: 12,
    completedModules: 2,
    enrolledStudents: 4890,
    rating: 4.95,
    icon: "Layers",
    color: "from-indigo-500 to-purple-600",
    tags: ["React", "Next.js", "TypeScript", "Tailwind", "Node.js", "Prisma"],
    salaryRange: "₹7L - ₹22L / yr",
    milestones: backendRoadmapMilestones
  },
  {
    id: "path-ai",
    title: "Artificial Intelligence",
    slug: "artificial-intelligence",
    category: "AI & ML",
    description: "Learn Deep Learning, Neural Networks, LLMs, LangChain, and Agentic AI Architectures.",
    difficulty: "Advanced",
    duration: "14 Weeks",
    totalModules: 10,
    completedModules: 1,
    enrolledStudents: 2850,
    rating: 4.88,
    icon: "Brain",
    color: "from-purple-600 to-pink-600",
    tags: ["Python", "PyTorch", "LLMs", "RAG", "LangChain", "Vector DBs"],
    salaryRange: "₹12L - ₹32L / yr",
    milestones: backendRoadmapMilestones
  },
  {
    id: "path-ml",
    title: "Machine Learning",
    slug: "machine-learning",
    category: "AI & ML",
    description: "Supervised & Unsupervised Learning, Feature Engineering, Scikit-Learn, and MLOps.",
    difficulty: "Intermediate",
    duration: "12 Weeks",
    totalModules: 8,
    completedModules: 0,
    enrolledStudents: 2190,
    rating: 4.85,
    icon: "Cpu",
    color: "from-pink-500 to-rose-600",
    tags: ["Scikit-Learn", "Pandas", "NumPy", "TensorFlow", "Feature Engineering"],
    salaryRange: "₹10L - ₹28L / yr",
    milestones: backendRoadmapMilestones
  },
  {
    id: "path-ds",
    title: "Data Science",
    slug: "data-science",
    category: "Data Science",
    description: "Statistical inference, Exploratory Data Analysis, Tableau, Big Data, and Predictive Modeling.",
    difficulty: "Beginner",
    duration: "10 Weeks",
    totalModules: 7,
    completedModules: 0,
    enrolledStudents: 1940,
    rating: 4.79,
    icon: "BarChart3",
    color: "from-teal-500 to-emerald-600",
    tags: ["Python", "SQL", "Tableau", "Statistics", "PowerBI"],
    salaryRange: "₹7L - ₹20L / yr",
    milestones: backendRoadmapMilestones
  },
  {
    id: "path-cloud",
    title: "Cloud & DevOps",
    slug: "cloud-devops",
    category: "Cloud & DevOps",
    description: "Kubernetes, Docker, Terraform, AWS Services, CI/CD pipelines, and Infrastructure as Code.",
    difficulty: "Intermediate",
    duration: "12 Weeks",
    totalModules: 9,
    completedModules: 0,
    enrolledStudents: 1680,
    rating: 4.92,
    icon: "Cloud",
    color: "from-cyan-500 to-blue-600",
    tags: ["AWS", "Kubernetes", "Docker", "Terraform", "GitHub Actions"],
    salaryRange: "₹9L - ₹26L / yr",
    milestones: backendRoadmapMilestones
  },
  {
    id: "path-security",
    title: "Cybersecurity",
    slug: "cybersecurity",
    category: "Cybersecurity",
    description: "Network security, Ethical Hacking, Web vulnerability scanning (OWASP), and Cryptography.",
    difficulty: "Advanced",
    duration: "14 Weeks",
    totalModules: 10,
    completedModules: 0,
    enrolledStudents: 1250,
    rating: 4.86,
    icon: "ShieldCheck",
    color: "from-emerald-500 to-teal-700",
    tags: ["Ethical Hacking", "OWASP", "Burp Suite", "Cryptography", "Linux"],
    salaryRange: "₹8L - ₹25L / yr",
    milestones: backendRoadmapMilestones
  },
  {
    id: "path-dsa",
    title: "Competitive Programming",
    slug: "competitive-programming",
    category: "Programming",
    description: "Advanced Data Structures & Algorithms, Dynamic Programming, Graphs, and Contest Strategies.",
    difficulty: "Intermediate",
    duration: "10 Weeks",
    totalModules: 8,
    completedModules: 3,
    enrolledStudents: 3100,
    rating: 4.94,
    icon: "Code2",
    color: "from-amber-500 to-orange-600",
    tags: ["C++", "Graphs", "DP", "Tree Algorithms", "LeetCode Hard"],
    salaryRange: "₹10L - ₹35L / yr",
    milestones: backendRoadmapMilestones
  }
];

export const sampleQuizQuestions: QuizQuestion[] = [
  {
    id: "q-1",
    question: "Which HTTP method is commonly used to create a new resource?",
    codeSnippet: `// Example Request:\nfetch('/api/v1/users', {\n  method: '???',\n  body: JSON.stringify(userData)\n});`,
    options: [
      { id: "opt-a", label: "A", text: "GET" },
      { id: "opt-b", label: "B", text: "POST" },
      { id: "opt-c", label: "C", text: "DELETE" },
      { id: "opt-d", label: "D", text: "PATCH" }
    ],
    correctOptionId: "opt-b",
    explanation: "POST is the standard RESTful HTTP method designed for creating new resources on the server. GET retrieves resources, DELETE removes them, and PATCH performs partial updates.",
    category: "REST APIs",
    difficulty: "Easy"
  },
  {
    id: "q-2",
    question: "In Node.js, what component handles asynchronous I/O operations and provides the event loop?",
    options: [
      { id: "opt-a", label: "A", text: "V8 Engine" },
      { id: "opt-b", label: "B", text: "Libuv" },
      { id: "opt-c", label: "C", text: "Babel" },
      { id: "opt-d", label: "D", text: "Webpack" }
    ],
    correctOptionId: "opt-b",
    explanation: "Libuv is a multi-platform C library that handles the event loop, thread pool, asynchronous file system I/O, DNS resolution, and network operations in Node.js.",
    category: "Node.js Architecture",
    difficulty: "Medium"
  },
  {
    id: "q-3",
    question: "What HTTP status code represents '201 Created'?",
    codeSnippet: `res.status(201).json({ message: "Student account created successfully" });`,
    options: [
      { id: "opt-a", label: "A", text: "Success without payload (204)" },
      { id: "opt-b", label: "B", text: "Resource created successfully" },
      { id: "opt-c", label: "C", text: "Bad Request error" },
      { id: "opt-d", label: "D", text: "Permanent Redirect" }
    ],
    correctOptionId: "opt-b",
    explanation: "201 Created indicates that the request has succeeded and led to the creation of a new resource, commonly returned after a successful POST request.",
    category: "REST APIs",
    difficulty: "Easy"
  },
  {
    id: "q-4",
    question: "Which index type is default in PostgreSQL and optimal for range queries (<, <=, =, >=, >)?",
    options: [
      { id: "opt-a", label: "A", text: "Hash Index" },
      { id: "opt-b", label: "B", text: "B-Tree Index" },
      { id: "opt-c", label: "C", text: "GIN Index" },
      { id: "opt-d", label: "D", text: "BRIN Index" }
    ],
    correctOptionId: "opt-b",
    explanation: "B-Tree (Balanced Tree) is the default index in PostgreSQL. It is self-balancing and performs search, sequential access, insertions, and deletions in logarithmic O(log n) time.",
    category: "Databases",
    difficulty: "Medium"
  },
  {
    id: "q-5",
    question: "How do you securely store user passwords in a backend authentication system?",
    options: [
      { id: "opt-a", label: "A", text: "Plaintext with Base64 encoding" },
      { id: "opt-b", label: "B", text: "MD5 checksum hash" },
      { id: "opt-c", label: "C", text: "Salted cryptographic hash with bcrypt or Argon2" },
      { id: "opt-d", label: "D", text: "AES symmetric encryption stored with static key" }
    ],
    correctOptionId: "opt-c",
    explanation: "Using a slow, adaptive cryptographic hashing algorithm with per-user random salts (such as bcrypt, Argon2, or scrypt) prevents dictionary, brute-force, and rainbow table attacks.",
    category: "Security & Auth",
    difficulty: "Medium"
  }
];

export const careerRolesData: CareerRole[] = [
  {
    id: "backend-dev",
    title: "Backend Engineer / Node.js Developer",
    matchScore: 84,
    averageSalary: "₹10.5 LPA",
    growthRate: "+28% YoY",
    description: "Design high-concurrency microservices, data persistence layers, API gateways, and distributed caching systems.",
    demandedSkills: [
      { name: "Node.js & Express", hasSkill: true, category: "framework" },
      { name: "RESTful API Design", hasSkill: true, category: "core" },
      { name: "PostgreSQL & SQL", hasSkill: true, category: "core" },
      { name: "JWT & Auth", hasSkill: true, category: "core" },
      { name: "Redis Caching", hasSkill: false, category: "tool" },
      { name: "Docker Containers", hasSkill: false, category: "tool" },
      { name: "System Design Basics", hasSkill: false, category: "core" }
    ],
    recommendedProjects: [
      "Distributed Rate-Limited URL Shortener with Redis",
      "Real-time Chat Backend with WebSocket & Kafka",
      "E-Commerce Payment Webhook Processing Service"
    ],
    jobOpenings: [
      {
        company: "Razorpay",
        logo: "💳",
        role: "Backend Engineering Intern",
        location: "Bengaluru (Hybrid)",
        stipendOrSalary: "₹45,000 / mo + PPO",
        tags: ["Node.js", "Postgres", "Redis"]
      },
      {
        company: "Swiggy",
        logo: "🛵",
        role: "Associate Software Engineer",
        location: "Remote / Bengaluru",
        stipendOrSalary: "₹14 - 18 LPA",
        tags: ["Express", "Microservices", "Kafka"]
      },
      {
        company: "Zerodha",
        logo: "📈",
        role: "Junior Platform Developer",
        location: "Bengaluru",
        stipendOrSalary: "₹12 - 16 LPA",
        tags: ["Go / Node", "Postgres", "Docker"]
      }
    ]
  },
  {
    id: "fullstack-dev",
    title: "Full Stack Engineer",
    matchScore: 78,
    averageSalary: "₹11.2 LPA",
    growthRate: "+32% YoY",
    description: "Develop seamless web applications across client-side interactive UI and scalable server architectures.",
    demandedSkills: [
      { name: "React & Next.js", hasSkill: true, category: "framework" },
      { name: "TypeScript", hasSkill: true, category: "core" },
      { name: "Tailwind CSS", hasSkill: true, category: "framework" },
      { name: "Node.js APIs", hasSkill: true, category: "core" },
      { name: "GraphQL", hasSkill: false, category: "tool" },
      { name: "CI/CD Deployment", hasSkill: false, category: "tool" }
    ],
    recommendedProjects: [
      "Collaborative SaaS Workspace with Real-Time Canvas",
      "AI Markdown Knowledge Hub with Next.js 14"
    ],
    jobOpenings: [
      {
        company: "BrowserStack",
        logo: "🌐",
        role: "Full Stack Intern",
        location: "Mumbai / Remote",
        stipendOrSalary: "₹50,000 / mo",
        tags: ["React", "TypeScript", "Node"]
      },
      {
        company: "Postman",
        logo: "🚀",
        role: "Software Engineer I",
        location: "Bengaluru",
        stipendOrSalary: "₹16 - 22 LPA",
        tags: ["Next.js", "APIs", "Electron"]
      }
    ]
  },
  {
    id: "ai-engineer",
    title: "AI & LLM Application Engineer",
    matchScore: 62,
    averageSalary: "₹15.8 LPA",
    growthRate: "+54% YoY",
    description: "Build generative AI systems, RAG pipelines, vector retrieval agents, and fine-tuned domain models.",
    demandedSkills: [
      { name: "Python", hasSkill: true, category: "core" },
      { name: "REST APIs", hasSkill: true, category: "core" },
      { name: "LangChain / LlamaIndex", hasSkill: false, category: "framework" },
      { name: "Vector Databases (Pinecone/Milvus)", hasSkill: false, category: "tool" },
      { name: "PyTorch & Transformers", hasSkill: false, category: "core" }
    ],
    recommendedProjects: [
      "Multimodal Document Q&A Agent with Vector Search",
      "Autonomous Code Review Bot using OpenAI API"
    ],
    jobOpenings: [
      {
        company: "Sarvam AI",
        logo: "🤖",
        role: "AI Research & Engineering Intern",
        location: "Bengaluru",
        stipendOrSalary: "₹60,000 / mo",
        tags: ["PyTorch", "LLMs", "FastAPI"]
      }
    ]
  }
];

export const sampleResumeData: ResumeData = {
  fullName: "Simran Kaur",
  title: "Aspiring Backend & Full Stack Software Engineer",
  email: "simran.kaur@email.com",
  phone: "+91 98765 43210",
  location: "New Delhi, India",
  linkedin: "linkedin.com/in/simran-kaur-dev",
  github: "github.com/simran-codes",
  summary: "Driven Computer Science student with practical experience building scalable RESTful APIs, asynchronous services with Node.js & Express, and relational database schemas in PostgreSQL. Passionate about system performance, clean architecture, and building user-centric cloud applications.",
  skills: [
    "JavaScript (ES6+)", "TypeScript", "Node.js", "Express.js", 
    "PostgreSQL", "MongoDB", "REST APIs", "Git & GitHub", 
    "React", "Tailwind CSS", "Docker (Basics)", "Postman", "Linux"
  ],
  experiences: [
    {
      id: "exp-1",
      role: "Backend Engineering Trainee",
      company: "EduMentor AI Academy",
      period: "Jul 2026 – Present",
      bullets: [
        "Architected modular RESTful API services in Express handling 500+ requests/min with sub-60ms response latency.",
        "Implemented JWT authentication with refresh token rotation and bcrypt hashing, securing 1,000+ mock student accounts.",
        "Engineered database indexing strategies in PostgreSQL, optimizing query execution speed by 38%."
      ]
    },
    {
      id: "exp-2",
      role: "Student Technical Lead",
      company: "College Developer Club",
      period: "Sep 2025 – Jun 2026",
      bullets: [
        "Mentored 60+ junior peers on JavaScript fundamentals, Git workflows, and modern web architectures.",
        "Organized 4 intra-college 24-hour hackathons with 250+ participants across 5 departments."
      ]
    }
  ],
  education: [
    {
      degree: "B.Tech in Computer Science & Engineering",
      institution: "National Institute of Technology",
      year: "2022 – 2026",
      gpa: "8.8 / 10.0 CGPA"
    }
  ],
  projects: [
    {
      id: "proj-1",
      title: "TaskFlow: High-Performance Distributed Task Scheduler",
      tech: "Node.js, Express, PostgreSQL, Redis, Docker",
      description: "Engineered a persistent job queue system handling scheduled batch jobs, email dispatches, and failure retries with exponential backoff."
    },
    {
      id: "proj-2",
      title: "DocuQuery: AI Semantic Document Search Engine",
      tech: "React, Node.js, Vector Embeddings, Tailwind CSS",
      description: "Built a full-stack document analyzer enabling students to upload PDF textbooks and query contextual insights in real-time."
    }
  ]
};

export const pricingPlansData: PricingPlan[] = [
  {
    id: "free",
    name: "FREE",
    priceMonthly: 0,
    priceAnnual: 0,
    period: "Forever Free",
    tagline: "Essential AI learning tools for motivated self-starters.",
    features: [
      "Basic AI Mentor (20 queries/day)",
      "Standard Learning Paths (8 tracks)",
      "Adaptive Quizzes (5 quizzes/month)",
      "Progress Tracking & Heatmap",
      "Community Discord Access",
      "Public Certificate of Completion"
    ],
    notIncluded: [
      "Personalized 12-Week AI Roadmaps",
      "ATS Resume Builder & AI Polish",
      "1-on-1 AI Mock Interviews",
      "Direct Internship Recommendations"
    ],
    ctaText: "Get Started Free",
    ctaVariant: "outline"
  },
  {
    id: "pro",
    name: "PRO",
    priceMonthly: 299,
    priceAnnual: 239,
    period: "per month, billed monthly",
    tagline: "The complete career acceleration toolkit for serious learners.",
    popular: true,
    badge: "MOST POPULAR",
    features: [
      "Unlimited AI Mentor 24/7 with deep reasoning",
      "Hyper-Personalized Dynamic Roadmaps",
      "Unlimited Adaptive Quizzes with code checks",
      "Skill Gap Analysis for top companies",
      "AI Resume Optimizer & ATS Score Meter",
      "AI Mock Interview Simulator with voice mode",
      "Curated Internship & Job Matching Board",
      "Priority Discord AI Support"
    ],
    ctaText: "Upgrade to Pro",
    ctaVariant: "primary"
  },
  {
    id: "institution",
    name: "INSTITUTION",
    priceMonthly: 0,
    priceAnnual: 0,
    period: "Custom Institutional Pricing",
    tagline: "Empower your entire college or university department.",
    badge: "FOR COLLEGES",
    features: [
      "All Pro Features for unlimited students",
      "College Department Analytics Dashboard",
      "Custom Curriculums & University Syllabus mapping",
      "Faculty Progress Monitoring & Gradebooks",
      "Campus Placement & ATS Tracking",
      "SSO Integration (Google, Microsoft)",
      "Dedicated Customer Success Manager",
      "Official University Co-Branding"
    ],
    ctaText: "Contact Us for Campus Pilot",
    ctaVariant: "secondary"
  }
];

export const testimonialsData: Testimonial[] = [
  {
    id: "t-1",
    name: "Simran Kaur",
    role: "Backend Engineer Intern",
    collegeOrCompany: "Placed at Razorpay",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=120&auto=format&fit=crop&q=80",
    content: "EduMentor helped me create a structured roadmap instead of randomly learning technologies. The AI mentor pinpointed exactly what I lacked in Node.js & Redis, boosting my ATS resume score to 86%. Landed my dream internship!",
    rating: 5,
    outcomeBadge: "Landed ₹45k/mo Internship"
  },
  {
    id: "t-2",
    name: "Aryan Deshmukh",
    role: "Full Stack Developer",
    collegeOrCompany: "IIT Bombay Alumni",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&auto=format&fit=crop&q=80",
    content: "The smart quizzes adapt to where you make mistakes. When I struggled with React render cycles, EduMentor immediately queued targeted micro-lessons and code katas. It's like having a senior engineer mentoring you 24/7.",
    rating: 5,
    outcomeBadge: "12-Week Roadmap Completed"
  },
  {
    id: "t-3",
    name: "Priyansh Verma",
    role: "Cloud & DevOps Engineer",
    collegeOrCompany: "Placed at Swiggy",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=120&auto=format&fit=crop&q=80",
    content: "The Skill Gap Analysis is revolutionary. It compared my profile against real job specs at Swiggy and showed I was missing Docker multi-stage builds. I fixed it in 3 days using the personalized learning path.",
    rating: 5,
    outcomeBadge: "18 LPA Full-time Offer"
  }
];

export const platformStats = [
  { value: "10K+", label: "Active Learners", sub: "from 120+ top colleges" },
  { value: "500+", label: "Learning Resources", sub: "curated roadmaps & katas" },
  { value: "95%", label: "Learning Engagement", sub: "completion rate vs 12% industry avg" },
  { value: "24/7", label: "AI Mentor Support", sub: "instant personalized feedback" }
];
