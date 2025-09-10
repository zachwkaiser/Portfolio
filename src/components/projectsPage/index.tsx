import { motion } from 'framer-motion';
import { Button, Container, Modal, Row, Col } from "react-bootstrap";
import './style.css';
import { useState } from 'react';

function ProjectsPage(){
    const [showModal, setShowModal] = useState(false);
    const handleClose = () => setShowModal(false);
    const handleOpen = () => setShowModal(true);

    const [showModal2, setShowModal2] = useState(false);
    const handleClose2 = () => setShowModal2(false);
    const handleOpen2 = () => setShowModal2(true);

    return(
        <>
        {/* Hero Section */}
        <div className="projects-hero">
            <motion.div className='projects-summary'>
                <h1>My Work</h1>
                <p>Explore my portfolio of projects that demonstrate my technical abilities and growth</p>
            </motion.div>
        </div>

        {/* Projects Section */}
        <div className="projects-section">
            
            <Container className='projects-container'>
                <Row>
                    <Col xs={12} md={4}>
                        <h2 className="section-subtitle">Current Projects</h2>
                        <div className='project-card'>
                            <h2>Personal portfolio website</h2>
                            <p>Self-taught react project showcasing my skills and projects.</p>
                            <Button className='project-button' onClick={handleOpen}>
                                Learn More
                            </Button>

                            <Modal show={showModal} onHide={handleClose} dialogClassName="custom-modal" size="lg">
                                <Modal.Dialog>
                                    <Modal.Header closeButton>
                                        <Modal.Title className='modal-title'>
                                            Overview of Personal Portfolio Website
                                        </Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body>
                                        <section className='modal-text'>
                                            <h2>About</h2>
                                            <p className='modal-text'>This project was a self-taught, summer long project built for showcasing my skills and projects.
                                                I expanded upon my knowledge of HTML, CSS, and JavaScript and learned how to use React to create a responsive website.
                                            </p>
                                            <Row>
                                                <Col xs={12} md={6}>
                                                    <h2>Skills and Technologies Used</h2>
                                                    <li className='modal-text'>Languages and Frameworks:</li>
                                                        <ul>
                                                            <li className='modal-text'>HTML</li>
                                                            <li className='modal-text'>CSS</li>
                                                            <li className='modal-text'>TypeScript</li>
                                                            <li className='modal-text'>React</li>
                                                        </ul>
                                                    <li className='modal-text'>Project planning</li>
                                                    
                                                </Col>
                                                <Col xs={12} md={6}>
                                                    <h2>Purpose</h2>
                                                    <p className='modal-text'>My goal was to combine my skills into an overall project that I can use in the real world.
                                                    I wanted to spend a summer learning a new technology on my own, and thought react would be a great first experience.
                                                    </p>
                                                </Col>
                                            </Row>
                                        </section>
                                    </Modal.Body>
                                
                                </Modal.Dialog>
                            </Modal>
                        </div>
                    </Col>
                    <Col xs={12} md={4}>
                        <h2 className="section-subtitle">Planned Projects</h2>

                        <div className='project-card'>
                            <h2>WiFi Heat Map Project</h2>
                            <p>Uses WiFi data from Raspberry Pi's to generate a heat map of locations of people in a room.</p>
                            <Button className='project-button' onClick={handleOpen2}>
                                Learn More
                            </Button>
                                <Modal show={showModal2} onHide={handleClose2} dialogClassName="custom-modal" size="lg">
                                <Modal.Dialog>
                                    <Modal.Header closeButton>
                                        <Modal.Title className='modal-title'>
                                            WiFi Heat Map Project
                                        </Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body>
                                        <section className='modal-text'>
                                            <h2>About</h2>
                                            <p className='modal-text'>Currently in the early stages of planning, this project will be a semester long team project using Rasperry Pi's to emit WiFi signals to devices in the room. The WiFi data will be used to generate a heat map of locations of people in the room.
                                            </p>
                                            <Row>
                                                <Col xs={12} md={6}>
                                                    <h2>Skills and Technologies Used</h2>
                                                    <ul>
                                                        <li className='modal-text'>Technologies:</li>
                                                            <ul>
                                                                <li className='modal-text'>React framework for frontend</li>
                                                                <li className='modal-text'>Raspberry Pi</li>
                                                            </ul>
                                                        <li className='modal-text'>Project planning</li>
                                                        <li className='modal-text'>Communication with team members</li>
                                                        <li className='modal-text'>User interface design</li>
                                                    </ul>
                                                </Col>
                                                <Col xs={12} md={6}>
                                                    <h2>My role</h2>
                                                    <p className='modal-text'>I will be responsible for the client side of the project, and will be using React to create a web application that will display the heat map.
                                                        I will be responsible for communicating with my team members and ensuring the client meets their needs. We will all be working together to get hands on experience dealing
                                                        with the WiFi endpoint, backend, and frontend.
                                                    </p>
                                                </Col>
                                            </Row>
                                        </section>
                                    </Modal.Body>
                                </Modal.Dialog>
                            </Modal>
                        </div>
                    </Col>
                    <Col xs={12} md={4}>
                        <h2 className="section-subtitle">Past Projects</h2>
                        <div className='project-card placeholder-card'>
                            <h2>Coming Soon</h2>
                            <p>Past projects will be showcased here as they are completed and documented.</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
        </>
    )
}

export default ProjectsPage