import { Container } from 'react-bootstrap';

import Footer from '../Components/Footer';
import NavigationBar from '../Components/NavigationBar';

import '../Styles/ErrorPage.css';
import '../Styles/FullPage.css';

function ErrorPage() {
    return (
        <div className="page error-page">
            <NavigationBar />
            <Container className="page-main">
                <h2>404: Page Not Found</h2>
            </Container>
            <Footer />
        </div>
    )
}

export default ErrorPage;