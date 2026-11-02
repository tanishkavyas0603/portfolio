import React from 'react';
import { BookOpen, Award, Compass, Star } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-16 px-6 border-t border-brand-border/40 bg-brand-card/20">
      <div className="max-w-5xl mx-auto">
        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="font-heading font-bold text-3xl md:text-5xl text-brand-primary tracking-tight">
            About Me
          </h2>
          <div className="h-1 w-12 bg-brand-accent mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-10 items-start">
          {/* Main Story Column */}
          <div className="md:col-span-2 space-y-6">
            <h3 className="font-heading font-semibold text-xl md:text-2xl text-brand-primary flex items-center gap-2">
              <Compass className="text-brand-accent" size={20} />
              My Journey
            </h3>
            <p className="font-sans text-brand-text-muted leading-relaxed">
            I am a Software Developer and AI/ML student pursuing an integrated B.Tech + M.Tech in Artificial Intelligence & Data Science at DAVV University. My technical journey is anchored in Python development, building robust backend services with FastAPI, designing REST APIs, and architecting intelligent data-driven solutions.
            </p>
            <p className="font-sans text-brand-text-muted leading-relaxed">
            My focus lies in building practical AI systems—spanning Retrieval-Augmented Generation (RAG) pipelines, multi-agent AI architectures, and predictive machine learning models. Through hands-on internship experience and projects like WebRAG and MenuMind AI, I specialize in combining scalable backend engineering with modern AI workflows to solve real-world challenges.
            </p>
            <p className="font-sans text-brand-text-muted leading-relaxed">
            Driven by curiosity and structured problem-solving, I continuously explore advanced ML paradigms, algorithmic challenges, and autonomous agent frameworks to engineer intelligent, reliable software for a better tomorrow.
            </p>

            {/* Interactive Terminal Launcher Mock Card */}
            <div className="mt-8 p-5 rounded-2xl bg-zinc-950 border border-zinc-900 shadow-xl font-mono text-xs text-green-400 space-y-3 relative overflow-hidden">
              <div className="flex items-center justify-between text-zinc-500 border-b border-zinc-900 pb-2 select-none">
                <span className="text-[10px] uppercase font-bold tracking-wide flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow-500"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-green-500"></span>
                  &nbsp;Tanishka's Bash Terminal
                </span>
                <span className="text-[9px] text-zinc-600">v1.0.0</span>
              </div>
              <div className="space-y-1 text-zinc-300">
                <p className="text-green-500 font-bold">&gt; Welcome to the interactive portfolio CLI shell!</p>
                <p className="text-zinc-500">You can trigger this terminal session at any time from the navbar icon or by pressing the ESC button.</p>
              </div>
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-1.5 text-zinc-500 text-[10px]">
                  <span>visitor@tanishka:~$</span>
                  <span className="bg-green-500 w-1.5 h-3.5 animate-pulse"></span>
                </div>
                <button
                  onClick={() => window.dispatchEvent(new CustomEvent('toggle-terminal'))}
                  className="w-full sm:w-auto px-4 py-2 rounded-lg bg-green-500 hover:bg-green-400 text-black font-bold text-[11px] uppercase tracking-wide cursor-pointer transition-all flex items-center justify-center gap-1.5 shadow-[0_0_15px_rgba(34,197,94,0.2)]"
                >
                  <span>Launch Terminal CLI</span>
                </button>
              </div>
            </div>
          </div>

          {/* Education & Info Column */}
          <div className="space-y-8">
            {/* Education Card */}
            <div className="p-6 rounded-2xl bg-brand-card border border-brand-border/60 shadow-lg">
              <h3 className="font-heading font-semibold text-lg text-brand-primary mb-4 flex items-center gap-2">
                <BookOpen className="text-brand-accent" size={18} />
                Education
              </h3>
              {portfolioData.education.map((edu, idx) => (
                <div key={idx} className="space-y-2">
                  <h4 className="font-heading font-bold text-sm md:text-base text-brand-text">
                    {edu.institution}
                  </h4>
                  <p className="text-xs text-brand-accent font-semibold uppercase tracking-wider">
                    {edu.degree} — {edu.specialization}
                  </p>
                  <div className="flex justify-between items-center text-xs text-brand-text-muted pt-1">
                    <span>{edu.duration}</span>
                    <span className="bg-brand-border/60 px-2 py-0.5 rounded font-mono font-medium">
                      GPA: {edu.gpa}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Focus Card */}
            <div className="p-6 rounded-2xl bg-brand-card border border-brand-border/60 shadow-lg">
              <h3 className="font-heading font-semibold text-lg text-brand-primary mb-4 flex items-center gap-2">
                <Award className="text-brand-accent" size={18} />
                Focus Areas
              </h3>
              <ul className="space-y-3.5 text-sm text-brand-text-muted">
                <li className="flex items-start gap-2.5">
                  <Star size={16} className="text-brand-accent mt-0.5 shrink-0" />
                  <span>Backend Engineering & REST APIs (FastAPI, Python)</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Star size={16} className="text-brand-accent mt-0.5 shrink-0" />
                  <span>Machine Learning & Predictive Modeling</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Star size={16} className="text-brand-accent mt-0.5 shrink-0" />
                  <span>Retrieval-Augmented Generation (RAG) Systems</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Star size={16} className="text-brand-accent mt-0.5 shrink-0" />
                  <span>Multi-Agent AI Architectures & Data Mining</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;
