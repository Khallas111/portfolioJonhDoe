import { Container, Row, Col } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import Navigation from "./tools/Navigation";
import ContactBlock from "./ContactBlock";
import SocialLinks from "./SocialLinks";
import projects from "../data/projectsData";
import "../styles/Footer.scss";

const Footer = () => {
  return (
    <footer className="site-footer">
      <Container>
        <Row className="gy-4 justify-content-center text-center">
          {/* Infos */}
          <Col xs={12} md={4}>
            <div className="footer-title mb-2">John Doe</div>
            <ContactBlock />
            <SocialLinks />
          </Col>

          {/* Navigation */}
          <Col xs={12} md={4}>
            <div className="footer-title mb-2">Navigation</div>
            <Navigation variant="footer" />
          </Col>

          {/* Réalisations */}
          <Col xs={12} md={4}>
            <div className="footer-title mb-2">Dernières Réalisations</div>
            <ul className="footer-links">
              {projects.map(({ label, slug, published }) => (
                <li key={slug}>
                  <NavLink
                    to={published ? `/achievements/${slug}` : "/achievements"}
                  >
                    {label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
