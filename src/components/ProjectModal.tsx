import React, { useEffect } from 'react';
import { 
  X, 
  ExternalLink, 
  CheckCircle2, 
  Layers, 
  Sparkles, 
  TrendingUp
} from 'lucide-react';
import type { ProjectItem } from '../types/portfolio';
import { GithubIcon } from './SocialIcons';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-md animate-fadeIn">
      <div 
        className="relative w-full max-w-3xl rounded-3xl bg-slate-900 border border-slate-700/80 shadow-2xl overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-slate-950/80 text-slate-400 hover:text-white border border-white/10 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Hero Image / Banner */}
        <div className="relative h-60 sm:h-72 w-full overflow-hidden bg-slate-950">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />
          
          <div className="absolute bottom-4 left-6 right-6 flex flex-wrap items-center justify-between gap-2">
            <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-teal-500/20 text-teal-300 border border-teal-500/30">
              {project.category}
            </span>
            {project.metrics && (
              <span className="flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                <TrendingUp className="w-3.5 h-3.5" />
                {project.metrics}
              </span>
            )}
          </div>
        </div>

        {/* Modal Content Body */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[65vh] overflow-y-auto">
          {/* Header */}
          <div className="space-y-2">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              {project.title}
            </h3>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              {project.fullDescription}
            </p>
          </div>

          {/* Action links */}
          <div className="flex flex-wrap items-center gap-3 pt-1">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-teal-500 to-indigo-600 hover:from-teal-400 hover:to-indigo-500 shadow-md shadow-teal-500/20 transition-all hover:scale-105"
              >
                <span>Live Demo</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-slate-200 bg-slate-800 hover:bg-slate-700 border border-white/10 transition-colors"
              >
                <GithubIcon className="w-4 h-4" />
                <span>Source Code</span>
              </a>
            )}
          </div>

          {/* Key Architectural Highlights */}
          <div className="space-y-3 pt-2">
            <h4 className="text-sm font-bold uppercase tracking-wider text-slate-400 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-teal-400" />
              <span>Key Architectural Highlights &amp; Impact</span>
            </h4>
            <div className="space-y-2.5">
              {project.highlights.map((highlight, i) => (
                <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                  <span>{highlight}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Detailed Tech Stack Breakdown */}
          <div className="space-y-3 pt-2">
            <h4 className="text-sm font-bold uppercase tracking-wider text-slate-400 flex items-center gap-2">
              <Layers className="w-4 h-4 text-indigo-400" />
              <span>Full Tech Stack Breakdown</span>
            </h4>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {project.techStack.frontend && (
                <div className="p-3 rounded-xl bg-slate-800/60 border border-white/5 space-y-1.5">
                  <span className="text-[11px] font-mono text-teal-300 font-semibold uppercase">Frontend</span>
                  <div className="flex flex-wrap gap-1.5">
                    {project.techStack.frontend.map(t => (
                      <span key={t} className="px-2 py-0.5 rounded text-[11px] bg-slate-700 text-slate-200">{t}</span>
                    ))}
                  </div>
                </div>
              )}
              {project.techStack.backend && (
                <div className="p-3 rounded-xl bg-slate-800/60 border border-white/5 space-y-1.5">
                  <span className="text-[11px] font-mono text-indigo-300 font-semibold uppercase">Backend &amp; APIs</span>
                  <div className="flex flex-wrap gap-1.5">
                    {project.techStack.backend.map(t => (
                      <span key={t} className="px-2 py-0.5 rounded text-[11px] bg-slate-700 text-slate-200">{t}</span>
                    ))}
                  </div>
                </div>
              )}
              {project.techStack.database && (
                <div className="p-3 rounded-xl bg-slate-800/60 border border-white/5 space-y-1.5">
                  <span className="text-[11px] font-mono text-purple-300 font-semibold uppercase">Data &amp; Storage</span>
                  <div className="flex flex-wrap gap-1.5">
                    {project.techStack.database.map(t => (
                      <span key={t} className="px-2 py-0.5 rounded text-[11px] bg-slate-700 text-slate-200">{t}</span>
                    ))}
                  </div>
                </div>
              )}
              {project.techStack.devops && (
                <div className="p-3 rounded-xl bg-slate-800/60 border border-white/5 space-y-1.5">
                  <span className="text-[11px] font-mono text-pink-300 font-semibold uppercase">DevOps &amp; Infra</span>
                  <div className="flex flex-wrap gap-1.5">
                    {project.techStack.devops.map(t => (
                      <span key={t} className="px-2 py-0.5 rounded text-[11px] bg-slate-700 text-slate-200">{t}</span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
