import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { Container, Row, Col } from "react-bootstrap";
import FormContact from "../Components/FormContact";
import Card from "react-bootstrap/Card";
import ContactBlock from "../Components/ContactBlock";
import "../styles/About.scss";

const DoubleCard = () => (
  <Container className="border rounded-3 my-4 p-3 shadow">
    <Row className="g-4">
      <Col xs={12} md={6} className="d-flex">
        <Card className="border-0 flex-fill">
          <Card.Body>
            <div className="section-title">Formulaire de contact</div>
            <FormContact />
          </Card.Body>
        </Card>
      </Col>

      <Col xs={12} md={6} className="d-flex">
        <Card className="border-0 flex-fill">
          <Card.Body>
            <div className="section-title">Mes coordonnées</div>
            <strong>John Doe</strong>
            <ContactBlock />
            <div className="map-container">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5103.236954060498!2d4.79952386480713!3d45.780012839983115!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f4eb65edac5b3f%3A0xe01c47049cb2e2b9!2s40%20Rue%20Laure%20Diebold%2C%2069009%20Lyon!5e0!3m2!1sfr!2sfr!4v1768328436370!5m2!1sfr!2sfr"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localisation John Doe"
              ></iframe>
            </div>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  </Container>
);
const About = () => {
  return (
    <div>
      <Header />
      <Container className="portfolio mb-5 px-0">
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
      <DoubleCard />

      <Footer />
    </div>
  );
};

export default About;
