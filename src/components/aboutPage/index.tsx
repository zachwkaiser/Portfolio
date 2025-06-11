import { motion, scale } from 'framer-motion';
import { Button, Container, Row, Col } from "react-bootstrap";
import {
    PythonOriginal,
    JavaOriginal,
    TypescriptOriginal,
    JavascriptOriginal,
    Html5Original,
    Css3Original,
    ReactOriginal,
} from 'devicons-react';


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
    
    return(
        <Container className="skillset-section">
                <Row >
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
                            <div className="tech-icon-title">{key}</div>
                            <div className="tech-icon">
                                {Technologies[key]}
                            </div>
                        </motion.div>
                    ))}
                </Row>
            </Container>
    )
}

export default AboutPage;