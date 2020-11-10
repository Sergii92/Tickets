import React, { useState } from "react";
import Modal from "react-modal";

import SessionPage from "../../pages/SessionPage/SessionPage";
import styled from "styled-components";

const SessionWrapper = styled.button`
  border-radius: 5px;
  width: 140px;
  margin-bottom: 20px;
  border: 1px solid black;
  padding: 5px;
  text-align: center;
  background-color: black;
  color: white;
  cursor: pointer;
  outline: none;
`;
const Title = styled.p`
  margin: 0;
`;
const Button = styled.button`
  width: 100px;
  height: 50px;
  line-height: 50px;
  margin-bottom: 20px;
  border-radius: 10px;
  outline: none;
`;
const customStyles = {
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

  const closeModal = () => {
    setModalIsOpen(!modalIsOpen);
    console.log("hei", modalIsOpen);
  };

  return (
    <SessionWrapper onClick={openModal}>
      <Title>{sesssion.time}</Title>
      <Title>{sesssion.name}</Title>
      <Title>Free places:{sesssion.totalPlaces - sesssion.booked}</Title>
      <Title>Booked places:{sesssion.booked}</Title>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        style={customStyles}
      >
        <Button onClick={closeModal}>Close</Button>
        <SessionPage sesssion={sesssion} />
      </Modal>
    </SessionWrapper>
  );
};

export default Session;
