import React, { useState, useEffect } from 'react';
import { 
  ArrowRight, 
  Mail, 
  Terminal, 
  Sparkles, 
  MapPin, 
  ChevronDown,
  Code2,
  Cpu,
  Database
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import { ParticleCanvas } from './ParticleCanvas';
import { TiltCard } from './TiltCard';

const titles = [
  "Full Stack Web Developer",
  "MERN Stack Specialist",
  "GenAI & AI Agent Architect",
  "Freelance Web Developer",
  "3rd-Year CSE Undergrad @ LNCT"
];

interface HeroProps {
  openTerminal: () => void;
  darkMode?: boolean;
}

export const Hero: React.FC<HeroProps> = ({ openTerminal, darkMode = true }) => {
  const [titleIndex, setTitleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const { personal } = portfolioData;

  // Typewriter effect
  useEffect(() => {
    const currentFullText = titles[titleIndex];
    const typingSpeed = isDeleting ? 40 : 80;

    const timer = setTimeout(() => {
      if (!isDeleting && displayText === currentFullText) {
        // Pause at end
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && displayText === '') {
        setIsDeleting(false);
        setTitleIndex((prev) => (prev + 1) % titles.length);
      } else {
        setDisplayText(
          isDeleting
            ? currentFullText.substring(0, displayText.length - 1)
            : currentFullText.substring(0, displayText.length + 1)
        );
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, titleIndex]);

  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 overflow-hidden px-4 sm:px-6 lg:px-8">
      {/* 3D Particle Constellation Background Canvas */}
      <ParticleCanvas darkMode={darkMode} />

      {/* Ambient glowing background orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[550px] h-[350px] sm:h-[550px] bg-teal-500/15 rounded-full blur-[100px] sm:blur-[140px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 left-1/4 w-[280px] sm:w-[400px] h-[280px] sm:h-[400px] bg-indigo-600/15 rounded-full blur-[90px] sm:blur-[120px] pointer-events-none -z-10" />
      <div className="absolute top-1/2 right-1/4 w-[250px] sm:w-[350px] h-[250px] sm:h-[350px] bg-purple-600/10 rounded-full blur-[80px] sm:blur-[100px] pointer-events-none -z-10" />

      {/* Grid Pattern overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 dark:opacity-25 pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto w-full">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-10 sm:gap-12 lg:gap-8">
          
          {/* Left Column: Bio & CTAs */}
          <div className="flex-1 text-center lg:text-left space-y-5 sm:space-y-6 max-w-2xl w-full">
            {/* Availability Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-500/10 dark:bg-teal-500/15 border border-teal-500/30 text-teal-600 dark:text-teal-300 text-xs font-semibold tracking-wide shadow-sm max-w-full truncate">
              <span className="relative flex h-2 w-2 shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-500"></span>
              </span>
              <span className="truncate">{personal.availabilityBadge}</span>
            </div>

            {/* Main Greeting & Headline */}
            <div className="space-y-1.5 sm:space-y-2">
              <p className="text-xs sm:text-sm font-mono font-medium text-slate-500 dark:text-slate-400">
                Hi there, my name is
              </p>
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white">
                {personal.name}
              </h1>
              <div className="h-10 sm:h-14 flex items-center justify-center lg:justify-start">
                <span className="text-lg sm:text-2xl lg:text-3xl font-bold font-mono text-gradient">
                  {displayText}
                </span>
                <span className="w-1 h-5 sm:h-8 bg-teal-400 ml-1.5 animate-pulse inline-block" />
              </div>
            </div>

            {/* Subtitle / Pitch */}
            <p className="text-sm sm:text-base lg:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-xl mx-auto lg:mx-0">
              {personal.subtitle}
            </p>

            {/* Location & Quick Info */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4 text-xs font-medium text-slate-500 dark:text-slate-400">
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-teal-400" />
                {personal.location}
              </span>
              <span className="hidden sm:inline">•</span>
              <span className="flex items-center gap-1">
                <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
                LNCT Bhopal (3rd Year)
              </span>
            </div>

            {/* Action Buttons: Responsive Layout */}
            <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center justify-center lg:justify-start gap-3 pt-2">
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-teal-500 via-teal-600 to-indigo-600 hover:from-teal-400 hover:to-indigo-500 shadow-lg shadow-teal-500/25 transition-all hover:scale-105 active:scale-95 cursor-pointer"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-xs sm:text-sm font-semibold text-slate-800 dark:text-white bg-slate-100 dark:bg-slate-800/80 hover:bg-slate-200 dark:hover:bg-slate-700/80 border border-slate-300 dark:border-white/10 transition-all hover:scale-105 active:scale-95 cursor-pointer"
              >
                <span>Get In Touch</span>
                <Mail className="w-4 h-4 text-teal-400" />
              </a>

              <button
                onClick={openTerminal}
                className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-xs sm:text-sm font-mono text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-800/50 hover:bg-slate-200 dark:hover:bg-slate-700/50 border border-slate-300 dark:border-white/10 transition-colors cursor-pointer"
                title="Launch CLI Mode"
              >
                <Terminal className="w-4 h-4 text-teal-400" />
                <span>CLI</span>
                <kbd className="hidden sm:inline px-1 py-0.5 text-[9px] bg-slate-200 dark:bg-slate-700 rounded text-slate-500 dark:text-slate-400">⌘K</kbd>
              </button>
            </div>

            {/* Social Links Bar */}
            <div className="flex items-center justify-center lg:justify-start gap-3 pt-2 sm:pt-4">
              <span className="text-xs font-mono text-slate-400">Connect:</span>
              <a
                href={personal.github}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl text-slate-600 dark:text-slate-400 hover:text-teal-400 hover:bg-slate-100 dark:hover:bg-white/5 border border-slate-200 dark:border-white/5 transition-all hover:scale-110"
                aria-label="GitHub"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl text-slate-600 dark:text-slate-400 hover:text-teal-400 hover:bg-slate-100 dark:hover:bg-white/5 border border-slate-200 dark:border-white/5 transition-all hover:scale-110"
                aria-label="LinkedIn"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href="#contact"
                className="p-2.5 rounded-xl text-slate-600 dark:text-slate-400 hover:text-teal-400 hover:bg-slate-100 dark:hover:bg-white/5 border border-slate-200 dark:border-white/5 transition-all hover:scale-110"
                aria-label="Send Message"
                title="Send Message"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right Column: 3D Interactive Profile Card with 3D Floating Tech Badges */}
          <div className="relative group flex justify-center w-full sm:w-auto">
            {/* Outer 3D Glow Ring */}
            <div className="absolute -inset-2 bg-gradient-to-r from-teal-500 via-indigo-500 to-purple-600 rounded-3xl blur-xl opacity-30 group-hover:opacity-70 transition duration-700 animate-pulse-slow pointer-events-none" />

            {/* Floating 3D Tech Badges in 3D Space */}
            <div className="hidden sm:flex absolute -top-4 -left-6 z-20 items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-900/90 backdrop-blur-md border border-teal-500/40 text-teal-300 text-[11px] font-mono shadow-xl animate-float" style={{ animationDelay: '0s' }}>
              <Code2 className="w-3.5 h-3.5 text-teal-400" />
              <span>React &amp; Node</span>
            </div>

            <div className="hidden sm:flex absolute top-1/2 -right-8 z-20 items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-900/90 backdrop-blur-md border border-indigo-500/40 text-indigo-300 text-[11px] font-mono shadow-xl animate-float" style={{ animationDelay: '1.5s' }}>
              <Cpu className="w-3.5 h-3.5 text-indigo-400" />
              <span>Gemini AI</span>
            </div>

            <div className="hidden sm:flex absolute -bottom-3 -left-4 z-20 items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-900/90 backdrop-blur-md border border-purple-500/40 text-purple-300 text-[11px] font-mono shadow-xl animate-float" style={{ animationDelay: '3s' }}>
              <Database className="w-3.5 h-3.5 text-purple-400" />
              <span>MongoDB</span>
            </div>

            {/* 3D Perspective Tilt Card */}
            <TiltCard 
              maxTilt={10} 
              scale={1.03} 
              className="w-full max-w-[290px] sm:w-80 rounded-2xl glass p-4 sm:p-5 space-y-3 sm:space-y-4 shadow-2xl"
            >
              {/* Profile Avatar with status */}
              <div className="relative mx-auto w-36 h-36 sm:w-48 sm:h-48 rounded-2xl overflow-hidden border-2 border-teal-500/40 shadow-inner bg-slate-900">
                <img 
                  src={personal.avatarUrl} 
                  alt={personal.name}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute bottom-2 right-2 bg-slate-900/90 backdrop-blur-md px-2 py-0.5 rounded-md border border-teal-500/40 text-[9px] sm:text-[10px] font-mono text-teal-300">
                  dev:online
                </div>
              </div>

              {/* Mini Card Details */}
              <div className="text-center space-y-0.5">
                <h3 className="font-bold text-slate-900 dark:text-white text-sm sm:text-base">
                  {personal.name}
                </h3>
                <p className="text-[11px] sm:text-xs font-mono text-teal-600 dark:text-teal-400">
                  {personal.title}
                </p>
              </div>

              {/* Code Snippet Tag Box */}
              <div className="p-2.5 rounded-xl bg-slate-950/80 border border-white/5 font-mono text-[10px] sm:text-[11px] text-slate-300 space-y-1">
                <div className="flex items-center gap-1.5 text-slate-500 text-[9px] pb-1 border-b border-white/5">
                  <span className="w-2 h-2 rounded-full bg-rose-500/80" />
                  <span className="w-2 h-2 rounded-full bg-amber-500/80" />
                  <span className="w-2 h-2 rounded-full bg-teal-500/80" />
                  <span className="ml-1 text-slate-400">tech.stack.ts</span>
                </div>
                <p className="text-teal-300"><span className="text-purple-400">const</span> stack = [</p>
                <p className="pl-3 text-slate-300">"React.js", "Node.js",</p>
                <p className="pl-3 text-slate-300">"MongoDB", "Express.js",</p>
                <p className="pl-3 text-slate-300">"Gemini AI", "Java"</p>
                <p className="text-teal-300">];</p>
              </div>

              {/* Quick stats badge */}
              <div className="grid grid-cols-2 gap-2 pt-1">
                <div className="px-2.5 py-1.5 sm:px-3 sm:py-2 rounded-xl bg-slate-100/80 dark:bg-slate-800/60 border border-slate-200 dark:border-white/5 text-center">
                  <div className="text-base sm:text-lg font-extrabold text-teal-500 dark:text-teal-400">5+</div>
                  <div className="text-[9px] sm:text-[10px] text-slate-500 dark:text-slate-400 font-medium">Projects Shipped</div>
                </div>
                <div className="px-2.5 py-1.5 sm:px-3 sm:py-2 rounded-xl bg-slate-100/80 dark:bg-slate-800/60 border border-slate-200 dark:border-white/5 text-center">
                  <div className="text-base sm:text-lg font-extrabold text-indigo-500 dark:text-indigo-400">7.38</div>
                  <div className="text-[9px] sm:text-[10px] text-slate-500 dark:text-slate-400 font-medium">B.Tech CGPA</div>
                </div>
              </div>
            </TiltCard>
          </div>

        </div>
      </div>

      {/* Scroll Down Indicator */}
      <a 
        href="#about"
        className="absolute bottom-3 left-1/2 -translate-x-1/2 text-slate-400 hover:text-teal-400 transition-colors flex flex-col items-center gap-1 animate-bounce cursor-pointer"
        aria-label="Scroll to About Section"
      >
        <span className="text-[9px] sm:text-[10px] font-mono tracking-widest uppercase text-slate-500">Scroll</span>
        <ChevronDown className="w-3.5 h-3.5" />
      </a>
    </section>
  );
};
