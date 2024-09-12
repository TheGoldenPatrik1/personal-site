import { Container } from 'react-bootstrap';

import AboutMe from '../Components/AboutMe';
import AchievementsList from '../Components/AchievementsList';
import Footer from '../Components/Footer';
import MainCarousel from '../Components/MainCarousel';
import NavigationBar from '../Components/NavigationBar';
import Tile from '../Components/Tile';

import '../Styles/Home.css';
import '../Styles/FullPage.css';

function Home() {
  return (
    <div className="home page">
      <NavigationBar />
      <Container className="mt-4">
            <Tile title="I'm Malachi Crain">
                <MainCarousel />
            </Tile>
            <br />
            <Tile title="About Me">
                <AboutMe />
            </Tile>
            <br />
            <Tile title="Latest Achievements" className="achievements-tile">
                <AchievementsList partialDisplay />
            </Tile>
            <br />
      </Container>
      <Footer/>
    </div>
  );
}

export default Home;
