import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './style.css';

function ContactPage(){
    return(
        <div style={{height: '100vh', width: '100vw'}}>
            <div className='contact-container'>
                <div className='contact-text'>
                    <h1>Contact Me</h1>
                    <p>I am currently open to new opportunities. Please feel free to reach out!</p>
                </div>

                <div className='form-div'>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicSubject">
                        <Form.Label>Subject</Form.Label>
                        <Form.Control type="text" placeholder="Subject" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicMessage">
                        <Form.Label>Message</Form.Label>
                        <Form.Control as="textarea" rows={4} placeholder="Your message here..." />
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