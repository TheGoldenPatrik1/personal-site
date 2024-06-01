import { Container, Row, Col, Image, OverlayTrigger, Tooltip } from 'react-bootstrap';

import Footer from '../Components/Footer';
import NavigationBar from '../Components/NavigationBar';

import { createDataReducer } from '../utilities';

import CronJobLogo from '../Images/Cron-Job-Logo.png';
import ExpressJSLogo from '../Images/Express-JS-Logo.png'
import NodeJSLogo from '../Images/Node-JS-Logo.png';
import NodemailerLogo from '../Images/Nodemailer-Logo.png';
import ReactBootstrapLogo from '../Images/React-Bootstrap-Logo.png';
import ReactLogo from '../Images/React-Logo.png';
import ReactIconsLogo from '../Images/React-Icons-Logo.png';
import RenderLogo from '../Images/Render-Logo.png';
import VercelLogo from '../Images/Vercel-Logo.png';

import '../Styles/FullPage.css';
import '../Styles/About.css'

function About() {
    const data = {
        Libraries: [
            {
                image: ReactLogo,
                href: "https://react.dev",
                tooltip: "React JS frontend"
            },
            {
                image: ReactBootstrapLogo,
                href: "https://react-bootstrap.netlify.app",
                tooltip: "React Bootstrap styling"
            },
            {
                image: ReactIconsLogo,
                href: "https://react-icons.github.io/react-icons/",
                tooltip: "React Icons for UI"
            },
            {
                image: NodeJSLogo,
                href: "https://nodejs.org/en",
                tooltip: "Node JS backend"
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
        ],
        Services: [
            {
                image: VercelLogo,
                href: "https://vercel.com",
                tooltip: "Vercel website hosting"
            },
            {
                image: RenderLogo,
                href: "https://render.com",
                tooltip: "Render server hosting"
            },
            {
                image: CronJobLogo,
                href: "https://cron-job.org",
                tooltip: "CronJob server pinging"
            }
        ]
    };

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
                {Object.keys(data).map((dataKey, index) => (
                    <div key={index}>
                        <h4>{dataKey} Used</h4>
                        {Object.keys(layouts).map((parentItem, index) => (
                            <div key={index}>
                                {data[dataKey].reduce(createDataReducer(parentItem), []).map((item, index) => (
                                    <div className={layouts[parentItem]} key={index}>
                                        <Row className="w-100">
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
                        ))}
                    </div>
                ))}
            </Container>
            <Footer />
        </div>
    )
}

export default About;