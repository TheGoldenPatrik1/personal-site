import { Container, Row, Col } from 'react-bootstrap';

function Footer() {
  return (
    <footer className="bg-dark text-light py-3">
      <Container>
        <Row>
          <Col sm={6} md={3}>
            <h5>Company</h5>
            <ul className="list-unstyled">
              <li>About Us</li>
              <li>Contact</li>
              <li>Terms of Service</li>
            </ul>
          </Col>
          <Col sm={6} md={3}>
            <h5>Resources</h5>
            <ul className="list-unstyled">
              <li>Blog</li>
              <li>FAQ</li>
            </ul>
          </Col>
          <Col sm={6} md={3}>
            <h5>Connect</h5>
            <ul className="list-unstyled">
              <li>Facebook</li>
              <li>Twitter</li>
              <li>Instagram</li>
            </ul>
          </Col>
          <Col sm={6} md={3}>
            <h5>Subscribe</h5>
            <p>Subscribe to our newsletter for updates</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;