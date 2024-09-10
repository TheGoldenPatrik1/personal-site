import { Container } from 'react-bootstrap';

import AboutMe from '../Components/AboutMe';
import Achievements from '../Components/Achievements';
import Footer from '../Components/Footer';
import MainCarousel from '../Components/MainCarousel';
import NavigationBar from '../Components/NavigationBar';
import Tile from '../Components/Tile';

import '../Styles/Home.css';
import '../Styles/FullPage.css';

function Home() {
  return (
    <div className="home page">
      <NavigationBar/>
      <Container className="mt-4">
            <Tile title="I'm Malachi Crain">
                <MainCarousel/>
            </Tile>
            <br />
            <Tile title="About Me">
                <AboutMe/>
            </Tile>
            <br />
            <Tile title="Achievements" className="achievements-tile">
                <Achievements/>
            </Tile>
      </Container>
      <br />
      <Footer/>
    </div>
  );
}

export default Home;
