import { Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function EditLectureFormModal({
  show,
  handleClose,
  editingLecture,
  setEditingLecture,
  handleEditSubmit,
}: any) {
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Lecture</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-2">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                value={editingLecture.title}
                onChange={(e) =>
                  setEditingLecture((prev: any) => {
                    return { ...prev, title: e.target.value };
                  })
                }
              ></Form.Control>
            </Form.Group>
            <Form.Group className="mb-2">
              <Form.Label>Content</Form.Label>
              <Form.Control
                type="text"
                value={editingLecture.content}
                onChange={(e) =>
                  setEditingLecture((prev: any) => {
                    return { ...prev, content: e.target.value };
                  })
                }
              ></Form.Control>
            </Form.Group>
            <Form.Group className="mb-2">
              <Form.Label>Duration</Form.Label>
              <Form.Control
                type="number"
                value={editingLecture.duration}
                onChange={(e) =>
                  setEditingLecture((prev: any) => {
                    return { ...prev, duration: e.target.value };
                  })
                }
              ></Form.Control>
            </Form.Group>
            <Form.Group className="mb-2">
              <Form.Label>File</Form.Label>
              <Form.Control type="file"></Form.Control>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button
            variant="primary"
            onClick={(e) => {
              handleEditSubmit(e);
            }}
          >
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default EditLectureFormModal;
