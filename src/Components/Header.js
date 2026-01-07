import React from "react";
import Navigation from "./tools/Navigation";
import Logo from "./tools/Logo";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

function Header() {
  return (
    <Navbar expand="lg" className="header">
      <Container>
        <Logo />

        <Navbar.Toggle aria-controls="main-navbar" />

        <Navbar.Collapse id="main-navbar" className="justify-content-end">
          <Navigation />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
