import { NavLink } from "react-router-dom";
import Nav from "react-bootstrap/Nav";

const Navigation = ({ variant = "header" }) => {
  const isFooter = variant === "footer";
  // Création d'un variant pour être réutilisable dans le footer et le header
  return (
    <Nav
      variant={isFooter ? undefined : "underline"}
      className={
        isFooter
          ? "navigation-footer"
          : "justify-content-center navigation-header"
      }
    >
      <Nav.Link as={NavLink} to="/" end>
        Home
      </Nav.Link>
      <Nav.Link as={NavLink} to="/services">
        Services
      </Nav.Link>
      <Nav.Link as={NavLink} to="/achievements">
        Portfolio
      </Nav.Link>
      <Nav.Link as={NavLink} to="/about">
        Contact
      </Nav.Link>
      <Nav.Link as={NavLink} to="/copyrights">
        Mentions légales
      </Nav.Link>
    </Nav>
  );
};

export default Navigation;
