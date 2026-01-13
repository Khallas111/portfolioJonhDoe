import React from "react";
import Navigation from "./tools/Navigation";
import Logo from "./tools/Logo";
import { Container, Navbar } from "react-bootstrap";
import "../styles/Header.scss";

const Header = () => {
  return (
    <Navbar expand="lg" className="header" variant="dark">
      <Container>
        <Logo />

        <Navbar.Toggle aria-controls="main-navbar" />

        <Navbar.Collapse id="main-navbar" className="justify-content-end">
          <Navigation variant="header" />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
