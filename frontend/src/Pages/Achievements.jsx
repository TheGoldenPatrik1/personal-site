import AchievementsList from '../Components/AchievementsList'
import Page from '../Components/Page'
import Tile from '../Components/Tile'

function Achievements() {
    return (
        <Page className="achievements-page" pageName="Achievements">
            <br />
            <Tile title="Achievements">
                <AchievementsList />
            </Tile>
            <br />
        </Page>
    )
}

export default Achievements
