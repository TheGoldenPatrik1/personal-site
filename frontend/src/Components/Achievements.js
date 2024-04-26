import { Card, Row, Col, Button } from 'react-bootstrap';

import BigIdeaImage from '../Images/BigIdeas.jpeg';
import UAInnovateImage from '../Images/UA-Innovate.jpeg';

function Achievements() {
    const data = [
        {
            imageSource: BigIdeaImage,
            title: "Big Ideas",
            subTitle: "April 2024",
            text: "Was the team lead for a semester-long entrepreneurial competition and won the overall Grand Prize.",
            buttonText: "Full Story",
            buttonHref: "https://ua.meritpages.com/stories/Malachi-Crain-of-Simpsonville-Part-of-Winning-BIG-Ideas-Team-at-UA/131507037?"
        },
        {
            imageSource: BigIdeaImage,
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
            text: "Was the principal backend developer for a 24 hour hackathon, winning the Full Stack Development category.",
            buttonText: "Full Story",
            buttonHref: ""
        }
    ];

    return (
        <Row className="mt-4">
            {
                data.map((item, index) => (
                    <Col key={index}>
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
    );
}

export default Achievements;