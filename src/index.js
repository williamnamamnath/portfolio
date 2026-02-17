import ReactDOM from 'react-dom/client';

import App from './App';
import Lenis from '@studio-freight/lenis';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

// Initialize Lenis smooth scrolling
// Docs: https://github.com/studio-freight/lenis
if (typeof window !== 'undefined') {
  const lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smooth: true,
    direction: 'vertical',
    gestureDirection: 'vertical',
    smoothTouch: true,
    touchMultiplier: 2,
    infinite: false,
  });

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);

  // Expose for debugging on window
  window._lenis = lenis;
}

