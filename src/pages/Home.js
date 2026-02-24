import { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Carousel } from "react-bootstrap";

import Experience from "./Experience";

import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

import backToTop from "../images/arrow-up.png";
import picture from "../images/profile-picture.jpg";

import 'bootstrap/dist/css/bootstrap.min.css';
import '../custom-styles.css';


const Home = () => {

  useEffect(() => {
    document.title = "William Nam-Amnath | My Portfolio"
}, []);

const navigate = useNavigate();
  const canvasRef = useRef(null);
  useHeroParticles(canvasRef);

  const [progressKey, setProgressKey] = useState(0);
  const carouselInterval = 4000;

    const handleClickNFIB = () => {
        navigate('/nfib'); 
      };

      const handleClickEmporium = () => {
        navigate('/emporium'); 
      };

      const handleClickCheckIt = () => {
        navigate('/checkit'); 
      };
      
      const handleClickMovieNight = () => {
        navigate('/movie-night'); 
      };

  

  return (
    <>
      <div className="hero-section hero-particles-container">
        <canvas ref={canvasRef} id="hero-particles" className="hero-particles-canvas" />
        <div
          className="d-flex justify-content-center align-items-center flex-wrap pulsing-glow"
        >

          <div className="d-inline-block p-4 fade-in-left delay-0">
            <img 
              src={picture} 
              alt="William Nam-Amnath" 
              style={{
                borderRadius: '200px',
                height: '320px',
                width: '320px',
                objectFit: 'cover',
                boxShadow: '0 2px 20px 0 gray'
              }}
              className="profile-picture"
            />
          </div>

          <div className="text-white rounded-5 m-3 p-2 fade-in-right delay-1" style={{ display: 'inline-block' }}>
            <h1 className="text-center home-name-line" style={{ fontFamily: 'Poppins, sans-serif' }}>William</h1>
            <h1 className="text-center home-name-line" style={{ fontFamily: 'Poppins, sans-serif' }}>Nam-Amnath</h1>
            <div style={{ height: '0.75rem' }} />
            <h4 className="text-center mb-3 hero-subtitle">Full-Stack Web Developer</h4>
            <hr/>
            <div className="d-flex justify-content-center align-items-center gap-4 rounded-5 mb-3 px-5">
              <a 
                href="https://github.com/williamnamamnath" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white fs-2"
              >
                <FaGithub />
              </a>
              <a 
                href="https://www.linkedin.com/in/william-nam-amnath/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white fs-2"
              >
                <FaLinkedin />
              </a>
              <a 
                href="mailto:william.nam-amnath@mail.mcgill.ca" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white fs-2"
              >
                <MdEmail />
              </a>
            </div>
          </div>
        </div>
      </div>

      <section className="page-section">
        <div className="container">
          <aside className="sidebar-card p-4 fade-up delay-3">
            <h1>Hi There! 👋</h1>
            <div className="d-grid gap-3 mt-4">
              <p>I am a full-stack web developer based in Montreal, Canada and I specialize in building responsive and user-friendly web applications with the MERN stack. Full-stack projects.
              </p>
            </div>
          </aside>
        </div>
      </section>

      <section className="page-section">
        <div className="container">
          <aside className="p-4 fade-up delay-3">
            <Experience />
          </aside>
        </div>
      </section>

      <section className="page-section">
        <div className="container">
          <div className="p-3 fade-up delay-2">
            <h1 className="text-white text-center m-3 p-2">My Projects</h1>
            <div className="project-carousel">
              <Carousel
                fade={true}
                interval={4000}
                pause={'hover'}
                wrap={true}
                indicators={true}
                controls={true}
                onSlide={() => setProgressKey(k => k + 1)}
              >
              <Carousel.Item>
                <div className="project-tile d-flex justify-content-center align-items-center">
                  <div onClick={handleClickMovieNight} className="project-content text-center">
                    <h1 className="mb-4">🌟 Movie Night 🌟</h1>
                    <h5>Full-Stack Project</h5>
                  </div>
                </div>
              </Carousel.Item>

              <Carousel.Item>
                <div className="project-tile d-flex justify-content-center align-items-center">
                  <div onClick={handleClickEmporium} className="project-content text-center">
                    <h1 className="mb-4">🌟 E-Wear Emporium 🌟</h1>
                    <h5>Team Project</h5>
                  </div>
                </div>
              </Carousel.Item>

              <Carousel.Item>
                <div className="project-tile d-flex justify-content-center align-items-center">
                  <div onClick={handleClickCheckIt} className="project-content text-center">
                    <h1 className="mb-4">🌟 CheckIt 🌟</h1>
                    <h5>Beginner Typescript Project</h5>
                  </div>
                </div>
              </Carousel.Item>

              <Carousel.Item>
                <div className="project-tile d-flex justify-content-center align-items-center">
                  <div onClick={handleClickNFIB} className="project-content text-center">
                    <h1 className="mb-4">🌟 NFIB 🌟</h1>
                    <h5>Freelance Project</h5>
                  </div>
                </div>
              </Carousel.Item>
              </Carousel>

              <div style={{ position: 'relative', marginTop: '0.75rem', padding: '6px', borderRadius: '999px', border: '2px solid rgba(255,255,255,0.85)', backgroundColor: 'rgba(255,255,255,0.02)', boxShadow: '0 6px 18px rgba(0,0,0,0.18)' }}>
                <div
                  className="carousel-progress"
                  key={progressKey}
                  style={{ animationDuration: `${carouselInterval}ms`, height: '8px', backgroundColor: '#ffffff', boxShadow: 'inset 0 0 6px rgba(0,0,0,0.06)' }}
                  aria-hidden="true"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="top-btn">
        <a href="/"><img src={backToTop} alt="arrow up"/></a>
      </div>
      <div style={{ margin: '2rem 0' }} />
    </>
  );
}

// Particle canvas initialization (placed after component to keep component body tidy)
function useHeroParticles(canvasRef) {
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

      // draw particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        // wrap
        if (p.x < -10) p.x = w + 10;
        if (p.x > w + 10) p.x = -10;
        if (p.y < -10) p.y = h + 10;
        if (p.y > h + 10) p.y = -10;

        ctx.beginPath();
        ctx.fillStyle = `rgba(200,220,255,${p.alpha})`;
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();
      }

      // optional soft lines between nearby particles (limited for perf)
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
    window.addEventListener('resize', handleResize);

    return () => {
      if (animationId) cancelAnimationFrame(animationId);
      window.removeEventListener('resize', handleResize);
    };
  }, [canvasRef]);
}

// Hook usage inside module: developers will call useHeroParticles(canvasRef) from the component

export default Home;
