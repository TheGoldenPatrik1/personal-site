import { useState, useEffect } from 'react';
import { Container, Nav, Navbar, Modal, Button } from 'react-bootstrap';
import { Document, Page, pdfjs } from 'react-pdf';

import { useLocation } from 'react-router-dom';

import { addCSS } from '../utilities';

import SiteLogoImage from '../Images/Site-Logo.png';
import ResumePDF from  '../Resources/Malachi-Crain-Resume.pdf';

import '../Styles/NavigationBar.css';

pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

function NavigationBar() {
  const location = useLocation().pathname;

  useEffect(() => {
    addCSS(`a[href='${location}'] { font-weight: bold; color: var(--bs-nav-link-hover-color); }`);
  });

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
  };

  const resumeModal = (
    <Modal show={show} onHide={handleClose} size="lg" centered className="resume-modal">
        <Modal.Header closeButton>
            <Modal.Title>My Résumé</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Container>
                <Document file={ResumePDF}>
                    <Page pageNumber={1} renderAnnotationLayer={false} renderTextLayer={false} />
                </Document>
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
  );

  const navSeparator = <span className="navbar-separator d-sm-none d-md-none d-lg-block">|</span>;

  return (
    <div>
        {resumeModal}
        <Navbar expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="/">
                    <img src={SiteLogoImage} width={40} alt="MC" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link onClick={handleShow}>Résumé</Nav.Link>
                    {navSeparator}
                    <Nav.Link href="/achievements">Achievements</Nav.Link>
                    {navSeparator}
                    <Nav.Link href="/contact">Contact</Nav.Link>
                    {navSeparator}
                    <Nav.Link href="/about">About This Site</Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </div>
  );
}

export default NavigationBar;