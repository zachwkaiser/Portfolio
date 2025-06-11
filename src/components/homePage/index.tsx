import { Button, Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import './style.css'
import { useEffect, useRef } from "react";
import { Linkedin, Github, Envelope } from 'react-bootstrap-icons';
import { motion, scale } from 'framer-motion';
import headshot from '../../images/headshot.JPG'
import { animate } from 'animejs';


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
        <div>
            <Container className="hero-section">
                <div className="content-wrapper">
                    <div className="hero-content">
                        <motion.div
                            initial={{ opacity: 0, y: -50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.95 }}
                        >
                            <h2 className="title">Hi. My name is,</h2>
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
                            <Row className="button-section">
                                <Col className="contact-col" xs="auto">
                                    <motion.div whileHover={{scale: 1.1}}>
                                        <Button className="contact-button" variant="outline-primary">
                                            <Link to='/contact'>Contact me</Link>
                                        </Button>
                                    </motion.div>
                                </Col>
                                <Col className="projects-col" xs="auto">
                                    <motion.div whileHover={{scale: 1.1}}>
                                        <Button className="projects-button" variant="outline-primary">
                                            <Link to='/projects'>View my work</Link>
                                        </Button>
                                    </motion.div>
                                </Col>
                            </Row>
                        </motion.div>
                    </div>
                    <div className="socials">
                        <motion.div 
                        variants={containerVariants} 
                        initial="hidden" 
                        animate="visible"
                        className="social-container"
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
                    </div>
                </div>
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: .75 }}
                    className="headshot"
                >
                    <img src={headshot} alt="My Headshot" className="headshot-img"/>
                </motion.div>
            </Container>
        </div>
    );
}

export default HomePage;