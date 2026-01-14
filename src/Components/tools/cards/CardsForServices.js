import Card from "react-bootstrap/Card";

function CardForServices({ title, text, icon: Icon }) {
  return (
    <Card className="text-center p-3 h-100">
      <div className="display-4 text-primary mb-3">
        <Icon aria-hidden="true" />
      </div>

      <Card.Body>
        <Card.Title as="div" className="card-title">
          {title}
        </Card.Title>
        <Card.Text>{text}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default CardForServices;
