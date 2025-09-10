import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useRef } from 'react';
import emailjs from "emailjs-com";
import './style.css';

function ContactPage(){

    const formRef = useRef<HTMLFormElement>(null);

    const sendEmail = (e: React.FormEvent) => {
        e.preventDefault();

        if (formRef.current) {
        emailjs
            .sendForm(
            "service_0uo1glq",
            "template_48pntug",
            formRef.current,
            "6_rxWHrdIfPfRTNEW"
            )
            .then(() => alert("Email sent!"))
            .catch((err) => console.error(err));
        }
    };
    return(
        <div style={{height: '100vh', width: '100vw'}}>
            <div className='contact-container'>
                <div className='contact-text'>
                    <h1>Contact Me</h1>
                    <p>I am currently open to new opportunities. Please feel free to reach out!</p>
                </div>

                <div className='form-div'>
                <Form ref={formRef} onSubmit={sendEmail}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" name="email" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicSubject">
                        <Form.Label>Subject</Form.Label>
                        <Form.Control type="text" placeholder="Subject" name="subject" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicMessage">
                        <Form.Label>Message</Form.Label>
                        <Form.Control as="textarea" rows={4} placeholder="Your message here..." name="message" />
                    </Form.Group>
                    
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
                </div>
            </div>
        </div>
    )
}

export default ContactPage;