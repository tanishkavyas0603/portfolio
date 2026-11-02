import React from 'react';
import { Database, Cpu, Layers, Network, CheckCircle2, Binary, Brain, Boxes, GitBranch, Server, FileJson } from 'lucide-react';

interface Skill {
  name: string;
  slug: string;
  color: string;
}

export const Skills: React.FC = () => {
  const track1: Skill[] = [
    { name: "Python", slug: "python", color: "3776AB" },
    { name: "SQL", slug: "sql", color: "E38C00" },
    { name: "FastAPI", slug: "fastapi", color: "05998B" },
    { name: "REST APIs", slug: "restapis", color: "009688" },
    { name: "CRUD", slug: "crud", color: "6366F1" },
    { name: "JSON", slug: "json", color: "FFFFFF" },
    { name: "API Validation", slug: "apivalidation", color: "10B981" }
  ];

  const track2: Skill[] = [
    { name: "PostgreSQL", slug: "postgresql", color: "4169E1" },
    { name: "MySQL", slug: "mysql", color: "4479A1" },
    { name: "MongoDB", slug: "mongodb", color: "47A248" },
    { name: "Vector Databases", slug: "vectordb", color: "8B5CF6" },
    { name: "SQLite", slug: "sqlite", color: "003B57" },
    { name: "Docker", slug: "docker", color: "2496ED" },
    { name: "Git", slug: "git", color: "F05033" }
  ];

  const track3: Skill[] = [
    { name: "GitHub", slug: "github", color: "FFFFFF" },
    { name: "Data Structures & Algorithms", slug: "dsa", color: "EC4899" },
    { name: "Object-Oriented Programming", slug: "oop", color: "3B82F6" },
    { name: "DBMS", slug: "dbms", color: "F59E0B" },
    { name: "System Design", slug: "systemdesign", color: "6366F1" },
    { name: "Scikit-learn", slug: "scikitlearn", color: "F7931E" }
  ];

  const track4: Skill[] = [
    { name: "Machine Learning", slug: "ml", color: "A855F7" },
    { name: "Deep Learning", slug: "deeplearning", color: "EC4899" },
    { name: "NLP", slug: "nlp", color: "06B6D4" },
    { name: "RAG", slug: "rag", color: "10B981" },
    { name: "Pandas", slug: "pandas", color: "150458" },
    { name: "NumPy", slug: "numpy", color: "013243" },
    { name: "Matplotlib", slug: "matplotlib", color: "11557C" }
  ];

  // Helper to double the track items for seamless loop
  const prepareTrack = (skills: Skill[]) => [...skills, ...skills];

  // Helper to get inline SVGs or CDN logos
  const renderSkillIcon = (skill: Skill) => {
    switch (skill.slug) {
      case 'sql':
      case 'dbms':
        return <Database className="w-4.5 h-4.5 shrink-0 text-amber-400" size={18} />;
      case 'restapis':
        return <Network className="w-4.5 h-4.5 shrink-0 text-teal-400" size={18} />;
      case 'crud':
        return <Server className="w-4.5 h-4.5 shrink-0 text-indigo-400" size={18} />;
      case 'json':
        return <FileJson className="w-4.5 h-4.5 shrink-0 text-zinc-300" size={18} />;
      case 'apivalidation':
        return <CheckCircle2 className="w-4.5 h-4.5 shrink-0 text-emerald-400" size={18} />;
      case 'vectordb':
        return <Layers className="w-4.5 h-4.5 shrink-0 text-purple-400" size={18} />;
      case 'dsa':
        return <Binary className="w-4.5 h-4.5 shrink-0 text-pink-400" size={18} />;
      case 'oop':
        return <Boxes className="w-4.5 h-4.5 shrink-0 text-blue-400" size={18} />;
      case 'systemdesign':
        return <Cpu className="w-4.5 h-4.5 shrink-0 text-indigo-400" size={18} />;
      case 'ml':
      case 'deeplearning':
        return <Brain className="w-4.5 h-4.5 shrink-0 text-purple-400" size={18} />;
      case 'nlp':
        return <Network className="w-4.5 h-4.5 shrink-0 text-cyan-400" size={18} />;
      case 'rag':
        return <GitBranch className="w-4.5 h-4.5 shrink-0 text-emerald-400" size={18} />;
      case 'matplotlib':
        return (
          <svg className="w-4.5 h-4.5 shrink-0" fill="none" stroke="#11557C" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
            <title>Matplotlib</title>
            <path d="M3 3v18h18" stroke="#FFFFFF" strokeWidth="2" />
            <path d="M18.7 8l-5.1 5.2-2.8-2.7L7 14.3" />
            <circle cx="7" cy="14.3" r="1.5" fill="#11557C" stroke="none" />
            <circle cx="10.8" cy="10.5" r="1.5" fill="#11557C" stroke="none" />
            <circle cx="13.6" cy="13.2" r="1.5" fill="#11557C" stroke="none" />
            <circle cx="18.7" cy="8" r="1.5" fill="#11557C" stroke="none" />
          </svg>
        );
      default:
        return (
          <img 
            src={`https://cdn.simpleicons.org/${skill.slug}/${skill.color}`} 
            alt={skill.name} 
            className="w-4.5 h-4.5 object-contain shrink-0"
            loading="lazy"
          />
        );
    }
  };

  return (
    <section id="skills" className="relative py-20 overflow-hidden bg-[#0a0a0f] border-t border-brand-border/40">
      {/* Premium glowing background streak/diagonal blur matching the purple theme */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] bg-gradient-to-tr from-purple-800/15 via-violet-600/10 to-transparent blur-[120px] -rotate-12 pointer-events-none"></div>
      
      {/* Fade overlay gradients to blur out the edges of the marquee scrolling */}
      <div className="absolute inset-y-0 left-0 w-24 md:w-36 bg-gradient-to-r from-[#0a0a0f] to-transparent pointer-events-none z-10"></div>
      <div className="absolute inset-y-0 right-0 w-24 md:w-36 bg-gradient-to-l from-[#0a0a0f] to-transparent pointer-events-none z-10"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Title Section */}
        <div className="text-center mb-16">
          <h2 className="font-heading font-extrabold text-3xl md:text-5xl text-white tracking-wide uppercase">
            My Skills
          </h2>
          <div className="h-1 w-16 bg-purple-500 mx-auto mt-4 rounded-full shadow-lg shadow-purple-500/50"></div>
        </div>

        {/* Marquee Rows */}
        <div className="space-y-6 md:space-y-8">
          {/* Row 1 - Left */}
          <div className="flex overflow-hidden select-none gap-4 py-1">
            <div className="animate-marquee flex gap-4 shrink-0">
              {prepareTrack(track1).map((skill, idx) => (
                <div 
                  key={`t1-${idx}`} 
                  className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-zinc-900/50 border border-zinc-800/60 hover:border-purple-500/40 hover:bg-zinc-900/80 transition-all duration-300 shadow-sm cursor-default"
                >
                  {renderSkillIcon(skill)}
                  <span className="text-xs md:text-sm font-semibold text-zinc-300">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Row 2 - Right */}
          <div className="flex overflow-hidden select-none gap-4 py-1">
            <div className="animate-marquee-reverse flex gap-4 shrink-0">
              {prepareTrack(track2).map((skill, idx) => (
                <div 
                  key={`t2-${idx}`} 
                  className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-zinc-900/50 border border-zinc-800/60 hover:border-purple-500/40 hover:bg-zinc-900/80 transition-all duration-300 shadow-sm cursor-default"
                >
                  {renderSkillIcon(skill)}
                  <span className="text-xs md:text-sm font-semibold text-zinc-300">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Row 3 - Left */}
          <div className="flex overflow-hidden select-none gap-4 py-1">
            <div className="animate-marquee flex gap-4 shrink-0">
              {prepareTrack(track3).map((skill, idx) => (
                <div 
                  key={`t3-${idx}`} 
                  className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-zinc-900/50 border border-zinc-800/60 hover:border-purple-500/40 hover:bg-zinc-900/80 transition-all duration-300 shadow-sm cursor-default"
                >
                  {renderSkillIcon(skill)}
                  <span className="text-xs md:text-sm font-semibold text-zinc-300">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Row 4 - Right */}
          <div className="flex overflow-hidden select-none gap-4 py-1">
            <div className="animate-marquee-reverse flex gap-4 shrink-0">
              {prepareTrack(track4).map((skill, idx) => (
                <div 
                  key={`t4-${idx}`} 
                  className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-zinc-900/50 border border-zinc-800/60 hover:border-purple-500/40 hover:bg-zinc-900/80 transition-all duration-300 shadow-sm cursor-default"
                >
                  {renderSkillIcon(skill)}
                  <span className="text-xs md:text-sm font-semibold text-zinc-300">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Skills;
