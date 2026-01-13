import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import banner from "../assets/images/banner.jpg";
import { Container, Row, Col } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import CardsForPortfolio from "../Components/tools/cards/CardsForPortfolio";
import projects from "../data/projectsData";

const Achievements = () => {
  return (
    <div>
      <Header />
      {/* Image Bannière */}
      <Image src={banner} fluid alt="Bannière services" className="mb-4" />

      <Container className="portfolio mb-5">
        {/* Titre */}
        <Row className="text-center mb-5">
          <Col className="service-title">
            <h1>Portfolio</h1>
            <p>Voici quelques-unes de mes réalisations.</p>
          </Col>
        </Row>
      </Container>
      {/* Réalisations */}
      <Container className="text-center mb-5">
        <CardsForPortfolio cards={projects} />
      </Container>
      <Footer />
    </div>
  );
};

export default Achievements;
