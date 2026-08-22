import React from 'react';
import { 
  FolderGit2, 
  Trophy, 
  GitCommit, 
  GraduationCap, 
  Code2, 
  Cpu, 
  ShieldCheck, 
  Zap,
  CheckCircle2
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const iconMap: Record<string, React.ReactNode> = {
  FolderGit2: <FolderGit2 className="w-6 h-6 text-teal-400" />,
  Trophy: <Trophy className="w-6 h-6 text-amber-400" />,
  GitCommit: <GitCommit className="w-6 h-6 text-indigo-400" />,
  GraduationCap: <GraduationCap className="w-6 h-6 text-purple-400" />,
};

export const About: React.FC = () => {
  const { personal, stats } = portfolioData;

  const coreStrengths = [
    {
      icon: <Zap className="w-5 h-5 text-teal-400" />,
      title: "MERN Stack & RESTful APIs",
      description: "Hands-on experience architecting full-stack applications with React.js, Node.js, Express, and MongoDB."
    },
    {
      icon: <Cpu className="w-5 h-5 text-indigo-400" />,
      title: "GenAI & Autonomous Agents",
      description: "Proficient with Gemini Function Calling, dynamic tool execution, RAG, and real-time STT/TTS voice assistants."
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-purple-400" />,
      title: "Secure Auth & Data Isolation",
      description: "Practical implementation of Firebase Auth, Passport.js sessions, and optimized database indexing in Mongoose."
    },
    {
      icon: <Code2 className="w-5 h-5 text-pink-400" />,
      title: "Core Java & CS Fundamentals",
      description: "Solid grasp of Object-Oriented Programming (OOP), Data Structures & Algorithms, and Operating Systems principles."
    }
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/30 text-teal-600 dark:text-teal-300 text-xs font-mono font-semibold uppercase tracking-wider">
            <span>01. About Me</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Building with MERN Stack &amp; <span className="text-gradient">Generative AI</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base">
            Get to know my engineering background, technical passions, and project experience.
          </p>
        </div>

        {/* Narrative & Stats Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Bio Story (Left 7 Cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="glass-card rounded-2xl p-6 sm:p-8 space-y-4">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <span>Engineering Journey</span>
              </h3>
              {personal.fullBio.map((paragraph, idx) => (
                <p key={idx} className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
                  {paragraph}
                </p>
              ))}

              <div className="pt-4 border-t border-slate-200 dark:border-white/10 flex flex-wrap items-center gap-4 text-xs font-mono text-slate-500 dark:text-slate-400">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-teal-400" />
                  Available for Internships (2026)
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-indigo-400" />
                  Passionate about GenAI &amp; Full-Stack
                </span>
              </div>
            </div>

            {/* Core Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {coreStrengths.map((item, idx) => (
                <div key={idx} className="glass-card rounded-xl p-4 space-y-2">
                  <div className="p-2 w-fit rounded-lg bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-white/10">
                    {item.icon}
                  </div>
                  <h4 className="font-semibold text-sm text-slate-900 dark:text-white">
                    {item.title}
                  </h4>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Stats & Metric Highlights (Right 5 Cols) */}
          <div className="lg:col-span-5 space-y-4">
            <h3 className="text-sm font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 px-1">
              Key Metrics &amp; Credentials
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
              {stats.map((stat, idx) => (
                <div 
                  key={idx} 
                  className="glass-card rounded-2xl p-5 flex items-center justify-between group hover:translate-x-1 transition-transform"
                >
                  <div className="space-y-1">
                    <div className="text-3xl font-extrabold text-slate-900 dark:text-white font-mono group-hover:text-teal-400 transition-colors">
                      {stat.value}
                    </div>
                    <div className="text-sm font-semibold text-slate-700 dark:text-slate-200">
                      {stat.label}
                    </div>
                    <div className="text-xs text-slate-500 dark:text-slate-400">
                      {stat.description}
                    </div>
                  </div>
                  <div className="p-3 rounded-2xl bg-slate-100 dark:bg-slate-800/90 border border-slate-200 dark:border-white/10 group-hover:scale-110 transition-transform">
                    {iconMap[stat.iconName] || <FolderGit2 className="w-6 h-6 text-teal-400" />}
                  </div>
                </div>
              ))}
            </div>

            {/* Academic Callout Box */}
            <div className="rounded-2xl p-5 bg-gradient-to-br from-teal-500/10 via-indigo-500/10 to-purple-500/10 border border-teal-500/30 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-semibold text-teal-600 dark:text-teal-300 uppercase">
                  Academic Focus
                </span>
                <span className="text-xs font-mono text-indigo-400">CGPA: 7.38</span>
              </div>
              <h4 className="font-bold text-slate-900 dark:text-white text-sm">
                B.Tech in Computer Science &amp; Engineering
              </h4>
              <p className="text-xs text-slate-600 dark:text-slate-300">
                Lakshmi Narain College of Technology (LNCT), Bhopal (2024 – 2028)
              </p>
              <p className="text-[11px] text-slate-400 font-mono">
                DSA • Java • Operating Systems • IoT • Database Systems
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
