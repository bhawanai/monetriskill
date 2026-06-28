import type { IconName } from "@/components/ui/Icons";

export interface IncomePath {
  id: string;
  title: string;
  description: string;
  icon: IconName;
  difficulty: string;
  difficultyColor: string;
  startupCost: string;
  timeRequired: string;
  income: string;
  color: string;
  border: string;
  iconColor: string;
}

export const INCOME_PATHS: IncomePath[] = [
  {
    id: "freelancer",
    title: "AI Freelancing",
    description: "Offer AI-powered services to businesses worldwide on Fiverr and Upwork.",
    icon: "briefcase",
    iconColor: "text-emerald-400",
    difficulty: "Beginner",
    difficultyColor: "text-emerald-400",
    startupCost: "$0",
    timeRequired: "2–4 weeks",
    income: "$500–$3,000/mo",
    color: "from-emerald-500/10 to-emerald-500/5",
    border: "hover:border-emerald-500/30",
  },
  {
    id: "content-creator",
    title: "AI Content Creation",
    description: "Create blogs, scripts, and social content using AI writing tools.",
    icon: "paintbrush",
    iconColor: "text-pink-400",
    difficulty: "Beginner",
    difficultyColor: "text-emerald-400",
    startupCost: "$0–$30",
    timeRequired: "1–3 weeks",
    income: "$300–$2,500/mo",
    color: "from-pink-500/10 to-pink-500/5",
    border: "hover:border-pink-500/30",
  },
  {
    id: "youtube-automation",
    title: "YouTube Automation",
    description: "Build faceless YouTube channels with AI-generated scripts, voice, and edits.",
    icon: "youtube",
    iconColor: "text-red-400",
    difficulty: "Intermediate",
    difficultyColor: "text-amber-400",
    startupCost: "$30–$100",
    timeRequired: "4–8 weeks",
    income: "$500–$5,000/mo",
    color: "from-red-500/10 to-orange-500/5",
    border: "hover:border-red-500/30",
  },
  {
    id: "ai-agents",
    title: "AI Agents",
    description: "Build and sell autonomous AI agents that work for businesses 24/7.",
    icon: "cpu",
    iconColor: "text-violet-400",
    difficulty: "Intermediate",
    difficultyColor: "text-amber-400",
    startupCost: "$0–$50",
    timeRequired: "3–6 weeks",
    income: "$1,000–$8,000/mo",
    color: "from-violet-500/10 to-purple-500/5",
    border: "hover:border-violet-500/30",
  },
  {
    id: "ai-automation",
    title: "AI Automation",
    description: "Automate business workflows with AI and sell it as a recurring service.",
    icon: "zap",
    iconColor: "text-cyan-400",
    difficulty: "Intermediate",
    difficultyColor: "text-amber-400",
    startupCost: "$0–$50",
    timeRequired: "3–5 weeks",
    income: "$1,000–$6,000/mo",
    color: "from-cyan-500/10 to-blue-500/5",
    border: "hover:border-cyan-500/30",
  },
  {
    id: "digital-products",
    title: "Digital Products",
    description: "Create and sell AI-generated eBooks, templates, and prompt packs.",
    icon: "shopping-bag",
    iconColor: "text-blue-400",
    difficulty: "Intermediate",
    difficultyColor: "text-amber-400",
    startupCost: "$0–$50",
    timeRequired: "3–6 weeks",
    income: "$500–$5,000/mo",
    color: "from-blue-500/10 to-cyan-500/5",
    border: "hover:border-blue-500/30",
  },
  {
    id: "no-code-ai",
    title: "No-Code AI",
    description: "Build AI-powered apps and tools without writing a single line of code.",
    icon: "layout",
    iconColor: "text-amber-400",
    difficulty: "Beginner",
    difficultyColor: "text-emerald-400",
    startupCost: "$0–$30",
    timeRequired: "2–4 weeks",
    income: "$500–$4,000/mo",
    color: "from-amber-500/10 to-yellow-500/5",
    border: "hover:border-amber-500/30",
  },
  {
    id: "ai-marketing",
    title: "AI Marketing",
    description: "Run high-converting ad campaigns and SEO strategies powered by AI.",
    icon: "trending-up",
    iconColor: "text-teal-400",
    difficulty: "Intermediate",
    difficultyColor: "text-amber-400",
    startupCost: "$0–$50",
    timeRequired: "2–4 weeks",
    income: "$800–$5,000/mo",
    color: "from-teal-500/10 to-emerald-500/5",
    border: "hover:border-teal-500/30",
  },
  {
    id: "workflow-automation",
    title: "Workflow Automation",
    description: "Connect apps and automate repetitive tasks for businesses using AI tools.",
    icon: "repeat",
    iconColor: "text-indigo-400",
    difficulty: "Beginner",
    difficultyColor: "text-emerald-400",
    startupCost: "$0",
    timeRequired: "1–3 weeks",
    income: "$500–$3,500/mo",
    color: "from-indigo-500/10 to-violet-500/5",
    border: "hover:border-indigo-500/30",
  },
];

export interface QuizOption {
  label: string;
  value: string;
  icon: IconName;
  sub?: string;
}

