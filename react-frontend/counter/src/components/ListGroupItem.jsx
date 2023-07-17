import React from "react";
import { ListGroup } from "react-bootstrap";

const ListGroupItem = ({ data }) => {
  return <ListGroup.Item>{data.thumbnail}</ListGroup.Item>;
};

export default ListGroupItem;
