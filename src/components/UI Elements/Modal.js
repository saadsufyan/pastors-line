import React from "react";
import { Button, Modal } from "react-bootstrap";

const ModalComponent = (props) => {
  return (
    <Modal show={props.showModal} onHide={() => props.setShowModal(false)}>
      <Modal.Header closeButton>
        <Modal.Title>Modal {props.currentModal}</Modal.Title>
      </Modal.Header>
      <Modal.Body className="d-flex" style={{ gap: 10 }}>
        <Button onClick={() => props.setCurrentModal("A")}>
          Modal Button A
        </Button>
        <Button onClick={() => props.setCurrentModal("B")} className="ml-3">
          Modal Button B
        </Button>
        <Button onClick={() => props.setShowModal(false)} className="ml-3">
          Close
        </Button>
      </Modal.Body>
      <Modal.Footer>
        <form>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="defaultCheck1"
            />
            <label className="form-check-label" htmlFor="defaultCheck1">
              Only even
            </label>
          </div>
        </form>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalComponent;
