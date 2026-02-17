import ReactDOM from 'react-dom/client';

import App from './App';
// ThemeToggle will be mounted into a small portal container on pages that include it.
// We lazy-load the component to avoid failing builds if the file isn't present.
let ThemeToggle = null;
try { ThemeToggle = require('./components/ThemeToggle').default; } catch (e) { ThemeToggle = null; }

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

// If Home included a portal container, the ThemeToggle would be mounted there;
// instead we place the ThemeToggle directly in the nav so we cleanly show it everywhere.


