import { Row, Col, Card } from "react-bootstrap";

const CardsForPortfolio = ({ cards, cols = 3 }) => {
  const colSize = Math.floor(12 / cols);
  return (
    <Row className="g-4">
      {cards.map((card, index) => (
        <Col key={index} xs={12} md={colSize}>
          <Card className="h-100">
            <Card.Img variant="top" src={card.image} />
            <Card.Body className="d-flex flex-column">
              <Card.Title>{card.title}</Card.Title>
              <Card.Text className="flex-grow-1">{card.text}</Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">{card.footer}</small>
            </Card.Footer>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default CardsForPortfolio;
