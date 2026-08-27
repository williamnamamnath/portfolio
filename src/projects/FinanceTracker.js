import { useEffect } from "react";
import { Container, Row, Col, Card, Badge } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import financeTrackerHome from "../images/financetracker-home.png";
import backToTop from "../images/arrow-up.png";

const FinanceTracker = () => {

  useEffect(() => {
    document.title = "FinanceTracker"
}, []);

    return (
        <>
        <div style={{ margin: '6rem 0' }} />
        
        <Container className="py-5 project-page">
            <Row className="mb-5">
                <Col>
                    <h1 
                        className="project-title text-center text-white mb-4" 
                        style={{ 
                            fontFamily: 'Open Sans, sans-serif',
                            fontSize: 'clamp(2.5rem, 5vw, 3.8rem)'
                        }}
                    >
                        <a 
                            href="https://github.com/williamnamamnath/finance-tracker" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-white text-decoration-none"
                            style={{ 
                                transition: 'all 0.3s ease',
                            }}
                            onMouseEnter={(e) => e.target.style.color = '#3672FF'}
                            onMouseLeave={(e) => e.target.style.color = 'white'}
                        >
                            FinanceTracker
                        </a>
                    </h1>
                    <div className="text-center mb-4">
                        <Badge bg="primary" className="me-2 fs-6 px-3 py-2">Full-Stack Project</Badge>
                    </div>
                </Col>
            </Row>

            <Row className="mb-5">
                <Col lg={10} className="mx-auto">
                    <a 
                        href="https://github.com/williamnamamnath/finance-tracker" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="d-block"
                    >
                        <img 
                            src={financeTrackerHome} 
                            alt="Finance Tracker Application"
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
                                What is FinanceTracker?
                            </h2>
                            <p className="text-white fs-5 mb-4 lh-lg">
                                FinanceTracker is a full-stack project built. The purpose of this application is to help users manage their personal finances effectively. Users can track their income, expenses, and savings, and get insights into their financial habits with the help of visual representations of that data.
                            </p>
                            <p className="text-white fs-5 lh-lg">
                                Managing personal finances is crucial for achieving financial stability, so I wanted to create a resource that is accessible and easy to use, a platform that I would also use myself.
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
                                    Fullstack budget app that allows users to enter their income and expenses in order to plan their budget appropriately.
                                </li>
                                <li className="mb-3">
                                    <span className="me-2">✓</span>
                                    Simple UI and UX for seamless use and navigation.
                                </li>
                                <li className="mb-3">
                                    <span className="me-2">✓</span>
                                    Use of a database via Supabase for secure data storage and handling. 
                                </li>
                                <li className="mb-3">
                                    <span className="me-2">✓</span>
                                    User authentication required for secure access to website features. 
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
                                <Col xs={6} md={4}>
                                    <i 
                                        className="devicon-react-original-wordmark colored" 
                                        style={{ fontSize: 'clamp(4rem, 8vw, 8rem)' }}
                                    ></i>
                                </Col>
                                <Col xs={6} md={4}>
                                    <i 
                                        className="devicon-supabase-plain colored" 
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
                    <button
                        className="back-to-top-btn"
                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                        aria-label="Back to top"
                    >
                        <img src={backToTop} alt="Back to top" className="back-to-top-img" />
                    </button>
                </Col>
            </Row>
        </Container>
        </>
    )
}

export default FinanceTracker;