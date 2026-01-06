import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

const Home = () => {
  const Progress = ({ label, value, color }) => (
    <div className="mb-3">
      <div className="d-flex justify-content-between">
        <span>{label}</span>
      </div>

      <div className="progress">
        <div
          className={`progress-bar bg-${color}`}
          role="progressbar"
          style={{ width: `${value}%` }}
          aria-valuenow={value}
          aria-valuemin="0"
          aria-valuemax="100"
        />
      </div>
    </div>
  );

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
      <div className="competences">
        <h3>Mes compétences</h3>
        <Progress label="Html5 90%" value={90} color="danger" />
        <Progress label="CSS3 80%" value={80} color="info" />
        <Progress label="Javascript 70%" value={70} color="warning" />
        <Progress label="PHP 60%" value={60} color="success" />
        <Progress
          label="React 50%"
          value={50}
          color="primary
"
        />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
