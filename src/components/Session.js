import React, { useState } from "react";

import Col from "react-bootstrap/Button";

import SessionPage from "../pages/SessionPage";
import { SessionTitle } from "../styled/components";

export const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    background: "#ccc",
  },
};

const Session = ({ sesssion }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const openModal = () => {
    setModalIsOpen(!modalIsOpen);
  };

  return (
    <Col onClick={openModal}>
      <SessionTitle>{sesssion.time}</SessionTitle>
      <SessionTitle>{sesssion.name}</SessionTitle>
      <SessionTitle>
        Free places:{sesssion.totalPlaces - sesssion.booked}
      </SessionTitle>
      <SessionTitle>Booked places:{sesssion.booked}</SessionTitle>
      <SessionPage
        sesssion={sesssion}
        modalIsOpen={modalIsOpen}
        setModalIsOpen={setModalIsOpen}
      />
      {/* <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        style={customStyles}
      >
        <Button onClick={closeModal} variant="danger">
          Close
        </Button>
        <SessionPage sesssion={sesssion} />
      </Modal> */}
    </Col>
  );
};

export default Session;
