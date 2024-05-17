import { Card, Col, Row } from 'react-bootstrap';
import HeadshotImage from '../Images/Headshot.jpeg';

function AboutMe() {
    const textDescriptions = {
        "Overview": "I taught myself coding about eight years ago and instantly fell in love. I am now a rising Senior at the University of Alabama double majoring in Computer Science and Math. As I prepare to graduate in May of 2025, I'm looking for a role where I can bring to bear my passion for computer programming and software development.",
        "Work": "This past summer, I worked at DTCC as an IT Intern. This was a wonderful opportunity to apply the skills I had learned over the course of my coursework, personal projects, and University-sponsored research."
    };

    return (
        <div>
            <Card>
                <Card.Title style={{padding: "6px"}} className="bg-dark text-light">About Me</Card.Title>
                <Card.Body className="d-none d-lg-block d-md-block">
                    <Row>
                        <Col>
                            {Object.keys(textDescriptions).map(v => (
                                <div key={v}>
                                    <span style={{fontWeight: 'bold'}}>{v}</span>
                                    <Card.Text>{textDescriptions[v]}</Card.Text>
                                </div>
                            ))}
                        </Col>
                        <Col>
                            <Card.Img variant="bottom" style={{borderRadius: "2px"}} src={HeadshotImage} className="align-self-end"/>
                        </Col>
                    </Row>
                </Card.Body>
                <Card.Body className="dp-sm-block d-lg-none d-md-none">
                    <Card.Img variant="top" src={HeadshotImage}/>
                    {Object.keys(textDescriptions).map(v => (
                        <div key={v}>
                            <span style={{fontWeight: 'bold'}}>{v}</span>
                            <Card.Text>{textDescriptions[v]}</Card.Text>
                        </div>
                    ))}
                </Card.Body>
            </Card>
        </div>
    );
}

export default AboutMe;