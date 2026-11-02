import React from 'react';
import { Briefcase, Calendar, MapPin } from 'lucide-react';
import { m } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }
  }
};

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 px-6 border-t border-brand-border/40 bg-brand-bg relative overflow-hidden">
      <div className="max-w-5xl mx-auto relative z-10">
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-3xl md:text-5xl text-brand-primary tracking-tight">
            Work Experience
          </h2>
          <div className="h-1 w-12 bg-brand-accent mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Timeline container */}
        <div className="relative border-l border-zinc-200 dark:border-zinc-800 ml-4 md:ml-32 pl-8 space-y-12">
          {portfolioData.experience.map((exp, idx) => (
            <m.div
              key={idx}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={cardVariants}
              className="relative"
            >
              {/* Timeline marker / Node */}
              <span className="absolute -left-[45px] top-1.5 flex h-8 w-8 items-center justify-center rounded-full bg-brand-bg border-2 border-brand-accent text-brand-accent shadow-md dark:shadow-brand-accent/20 z-10">
                <Briefcase size={14} />
              </span>

              {/* Date Column for wide screens */}
              <div className="hidden md:block absolute -left-[160px] top-1.5 w-28 text-right">
                <span className="font-mono text-xs font-bold text-brand-text-muted flex items-center justify-end gap-1.5">
                  <Calendar size={12} className="text-brand-accent shrink-0" />
                  {exp.duration.split('–')[0]}
                </span>
                <span className="block font-mono text-[10px] text-zinc-500 mt-0.5">
                  to {exp.duration.split('–')[1] || exp.duration}
                </span>
              </div>

              {/* Experience Card */}
              <div className="group p-6 rounded-2xl bg-brand-card border border-brand-border/60 hover:border-brand-accent/40 shadow-md hover:shadow-xl dark:shadow-black/40 transition-all duration-300">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4">
                  <div>
                    <h3 className="font-heading font-bold text-lg md:text-xl text-brand-primary group-hover:text-brand-accent transition-colors">
                      {exp.role}
                    </h3>
                    <p className="font-sans font-semibold text-sm text-indigo-400 mt-0.5">
                      {exp.company}
                    </p>
                  </div>
                  <div className="flex flex-wrap items-center gap-3 text-xs text-brand-text-muted">
                    <span className="md:hidden font-mono flex items-center gap-1">
                      <Calendar size={12} className="text-brand-accent" />
                      {exp.duration}
                    </span>
                    <span className="font-sans flex items-center gap-1 bg-brand-border/40 px-2 py-0.5 rounded text-[10px] uppercase font-bold tracking-wider">
                      <MapPin size={10} className="text-zinc-500" />
                      {exp.location}
                    </span>
                  </div>
                </div>

                <ul className="space-y-3 font-sans text-sm text-brand-text-muted leading-relaxed">
                  {exp.points.map((pt, pIdx) => (
                    <li key={pIdx} className="flex items-start gap-2.5">
                      <span className="h-1.5 w-1.5 rounded-full bg-brand-accent mt-2 shrink-0"></span>
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </m.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
