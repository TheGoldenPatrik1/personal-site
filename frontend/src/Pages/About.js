import { Container } from 'react-bootstrap';

import Footer from '../Components/Footer';
import NavigationBar from '../Components/NavigationBar';

import '../Styles/FullPage.css';

function About() {
    return (
        <div className="page">
            <NavigationBar />
            <Container className="page-main">
                <br />
                <h2>About This Site</h2>
                <br />
            </Container>
            <Footer />
        </div>
    )
}

export default About;