import ProjectsList from '../Components/ProjectsList'
import Page from '../Components/Page'
import Tile from '../Components/Tile'

function Projects() {
    return (
        <Page className="projects-page" pageName="Projects">
            <br />
            <Tile title="Projects">
                <ProjectsList />
            </Tile>
            <br />
        </Page>
    )
}

export default Projects
