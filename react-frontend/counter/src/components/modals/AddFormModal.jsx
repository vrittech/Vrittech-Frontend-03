import React from "react";
import { Form, Modal } from "react-bootstrap";

const AddFormModal = (props) => {
  return (
    <Modal show={props.showModal} onHide={props.cancel}>
      <Modal.Header closeButton>
        <Modal.Title>{props.modalTitle}</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Product Image</Form.Label>
            <Form.Control
              onChange={(e) => {
                props.onChangeHandler(e);
                props.setImage(e.target.value);
              }}
              name="thumbnail"
              type="text"
              value={props.prod.thumbnail}
              placeholder="product image"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Product Name</Form.Label>
            <Form.Control
              onChange={(e) => {
                props.onChangeHandler(e);
                props.setTitle(e.target.value);
              }}
              type="text"
              name="title"
              value={props.prod.title}
              placeholder="product name"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Product Description</Form.Label>
            <Form.Control
              onChange={(e) => {
                props.onChangeHandler(e);
                props.setDescription(e.target.value);
              }}
              name="description"
              as="textarea"
              value={props.prod.description}
              rows={3}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <button
          type="button"
          className="btn btn-outline-secondary"
          onClick={props.edit ? props.editHandler : props.addProduct}
        >
          {props.edit ? "Edit Product" : " Add Product"}
        </button>
        <button
          type="button"
          className="btn btn-outline-danger"
          onClick={props.cancel}
        >
          Cancel
        </button>
      </Modal.Footer>
    </Modal>
  );
};

export default AddFormModal;
