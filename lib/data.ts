import type {
  NavItem,
  SocialLink,
  Project,
  Experience,
  Skill,
  Stat,
} from "@/types";

export const personalInfo = {
  name: "Mark Michael Angelo Clarus",
  title: "Full Stack Developer",
  email: "mark.clarus@example.com",
  location: "Philippines",
  available: true,
  availableText: "Available for Freelance & Full-Time",
  description:
    "I build scalable web applications, mobile apps, and enterprise software that solve real-world business problems. I specialize in creating modern digital experiences with clean architecture, intuitive UI, and reliable backend systems.",
  resumeUrl: "/Mark_Michael_Angelo_Clarus_Resume.pdf",
};

export const rotatingTitles = [
  "Full Stack Developer",
  "Software Engineer",
  "UI/UX Designer",
  "Project Manager",
];

export const navItems: NavItem[] = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export const socialLinks: SocialLink[] = [
  {
    name: "GitHub",
    url: "https://github.com/markclarus",
    icon: "github",
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/markclarus",
    icon: "linkedin",
  },
  {
    name: "Email",
    url: "mailto:mark.clarus@example.com",
    icon: "mail",
  },
];

export const stats: Stat[] = [
  { value: "4", label: "Years Experience", suffix: "+" },
  { value: "25", label: "Completed Projects", suffix: "+" },
  { value: "10", label: "Technologies", suffix: "+" },
  { value: "100", label: "Client Satisfaction", suffix: "%" },
];

export const skills: Skill[] = [
  { name: "React", category: "frontend" },
  { name: "Next.js", category: "frontend" },
  { name: "TypeScript", category: "frontend" },
  { name: "Tailwind CSS", category: "frontend" },
  { name: "React Native", category: "mobile" },
  { name: "Laravel", category: "backend" },
  { name: "Spring Boot", category: "backend" },
  { name: "Node.js", category: "backend" },
  { name: "Express", category: "backend" },
  { name: "MySQL", category: "database" },
  { name: "PostgreSQL", category: "database" },
  { name: "Firebase", category: "database" },
  { name: "Supabase", category: "database" },
  { name: "AWS", category: "cloud" },
  { name: "Vercel", category: "cloud" },
  { name: "Docker", category: "cloud" },
  { name: "GitHub Actions", category: "cloud" },
  { name: "Git", category: "tools" },
  { name: "Figma", category: "tools" },
  { name: "VS Code", category: "tools" },
  { name: "Postman", category: "tools" },
];

export const projects: Project[] = [
  {
    title: "Hop On Hop Off Australia",
    description:
      "A comprehensive tourism platform for Australia's hop-on-hop-off bus network. Built with real-time booking, route tracking, and multi-language support for international travelers.",
    technologies: ["React", "Node.js", "MySQL", "AWS"],
    type: "Full Stack Web Application",
    highlights: [
      "Real-time booking system",
      "Multi-language support",
      "Route optimization",
      "Payment integration",
    ],
  },
  {
    title: "Water Refilling Management System",
    description:
      "Enterprise-grade management system for water refilling stations. Features inventory tracking, customer management, delivery scheduling, and automated billing.",
    technologies: ["Laravel", "MySQL", "Tailwind CSS", "Docker"],
    type: "Enterprise Software",
    highlights: [
      "Inventory management",
      "Automated billing",
      "Delivery scheduling",
      "Customer CRM",
    ],
  },
  {
    title: "AI-Powered Analytics Dashboard",
    description:
      "Real-time analytics platform leveraging machine learning for business intelligence. Includes predictive modeling, data visualization, and automated reporting.",
    technologies: ["Next.js", "TypeScript", "PostgreSQL", "AWS"],
    type: "AI Application",
    highlights: [
      "Predictive analytics",
      "Real-time visualization",
      "Automated reporting",
      "ML model integration",
    ],
  },
  {
    title: "Spring Boot E-Commerce Backend",
    description:
      "Scalable e-commerce backend service built with microservices architecture. Handles inventory, orders, payments, and user management with high availability.",
    technologies: ["Spring Boot", "PostgreSQL", "Docker", "AWS"],
    type: "Backend System",
    highlights: [
      "Microservices architecture",
      "Payment gateway integration",
      "Inventory management",
      "Order processing",
    ],
  },
  {
    title: "Mobile Learning Platform",
    description:
      "Cross-platform mobile application for online learning with interactive courses, progress tracking, and offline support.",
    technologies: ["React Native", "Firebase", "Node.js", "TypeScript"],
    type: "Mobile Application",
    highlights: [
      "Offline learning support",
      "Progress tracking",
      "Interactive courses",
      "Push notifications",
    ],
  },
  {
    title: "Laravel CRM System",
    description:
      "Full-featured customer relationship management system with lead tracking, email campaigns, and analytics dashboard.",
    technologies: ["Laravel", "MySQL", "Tailwind CSS", "Docker"],
    type: "Web Application",
    highlights: [
      "Lead management",
      "Email campaigns",
      "Analytics dashboard",
      "Role-based access",
    ],
  },
];

