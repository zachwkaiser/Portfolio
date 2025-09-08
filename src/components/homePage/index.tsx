import { Button, Container, Row, Col } from "react-bootstrap";
import './style.css'
import { useEffect, useRef } from "react";
import { Linkedin, Github, Envelope } from 'react-bootstrap-icons';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faGears } from '@fortawesome/free-solid-svg-icons';
import headshot from '../../images/headshot.JPG'
import { animate } from 'animejs';
import { Link as ScrollLink } from 'react-scroll';


function HomePage(){

    const nameRef = useRef<HTMLHeadingElement | null>(null);

    const containerVariants = {
        hidden: {},
        visible: {
          transition: {
            staggerChildren: 0.2,
          },
        },
      };
      
      const iconVariants = {
        hidden: { opacity: 0, x: -25 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } },
      };

    useEffect(() => {
        const nameEl = nameRef.current;
        if (!nameEl) return;

        document.title = "Zach Kaiser - Software Engineering Student";

        const onMouseEnter = () => {
            animate(nameEl, {
                //whatever animations i want go here
            });
        }
        
        nameEl.addEventListener("mouseenter", onMouseEnter);


    },[]);
    
    
    
    return(
        <div style={{minHeight: '100vh', display: 'flex', flexDirection: 'column'}}>
            <Container fluid className="hero-section">
                <Row>
                    <Col xs={{ span: 12, order: 3 }} md={{ span: 1, order: 1 }} className="socials">
                        <motion.div 
                            variants={containerVariants} 
                            initial="hidden" 
                            animate="visible"
                            className="social-container d-flex flex-row flex-md-column align-items-center gap-3"
                        >
                            <motion.a 
                                href="mailto:zachwkaiser@gmail.com"
                                variants={iconVariants}
                                whileHover={{ scale: 1.2 }}
                                transition={{ type: "spring", stiffness: 300 }}
                                className="contact"
                            >
                                <Envelope color="white" size={40} />
                            </motion.a>
                            <motion.a 
                                href="https://www.linkedin.com/in/zachwkaiser/"
                                target="_blank"
                                rel="noopener noreferrer"
                                variants={iconVariants}
                                whileHover={{ scale: 1.2 }}
                                transition={{ type: "spring", stiffness: 300 }}
                                className="contact"
                            >
                                <Linkedin color="white" size={40} />
                            </motion.a>
                            <motion.a 
                                href="https://github.com/zachwkaiser"
                                target="_blank"
                                rel="noopener noreferrer"
                                variants={iconVariants}
                                whileHover={{ scale: 1.2 }}
                                transition={{ type: "spring", stiffness: 300 }}
                                className="contact"
                            >
                                <Github color="white" size={40} />
                            </motion.a>
                        </motion.div>
                    </Col>
                    <Col xs={{ span: 12, order: 1 }} md={{ span: 6, order: 2 }} className="hero-content">
                        <motion.div
                            initial={{ opacity: 0, y: -50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.95 }}
                        >
                            <h2 className="title ms-3 mb-3">Hi. My name is,</h2>
                            <h1 className="name" ref={nameRef}>Zach Kaiser</h1>
                            <h3 className="studentText">Software Engineering Student</h3>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <p className="summary">
                                Motivated Software Engineering student with a passion for designing software solutions. 
                                Looking to learn new skills every day!
                            </p>
                            <div className="button-section d-flex justify-content-center gap-3 flex-wrap">
                                <motion.div whileHover={{scale: 1.1}}>
                                    <ScrollLink to="Contact" smooth spy duration={500}>
                                        <Button className="contact-button" variant="outline-primary">
                                            <FontAwesomeIcon icon={faGears} /> Contact me
                                        </Button>
                                    </ScrollLink>
                                </motion.div>
                                <motion.div whileHover={{scale: 1.1}}>
                                    <ScrollLink to="Projects" smooth spy duration={500}>
                                        <Button className="projects-button" variant="outline-primary">
                                            <FontAwesomeIcon icon={faCode} /> View my work
                                        </Button>
                                    </ScrollLink>
                                </motion.div>
                            </div>
                        </motion.div>
                    </Col>
                    <Col xs={{ span: 12, order: 2 }} md={{ span: 4, order: 3 }} lg={{ span: 5, order: 3 }}>
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: .75 }}
                            className="headshot"
                        >
                            <img src={headshot} alt="My Headshot" className="headshot-img"/>
                        </motion.div>
                    </Col>
                </Row>
            </Container>
            {/* Blue divider at the bottom of home page */}
            <div className="home-divider" style={{marginTop: 'auto'}}>
                <div className="divider-line"></div>
            </div>
        </div>
    );
}

export default HomePage;