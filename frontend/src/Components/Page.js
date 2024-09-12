import { useEffect } from 'react';
import { Container } from 'react-bootstrap';
import ReactGA from 'react-ga4';
import { node, string } from 'prop-types';

import NavigationBar from './NavigationBar';
import Footer from './Footer';

import '../Styles/FullPage.css';

function Page({ pageName, className, children }) {
    useEffect(() => {
        ReactGA.send({
            hitType: "pageview",
            page: window.location.pathname,
            title: pageName
        });
    });

    let classes = "page";
    if (className) {
        classes += " " + className;
    }

    return (
        <div className={classes}>
            <NavigationBar />
            <Container className="page-main">
                {children}
            </Container>
            <Footer />
        </div>
    )
}

Page.propTypes = {
    className: string,
    pageName: string.isRequired,
    children: node.isRequired
};

export default Page;