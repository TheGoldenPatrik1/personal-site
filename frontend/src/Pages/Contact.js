import { Container, Form, Button, Row, Col, Spinner, Alert } from 'react-bootstrap';
import { useState } from 'react';

import Footer from '../Components/Footer';
import NavigationBar from '../Components/NavigationBar';

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
        
        const values = [];
        for (let i = 0; i < form.length - 1; i++) values.push(form[i].value);
        console.log(values);
        
        setTimeout(
            () => {
                setIsLoading(false);

                if (1) {
                    setResult("failure");
                    setSubmitted(false);

                } else {
                    setResult("success");
                }
                
            },
            2000
        )
        
    };

    return (
        <div className="page">
            <NavigationBar />
            <Container className="page-main">
                <br />
                <h2>Contact Form</h2>
                <br />
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
                        <span className="dp-sm-block d-lg-none d-md-none"><br/></span>
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
                            (!isLoading && result === "failure") && "Try Again"
                        }
                    </Button>
                </Form>
                {
                    result === "failure" && <span><br /><Alert variant="danger">An Error Occurred</Alert></span>
                }
                <br />
            </Container>
            <Footer />
        </div>
    )
}

export default Contact;