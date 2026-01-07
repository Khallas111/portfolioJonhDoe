import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

const Services = () => {
  return (
    <div>
      <Header />
      <div className="titre">
        <h1>Mon offre de services</h1>
        <p>Voici les prestations sur lesquelles je peux intervenir</p>
      </div>
      <div className="services"></div>
      <Footer />
    </div>
  );
};

export default Services;
