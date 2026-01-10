import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { Container, Row, Col } from "react-bootstrap";
import herobg from "../assets/images/hero-bg.jpg";
import johndoeabout from "../assets/images/john-doe-about.jpg";
import Card from "react-bootstrap/Card";
import "../styles/Home.scss";
import About from "../Components/tools/BoutonModale";

//----------------------------------------
//  Création du composant Hero
const Hero = () => (
  <section
    className="hero-card text-white d-flex align-items-center"
    style={{ backgroundImage: `url(${herobg})` }}
  >
    <div className="hero-overlay w-100 text-center">
      <h1>Bonjour, je suis John Doe</h1>
      <h2>Développeur web full stack</h2>
      <About />
    </div>
  </section>
);

//------------------------------------------------------------------------
//  Création du composant Progress
const Progress = ({ label, value, color }) => (
  <div className="mb-3">
    <div className="d-flex justify-content-between">
      <span>{label}</span>
      <span>{value}%</span>
    </div>

    <div className="progress">
      <div
        className={`progress-bar bg-${color}`}
        style={{ width: `${value}%` }}
      />
    </div>
  </div>
);
//------------------------------------------------------------------------
//  Création du composant DoubleCard (composant du milieu de la page d'accueil)
const DoubleCard = () => (
  <Container className="border rounded-3 my-4 p-3 shadow">
    <Row className="g-4">
      <Col xs={12} md={6}>
        <Card className="border-0">
          <Card.Body>
            <div className="section-title">À propos</div>
            <Card.Img
              src={johndoeabout}
              alt="Jonh Doe travaillant sur un projet"
              className="jonhdoe-about-img mb-4"
            />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
              dolor quas, vitae voluptatum omnis fugit nobis itaque ducimus.
              Omnis rerum inventore illo vel aliquid delectus.
            </p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Quibusdam ullam amet, vel placeat laboriosam at, commodi fuga id
              autem adipisci exercitationem! Deleniti corporis sit assumenda.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
              aut, magni perspiciatis earum ex nobis veritatis, enim harum
              tempora veniam accusamus repellendus quas, nostrum nemo!
            </p>
          </Card.Body>
        </Card>
      </Col>

      <Col xs={12} md={6}>
        <Card className="border-0">
          <Card.Body>
            <div className="section-title">Mes compétences</div>

            <Progress label="HTML5" value={90} color="danger" />
            <Progress label="CSS3" value={80} color="info" />
            <Progress label="JavaScript" value={70} color="warning" />
            <Progress label="PHP" value={60} color="success" />
            <Progress label="React" value={50} color="primary" />
          </Card.Body>
        </Card>
      </Col>
    </Row>
  </Container>
);

const Home = () => {
  return (
    <>
      <Header />

      <Hero />
      <DoubleCard />

      <Footer />
    </>
  );
};

export default Home;
