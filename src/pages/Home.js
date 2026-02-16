import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import { Carousel } from "react-bootstrap";

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

const navExperience = () => {
  navigate('/experience'); 
};

const navAboutMe = () => {
  navigate('/about'); 
};

  return (
    <>
      <div className="hero-section">
        <div className="d-flex justify-content-center align-items-center flex-wrap"> 

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
                style={{ transition: 'transform 0.3s ease' }}
                onMouseEnter={(e) => e.target.style.transform = 'scale(1.2)'}
                onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
              >
                <FaGithub />
              </a>
              <a 
                href="https://www.linkedin.com/in/william-nam-amnath/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white fs-2"
                style={{ transition: 'transform 0.3s ease' }}
                onMouseEnter={(e) => e.target.style.transform = 'scale(1.2)'}
                onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
              >
                <FaLinkedin />
              </a>
              <a 
                href="mailto:william.nam-amnath@mail.mcgill.ca" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white fs-2"
                style={{ transition: 'transform 0.3s ease' }}
                onMouseEnter={(e) => e.target.style.transform = 'scale(1.2)'}
                onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
              >
                <MdEmail />
              </a>
            </div>
          </div>

        </div>
      </div>
      <div className="container my-5">
        {/* Stack carousel above the buttons vertically */}
        <div className="mb-4">
          <div className="project-card p-3 fade-up delay-2">
            <h4 className="text-white m-3 p-2">My Projects</h4>
            <Carousel
              interval={null}
              indicators={true}
              controls={true}
              className="project-carousel"
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
          </div>
        </div>

        <div>
          <aside className="sidebar-card p-4 text-center text-white fade-up delay-3">
            <h4>Want to know more about me?<br/>Let's get started.</h4>
            <div className="d-grid gap-3 mt-4">
              <Button onClick={navAboutMe} className="rounded-pill p-3 w-100 cta-btn">About Me</Button>
              <Button onClick={navExperience} className="rounded-pill p-3 w-100 cta-btn">My Background</Button>
            </div>
          </aside>
        </div>
      </div>

      <div className="top-btn">
        <a href="/"><img src={backToTop} alt="arrow up"/></a>
      </div>
      <div style={{ margin: '6rem 0' }} />
    </>
  );
}

export default Home;
