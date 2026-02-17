import ReactDOM from 'react-dom/client';

import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

// Lightweight smooth wheel-scrolling polyfill for desktop devices.
// Interpolates scroll position to create a smoother wheel experience.
(function () {
  const ease = 0.08;
  let targetY = window.scrollY;
  let currentY = targetY;
  let ticking = false;

  function onWheel(e) {
    const tag = document.activeElement && document.activeElement.tagName;
    if (tag === 'INPUT' || tag === 'TEXTAREA' || e.ctrlKey || e.metaKey || e.altKey) return;
    e.preventDefault();
    targetY += e.deltaY;
    const maxY = document.documentElement.scrollHeight - window.innerHeight;
    targetY = Math.max(0, Math.min(targetY, maxY));
    if (!ticking) {
      ticking = true;
      requestAnimationFrame(update);
    }
  }

  function update() {
    currentY += (targetY - currentY) * ease;
    window.scrollTo(0, Math.round(currentY));
    if (Math.abs(targetY - currentY) > 0.5) {
      requestAnimationFrame(update);
    } else {
      ticking = false;
    }
  }

  window.addEventListener('wheel', onWheel, { passive: false });
  window.addEventListener('scroll', () => {
    if (!ticking) {
      targetY = window.scrollY;
      currentY = targetY;
    }
  }, { passive: true });

})();
