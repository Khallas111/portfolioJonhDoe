import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { Container, Row, Col } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";
import ContactBlock from "../Components/ContactBlock";

const Copyrights = () => {
  return (
    <>
      <Header />
      <Container>
        <Row className="text-center my-5">
          <Col className="service-title">
            <h1>Mentions légales</h1>
          </Col>
        </Row>
      </Container>
      <Container>
        <Accordion defaultActiveKey={["0"]} alwaysOpen>
          <Accordion.Item eventKey="0">
            <Accordion.Header>Editeur du site</Accordion.Header>
            <Accordion.Body>
              <strong>John Doe</strong>
              <ContactBlock />
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>Hébergeur</Accordion.Header>
            <Accordion.Body>
              <p>
                <strong>alwaysdata</strong>
              </p>
              <address>
                <a
                  href="https://www.google.com/maps/place/91+Rue+du+Faubourg+Saint-Honor%C3%A9,+75008+Paris/@48.8719813,2.3104796,17z/data=!3m1!4b1!4m6!3m5!1s0x47e66fc8ad65d767:0x4e1ca1a28b3ea404!8m2!3d48.8719778!4d2.3130545!16s%2Fg%2F11rg5xynms?entry=ttu&g_ep=EgoyMDI2MDEwNy4wIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                >
                  91 Rue du Faubourg Saint-Honoré, 75008 Paris
                </a>
              </address>
              <a href="www.alwaysdata.com">www.alwaysdata.com</a>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>Crédits</Accordion.Header>
            <Accordion.Body>
              <p>
                <strong>Crédits</strong>
              </p>
              <p>
                Ce site a été réalisé par Salim Khorchi, étudiant au{" "}
                <a href="https://www.centre-europeen-formation.fr/">
                  <strong>Centre Européen de Formation.</strong>
                </a>
              </p>
              <p>
                Les images illustrées sur ce site sont libres de droits et ont
                été obtenues sur le site{" "}
                <a href="https://pixabay.com/fr/">
                  <strong>Pixabay.</strong>
                </a>
              </p>
              <p>
                Le favicon de ce site a été fournie par{" "}
                <a href="https://www.flaticon.com/de/kostenlose-icons/john-doe">
                  <strong>Jonh doe Icons erstellt von Freepik-Flaticon.</strong>
                </a>{" "}
              </p>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Container>
      ;
      <Footer />
    </>
  );
};

export default Copyrights;
