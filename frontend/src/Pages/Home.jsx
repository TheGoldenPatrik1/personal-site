import { useEffect } from 'react'
import ReactGA from 'react-ga4'
import { useSearchParams } from 'react-router-dom'

import AboutMe from '../Components/AboutMe'
import AchievementsList from '../Components/AchievementsList'
import MainCarousel from '../Components/MainCarousel'
import Page from '../Components/Page'
import ProjectList from '../Components/ProjectsList'
import Tile from '../Components/Tile'

import '../Styles/Home.css'

function Home() {
    const [searchParams] = useSearchParams()
    const entryPoint = searchParams.get('entryPoint')

    useEffect(() => {
        if (entryPoint) {
            ReactGA.event({
                category: 'User Interaction',
                action: `Entered from ${entryPoint}`,
                label: 'Entry Point'
            })
        }
    }, [entryPoint])

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
            <Tile title="Latest Projects" className="projects-tile">
                <ProjectList partialDisplay />
            </Tile>
            <br />
        </Page>
    )
}

export default Home
