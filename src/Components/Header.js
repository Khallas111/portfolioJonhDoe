import React from "react";
import Navigation from "./tools/Navigation";
import Logo from "./tools/Logo";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

function Header() {
  return (
    <Navbar className="header">
      <Container>
        <Logo href="#home">Navbar with text</Logo>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navigation />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