export const experiences: Experience[] = [
  {
    role: "Senior Full Stack Developer",
    company: "Tech Solutions Inc.",
    period: "2022 - Present",
    description: [
      "Led development of 5+ major projects from architecture to deployment",
      "Architected scalable microservices handling 100k+ daily requests",
      "Mentored junior developers and established coding standards",
      "Reduced deployment time by 60% through CI/CD automation",
    ],
    technologies: ["React", "Next.js", "Node.js", "AWS", "Docker"],
  },
  {
    role: "Full Stack Developer",
    company: "Digital Innovations Co.",
    period: "2021 - 2022",
    description: [
      "Built and maintained multiple client-facing web applications",
      "Integrated third-party APIs for payment, mapping, and analytics",
      "Optimized database queries resulting in 40% performance improvement",
      "Implemented responsive designs ensuring cross-platform compatibility",
    ],
    technologies: ["Laravel", "React", "MySQL", "Docker"],
  },
  {
    role: "Junior Developer",
    company: "WebCraft Studios",
    period: "2020 - 2021",
    description: [
      "Developed responsive web applications using modern frameworks",
      "Collaborated with design team on UI/UX implementation",
      "Participated in code reviews and agile development processes",
      "Contributed to open-source projects and internal tools",
    ],
    technologies: ["React", "Node.js", "PostgreSQL", "Git"],
  },
  {
    role: "Mobile App Developer",
    company: "AppForge Labs",
    period: "2019 - 2020",
    description: [
      "Created cross-platform mobile applications using React Native",
      "Implemented push notifications and real-time data synchronization",
      "Published 3 applications to Google Play and App Store",
      "Achieved 4.5+ star ratings across all published applications",
    ],
    technologies: ["React Native", "Firebase", "Node.js", "TypeScript"],
  },
];

export const floatingCards = [
  {
    title: "Terminal",
    icon: "terminal",
    content: "$ npm run dev\n> portfolio@1.0.0 dev\n✓ Ready in 142ms",
    color: "from-emerald-500/20 to-emerald-500/5",
    delay: 0,
  },
  {
    title: "Git Activity",
    icon: "git-commit",
    content: "feat: implement authentication\nfix: resolve responsive issues\ndocs: update API endpoints",
    color: "from-orange-500/20 to-orange-500/5",
    delay: 0.2,
  },
  {
    title: "Analytics",
    icon: "bar-chart-3",
    content: "↑ 24% growth this quarter\nUsers: 12,847\nSessions: 45,231",
    color: "from-blue-500/20 to-blue-500/5",
    delay: 0.4,
  },
  {
    title: "Code Snippet",
    icon: "code-2",
    content: "const app = createApp()\napp.use(router)\napp.mount('#root')",
    color: "from-purple-500/20 to-purple-500/5",
    delay: 0.6,
  },
  {
    title: "Dashboard",
    icon: "layout-dashboard",
    content: "Active Users: 2,341\nRevenue: $12,430\nTasks: 23",
    color: "from-cyan-500/20 to-cyan-500/5",
    delay: 0.8,
  },
  {
    title: "Project Card",
    icon: "folder",
    content: "portfolio-v2\nMain branch • Updated 2h ago",
    color: "from-rose-500/20 to-rose-500/5",
    delay: 1.0,
  },
  {
    title: "Tech Stack",
    icon: "layers",
    content: "React • Next.js • TypeScript\nTailwind • Framer Motion",
    color: "from-sky-500/20 to-sky-500/5",
    delay: 1.2,
  },
  {
    title: "Database",
    icon: "database",
    content: "PostgreSQL 16 • 12 tables\nQuery time: 2.3ms avg",
    color: "from-yellow-500/20 to-yellow-500/5",
    delay: 1.4,
  },
];