export interface QuizQuestion {
  id: string;
  question: string;
  subtitle: string;
  options: QuizOption[];
}

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: "income_goal",
    question: "What's your monthly income goal?",
    subtitle: "Be honest — there's no wrong answer",
    options: [
      { label: "$500/mo", value: "500", icon: "dollar-sign", sub: "Side income" },
      { label: "$1,000/mo", value: "1k", icon: "trending-up", sub: "Part-time" },
      { label: "$2,500/mo", value: "2.5k", icon: "bar-chart", sub: "Full-time" },
      { label: "$5,000+/mo", value: "5k+", icon: "sparkles", sub: "Scale up" },
    ],
  },
  {
    id: "hours",
    question: "How many hours can you work daily?",
    subtitle: "Your time shapes the best path for you",
    options: [
      { label: "1–2 hours", value: "1-2", icon: "clock", sub: "Light schedule" },
      { label: "2–4 hours", value: "2-4", icon: "clock", sub: "Part-time" },
      { label: "4–6 hours", value: "4-6", icon: "clock", sub: "Serious effort" },
      { label: "Full Time", value: "full", icon: "zap", sub: "All in" },
    ],
  },
  {
    id: "skill_level",
    question: "Your current skill level?",
    subtitle: "We'll tailor the roadmap exactly to where you are",
    options: [
      { label: "Complete Beginner", value: "beginner", icon: "book-open", sub: "Starting fresh" },
      { label: "Basic AI Knowledge", value: "basic", icon: "graduation-cap", sub: "Used AI tools" },
      { label: "Intermediate", value: "intermediate", icon: "layers", sub: "Building projects" },
      { label: "Advanced", value: "advanced", icon: "cpu", sub: "Developer level" },
    ],
  },
  {
    id: "interest",
    question: "Which interests you most?",
    subtitle: "Pick the one that excites you",
    options: [
      { label: "AI Agents", value: "agents", icon: "cpu", sub: "Build autonomous AI" },
      { label: "AI Automation", value: "automation", icon: "zap", sub: "Automate workflows" },
      { label: "YouTube", value: "youtube", icon: "youtube", sub: "Faceless channels" },
      { label: "Freelancing", value: "freelancing", icon: "briefcase", sub: "Client work" },
      { label: "Content Creation", value: "content", icon: "paintbrush", sub: "Blogs & social" },
      { label: "Digital Products", value: "products", icon: "shopping-bag", sub: "Sell templates" },
    ],
  },
  {
    id: "budget",
    question: "Budget to invest in tools?",
    subtitle: "Most AI paths start at $0",
    options: [
      { label: "$0 — Free only", value: "0", icon: "sparkles", sub: "No spend" },
      { label: "Under $50", value: "50", icon: "dollar-sign", sub: "Minimal" },
      { label: "$50–$200", value: "200", icon: "trending-up", sub: "Serious" },
      { label: "$200+", value: "200+", icon: "bar-chart", sub: "Scale fast" },
    ],
  },
];

export interface RecommendationItem {
  icon: IconName;
  label: string;
}

export const MY_RECOMMENDATIONS: RecommendationItem[] = [
  { icon: "bot", label: "ChatGPT" },
  { icon: "zap", label: "AI Automation" },
  { icon: "cpu", label: "AI Agents" },
  { icon: "repeat", label: "Workflow Automation" },
  { icon: "briefcase", label: "Freelancing" },
  { icon: "youtube", label: "YouTube Automation" },
  { icon: "paintbrush", label: "AI Content Creation" },
  { icon: "shopping-bag", label: "Digital Products" },
  { icon: "trending-up", label: "AI Marketing" },
  { icon: "layout", label: "No-Code AI" },
];

export interface WhyCard {
  icon: IconName;
  title: string;
  description: string;
  color: string;
  iconColor: string;
}

export const WHY_CARDS: WhyCard[] = [
  {
    icon: "target",
    title: "Beginner Friendly",
    description: "No coding, no degree, no prior experience needed. Start earning with AI from day one.",
    color: "from-violet-500/10 to-violet-500/5",
    iconColor: "text-violet-400",
  },
  {
    icon: "zap",
    title: "Practical AI Skills",
    description: "Real-world skills used by actual earners — not theoretical concepts you'll never use.",
    color: "from-blue-500/10 to-blue-500/5",
    iconColor: "text-blue-400",
  },
  {
    icon: "map",
    title: "Personalized Roadmaps",
    description: "Get a step-by-step plan built around your goals, schedule, and skill level.",
    color: "from-pink-500/10 to-pink-500/5",
    iconColor: "text-pink-400",
  },
  {
    icon: "graduation-cap",
    title: "100% Free Learning",
    description: "Access all tutorials, guides, and resources on YouTube and Instagram — completely free.",
    color: "from-emerald-500/10 to-emerald-500/5",
    iconColor: "text-emerald-400",
  },
];

export const STATS = [
  { value: 12400, label: "People Helped", suffix: "+" },
  { value: 50, label: "AI Tools Covered", suffix: "+" },
  { value: 8900, label: "Roadmaps Created", suffix: "+" },
  { value: 6200, label: "Community Members", suffix: "+" },
];
