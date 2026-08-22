import React from 'react';
import { Code2, ArrowUp, Terminal } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

interface FooterProps {
  openTerminal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ openTerminal }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-slate-200 dark:border-white/10 bg-white/50 dark:bg-slate-950/60 backdrop-blur-md py-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-200 dark:border-white/5">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-teal-500 to-indigo-600 flex items-center justify-center text-white shadow-md">
              <Code2 className="w-4 h-4" />
            </div>
            <div>
              <span className="font-mono font-bold text-slate-900 dark:text-white text-sm">
                {portfolioData.personal.name}
              </span>
              <p className="text-[11px] text-slate-500 dark:text-slate-400">
                {portfolioData.personal.title}
              </p>
            </div>
          </div>

          {/* Quick links */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs font-medium text-slate-600 dark:text-slate-400">
            <a href="#about" className="hover:text-teal-400 transition-colors">About</a>
            <a href="#skills" className="hover:text-teal-400 transition-colors">Skills</a>
            <a href="#projects" className="hover:text-teal-400 transition-colors">Projects</a>
            <a href="#experience" className="hover:text-teal-400 transition-colors">Experience</a>
            <a href="#contact" className="hover:text-teal-400 transition-colors">Contact</a>
            <button 
              onClick={openTerminal} 
              className="flex items-center gap-1 text-teal-500 dark:text-teal-400 font-mono hover:underline"
            >
              <Terminal className="w-3.5 h-3.5" />
              <span>CLI Mode</span>
            </button>
          </div>

          {/* Back to top button */}
          <button
            onClick={scrollToTop}
            className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:text-teal-400 hover:scale-105 border border-slate-200 dark:border-white/5 transition-all shadow-sm"
            aria-label="Back to Top"
            title="Scroll to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

        {/* Bottom Sub-footer */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 dark:text-slate-400">
          <p>© {new Date().getFullYear()} {portfolioData.personal.name}. All rights reserved.</p>
          <p className="flex items-center gap-1 font-mono text-[11px]">
            <span>Designed &amp; Built with React, TypeScript &amp; Tailwind CSS</span>
          </p>
        </div>

      </div>
    </footer>
  );
};
