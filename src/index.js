import ReactDOM from 'react-dom/client';

import App from './App';
import ThemeToggleComponent from './components/ThemeToggleComponent';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

// Mount ThemeToggle into the nav (desktop) and into the mobile menu root if present.
try {
  const React = require('react');
  const ReactDOM = require('react-dom/client');

  const desktopNav = document.querySelector('nav');
  if (desktopNav) {
    // append container to the nav content area
    const cont = document.createElement('div');
    cont.style.display = 'inline-flex';
    cont.style.alignItems = 'center';
    cont.style.marginLeft = '0.5rem';
    desktopNav.querySelector('div')?.appendChild(cont);
    try { ReactDOM.createRoot(cont).render(React.createElement(ThemeToggleComponent)); } catch (e) {}
  }

  const mobileRoot = document.getElementById('mobile-theme-toggle-root');
  if (mobileRoot) {
    try { ReactDOM.createRoot(mobileRoot).render(React.createElement(ThemeToggleComponent)); } catch (e) {}
  }
} catch (e) {
  // fallback: mount non-react fallback into Home's theme-toggle-root if present
  try { const m = require('./components/theme-toggle'); m.mountThemeToggleFallback(); } catch (e) {}
}


