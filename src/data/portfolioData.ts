export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  techStack: string[];
  githubUrl: string;
  liveUrl?: string;
  image?: string;
}

export interface Experience {
  role: string;
  company: string;
  duration: string;
  location: string;
  points: string[];
}

export interface PortfolioData {
  name: string;
  title: string;
  subtitle: string;
  bio: string;
  profileImage?: string;
  resumeUrl: string;
  lastUpdatedResume: string;
  location: string;
  socials: {
    github: string;
    linkedin: string;
    email: string;
    leetcode?: string;
  };
  education: {
    institution: string;
    degree: string;
    specialization: string;
    duration: string;
    gpa?: string;
  }[];
  skills: {
    languages: string[];
    frameworks: string[];
    databases: string[];
    tools: string[];
    aiMl: string[];
  };
  projects: Project[];
  experience: Experience[];
}

export const portfolioData: PortfolioData = {
  name: "Tanishka Vyas",
  title: "Software Developer | AI/ML Student | Python Developer | Machine Learning & Generative AI Enthusiast",
  subtitle: "M.Tech in AI & Data Science",
  bio: "Building Intelligent AI-Powered Solutions, For a better Tomorrow",
  profileImage: "/images/Photo-TV.jpeg",
  resumeUrl: "/tanishka_vyas_resume.pdf",
  lastUpdatedResume: "September 2026",
  location: "Indore, Madhya Pradesh, India",
  socials: {
    github: "https://github.com/tanishkavyas0603",
    linkedin: "https://www.linkedin.com/in/tanishka-vyas-ai/",
    email: "tanishka.v634@gmail.com",
    leetcode: "https://leetcode.com/u/tanishka_vyas/",
  },
  education: [
    {
      institution: "School of Data Science and Forecasting, DAVV University, Indore",
      degree: "Integrated B.Tech + M.Tech",
      specialization: "Artificial Intelligence & Data Science",
      duration: "2022 – 2027",
      gpa: "8.2",
    }
  ],
  skills: {
    languages: ["Python", "SQL"],
    frameworks: ["FastAPI", "REST APIs", "CRUD", "JSON", "API Validation"],
    databases: ["PostgreSQL", "MySQL", "MongoDB", "Vector Databases", "SQLite"],
    tools: ["Docker", "Git", "GitHub", "Data Structures & Algorithms", "OOP", "DBMS", "System Design"],
    aiMl: ["Machine Learning", "Deep Learning", "NLP", "RAG", "Scikit-learn", "Pandas", "NumPy", "Matplotlib"]
  },
  projects: [
    {
      id: "webrag",
      title: "WebRAG — Chat with Any Webpage",
      tagline: "AI-Powered RAG System for Conversational Web Search",
      description: "WebRAG is an AI-powered RAG system that answers questions from webpages using FastAPI, Python, PostgreSQL and Groq LLM for conversational, context-aware search. Implemented hybrid retrieval combining FAISS vector search, Hugging Face embeddings, BM25 keyword matching, and Reciprocal Rank Fusion. Built an automated document ingestion pipeline with intelligent chunking, semantic embeddings and pytest validation.",
      techStack: ["Python", "FastAPI", "PostgreSQL", "Groq LLM", "FAISS", "Hugging Face", "BM25", "RAG", "Pytest"],
      githubUrl: "https://github.com/tanishkavyas0603/WebRAG",
      liveUrl: "https://github.com/tanishkavyas0603/WebRAG",
      image: "/placeholders/WebRAG.png",
    },
    {
      id: "multi-agent-research-pipeline",
      title: "Multi-Agent Research Pipeline",
      tagline: "End-to-End Automated Research System with Specialized Agents",
      description: "A multi-agent AI research system that automates end-to-end research using specialized agents for search, reading, writing and review. Built with Python, LangChain, Groq API, Tavily API and Streamlit. It converts user queries into structured research reports with minimal manual effort.",
      techStack: ["Python", "LangChain", "Groq API", "Tavily API", "Streamlit", "Multi-Agent AI"],
      githubUrl: "https://github.com/tanishkavyas0603/Multi-agent-research-pipeline",
      liveUrl: "https://research-pipeline.streamlit.app/",
      image: "/placeholders/multi-agent-research.png",
    },
    {
      id: "market-basket-analysis",
      title: "Market Basket Analysis",
      tagline: "Retail Transaction Mining & Association Rule Discovery",
      description: "Market Basket Analysis using the Apriori algorithm is a Python project that mines retail transaction data to discover frequent itemsets and association rules for better customer insights. Using Python for analysis and HTML for the interface, it helps identify purchasing patterns that can improve cross-selling, recommendations and sales.",
      techStack: ["Python", "Apriori Algorithm", "Association Rule Mining", "HTML", "Data Analytics"],
      githubUrl: "https://github.com/tanishkavyas0603/Market-basket-analysis-using-apriori",
      liveUrl: "https://github.com/tanishkavyas0603/Market-basket-analysis-using-apriori",
      image: "/placeholders/market-basket-analysis.png",
    },
    {
      id: "menumind-ai",
      title: "MenuMind AI — Agentic Restaurant Intelligence Platform",
      tagline: "AI-Powered Restaurant Analytics & Agentic Workflow Platform",
      description: "MenuMind AI is an AI-powered restaurant intelligence platform built using React, FastAPI, Python and Google Gemini. It uses a multi-agent architecture with an Executive Orchestrator and specialized agents for Business Intelligence, Menu Consulting, Customer Voice, Menu Design, and Food Waste Management. The system analyzes restaurant data, performs sales and profitability analysis, optimizes recipes, analyzes customer reviews and provides actionable business recommendations through agentic workflows and tool calling.",
      techStack: ["React", "FastAPI", "Python", "Google Gemini", "Multi-Agent Architecture", "Agentic AI"],
      githubUrl: "https://github.com/tanishkavyas0603/MenuMind.ai",
      liveUrl: "https://github.com/tanishkavyas0603/MenuMind.ai",
      image: "/placeholders/menumind-ai.png",
    }
  ],
  experience: [
    {
      role: "AI/ML Intern",
      company: "RAG Genesis Global Pvt. Ltd.",
      duration: "March 2026 – September 2026",
      location: "Remote",
      points: [
        "Built backend services for an AI-based grading system using FastAPI and REST APIs for grading and related application workflows.",
        "Improved latency in Genesis AI's voice workflow, contributing to a more responsive application experience.",
        "Developed ATS resume parsing functionality to extract and organize candidate information for automated resume screening."
      ]
    }
  ]
};
