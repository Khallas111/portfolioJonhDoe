import { Row, Col, Card } from "react-bootstrap";
import VoirSite from "../BoutonsPortfolio";

const CardsForPortfolio = ({ cards, cols = 3 }) => {
  const colSize = Math.floor(12 / cols);

  return (
    <Row className="g-4">
      {cards.map((card, index) => (
        <Col key={index} xs={12} md={colSize}>
          <Card className="h-100">
            <Card.Img
              variant="top"
              src={card.image}
              alt={card.label ? card.label : "Image du projet"}
            />

            <Card.Body className="d-flex flex-column ">
              <Card.Title>{card.label}</Card.Title>
              <Card.Text className="flex-grow-1 ">{card.description}</Card.Text>

              <VoirSite slug={card.slug} published={card.published} />
            </Card.Body>

            <Card.Footer className="px-0">
              <small className="text-muted">{card.footer}</small>
            </Card.Footer>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default CardsForPortfolio;
