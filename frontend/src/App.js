import { Container } from 'react-bootstrap';

import AboutMe from './Components/AboutMe';
import Achievements from './Components/Achievements';
import Footer from './Components/Footer';
import MainCarousel from './Components/MainCarousel';
import NavigationBar from './Components/NavigationBar';

import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <NavigationBar/>
      <Container className="mt-4">
        <h1>I'm Malachi Crain</h1>
        <MainCarousel/>
        <br/>
        <AboutMe/>
        <br/>
        <h2>Latest Achievements</h2>
        <Achievements/>
      </Container>
      <br/>
      <Footer/>
    </div>
  );
}

export default App;
