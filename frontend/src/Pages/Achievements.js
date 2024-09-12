import { Container } from 'react-bootstrap';

import AchievementsList from '../Components/AchievementsList';
import Footer from '../Components/Footer';
import NavigationBar from '../Components/NavigationBar';
import Tile from '../Components/Tile';

import '../Styles/FullPage.css';

function Achievements() {
    return (
        <div className="page achievements-page">
            <NavigationBar />
            <Container className="page-main">
                <br />
                <Tile title="Achievements">
                    <AchievementsList />
                </Tile>
                <br />
            </Container>
            <Footer />
        </div>
    )
}

export default Achievements;