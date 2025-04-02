import { Card, Row, Col, Button } from 'react-bootstrap';
import { bool } from 'prop-types';
import ReactGA from 'react-ga4';

import { createDataReducer } from '../utilities';

import ASOutstandingSophomoreImage from '../Images/AS-Outstanding-Sophomore.jpg';
import BigIdeaImage from '../Images/BigIdeas.jpeg';
import CSOutstandingJuniorImage from '../Images/CS-Outstanding-Junior.png';
import DTCCImage from '../Images/DTCC.jpeg';
import PurdueSLSAImage from '../Images/Purdue-SLSA.jpg';
import UAInnovateImage from '../Images/UA-Innovate.jpeg';
import UndergraduateResearchImage from '../Images/Undergraduate-Research.jpg';
import UnumImage from '../Images/Unum.jpg';
import VPLiturgyImage from '../Images/VP-of-Liturgy.jpg';

import '../Styles/AchievementsList.css';

function AchievementsList({ partialDisplay = false }) {
    let data = [
        {
            imageSource: UndergraduateResearchImage,
            title: "Research Assistant",
            subTitle: "August 2024-Present",
            text: "Currently working with AI and ML as an Undergraduate Research Assistant in the University's Structural Engineering Lab."
        },
        {
            imageSource: UnumImage,
            title: "Unum",
            subTitle: "May-August 2024",
            text: "Worked as a Software Engineering Intern at Unum, using JavaScript, CSS, and React to build a frontend consumer portal.",
            buttonHref: "https://www.linkedin.com/posts/malachi-crain_today-marked-the-final-day-of-my-software-activity-7225259641297907712-4Ni3"
        },
        {
            imageSource: BigIdeaImage,
            title: "Big Ideas",
            subTitle: "April 2024",
            text: "Was the team leader for a semester-long entrepreneurial competition, ultimately winning the overall Grand Prize.",
            buttonHref: "https://news.ua.edu/2024/04/students-win-with-big-ideas/"
        },
        {
            imageSource: CSOutstandingJuniorImage,
            title: "Outstanding Junior",
            subTitle: "April 2024",
            text: "Was named one of three Outstanding Juniors by the University of Alabama Computer Science department."
        },
        {
            imageSource: UAInnovateImage,
            title: "UA Innovate",
            subTitle: "March 2024",
            text: "Participated as a backend developer in a 24-hour hackathon, winning the Full Stack Development category.",
            buttonHref: "https://www.linkedin.com/posts/malachi-crain_over-the-past-weekend-i-had-the-incredible-activity-7171611901406224384-jhgV"
        },
        {
            imageSource: VPLiturgyImage,
            title: "Vice President",
            subTitle: "December 2023-December 2024",
            text: "Served as Vice President of Liturgy at BamaCatholic, overseeing weekly events with 400+ attendees."
        },
        {
            imageSource: DTCCImage,
            title: "DTCC",
            subTitle: "June-August 2023",
            text: "Worked as an IT Intern at the Depository Trust & Clearing Corporation, using with Java and PowerAutomate.",
            buttonHref: "https://www.linkedin.com/posts/malachi-crain_its-hard-to-believe-that-its-already-the-activity-7095795278238113792-fcZs"
        },
        {
            imageSource: PurdueSLSAImage,
            title: "SLSA",
            subTitle: "October 2022",
            text: "Presented on Natural Language Processing at the Annual Science Literature and the Arts Conference in Purdue.",
            buttonHref: "https://litsciarts.org/slsa2022/"
        },
        {
            imageSource: ASOutstandingSophomoreImage,
            title: "Outstanding Sophomore",
            subTitle: "October 2022",
            text: "Selected as a top five Sophomore in the College of Arts and Sciences based on exemplary character, leadership, & performance.",
            buttonHref: "https://as.ua.edu/alumni-giving/leadership-board/outstanding-sophomore-and-junior-awards"
        }
    ];

    const handleClick = (hasHref, name) => {
        if (hasHref) {
            return () => {
                ReactGA.event({
                    category: "User Interaction",
                    action: "Clicked Achievement",
                    label: name
                });
            }
        }
    }

    let classes = "achievements";

    if (partialDisplay) {
        data = data.slice(0, 3);
        classes += " partial-achievements";
    }

    return (
        <div className={classes}>
            {data.reduce(createDataReducer(3), []).map((item, index) => (
                <div className="d-lg-flex d-md-none d-sm-flex" key={index}>
                    <Row className="mt-4">
                        {
                            item.map((item, index) => (
                                <Col key={index} sm={12} md={6} lg={4} className="mb-3">
                                    <Card
                                        as={item.buttonHref && "a"}
                                        href={item.buttonHref}
                                        className="achievements-card"
                                        target="_blank"
                                        rel="noreferrer"
                                        onClick={handleClick(item.buttonHref, item.title)}
                                    >
                                        <Card.Img variant="top" src={item.imageSource} alt={item.title}/>
                                        <Card.Body>
                                            <Card.Title>{item.title}</Card.Title>
                                            <Card.Subtitle>{item.subTitle}</Card.Subtitle>
                                            <Card.Text>{item.text}</Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            ))
                        }
                    </Row>
                </div>
            ))}
            {data.reduce(createDataReducer(2), []).map((item, index) => (
                <div className={`d-none d-lg-none d-md-flex d-sm-none row-${index + 1}`} key={index}>
                    <Row className="mt-4">
                        {
                            item.map((item, index) => (
                                <Col key={index} sm={12} md={6} lg={4} className="mb-3">
                                    <Card
                                        as={item.buttonHref && "a"}
                                        href={item.buttonHref}
                                        className="achievements-card"
                                        target="_blank"
                                        rel="noreferrer"
                                        onClick={handleClick(item.buttonHref, item.title)}
                                    >
                                        <Card.Img variant="top" src={item.imageSource} alt={item.title} />
                                        <Card.Body>
                                            <Card.Title>{item.title}</Card.Title>
                                            <Card.Subtitle>{item.subTitle}</Card.Subtitle>
                                            <Card.Text>{item.text}</Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            ))
                        }
                    </Row>
                </div>
            ))}
            {
                partialDisplay && <Button
                    href="/achievements"
                    className="achievements-button"
                    onClick={handleClick(true, "View All")}
                >View All</Button>
            }
        </div>
    );
}

AchievementsList.propTypes = {
    partialDisplay: bool
};

export default AchievementsList;