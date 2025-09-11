import { Button, Modal} from "react-bootstrap";
import { useState } from "react";   
import './style.css';

function Resume(){
    const [showModal, setShowModal] = useState(false);
    const handleClose = () => setShowModal(false);
    const handleOpen = () => setShowModal(true);
    
    return(
        <>
        <Button variant="outline-primary" className="resume-button ms-3" onClick={handleOpen}>
            Resume
        </Button>
        <Modal show={showModal} onHide={handleClose} dialogClassName="custom-modal" size="lg">
            <Modal.Dialog>
                <Modal.Header closeButton>
                    <Modal.Title className='modal-title'>
                        <div className="title-with-download">
                            <span>Resume</span>
                            <a 
                                href="/Portfolio/Zach_Kaiser_Resume.pdf" 
                                download="Zach_Kaiser_Resume.pdf"
                                className="download-link"
                                title="Download Resume"
                            >
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M12,2L12,16M8,12L12,16L16,12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
                                    <path d="M21,15V19A2,2 0 0,1 19,21H5A2,2 0 0,1 3,19V15" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
                                </svg>
                            </a>
                        </div>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <iframe src="/Portfolio/Zach_Kaiser_Resume.pdf" width="100%" height="100%"></iframe>
                </Modal.Body>
            </Modal.Dialog>
        </Modal>
        </>
    )
}

export default Resume;