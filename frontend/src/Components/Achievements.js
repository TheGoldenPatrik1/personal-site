import { Card, Row, Col, Button, Container, Collapse } from 'react-bootstrap';
import { useState } from 'react';

import BigIdeaImage from '../Images/BigIdeas.jpeg';
import CSOutstandingJuniorImage from '../Images/CS-Outstanding-Junior.png';
import DTCCImage from '../Images/DTCC.jpeg';
import PurdueSLSAImage from '../Images/Purdue-SLSA.jpg';
import UAInnovateImage from '../Images/UA-Innovate.jpeg';

import '../Styles/Achievements.css';

function Achievements() {
    const [isClicked, setIsClicked] = useState(false);

    const createDataReducer = (numItems) => {
        return (acc, cur, index) => {
            const groupIndex = Math.floor(index / numItems);
            if (!acc[groupIndex]) acc[groupIndex] = [];
            acc[groupIndex].push(cur);
            return acc;
        };
    };

    const data = [
        {
            imageSource: BigIdeaImage,
            title: "Big Ideas",
            subTitle: "April 2024",
            text: "Was the team leader for a semester-long entrepreneurial competition and won the overall Grand Prize.",
            buttonText: "Full Story",
            buttonHref: "https://news.ua.edu/2024/04/students-win-with-big-ideas/"
        },
        {
            imageSource: CSOutstandingJuniorImage,
            title: "Outstanding Junior",
            subTitle: "April 2024",
            text: "Was named one of three Outstanding Juniors by the University of Alabama Computer Science department.",
            buttonText: "Full Story",
            buttonHref: ""
        },
        {
            imageSource: UAInnovateImage,
            title: "UA Innovate",
            subTitle: "March 2024",
            text: "Participated as a backend developer in a 24-hour hackathon, winning the Full Stack Development category.",
            buttonText: "Full Story",
            buttonHref: "https://www.linkedin.com/posts/malachi-crain_over-the-past-weekend-i-had-the-incredible-activity-7171611901406224384-jhgV"
        },
        {
            imageSource: DTCCImage,
            title: "DTCC",
            subTitle: "June-August 2023",
            text: "Worked as an IT Intern at Depository Trust & Clearing Corporation, working with Java and PowerAutomate.",
            buttonText: "Full Story",
            buttonHref: "https://www.linkedin.com/posts/malachi-crain_its-hard-to-believe-that-its-already-the-activity-7095795278238113792-fcZs"
        },
        {
            imageSource: PurdueSLSAImage,
            title: "SLSA",
            subTitle: "October 2022",
            text: "Presented on Natural Language Processing at the Annual Science Literature and the Arts Conference in Purdue.",
            buttonText: "Full Story",
            buttonHref: "https://litsciarts.org/slsa2022/"
        }
    ];

    return (
        <Container className="achievements">
            {data.reduce(createDataReducer(3), []).map((item, index) => (
                <div className="d-lg-flex d-md-none d-sm-flex">
                    <Collapse key={index} in={index === 0 || isClicked}>
                        <Row className="mt-4">
                            {
                                item.map((item, index) => (
                                    <Col key={index} sm={12} md={6} lg={4} className="mb-3">
                                        <Card className="bg-dark text-light">
                                            <Card.Img variant="top" src={item.imageSource} />
                                            <Card.Body>
                                                <Card.Title>{item.title}</Card.Title>
                                                <Card.Subtitle>{item.subTitle}</Card.Subtitle>
                                                <Card.Text>{item.text}</Card.Text>
                                                <Button variant="primary" href={item.buttonHref}>{item.buttonText}</Button>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                ))
                            }
                        </Row>
                    </Collapse>
                </div>
            ))}
            {data.reduce(createDataReducer(2), []).map((item, index) => (
                <div className="d-none d-lg-none d-md-flex d-sm-none">
                    <Collapse key={index} in={index === 0 || isClicked}>
                        <Row className="mt-4">
                            {
                                item.map((item, index) => (
                                    <Col key={index} sm={12} md={6} lg={4} className="mb-3">
                                        <Card className="bg-dark text-light">
                                            <Card.Img variant="top" src={item.imageSource} />
                                            <Card.Body>
                                                <Card.Title>{item.title}</Card.Title>
                                                <Card.Subtitle>{item.subTitle}</Card.Subtitle>
                                                <Card.Text>{item.text}</Card.Text>
                                                <Button variant="primary" href={item.buttonHref}>{item.buttonText}</Button>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                ))
                            }
                        </Row>
                    </Collapse>
                </div>
            ))}
            <Button variant="secondary" onClick={() => setIsClicked(!isClicked)}>{isClicked ? 'Show Less' : 'Show More'}</Button>
        </Container>
    );
}

export default Achievements;