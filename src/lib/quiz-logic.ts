export type QuizAnswers = Record<string, string>;

export interface QuizResult {
  pathId: string;
  title: string;
  matchScore: number;
  difficulty: string;
  timeToStart: string;
  incomeRange: string;
  tools: string[];
  steps: { title: string; description: string }[];
  icon: string;
}

const PATH_SCORES: Record<string, Record<string, Record<string, number>>> = {
  income_goal: {
    "500":  { freelancer: 3, "content-creator": 3, "workflow-automation": 3, "ai-agents": 1, "ai-automation": 1, "digital-products": 2, "no-code-ai": 2, "ai-marketing": 2, "youtube-automation": 1 },
    "1k":   { freelancer: 3, "content-creator": 2, "workflow-automation": 2, "ai-agents": 2, "ai-automation": 2, "digital-products": 3, "no-code-ai": 2, "ai-marketing": 2, "youtube-automation": 2 },
    "2.5k": { freelancer: 2, "content-creator": 2, "workflow-automation": 1, "ai-agents": 3, "ai-automation": 3, "digital-products": 2, "no-code-ai": 2, "ai-marketing": 3, "youtube-automation": 3 },
    "5k+":  { freelancer: 1, "content-creator": 1, "workflow-automation": 1, "ai-agents": 3, "ai-automation": 3, "digital-products": 2, "no-code-ai": 1, "ai-marketing": 2, "youtube-automation": 3 },
  },
  hours: {
    "1-2": { freelancer: 2, "content-creator": 3, "workflow-automation": 3, "ai-agents": 1, "ai-automation": 1, "digital-products": 2, "no-code-ai": 2, "ai-marketing": 2, "youtube-automation": 1 },
    "2-4": { freelancer: 3, "content-creator": 3, "workflow-automation": 2, "ai-agents": 2, "ai-automation": 2, "digital-products": 3, "no-code-ai": 3, "ai-marketing": 2, "youtube-automation": 2 },
    "4-6": { freelancer: 3, "content-creator": 2, "workflow-automation": 2, "ai-agents": 3, "ai-automation": 3, "digital-products": 2, "no-code-ai": 2, "ai-marketing": 3, "youtube-automation": 3 },
    full:  { freelancer: 2, "content-creator": 2, "workflow-automation": 1, "ai-agents": 3, "ai-automation": 3, "digital-products": 2, "no-code-ai": 2, "ai-marketing": 3, "youtube-automation": 3 },
  },
  skill_level: {
    beginner:     { freelancer: 2, "content-creator": 3, "workflow-automation": 3, "ai-agents": 1, "ai-automation": 1, "digital-products": 2, "no-code-ai": 3, "ai-marketing": 2, "youtube-automation": 1 },
    basic:        { freelancer: 3, "content-creator": 3, "workflow-automation": 2, "ai-agents": 2, "ai-automation": 2, "digital-products": 3, "no-code-ai": 3, "ai-marketing": 2, "youtube-automation": 2 },
    intermediate: { freelancer: 3, "content-creator": 2, "workflow-automation": 2, "ai-agents": 3, "ai-automation": 3, "digital-products": 2, "no-code-ai": 2, "ai-marketing": 3, "youtube-automation": 3 },
    advanced:     { freelancer: 2, "content-creator": 1, "workflow-automation": 1, "ai-agents": 3, "ai-automation": 3, "digital-products": 2, "no-code-ai": 1, "ai-marketing": 2, "youtube-automation": 3 },
  },
  interest: {
    agents:      { freelancer: 1, "content-creator": 1, "workflow-automation": 2, "ai-agents": 3, "ai-automation": 2, "digital-products": 1, "no-code-ai": 2, "ai-marketing": 1, "youtube-automation": 1 },
    automation:  { freelancer: 1, "content-creator": 1, "workflow-automation": 3, "ai-agents": 2, "ai-automation": 3, "digital-products": 1, "no-code-ai": 2, "ai-marketing": 1, "youtube-automation": 1 },
    youtube:     { freelancer: 1, "content-creator": 2, "workflow-automation": 1, "ai-agents": 1, "ai-automation": 1, "digital-products": 1, "no-code-ai": 1, "ai-marketing": 2, "youtube-automation": 3 },
    freelancing: { freelancer: 3, "content-creator": 1, "workflow-automation": 2, "ai-agents": 2, "ai-automation": 2, "digital-products": 1, "no-code-ai": 2, "ai-marketing": 1, "youtube-automation": 1 },
    content:     { freelancer: 1, "content-creator": 3, "workflow-automation": 1, "ai-agents": 1, "ai-automation": 1, "digital-products": 2, "no-code-ai": 1, "ai-marketing": 2, "youtube-automation": 2 },
    products:    { freelancer: 1, "content-creator": 1, "workflow-automation": 1, "ai-agents": 1, "ai-automation": 1, "digital-products": 3, "no-code-ai": 2, "ai-marketing": 2, "youtube-automation": 1 },
  },
  budget: {
    "0":    { freelancer: 3, "content-creator": 3, "workflow-automation": 3, "ai-agents": 1, "ai-automation": 1, "digital-products": 2, "no-code-ai": 2, "ai-marketing": 1, "youtube-automation": 1 },
    "50":   { freelancer: 3, "content-creator": 3, "workflow-automation": 2, "ai-agents": 2, "ai-automation": 2, "digital-products": 3, "no-code-ai": 3, "ai-marketing": 2, "youtube-automation": 2 },
    "200":  { freelancer: 2, "content-creator": 2, "workflow-automation": 2, "ai-agents": 3, "ai-automation": 3, "digital-products": 2, "no-code-ai": 2, "ai-marketing": 3, "youtube-automation": 3 },
    "200+": { freelancer: 1, "content-creator": 1, "workflow-automation": 1, "ai-agents": 3, "ai-automation": 3, "digital-products": 2, "no-code-ai": 1, "ai-marketing": 3, "youtube-automation": 3 },
  },
};

