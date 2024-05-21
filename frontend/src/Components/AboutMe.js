import { Card, Col, Row } from 'react-bootstrap';
import HeadshotImage from '../Images/Headshot.jpeg';

import '../Styles/AboutMe.css';

function AboutMe() {
    const textDescriptions = {
        "Overview": "I taught myself coding about eight years ago and instantly fell in love. I am now a rising Senior at the University of Alabama double majoring in Computer Science and Math. As I prepare to graduate in May of 2025, I'm looking for a role where I can bring to bear my passion for computer programming and software development.",
        "Experience": "I've had several opportunities to gain experience in the field of CS. Over the past couple years, I've worked on University-sponsored Natural Language Processing research. This past summer, I worked at DTCC as an IT Intern, which was a wonderful chance to apply the skills I had learned in coursework and personal projects."
    };

    return (
        <div className="about-me">
            <Card>
                <Card.Title className="bg-dark text-light">About Me</Card.Title>
                <Card.Body className="d-none d-lg-flex d-xl-flex">
                    <Row>
                        <Col>
                            {Object.keys(textDescriptions).map(v => (
                                <div key={v.toLowerCase()}>
                                    <span className="fw-bold">{v}</span>
                                    <Card.Text>{textDescriptions[v]}</Card.Text>
                                </div>
                            ))}
                        </Col>
                        <Col>
                            <Card.Img variant="bottom" src={HeadshotImage} className="align-self-end" />
                        </Col>
                    </Row>
                </Card.Body>
                <Card.Body className="d-sm-block d-md-block d-lg-none d-xl-none">
                    <Card.Img variant="top" src={HeadshotImage} />
                    {Object.keys(textDescriptions).map(v => (
                        <div key={v}>
                            <span className="fw-bold">{v}</span>
                            <Card.Text>{textDescriptions[v]}</Card.Text>
                        </div>
                    ))}
                </Card.Body>
            </Card>
        </div>
    );
};

export default AboutMe;