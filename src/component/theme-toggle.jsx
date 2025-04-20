import { useState, useEffect } from 'react';

const ThemeToggle = () => {
  const [isLight, setIsLight] = useState(false);

  useEffect(() => {
    if (isLight) {
      document.documentElement.setAttribute('data-theme', 'light');
    } else {
      document.documentElement.removeAttribute('data-theme'); // fallback to :root
    }
  }, [isLight]);

  const toggleTheme = () => {
    setIsLight(!isLight);
  };

  return (
    <button
      onClick={toggleTheme}
      className="bg-primary text-white px-4 py-2 rounded"
    >
      Switch to {isLight ? 'Dark' : 'Light'} Mode
    </button>
  );
};

export default ThemeToggle;
