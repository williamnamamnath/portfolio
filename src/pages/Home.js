import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Experience from "./Experience";

import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

import backToTop from "../images/arrow-up.png";
import picture from "../images/profile-picture.jpg";
import wna from "../images/wna-picture.JPG";

import 'bootstrap/dist/css/bootstrap.min.css';
import '../custom-styles.css';


const Home = () => {

  useEffect(() => {
    document.title = "William Nam-Amnath"
}, []);

const navigate = useNavigate();

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
      
      const handleClickFinanceTracker = () => {
        navigate('/finance-tracker'); 
      };

  

  return (
    <>
      <div className="bg-orbs" aria-hidden="true">
        <div className="bg-orb bg-orb-1" />
        <div className="bg-orb bg-orb-2" />
        <div className="bg-orb bg-orb-3" />
      </div>
      <div className="hero-section">
        <div
          className="d-flex justify-content-center align-items-center flex-wrap"
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
            <h4 className="text-center mb-3 hero-subtitle">Creating applications that solve real-world problems</h4>
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
      </div>

      <section className="page-section">
        <div className="container">
          <aside className="sidebar-card p-4 p-md-5 text-center fade-up delay-3">
            <img src={wna} alt="William Nam-Amnath" className="about-avatar mb-3" />
            <h1 className="mt-3">Hi There!</h1>
            <div className="d-grid gap-3 mt-4">
              <p className="about-text mb-0">I am a full-stack web developer based in Montreal, Canada. I specialize in building responsive and user-friendly web applications with the MERN stack among other frameworks.
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
              <div className="tech-stack-item">
                <i className="devicon-bootstrap-plain colored tech-stack-icon"></i>
                <span className="tech-stack-label">Bootstrap</span>
              </div>
              <div className="tech-stack-item">
                <i className="devicon-tailwindcss-original colored tech-stack-icon"></i>
                <span className="tech-stack-label">TailwindCSS</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="page-section">
          <Experience />
      </section>

      <section className="page-section" id="projects">
        <div className="container">
          <div className="p-3 fade-up delay-2">
            <h1 className="text-white text-center m-3 p-2">My Projects</h1>
            <div className="row g-4">
              <div className="col-12 col-md-6">
                <div onClick={handleClickFinanceTracker} className="project-card h-100">
                  <h2 className="mb-2">FinanceTracker</h2>
                  <h5 className="project-tile-badge mb-3">Full-Stack Project</h5>
                  <p className="project-tile-desc">A full-stack web app built with React, Node.js, and MongoDB that helps users track their personal finances. Features include expense tracking, budget management, and financial reporting.</p>
                </div>
              </div>
              <div className="col-12 col-md-6">
                <div onClick={handleClickMovieNight} className="project-card h-100">
                  <h2 className="mb-2">Movie Night</h2>
                  <h5 className="project-tile-badge mb-3">Full-Stack Project</h5>
                  <p className="project-tile-desc">A full-stack web app built with React, Node.js, and MongoDB that lets users browse trending movies and TV shows via the TMDB API, create watchlists, and save their favourites across sessions.</p>
                </div>
              </div>
              <div className="col-12 col-md-6">
                <div onClick={handleClickEmporium} className="project-card h-100">
                  <h2 className="mb-2">E-Wear Emporium</h2>
                  <h5 className="project-tile-badge mb-3">Team Project</h5>
                  <p className="project-tile-desc">A MERN stack e-commerce platform for fitness apparel built collaboratively. Features product listings, a shopping cart, user authentication, and an admin dashboard for managing inventory.</p>
                </div>
              </div>
              <div className="col-12 col-md-6">
                <div onClick={handleClickCheckIt} className="project-card h-100">
                  <h2 className="mb-2">CheckIt</h2>
                  <h5 className="project-tile-badge mb-3">Beginner TypeScript Project</h5>
                  <p className="project-tile-desc">A TypeScript-first to-do application for creating, organising, and tracking daily tasks. Built to explore strong typing, interfaces, and component-driven architecture in a real-world context.</p>
                </div>
              </div>
              <div className="col-12 col-md-6">
                <div onClick={handleClickNFIB} className="project-card h-100">
                  <h2 className="mb-2">NFIB</h2>
                  <h5 className="project-tile-badge mb-3">Freelance Project</h5>
                  <p className="project-tile-desc">A freelance website designed and developed for a genetics clinic at the MUHC. Focused on clean, accessible medical content presentation, responsive layout, and a professional visual identity.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="page-section" id="contact">
        <div className="container">
          <div className="contact-card fade-up delay-2">
            <h1 className="text-white mb-4 text-center">Get In Touch</h1>
            <p className="text-white mb-5 contact-section-text text-center">
              I'm always open to new opportunities and collaborations. Feel free to reach out!
            </p>
            <div className="text-center">
            <a href="mailto:william.nam-amnath@mail.mcgill.ca" className="cta-btn text-decoration-none">
              Say Hello →
            </a>
            </div>
          </div>
        </div>
      </section>

      <div className="fixed-actions">
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
