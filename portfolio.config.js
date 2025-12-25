// ============================================
// PORTFOLIO CONFIGURATION FILE
// Edit this file to customize your entire portfolio
// ============================================

export const portfolioConfig = {
  // ============================================
  // PERSONAL INFORMATION
  // ============================================
  personal: {
    name: "SUMAN K",
    fullName: "SUMAN KESAVAN",
    designation: "AI & Data Science Student",
    email: "sumansuriya7010@gmail.com",
    phone: "7010366929",
    location: "Tiruvallur, India 602001",
    
    // Social Links
    github: "https://github.com/call-me-suman",
    linkedIn: "https://www.linkedin.com/in/suman-kesavan-",
    leetcode: "https://leetcode.com/u/suman7010/",
    portfolio: "https://your-portfolio-url.com", // UPDATE THIS
    
    // About/Summary
    summary: "Final-year B.Tech AI & Data Science student with strong experience in cybersecurity, AI/ML, backend engineering, and blockchain systems. Winner of Smart India Hackathon 2025 (NTRO Problem Statement). Skilled in designing scalable, secure applications using Python, Go, React/Next.js, FastAPI, and Solidity, with experience in real-world system benchmarking.",
    
    // Hero Section
    heroTitle: "I am",
    heroName: "SUMAN KESAVAN",
    heroSubtitle: "",
    heroRole: "",
    
    // Code Card Properties
    codeProperties: {
      hardWorker: true,
      quickLearner: true,
      problemSolver: true,
      hireable: true,
    }
  },

  // ============================================
  // SKILLS
  // ============================================
  skills: {
    languages: ["Python", "Java", "JavaScript", "Solidity", "Go"],
    
    frontend: [
      "React.js",
      "Next.js", 
      "Tailwind CSS",
      "HTML5",
      "CSS",
      "Vue.js"
    ],
    
    backend: [
      "Django",
      "FastAPI",
      "Node.js",
      "REST APIs"
    ],
    
    blockchain: [
      "Ethereum",
      // "Thirdweb",
      // "Solidity",
      // "Web3.js",
      "IPFS (Pinata)"
    ],
    
    database: [
      "PostgreSQL",
      // "Amazon RDS",
      // "MySQL"
    ],
    
    cybersecurity: [
      // "SQLmap",
      // "Burp Suite",
      // "XSStrike",
      // "Commix",
      "PCAP analysis",
      "NetFlow/IPDR"
    ],
    
    aiml: [
      "Scikit-learn",
      "Neural Networks",
      // "Model Benchmarking",
      // "Amazon Bedrock",
      // "Google Gemini"
    ],
    
    tools: [
      // "Zustand",
      // "ESLint",
      // "Clerk",
      // "Lucide React",
      // "Stripe",
      "Postman",
      "Docker"
    ]
  },

  // ============================================
  // ACHIEVEMENTS
  // ============================================
  achievements: [
    {
      id: 1,
      title: "Smart India Hackathon 2025 Winner",
      year: "2025",
      month: "December",
      organization: "NTRO (National Technical Research Organisation)",
      problemStatement: "Identification of URL-Based Attacks From IP Data",
      description: "Led a 6-member team (Farm Copilot) to design a complete cyberattack detection system validated by NTRO.",
      solution: "Built an end-to-end pipeline: PCAP ingestion → flow extraction (NetFlow/IPDR) → feature engineering → ML classification. Engineered lexical, domain, behavioral, and statistical features for detecting 12+ attack types including SQLi, XSS, SSRF, LFI/RFI, Directory Traversal, XXE, Credential Stuffing, Typosquatting, and HPP.",
      teamSize: 6,
      teamName: "Farm Copilot",
      award: "Winner",
      category: "Software Edition",
      highlights: [
        "Led a 6-member team to victory",
        "Detected 12+ attack types with ML classification",
        "Created dataset using offensive security tools (SQLmap, Burp Suite, XSStrike, Commix)",
        "Recognized by NTRO and shortlisted for internship consideration"
      ],
      icon: "🏆",
      color: "from-yellow-500 to-orange-500"
    }
  ],

  // ============================================
  // EXPERIENCE
  // ============================================
  experience: [
    {
      id: 1,
      role: "Software Development Intern",
      company: "National Informatics Centre (NIC)",
      location: "Chennai, India",
      duration: "August 2024 - September 2024",
      startDate: "2024-08",
      endDate: "2024-09",
      description: "Developed critical monitoring and archival systems for government infrastructure, handling 36 server metrics and automated data migration.",
      responsibilities: [
        "Developed a server alert system monitoring 36 critical metrics (e.g., server uptime, DB replication) using Shell scripts and Python, with CRON scheduling",
        "Built a real-time error diagnosis dashboard using Vue.js",
        "Designed an archival system with Django and PostgreSQL for automatic migration of data older than 5 years"
      ],
      technologies: [
        "Python",
        "Shell Scripts",
        "Vue.js",
        "Django",
        "PostgreSQL",
        "CRON"
      ],
      achievements: [
        "Automated monitoring of 36 critical server metrics",
        "Built real-time dashboard for error diagnosis",
        "Implemented automatic data archival system"
      ],
      type: "internship",
      icon: "💼",
      color: "from-blue-500 to-cyan-500"
    }
  ],

  // ============================================
  // PROJECTS
  // ============================================
  projects: [
    {
      id: 1,
      title: "Decentralized Notary System",
      description: "Built a dApp using Next.js (TypeScript) and Solidity for secure document verification on the Sepolia Testnet. Utilized Thirdweb for smart contract deployment and IPFS for storage.",
      image: "/bcnotary.png", // UPDATE if you have different image
      tags: ["Next.js", "TypeScript", "Solidity", "Thirdweb", "IPFS", "Blockchain"],
      github: "https://github.com/call-me-suman/Blockchain-based-Notary-", // UPDATED
      demo: "https://blockchain-based-notary.vercel.app/", // UPDATE THIS if you have a demo
      featured: true,
      category: "Blockchain"
    },
    {
      id: 2,
      title: "AI Agent Marketplace",
      description: "Created a decentralized AI assistant platform using CDP wallets, x402Pay, Zustand, Amazon Bedrock, and Next.js 15, integrated on-chain payments, IPFS data storage, and real-time chat streaming.",
      image: "/agentmarketplace.png", // UPDATE if you have different image
      tags: ["Next.js 15", "CDP Wallets", "Amazon Bedrock", "Zustand", "IPFS", "AI"],
      github: "https://github.com/call-me-suman/Ai-Agent-Marketplace", // UPDATE THIS
      demo: "", // NO DEMO
      featured: true,
      category: "AI/Blockchain"
    },
    {
      id: 3,
      title: "Reverse Proxy in Go",
      description: "Implemented a Go-based reverse proxy with YAML config, dynamic endpoint routing, and IP-based rate limiting, includes built-in authentication, and Docker test infrastructure.",
      image: "/go.png", // UPDATE if you have different image
      tags: ["Go", "Docker", "YAML", "Networking", "Authentication"],
      github: "https://github.com/call-me-suman/go-reverse-proxy", // UPDATED
      demo: "", // NO DEMO
      featured: true,
      category: "Backend"
    },
        {
      id: 4,
      title: " Planora - AI-Powered Project Management",
      description: "a cutting-edge full-stack application that revolutionizes project management through artificial intelligence. Experience seamless planning, tracking, and collaboration like never before.",
      image: "/planora.png", // UPDATE if you have different image
      tags: ["Next.js", "FastAPI", "AWS", "RDS", "PostgreSQL", "TailwindCSS"],  
      github: "https://github.com/call-me-suman/Planora", // UPDATED
      demo: "https://planora-orpin.vercel.app/", // UPDATE THIS if you have a demo
      featured: true,
      category: "AI/Fullstack"
    },
         {
      id: 5,
      title: " Exuproc – Blockchain-based Exam Platform",
      description: "a decentralized, voice-enabled online examination system built on Next.js, Thirdweb, and Pinata. Exams and results are stored on IPFS, while critical actions are recorded on-chain (Sepolia), ensuring transparency, immutability, and tamper resistance. Optional proctoring hooks provide basic integrity checks.",
      image: "/exuproc.png", // UPDATE if you have different image
      tags: ["Next.js 15", "Tailwind", "Thirdweb", "Pinata","Gemini"],  
      github: "https://github.com/call-me-suman/BlockchainBasedExam", // UPDATED
      demo: "https://blockchain-based-exam.vercel.app/", // UPDATED
      featured: true,
      category: "AI/Blockchain"
    }
    // ADD MORE PROJECTS HERE
  ],

  // ============================================
  // EDUCATION
  // ============================================
  education: [
    {
      id: 1,
      degree: "B.Tech: Artificial Intelligence and Data Science",
      institution: "Anna University – Regional Campus, Coimbatore",
      location: "Coimbatore, India",
      duration: "Expected: May 2026",
      gpa: "", // ADD if you want to display
      highlights: [
        "Final Year Student",
        "Focus on AI/ML and Data Science"
      ]
    }
  ],

  // ============================================
  // CERTIFICATIONS
  // ============================================
  certifications: [
    {
      id: 1,
      name: "Large Language Models (LLMs) and GPTs",
      issuer: "NPTEL",
      date: "",
      credentialId: "",
      url: ""
    }
  ],

  // ============================================
  // THEME CONFIGURATION
  // ============================================
  theme: {
    // Primary Colors (Cyberpunk Palette)
    colors: {
      primary: "#ec4899",      // Pink
      secondary: "#8b5cf6",    // Violet
      accent: "#3b82f6",       // Blue
      cyan: "#06b6d4",         // Cyan
      background: "#0d1224",   // Dark blue background
      cardBg: "#0a0d37",       // Card background
    },
    
    // Particle System Settings
    particles: {
      count: 150,
      colors: ["#ec4899", "#8b5cf6", "#3b82f6"],
      enableHoverEffect: true
    },
    
    // Animation Settings
    animations: {
      enableScrollAnimations: true,
      enableHoverEffects: true,
      enableParticles: true,
      scrollAnimationDelay: 0.2
    }
  },

  // ============================================
  // SEO & METADATA
  // ============================================
  seo: {
    title: "Suman K - AI & Data Science Student | Cybersecurity Enthusiast",
    description: "Portfolio of Suman K - Final-year B.Tech AI & Data Science student, Smart India Hackathon Winner, skilled in cybersecurity, blockchain, and full-stack development.",
    keywords: ["AI", "Data Science", "Cybersecurity", "Blockchain", "Full Stack Developer", "Smart India Hackathon"],
    ogImage: "/og-image.png" // UPDATE THIS
  }
};

export default portfolioConfig;
