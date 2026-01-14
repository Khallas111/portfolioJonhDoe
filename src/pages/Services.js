import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import CardForServices from "../Components/outils/cards/CardsForServices";
import { BsBrush, BsSearch, BsCodeSlash } from "react-icons/bs";
import { Container, Row, Col } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import banner from "../assets/images/banner.jpg";
import "../styles/Services.scss";
const Services = () => {
  return (
    <>
      <Header />

      {/* Image Bannière */}
      <Image src={banner} fluid alt="Bannière services" className="mb-4" />
      <Container className="services mb-5">
        {/* Titre */}
        <Row className="text-center mb-5">
          <Col className="service-title">
            <h1>Mon offre de services</h1>
            <p>Voici les prestations sur lesquelles je peux intervenir</p>
          </Col>
        </Row>

        {/* Cartes */}
        <Row className="g-4 align-items-stretch">
          <Col xs={12} md={4} lg={4}>
            <CardForServices
              className="card"
              title="UX Design"
              text="L'UX Design est une discipline qui consiste à concevoir des produits (sites web, applications mobiles, logiciels, objets connectés, etc.) en plaçant l'utilisateur au centre des préoccupations. L'ojesctif est de rendre l'expérience utilisateur la plus fluide et agréable possible."
              icon={BsBrush}
            />
          </Col>

          <Col xs={12} md={4} lg={4}>
            <CardForServices
              className="card"
              title="Développement Web"
              text="Le développement de sites web consiste à créer des sites internet en utilisant des langages de programmation (HTML, CSS, JavaScript, PHP, etc.) et des frameworks (Bootstrap, React, Angular, etc.)."
              icon={BsCodeSlash}
            />
          </Col>

          <Col xs={12} md={4} lg={4}>
            <CardForServices
              className="card"
              title="Référencement"
              text="Le référencement (SEO) est une technique qui consiste à otpimiser un site web pour le faire remonter dans les résultats des moteurs de recherche (Google, Bing, etc.). L'objectif est d'attirer un maximum de visiteurs qualifiés sur le site."
              icon={BsSearch}
            />
          </Col>
        </Row>
      </Container>

      <Footer />
    </>
  );
};

export default Services;
