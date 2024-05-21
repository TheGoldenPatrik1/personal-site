import { Container, Row, Col } from 'react-bootstrap';
import { MdEmail } from "react-icons/md";
import { FaLinkedin, FaGithub } from "react-icons/fa";

function Footer() {

  const icons = [
    {
        icon: <FaLinkedin size={40}/>,
        href: "https://www.linkedin.com/in/malachi-crain/"
    },
    {
        icon: <FaGithub size={40}/>,
        href: "https://github.com/TheGoldenPatrik1"
    },
    {
        icon: <MdEmail size={40}/>,
        href: "mailto:mcrain@crimson.ua.edu"
    }
  ];

  return (
    <footer className="bg-dark text-light py-3">
      <Container>
        <Row>
          <Col sm={6} md={6} className="footer-col">
            {
                icons.map((item, index) => (
                    <a key={index} href={item.href}>{item.icon}</a>
                ))
            }
            
          </Col>
          <Col sm={6} md={6} className="footer-col">
            <h5>{`© Copyright ${new Date().getFullYear()} Malachi Crain`}</h5>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;