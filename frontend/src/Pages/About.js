import { Container, Row, Col, Image, OverlayTrigger, Tooltip } from 'react-bootstrap';

import Footer from '../Components/Footer';
import NavigationBar from '../Components/NavigationBar';

import { createDataReducer } from '../utilities';

import ExpressJSLogo from '../Images/Express-JS-Logo.png'
import NodeJSLogo from '../Images/Node-JS-Logo.png';
import NodemailerLogo from '../Images/Nodemailer-Logo.png';
import ReactBootstrapLogo from '../Images/React-Bootstrap-Logo.png';
import ReactLogo from '../Images/React-Logo.png';
import ReactIconsLogo from '../Images/React-Icons-Logo.png';

import '../Styles/FullPage.css';
import '../Styles/About.css'

function About() {
    const data = [
        {
            image: ReactLogo,
            href: "https://react.dev",
            tooltip: "React JS frontend"
        },
        {
            image: ReactBootstrapLogo,
            href: "https://react-bootstrap.netlify.app",
            tooltip: "React Bootstrap for styling"
        },
        {
            image: ReactIconsLogo,
            href: "https://react-icons.github.io/react-icons/",
            tooltip: "React Icons for UI"
        },
        {
            image: NodeJSLogo,
            href: "https://nodejs.org/en",
            tooltip: "Node JS for backend"
        },
        {
            image: ExpressJSLogo,
            href: "https://expressjs.com",
            tooltip: "Express JS server"
        },
        {
            image: NodemailerLogo,
            href: "https://www.nodemailer.com",
            tooltip: "Nodemailer email client"
        }
    ];

    const layouts = {
        6: "d-none d-xl-flex d-lg-none d-md-none d-sm-none d-xs-none",
        3: "d-none d-xl-none d-lg-flex d-md-flex d-sm-flex d-xs-none",
        2: "d-xl-none d-lg-none d-md-none d-sm-none d-xs-flex"
    };

    return (
        <div className="page">
            <NavigationBar />
            <Container className="page-main about-page">
                <br />
                <h2>About This Site</h2>
                <p>I built this site using <a href="https://en.wikipedia.org/wiki/JavaScript">JavaScript</a>. You can view the source code <a href="https://github.com/TheGoldenPatrik1/personal-site">here</a>.</p>
                <h4>Libraries Used</h4>
                {
                    Object.keys(layouts).map((parentItem, index) => (
                        <div key={index}>
                            {data.reduce(createDataReducer(parentItem), []).map((item, index) => (
                                <div className={layouts[parentItem]} key={index}>
                                    <Row>
                                        {
                                            item.map((item, index) => (
                                                <OverlayTrigger
                                                    key={index}
                                                    placement='bottom'
                                                    overlay={
                                                        <Tooltip id={`tooltip-${index}`}>{item.tooltip}</Tooltip>
                                                    }
                                                >
                                                    <Col key={index} xs={6} sm={4} md={4} lg={4} xl={2} className="mb-3">
                                                        <a href={item.href}>
                                                            <Image src={item.image} thumbnail />
                                                        </a>
                                                    </Col>
                                                </OverlayTrigger>
                                            ))
                                        }
                                    </Row>
                                </div>
                            ))}
                        </div>
                    ))
                }
            </Container>
            <Footer />
        </div>
    )
}

export default About;