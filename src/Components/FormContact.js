import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

function FormContact() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;

    if (!form.checkValidity()) {
      event.stopPropagation();
    }

    setValidated(true);
  };
  // Cet élément Form ne passe pas au W3C, il injecte un script ajoutant "alternative_form_signature=" et "visibility_annotation="
  // Je le laisse car je le trouve très stylé et les autres ne me plaisent pas :)
  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Row className="mb-3">
        <Form.Group controlId="contactName">
          <Form.Label>Nom</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Votre nom"
            minLength={2}
          />
        </Form.Group>
      </Row>

      <Row className="mb-3">
        <Form.Group controlId="contactEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            required
            type="email"
            placeholder="Votre adresse email"
          />
        </Form.Group>
      </Row>

      <Row className="mb-3">
        <Form.Group controlId="contactPhone">
          <Form.Label>Téléphone</Form.Label>
          <Form.Control
            required
            type="tel"
            placeholder="Votre numéro de téléphone"
            pattern="^(\+33|0)[1-9](\d{2}){4}$"
            title="Exemple : 0612345678 ou +33612345678"
          />
        </Form.Group>
      </Row>

      <Row className="mb-3">
        <Form.Group controlId="contactSubject">
          <Form.Label>Sujet</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Sujet"
            minLength={3}
          />
        </Form.Group>
      </Row>

      <Row className="mb-3">
        <Form.Group controlId="contactMessage">
          <Form.Label>Message</Form.Label>
          <Form.Control
            as="textarea"
            placeholder="Votre message"
            required
            minLength={10}
            rows={6}
          />
        </Form.Group>
      </Row>

      <div className="d-flex justify-content-center">
        <Button type="submit">Envoyer</Button>
      </div>
    </Form>
  );
}

export default FormContact;
