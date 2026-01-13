import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { Container, Row, Col } from "react-bootstrap";

const About = () => {
  return (
    <div>
      <Header />
      <Container className="portfolio mb-5">
        {/* Titre */}
        <Row className="text-center m-5">
          <Col className="service-title">
            <h1>Contact</h1>
            <p>
              Pour me contacter en vue d'un entretien ou d'une future
              collaboration, merci de remplir le formulaire de contact.
            </p>
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
};

export default About;
