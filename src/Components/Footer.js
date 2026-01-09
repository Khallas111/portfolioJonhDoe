import { Container, Row, Col } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "../styles/Footer.scss";
import Navigation from "./tools/Navigation";
import ContactBlock from "./ContactBlock";
import SocialLinks from "./SocialLinks";

// -------------------Création d'une liste de projets (Réalisations)
// Quand published est à false, le lien redirige vers la page Achievements
// Quand published est à true, le lien redirige vers la page de la réalisation
const projects = [
  { label: "Fresh Food", slug: "fresh-food", published: false },
  { label: "Restaurant Akira", slug: "restaurant-akira", published: false },
  { label: "Espace bien-être", slug: "espace-bien-etre", published: false },
  { label: "SEO", slug: "seo", published: false },
  {
    label: "Création d'une API",
    slug: "creationd-d'-une-API",
    published: false,
  },
  { label: "Maquette d'un site", slug: "maquette-de-site", published: false },
];
// ------------------------------------------------------------------------//  Création du composant Footer
const Footer = () => {
  return (
    <footer className="site-footer">
      <Container>
        <Row className="gy-4 justify-content-center text-center">
          {/* Infos */}
          <Col xs={12} md={4}>
            <h5>John Doe</h5>
            <ContactBlock />
            <SocialLinks />
          </Col>

          {/* Navigation */}
          <Col xs={12} md={4}>
            <h5>Navigation</h5>
            <Navigation variant="footer" />
          </Col>

          {/* Réalisations */}
          <Col xs={12} md={4}>
            <h5>Dernières réalisations</h5>
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
