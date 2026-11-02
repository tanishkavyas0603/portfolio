# Portfolio Data Migration Audit Report
**Source Individual:** Soumya Jain  
**Target Individual:** Tanishka Vyas  
**Audit Scope:** Complete repository scan, asset inspection, metadata analysis, and code inventory  
**Status:** Audit Complete — Zero Code/Design Modifications Performed  

---

## 1. Project Architecture and Technology Stack

### 1.1 Architectural Overview
The project is a client-side single-page application (SPA) built with modern web technologies, compiled via Vite, and designed with a dark cyberpunk/developer-centric aesthetic featuring smooth animations, interactive overlays, and 3D canvas elements.

The architecture decouples most of the profile data into a single centralized configuration file (`src/data/portfolioData.ts`), which is consumed by various UI sections. However, several components also contain **hardcoded strings, personalized fallback values, custom monogram assets, and narrative copy** that directly reference Soumya Jain.

### 1.2 Technology Stack Inventory

| Component / Layer | Technology | Details / Purpose |
| :--- | :--- | :--- |
| **Framework & Runtime** | React 19 (`react` 19.2.7, `react-dom` 19.2.7) | Core UI rendering engine |
| **Language** | TypeScript (~6.0.2) | Type-safe implementation with strict interfaces |
| **Bundler & Build Tool** | Vite 8.1.0 (`@vitejs/plugin-react` 6.0.2) | Fast HMR dev server & Rollup production bundling |
| **Styling** | Tailwind CSS v4 (`@tailwindcss/vite` 4.3.1) | Utility-first CSS using CSS variables and `@theme` block |
| **Motion & Animation** | Framer Motion 12.42.0 (`LazyMotion` with `domAnimation`) | Scroll animations, spring layout transitions, and entrance effects |
| **3D Graphics** | Three.js (`three` 0.185.1, `@react-three/fiber` 9.6.1) | Interactive `ChromeGrid` kinetic 3D background behind Hero |
| **Icons** | Lucide React 1.21.0 & Custom SVG Components | UI iconography and custom brand logos (`BrandIcons.tsx`) |
| **Routing** | React Router DOM 7.18.0 | Hash scrolling and route transitions (`/`, `/privacy`, `/2048`) |
| **Contact API** | EmailJS Browser SDK (`@emailjs/browser` 4.4.1) | Client-side email dispatching service integration |
| **Analytics & Metrics** | `@vercel/analytics` 2.0.1, `@vercel/speed-insights` 2.0.0 | Production performance and usage analytics |
| **Linter** | Oxlint (`oxlint` 1.69.0) | High-speed JavaScript/TypeScript linter |

---

## 2. Existing Portfolio Structure and Pages

### 2.1 Route & Page Hierarchy

```
/ (Home Route — src/pages/Home.tsx)
├── Navbar (src/components/Navbar.tsx) [Fixed header with scrollspy, initials logo "SJ", text "SOUMYA.JAIN", quick toggles]
├── Hero (src/components/Hero.tsx) [Kinetic typography "SOUMYA JAIN", 3D ChromeGrid, bio, specs table, social links]
├── About (src/components/About.tsx) [Story narrative, terminal launch mock card, education card, focus areas]
├── Experience (src/components/Experience.tsx) [Interactive vertical timeline of internships]
├── Projects (src/components/Projects.tsx) [2x2 grid of featured systems with source and demo links]
├── Skills (src/components/Skills.tsx) [4-row infinite marquee with tech icons]
├── ResumeView (src/components/ResumeView.tsx) [Embedded PDF viewer & direct download CTA]
├── Contact (src/components/Contact.tsx) [Large kinetic CTA, email panel, social media cards, location pill]
└── Footer (src/components/Footer.tsx) [Copyright © 2026 Soumya Jain, top-scroll button]

/privacy (Privacy Policy — src/pages/Privacy.tsx)
└── Static policy document referencing Soumya Jain, EmailJS routing, and localStorage policies

/2048 (Arcade Game — src/pages/Game2048Page.tsx & src/components/Game2048.jsx)
└── Fully functional retro arcade tile-sliding mini-game (100% generic content)

Global Persistent Overlays (src/App.tsx)
├── FloatingChatbot (src/components/FloatingChatbot.tsx) ["Soumya AI" instant assistant with pre-scripted Q&A]
├── TerminalOverlay (src/components/TerminalOverlay.tsx) [Interactive bash shell simulation "soumya@bash", "soumyajain.in"]
├── MatrixOverlay (src/components/MatrixOverlay.tsx) [Konami-triggered falling code matrix HUD]
├── CommandPalette (src/components/CommandPalette.tsx) [Ctrl+K modal for rapid navigation and search]
└── LightboxModal (src/App.tsx) [Image enlargement modal]
```

---

## 3. Complete Inventory of Soumya Jain's Personal Information

### A. Identity
* **Full Name:** Soumya Jain
* **First Name / Last Name:** Soumya / Jain
* **Initials / Monograms:** `SJ` (Used in `public/favicon.svg` and `src/components/Navbar.tsx`)
* **Display Brand:** `SOUMYA.JAIN` (Navbar logo header)
* **Kinetic Character Breakdown:** `SOUMYA` and `JAIN` rendered as individual SVG/CSS character nodes in `Hero.tsx`
* **Professional Headline / Titles:** "Software Developer", "Computer Science Undergraduate", "AI Engineer"
* **Status Statement:** "Open to Opportunities · 2026"
* **Bio Statement:** "Building practical software, AI-powered solutions . Focused on writing clean, scalable code and training efficient models"
* **Narrative Journey (About Section):** Personal journey detailing start with HTML/CSS/JS, advancing to React/Next.js/TypeScript, exploring RAG systems, and hackathon project building.
* **Focus Areas:** Frontend Web Development (REACT, NEXT.JS), AI Applications & LLM Integration, Retrieval-Augmented Generation Systems, GEN AI Applications.

