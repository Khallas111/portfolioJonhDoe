import { NavLink } from "react-router-dom";
import Nav from "react-bootstrap/Nav";

const Navigation = () => {
  return (
    <Nav variant="underline" className="justify-content-center">
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
