import React, { useState, useMemo } from 'react';
import { 
  Code2, 
  Server, 
  Cloud, 
  Terminal, 
  Search
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import type { SkillItem } from '../types/portfolio';

const categoryIcons = {
  Frontend: <Code2 className="w-4 h-4" />,
  Backend: <Server className="w-4 h-4" />,
  'Cloud & Databases': <Cloud className="w-4 h-4" />,
  'AI & Tools': <Terminal className="w-4 h-4" />,
};

export const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = ['All', 'Frontend', 'Backend', 'Cloud & Databases', 'AI & Tools'];

  const filteredSkills = useMemo(() => {
    return portfolioData.skills.filter((skill) => {
      const matchesCategory = activeCategory === 'All' || skill.category === activeCategory;
      const matchesSearch = 
        skill.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        skill.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <section id="skills" className="py-20 relative bg-slate-100/50 dark:bg-slate-950/40 border-y border-slate-200/50 dark:border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/30 text-teal-600 dark:text-teal-300 text-xs font-mono font-semibold uppercase tracking-wider">
            <span>02. Technical Arsenal</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Skills &amp; Technologies I Work With
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base">
            From interactive client interfaces to high-availability server infrastructures and AI workflows.
          </p>
        </div>

        {/* Filter Bar & Search Input */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10">
          
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-1.5 p-1.5 rounded-2xl bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-white/10 shadow-sm w-full md:w-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all ${
                  activeCategory === cat
                    ? 'bg-gradient-to-r from-teal-500 to-indigo-600 text-white shadow-md shadow-teal-500/20'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/5'
                }`}
              >
                {cat !== 'All' && categoryIcons[cat as keyof typeof categoryIcons]}
                <span>{cat}</span>
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-64">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search skill or tag..."
              className="w-full pl-10 pr-4 py-2 text-xs sm:text-sm rounded-xl bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-teal-500 transition-colors shadow-sm"
            />
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-200"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {filteredSkills.map((skill: SkillItem) => (
            <div
              key={skill.name}
              className="glass-card rounded-2xl p-5 space-y-3 group hover:shadow-xl hover:shadow-teal-500/10 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 rounded-xl bg-teal-500/10 dark:bg-teal-500/10 text-teal-500 dark:text-teal-400 border border-teal-500/20 group-hover:scale-110 transition-transform">
                    {categoryIcons[skill.category] || <Code2 className="w-4 h-4" />}
                  </div>
                  <div>
                    <h3 className="font-bold text-sm text-slate-900 dark:text-white group-hover:text-teal-400 transition-colors">
                      {skill.name}
                    </h3>
                    <span className="text-[11px] font-mono text-slate-400">
                      {skill.category}
                    </span>
                  </div>
                </div>
                <span className="text-xs font-mono font-bold text-teal-600 dark:text-teal-400">
                  {skill.level}%
                </span>
              </div>

              {/* Progress bar */}
              <div className="w-full bg-slate-200 dark:bg-slate-800 rounded-full h-1.5 overflow-hidden">
                <div 
                  className="bg-gradient-to-r from-teal-500 to-indigo-500 h-full rounded-full transition-all duration-700 ease-out"
                  style={{ width: `${skill.level}%` }}
                />
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 pt-1">
                {skill.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 rounded-md text-[10px] font-mono bg-slate-100 dark:bg-slate-800/80 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-white/5"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Empty state if nothing matches search */}
        {filteredSkills.length === 0 && (
          <div className="text-center py-16 space-y-3">
            <p className="text-slate-400 text-sm">No skills found matching "{searchQuery}".</p>
            <button 
              onClick={() => { setSearchQuery(''); setActiveCategory('All'); }}
              className="text-xs font-mono text-teal-400 hover:underline"
            >
              Reset filters
            </button>
          </div>
        )}

      </div>
    </section>
  );
};
