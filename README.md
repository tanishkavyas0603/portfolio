<div align="center">

# tanishka-portfolio

**Personal Portfolio of Tanishka Vyas — Software Developer & AI/ML Student**

[![Live Site](https://img.shields.io/badge/Live-Portfolio-0A0A0A?style=for-the-badge&logo=vercel&logoColor=white)](https://github.com/tanishkavyas0603)
[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS_v4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vite.dev)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-EF0E7B?style=for-the-badge&logo=framer&logoColor=white)](https://www.framer.com/motion)
[![License](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

</div>

---

## Overview

This repository contains the source code for my personal developer portfolio website, built to showcase my software projects, technical skills, certifications, and professional experience. The portfolio combines a recruiter-focused interface with modern UI aesthetics, kinetic typography, smooth animations, and interactive components while maintaining excellent performance and responsiveness.

---

## Features

### Terminal Overlay (`>_`)

A built-in developer terminal accessible directly from the navigation bar or by pressing `ESC`.

```text
$ help
Available commands:
about
education
experience
projects
skills
contact
resume
github
clear
exit

$ projects
▸ WebRAG — Chat with Any Webpage
▸ Multi-Agent Research Pipeline
▸ Market Basket Analysis
▸ MenuMind AI — Agentic Restaurant Intelligence Platform
```

---

### Floating Chat Assistant

An offline assistant (`Tanishka AI`) that provides quick answers about my projects, technical stack, resume, and contact information without external APIs.

---

### Infinite Skills Marquee

A continuously scrolling skills section built using CSS animations with pause-on-hover support for smooth rendering.

---

### Responsive Design

Designed to work seamlessly across desktop, tablet, and mobile devices with an optimized user experience.

---

### Performance Optimizations

- Viewport-aware 3D Canvas unmounting for smooth 60fps scrolling
- Ref-based stateless Three.js canvas animations to prevent React render thrashing
- Lazy loading for below-the-fold components
- Code splitting with Vite
- Shared geometric buffers and material optimization

---

## Tech Stack

| Layer | Technology |
|--------|------------|
| Frontend | React + TypeScript |
| Styling | Tailwind CSS v4 |
| Build Tool | Vite |
| Animations | Framer Motion |
| Routing | React Router DOM |
| Icons | Lucide React |
| Deployment | Vercel |

---

## Project Structure

```text
portfolio/
├── public/
│   ├── placeholders/
│   ├── favicon.svg
│   └── tanishka_vyas_resume.pdf
│
├── src/
│   ├── components/
│   │   ├── TerminalOverlay.tsx
│   │   ├── FloatingChatbot.tsx
│   │   ├── Skills.tsx
│   │   └── ...
│   ├── App.tsx
│   ├── data/
│   │   └── portfolioData.ts
│   └── index.css
│
├── package.json
├── vite.config.ts
└── README.md
```

---

## Running Locally

Clone the repository:

```bash
git clone https://github.com/tanishkavyas0603/portfolio.git
```

Navigate to the project directory:

```bash
cd portfolio
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open:

```
http://localhost:5173
```

---

## Featured Projects

### WebRAG — Chat with Any Webpage
An AI-powered RAG system that answers questions from webpages using FastAPI, Python, PostgreSQL and Groq LLM for conversational, context-aware search with hybrid retrieval.

### Multi-Agent Research Pipeline
An automated multi-agent research workflow built with Python, LangChain, Groq API, Tavily API, and Streamlit that turns user queries into structured research reports.

### Market Basket Analysis
A data mining project applying the Apriori algorithm and association rule discovery on retail transaction datasets to uncover item associations and consumer buying patterns.

### MenuMind AI — Agentic Restaurant Intelligence Platform
An AI-powered restaurant intelligence platform built with React, FastAPI, Python and Google Gemini using multi-agent orchestration for analytics, menu consulting, and tool calling.

---

## Author

**Tanishka Vyas**

- GitHub: [github.com/tanishkavyas0603](https://github.com/tanishkavyas0603)
- LinkedIn: [linkedin.com/in/tanishka-vyas-ai](https://www.linkedin.com/in/tanishka-vyas-ai/)
- LeetCode: [leetcode.com/u/tanishka_vyas](https://leetcode.com/u/tanishka_vyas/)

---

## License

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

Copyright © 2026 [Tanishka Vyas](https://github.com/tanishkavyas0603)

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more information.
