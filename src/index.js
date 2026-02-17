import ReactDOM from 'react-dom/client';

import App from './App';
// ThemeToggle will be mounted into a small portal container on pages that include it.
// We lazy-load the component to avoid failing builds if the file isn't present.
let ThemeToggle = null;
try { ThemeToggle = require('./components/ThemeToggle').default; } catch (e) { ThemeToggle = null; }

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

// Mount a floating ThemeToggle into a small portal container so it's available on all pages
const container = document.getElementById('theme-toggle-root');
if (container) {
  if (ThemeToggle) {
    try {
      const React = require('react');
      const ReactDOM = require('react-dom');
      ReactDOM.createRoot(container).render(React.createElement(ThemeToggle));
    } catch (e) {
      // ignore
    }
  } else {
    // render a tiny fallback button if the component isn't available
    try {
      const { mountThemeToggleFallback } = require('./components/theme-toggle');
      mountThemeToggleFallback();
    } catch (e) {
      // missing fallback too — ignore
    }
  }
}


