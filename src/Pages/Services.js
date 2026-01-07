import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import CardForServices from "../Components/tools/cards/CardsForServices";
const Services = () => {
  return (
    <div>
      <Header />
      <div className="titre">
        <h1>Mon offre de services</h1>
        <p>Voici les prestations sur lesquelles je peux intervenir</p>
      </div>
      <div className="services"></div>
      <CardForServices
        title="UX Design"
        text="L'UX Design est une discipline qui consiste à concevoir des produits (sites web, applivations mobiles, logiciels, objets connectés, etc.) en plaçant l'utilisateur au centre des précoccupations. L'objectif est de rendre l'expérience utilisateur la plus fluide et agréable possible."
        img="https://via.placeholder.com/300x200"
      />
      <CardForServices
        title="Développement Web"
        text="Le développement de sites web consiste à créer des sites internet en utilisant des langages de programmation (HTML, CSS, JavaScript, PHP, etc.) et des frameworks (Bootstrap, React, Angular, etc.)."
        img="https://via.placeholder.com/300x200"
      />
      <CardForServices
        title="Référencement"
        text="Le référencement naturel (SEO) est une technique qui consiste à optimiser un site web pour le faire remonter dans les résultats des moteurs de recherche (Google, Bing, Yahoo, etc.). L'objectif est d'attirer un maximum de visiteurs qualifiés sur le site."
        img="https://via.placeholder.com/300x200"
      />
      <Footer />
    </div>
  );
};

export default Services;
