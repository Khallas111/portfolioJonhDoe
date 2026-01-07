import Card from "react-bootstrap/Card";

function CardForServices({ title, text, img }) {
  return (
    <Card className="mb-3">
      {img && <Card.Img variant="top" src={img} />}
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{text}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default CardForServices;
