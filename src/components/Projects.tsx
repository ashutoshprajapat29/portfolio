import React, { useState, useMemo } from 'react';
import { 
  ExternalLink, 
  ArrowUpRight, 
  Info,
  TrendingUp
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import type { ProjectItem } from '../types/portfolio';
import { ProjectModal } from './ProjectModal';
import { GithubIcon } from './SocialIcons';
import { TiltCard } from './TiltCard';

export const Projects: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const categories = ['All', 'Full-Stack', 'AI & Data'];

  const filteredProjects = useMemo(() => {
    if (activeCategory === 'All') return portfolioData.projects;
    return portfolioData.projects.filter(p => p.category === activeCategory);
  }, [activeCategory]);

  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/30 text-teal-600 dark:text-teal-300 text-xs font-mono font-semibold uppercase tracking-wider">
            <span>03. Featured Work</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Selected Projects &amp; <span className="text-gradient">Software Builds</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base">
            Commercial client platforms, GenAI ecosystems, WhatsApp bots, and full-stack MERN web applications.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer ${
                activeCategory === cat
                  ? 'bg-gradient-to-r from-teal-500 to-indigo-600 text-white shadow-md shadow-teal-500/20 scale-105'
                  : 'bg-white dark:bg-slate-900/80 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white border border-slate-200 dark:border-white/10'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* 3D Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProjects.map((project) => (
            <TiltCard
              key={project.id}
              maxTilt={8}
              scale={1.02}
              className="h-full rounded-3xl"
            >
              <div className="glass-card-glow rounded-3xl h-full flex flex-col justify-between group overflow-hidden border border-slate-200/90 dark:border-white/10 shadow-lg hover:shadow-2xl hover:shadow-teal-500/10 transition-all">
                {/* Card Image Container */}
                <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-slate-900">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />

                  {/* Badges Overlay */}
                  <div className="absolute top-3 left-3 flex flex-wrap gap-1.5 z-10">
                    <span className="px-2.5 py-1 rounded-full text-[10px] font-mono font-semibold bg-slate-950/80 backdrop-blur-md text-teal-300 border border-teal-500/30">
                      {project.category}
                    </span>
                    {project.featured && (
                      <span className="px-2.5 py-1 rounded-full text-[10px] font-mono font-semibold bg-amber-500/20 backdrop-blur-md text-amber-300 border border-amber-500/30">
                        ★ Featured
                      </span>
                    )}
                  </div>

                  {project.metrics && (
                    <div className="absolute bottom-3 left-3 right-3 z-10">
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-[10px] font-medium bg-slate-950/90 backdrop-blur-md text-slate-200 border border-white/10 max-w-full truncate">
                        <TrendingUp className="w-3 h-3 text-teal-400 shrink-0" />
                        <span className="truncate">{project.metrics}</span>
                      </span>
                    </div>
                  )}
                </div>

                {/* Card Details Body */}
                <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <h3 
                      onClick={() => setSelectedProject(project)}
                      className="font-bold text-base sm:text-lg text-slate-900 dark:text-white group-hover:text-teal-400 transition-colors cursor-pointer flex items-center justify-between gap-2"
                    >
                      <span className="line-clamp-1">{project.title}</span>
                      <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity text-teal-400 shrink-0" />
                    </h3>
                    
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 line-clamp-2 leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {project.tags.slice(0, 4).map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 rounded-md text-[10px] font-mono bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-white/5"
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 4 && (
                      <span className="px-1.5 py-0.5 rounded-md text-[10px] font-mono bg-slate-100 dark:bg-slate-800 text-slate-400">
                        +{project.tags.length - 4}
                      </span>
                    )}
                  </div>

                  {/* Footer Buttons */}
                  <div className="pt-4 border-t border-slate-200 dark:border-white/10 flex items-center justify-between gap-2">
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-teal-600 dark:text-teal-400 hover:underline cursor-pointer"
                    >
                      <Info className="w-3.5 h-3.5" />
                      <span>Case Study</span>
                    </button>

                    <div className="flex items-center gap-2">
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="p-2 rounded-lg text-slate-500 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/10 transition-colors"
                          title="GitHub Repository"
                          aria-label="GitHub Repository"
                        >
                          <GithubIcon className="w-4 h-4" />
                        </a>
                      )}
                      {project.liveUrl && project.liveUrl !== '#' && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="p-2 rounded-lg text-slate-500 hover:text-teal-400 hover:bg-slate-100 dark:hover:bg-white/10 transition-colors"
                          title="Live Demo"
                          aria-label="Live Demo"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>

              </div>
            </TiltCard>
          ))}
        </div>

      </div>

      {/* Deep-Dive Project Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
