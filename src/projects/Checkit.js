import { useEffect, useRef } from "react";
import { Container, Row, Col, Card, Badge } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import checkit from "../images/checkit-app.JPG"
import useHeroParticles from "../hooks/useHeroParticles";

import backToTop from "../images/arrow-up.png"

const CheckIt = () => {

  useEffect(() => {
    document.title = "CheckIt App"
}, []);

    const canvasRef = useRef(null);
    useHeroParticles(canvasRef);

    return (
        <>
        <div style={{ margin: '6rem 0' }} />
        <canvas ref={canvasRef} id="hero-particles" className="hero-particles-canvas" />
        
        <Container className="py-5 project-page">
            <Row className="mb-5">
                <Col>
                    <h1 
                        className="text-center text-white mb-4" 
                        style={{ 
                            fontFamily: 'Open Sans, sans-serif',
                            fontSize: 'clamp(2.5rem, 5vw, 3.8rem)'
                        }}
                    >
                        <a 
                            href="https://github.com/williamnamamnath/checkit-app" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-white text-decoration-none"
                            style={{ 
                                transition: 'all 0.3s ease',
                            }}
                            onMouseEnter={(e) => e.target.style.color = '#3672FF'}
                            onMouseLeave={(e) => e.target.style.color = 'white'}
                        >
                            CheckIt
                        </a>
                    </h1>
                    <div className="text-center mb-4">
                        <Badge bg="primary" className="me-2 fs-6 px-3 py-2">Beginner Project</Badge>
                        <Badge bg="info" className="fs-6 px-3 py-2">TypeScript</Badge>
                    </div>
                </Col>
            </Row>

            <Row className="mb-5">
                <Col lg={10} className="mx-auto">
                    <a 
                        href="https://github.com/williamnamamnath/checkit-app" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="d-block"
                    >
                        <img 
                            src={checkit} 
                            alt="CheckIt Application" 
                            className="img-fluid rounded-4 w-100"
                            style={{ 
                                boxShadow: '0 4px 30px rgba(0, 70, 234, 0.4)',
                                transition: 'transform 0.3s ease',
                                cursor: 'pointer'
                            }}
                        />
                    </a>
                </Col>
            </Row>

            <Row className="mb-5">
                <Col lg={10} className="mx-auto">
                    <Card 
                        className="border-0 rounded-4" 
                        style={{ 
                            background: 'rgba(255, 255, 255, 0.05)',
                            backdropFilter: 'blur(10px)',
                            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)'
                        }}
                    >
                        <Card.Body className="p-4 p-md-5">
                            <h2 className="text-white text-center mb-4 pb-3 border-bottom border-primary">
                                What is CheckIt?
                            </h2>
                            <p className="text-white fs-5 lh-lg">
                                The CheckIt app is a project with a keen focus on Typescript, engineered to apply my Typescript skills from a beginner level. CheckIt is a to-do app that allows users to enter items to complete, to check them off or delete them, and they may also clear the whole list of tasks if need be.
                            </p>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            <Row className="mb-5">
                <Col lg={10} className="mx-auto">
                    <Card 
                        className="border-0 rounded-4" 
                        style={{ 
                            background: 'rgba(255, 255, 255, 0.05)',
                            backdropFilter: 'blur(10px)',
                            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)'
                        }}
                    >
                        <Card.Body className="p-4 p-md-5">
                            <h3 className="text-white mb-4 fs-2">📋 Key Responsibilities:</h3>
                            <ul className="text-white fs-5 lh-lg" style={{ listStyleType: 'none', paddingLeft: 0 }}>
                                <li className="mb-3">
                                    <span className="me-2">✓</span>
                                    Designed a straightforward layout for the app to provide users the smoothest experience.
                                </li>
                                <li className="mb-3">
                                    <span className="me-2">✓</span>
                                    Created loading, saving and deleting functions in order to present users with their up-to-date list of tasks.
                                </li>
                            </ul>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            <Row className="mb-5">
                <Col lg={10} className="mx-auto">
                    <Card 
                        className="border-0 rounded-4" 
                        style={{ 
                            background: 'linear-gradient(135deg, rgba(54, 114, 255, 0.1) 0%, rgba(0, 70, 234, 0.2) 100%)',
                            backdropFilter: 'blur(10px)',
                            boxShadow: '0 4px 30px rgba(54, 114, 255, 0.3)'
                        }}
                    >
                        <Card.Body className="p-4 p-md-5">
                            <h2 className="text-white text-center mb-5 pb-2 border-bottom border-primary">
                                💻 Technologies Used
                            </h2>
                            <Row className="g-4 justify-content-center text-center">
                                <Col xs={6} md={4}>
                                    <i 
                                        className="devicon-html5-plain-wordmark colored" 
                                        style={{ fontSize: 'clamp(4rem, 8vw, 8rem)' }}
                                    ></i>
                                </Col>
                                <Col xs={6} md={4}>
                                    <i 
                                        className="devicon-css3-plain-wordmark colored" 
                                        style={{ fontSize: 'clamp(4rem, 8vw, 8rem)' }}
                                    ></i>
                                </Col>
                                <Col xs={6} md={4}>
                                    <i 
                                        className="devicon-typescript-plain colored" 
                                        style={{ fontSize: 'clamp(4rem, 8vw, 8rem)' }}
                                    ></i>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            <Row>
                <Col className="text-center">
                    <a href="/checkit">
                        <img 
                            src={backToTop} 
                            alt="Back to top" 
                            style={{ 
                                width: '50px',
                                transition: 'transform 0.3s ease',
                                cursor: 'pointer'
                            }}
                            onMouseEnter={(e) => e.target.style.transform = 'translateY(-10px)'}
                            onMouseLeave={(e) => e.target.style.transform = 'translateY(0)'}
                        />
                    </a>
                </Col>
            </Row>
        </Container>
        </>
    )
}

export default CheckIt;