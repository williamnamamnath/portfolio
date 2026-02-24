import { useEffect, useState } from "react";
import { Tab, Nav, Container, Row, Col, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


const Experience = () => {
    const [key, setKey] = useState('experience');

    useEffect(() => {
        document.title = "My Experience and Education"
    }, []);

    return (
        <>
        <div style={{ margin: '6rem 0 0 0' }} />
        <h1 className="text-center text-white mb-5" style={{ fontFamily: 'Open Sans, sans-serif' }}>
            My Academic and Professional Experience 
        </h1>
        <Container className="pt-5">
            
            <Tab.Container activeKey={key} onSelect={(k) => setKey(k)}>
                <Row className="justify-content-center mb-2">
                    <Col lg={8} md={10}>
                        <Nav variant="pills" className="justify-content-center gap-3">
                                    <Nav.Item>
                                        <Nav.Link 
                                            eventKey="education"
                                            style={{
                                                padding: '1rem 2.5rem',
                                                borderRadius: '50px',
                                                background: key === 'education' ? 'linear-gradient(90deg, #3672FF 0%, #0046EA 100%)' : 'transparent',
                                                color: key === 'education' ? 'white' : '#3672FF',
                                                border: key === 'education' ? 'none' : '2px solid #3672FF',
                                                fontWeight: '600',
                                                transition: 'all 0.3s ease'
                                            }}
                                            onMouseEnter={(e) => {
                                                if (key !== 'education') {
                                                    e.target.style.background = 'rgba(54, 114, 255, 0.1)';
                                                }
                                            }}
                                            onMouseLeave={(e) => {
                                                if (key !== 'education') {
                                                    e.target.style.background = 'transparent';
                                                }
                                            }}
                                        >
                                            🎓 Education
                                        </Nav.Link>
                                    </Nav.Item>
                            <Nav.Item>
                                <Nav.Link 
                                    eventKey="experience"
                                    style={{
                                        padding: '1rem 2.5rem',
                                        borderRadius: '50px',
                                        background: key === 'experience' ? 'linear-gradient(90deg, #3672FF 0%, #0046EA 100%)' : 'transparent',
                                        color: key === 'experience' ? 'white' : '#3672FF',
                                        border: key === 'experience' ? 'none' : '2px solid #3672FF',
                                        fontWeight: '600',
                                        transition: 'all 0.3s ease'
                                    }}
                                    onMouseEnter={(e) => {
                                        if (key !== 'experience') {
                                            e.target.style.background = 'rgba(54, 114, 255, 0.1)';
                                        }
                                    }}
                                    onMouseLeave={(e) => {
                                        if (key !== 'experience') {
                                            e.target.style.background = 'transparent';
                                        }
                                    }}
                                >
                                    💼 Professional Experience
                                </Nav.Link>
                            </Nav.Item>
                            
                        </Nav>
                    </Col>
                </Row>

                <Row className="justify-content-center">
                    <Col lg={10} md={12}>
                        <Tab.Content>
                            <Tab.Pane eventKey="experience">
                                <Card 
                                    className="m-4 mt-5" 
                                    style={{ 
                                        backgroundImage: 'linear-gradient(-20deg, #2b5876 0%, #4e4376 100%)',
                                        border: 'none',
                                        borderRadius: '20px',
                                        boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)',
                                        animation: 'fadeIn 0.5s ease-in'
                                    }}
                                >
                                    <Card.Body className="p-5 my-3 experience-card-body">
                                        <div className="d-flex align-items-center my-4">
                                            <div>
                                                <h3 className="mb-1 text-white" style={{ fontWeight: '700' }}>Freelance Web Developer</h3>
                                                <p className="mb-0 text-white" style={{ opacity: 0.9 }}>
                                                    <p>July 2024 - Present</p>
                                                </p>
                                            </div>
                                        </div>
                                        <hr style={{ color: 'whitesmoke' }}/>
                                        <div className="text-white mt-5" style={{ lineHeight: '1.8' }}>
                                            <p className="mb-3">
                                                Creating a comprehensive website for a subdivision of the medical genetics department at the Montreal University Health Centre
                                            </p>
                                            <ul style={{ paddingLeft: '1.5rem' }}>
                                                <li>Developing custom web solutions for medical research presentation</li>
                                                <li>Collaborating with medical professionals to translate complex genetics information into accessible web content</li>
                                                <li>Implementing responsive design for optimal viewing across all devices</li>
                                            </ul>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Tab.Pane>

                            <Tab.Pane eventKey="education">
                                <Card 
                                    className="m-4 mt-5" 
                                    style={{ 
                                        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                                        border: 'none',
                                        borderRadius: '20px',
                                        boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)',
                                        animation: 'fadeIn 0.5s ease-in'
                                    }}
                                >
                                    <Card.Body className="p-5 my-3 education-card-body">
                                        <div className="d-flex align-items-center my-4">
                                            <div>
                                                <h3 className="mb-1 text-white" style={{ fontWeight: '700' }}>Web Development Certificate</h3>
                                                <p className="text-white" style={{ opacity: 0.9 }}>
                                                    <strong>Concordia University Bootcamp</strong> | October 2023 - May 2024
                                                </p>
                                            </div>
                                        </div>
                                        <hr style={{ color: 'whitesmoke' }}/>

                                        <div className="text-white mt-5" style={{ lineHeight: '1.8' }}>
                                            <p>Intensive full-stack web development program covering modern technologies and frameworks including the MERN stack, responsive design, and agile development methodologies.</p>
                                        </div>
                                    </Card.Body>
                                </Card>

                                <Card 
                                    className="m-4 mt-5" 
                                    style={{ 
                                        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                                        border: 'none',
                                        borderRadius: '20px',
                                        boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)',
                                        animation: 'fadeIn 0.6s ease-in'
                                    }}
                                >
                                    <Card.Body className="p-5 my-3 education-card-body">
                                        <div className="d-flex align-items-center my-4">
                                            <div>
                                                <h3 className="text-white" style={{ fontWeight: '700' }}>Bachelor of Education</h3>
                                                <p className="text-white" style={{ opacity: 0.9 }}>
                                                    <strong>McGill University</strong> | August 2017 - April 2021
                                                </p>
                                                <p className="mb-2 text-white" style={{ opacity: 0.9 }}>Teaching English as a Second Language (TESL)</p>
                                            </div>
                                        </div>
                                        <hr style={{ color: 'whitesmoke' }}/>
                                        <div className="text-white mt-5" style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
                                            <p className="mb-0" style={{ opacity: 0.9 }}>Developed strong communication, problem-solving, and organizational skills that translate effectively to collaborative software development environments.</p>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Tab.Pane>
                        </Tab.Content>
                    </Col>
                </Row>
            </Tab.Container>
        </Container>
        <div style={{ margin: '2rem 0' }} />
        
        <style>{`
            @keyframes fadeIn {
                from {
                    opacity: 0;
                    transform: translateY(20px);
                }
                to {
                    opacity: 1;
                    transform: translateY(0);
                }
            }
            
            @media (max-width: 768px) {
                .container h1 {
                    font-size: 2.5rem !important;
                }
                .nav-link {
                    font-size: 1rem !important;
                    padding: 0.8rem 1.5rem !important;
                }
                .experience-card-body,
                .education-card-body {
                    padding: 3rem 1.5rem !important;
                    margin: 1.5rem 0 !important;
                }
            }
        `}</style>
        </>
    )
}; 

export default Experience;
