import { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Carousel } from "react-bootstrap";

import { FaGithub, FaChevronDown } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

import backToTop from "../images/arrow-up.png";
import picture from "../images/profile-picture.jpg";
import movieNightThumb from "../images/hero-section-image.png";
import emporiumThumb from "../images/emporium-small.JPG";
import checkitThumb from "../images/checkit-app.JPG";
import nfibThumb from "../images/nfib-small.JPG";

import 'bootstrap/dist/css/bootstrap.min.css';
import '../custom-styles.css';
import useHeroParticles from "../hooks/useHeroParticles";


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
              className="profile-picture hero-profile-picture"
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
                className="hero-social-link"
              >
                <FaGithub />
              </a>
              <a 
                href="https://www.linkedin.com/in/william-nam-amnath/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hero-social-link"
              >
                <FaLinkedin />
              </a>
              <a 
                href="mailto:william.nam-amnath@mail.mcgill.ca" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hero-social-link"
              >
                <MdEmail />
              </a>
            </div>
          </div>
        </div>

        <div className="scroll-down-indicator">
          <FaChevronDown />
        </div>
      </div>

      <section className="page-section">
        <div className="container">
          <aside className="sidebar-card p-4 fade-up delay-3">
            <h1>Hi There! 👋</h1>
            <div className="d-grid gap-3 mt-4">
              <p>I am a full-stack web developer based in Montreal, Canada. I specialize in building responsive and user-friendly web applications with the MERN stack — from crafting clean frontends to designing robust backends and RESTful APIs.
              </p>
            </div>
          </aside>
        </div>
      </section>

      <section className="page-section">
        <div className="container">
          <div className="fade-up delay-2">
            <h1 className="text-white text-center mb-5">My Tech Stack</h1>
            <div className="tech-stack-grid">
              <div className="tech-stack-item">
                <i className="devicon-html5-plain-wordmark colored tech-stack-icon"></i>
                <span className="tech-stack-label">HTML5</span>
              </div>
              <div className="tech-stack-item">
                <i className="devicon-css3-plain-wordmark colored tech-stack-icon"></i>
                <span className="tech-stack-label">CSS3</span>
              </div>
              <div className="tech-stack-item">
                <i className="devicon-javascript-plain colored tech-stack-icon"></i>
                <span className="tech-stack-label">JavaScript</span>
              </div>
              <div className="tech-stack-item">
                <i className="devicon-typescript-plain colored tech-stack-icon"></i>
                <span className="tech-stack-label">TypeScript</span>
              </div>
              <div className="tech-stack-item">
                <i className="devicon-react-original-wordmark colored tech-stack-icon"></i>
                <span className="tech-stack-label">React</span>
              </div>
              <div className="tech-stack-item">
                <i className="devicon-nodejs-plain-wordmark colored tech-stack-icon"></i>
                <span className="tech-stack-label">Node.js</span>
              </div>
              <div className="tech-stack-item">
                <i className="devicon-express-original-wordmark colored tech-stack-icon tech-stack-icon--invert"></i>
                <span className="tech-stack-label">Express</span>
              </div>
              <div className="tech-stack-item">
                <i className="devicon-mongodb-plain-wordmark colored tech-stack-icon"></i>
                <span className="tech-stack-label">MongoDB</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="container">
          <div className="text-center fade-up delay-2">
            <h1 className="text-white mb-4">My Experience</h1>
            <p className="text-white mb-5 experience-teaser">
              From a university bootcamp to freelance medical websites — here's my journey.
            </p>
            <a href="/experience" className="cta-btn text-decoration-none">
              View My Experience →
            </a>
          </div>
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
                    <img src={movieNightThumb} alt="Movie Night" className="project-thumb" />
                    <h2 className="mt-3 mb-1">Movie Night</h2>
                    <p className="project-tile-desc">Browse and save your favourite movies and TV shows in one place.</p>
                    <h5 className="project-tile-badge">Full-Stack Project</h5>
                  </div>
                </div>
              </Carousel.Item>

              <Carousel.Item>
                <div className="project-tile d-flex justify-content-center align-items-center">
                  <div onClick={handleClickEmporium} className="project-content text-center">
                    <img src={emporiumThumb} alt="E-Wear Emporium" className="project-thumb" />
                    <h2 className="mt-3 mb-1">E-Wear Emporium</h2>
                    <p className="project-tile-desc">A team-built MERN e-commerce store for fitness apparel.</p>
                    <h5 className="project-tile-badge">Team Project</h5>
                  </div>
                </div>
              </Carousel.Item>

              <Carousel.Item>
                <div className="project-tile d-flex justify-content-center align-items-center">
                  <div onClick={handleClickCheckIt} className="project-content text-center">
                    <img src={checkitThumb} alt="CheckIt" className="project-thumb" />
                    <h2 className="mt-3 mb-1">CheckIt</h2>
                    <p className="project-tile-desc">A TypeScript to-do app for managing and tracking daily tasks.</p>
                    <h5 className="project-tile-badge">Beginner TypeScript Project</h5>
                  </div>
                </div>
              </Carousel.Item>

              <Carousel.Item>
                <div className="project-tile d-flex justify-content-center align-items-center">
                  <div onClick={handleClickNFIB} className="project-content text-center">
                    <img src={nfibThumb} alt="NFIB" className="project-thumb" />
                    <h2 className="mt-3 mb-1">NFIB</h2>
                    <p className="project-tile-desc">A freelance medical website for a genetics clinic at the MUHC.</p>
                    <h5 className="project-tile-badge">Freelance Project</h5>
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
        <button
          className="back-to-top-btn"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          aria-label="Back to top"
        >
          <img src={backToTop} alt="arrow up" />
        </button>
      </div>
      <div style={{ margin: '2rem 0' }} />
    </>
  );
}

export default Home;
