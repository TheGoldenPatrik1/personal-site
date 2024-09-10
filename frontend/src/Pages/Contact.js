import { Container, Form, Button, Row, Col, Spinner, Alert } from 'react-bootstrap';
import { useState } from 'react';
import axios from 'axios';

import Footer from '../Components/Footer';
import NavigationBar from '../Components/NavigationBar';
import Tile from '../Components/Tile';

import '../Styles/Contact.css';
import '../Styles/FullPage.css';

function Contact() {

    const [validated, setValidated] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [result, setResult] = useState(false);
    
    const handleSubmit = (e) => {
        const form = e.currentTarget;
        e.preventDefault();
        e.stopPropagation();
        setValidated(true);
        if (form.checkValidity() === false) return;

        setIsLoading(true);
        setSubmitted(true);

        const lastSubmitted = localStorage.getItem('lastSubmitted');
        if (lastSubmitted && Date.now() - lastSubmitted < 1000 * 60 * 5) {
            setIsLoading(false);
            setResult('last submission was too recent');
            return;
        }
        
        const values = {
            name: '',
            email: '',
            subject: '',
            message: ''
        };
        for (let i = 0; i < form.length - 1; i++) values[Object.keys(values)[i]] = form[i].value;

        axios.post(`https://personal-site-mlzp.onrender.com/api/contact`, values).then(r => {
            console.log(r);
            if (r.status === 200) {
                setIsLoading(false);
                setResult('success');
                localStorage.setItem('lastSubmitted', Date.now());
            } else {
                console.log(r);
                setIsLoading(false);
                setResult('unknown');
                setSubmitted(false);
            }     
        }).catch(e => {
            console.log(e);
            setIsLoading(false);
            setResult(e.response.data.error || 'unkown');
            setSubmitted(false);
        });
        
    };

    return (
        <div className="page">
            <NavigationBar />
            <Container className="page-main">
                <br />
                <Tile title="Contact Form">
                    <Form noValidate validated={validated} onSubmit={handleSubmit}>
                        <Row>
                            <Col md={6} sm={12}>
                                <Form.Group controlId="formName">
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Enter your name"
                                        name="name"
                                        autoComplete="name"
                                        required
                                    />
                                </Form.Group>
                            </Col>
                            <span className="dp-sm-block d-lg-none d-md-none"><br /></span>
                            <Col md={6} sm={12}>
                                <Form.Group controlId="formEmail">
                                    <Form.Label>Email Address</Form.Label>
                                    <Form.Control
                                        type="email"
                                        placeholder="Enter your email"
                                        name="email"
                                        autoComplete="email"
                                        required
                                    />
                                </Form.Group>
                            </Col>
                        </Row>
                        <br />
                        <Form.Group controlId="formSubject">
                            <Form.Label>Subject</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter the subject"
                                name="subject"
                                required
                            />
                        </Form.Group>
                        <br />
                        <Form.Group controlId="formMessage">
                            <Form.Label>Message</Form.Label>
                            <Form.Control
                                as="textarea"
                                rows={4}
                                placeholder="Enter your message"
                                name="message"
                                required
                            />
                        </Form.Group>
                        <br />
                        <Button variant="primary" type="submit" disabled={submitted}>
                            {
                                isLoading &&
                                (<span>
                                    <Spinner
                                        as="span"
                                        animation="grow"
                                        size="sm"
                                        role="status"
                                        aria-hidden="true"
                                    />
                                    Submitting...
                                </span>)
                            }
                            {
                                (!isLoading && !result) && "Submit"
                            }
                            {
                                (!isLoading && result === "success") && "Submitted Successfully"
                            }
                            {
                                (!isLoading && result !== "success" && result !== false) && "Try Again"
                            }
                        </Button>
                    </Form>
                    {
                        !isLoading && result !== "success" && result !== false && <span><br /><Alert variant="danger">{`An Error Occurred: ${result}`}</Alert></span>
                    }
                </Tile>
                <br />
            </Container>
            <Footer />
        </div>
    )
}

export default Contact;