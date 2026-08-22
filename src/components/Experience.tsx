import React, { useState } from 'react';
import { 
  Briefcase, 
  GraduationCap, 
  Trophy, 
  Award, 
  Calendar, 
  MapPin, 
  ExternalLink,
  ShieldCheck,
  CheckCircle2
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const Experience: React.FC = () => {
  const [filterType, setFilterType] = useState<string>('all');
  const { timeline, certifications } = portfolioData;

  const filteredTimeline = timeline.filter(item => {
    if (filterType === 'all') return true;
    if (filterType === 'experience') return item.type === 'experience';
    if (filterType === 'education') return item.type === 'education';
    if (filterType === 'hackathon') return item.type === 'hackathon' || item.type === 'achievement';
    return true;
  });

  const getTimelineIcon = (type: string) => {
    switch (type) {
      case 'experience':
        return <Briefcase className="w-4 h-4 text-teal-400" />;
      case 'education':
        return <GraduationCap className="w-4 h-4 text-purple-400" />;
      case 'hackathon':
        return <Trophy className="w-4 h-4 text-amber-400" />;
      default:
        return <Award className="w-4 h-4 text-indigo-400" />;
    }
  };

  return (
    <section id="experience" className="py-20 relative bg-slate-100/50 dark:bg-slate-950/40 border-y border-slate-200/50 dark:border-white/5">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/30 text-teal-600 dark:text-teal-300 text-xs font-mono font-semibold uppercase tracking-wider">
            <span>04. Journey &amp; Milestones</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Experience, Education &amp; Achievements
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base">
            Internships, collegiate hackathons, academic scholarship, and technical leadership.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {[
            { label: 'All Milestones', key: 'all' },
            { label: 'Internships & Roles', key: 'experience' },
            { label: 'Education & Honors', key: 'education' },
            { label: 'Hackathons & Awards', key: 'hackathon' },
          ].map((tab) => (
            <button
              key={tab.key}
              onClick={() => setFilterType(tab.key)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all ${
                filterType === tab.key
                  ? 'bg-gradient-to-r from-teal-500 to-indigo-600 text-white shadow-md shadow-teal-500/20'
                  : 'bg-white dark:bg-slate-900/80 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white border border-slate-200 dark:border-white/10'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Vertical Timeline */}
        <div className="relative border-l-2 border-slate-200 dark:border-slate-800 ml-4 sm:ml-8 space-y-10 pl-6 sm:pl-10 py-2">
          {filteredTimeline.map((item) => (
            <div key={item.id} className="relative group">
              {/* Node Icon on the vertical line */}
              <div className="absolute -left-[35px] sm:-left-[51px] top-1 p-2 sm:p-2.5 rounded-xl bg-white dark:bg-slate-900 border-2 border-teal-500/60 shadow-lg shadow-teal-500/10 group-hover:scale-110 transition-transform">
                {getTimelineIcon(item.type)}
              </div>

              {/* Timeline Card */}
              <div className="glass-card rounded-2xl p-6 space-y-4 hover:border-teal-500/50 transition-all">
                {/* Header info */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-teal-400 transition-colors">
                        {item.title}
                      </h3>
                      {item.badge && (
                        <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-semibold bg-teal-500/20 text-teal-400 border border-teal-500/30">
                          {item.badge}
                        </span>
                      )}
                    </div>
                    <p className="text-sm font-semibold text-slate-700 dark:text-slate-300 flex items-center gap-1.5 mt-0.5">
                      <span>{item.organization}</span>
                      <span className="text-slate-400">•</span>
                      <span className="text-xs font-normal text-slate-500 dark:text-slate-400 flex items-center gap-1">
                        <MapPin className="w-3 h-3 text-slate-400" />
                        {item.location}
                      </span>
                    </p>
                  </div>

                  <div className="flex items-center gap-1 text-xs font-mono text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800/80 px-2.5 py-1 rounded-md w-fit border border-slate-200 dark:border-white/5">
                    <Calendar className="w-3.5 h-3.5 text-teal-400" />
                    <span>{item.period}</span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {item.description}
                </p>

                {/* Bulleted Achievements */}
                <div className="space-y-2 pt-1">
                  {item.achievements.map((ach, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-teal-400 shrink-0 mt-0.5" />
                      <span>{ach}</span>
                    </div>
                  ))}
                </div>

                {/* Tech chips */}
                {item.skills.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 pt-2 border-t border-slate-200 dark:border-white/5">
                    {item.skills.map((s) => (
                      <span
                        key={s}
                        className="px-2 py-0.5 rounded text-[10px] font-mono bg-slate-100 dark:bg-slate-800/60 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-white/5"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Certifications Section */}
        <div className="mt-20 space-y-6">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-teal-400" />
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">
              Licenses &amp; Professional Certifications
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {certifications.map((cert, idx) => (
              <div 
                key={idx}
                className="glass-card rounded-2xl p-5 flex flex-col justify-between space-y-3 group hover:border-teal-500/50 transition-all"
              >
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono text-teal-400 font-semibold bg-teal-500/10 px-2 py-0.5 rounded border border-teal-500/20">
                      {cert.issuer}
                    </span>
                    <span className="text-[10px] font-mono text-slate-400">{cert.issueDate}</span>
                  </div>
                  <h4 className="font-bold text-sm text-slate-900 dark:text-white group-hover:text-teal-400 transition-colors">
                    {cert.name}
                  </h4>
                </div>

                {cert.credentialUrl && (
                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-semibold text-teal-600 dark:text-teal-400 hover:underline pt-2 border-t border-slate-200 dark:border-white/5"
                  >
                    <span>Verify Credential</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