### B. Contact Information
* **Email Address:** `jainsoumya2305@gmail.com`
* **Phone Number:** `7877318802` (Present within the embedded resume PDF `public/soumya_jain_pdf.pdf`)
* **Location:** `Jaipur, Rajasthan, India`
* **LinkedIn Profile URL:** `https://www.linkedin.com/in/soumya-jain-16561b253/`
* **GitHub Profile URL:** `https://github.com/soumya-xy`
* **GitHub Handle:** `@soumya-xy`
* **LeetCode Profile URL:** `https://leetcode.com/u/soumya_xy/`
* **LeetCode Handle:** `@soumya_xy`
* **Domain / Terminal Hostname:** `soumyajain.in` (Used in terminal prompts)
* **Contact Mechanism:** Direct `mailto:` dispatch and EmailJS integration sending queries directly to Soumya's inbox.

### C. Professional Experience
* **Experience 1:**
  * **Role:** Applied AI Intern
  * **Company:** GO-BRICS Business Lab
  * **Duration:** May 2026 – July 2026
  * **Location:** Remote
  * **Bullet Points:**
    * "Conducted AI-assisted international market research and competitive analysis across BRICS+ markets."
    * "Developed operational research workflows and automated pipelines to support business decision-making."
    * "Prepared structured research reports, analyzed pricing and consumer trends, and collaborated in an asynchronous international team."
* **Experience 2:**
  * **Role:** AI/ML Intern
  * **Company:** Upvalue Tech Pvt Ltd
  * **Duration:** June 2025 – Dec 2025
  * **Location:** Remote
  * **Bullet Points:**
    * "Built a Convolutional Neural Network (CNN) model to classify mobile phone models using image data."
    * "Curated and labeled image datasets for training, ensuring high-quality data for deep learning model performance."

### D. Academic Information
* **Institution:** The LNM Institute of Information Technology (LNMIIT)
* **Degree:** Bachelor of Technology (B.Tech)
* **Specialization:** Computer Science and Engineering
* **Duration:** 2023 – 2027 (Expected graduation: 2027)
* **Cumulative GPA (CGPA):** 7.02 / 10

### E. Portfolio Projects
* **Project 1: RAGHive**
  * **Tagline:** Multi-Agent RAG Framework with Intrinsic Explainability
  * **Scope:** Bachelor's Thesis project on glass-box Multi-Agent Retrieval-Augmented Generation using LangGraph and NormEnsembleXAI.
  * **Stack:** LangGraph, vLLM, Qwen 2.5, ChromaDB, Python, NVIDIA A100
  * **GitHub:** `https://github.com/soumya-xy/RAGHive`
  * **Image Asset:** `/placeholders/raghive.jpg`
* **Project 2: Redrob Hackathon Candidate Discovery**
  * **Tagline:** High-Throughput Hybrid Retrieval & Credibility Ranking Engine
  * **Scope:** 2-phase candidate ranking system for 100,000+ profiles built during Redrob challenge.
  * **Stack:** Python, Sentence-Transformers, BM25, Scikit-learn, Streamlit, YAML
  * **GitHub:** `https://github.com/soumya-xy/redrob`
  * **Live Demo:** `https://redrob-dataset-challenge.streamlit.app/`
  * **Image Asset:** `/placeholders/redrob.jpg`
