import { useState } from 'react';
import { Container, Nav, Navbar, Modal, Button } from 'react-bootstrap';
import { Document, Page, pdfjs } from 'react-pdf';

import SiteLogoImage from '../Images/Site-Logo.png';
import ResumePDF from  '../Resources/Malachi-Crain-Resume.pdf';

import '../Styles/DarkModal.css';

pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

function NavigationBar() {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const downloadResume = () => {
    const link = document.createElement('a');
    link.href = ResumePDF;
    link.setAttribute('download', 'Malachi-Crain-Resume.pdf');
    link.setAttribute('target', '_blank');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  return (
    <div>
        <Modal show={show} onHide={handleClose} size="lg" centered className="modal-dark" data-bs-theme="dark">
            <Modal.Header closeButton>
                <Modal.Title>My Résumé</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Container>
                    <div className="d-none d-md-none d-lg-block">
                        <Document file={ResumePDF}>
                            <Page pageNumber={1} renderAnnotationLayer={false} renderTextLayer={false} />
                        </Document>
                    </div>
                    <div className="d-none d-md-block d-lg-none">
                        <Document file={ResumePDF}>
                            <Page pageNumber={1} renderAnnotationLayer={false} renderTextLayer={false} width={450} />
                        </Document>
                    </div>
                    <div className="d-block d-md-none d-lg-none">
                        <Document file={ResumePDF}>
                            <Page pageNumber={1} renderAnnotationLayer={false} renderTextLayer={false} width={300} />
                        </Document>
                    </div>
                </Container>
                
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={downloadResume}>
                    Download
                </Button>
            </Modal.Footer>
        </Modal>
        <Navbar expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="/">
                    <img src={SiteLogoImage} width={40} alt="MC" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link onClick={handleShow}>Résumé</Nav.Link>
                    <Nav.Link href="/contact">Contact</Nav.Link>
                    <Nav.Link href="/about">About</Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </div>
  );
}

export default NavigationBar;