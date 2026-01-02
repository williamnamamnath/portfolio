import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";

import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

import backToTop from "../images/arrow-up.png";
import picture from "../images/profile-picture.jpg";
import banffPhoto from "../images/wnam-amnath.JPG";

import 'bootstrap/dist/css/bootstrap.min.css';


const Home = () => {

  useEffect(() => {
    document.title = "William Nam-Amnath | My Portfolio"
}, []);

const navigate = useNavigate();

const navExperience = () => {
  navigate('/experience'); 
};

const navProjects = () => {
  navigate('/projects'); 
};

  return (
    <div className="">
      <div style={{ margin: '8rem 0' }}>
        <div className="d-flex justify-content-center align-items-center flex-wrap"> 

          <div className="d-inline-block p-4">
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

          <div className="text-white rounded-5 m-3 p-2" style={{ display: 'inline-block' }}>
            <h1 className="text-center" style={{ fontFamily: 'Poppins, sans-serif', color: 'whitesmoke' }}>William</h1>
            <h1 className="text-center" style={{ fontFamily: 'Poppins, sans-serif', color: 'whitesmoke' }}>Nam-Amnath</h1>
            <br/>
            <br/>
            <h3 className="text-center mb-3">Full-Stack Web Developer</h3>
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
      <br/>
      <br/>
      <br/>

      <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>

      <div style={{ margin: '8rem 0' }} />
    <h3 className="text-center text-white">I have experience with the following tech stack:</h3>
    <div className="d-flex justify-content-center align-items-center">
      <div className="text-white rounded-5 m-3 p-2" style={{ display: 'inline-block' }}>
        <div className="d-flex justify-content-center align-items-center gap-4 text-dark rounded-5 m-4 p-3">
          <i className="devicon-html5-plain-wordmark colored" style={{ fontSize: '8rem', backgroundColor: 'transparent', padding: '5px', borderRadius: '10px' }}></i>
          <i className="devicon-css3-plain-wordmark colored" style={{ fontSize: '8rem', backgroundColor: 'transparent', padding: '5px', borderRadius: '10px' }}></i>
          <i className="devicon-javascript-plain colored" style={{ fontSize: '8rem', backgroundColor: 'transparent', padding: '5px', borderRadius: '10px' }}></i>
          <i className="devicon-typescript-plain colored" style={{ fontSize: '8rem', backgroundColor: 'transparent', padding: '5px', borderRadius: '10px' }}></i>
        </div>
        <div className="d-flex justify-content-center align-items-center gap-4 text-dark rounded-5 m-4 p-3">
          <i className="devicon-react-original-wordmark colored" style={{ fontSize: '8rem', backgroundColor: 'transparent', padding: '5px', borderRadius: '10px' }}></i>    
          <i className="devicon-mongodb-plain-wordmark colored" style={{ fontSize: '8rem', backgroundColor: 'transparent', padding: '5px', borderRadius: '10px' }}></i>
          <i className="devicon-nodejs-plain-wordmark colored" style={{ fontSize: '8rem', backgroundColor: 'transparent', padding: '5px', borderRadius: '10px' }}></i>
        </div>
      </div>
    </div>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>

    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    
    <div className="mt-5" />
    <h3 className="text-center text-white">Want to know about my projects and my background?
      <br/>
      Let's get started.
    </h3>
    <div className="d-flex flex-wrap justify-content-center align-items-center gap-4 text-dark rounded-5 mt-4">
      <Button 
        onClick={navProjects}
        style={{
          fontSize: '1.3rem',
          color: '#fff',
          background: 'linear-gradient(90deg, #3672FF 0%, #0046EA 100%)',
          padding: '2rem 2.2rem',
          margin: '2rem 0',
          outline: '1.5px solid transparent',
          transition: 'all 0.5s ease'
        }}
        className="rounded-pill"
        onMouseEnter={(e) => {
          e.target.style.background = 'black';
          e.target.style.outline = '1.5px solid #0046EA';
        }}
        onMouseLeave={(e) => {
          e.target.style.background = 'linear-gradient(90deg, #3672FF 0%, #0046EA 100%)';
          e.target.style.outline = '1.5px solid transparent';
        }}
      >
         My Projects 
      <span style={{ marginLeft: '0.5rem', fontSize: '2rem' }}>→</span>
      </Button>
      <Button 
        onClick={navExperience}
        style={{
          fontSize: '1.3rem',
          color: '#fff',
          background: 'linear-gradient(90deg, #3672FF 0%, #0046EA 100%)',
          padding: '2rem 2.2rem',
          margin: '2rem 0',
          outline: '1.5px solid transparent',
          transition: 'all 0.5s ease'
        }}
        className="rounded-pill"
        onMouseEnter={(e) => {
          e.target.style.background = 'black';
          e.target.style.outline = '1.5px solid #0046EA';
        }}
        onMouseLeave={(e) => {
          e.target.style.background = 'linear-gradient(90deg, #3672FF 0%, #0046EA 100%)';
          e.target.style.outline = '1.5px solid transparent';
        }}
      >
         My Background 
      <span style={{ marginLeft: '0.5rem', fontSize: '2rem' }}>→</span>
      </Button>
    </div>

    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>

    <div className="d-flex align-items-center justify-content-center">
            <img 
                src={banffPhoto} 
                alt="William Nam-Amnath"
                className="rounded shadow"
                style={{
                  boxShadow: '0 2px 20px 0 #efd6ac',
                  borderRadius: '10px',
                  height: '500px',
                  width: '300px',
                  objectFit: 'cover'
                }}
            />
            </div>
            <br/>
            <p className="text-center text-white fs-5 m-2 p-4 lh-lg" style={{ fontSize: '1.2rem', margin: '0.6rem', padding: '1.5rem', lineHeight: '1.7' }}>
            <h2 style={{fontStyle: "italic", color: "white"}}>👋 Hi there! </h2>
            My name is <span style={{ color: '#3672FF'}}>William Nam-Amnath</span> and I am a full-stack web developer based in Montreal, Canada.
            <div className="my-3"/>
            Click <a href='/about' style={{ color: 'white', textDecoration: 'underline', cursor:'pointer' }}>here</a> to learn more about me.
            </p>

    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <div className="top-btn">
    <a href="/"><img src={backToTop} alt="arrow up"/></a>
    </div>
    <div style={{ margin: '8rem 0' }} />
    </div>
  );
}

export default Home;