* **Project 3: Regional Script Detection**
  * **Tagline:** Custom YOLOv8 Object Detection System for Multilingual Text Extraction
  * **Scope:** Computer vision fine-tuning workflow detecting Indian and Latin scripts in natural scene images.
  * **Stack:** Python, YOLOv8, Ultralytics, Google Colab, Computer Vision, Matplotlib
  * **GitHub:** `https://github.com/soumya-xy/Regional_Script_Detection`
  * **Live Demo / Dataset:** `https://drive.google.com/drive/folders/1URoYWSnojcbvFIJPv3aywBb0lT1JVlCo?usp=sharing` (Soumya's personal Google Drive folder)
  * **Image Asset:** `/placeholders/script-detection.jpg`
* **Project 4: TypeWise AI**
  * **Tagline:** AI-Powered Professional Communication Engine & Document Generator
  * **Scope:** Collaborative hackathon document editor integrated with Gemini 2.0 API and Firebase.
  * **Stack:** Next.js, TypeScript, Gemini API, Firebase Functions, Netlify, Framer Motion
  * **GitHub:** `https://github.com/Bhavishya011/TypeWise-AI` (Collaborator repository)
  * **Live Demo:** `https://typewise-ai.netlify.app`
  * **Image Asset:** `/placeholders/typewise.jpg`
* **Commented-Out Projects in Code (`Hero.tsx` lines 240–244):**
  * `PlaceTrack AI`, `Algonix`, `GST Billing App`, `Carbonomics AI`
* **Commented-Out Open Source (`Hero.tsx` line 256):**
  * `Connect Global '26 · ELUSOC Summer of Code '26`

### F. Hidden and Traceable Information
* **SEO Page Title:** `Soumya Jain | Software Developer` (`index.html`)
* **SEO Meta Description:** Mentions Soumya Jain, LNMIIT, software projects, AI/ML research (`index.html`)
* **SEO Meta Keywords:** `Soumya Jain, LNMIIT, Soumya Jain Portfolio, Software Developer, AI Engineer, React, TypeScript, Python, RAGHive, Redrob, Computer Vision`
* **SEO Meta Author:** `Soumya Jain`
* **Open Graph & Twitter Meta Tags:** `og:title`, `og:description`, `twitter:title`, `twitter:description` all hardcode Soumya Jain and LNMIIT
* **JSON-LD Schema (Person):** Structured schema describing `Soumya Jain`, `worksFor`, `alumniOf`, `sameAs` links to GitHub, LinkedIn, and LeetCode
* **JSON-LD Schema (WebSite):** `Soumya Jain Portfolio`
* **Browser Page Title in Resume Viewer:** `Soumya Jain Resume Preview` (`ResumeView.tsx`)
* **Terminal Shell Prompts & Banners:**
  * Header bar: `soumya@bash: ~`
  * Console prompt: `visitor@soumyajain.in:~$` (Custom domain trace)
  * Banner: `Welcome to Soumya's Interactive Portfolio Shell!`
* **About Page Terminal Card:**
  * Header: `&nbsp;Soumya's Bash Terminal`
  * Mock prompt: `visitor@soumya:~$`
* **Matrix Overlay Simulation Banner:** `Soumya Jain Portfolio Matrix Simulation Active`
* **Floating Chatbot Persona:** Name is `Soumya AI`, prompt reads `"Hi! I'm Soumya's Assistant..."`, answers use third-person `"Soumya has built..."`
* **Browser LocalStorage Key:** `'soumya-theme'` in `src/context/ThemeContext.tsx`
* **Repository Package Name:** `"soumya-portfolio"` in `package.json` and `package-lock.json`
* **Documentation & Licensing:** `README.md` and `LICENSE` explicitly copyright Soumya Jain (2026) and link to `github.com/soumya-xy`

---

## 4. Comprehensive File-by-File Audit Table

The following master table lists **every exact file location**, code symbol or line number, current value, information category, and the precise recommended migration action.

| File Path | Location / Line(s) | Existing Value / Content | Info Type | Recommended Migration Action |
| :--- | :--- | :--- | :--- | :--- |
| `index.html` | Line 13 | `<title>Soumya Jain \| Software Developer</title>` | Identity / SEO | Replace with Tanishka Vyas's title |
| `index.html` | Line 14 | `<meta name="description" content="Explore the personal developer portfolio of Soumya Jain, a Software Developer and Computer Science undergraduate student at LNMIIT..." />` | SEO Metadata | Replace with Tanishka's description & institution |
| `index.html` | Line 15 | `<meta name="keywords" content="Soumya Jain, LNMIIT, Soumya Jain Portfolio, Software Developer, AI Engineer..." />` | SEO Metadata | Replace keywords with Tanishka's name and relevant tags |
| `index.html` | Line 16 | `<meta name="author" content="Soumya Jain" />` | Metadata | Replace with `Tanishka Vyas` |
| `index.html` | Line 20 | `<meta property="og:title" content="Soumya Jain \| Software Developer" />` | Open Graph | Replace with Tanishka's OG title |
| `index.html` | Line 21 | `<meta property="og:description" content="Explore the personal developer portfolio of Soumya Jain..." />` | Open Graph | Replace with Tanishka's OG description |
| `index.html` | Line 22, 28, 36 | `content="/placeholders/hero.jpg"` | Static Asset Reference | Update to point to valid social preview card for Tanishka |
| `index.html` | Line 26 | `<meta property="twitter:title" content="Soumya Jain \| Software Developer" />` | Twitter Card | Replace with Tanishka's Twitter title |
| `index.html` | Line 27 | `<meta property="twitter:description" content="Explore the personal developer portfolio of Soumya Jain..." />` | Twitter Card | Replace with Tanishka's Twitter description |
| `index.html` | Lines 34–61 | JSON-LD `Person`: `"name": "Soumya Jain"`, `sameAs` (GitHub, LinkedIn, LeetCode), `worksFor`, `alumniOf` | Structured Data | Replace all fields with Tanishka's identity, social URLs, and university |
| `index.html` | Lines 68–71 | JSON-LD `WebSite`: `"name": "Soumya Jain Portfolio"` | Structured Data | Update to `Tanishka Vyas Portfolio` |
| `public/favicon.svg` | Line 9 | `<text ...>SJ</text>` | Brand Logo / Icon | Update monogram text from `SJ` to `TV` |
| `public/soumya_jain_pdf.pdf` | Entire File | PDF document containing Soumya Jain's complete resume (including phone number `7877318802`) | Downloadable Document | Replace with Tanishka's PDF resume; update filename |
| `public/placeholders/raghive.jpg` | Binary Asset | Cover image for RAGHive thesis project | Project Thumbnail | Replace with Tanishka's project 1 thumbnail |
| `public/placeholders/redrob.jpg` | Binary Asset | Cover image for Redrob ranking project | Project Thumbnail | Replace with Tanishka's project 2 thumbnail |
| `public/placeholders/script-detection.jpg` | Binary Asset | Cover image for Regional Script Detection project | Project Thumbnail | Replace with Tanishka's project 3 thumbnail |
| `public/placeholders/typewise.jpg` | Binary Asset | Cover image for TypeWise AI project | Project Thumbnail | Replace with Tanishka's project 4 thumbnail |
| `src/data/portfolioData.ts` | Line 56 | `name: "Soumya Jain"` | Identity | Replace with `Tanishka Vyas` |
| `src/data/portfolioData.ts` | Line 57 | `title: "Software Developer"` | Professional Headline | Update with Tanishka's job title |
| `src/data/portfolioData.ts` | Line 58 | `subtitle: "Computer Science Undergraduate"` | Subtitle | Update with Tanishka's headline / education status |
| `src/data/portfolioData.ts` | Line 59 | `bio: "Building practical software, AI-powered solutions..."` | Biography | Replace with Tanishka's personal bio |
| `src/data/portfolioData.ts` | Line 60 | `resumeUrl: "/soumya_jain_pdf.pdf"` | Resume Path | Update to new resume file path (e.g. `/tanishka_vyas_resume.pdf`) |
| `src/data/portfolioData.ts` | Line 61 | `lastUpdatedResume: "June 2026"` | Resume Metadata | Update with latest resume date |
| `src/data/portfolioData.ts` | Line 62 | `location: "Jaipur, Rajasthan, India"` | Contact / Location | Update with Tanishka's location |
| `src/data/portfolioData.ts` | Line 64 | `github: "https://github.com/soumya-xy"` | Social URL | Replace with Tanishka's GitHub profile URL |
| `src/data/portfolioData.ts` | Line 65 | `linkedin: "https://www.linkedin.com/in/soumya-jain-16561b253/"` | Social URL | Replace with Tanishka's LinkedIn profile URL |
| `src/data/portfolioData.ts` | Line 66 | `email: "jainsoumya2305@gmail.com"` | Contact Email | Replace with Tanishka's email address |
| `src/data/portfolioData.ts` | Line 67 | `leetcode: "https://leetcode.com/u/soumya_xy/"` | Social URL | Replace with Tanishka's LeetCode URL (or remove if unused) |
| `src/data/portfolioData.ts` | Lines 69–77 | `education`: LNMIIT, B.Tech CSE, 2023 - 2027, GPA 7.02 | Academic History | Replace with Tanishka's university, degree, timeline, and CGPA |
| `src/data/portfolioData.ts` | Lines 78–84 | `skills`: languages, frameworks, databases, tools, aiMl | Technical Expertise | Align skills arrays with Tanishka's verified stack |
| `src/data/portfolioData.ts` | Lines 85–134 | `projects`: RAGHive, Redrob, Regional Script Detection, TypeWise AI (titles, descriptions, links, image paths) | Projects Content | Replace all 4 project objects with Tanishka's projects and GitHub links |
| `src/data/portfolioData.ts` | Line 119 | `liveUrl: "https://drive.google.com/drive/folders/1URoYWSnojcbvFIJPv3aywBb0lT1JVlCo?usp=sharing"` | Project URL | Replace personal Google Drive link with Tanishka's live link or empty string |
| `src/data/portfolioData.ts` | Line 130 | `githubUrl: "https://github.com/Bhavishya011/TypeWise-AI"` | Collaborator Link | Replace with Tanishka's repository URL |
| `src/data/portfolioData.ts` | Lines 135–157 | `experience`: GO-BRICS Business Lab, Upvalue Tech Pvt Ltd (roles, dates, bullets) | Work Experience | Replace with Tanishka's employment and internship history |
| `src/components/Navbar.tsx` | Line 95 | `<div ...>SJ</div>` | Brand Logo Initials | Update hardcoded monogram text from `SJ` to `TV` |
| `src/components/Navbar.tsx` | Line 98 | `SOUMYA.JAIN` | Brand Logo Text | Update hardcoded string to `TANISHKA.VYAS` |
| `src/components/Hero.tsx` | Line 156 | `{"SOUMYA".split('').map(...)` | Heading Text | Update hardcoded string from `SOUMYA` to `TANISHKA` |
| `src/components/Hero.tsx` | Line 170 | `{"JAIN".split('').map(...)` | Heading Text | Update hardcoded string from `JAIN` to `VYAS` |
| `src/components/Hero.tsx` | Line 142 | `Software & AI Engineering` | Specialization Badge | Update if Tanishka's domain specialization differs |
| `src/components/Hero.tsx` | Line 200 | `Open to Opportunities · 2026` | Status Badge | Update year or status as per Tanishka's preferences |
| `src/components/Hero.tsx` | Lines 240–244 | Commented-out projects (`PlaceTrack AI`, `Algonix`, `GST Billing App`, `Carbonomics AI`) | Dead Code | Clean up or update commented project references |
| `src/components/Hero.tsx` | Line 256 | Commented-out open source (`Connect Global '26...`) | Dead Code | Clean up or update commented open-source records |
| `src/components/About.tsx` | Lines 24–32 | Three narrative paragraphs ("My Journey": web development + AI, hackathon builder, open source) | Personal Story | Update narrative paragraphs to reflect Tanishka's background and voice |
| `src/components/About.tsx` | Line 41 | `&nbsp;Soumya's Bash Terminal` | Terminal Launcher Card | Replace string with `Tanishka's Bash Terminal` |
| `src/components/About.tsx` | Line 51 | `<span>visitor@soumya:~$</span>` | Terminal Launcher Card | Replace prompt with `visitor@tanishka:~$` |
| `src/components/About.tsx` | Lines 99–112 | Focus Areas list (Frontend Web Dev, AI Applications, RAG Systems, GEN AI) | Focus Areas | Update focus area bullet points with Tanishka's core areas |
| `src/components/Skills.tsx` | Lines 10–57 | 4 static tracks of 37 skills (`track1`, `track2`, `track3`, `track4`) | Skills Marquee | Verify skills match Tanishka's profile and adjust items/slugs if needed |
| `src/components/ResumeView.tsx` | Line 58 | `title="Soumya Jain Resume Preview"` | Iframe Accessibility Title | Update title to `Tanishka Vyas Resume Preview` |
| `src/components/Contact.tsx` | Line 149 | Fallback string `'soumya-xy'` in GitHub card | Fallback Username | Update fallback to Tanishka's GitHub handle |
| `src/components/Contact.tsx` | Line 176 | Fallback string `'soumya_xy'` in LeetCode card | Fallback Username | Update fallback to Tanishka's LeetCode handle |
| `src/components/FloatingChatbot.tsx` | Line 17 | `text: "Hi! I'm Soumya's Assistant..."` | Chatbot Greeting | Replace with `"Hi! I'm Tanishka's Assistant..."` |
| `src/components/FloatingChatbot.tsx` | Line 27 | `<p>Soumya has built several featured platforms:</p>` | Chatbot Scripted Answer | Replace `Soumya` with `Tanishka` |
| `src/components/FloatingChatbot.tsx` | Line 45 | `<p>Here are Soumya's core technologies:</p>` | Chatbot Scripted Answer | Replace `Soumya's` with `Tanishka's` |
| `src/components/FloatingChatbot.tsx` | Line 55 | `answer: "Yes! Soumya is currently pursuing..."` | Chatbot Scripted Answer | Replace `Soumya` with `Tanishka` |
| `src/components/FloatingChatbot.tsx` | Line 61 | `<p>You can reach Soumya directly at:</p>` | Chatbot Scripted Answer | Replace `Soumya` with `Tanishka` |
| `src/components/FloatingChatbot.tsx` | Line 125 | `<h4 ...>Soumya AI</h4>` | Chatbot Header | Replace header with `Tanishka AI` |
| `src/components/TerminalOverlay.tsx` | Line 21 | `text: 'Welcome to Soumya\'s Interactive Portfolio Shell!'` | Terminal Output Banner | Replace with `'Welcome to Tanishka\'s Interactive Portfolio Shell!'` |
| `src/components/TerminalOverlay.tsx` | Line 185 | `soumya@bash: ~` | Terminal Window Header | Replace title with `tanishka@bash: ~` |
| `src/components/TerminalOverlay.tsx` | Line 208 | `visitor@soumyajain.in:~$` | Interactive Shell Prompt | Replace hostname with `visitor@tanishkavyas:~$` (or target domain) |
| `src/components/TerminalOverlay.tsx` | Line 228 | `visitor@soumyajain.in:~$` | Form Input Prompt | Replace hostname with `visitor@tanishkavyas:~$` (or target domain) |
| `src/components/MatrixOverlay.tsx` | Line 110 | `<p ...>Soumya Jain Portfolio Matrix Simulation Active</p>` | HUD Banner | Update string to `Tanishka Vyas Portfolio Matrix Simulation Active` |
| `src/components/CommandPalette.tsx` | Line 59 | `description: "Scroll to RAGHive, TypeWise AI, and other projects"` | Search Menu Description | Update project names mentioned in description to Tanishka's projects |
| `src/components/Footer.tsx` | Line 15 | `© 2026 Soumya Jain` | Copyright Notice | Update string to `© 2026 Tanishka Vyas` |
| `src/context/ThemeContext.tsx` | Lines 14, 29 | `localStorage.getItem('soumya-theme')` / `setItem('soumya-theme', ...)` | Traceable Storage Key | Update storage key to `'tanishka-theme'` or generic `'portfolio-theme'` |
| `src/pages/Privacy.tsx` | Line 31 | `<strong>{portfolioData.name}</strong>` | Dynamic Render | Automatically updates via `portfolioData.name` |
| `src/pages/Privacy.tsx` | Line 37 | `securely dispatched to Soumya's personal inbox using the EmailJS API` | Legal Body Copy | Replace `Soumya's` with `Tanishka's` |
| `package.json` | Line 2 | `"name": "soumya-portfolio"` | Package Metadata | Update to `"tanishka-portfolio"` |
| `package-lock.json` | Lines 2, 8 | `"name": "soumya-portfolio"` | Lockfile Metadata | Update package name to match `package.json` |
| `LICENSE` | Line 3 | `Copyright (c) 2026 Soumya Jain` | MIT License Legal Notice | Update copyright holder to `Tanishka Vyas` |
| `README.md` | Line 3 | `# soumya-portfolio` | Repo Documentation | Update title to `# tanishka-portfolio` |
| `README.md` | Line 5 | `**Personal Portfolio of Soumya Jain — Software Developer**` | Documentation Headline | Update to Tanishka Vyas |
| `README.md` | Line 7 | `[![Live Site](...)](https://github.com/soumya-xy)` | Readme Badge | Update URL to Tanishka's repository |
| `README.md` | Lines 42–45 | Terminal command mock output listing RAGHive, Redrob, etc. | Project Showcase | Update project titles to match Tanishka's |
| `README.md` | Line 98 | `soumya_jain_pdf.pdf` in tree diagram | Documentation Tree | Update filename to new resume name |
| `README.md` | Line 122 | `git clone https://github.com/soumya-xy/portfolio.git` | Setup Instructions | Update GitHub clone URL |
| `README.md` | Lines 153–164 | Descriptions of RAGHive, Redrob, Regional Script Detection, TypeWise AI | Project Descriptions | Update project summaries for Tanishka's work |
| `README.md` | Lines 169–173 | Author: **Soumya Jain**, GitHub & LinkedIn links | Author Profile | Replace with Tanishka's author block and links |
| `README.md` | Line 180 | `Copyright © 2026 [Soumya Jain](https://github.com/soumya-xy)` | Readme Footer | Update copyright holder and link |

---

## 5. Existing Content Categorized by Section

### 5.1 Identity & Branding
* **Hero Section:**
  * Animated kinetic text splits first and last name into individual letters: `SOUMYA` and `JAIN`.
  * Monogram in Navbar: Gradient box with `SJ`.
  * Monogram text: `SOUMYA.JAIN`.
  * Favicon SVG: Dark rounded square with gradient letters `SJ`.
* **Footers & Licensing:**
  * Global footer: `© 2026 Soumya Jain`.
  * MIT License: `Copyright (c) 2026 Soumya Jain`.
  * README header and footer: Attributed to Soumya Jain.

### 5.2 Contact Channels
* **Primary Email:** `jainsoumya2305@gmail.com` (displayed in Hero quick-links, Contact big CTA button, Contact info card, Chatbot answer, and Privacy policy).
* **Phone Number:** `7877318802` (in `soumya_jain_pdf.pdf`).
* **Location:** `Jaipur, Rajasthan, India` (in Hero table, Contact footer, and Terminal `about` output).
* **Social Links:**
  * GitHub: `https://github.com/soumya-xy`
  * LinkedIn: `https://www.linkedin.com/in/soumya-jain-16561b253/`
  * LeetCode: `https://leetcode.com/u/soumya_xy/`

### 5.3 Education Section
* **Institution:** The LNM Institute of Information Technology
* **Degree:** B.Tech in Computer Science and Engineering
* **Duration:** 2023 – 2027
* **CGPA:** 7.02 / 10
* **Locations rendered:**
  * Hero specifications table (Row 1 & 2)
  * About section right column Education card
  * Chatbot scripted answer for opportunities
  * Terminal shell `about` command output
  * Index.html JSON-LD `EducationalOrganization` schema

### 5.4 Work Experience Section
* **Job 1:** Applied AI Intern at GO-BRICS Business Lab (May 2026 – July 2026, Remote)
* **Job 2:** AI/ML Intern at Upvalue Tech Pvt Ltd (June 2025 – Dec 2025, Remote)
* **Locations rendered:**
  * Experience vertical timeline (`Experience.tsx`)
  * Terminal shell `experience` command output (`TerminalOverlay.tsx`)
  * Resume PDF (`public/soumya_jain_pdf.pdf`)

### 5.5 Projects Showcase Section
* **Project 1:** RAGHive (MA-RAG thesis project, LangGraph, vLLM, ChromaDB)
* **Project 2:** Redrob Candidate Discovery (Candidate ranking engine, BM25, Sentence-Transformers)
* **Project 3:** Regional Script Detection (YOLOv8 multilingual script classifier)
* **Project 4:** TypeWise AI (AI message generator & document exporter with Gemini API)
* **Locations rendered:**
  * Projects grid cards (`Projects.tsx`)
  * Command palette search items (`CommandPalette.tsx`)
  * Chatbot project list (`FloatingChatbot.tsx`)
  * Terminal shell `projects` command output (`TerminalOverlay.tsx`)
  * README featured project section (`README.md`)

### 5.6 Skills Section
* **Data file (`portfolioData.ts`):** 5 categorized skill buckets (languages, frameworks, databases, tools, aiMl).
* **Component (`Skills.tsx`):** 4 static scrolling tracks containing 37 technologies:
  * Track 1: C, C++, CSS3, HTML5, JavaScript, Python, AWS, Netlify, Google Cloud
  * Track 2: Angular.js, Chart.js, FastAPI, Express.js, Flask, Next.js, Node.js, React, Streamlit, Tailwind CSS
  * Track 3: SQLite, Supabase, MySQL, MongoDB, Canva, Figma, Matplotlib, MLflow, NumPy
  * Track 4: Pandas, Plotly, PyTorch, Scikit-learn, SciPy, TensorFlow, Git, GitHub, Notion
* **Locations rendered:**
  * Infinite marquee rows (`Skills.tsx`)
  * Hero specifications table (Row 5: Languages)
  * Chatbot tech stack answer (`FloatingChatbot.tsx`)

---

## 6. Asset Identification and Replacement Strategy

| Asset Path | Asset Type | Current Identity Embedded | Recommended Action | Detailed Explanation |
| :--- | :--- | :--- | :--- | :--- |
| `public/favicon.svg` | SVG Vector Icon | Contains SVG text node `<text>SJ</text>` | **Modify** | Replace text node `SJ` with `TV` (Tanishka Vyas). All gradient and styling properties should remain identical. |
| `public/soumya_jain_pdf.pdf` | PDF Document | Entire resume of Soumya Jain including phone `7877318802`, education, work history, thesis details | **Replace & Rename** | Replace with Tanishka's official PDF resume. Rename to `tanishka_vyas_resume.pdf` (or `tanishka_vyas_pdf.pdf`) and update `portfolioData.resumeUrl`. |
| `public/placeholders/raghive.jpg` | JPG Image | Cover diagram / preview for RAGHive thesis | **Replace or Retain** | If Tanishka retains this project or provides her own Project 1, replace this image with Tanishka's project cover thumbnail. |
| `public/placeholders/redrob.jpg` | JPG Image | Streamlit app UI screenshot of candidate discovery | **Replace or Retain** | Replace with Tanishka's Project 2 screenshot / thumbnail. |
| `public/placeholders/script-detection.jpg` | JPG Image | YOLO script bounding box detection output | **Replace or Retain** | Replace with Tanishka's Project 3 screenshot / thumbnail. |
| `public/placeholders/typewise.jpg` | JPG Image | App UI screenshot of TypeWise AI web platform | **Replace or Retain** | Replace with Tanishka's Project 4 screenshot / thumbnail. |
| `/placeholders/hero.png` & `/placeholders/hero.jpg` | Missing Image References | Referenced in `index.html` (lines 9, 22, 28, 36) for social sharing and preloading, but files are missing from disk | **Add / Update** | Provide a clean social share card (Open Graph preview) for Tanishka Vyas or update `index.html` references to an existing graphic. |
| `src/assets/react.svg` & `vite.svg` | Static Assets | Boilerplate Vite/React logos (unused in production UI) | **Retain Unchanged** | Non-identifiable default template assets; do not affect personal data. |

---

## 7. Hidden and Indirect References

The audit uncovered several subtle, non-obvious places where Soumya Jain's identity or traces are embedded outside standard data files:

1. **LocalStorage Theme Key (`src/context/ThemeContext.tsx` Lines 14, 29):**
   * Key name is currently `'soumya-theme'`. If an existing visitor has `'soumya-theme'` in localStorage, their preference is read from this key. Should be renamed to `'tanishka-theme'` or `'portfolio-theme'`.
2. **Terminal Hostname & User (`src/components/TerminalOverlay.tsx` Lines 185, 208, 228):**
   * Window title bar displays `soumya@bash: ~`.
   * Terminal command line and input prompt display `visitor@soumyajain.in:~$`.
   * This directly leaks Soumya's name and domain name `soumyajain.in` inside an interactive simulator.
3. **About Mock Terminal Card (`src/components/About.tsx` Lines 41, 51):**
   * Terminal title bar displays `&nbsp;Soumya's Bash Terminal`.
   * Terminal user prompt displays `visitor@soumya:~$`.
4. **Matrix Overlay Title (`src/components/MatrixOverlay.tsx` Line 110):**
   * Triggered by the Konami code (`↑ ↑ ↓ ↓ ← → ← → B A`), the HUD displays: `Soumya Jain Portfolio Matrix Simulation Active`.
5. **Floating Chatbot Persona & Labels (`src/components/FloatingChatbot.tsx` Lines 17, 125):**
   * Bot title in header: `Soumya AI` (with beta badge).
   * Initial greeting: `Hi! I'm Soumya's Assistant. Ask me anything about her work, technical stack, or availability!`.
6. **Hardcoded Kinetic Letters in Hero (`src/components/Hero.tsx` Lines 156, 170):**
   * Unlike the bio and specs which read from `portfolioData`, the hero heading does NOT use `portfolioData.name`. It directly maps the hardcoded string literals `"SOUMYA"` and `"JAIN"`.
7. **Contact Card Username Fallbacks (`src/components/Contact.tsx` Lines 149, 176):**
   * GitHub handle fallback: `@soumya-xy`
   * LeetCode handle fallback: `@soumya_xy`
8. **Command Palette Static Description (`src/components/CommandPalette.tsx` Line 59):**
   * Description for Projects Showcase: `"Scroll to RAGHive, TypeWise AI, and other projects"`.
9. **Project External Link to Personal Google Drive (`src/data/portfolioData.ts` Line 119):**
   * Regional Script Detection live link points to a private/personal Google Drive folder owned by Soumya.
10. **Resume Iframe Accessibility Title (`src/components/ResumeView.tsx` Line 58):**
    * The `iframe` has `title="Soumya Jain Resume Preview"`.
11. **Privacy Policy Body Text (`src/pages/Privacy.tsx` Line 37):**
    * Explains that form details are `"securely dispatched to Soumya's personal inbox"`.
12. **Package Name (`package.json` & `package-lock.json`):**
    * `"name": "soumya-portfolio"`.
13. **Commented-Out Dead Code (`src/components/Hero.tsx` Lines 240–256):**
    * Commented table rows contain past projects (`PlaceTrack AI`, `Algonix`, `GST Billing App`, `Carbonomics AI`) and open source activities (`Connect Global '26 · ELUSOC Summer of Code '26`).

---

## 8. Content that is Generic and Can Be Retained

The following structural, stylistic, and interactive components are completely generic and can be retained **100% intact** without revealing personal data:

1. **3D Interactive Background (`src/data/chrome-grid.tsx`):**
   * Three.js canvas featuring raycasted kinetic extruded cubes with pointer-reactive ripple scaling. Contains zero personal data.
2. **2048 Arcade Mini-Game (`src/pages/Game2048Page.tsx` & `src/components/Game2048.jsx`):**
   * Complete 2048 game implementation with touch gestures, high-score tracking, board mechanics, and instructions card. Completely generic.
3. **Matrix Rain Simulation Logic (`src/components/MatrixOverlay.tsx`):**
   * Matrix character rain canvas animation, font drop mechanics, and Konami code listener logic (excluding the one title string mentioned in Section 7).
4. **Visual Design & CSS System (`src/index.css` & `src/App.css`):**
   * Color palettes (`--brand-primary`, `--brand-bg`, `--brand-accent`, etc.), dark/light mode styles, glassmorphism, custom scrollbars, kinetic typography font variations (`font-mihir` / Archivo font variation settings), and CSS infinite marquee animations.
5. **Brand Icons (`src/components/BrandIcons.tsx`):**
   * Clean inline SVG icon components for GitHub, LinkedIn, Twitter, YouTube, LeetCode, Dev.to, Medium, and Reddit.
6. **Navigation & Scrollspy (`src/components/Navbar.tsx`):**
   * Fixed header scroll detection, mobile hamburger drawer, spring-animated underline indicator (`layoutId="activeNavUnderline"`), and theme toggle controls.
7. **Recruiter Mode Feature (`src/App.tsx` & `src/index.css`):**
   * Recruiter Mode toggle (hotkey `R`), which eliminates animations and provides a static, print-ready layout.
8. **Command Palette Navigation Mechanism (`src/components/CommandPalette.tsx`):**
   * Quick-search modal triggered by `Ctrl+K` / `Cmd+K` with keyboard navigation (`↑`, `↓`, `Enter`, `ESC`).
9. **Image Lightbox Modal (`src/App.tsx`):**
   * Global modal for clicking and expanding images with backdrop blur and escape handlers.
10. **Build & Routing Infrastructure:**
    * `vite.config.ts` manual chunking splits (`vendor-react`, `vendor-framer`, `vendor-lucide`), `vercel.json` rewrite rules, and TypeScript configuration files.

---

## 9. Required Information from Tanishka Vyas

To perform the migration without making assumptions or inventing data, the following specific inputs must be provided by or collected from Tanishka Vyas:

### A. Core Identity
- [ ] Preferred display name (e.g., `Tanishka Vyas`)
- [ ] Professional title/headline (e.g., `Software Developer`, `Full Stack Engineer`, `Data Scientist`, etc.)
- [ ] Subtitle / current status (e.g., `Computer Science Undergraduate`, `Software Engineering Student`, etc.)
- [ ] Short biography (1–2 sentences for Hero section)
- [ ] Extended journey story (2–3 paragraphs for About Me section)
- [ ] 3–4 Core focus areas (e.g., Web Development, Cloud Computing, Distributed Systems, Machine Learning)

### B. Contact & Social Channels
- [ ] Official email address for direct inquiries and contact form dispatch
- [ ] Current location (City, State, Country)
- [ ] GitHub profile URL and username
- [ ] LinkedIn profile URL
- [ ] LeetCode profile URL (or indicate if section should be hidden/omitted)
- [ ] Custom domain name (if applicable, for terminal prompts)

### C. Academic Records
- [ ] College / University name
- [ ] Degree (e.g., B.Tech, B.S., B.E.)
- [ ] Specialization / Major (e.g., Computer Science and Engineering)
- [ ] Graduation timeline / expected graduation year (e.g., 2023 – 2027)
- [ ] Current CGPA / GPA (or indicate if GPA badge should be omitted)

### D. Professional Experience
- [ ] List of work experiences/internships to display (Roles, Companies, Dates, Locations, Bullet points)
- [ ] Or indicate if this section should display academic/extracurricular leadership instead

### E. Projects (Up to 4 Featured Systems)
For each project:
- [ ] Project Title & Short Tagline
- [ ] Detailed description (problem, architecture, results)
- [ ] Tech stack array (libraries, frameworks, tools)
- [ ] GitHub repository URL
- [ ] Live deployment URL (or empty string if none)
- [ ] Cover image / screenshot thumbnail (16:9 aspect ratio recommended)

### F. Skills Inventory
- [ ] Verified list of programming languages, frameworks, databases, and developer tools
- [ ] Confirmation whether the existing 37 marquee skills in `Skills.tsx` should be modified

### G. Assets
- [ ] PDF copy of Tanishka Vyas's resume (to replace `soumya_jain_pdf.pdf`)
- [ ] Social sharing card / OG image (1200x630 px) for `index.html` Open Graph tags
- [ ] Monogram preference (`TV` is default for Tanishka Vyas)

---

## 10. Step-by-Step Migration Checklist

When authorized to proceed with the migration phase, execute tasks in the following sequential order:

### Phase 1: Static Assets Replacement
- [ ] **1.1** Generate new `public/favicon.svg` with monogram `TV`.
- [ ] **1.2** Place Tanishka's PDF resume in `public/` (e.g., `public/tanishka_vyas_resume.pdf`).
- [ ] **1.3** Remove or archive `public/soumya_jain_pdf.pdf`.
- [ ] **1.4** Replace project cover images in `public/placeholders/` with Tanishka's project screenshots.
- [ ] **1.5** Place an Open Graph social card image at `public/placeholders/hero.jpg` (or `.png`).

### Phase 2: Centralized Data File Update (`src/data/portfolioData.ts`)
- [ ] **2.1** Update `name`, `title`, `subtitle`, `bio`, `location`.
- [ ] **2.2** Update `resumeUrl` and `lastUpdatedResume`.
- [ ] **2.3** Update `socials` (`github`, `linkedin`, `email`, `leetcode`).
- [ ] **2.4** Update `education` array with Tanishka's university, degree, and GPA.
- [ ] **2.5** Update `skills` categories.
- [ ] **2.6** Replace all 4 items in `projects` array with Tanishka's project data and repository links.
- [ ] **2.7** Replace `experience` array with Tanishka's work history.

### Phase 3: Component Hardcoded Copy & Prompts Update
- [ ] **3.1 `src/components/Navbar.tsx`:** Update monogram box to `TV` (line 95) and text brand to `TANISHKA.VYAS` (line 98).
- [ ] **3.2 `src/components/Hero.tsx`:** Update kinetic character arrays from `"SOUMYA"` and `"JAIN"` to `"TANISHKA"` and `"VYAS"` (lines 156, 170). Clean up commented project references.
- [ ] **3.3 `src/components/About.tsx`:** Update journey text (lines 24–32), terminal launcher title to `Tanishka's Bash Terminal` (line 41), prompt to `visitor@tanishka:~$` (line 51), and focus areas (lines 99–112).
- [ ] **3.4 `src/components/Skills.tsx`:** Review and synchronize marquee tracks with Tanishka's technical stack.
- [ ] **3.5 `src/components/ResumeView.tsx`:** Update iframe accessibility title to `Tanishka Vyas Resume Preview` (line 58).
- [ ] **3.6 `src/components/Contact.tsx`:** Update GitHub fallback (line 149) and LeetCode fallback (line 176).
- [ ] **3.7 `src/components/FloatingChatbot.tsx`:** Update header to `Tanishka AI` (line 125), greeting to `Tanishka's Assistant` (line 17), and scripted answers referencing Soumya (lines 27, 45, 55, 61).
- [ ] **3.8 `src/components/TerminalOverlay.tsx`:** Update output banner (line 21), header bar title to `tanishka@bash: ~` (line 185), and shell prompts from `visitor@soumyajain.in:~$` to `visitor@tanishkavyas:~$` (lines 208, 228).
- [ ] **3.9 `src/components/MatrixOverlay.tsx`:** Update banner string to `Tanishka Vyas Portfolio Matrix Simulation Active` (line 110).
- [ ] **3.10 `src/components/CommandPalette.tsx`:** Update project showcase search item description to mention Tanishka's projects (line 59).
- [ ] **3.11 `src/components/Footer.tsx`:** Update copyright notice to `© 2026 Tanishka Vyas` (line 15).
- [ ] **3.12 `src/context/ThemeContext.tsx`:** Rename localStorage key from `'soumya-theme'` to `'tanishka-theme'` or `'portfolio-theme'` (lines 14, 29).
- [ ] **3.13 `src/pages/Privacy.tsx`:** Update privacy policy copy to state queries are dispatched to Tanishka's inbox (line 37).

### Phase 4: Metadata, SEO, and Structured Data (`index.html`)
- [ ] **4.1** Update `<title>` tag.
- [ ] **4.2** Update `<meta name="description">`, `keywords`, and `author`.
- [ ] **4.3** Update Open Graph tags (`og:title`, `og:description`).
- [ ] **4.4** Update Twitter tags (`twitter:title`, `twitter:description`).
- [ ] **4.5** Update JSON-LD `Person` schema (`name`, `sameAs`, `worksFor`, `alumniOf`, `knowsAbout`).
- [ ] **4.6** Update JSON-LD `WebSite` schema (`name`, `description`).

### Phase 5: Repository Configuration and Documentation
- [ ] **5.1 `package.json` & `package-lock.json`:** Update `"name": "tanishka-portfolio"`.
- [ ] **5.2 `LICENSE`:** Update copyright line to `Copyright (c) 2026 Tanishka Vyas`.
- [ ] **5.3 `README.md`:** Update title, badges, clone command, author block, project descriptions, and copyright.

### Phase 6: Quality Assurance & Build Verification
- [ ] **6.1 Search Verification:** Execute a global regex search for `Soumya`, `Jain`, `soumya-xy`, `soumya_xy`, and `soumyajain` to ensure zero residual traces remain.
- [ ] **6.2 Build Check:** Run `npm run build` to confirm TypeScript compiles with zero errors and Vite produces clean production bundles.
- [ ] **6.3 UI & Design Consistency Check:** Verify that color schemes, animations, kinetic typography spacing, and layout responsiveness remain completely identical.
