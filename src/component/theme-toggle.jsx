import { useEffect, useState } from 'react';
import { Moon, Sun } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import { useMotionPreferences } from './motion';

export default function ThemeToggle() {
  const { reduced } = useMotionPreferences();
  const [theme, setTheme] = useState(() => {
    try { return localStorage.getItem('portfolio-theme') === 'light' ? 'light' : 'dark'; }
    catch { return 'dark'; }
  });
  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', theme === 'dark' ? '#141512' : '#f5f4ed');
    try { localStorage.setItem('portfolio-theme', theme); } catch { /* Storage may be unavailable. */ }
  }, [theme]);
  return (
    <button className="icon-button theme-toggle" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}>
      <AnimatePresence mode="wait" initial={false}>
        <motion.span key={theme} initial={{ opacity: 0, rotate: reduced ? 0 : -60 }} animate={{ opacity: 1, rotate: 0 }} exit={{ opacity: 0, rotate: reduced ? 0 : 60 }} transition={{ duration: reduced ? 0 : 0.15 }}>
          {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
        </motion.span>
      </AnimatePresence>
    </button>
  );
}
