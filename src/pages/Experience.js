import { useEffect, useState } from "react";
import { Tab, Nav, Container, Row, Col } from 'react-bootstrap';
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
                                            className={`exp-tab-link ${key === 'education' ? 'exp-tab-link--active' : ''}`}
                                        >
                                            🎓 Education
                                        </Nav.Link>
                                    </Nav.Item>
                            <Nav.Item>
                                <Nav.Link 
                                    eventKey="experience"
                                    className={`exp-tab-link ${key === 'experience' ? 'exp-tab-link--active' : ''}`}
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
                                <div className="timeline">
                                    <div className="timeline-item">
                                        <div className="timeline-dot"></div>
                                        <div className="timeline-card">
                                            <div className="timeline-header">
                                                <h3 className="mb-1 text-white">Freelance Web Developer</h3>
                                                <span className="timeline-date">July 2024 – Present</span>
                                            </div>
                                            <hr className="timeline-divider" />
                                            <div className="text-white timeline-body">
                                                <p className="mb-3">
                                                    Creating a comprehensive website for a subdivision of the medical genetics department at the Montreal University Health Centre.
                                                </p>
                                                <ul className="timeline-list">
                                                    <li>Developing custom web solutions for medical research presentation</li>
                                                    <li>Collaborating with medical professionals to translate complex genetics information into accessible web content</li>
                                                    <li>Implementing responsive design for optimal viewing across all devices</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Tab.Pane>

                            <Tab.Pane eventKey="education">
                                <div className="timeline">
                                    <div className="timeline-item">
                                        <div className="timeline-dot"></div>
                                        <div className="timeline-card">
                                            <div className="timeline-header">
                                                <h3 className="mb-1 text-white">Cybersecurity Certificate</h3>
                                                <span className="timeline-date">July 2026 – Present</span>
                                            </div>
                                            <p className="text-white timeline-institution">Coursera</p>
                                            <hr className="timeline-divider" />
                                            <div className="text-white timeline-body">
                                                <p>Cybersecurity program covering network security, cryptography, ethical hacking, and risk management.</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="timeline-item">
                                        <div className="timeline-dot"></div>
                                        <div className="timeline-card">
                                            <div className="timeline-header">
                                                <h3 className="mb-1 text-white">Web Development Certificate</h3>
                                                <span className="timeline-date">October 2023 – May 2024</span>
                                            </div>
                                            <p className="text-white timeline-institution">Concordia University Bootcamp</p>
                                            <hr className="timeline-divider" />
                                            <div className="text-white timeline-body">
                                                <p>Intensive full-stack web development program covering modern technologies and frameworks including the MERN stack, responsive design, and agile development methodologies.</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="timeline-item">
                                        <div className="timeline-dot"></div>
                                        <div className="timeline-card">
                                            <div className="timeline-header">
                                                <h3 className="mb-1 text-white">Bachelor of Education</h3>
                                                <span className="timeline-date">August 2017 – April 2021</span>
                                            </div>
                                            <p className="text-white timeline-institution">McGill University — Teaching English as a Second Language (TESL)</p>
                                            <hr className="timeline-divider" />
                                            <div className="text-white timeline-body">
                                                <p style={{ opacity: 0.9 }}>Developed strong communication, problem-solving, and organizational skills that translate effectively to collaborative software development environments.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
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

            .exp-tab-link {
                padding: 1rem 2.5rem;
                border-radius: 50px;
                background: transparent;
                color: #3672FF;
                border: 2px solid #3672FF;
                font-weight: 600;
                transition: all 0.3s ease;
            }
            .exp-tab-link:hover:not(.exp-tab-link--active) {
                background: rgba(54, 114, 255, 0.1);
                color: #3672FF;
            }
            .exp-tab-link--active,
            .exp-tab-link.active {
                background: linear-gradient(90deg, #3672FF 0%, #0046EA 100%) !important;
                color: white !important;
                border-color: transparent !important;
            }

            .timeline {
                position: relative;
                padding: 2rem 0;
            }
            .timeline::before {
                content: '';
                position: absolute;
                left: 18px;
                top: 0;
                bottom: 0;
                width: 2px;
                background: linear-gradient(180deg, #3672FF, #0046EA);
                opacity: 0.5;
            }
            .timeline-item {
                position: relative;
                padding-left: 3.5rem;
                margin-bottom: 2.5rem;
                animation: fadeIn 0.5s ease-in;
            }
            .timeline-dot {
                position: absolute;
                left: 8px;
                top: 1.4rem;
                width: 20px;
                height: 20px;
                border-radius: 50%;
                background: linear-gradient(135deg, #3672FF, #0046EA);
                box-shadow: 0 0 0 4px rgba(54, 114, 255, 0.2);
            }
            .timeline-card {
                background: linear-gradient(135deg, rgba(54, 114, 255, 0.1) 0%, rgba(0, 70, 234, 0.18) 100%);
                border: 1px solid rgba(54, 114, 255, 0.2);
                border-radius: 16px;
                padding: 1.8rem 2rem;
                box-shadow: 0 8px 30px rgba(0, 0, 0, 0.25);
                backdrop-filter: blur(8px);
            }
            .timeline-header {
                display: flex;
                justify-content: space-between;
                align-items: flex-start;
                flex-wrap: wrap;
                gap: 0.5rem;
                margin-bottom: 0.25rem;
            }
            .timeline-date {
                color: rgba(255, 255, 255, 0.65);
                font-size: 0.9rem;
                font-weight: 500;
                white-space: nowrap;
            }
            .timeline-institution {
                font-weight: 600;
                font-size: 0.95rem;
                opacity: 0.85;
                margin-bottom: 0.5rem;
            }
            .timeline-divider {
                border-color: rgba(255, 255, 255, 0.15);
                margin: 0.75rem 0 1rem;
            }
            .timeline-body {
                line-height: 1.8;
                font-size: 1rem;
            }
            .timeline-list {
                padding-left: 1.25rem;
                margin: 0;
            }
            .timeline-list li {
                margin-bottom: 0.5rem;
            }

            @media (max-width: 768px) {
                .container h1 {
                    font-size: 2.5rem !important;
                }
                .exp-tab-link {
                    font-size: 1rem !important;
                    padding: 0.8rem 1.5rem !important;
                }
                .timeline-card {
                    padding: 1.25rem 1rem !important;
                }
                .timeline-header {
                    flex-direction: column;
                }
            }
        `}</style>
        </>
    )
}; 

export default Experience;
