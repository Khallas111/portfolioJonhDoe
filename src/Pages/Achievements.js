import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import banner from "../assets/images/banner.jpg";
import { Container, Row, Col } from "react-bootstrap";
import Image from "react-bootstrap/Image";
const Achievements = () => {
  return (
    <div>
      <Header />
      {/* Image Bannière */}
      <Image src={banner} fluid alt="Bannière services" className="mb-4" />
      <Container className="services mb-5"></Container>
      <h1>Portfolio</h1>
      <Footer />
    </div>
  );
};

export default Achievements;
