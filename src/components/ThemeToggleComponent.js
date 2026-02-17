import React, { useEffect, useState } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';

const ThemeToggleComponent = () => {
  const [isLight, setIsLight] = useState(false);

  useEffect(() => {
    try {
      const saved = localStorage.getItem('theme');
      if (saved) {
        const light = saved === 'light';
        document.body.classList.toggle('light-mode', light);
        setIsLight(light);
      } else {
        const light = document.body.classList.contains('light-mode');
        setIsLight(light);
      }
    } catch (e) {}
  }, []);

  const toggle = () => {
    const next = !isLight;
    setIsLight(next);
    document.body.classList.toggle('light-mode', next);
    try { localStorage.setItem('theme', next ? 'light' : 'dark'); } catch (e) {}
  };

  return (
    <button
      onClick={toggle}
      aria-label={isLight ? 'Switch to dark mode' : 'Switch to light mode'}
      title={isLight ? 'Dark mode' : 'Light mode'}
      style={{
        background: 'transparent',
        border: 'none',
        cursor: 'pointer',
        color: 'var(--text-color)',
        padding: '0.25rem',
        fontSize: '1.15rem',
      }}
    >
      {isLight ? <FaMoon /> : <FaSun />}
    </button>
  );
};

export default ThemeToggleComponent;
