import { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { TerminalModal } from './components/TerminalModal';
import { Toast } from './components/Toast';
import { SpeedInsights } from '@vercel/speed-insights/react';
import { Analytics } from '@vercel/analytics/react';

export function App() {
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    const saved = localStorage.getItem('portfolio_theme');
    if (saved !== null) {
      return saved === 'dark';
    }
    return true; // Default to dark mode
  });

  const [isTerminalOpen, setIsTerminalOpen] = useState(false);
  const [toast, setToast] = useState<{ message: string; type: 'success' | 'error' | 'info' } | null>(null);

  // Sync theme with HTML class and localStorage
  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
      root.classList.remove('light');
      localStorage.setItem('portfolio_theme', 'dark');
    } else {
      root.classList.remove('dark');
      root.classList.add('light');
      localStorage.setItem('portfolio_theme', 'light');
    }
  }, [darkMode]);

  // Global keyboard shortcut for Terminal (Ctrl+K or Cmd+K)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsTerminalOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const showToast = (message: string, type: 'success' | 'error' | 'info' = 'success') => {
    setToast({ message, type });
    setTimeout(() => {
      setToast(null);
    }, 4000);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 dark:bg-[#080c14] dark:text-slate-100 transition-colors duration-300 selection:bg-teal-500 selection:text-white">
      {/* Top Navigation Bar */}
      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        openTerminal={() => setIsTerminalOpen(true)}
      />

      {/* Main Content Sections */}
      <main>
        <Hero openTerminal={() => setIsTerminalOpen(true)} darkMode={darkMode} />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact onShowToast={showToast} />
      </main>

      {/* Footer */}
      <Footer openTerminal={() => setIsTerminalOpen(true)} />

      {/* Interactive CLI Modal */}
      <TerminalModal
        isOpen={isTerminalOpen}
        onClose={() => setIsTerminalOpen(false)}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />

      {/* Toast Notification Container */}
      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast(null)}
        />
      )}

      {/* Vercel Speed Insights & Real-Time Analytics */}
      <SpeedInsights />
      <Analytics />
    </div>
  );
}

export default App;
