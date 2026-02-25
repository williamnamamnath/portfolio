import { useEffect } from 'react';

export default function useHeroParticles(canvasRef) {
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationId = null;
    let particles = [];

    const getSize = () => {
      const rect = canvas.getBoundingClientRect();
      return { w: rect.width, h: rect.height };
    };

    function resize() {
      const dpr = window.devicePixelRatio || 1;
      const { w, h } = getSize();
      canvas.width = Math.max(1, Math.floor(w * dpr));
      canvas.height = Math.max(1, Math.floor(h * dpr));
      canvas.style.width = w + 'px';
      canvas.style.height = h + 'px';
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    function createParticles() {
      const { w, h } = getSize();
      const desktop = window.innerWidth >= 1200;
      const tablet = window.innerWidth >= 768 && window.innerWidth < 1200;
      const count = desktop ? 80 : tablet ? 50 : 28;
      particles = [];
      for (let i = 0; i < count; i++) {
        particles.push({
          x: Math.random() * w,
          y: Math.random() * h,
          vx: (Math.random() - 0.5) * (desktop ? 0.6 : 0.4),
          vy: (Math.random() - 0.5) * (desktop ? 0.6 : 0.4),
          r: Math.random() * (desktop ? 3.2 : 2.2) + 0.6,
          alpha: 0.35 + Math.random() * 0.75
        });
      }
    }

    function draw() {
      const { w, h } = getSize();
      ctx.clearRect(0, 0, w, h);

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < -10) p.x = w + 10;
        if (p.x > w + 10) p.x = -10;
        if (p.y < -10) p.y = h + 10;
        if (p.y > h + 10) p.y = -10;

        ctx.beginPath();
        ctx.fillStyle = `rgba(200,220,255,${p.alpha})`;
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();
      }

      const maxDist = 80;
      ctx.lineWidth = 0.6;
      for (let i = 0; i < particles.length; i++) {
        const a = particles[i];
        for (let j = i + 1; j < i + 6 && j < particles.length; j++) {
          const b = particles[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < maxDist) {
            const alpha = 0.12 * (1 - dist / maxDist);
            ctx.strokeStyle = `rgba(200,220,255,${alpha})`;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }

      animationId = requestAnimationFrame(draw);
    }

    function start() {
      resize();
      createParticles();
      if (animationId) cancelAnimationFrame(animationId);
      animationId = requestAnimationFrame(draw);
    }

    const handleResize = () => {
      resize();
      createParticles();
    };

    start();
    window.addEventListener('resize', handleResize, { passive: true });

    return () => {
      if (animationId) cancelAnimationFrame(animationId);
      window.removeEventListener('resize', handleResize, { passive: true });
    };
  }, [canvasRef]);
}
