import { useState, useEffect } from 'react';
import { Sun, Moon } from 'lucide-react';

const ThemeToggle = () => {
  const [isLight, setIsLight] = useState(false);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    if (isLight) {
      document.documentElement.setAttribute('data-theme', 'light');
    } else {
      document.documentElement.removeAttribute('data-theme'); // fallback to :root
    }
  }, [isLight]);

  const toggleTheme = () => {
    setAnimate(true);
    setIsLight(!isLight);
    setTimeout(() => setAnimate(false), 400); // match animation duration
  };

  return (
    <button
      onClick={toggleTheme}
      className="focus:outline-none flex items-center justify-center"
      aria-label="Toggle theme"
      style={{ background: 'none', border: 'none', padding: 0 }}
    >
      {isLight ? (
        <Moon className={`w-6 h-6 -mt-1 transition-transform duration-300 ${animate ? 'animate-spin' : ''}`} />
      ) : (
        <Sun className={`w-6 h-6 -mt-1 transition-transform duration-300 ${animate ? 'animate-spin' : ''}`} />
      )}
    </button>
  );
};

export default ThemeToggle;
