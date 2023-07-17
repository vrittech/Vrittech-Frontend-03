import React from "react";
import { Button, Card } from "react-bootstrap";

function ListProductComponent({ product, deleteProduct }) {
  return (
    <Card style={{ width: "18rem", height: "400px" }}>
      <Card.Title variant="top" className="h-50">
        <img className="w-100 h-100" src={product.thumbnail} alt="" />
      </Card.Title>
      <Card.Body>
        <Card.Title>{product.title}</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="danger" onClick={(e) => deleteProduct(product.id)}>
          Delete Product
        </Button>
      </Card.Body>
    </Card>
  );
}

export default ListProductComponent;
