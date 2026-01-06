import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

const Home = () => {
  return (
    <div className="accueil">
      <Header />
      <div className="hero">
        <h1>Bonjour, je suis Jonh Doe</h1>
        <h2>Développeur web full stack</h2>
        {/* bouton modale */}
      </div>
      <div className="propos">
        <h3>A propos</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut amet
          architecto maxime assumenda nisi, expedita nulla aliquam minus eum
          ipsam, sed voluptatibus nobis incidunt hic?
        </p>
        <br />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut amet
          architecto maxime assumenda nisi, expedita nulla aliquam minus eum
          ipsam, sed voluptatibus nobis incidunt hic?
        </p>
        <br />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut amet
          architecto maxime assumenda nisi, expedita nulla aliquam minus eum
          ipsam, sed voluptatibus nobis incidunt hic?
        </p>
      </div>
      <div className="compétences">
        <h3>Mes compétences</h3>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
