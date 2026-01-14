import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Carousel } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

const ProjectsPage = () => {

    useEffect(() => {
        document.title = "My Projects"
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
    
    return (
      <>
      <div style={{ margin: '6rem 0' }} />
      <h1 className="text-center text-white" style={{ fontFamily: 'Open Sans, sans-serif' }}>My Projects 💻</h1>   

      <div className="d-flex justify-content-center align-items-center my-5">
        <div style={{ maxWidth: '800px', width: '100%' }}>
          <Carousel 
            interval={null}
            indicators={true}
            controls={true}
            className="project-carousel"
          >
                  <Carousel.Item>
                    <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '400px' }}>
                      <div 
                        onClick={handleClickMovieNight}
                        style={{
                          color: 'white',
                          background: 'linear-gradient(90deg, #3672FF 0%, #0046EA 100%)',
                          boxShadow: '0 2px 20px 0 #0046EA',
                          padding: '4rem 5rem',
                          cursor: 'pointer',
                          outline: '1.5px solid transparent',
                          transition: 'all 0.5s ease',
                          width: '100%',
                          maxWidth: '500px'
                        }}
                        className="rounded-4 text-center"
                        onMouseEnter={(e) => {
                          e.currentTarget.style.background = 'black';
                          e.currentTarget.style.outline = '1.5px solid #0046EA';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.background = 'linear-gradient(90deg, #3672FF 0%, #0046EA 100%)';
                          e.currentTarget.style.outline = '1.5px solid transparent';
                        }}
                      >
                        <h1 className="mb-4">🌟 Movie Night 🌟</h1>
                        <h5>Full-Stack Project</h5>
                      </div>
                    </div>
                  </Carousel.Item>

                  <Carousel.Item>
                    <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '400px' }}>
                      <div 
                        onClick={handleClickEmporium}
                        style={{
                          color: 'white',
                          background: 'linear-gradient(90deg, #3672FF 0%, #0046EA 100%)',
                          boxShadow: '0 2px 20px 0 #0046EA',
                          padding: '4rem 5rem',
                          cursor: 'pointer',
                          outline: '1.5px solid transparent',
                          transition: 'all 0.5s ease',
                          width: '100%',
                          maxWidth: '500px'
                        }}
                        className="rounded-4 text-center"
                        onMouseEnter={(e) => {
                          e.currentTarget.style.background = 'black';
                          e.currentTarget.style.outline = '1.5px solid #0046EA';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.background = 'linear-gradient(90deg, #3672FF 0%, #0046EA 100%)';
                          e.currentTarget.style.outline = '1.5px solid transparent';
                        }}
                      >
                        <h1 className="mb-4">🌟 E-Wear Emporium 🌟</h1>
                        <h5>Team Project</h5>
                      </div>
                    </div>
                  </Carousel.Item>
                  
            <Carousel.Item>
              <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '400px' }}>
                <div 
                  onClick={handleClickCheckIt}
                  style={{
                    color: 'white',
                    background: 'linear-gradient(90deg, #3672FF 0%, #0046EA 100%)',
                    boxShadow: '0 2px 20px 0 #0046EA',
                    padding: '4rem 5rem',
                    cursor: 'pointer',
                    outline: '1.5px solid transparent',
                    transition: 'all 0.5s ease',
                    width: '100%',
                    maxWidth: '500px'
                  }}
                  className="rounded-4 text-center"
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'black';
                    e.currentTarget.style.outline = '1.5px solid #0046EA';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'linear-gradient(90deg, #3672FF 0%, #0046EA 100%)';
                    e.currentTarget.style.outline = '1.5px solid transparent';
                  }}
                >
                  <h1 className="mb-4">🌟 CheckIt 🌟</h1>
                  <h5>Beginner Typescript Project</h5>
                </div>
              </div>
            </Carousel.Item>
            

            <Carousel.Item>
              <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '400px' }}>
                <div 
                  onClick={handleClickNFIB}
                  style={{
                    color: 'white',
                    background: 'linear-gradient(90deg, #3672FF 0%, #0046EA 100%)',
                    boxShadow: '0 2px 20px 0 #0046EA',
                    padding: '4rem 5rem',
                    cursor: 'pointer',
                    outline: '1.5px solid transparent',
                    transition: 'all 0.5s ease',
                    width: '100%',
                    maxWidth: '500px'
                  }}
                  className="rounded-4 text-center"
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'black';
                    e.currentTarget.style.outline = '1.5px solid #0046EA';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'linear-gradient(90deg, #3672FF 0%, #0046EA 100%)';
                    e.currentTarget.style.outline = '1.5px solid transparent';
                  }}
                >
                  <h1 className="mb-4">🌟 NFIB 🌟</h1>
                  <h5>Freelance Project</h5>
                </div>
              </div>
            </Carousel.Item>

          </Carousel>
        </div>
      </div>
    
    <div className="d-flex justify-content-center align-items-center"></div>
    <h3 className="text-center" style={{color: "white"}}>More projects will be added soon!</h3>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
        </>
    )
};

export default ProjectsPage;