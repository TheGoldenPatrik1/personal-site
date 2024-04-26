import { Card, Col, Row } from 'react-bootstrap';
import HeadshotImage from '../Images/Headshot.jpeg';
import '../Styles/Mobile.css';

function AboutMe() {
    const textDescription = "this is a super sick description of me and how cracked I am but I am getting bored so I dont' want to write all of it now so I'm just gonna keep spamming so there's plenty here";

    return (
        <div>
            <Card>
                <Card.Title style={{padding: "6px"}} className="bg-dark text-light">About Me</Card.Title>
                <Row className="hide-on-phone">
                    <Col>
                        <Card.Body>
                            <Card.Text>{textDescription}</Card.Text>
                        </Card.Body>
                    </Col>
                    <Col>
                        <Card.Img variant="bottom" style={{borderRadius: "2px"}} src={HeadshotImage} className="align-self-end"/>
                    </Col>
                </Row>
                <Card.Body className="phone-only">
                    <Card.Img variant="top" src={HeadshotImage}/>
                    <Card.Text>{textDescription}</Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
}

export default AboutMe;