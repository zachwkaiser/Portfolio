import { motion, scale } from 'framer-motion';
import { Button, Container, Row, Col, Modal, Overlay, Tooltip, OverlayTrigger } from "react-bootstrap";
import {
    PythonOriginal,
    JavaOriginal,
    TypescriptOriginal,
    JavascriptOriginal,
    Html5Original,
    Css3Original,
    ReactOriginal,
} from 'devicons-react';
import './style.css';
import { useState } from 'react';


function AboutPage(){
    const Technologies : { [key: string] : React.ReactNode} = {
        "Python": <PythonOriginal size="3em"/>,
        "Java": <JavaOriginal size="3em"/>,
        "HTML": <Html5Original size="3em"/>,
        "CSS": <Css3Original size="3em"/>,
        "JavaScript": <JavascriptOriginal size="3em"/>,
        "TypeScript": <TypescriptOriginal size="3em"/>,
        "React": <ReactOriginal size="3em"/>
    };

    // const renderTooltip = (props: string) =>{
    //     <Tooltip id='icon-tooltip' {...props}>
    //         {...props}
    //     </Tooltip>
    // }
    
    const [showModal, setShowModal] = useState(false);
    const handleClose = () => setShowModal(false);
    const handleOpen = () => setShowModal(true);

    return(
        <>
        <motion.div className='about-summary'>
            <h1>About Me</h1>
            <p>Current full-time software engineering student at the University of North Carolina Wilmington. I am seeking a internship where I can apply my knowledge and passion for desiging software!</p>
        </motion.div>

        <Container className='school-section'>
            <div className='school-card'>
                <h2>Freshman Year</h2>
                <p>Learned the fundaments of programming through some of the introductory classes in the computer science program through UNCW.</p>
                <Button className='school-button' onClick={handleOpen}>
                    Learn More
                </Button>

                <Modal show={showModal} onHide={handleClose} dialogClassName="custom-modal" size="lg">
                    <Modal.Dialog>
                        <Modal.Header closeButton>
                            <Modal.Title className='modal-title'>
                                Overview of Freshman Year
                            </Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <section className='modal-text'>
                                <h2>First-Year Computer Science Experience at UNCW</h2>

                                <p className='modal-text'>During my first year at UNCW, I gained foundational knowledge in computer science through several core courses:</p>

                                <h3>📘 CSC 131 – Introduction to Computer Science</h3>
                                <ul>
                                    <li className='modal-text'>Learned basic programming concepts</li>
                                    <li className='modal-text'>Used Python for the first time</li>
                                    <li className='modal-text'>Translated algorithms into working code</li>
                                </ul>

                                <h3>📐 CSC 133 – Discrete Mathematical Structures</h3>
                                <ul>
                                    <li className='modal-text'>Explored key mathematical foundations of computer science</li>
                                    <li className='modal-text'>Studied logic, proofs, and theoretical concepts</li>
                                </ul>

                                <h3>🔁 CSC 231 – Data Structures and Algorithms</h3>
                                <ul>
                                    <li className='modal-text'>Introduced to object-oriented programming using Python</li>
                                    <li className='modal-text'>Worked with data structures like:
                                    <ul>
                                        <li className='modal-text'>Stacks</li>
                                        <li className='modal-text'>Queues</li>
                                        <li className='modal-text'>Linked lists & doubly linked lists</li>
                                        <li className='modal-text'>Trees</li>
                                    </ul>
                                    </li>
                                    <li className='modal-text'>Gained confidence and deeper interest in programming</li>
                                </ul>
                            </section>
                        </Modal.Body>
                    
                    </Modal.Dialog>
                </Modal>
            </div>
        </Container>

        <Container className="skillset-section" style={{height: '100vh', width: '100vw'}}>
                <Row>
                    <span>Technical Skillset</span>
                    {Object.keys(Technologies).map((key, index) => (
                        //key, index is basically a 3 tiered process.
                        //basically, key is the first part of the pair. for example, zach: is cool.
                        //zach is the key. Index, is literally just the index. if that was the first item in the
                        //variable, then the index would be 0. then, technologies[key] is the same as the "is cool"
                        <motion.div 
                            key={index}
                            whileHover={{ scale: 1.05 }}
                            transition={{ delay: 0.1, duration: 0.2, ease: "easeInOut" }}
                        >
                            <div className="tech-icon">
                                {/* <OverlayTrigger
                                    placement='top'
                                    delay={{ show: 250, hide: 400 }}
                                    overlay={renderTooltip}
                                >
                                    {Technologies[key]}
                                </OverlayTrigger> */}
                            </div>
                        </motion.div>
                    ))}
                </Row>
            </Container>
        </>
    )
}

export default AboutPage;