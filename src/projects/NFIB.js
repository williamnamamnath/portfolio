import { useEffect, useRef } from "react";
import { Container, Row, Col, Card, Badge } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
// import projectNFIB from "../images/NFIB-home-page.JPG";
import backToTop from "../images/arrow-up.png"
import useHeroParticles from "../hooks/useHeroParticles";

const NFIB = () => {

  useEffect(() => {
    document.title = "Project NFIB"
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
                        className="text-center text-white mb-3" 
                        style={{ 
                            fontFamily: 'Open Sans, sans-serif',
                            fontSize: 'clamp(2.5rem, 5vw, 3.8rem)'
                        }}
                    >
                        <a 
                            href="https://github.com/williamnamamnath/project-nfib" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-white text-decoration-none"
                            style={{ 
                                transition: 'all 0.3s ease',
                            }}
                            onMouseEnter={(e) => e.target.style.color = '#3672FF'}
                            onMouseLeave={(e) => e.target.style.color = 'white'}
                        >
                            Project NFIB
                        </a>
                    </h1>
                    <h3 className="text-center text-white-50 mb-4">(work in progress)</h3>
                    <div className="text-center mb-4">
                        <Badge bg="primary" className="me-2 fs-6 px-3 py-2">Freelance Project</Badge>
                        <Badge bg="info" className="fs-6 px-3 py-2">Medical</Badge>
                    </div>
                </Col>
            </Row>

            {/* <Row className="mb-5">
                <Col lg={10} className="mx-auto">
                    <a 
                        href="https://github.com/williamnamamnath/project-nfib" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="d-block"
                    >
                        <img 
                            src={projectNFIB} 
                            alt="NFIB Project Application" 
                            className="img-fluid rounded-4 w-100"
                            style={{ 
                                boxShadow: '0 4px 30px rgba(0, 70, 234, 0.4)',
                                transition: 'transform 0.3s ease',
                                cursor: 'pointer'
                            }}
                        />
                    </a>
                </Col>
            </Row> */}

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
                                What is Project NFIB?
                            </h2>
                            <p className="text-white fs-5 mb-4 lh-lg">
                                Project NFIB (neurofibromatosis) is a freelance project that was offered to me by one of the medical geneticists that I work with at the Montreal University Health Centre (MUHC).
                            </p>
                            <p className="text-white fs-5 lh-lg">
                                With this website, visitors will be able to learn more about the NFIB clinic at the MUHC and how to refer patients or family members to the clinic. The purpose of this website is meant to be informational for the public.
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
                                    Frontend-based website with the goal of illustrating the NFIB team at the MUHC and its clinical services.
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
                                        className="devicon-react-original-wordmark colored" 
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
                    <a href="/nfib">
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

export default NFIB;