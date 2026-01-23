import { useState, useEffect } from 'react';
import { Sun, Moon } from 'lucide-react';

const ThemeToggle = () => {
  const [isLight, setIsLight] = useState(false);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    if (isLight) {
      document.documentElement.setAttribute('data-theme', 'light');
    } else {
      document.documentElement.removeAttribute('data-theme');
    }
  }, [isLight]);

  const toggleTheme = () => {
    setAnimate(true);
    setIsLight(!isLight);
    setTimeout(() => setAnimate(false), 400);
  };

  return (
    <button
      onClick={toggleTheme}
      className="flex items-center justify-center w-9 h-9 rounded-full transition-all duration-300 hover:bg-accent/20"
      aria-label="Toggle theme"
      style={{ background: 'transparent', border: 'none' }}
    >
      {isLight ? (
        <Moon
          className={`w-5 h-5 text-text transition-transform duration-300 ${animate ? 'rotate-180 scale-110' : ''
            }`}
        />
      ) : (
        <Sun
          className={`w-5 h-5 text-text transition-transform duration-300 ${animate ? 'rotate-180 scale-110' : ''
            }`}
        />
      )}
    </button>
  );
};

export default ThemeToggle;
