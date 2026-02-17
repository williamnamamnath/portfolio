// fallback non-React theme toggle (ensures toggle appears even if React component import fails)
export function mountThemeToggleFallback() {
  const root = document.getElementById('theme-toggle-root');
  if (!root) return;
  const btn = document.createElement('button');
  btn.className = 'theme-toggle';
  btn.style.background = 'transparent';
  btn.style.border = 'none';
  btn.style.cursor = 'pointer';
  btn.style.color = 'var(--text-color)';
  btn.style.padding = '0.25rem';
  btn.style.fontSize = '1.25rem';
  function setIcon(light) { btn.textContent = light ? '\u263D' : '\u2600'; }
  const saved = localStorage.getItem('theme');
  let isLight = saved === 'light' || document.body.classList.contains('light-mode');
  document.body.classList.toggle('light-mode', isLight);
  setIcon(isLight);
  btn.addEventListener('click', () => {
    isLight = !isLight;
    document.body.classList.toggle('light-mode', isLight);
    localStorage.setItem('theme', isLight ? 'light' : 'dark');
    setIcon(isLight);
  });
  root.appendChild(btn);
}

// Provide CommonJS export for environments that use require()
if (typeof module !== 'undefined' && module.exports) {
  module.exports.mountThemeToggleFallback = mountThemeToggleFallback;
}
