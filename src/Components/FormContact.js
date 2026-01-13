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

  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Row className="mb-3">
        <Form.Control
          required
          type="text"
          placeholder="Votre nom"
          minLength={2}
        />
        <Form.Control.Feedback type="invalid">
          Veuillez entrer votre nom (min 2 caractères).
        </Form.Control.Feedback>
      </Row>

      <Row className="mb-3">
        <Form.Control required type="email" placeholder="Votre adresse email" />
        <Form.Control.Feedback type="invalid">
          Veuillez entrer une adresse email valide.
        </Form.Control.Feedback>
      </Row>

      <Row className="mb-3">
        <Form.Control
          required
          type="tel"
          placeholder="Votre numéro de téléphone"
          pattern="^(\+33|0)[1-9](\d{2}){4}$"
        />
        <Form.Control.Feedback type="invalid">
          Numéro invalide (ex : 0612345678 ou +33612345678).
        </Form.Control.Feedback>
      </Row>

      <Row className="mb-3">
        <Form.Control required type="text" placeholder="Sujet" minLength={3} />
        <Form.Control.Feedback type="invalid">
          Le sujet doit contenir au moins 3 caractères.
        </Form.Control.Feedback>
      </Row>

      <Row className="mb-3">
        <Form.Control
          as="textarea"
          placeholder="Votre message"
          required
          minLength={10}
          rows={15}
        />
        <Form.Control.Feedback type="invalid">
          Le message doit contenir au moins 10 caractères.
        </Form.Control.Feedback>
      </Row>
      <div class="d-flex justify-content-center">
        <Button type="submit">Envoyer</Button>
      </div>
    </Form>
  );
}

export default FormContact;
