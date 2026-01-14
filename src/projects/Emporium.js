import { useEffect } from "react";
import { Container, Row, Col, Card, Badge } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import projectEmporium from "../images/Emporium-home-page.JPG";
import backToTop from "../images/arrow-up.png"

const Emporium = () => {

  useEffect(() => {
    document.title = "Project E-Wear Emporium"
}, []);

    return (
        <>
        <div style={{ margin: '6rem 0' }} />
        
        <Container className="py-5">
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
                            href="https://github.com/williamnamamnath/project-GROUP-e-commerce" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-white text-decoration-none"
                            style={{ 
                                transition: 'all 0.3s ease',
                            }}
                            onMouseEnter={(e) => e.target.style.color = '#3672FF'}
                            onMouseLeave={(e) => e.target.style.color = 'white'}
                        >
                            E-Wear Emporium
                        </a>
                    </h1>
                    <div className="text-center mb-4">
                        <Badge bg="primary" className="me-2 fs-6 px-3 py-2">Team Project</Badge>
                        <Badge bg="info" className="fs-6 px-3 py-2">E-Commerce</Badge>
                    </div>
                </Col>
            </Row>

            <Row className="mb-5">
                <Col lg={10} className="mx-auto">
                    <a 
                        href="https://github.com/williamnamamnath/project-GROUP-e-commerce" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="d-block"
                    >
                        <img 
                            src={projectEmporium} 
                            alt="E-Wear Emporium Application" 
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
                                What is E-Wear Emporium?
                            </h2>
                            <p className="text-white fs-5 lh-lg">
                                Project E-Wear Emporium is a group project, with tasks divided between 4 team members. The objective of this e-commerce website is to display fitness products.
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
                                    Collaborated on a group project to create a full-stack e-commerce application using the MERN stack
                                </li>
                                <li className="mb-3">
                                    <span className="me-2">✓</span>
                                    Orchestrated the general layout for the frontend:
                                    <ul className="mt-2 ms-4" style={{ listStyleType: 'circle' }}>
                                        <li className="mb-2">Created the brand name of our website</li>
                                        <li>Proposed the current design of E-Wear Emporium</li>
                                    </ul>
                                </li>
                                <li className="mb-3">
                                    <span className="me-2">✓</span>
                                    Created the customer service pages to look as authentic to a real brand as possible
                                </li>
                                <li className="mb-3">
                                    <span className="me-2">✓</span>
                                    Implemented authentication and authorization features to ensure secure access to family accounts and data privacy
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
                                        className="devicon-javascript-plain colored" 
                                        style={{ fontSize: 'clamp(4rem, 8vw, 8rem)' }}
                                    ></i>
                                </Col>
                                <Col xs={6} md={4}>
                                    <i 
                                        className="devicon-react-original-wordmark colored" 
                                        style={{ fontSize: 'clamp(4rem, 8vw, 8rem)' }}
                                    ></i>
                                </Col>
                                <Col xs={6} md={4}>
                                    <i 
                                        className="devicon-mongodb-plain-wordmark colored" 
                                        style={{ fontSize: 'clamp(4rem, 8vw, 8rem)' }}
                                    ></i>
                                </Col>
                                <Col xs={6} md={4}>
                                    <i 
                                        className="devicon-nodejs-plain-wordmark colored" 
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
                    <a href="/emporium">
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

export default Emporium;