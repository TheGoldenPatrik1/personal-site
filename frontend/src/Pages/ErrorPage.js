import Page from '../Components/Page';

import '../Styles/ErrorPage.css';

function ErrorPage() {
    return (
        <Page className="error-page" pageName="404 Page">
            <h2>404: Page Not Found</h2>
        </Page>
    )
}

export default ErrorPage;