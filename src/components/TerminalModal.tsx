import React, { useState, useEffect, useRef } from 'react';
import { Terminal as TerminalIcon, X, CornerDownLeft } from 'lucide-react';
import confetti from 'canvas-confetti';
import { portfolioData } from '../data/portfolioData';

interface TerminalModalProps {
  isOpen: boolean;
  onClose: () => void;
  darkMode: boolean;
  setDarkMode: (val: boolean) => void;
}

interface CommandOutput {
  command: string;
  output: React.ReactNode;
}

export const TerminalModal: React.FC<TerminalModalProps> = ({ 
  isOpen, 
  onClose,
  darkMode,
  setDarkMode
}) => {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<CommandOutput[]>([
    {
      command: 'welcome',
      output: (
        <div className="space-y-1 text-slate-300">
          <p className="text-teal-400 font-bold">⚡ Welcome to {portfolioData.personal.name}'s Interactive Portfolio CLI v2.0</p>
          <p className="text-xs text-slate-400">Type <span className="text-amber-400 font-semibold">help</span> to view available commands, or <span className="text-teal-400 font-semibold">exit</span> to close.</p>
        </div>
      )
    }
  ]);

  const inputRef = useRef<HTMLInputElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  if (!isOpen) return null;

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = input.trim().toLowerCase();
    if (!cmd) return;

    let resultNode: React.ReactNode = null;

    switch (cmd) {
      case 'help':
        resultNode = (
          <div className="space-y-1 text-xs">
            <p className="text-teal-400 font-semibold mb-1">Available Commands:</p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-1 text-slate-300">
              <div><span className="text-amber-400 font-mono">about</span> : Brief bio</div>
              <div><span className="text-amber-400 font-mono">skills</span> : Tech stack</div>
              <div><span className="text-amber-400 font-mono">projects</span> : Shipped apps</div>
              <div><span className="text-amber-400 font-mono">education</span> : LNCT &amp; Schooling</div>
              <div><span className="text-amber-400 font-mono">contact</span> : Verified links &amp; channels</div>
              <div><span className="text-amber-400 font-mono">theme</span> : Toggle dark/light</div>
              <div><span className="text-amber-400 font-mono">confetti</span> : Celebrate 🎉</div>
              <div><span className="text-amber-400 font-mono">clear</span> : Clear screen</div>
              <div><span className="text-amber-400 font-mono">exit</span> : Close CLI</div>
            </div>
          </div>
        );
        break;

      case 'about':
      case 'bio':
      case 'whoami':
        resultNode = (
          <div className="space-y-1 text-xs text-slate-300">
            <p className="font-semibold text-white">{portfolioData.personal.name} — {portfolioData.personal.title}</p>
            <p className="text-slate-400">{portfolioData.personal.shortBio}</p>
            <p className="text-teal-400">{portfolioData.personal.availabilityBadge}</p>
          </div>
        );
        break;

      case 'skills':
        resultNode = (
          <div className="space-y-2 text-xs">
            <p className="text-teal-400 font-semibold">Technical Arsenal &amp; Frameworks:</p>
            <div className="flex flex-wrap gap-1.5">
              {portfolioData.skills.map(s => (
                <span key={s.name} className="px-2 py-0.5 rounded bg-slate-800 text-teal-300 border border-teal-500/30">
                  {s.name} ({s.level}%)
                </span>
              ))}
            </div>
          </div>
        );
        break;

      case 'projects':
        resultNode = (
          <div className="space-y-2 text-xs">
            <p className="text-teal-400 font-semibold">Featured Projects:</p>
            {portfolioData.projects.map(p => (
              <div key={p.id} className="border-l-2 border-teal-500/50 pl-2">
                <span className="font-bold text-white">{p.title}</span> [{p.category}]
                <p className="text-slate-400 text-[11px]">{p.description}</p>
              </div>
            ))}
          </div>
        );
        break;

      case 'education':
        resultNode = (
          <div className="space-y-2 text-xs">
            <p className="text-teal-400 font-semibold">Academic History:</p>
            {portfolioData.timeline.map(t => (
              <div key={t.id} className="border-l-2 border-indigo-500/50 pl-2">
                <span className="font-bold text-white">{t.title}</span> — <span className="text-slate-300">{t.organization}</span> ({t.period})
                <p className="text-slate-400 text-[11px]">{t.description}</p>
              </div>
            ))}
          </div>
        );
        break;

      case 'contact':
      case 'connect':
        resultNode = (
          <div className="space-y-1 text-xs text-slate-300">
            <p><span className="text-teal-400 font-semibold">Verified Channels:</span></p>
            <p><span className="text-slate-500">Contact Form:</span> Scroll to #contact on the portfolio</p>
            <p><span className="text-slate-500">LinkedIn:</span> {portfolioData.personal.linkedin}</p>
            <p><span className="text-slate-500">GitHub:</span> {portfolioData.personal.github}</p>
            <p><span className="text-slate-500">Location:</span> {portfolioData.personal.location}</p>
          </div>
        );
        break;

      case 'theme':
        setDarkMode(!darkMode);
        resultNode = <p className="text-xs text-amber-300">Theme switched to {darkMode ? 'Light' : 'Dark'} mode!</p>;
        break;

      case 'confetti':
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 }
        });
        resultNode = <p className="text-xs text-pink-400 font-bold">🎉 Confetti deployed! Keep building great software, Ashutosh!</p>;
        break;

      case 'clear':
        setHistory([]);
        setInput('');
        return;

      case 'exit':
      case 'quit':
        onClose();
        setInput('');
        return;

      case 'sudo':
        resultNode = <p className="text-xs text-rose-400 font-mono">Permission denied: You already have developer root privileges! 🛡️</p>;
        break;

      case 'matrix':
        resultNode = <p className="text-xs text-emerald-400 font-mono">Wake up, Neo... The Matrix has you. Follow the white rabbit 🐇</p>;
        break;

      default:
        resultNode = (
          <p className="text-xs text-rose-400">
            command not found: <span className="font-semibold">{cmd}</span>. Type <span className="text-teal-400">help</span> for available commands.
          </p>
        );
    }

    setHistory((prev) => [...prev, { command: input, output: resultNode }]);
    setInput('');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div 
        className="w-full max-w-2xl rounded-2xl bg-slate-950/95 border border-slate-700/80 shadow-2xl overflow-hidden font-mono text-sm"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Terminal Title Bar */}
        <div className="flex items-center justify-between px-4 py-3 bg-slate-900 border-b border-slate-800 select-none">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-rose-500 hover:opacity-80 cursor-pointer" onClick={onClose} />
            <span className="w-3 h-3 rounded-full bg-amber-500" />
            <span className="w-3 h-3 rounded-full bg-emerald-500" />
            <span className="ml-2 text-xs text-slate-400 font-medium flex items-center gap-1.5">
              <TerminalIcon className="w-3.5 h-3.5 text-teal-400" />
              ashutosh@portfolio:~ (bash)
            </span>
          </div>

          <button 
            onClick={onClose}
            className="text-slate-400 hover:text-white transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Terminal Output Area */}
        <div className="p-4 sm:p-6 space-y-4 max-h-[55vh] overflow-y-auto">
          {history.map((item, idx) => (
            <div key={idx} className="space-y-1.5">
              <div className="flex items-center gap-2 text-xs text-slate-400">
                <span className="text-teal-400">user@dev:~$</span>
                <span className="text-white font-medium">{item.command}</span>
              </div>
              <div className="pl-4">{item.output}</div>
            </div>
          ))}
          <div ref={bottomRef} />
        </div>

        {/* Command Input Field */}
        <form onSubmit={handleCommand} className="flex items-center gap-2 px-4 py-3 bg-slate-900/90 border-t border-slate-800">
          <span className="text-teal-400 font-bold text-xs sm:text-sm">ashutosh@portfolio:~$</span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type a command (e.g. 'help', 'skills', 'education', 'confetti')..."
            className="flex-1 bg-transparent text-slate-100 placeholder-slate-600 focus:outline-none text-xs sm:text-sm"
          />
          <button 
            type="submit" 
            className="text-slate-500 hover:text-teal-400 transition-colors p-1"
            title="Execute"
          >
            <CornerDownLeft className="w-4 h-4" />
          </button>
        </form>
      </div>
    </div>
  );
};
