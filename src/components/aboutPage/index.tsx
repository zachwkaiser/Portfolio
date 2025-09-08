import { motion } from 'framer-motion';
import { Button, Container, Modal } from "react-bootstrap";
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

    // Removed unused About modal state

    const [showModal, setShowModal] = useState(false);
    const handleClose = () => setShowModal(false);
    const handleOpen = () => setShowModal(true);

    const [showModal2, setShowModal2] = useState(false);
    const handleClose2 = () => setShowModal2(false);
    const handleOpen2 = () => setShowModal2(true);

    const [showModal3, setShowModal3] = useState(false);
    const handleClose3 = () => setShowModal3(false);
    const handleOpen3 = () => setShowModal3(true);

    return(
        <>
        {/* Hero Section with Skills */}
        <div className="about-hero">
            <motion.div className='about-summary'>
                <h1>About Me</h1>
                <p>Current full-time software engineering student at the University of North Carolina Wilmington. I am seeking a internship where I can apply my knowledge and passion for desiging software!</p>
            </motion.div>
            
            <Container className="skillset-section">
                <div className="skills-header">
                    <h2>Technical Skillset</h2>
                </div>
                <div className="skills-grid">
                    {Object.keys(Technologies).map((key, index) => (
                        <motion.div 
                            key={index}
                            whileHover={{ scale: 1.05 }}
                            transition={{ delay: 0.1, duration: 0.2, ease: "easeInOut" }}
                            className="skill-item"
                        >
                            <div className="tech-icon">
                                {Technologies[key]}
                            </div>
                            <div className="tech-name">{key}</div>
                        </motion.div>
                    ))}
                </div>
            </Container>
        </div>

        {/* Education Timeline Section */}
        <div className="education-section">
            <div className="section-header">
                <h2>My Journey</h2>
                <p>Academic progression through my software engineering education</p>
            </div>
            
            <Container className='school-section'>
                <div className='school-card'>
                    <h2>Freshman Year</h2>
                    <p>Learned the fundamentals of programming through some of the introductory classes in the computer science program through UNCW.</p>
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
                <div className='school-card'>
                    <h2>Sophomore Year</h2>
                    <p>Went more in depth with programming, and learned how to use an object oriented approach through Java. Learned the importance of testing code, and how software layout planning works.</p>
                    <Button className='school-button' onClick={handleOpen2}>
                        Learn More
                    </Button>

                    <Modal show={showModal2} onHide={handleClose2} dialogClassName="custom-modal" size="lg">
                        <Modal.Dialog>
                            <Modal.Header closeButton>
                                <Modal.Title className='modal-title'>
                                    Overview of Sophomore Year
                                </Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                            <section className='modal-text'>
                                    <h2>Second-Year Software Engineering Growth at UNCW</h2>

                                    <p className='modal-text'>During my second year at UNCW, I expanded my programming foundation and focused on software development principles, system design, and algorithmic thinking through the following courses:</p>

                                    <h3>🧱 CSC 331 – Object-Oriented Programming</h3>
                                    <ul>
                                        <li className='modal-text'>Worked with Java to build more complex applications</li>
                                        <li className='modal-text'>Gained experience with object-oriented principles:
                                            <ul>
                                                <li className='modal-text'>Encapsulation</li>
                                                <li className='modal-text'>Inheritance</li>
                                                <li className='modal-text'>Polymorphism</li>
                                            </ul>
                                        </li>
                                        <li className='modal-text'>Strengthened code structure and modular thinking</li>
                                    </ul>

                                    <h3>🛠️ SENG 201 – Software Engineering Fundamentals</h3>
                                    <ul>
                                        <li className='modal-text'>Learned to navigate the command line and use Git effectively</li>
                                        <li className='modal-text'>Used GitHub for version control and collaboration</li>
                                        <li className='modal-text'>Practiced writing and testing clean, maintainable code</li>
                                        <li className='modal-text'>Gained insight into scalable software architecture</li>
                                    </ul>

                                    <h3>🧮 CSC 380 – Design and Analysis of Algorithms</h3>
                                    <ul>
                                        <li className='modal-text'>Focused on problem-solving through logical reasoning</li>
                                        <li className='modal-text'>Analyzed algorithmic efficiency and tradeoffs</li>
                                        <li className='modal-text'>Explored different strategies such as divide and conquer, dynamic programming, and greedy algorithms</li>
                                    </ul>

                                    <h3>🧩 SENG 301 – Software Systems Analysis</h3>
                                    <ul>
                                        <li className='modal-text'>Learned to translate customer needs into technical solutions</li>
                                        <li className='modal-text'>Studied architectural patterns like client-server and layered systems</li>
                                        <li className='modal-text'>Worked on modeling software behavior and data flow</li>
                                        <li className='modal-text'>Improved communication and documentation in software planning</li>
                                    </ul>
                                </section>
                            </Modal.Body>
                        </Modal.Dialog>
                    </Modal>
                </div>
                <div className='school-card'>
                    <h2>Junior Year</h2>
                    <p>Currently in my junior year, I am expaning upon the skills I have learned in the past two years, and learning new skills to help me in my future career.</p>
                    <Button className='school-button' onClick={handleOpen3}>
                        Learn More
                    </Button>

                    <Modal show={showModal3} onHide={handleClose3} dialogClassName="custom-modal" size="lg">
                        <Modal.Dialog>
                            <Modal.Header closeButton>
                                <Modal.Title className='modal-title'>
                                    Overview of Junior Year
                                </Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <section className='modal-text'>
                                    <h2>Third-Year Software Engineering Growth at UNCW</h2>

                                    <p className='modal-text'>Currently in my junior year, I am expaning upon the skills I have learned in the past two years, in the following courses:</p>

                                    <h2>Fall 2025 - In Progress</h2>

                                    <h3>💻 SENG 401 – Software Construction</h3>
                                    <h4>Learning Objectives</h4>
                                    <ul>
                                        <li className='modal-text'>Work on a semester long team project, applying the skills I have learned into one product.</li>
                                            <ul>
                                                <li className='modal-text'>Team of 5 people, each responsible for a different part of the project.</li>
                                                <li className='modal-text'>Using Raspberry Pi's to emit WiFi signals to devices in the room. Using the WiFi signals, generate a heat map of locations of people on a given floormap.</li>
                                            </ul>
                                        <li className='modal-text'>Design and implement a cloud-based software system.</li>
                                    </ul>

                                    <h3>💻 SENG 465 – Server-Side Web Development</h3>
                                    <h4>Learning Objectives</h4>
                                    <ul>
                                        <li className='modal-text'>Using PHP to build server-side web applications.</li>
                                        <li className='modal-text'>Learn to use SQL to store data.</li>
                                        <li className='modal-text'>Understanding form processing, and using API's to interact with the server.</li>
                                    </ul>

                                    <h2>Spring 2026 Classes Coming Soon!</h2>
                                </section>
                            </Modal.Body>
                        </Modal.Dialog>
                    </Modal>
                </div>
            </Container>
        </div>
        </>
    )
}

export default AboutPage;