const PATH_DETAILS: Record<string, Omit<QuizResult, "matchScore">> = {
  freelancer: {
    pathId: "freelancer",
    title: "AI Freelancer",
    icon: "briefcase",
    difficulty: "Beginner-Friendly",
    timeToStart: "2–4 weeks",
    incomeRange: "$500–$3,000/mo",
    tools: ["ChatGPT", "Claude", "Canva AI", "Jasper", "Fiverr / Upwork"],
    steps: [
      { title: "Learn core AI tools", description: "Master ChatGPT, Claude, and 2–3 specialist tools in your niche." },
      { title: "Pick a service niche", description: "AI copywriting, SEO articles, or AI image creation — go narrow." },
      { title: "Build a portfolio", description: "Create 3–5 sample projects showcasing your AI-powered output." },
      { title: "Set up your profile", description: "Create profiles on Fiverr and Upwork with a keyword-rich bio." },
      { title: "Land your first client", description: "Offer a discounted first project, collect a review, then raise rates." },
    ],
  },
  "content-creator": {
    pathId: "content-creator",
    title: "AI Content Creation",
    icon: "paintbrush",
    difficulty: "Beginner-Friendly",
    timeToStart: "1–3 weeks",
    incomeRange: "$300–$2,500/mo",
    tools: ["ChatGPT", "Copy.ai", "Jasper", "Canva", "Buffer"],
    steps: [
      { title: "Choose your content niche", description: "Finance, health, or tech — pick where brands spend money on content." },
      { title: "Master AI writing tools", description: "Learn to write, edit, and humanize AI content quickly." },
      { title: "Build your portfolio site", description: "Publish 10 sample articles on a simple portfolio site." },
      { title: "Pitch to brands directly", description: "Cold email 20 brands per week offering blog packages." },
      { title: "Scale with retainers", description: "Convert one-off clients to monthly retainers for stable income." },
    ],
  },
  "youtube-automation": {
    pathId: "youtube-automation",
    title: "YouTube Automation",
    icon: "youtube",
    difficulty: "Intermediate",
    timeToStart: "4–8 weeks",
    incomeRange: "$500–$5,000/mo",
    tools: ["ChatGPT", "ElevenLabs", "Pictory", "Canva", "TubeBuddy"],
    steps: [
      { title: "Pick a faceless niche", description: "Finance facts, motivational content, or top-10 videos work best." },
      { title: "Set up your AI workflow", description: "Script with ChatGPT → voiceover with ElevenLabs → edit with Pictory." },
      { title: "Publish 30 videos in 30 days", description: "Consistency beats perfection in the early growth stage." },
      { title: "Hit 1,000 subscribers", description: "Apply for YouTube monetization and start earning AdSense." },
      { title: "Add sponsorships", description: "At 5k+ subscribers, approach brands for $100–$500/video deals." },
    ],
  },
  "ai-agents": {
    pathId: "ai-agents",
    title: "AI Agents",
    icon: "cpu",
    difficulty: "Intermediate",
    timeToStart: "3–6 weeks",
    incomeRange: "$1,000–$8,000/mo",
    tools: ["ChatGPT API", "LangChain", "AutoGPT", "Make.com", "n8n"],
    steps: [
      { title: "Understand AI agents basics", description: "Learn what agents are, how they reason, and how they take actions." },
      { title: "Build your first agent", description: "Create a simple task-automation agent using OpenAI API + LangChain." },
      { title: "Package it as a product", description: "Wrap the agent in a simple UI and define a clear use case for clients." },
      { title: "Find your first buyer", description: "Target small businesses or agencies that need repetitive tasks automated." },
      { title: "Scale to recurring revenue", description: "Offer monthly maintenance plans for $200–$1,000/month per client." },
    ],
  },
  "ai-automation": {
    pathId: "ai-automation",
    title: "AI Automation",
    icon: "zap",
    difficulty: "Intermediate",
    timeToStart: "3–5 weeks",
    incomeRange: "$1,000–$6,000/mo",
    tools: ["Make.com", "Zapier", "ChatGPT API", "Airtable", "n8n"],
    steps: [
      { title: "Learn no-code automation tools", description: "Start with Make.com or Zapier — build your first workflow in a day." },
      { title: "Add AI to your workflows", description: "Integrate ChatGPT API to make automations smart, not just fast." },
      { title: "Identify high-value use cases", description: "Lead gen, email follow-up, social posting — businesses pay well for these." },
      { title: "Offer as a done-for-you service", description: "Charge $500–$2,000 per automation setup as a one-time project." },
      { title: "Upsell to maintenance retainers", description: "Offer $200–$500/month to monitor and improve their automations." },
    ],
  },
  "digital-products": {
    pathId: "digital-products",
    title: "Digital Products",
    icon: "shopping-bag",
    difficulty: "Intermediate",
    timeToStart: "3–6 weeks",
    incomeRange: "$500–$5,000/mo",
    tools: ["ChatGPT", "Canva", "Gumroad", "Notion", "Lemon Squeezy"],
    steps: [
      { title: "Research what people buy", description: "Look at top sellers on Gumroad and Etsy — find a gap." },
      { title: "Create your first product", description: "AI eBook, Notion template, or prompt pack — ship in under a week." },
      { title: "Set up your storefront", description: "List on Gumroad with an SEO-optimized title and description." },
      { title: "Drive traffic with content", description: "Post about your product on Instagram and Twitter daily." },
      { title: "Launch a product line", description: "Create 5–10 products and build a passive income machine." },
    ],
  },
  "no-code-ai": {
    pathId: "no-code-ai",
    title: "No-Code AI",
    icon: "layout",
    difficulty: "Beginner-Friendly",
    timeToStart: "2–4 weeks",
    incomeRange: "$500–$4,000/mo",
    tools: ["Bubble.io", "Glide", "Voiceflow", "ChatGPT API", "Webflow"],
    steps: [
      { title: "Pick a no-code platform", description: "Start with Bubble.io or Glide — both have free tiers to learn on." },
      { title: "Build your first AI-powered app", description: "A simple chatbot, quiz tool, or recommendation engine is perfect." },
      { title: "Validate with real users", description: "Share for free in communities, collect feedback, iterate fast." },
      { title: "Monetize via subscriptions", description: "Charge $10–$50/month for access to your app or tool." },
      { title: "Build for clients", description: "Offer custom no-code AI app builds for $500–$2,000 per project." },
    ],
  },
  "ai-marketing": {
    pathId: "ai-marketing",
    title: "AI Marketing",
    icon: "trending-up",
    difficulty: "Intermediate",
    timeToStart: "2–4 weeks",
    incomeRange: "$800–$5,000/mo",
    tools: ["ChatGPT", "Jasper", "Surfer SEO", "AdCreative.ai", "Buffer"],
    steps: [
      { title: "Learn AI marketing fundamentals", description: "Understand how AI improves SEO, ads, email, and social content." },
      { title: "Master AI copywriting tools", description: "Use Jasper and ChatGPT to produce high-converting ad copy fast." },
      { title: "Run test campaigns", description: "Start with small budgets on Meta or Google and use AI to optimize." },
      { title: "Offer AI marketing services", description: "Target e-commerce brands and local businesses — charge $500–$2,000/month." },
      { title: "Build case studies", description: "Document your results and use them to attract higher-paying clients." },
    ],
  },
  "workflow-automation": {
    pathId: "workflow-automation",
    title: "Workflow Automation",
    icon: "repeat",
    difficulty: "Beginner-Friendly",
    timeToStart: "1–3 weeks",
    incomeRange: "$500–$3,500/mo",
    tools: ["Zapier", "Make.com", "Notion AI", "Slack AI", "Google Workspace AI"],
    steps: [
      { title: "Learn Zapier or Make.com", description: "Start free, connect two apps, and build your first workflow in hours." },
      { title: "Identify repetitive tasks", description: "Email sorting, lead capture, data entry — businesses hate doing these." },
      { title: "Build 5 sample automations", description: "Document each one as a case study with time/money saved." },
      { title: "Sell to small businesses", description: "Charge $200–$800 per automation setup as a freelance service." },
      { title: "Package into a monthly offer", description: "Offer ongoing automation maintenance for $200–$500/month." },
    ],
  },
};

export function computeResult(answers: QuizAnswers): QuizResult {
  const scores: Record<string, number> = {
    freelancer: 0,
    "content-creator": 0,
    "youtube-automation": 0,
    "ai-agents": 0,
    "ai-automation": 0,
    "digital-products": 0,
    "no-code-ai": 0,
    "ai-marketing": 0,
    "workflow-automation": 0,
  };

  for (const [questionId, answer] of Object.entries(answers)) {
    const questionScores = PATH_SCORES[questionId]?.[answer];
    if (questionScores) {
      for (const [pathId, score] of Object.entries(questionScores)) {
        scores[pathId] = (scores[pathId] || 0) + score;
      }
    }
  }

  const maxScore = Math.max(...Object.values(scores));
  const totalPossible = 15;
  const winnerId = Object.entries(scores).sort((a, b) => b[1] - a[1])[0][0];
  const matchScore = Math.round((maxScore / totalPossible) * 100);
  const clampedMatch = Math.min(Math.max(matchScore, 72), 96);

  return {
    ...PATH_DETAILS[winnerId],
    matchScore: clampedMatch,
  };
}
