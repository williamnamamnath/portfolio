import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

const ProjectsPage = () => {

    useEffect(() => {
        document.title = "My Projects"
    }, []);

    const navigate = useNavigate();

    const handleClickNFIB = () => {
        navigate('/nfib'); 
      };

      const handleClickNutrissence = () => {
        navigate('/nutrissence'); 
      };

      const handleClickEmporium = () => {
        navigate('/emporium'); 
      };

      const handleClickCheckIt = () => {
        navigate('/checkit'); 
      };
    
    return (
      <>
      <div style={{ margin: '6rem 0' }} />
      <h1 className="text-center text-white" style={{ fontFamily: 'Open Sans, sans-serif' }}>My Projects 💻</h1>   

      <div className="d-flex flex-wrap justify-content-center align-items-center gap-4 text-dark rounded-5 my-5 p-5">

      <Button 
        onClick={handleClickCheckIt}
        style={{
          color: 'white',
          background: 'linear-gradient(90deg, #3672FF 0%, #0046EA 100%)',
          boxShadow: '0 2px 20px 0 #0046EA',
          padding: '2rem 3.6rem 2.4rem 3.6rem',
          margin: '2rem',
          outline: '1.5px solid transparent',
          transition: 'all 0.5s ease',
          maxWidth: '18rem',
          maxHeight: '12rem'
        }}
        className="d-block rounded-4"
        onMouseEnter={(e) => {
          e.target.style.background = 'black';
          e.target.style.outline = '1.5px solid #0046EA';
        }}
        onMouseLeave={(e) => {
          e.target.style.background = 'linear-gradient(90deg, #3672FF 0%, #0046EA 100%)';
          e.target.style.outline = '1.5px solid transparent';
        }}
      >
        <h2 className="text-center">🌟  <span>CheckIt</span>🌟</h2>
        <h6 className="mt-3">Beginner Typescript Project</h6>
      </Button>


      <Button 
        onClick={handleClickNFIB}
        style={{
          color: 'white',
          background: 'linear-gradient(90deg, #3672FF 0%, #0046EA 100%)',
          boxShadow: '0 2px 20px 0 #0046EA',
          padding: '2rem 3.6rem 2.4rem 3.6rem',
          margin: '2rem',
          outline: '1.5px solid transparent',
          transition: 'all 0.5s ease',
          maxWidth: '18rem',
          maxHeight: '12rem'
        }}
        className="d-block rounded-4"
        onMouseEnter={(e) => {
          e.target.style.background = 'black';
          e.target.style.outline = '1.5px solid #0046EA';
        }}
        onMouseLeave={(e) => {
          e.target.style.background = 'linear-gradient(90deg, #3672FF 0%, #0046EA 100%)';
          e.target.style.outline = '1.5px solid transparent';
        }}
      >
        <h2 className="text-center">🌟  <span>NFIB</span>🌟</h2>
        <h6 className="mt-3">Freelance Project</h6>
      </Button>


      <Button 
        onClick={handleClickNutrissence}
        style={{
          color: 'white',
          background: 'linear-gradient(90deg, #3672FF 0%, #0046EA 100%)',
          boxShadow: '0 2px 20px 0 #0046EA',
          padding: '2rem 3.6rem 2.4rem 3.6rem',
          margin: '2rem',
          outline: '1.5px solid transparent',
          transition: 'all 0.5s ease',
          maxWidth: '18rem',
          maxHeight: '12rem'
        }}
        className="d-block rounded-4"
        onMouseEnter={(e) => {
          e.target.style.background = 'black';
          e.target.style.outline = '1.5px solid #0046EA';
        }}
        onMouseLeave={(e) => {
          e.target.style.background = 'linear-gradient(90deg, #3672FF 0%, #0046EA 100%)';
          e.target.style.outline = '1.5px solid transparent';
        }}
      >
        <h2 className="text-center">🌟  <span>Nutrissence</span>🌟</h2>
        <h6 className="mt-3">Personal Project</h6>
      </Button>


      <Button 
        onClick={handleClickEmporium}
        style={{
          color: 'white',
          background: 'linear-gradient(90deg, #3672FF 0%, #0046EA 100%)',
          boxShadow: '0 2px 20px 0 #0046EA',
          padding: '2rem 3.6rem 2.4rem 3.6rem',
          margin: '2rem',
          outline: '1.5px solid transparent',
          transition: 'all 0.5s ease',
          maxWidth: '18rem',
          maxHeight: '12rem'
        }}
        className="d-block rounded-4"
        onMouseEnter={(e) => {
          e.target.style.background = 'black';
          e.target.style.outline = '1.5px solid #0046EA';
        }}
        onMouseLeave={(e) => {
          e.target.style.background = 'linear-gradient(90deg, #3672FF 0%, #0046EA 100%)';
          e.target.style.outline = '1.5px solid transparent';
        }}
      >
        <h2 className="text-center">🌟  <span>E-Wear Emporium</span>🌟</h2>
        <h6 className="mt-3">Team Project</h6>
      </Button>
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