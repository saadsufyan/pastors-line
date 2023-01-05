import React, { useState } from "react";
import { Button } from "react-bootstrap";
import ModalComponent from "../../components/UI Elements/Modal";

function Home() {
  const [showModal, setShowModal] = useState(false);
  const [currentModal, setCurrentModal] = useState("A");

  return (
    <div className="d-flex align-items-center vh-100">
      <div className="mx-auto my-auto d-flex" style={{ gap: 10 }}>
        <Button
          variant="primary"
          onClick={() => {
            setShowModal(true);
            setCurrentModal("A");
          }}
        >
          Button A
        </Button>
        <Button
          variant="secondary"
          onClick={() => {
            setShowModal(true);
            setCurrentModal("A");
          }}
        >
          Button B
        </Button>
        {showModal && (
          <ModalComponent
            showModal={showModal}
            setShowModal={setShowModal}
            currentModal={currentModal}
            setCurrentModal={setCurrentModal}
            data
          />
        )}
      </div>
    </div>
  );
}

export default Home;

/*
{currentModal === "A" && (
        <Modal show={showModalA} onHide={() => setShowModalA(false)}>
          <Modal.Header closeButton>
            <Modal.Title>Modal A</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Button onClick={() => setCurrentModal("A")}>Modal Button A</Button>
            <Button onClick={() => setCurrentModal("B")} className="ml-3">
              Modal Button B
            </Button>
            <Button onClick={() => setShowModalA(false)} className="ml-3">
              Modal Button C
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
*/
