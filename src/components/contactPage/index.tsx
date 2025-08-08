import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function ContactPage(){
    return(
        <div style={{height: '100vh', width: '100vw'}}>
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
                        <Form.Control type="password" placeholder="Subject" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Label>Message</Form.Label>
                        <Form.Control type="message" placeholder="Your message here..." />
                    </Form.Group>
                    
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>
        </div>
    )
}

export default ContactPage;