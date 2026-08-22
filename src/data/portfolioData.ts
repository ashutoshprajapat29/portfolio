import type { PortfolioData } from '../types/portfolio';

/**
 * PORTFOLIO DATA CONFIGURATION
 * Populated with Ashutosh Prajapat's Resume Details
 */
export const portfolioData: PortfolioData = {
  personal: {
    name: "Ashutosh Prajapat",
    title: "Full Stack Web Developer",
    subtitle: "3rd-Year Computer Science & Engineering undergraduate passionate about building responsive full-stack applications with the MERN stack, Generative AI integration, and scalable APIs.",
    availabilityBadge: "🟢 Available for Freelance Projects & Internships",
    location: "Bhopal, MP, India",
    email: "",
    github: "https://github.com/ashutoshprajapat29",
    linkedin: "https://www.linkedin.com/in/ashutosh-prajapat-061822328",
    twitter: "",
    discord: "",
    formspreeId: "xwlezngo",
    resumeUrl: "/resume.pdf",
    avatarUrl: "/ashutosh.jpg",
    shortBio: "Detail-oriented 3rd-Year Computer Science & Engineering student with practical experience building responsive full-stack applications, client websites, and GenAI workflows.",
    fullBio: [
      "I am a 3rd-Year Computer Science & Engineering undergraduate at Lakshmi Narain College of Technology (LNCT), Bhopal. I specialize in developing full-stack web applications using the MERN stack (MongoDB, Express.js, React.js, Node.js) and integrating cutting-edge Generative AI capabilities.",
      "My recent work includes developing client platforms (like Lodwal Constructions), architecting autonomous AI agents with Gemini Function Calling, developing real-time voice-driven farm ecosystems, and building high-performance RESTful APIs.",
      "I am proficient in Java, JavaScript (ES6+), TypeScript, and modern web architectures. Actively available for freelance client projects, custom full-stack web builds, and software engineering internship opportunities."
    ]
  },

  stats: [
    {
      label: "Production Projects",
      value: "5+",
      description: "Full-stack, Client & GenAI Apps",
      iconName: "FolderGit2"
    },
    {
      label: "Technical Certifications",
      value: "7+",
      description: "AI, Full-Stack, Java & Cloud credentials",
      iconName: "Trophy"
    },
    {
      label: "Academic CGPA",
      value: "7.38",
      description: "B.Tech in Computer Science (LNCT Bhopal)",
      iconName: "GraduationCap"
    },
    {
      label: "Core Focus",
      value: "MERN + AI",
      description: "React, Node, Gemini Agents & APIs",
      iconName: "GitCommit"
    }
  ],

  skills: [
    // Frontend
    { name: "React.js", level: 92, category: "Frontend", tags: ["Hooks", "SPA", "Context API"], featured: true },
    { name: "Next.js", level: 85, category: "Frontend", tags: ["SSR", "App Router", "Full-Stack"], featured: true },
    { name: "JavaScript (ES6+)", level: 94, category: "Frontend", tags: ["Async/Await", "DOM", "ESNext"], featured: true },
    { name: "TypeScript", level: 86, category: "Frontend", tags: ["Type Safety", "Interfaces", "Generics"], featured: true },
    { name: "Tailwind CSS", level: 92, category: "Frontend", tags: ["Responsive", "Utility-First", "Dark Mode"], featured: true },
    { name: "Material-UI (MUI)", level: 88, category: "Frontend", tags: ["Components", "Themes", "Dashboards"] },
    { name: "HTML5 & CSS3", level: 95, category: "Frontend", tags: ["Semantic HTML", "Flexbox", "CSS Grid"] },

    // Backend
    { name: "Node.js", level: 90, category: "Backend", tags: ["Async I/O", "NPM", "Event Loop"], featured: true },
    { name: "Express.js", level: 92, category: "Backend", tags: ["RESTful APIs", "Middleware", "Routing"], featured: true },
    { name: "Java (Core)", level: 88, category: "Backend", tags: ["OOP", "Collections", "DSA"], featured: true },
    { name: "C Language", level: 82, category: "Backend", tags: ["Pointers", "Memory", "Algorithms"] },
    { name: "Passport.js", level: 84, category: "Backend", tags: ["Authentication", "Sessions", "JWT"] },
    { name: "RESTful API Architecture", level: 92, category: "Backend", tags: ["CRUD", "Endpoints", "Status Codes"], featured: true },

    // Cloud & Databases
    { name: "MongoDB & Mongoose", level: 90, category: "Cloud & Databases", tags: ["NoSQL", "Schemas", "Aggregation"], featured: true },
    { name: "MySQL", level: 85, category: "Cloud & Databases", tags: ["Relational", "SQL Queries", "Joins"] },
    { name: "Firebase & Firebase Auth", level: 88, category: "Cloud & Databases", tags: ["Auth", "Data Isolation", "Realtime"], featured: true },
    { name: "Supabase (PostgreSQL)", level: 84, category: "Cloud & Databases", tags: ["PostgreSQL", "Cloud Database"] },
    { name: "Vercel & Render", level: 90, category: "Cloud & Databases", tags: ["Cloud Hosting", "Webhooks", "Live Deploy"] },
    { name: "CI/CD Pipelines", level: 82, category: "Cloud & Databases", tags: ["Automated Deploy", "GitHub Actions"] },

    // AI & Tools
    { name: "Gemini Function Calling", level: 92, category: "AI & Tools", tags: ["AI Agents", "Tool Use", "Deterministic Execution"], featured: true },
    { name: "Generative AI Integration", level: 90, category: "AI & Tools", tags: ["LLM Workflows", "Prompt Engineering"], featured: true },
    { name: "RAG & AI Agents", level: 86, category: "AI & Tools", tags: ["Retrieval", "Context", "Autonomous Execution"], featured: true },
    { name: "Live Voice Assistant (STT/TTS)", level: 85, category: "AI & Tools", tags: ["Speech-to-Text", "Text-to-Speech", "Real-time Voice"] },
    { name: "Git & GitHub", level: 92, category: "AI & Tools", tags: ["Version Control", "Collaboration", "Branches"], featured: true },
    { name: "Postman", level: 90, category: "AI & Tools", tags: ["API Testing", "Documentation", "Mock Servers"] }
  ],

  projects: [
    {
      id: "agro-aid-ai",
      title: "Agro-aid-ai: GenAI Farm Management Ecosystem",
      description: "Smart agricultural ecosystem using React.js, Node.js, and MongoDB with autonomous Gemini AI agents and real-time voice logging.",
      fullDescription: "Agro-aid-ai is an intelligent farm management platform engineered using React.js, Node.js, and MongoDB to help farmers and agribusinesses digitally map, track, and optimize agricultural plots. It features autonomous AI agents powered by Gemini Function Calling that intelligently parse unstructured voice or text prompts and dynamically execute backend functions to update farm records.",
      category: "AI & Data",
      tags: ["React.js", "Node.js", "Express.js", "MongoDB", "Gemini API", "Firebase Auth", "Supabase"],
      image: "https://images.unsplash.com/photo-1586771107445-d3ca888129ff?auto=format&fit=crop&w=800&q=80",
      githubUrl: "https://github.com/ashutoshprajapat29/AgroAid-Ai",
      liveUrl: "https://agro-aid-ai.web.app",
      featured: true,
      metrics: "Live Voice AI Assistant & Automated Cron Schedules",
      highlights: [
        "Architected autonomous AI agents with Gemini Function Calling to parse unstructured user intent and execute deterministic backend actions",
        "Developed automated cron scheduling system linked to AI triggers for critical irrigation and chemical spray reminders based on historical logs",
        "Integrated real-time Live Voice Assistant interface in React leveraging speech-to-text (STT) and text-to-speech (TTS) for hands-free voice logging",
        "Implemented secure user authentication and data isolation using Firebase Auth, mapping time-series agricultural metrics to unique profiles"
      ],
      techStack: {
        frontend: ["React.js", "Tailwind CSS", "Web Speech API (STT/TTS)", "Axios"],
        backend: ["Node.js", "Express.js", "Gemini Function Calling", "Node-Cron"],
        database: ["MongoDB", "Mongoose", "Supabase (PostgreSQL)"],
        devops: ["Firebase Auth", "Render", "Git"]
      }
    },
    {
      id: "wander-lust",
      title: "Wander-Lust: Full-Stack Travel Marketplace",
      description: "MERN stack travel & accommodation marketplace with dynamic listings, review systems, and optimized REST APIs.",
      fullDescription: "Wander-Lust is a full-featured travel marketplace web application built on the MERN stack. It allows users to explore, create, and manage dynamic travel destinations and accommodations with review rating structures and user authentication.",
      category: "Full-Stack",
      tags: ["MongoDB", "Express.js", "React.js", "Node.js", "Passport.js", "Render"],
      image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=800&q=80",
      githubUrl: "https://github.com/ashutoshprajapat29",
      liveUrl: "#",
      featured: true,
      metrics: "Optimized Mongoose Schemas & Session Auth",
      highlights: [
        "Architected responsive full-stack travel marketplace using the MERN stack to manage dynamic listings and user interactions",
        "Designed and optimized secure RESTful APIs for CRUD operations ensuring seamless client-database communication",
        "Engineered relational MongoDB schemas using Mongoose to cut query latency and handle complex multi-tier review structures",
        "Implemented secure authentication and authorization flows using Passport.js and deployed seamlessly on Render"
      ],
      techStack: {
        frontend: ["React.js", "Bootstrap / Tailwind CSS", "Axios"],
        backend: ["Node.js", "Express.js", "Passport.js", "RESTful Architecture"],
        database: ["MongoDB Atlas", "Mongoose ODM"],
        devops: ["Render", "Git", "GitHub"]
      }
    },
    {
      id: "mandi-price-bot",
      title: "MandiRate: WhatsApp Agri Commodity Price Bot",
      description: "Automated WhatsApp chatbot delivering real-time agricultural commodity prices across Indian APMC Mandis using WhatsApp Cloud API and Government Agri data.",
      fullDescription: "MandiRate is an intelligent conversational WhatsApp bot engineered to bridge the information gap for Indian farmers and traders by delivering live daily agricultural commodity rates across local Mandis (APMC markets). Users can query crop prices, check minimum/maximum/modal arrival rates by state, district, or market name, and compare nearby mandi prices through intuitive WhatsApp chat interactions.",
      category: "AI & Data",
      tags: ["Node.js", "Express.js", "WhatsApp Cloud API", "Gemini API", "MongoDB", "Webhooks"],
      image: "https://images.unsplash.com/photo-1595974482597-4b8da8879bc5?auto=format&fit=crop&w=800&q=80",
      githubUrl: "https://github.com/ashutoshprajapat29/agro-aid-ai-mandi-service-bot",
      liveUrl: "#",
      featured: true,
      metrics: "Live Rates from 1,000+ APMC Mandis Across India",
      highlights: [
        "Engineered interactive WhatsApp webhook handlers using Node.js and Express to process inbound user messages in real-time",
        "Integrated Gemini AI / NLP to intelligently understand vernacular mandi queries, crop aliases, and regional spelling variations",
        "Aggregated real-time agricultural mandi price datasets covering daily arrivals, modal prices, and commodity trends across Indian states",
        "Implemented Redis caching layer to minimize API latency and ensure sub-second response times for high-volume farmer queries"
      ],
      techStack: {
        frontend: ["WhatsApp UI", "Interactive List Messages", "Quick-Reply Buttons"],
        backend: ["Node.js", "Express.js", "WhatsApp Cloud API", "Webhooks", "Gemini API"],
        database: ["MongoDB", "Redis (Price Caching)"],
        devops: ["Render", "Git", "GitHub"]
      }
    },
    {
      id: "lodwal-constructions",
      title: "Lodwal Constructions: Commercial Client Platform",
      description: "Production commercial website for a real-estate & civil infrastructure client featuring service catalogs and dynamic project showcases.",
      fullDescription: "Lodwal Constructions is a high-performance commercial web platform custom-built for an infrastructure and construction firm. It features responsive dynamic project galleries, client inquiry & estimate calculators, high-conversion service listings, and optimized SEO performance deployed on Vercel.",
      category: "Full-Stack",
      tags: ["React.js", "Tailwind CSS", "JavaScript", "Vercel", "Client Project"],
      image: "https://images.unsplash.com/photo-1541888946425-d0fbb18086f6?auto=format&fit=crop&w=800&q=80",
      githubUrl: "https://github.com/ashutoshprajapat29/lodwal",
      liveUrl: "https://lodwal-constuctions.vercel.app/",
      featured: true,
      metrics: "Live Production Client Deployment on Vercel",
      highlights: [
        "Architected responsive commercial infrastructure showcase using React.js and Tailwind CSS with fast load times",
        "Implemented interactive quote request forms, client contact flows, and dynamic category-filtered project showcases",
        "Configured automated GitHub CI/CD continuous deployment pipeline on Vercel with 98+ Lighthouse scores"
      ],
      techStack: {
        frontend: ["React.js", "Tailwind CSS", "Lucide Icons", "Responsive UI"],
        backend: ["Node.js", "Vercel Serverless / APIs"],
        database: ["Client CMS / Assets"],
        devops: ["Vercel", "Git", "GitHub Actions"]
      }
    },
    {
      id: "wear-loop",
      title: "WearLoop: Peer-to-Peer Fashion Rental Marketplace",
      description: "Sustainable fashion sharing & rental marketplace enabling users to rent designer outfits and monetize their personal wardrobes.",
      fullDescription: "WearLoop is a modern circular fashion marketplace built to make designer clothing accessible and sustainable. Users can list their own outfits for rent, browse fashion catalogs by occasion and size, manage rental durations, and track bookings seamlessly.",
      category: "Full-Stack",
      tags: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
      image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=800&q=80",
      githubUrl: "https://github.com/ashutoshprajapat29/WearLoop",
      liveUrl: "#",
      featured: true,
      metrics: "Wardrobe Monetization & Peer-to-Peer Rental Workflows",
      highlights: [
        "Engineered complete wardrobe rental catalog with custom filtering by size, occasion, designer brand, and daily pricing",
        "Implemented user wardrobe listing system allowing individuals to upload, manage, and monetize their own clothing assets",
        "Designed secure booking date-picker and rental duration calculations with automated deposit validation",
        "Architected RESTful API endpoints for user authentication, product listings, and order lifecycle management"
      ],
      techStack: {
        frontend: ["React.js", "Tailwind CSS", "Axios"],
        backend: ["Node.js", "Express.js", "RESTful APIs"],
        database: ["MongoDB", "Mongoose ODM"],
        devops: ["Render", "Git", "GitHub"]
      }
    }
  ],

  timeline: [
    {
      id: "edu-1",
      type: "education",
      title: "Bachelor of Technology (B.Tech) - Computer Science & Engineering",
      organization: "Lakshmi Narain College of Technology (LNCT), Bhopal",
      location: "Bhopal, MP, India",
      period: "2024 – 2028",
      description: "3rd-Year undergraduate pursuing B.Tech in CSE with strong foundational coursework and hands-on project implementations. Current CGPA: 7.38.",
      achievements: [
        "Key Coursework: Data Structures & Algorithms (DSA), Java Programming, Operating Systems, IoT, Database Management",
        "Developed full-stack web applications and AI-driven platforms as part of technical projects",
        "Active member of campus technical forums and coding communities"
      ],
      skills: ["Data Structures & Algorithms", "Java", "Operating Systems", "IoT", "MERN Stack"],
      badge: "B.Tech CSE (3rd Year) 🎓"
    },
    {
      id: "edu-2",
      type: "education",
      title: "Higher Secondary (Class 12 - PCM)",
      organization: "Shramodaya Awasiya Vidyalaya, Indore (CBSE)",
      location: "Indore, MP, India",
      period: "2021 – 2023",
      description: "Completed Senior Secondary School education with Physics, Chemistry, and Mathematics (PCM).",
      achievements: [
        "Class 12 (PCM) Board Score: 78.4%",
        "Class 10 Board Score: 88.0%",
        "Developed early passion for computer science and logical problem solving"
      ],
      skills: ["Mathematics", "Physics", "Computer Science Foundations"],
      badge: "CBSE High School 🏫"
    }
  ],

  certifications: [
    {
      name: "Full Stack Web Development",
      issuer: "Apna College",
      issueDate: "Web Dev & Languages",
      credentialUrl: "#",
      badgeIcon: "Code"
    },
    {
      name: "Fundamentals of Java Programming",
      issuer: "Coursera",
      issueDate: "Core Java & OOP",
      credentialUrl: "#",
      badgeIcon: "Code"
    },
    {
      name: "Generative AI Fluency",
      issuer: "FutureSkills Prime",
      issueDate: "GenAI & LLMs",
      credentialUrl: "#",
      badgeIcon: "Sparkles"
    },
    {
      name: "Introduction to Modern AI",
      issuer: "Cisco",
      issueDate: "AI & Neural Tech",
      credentialUrl: "#",
      badgeIcon: "Sparkles"
    },
    {
      name: "Apply AI: Analyse Customer Reviews",
      issuer: "Cisco",
      issueDate: "NLP & AI Analytics",
      credentialUrl: "#",
      badgeIcon: "Sparkles"
    },
    {
      name: "ServiceNow Agent Blazer",
      issuer: "ServiceNow",
      issueDate: "Cloud & Automation",
      credentialUrl: "#",
      badgeIcon: "Cloud"
    },
    {
      name: "Introduction to IoT and Digital Transformation",
      issuer: "FutureSkills Prime",
      issueDate: "IoT & Systems",
      credentialUrl: "#",
      badgeIcon: "Server"
    }
  ]
};
