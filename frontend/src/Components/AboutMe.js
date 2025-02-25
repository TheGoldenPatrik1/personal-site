import { Col, Image, Row } from 'react-bootstrap';
import HeadshotImage from '../Images/Headshot.jpeg';

import '../Styles/AboutMe.css';

function AboutMe() {
    const textDescriptions = {
        "Overview": ["I taught myself coding about eight years ago and instantly fell in love. I am now a Senior at the University of Alabama, double majoring in Computer Science and Math. As I prepare to graduate with my Master's in May of 2026, I'm looking for a role where I can bring to bear my passion for computer programming and software development."],
        "Experience": [
            "I've had several opportunities to gain experience in the field of CS. Over the past couple years, I've worked on two different University research projects, both involving Machine Learning. Two summers ago, I worked at DTCC as an IT Intern, which was a wonderful chance to apply the skills I had learned in coursework and personal projects.",
            "This past summer, I was a Software Engineering Intern at Unum, which provided valuable experience and solidified my desire to work full-time in the field of software engineering. This summer, I'm planning on diversifying my experience as a Software Engineering Intern at PowerGEM. As I conclude my time at college, I'm excited to see where my career will take me next!"
        ]
    };

    const description = Object.keys(textDescriptions).map(v => (
        <div key={v.toLowerCase()}>
            <span className="fw-bold">{v}</span>
            {textDescriptions[v].map(v => <p key={v.split(" ").slice(0, 3).join("-")}>{v}</p>)}
        </div>
    ))

    return (
        <div className="about-me">
            <div className="d-none d-lg-flex d-xl-flex">
                <Row>
                    <Col className="description">
                        {description}
                    </Col>
                    <Col>
                        <Image variant="bottom" src={HeadshotImage} className="align-self-end about-me-image" />
                    </Col>
                </Row>
            </div>
            <div className="d-sm-block d-md-block d-lg-none d-xl-none">
                <Image variant="top" src={HeadshotImage} className="about-me-image" />
                <div className="description">
                    {description}
                </div>
            </div>
        </div>
    );
};

export default AboutMe;