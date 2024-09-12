import AboutMe from '../Components/AboutMe';
import AchievementsList from '../Components/AchievementsList';
import MainCarousel from '../Components/MainCarousel';
import Page from '../Components/Page';
import Tile from '../Components/Tile';

import '../Styles/Home.css';

function Home() {
  return (
    <Page className="home" pageName="Home">
        <br />
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
    </Page>
  );
}

export default Home;
