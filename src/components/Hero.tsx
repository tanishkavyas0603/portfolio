import React, { useEffect, useState } from 'react';
import { m } from 'framer-motion';
import { FileText, ArrowRight, Mail } from 'lucide-react';
import { GithubIcon as Github, LinkedinIcon as Linkedin, LeetcodeIcon as Leetcode } from './BrandIcons';
import { portfolioData } from '../data/portfolioData';
import { ChromeGrid } from '../data/chrome-grid';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
  },
};


export const Hero: React.FC = () => {
  const heroRef = React.useRef<HTMLDivElement>(null);
  const [isHeroVisible, setIsHeroVisible] = React.useState(true);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsHeroVisible(entry.isIntersecting);
      },
      { threshold: 0.05 }
    );

    observer.observe(hero);

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;

    const finePointer = window.matchMedia('(pointer: fine)').matches;
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced || !finePointer) return;

    const chars = hero.querySelectorAll('.kinetic-char');
    if (!chars.length) return;

    let raf: number | null = null;
    let mx = 0;
    let my = 0;
    const RADIUS = 220;

    const update = () => {
      raf = null;
      chars.forEach((node) => {
        const ch = node as HTMLElement;
        const r = ch.getBoundingClientRect();
        const charCenterX = r.left + r.width / 2;
        const charCenterY = r.top + r.height / 2;
        const d = Math.hypot(mx - charCenterX, my - charCenterY);
        const t = Math.max(0, 1 - d / RADIUS);

        if (t > 0.01) {
          const wght = (850 - 330 * t).toFixed(0);
          const wdth = (125 - 45 * t).toFixed(1);
          ch.style.fontVariationSettings = `'wght' ${wght}, 'wdth' ${wdth}`;
        } else {
          ch.style.fontVariationSettings = '';
        }
      });
    };

    const handlePointerMove = (e: PointerEvent) => {
      mx = e.clientX;
      my = e.clientY;
      if (raf === null) {
        raf = requestAnimationFrame(update);
      }
    };

    const handlePointerLeave = () => {
      if (raf !== null) {
        cancelAnimationFrame(raf);
        raf = null;
      }
      chars.forEach((node) => {
        (node as HTMLElement).style.fontVariationSettings = '';
      });
    };

    hero.addEventListener('pointermove', handlePointerMove);
    hero.addEventListener('pointerleave', handlePointerLeave);

    return () => {
      hero.removeEventListener('pointermove', handlePointerMove);
      hero.removeEventListener('pointerleave', handlePointerLeave);
      if (raf !== null) cancelAnimationFrame(raf);
    };
  }, []);

  const handleScrollToProjects = () => {
    const el = document.querySelector('#projects');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section ref={heroRef} className="min-h-screen flex items-center justify-center pt-28 pb-12 px-6 bg-[#0b0c10] overflow-hidden">
      <div className="absolute inset-0 h-full w-full z-0 bg-black">
        {isHeroVisible && <ChromeGrid />}
      </div>
      <div className="max-w-6xl w-full mx-auto relative z-10 pointer-events-none">
        <m.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid lg:grid-cols-12 gap-12 items-center"
        >
          {/* Left Column: Typography & Specification Grid */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4">
              {/* Monospace Subtitle */}
              <m.div
                variants={itemVariants}
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-purple-500/30 bg-purple-500/10 text-xs font-semibold text-purple-300 tracking-wider uppercase"
              >
                <span>Software & AI Engineering</span>
              </m.div>

              {/* Unique Heading */}
              <m.h1
                variants={itemVariants}
                className="font-mihir font-black tracking-tight text-white uppercase leading-[0.9] select-none"
                style={{
                  fontStretch: '125%',
                  fontWeight: 850,
                  fontSize: 'clamp(2rem, 7.5vw, 4.8rem)'
                }}
              >
                <span className="block overflow-hidden pb-1 -mb-1 whitespace-nowrap text-white">
                  {"TANISHKA".split('').map((char, i) => (
                    <span
                      key={i}
                      className="kinetic-char inline-block"
                      style={{
                        fontVariationSettings: "'wght' 850, 'wdth' 125",
                        willChange: 'font-variation-settings'
                      }}
                    >
                      {char}
                    </span>
                  ))}
                </span>
                <span className="block overflow-hidden pb-1 -mb-1 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-indigo-400 to-violet-400 whitespace-nowrap">
                  {"VYAS".split('').map((char, i) => (
                    <span
                      key={i}
                      className="kinetic-char inline-block"
                      style={{
                        fontVariationSettings: "'wght' 850, 'wdth' 125",
                        willChange: 'font-variation-settings'
                      }}
                    >
                      {char}
                    </span>
                  ))}
                </span>
              </m.h1>

              {/* Bio */}
              <m.p
                variants={itemVariants}
                className="text-sm md:text-base text-zinc-300 max-w-xl leading-relaxed font-sans"
              >
                {portfolioData.bio}
              </m.p>

              {/* Status Badge */}
              <m.div variants={itemVariants} className="pt-2">
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-green-500/30 bg-green-500/10 w-fit select-none">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                  </span>
                  <span className="text-green-400 text-xs font-medium">Open to Opportunities </span>
                </div>
              </m.div>
            </div>

            {/* Specifications Table */}
            <m.div variants={itemVariants} className="border-t border-zinc-800">
              <table className="w-full text-left font-sans text-xs md:text-sm text-zinc-200 border-collapse">
                <tbody>
                  {/* Row 1: Education */}
                  <tr className="border-b border-zinc-800/80">
                    <td className="py-3.5 align-top font-mono text-[11px] font-semibold tracking-wider text-zinc-400 uppercase w-28 sm:w-32 md:w-36 shrink-0">
                      Education
                    </td>
                    <td className="py-3.5 align-top">
                      <div className="text-white font-semibold text-xs md:text-sm leading-snug">
                        {portfolioData.education[0].degree} in {portfolioData.education[0].specialization}
                      </div>
                      <div className="text-xs text-zinc-400 mt-0.5 font-normal">
                        {portfolioData.education[0].institution}
                      </div>
                    </td>
                  </tr>

                  {/* Row 2: CGPA */}
                  <tr className="border-b border-zinc-800/80">
                    <td className="py-3.5 align-top font-mono text-[11px] font-semibold tracking-wider text-zinc-400 uppercase">
                      CGPA
                    </td>
                    <td className="py-3.5 align-top font-mono">
                      <span className="text-white font-bold text-xs md:text-sm">
                        {portfolioData.education[0].gpa}
                      </span>
                      <span className="text-zinc-400 text-xs"> / 10</span>
                    </td>
                  </tr>

                  {/* Row 3: Languages */}
                  <tr className="border-b border-zinc-800/80">
                    <td className="py-3.5 align-top font-mono text-[11px] font-semibold tracking-wider text-zinc-400 uppercase">
                      Languages
                    </td>
                    <td className="py-3.5 align-top font-mono text-xs font-semibold text-purple-300">
                      {portfolioData.skills.languages.slice(0, 5).join(' · ')}
                    </td>
                  </tr>

                  {/* Row 4: Location */}
                  <tr className="border-b border-zinc-800/80">
                    <td className="py-3.5 align-top font-mono text-[11px] font-semibold tracking-wider text-zinc-400 uppercase">
                      Location
                    </td>
                    <td className="py-3.5 align-top text-white font-medium text-xs md:text-sm">
                      {portfolioData.location}
                    </td>
                  </tr>
                </tbody>
              </table>
            </m.div>

            {/* CTAs */}
            <m.div variants={itemVariants} className="flex flex-col sm:flex-row items-center gap-4 pt-2 pointer-events-auto">
              <button
                onClick={handleScrollToProjects}
                className="w-full sm:w-auto px-6 py-3 rounded-lg bg-purple-600 hover:bg-purple-500 text-white font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-purple-600/30"
              >
                View My Work
                <ArrowRight size={14} />
              </button>
              
              <a
                href="#resume"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#resume')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="w-full sm:w-auto px-6 py-3 rounded-lg border border-zinc-700 bg-zinc-900/80 hover:bg-zinc-800 hover:border-purple-500/50 text-white font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer shadow-sm"
              >
                <FileText size={14} className="text-purple-400" />
                Preview Resume
              </a>

              {/* Social links */}
              <div className="flex flex-wrap items-center gap-3 pl-0 sm:pl-4 border-l border-none sm:border-zinc-800 text-zinc-400 pointer-events-auto">
                {/* GitHub */}
                <div className="relative group">
                  <a
                    href={portfolioData.socials.github}
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-purple-400 transition-colors block text-zinc-400"
                    aria-label="GitHub Profile"
                  >
                    <Github size={18} />
                  </a>
                  <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none shadow-md z-30">
                    GitHub
                  </span>
                </div>

                {/* LinkedIn */}
                <div className="relative group">
                  <a
                    href={portfolioData.socials.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-purple-400 transition-colors block text-zinc-400"
                    aria-label="LinkedIn Profile"
                  >
                    <Linkedin size={18} />
                  </a>
                  <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none shadow-md z-30">
                    LinkedIn
                  </span>
                </div>

                {/* LeetCode */}
                {portfolioData.socials.leetcode && (
                  <div className="relative group">
                    <a
                      href={portfolioData.socials.leetcode}
                      target="_blank"
                      rel="noreferrer"
                      className="hover:text-purple-400 transition-colors block text-zinc-400"
                      aria-label="LeetCode Profile"
                    >
                      <Leetcode size={18} />
                    </a>
                    <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none shadow-md z-30">
                      LeetCode
                    </span>
                  </div>
                )}



                {/* Email */}
                <div className="relative group">
                  <a
                    href={`mailto:${portfolioData.socials.email}`}
                    className="hover:text-purple-400 transition-colors block text-zinc-400"
                    aria-label="Send Email"
                  >
                    <Mail size={18} />
                  </a>
                  <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none shadow-md z-30">
                    Email
                  </span>
                </div>
              </div>
            </m.div>
          </div>

          {/* Right Column: Portrait Photo & Frame */}
          <m.div
            variants={itemVariants}
            className="lg:col-span-5 flex flex-col items-center justify-center pointer-events-auto min-w-0 w-full mt-2 lg:mt-0"
          >
            <div className="relative w-full max-w-[260px] sm:max-w-[280px] lg:max-w-[290px] aspect-[4/5] rounded-3xl p-1 bg-gradient-to-b from-purple-500/40 via-zinc-800 to-zinc-900/60 shadow-xl group transition-all duration-500 hover:shadow-[0_0_35px_rgba(192,132,252,0.25)] box-border">
              {/* Decorative ambient background glow */}
              <div className="absolute -inset-1 bg-gradient-to-tr from-purple-500/20 via-indigo-500/15 to-transparent rounded-3xl blur-xl opacity-60 group-hover:opacity-100 transition-opacity pointer-events-none" />

              {/* Main Card Frame */}
              <div className="relative w-full h-full rounded-[22px] bg-[#12131c]/95 overflow-hidden flex items-center justify-center border border-zinc-800/80 backdrop-blur-md box-border">
                {/* Real Photograph (rendered smoothly when supplied) */}
                <img
                  src={portfolioData.profileImage || "/images/Photo-TV.jpeg"}
                  alt="Tanishka Vyas"
                  className={`absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-500 z-10 ${imageLoaded && !imageError ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
                  onLoad={() => setImageLoaded(true)}
                  onError={() => setImageError(true)}
                />

                {/* Simplified Placeholder: ONLY centered TV monogram */}
                <div className="relative z-0 flex flex-col items-center justify-center p-6 text-center select-none">
                  <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full p-1 bg-gradient-to-tr from-purple-500 via-indigo-500/40 to-violet-600/30 shadow-xl shadow-purple-500/20 flex items-center justify-center transition-transform duration-500 group-hover:scale-105">
                    <div className="w-full h-full rounded-full bg-[#0b0c10]/95 border border-purple-500/30 flex items-center justify-center relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-b from-purple-500/10 to-transparent pointer-events-none" />
                      <span className="font-heading font-black text-3xl sm:text-4xl tracking-tight bg-gradient-to-br from-white via-purple-300 to-indigo-300 bg-clip-text text-transparent">
                        TV
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </m.div>
        </m.div>
      </div>
    </section>
  );
};
export default Hero;
