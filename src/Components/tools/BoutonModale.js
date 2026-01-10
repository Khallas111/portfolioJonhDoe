import { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import Modale from "../Modale";

const About = () => {
  const [show, setShow] = useState(false);

  return (
    <>
      <Button onClick={() => setShow(true)}>En savoir plus</Button>

      <Modal show={show} onHide={() => setShow(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>
            <strong>Mon profil GitHub</strong>
          </Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Modale />
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShow(false)}>
            Fermer
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default About;
