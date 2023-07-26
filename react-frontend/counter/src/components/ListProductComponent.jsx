import React, { useState } from "react";
import { Button, Card } from "react-bootstrap";

function ListProductComponent({ product, deleteProduct, editProduct }) {
  // const delProd = (e) => {
  //   e.preventDefault();
  //   deleteProduct(product.id);
  // };
  const [name, setName] = useState("");
  return (
    <Card style={{ width: "18rem", height: "400px" }}>
      <Card.Title variant="top" className="h-50">
        <img className="w-100 h-100" src={product.thumbnail} alt="" />
      </Card.Title>
      <Card.Body>
        <Card.Title>{product.title}</Card.Title>
        <Card.Text>{product.description}</Card.Text>
        <Button variant="info" onClick={() => editProduct(product)}>
          Edit
        </Button>
        <Button variant="danger" onClick={() => deleteProduct(product.id)}>
          Delete
        </Button>
      </Card.Body>
    </Card>
  );
}

export default ListProductComponent;
