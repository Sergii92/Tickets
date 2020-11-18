import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { Card } from "react-bootstrap";
import SessionPage from "../pages/SessionPage";

import { dataActions } from "../redux/ducks/session";

import { SessionTitle, SessionBlock } from "../styled/components";

import { history } from "../constants/history";

const Session = ({ sesssion }: any) => {
  const dispatch = useDispatch();

  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = (id: string) => {
    setModalIsOpen(!modalIsOpen);
    dispatch(dataActions.fetchPlaces());
    history.push(`/sesssion${id}`);

    localStorage.setItem("modal", id);
  };

  const closeModal = () => {
    setModalIsOpen(!modalIsOpen);

    history.push(`/home`);
    localStorage.clear();
  };

  return (
    <>
      <Card className="text-center" onClick={() => openModal(sesssion.id)}>
        <Card.Body>
          <Card.Title>{sesssion.sessionName}</Card.Title>
          <Card.Text>Open For get more Information</Card.Text>
          <Card.Text>
            <small className="text-muted">Session Time:{sesssion.time}</small>
          </Card.Text>
        </Card.Body>
      </Card>

      {/* <SessionBlock onClick={() => openModal(sesssion.id)}>
        <SessionTitle>{sesssion.time}</SessionTitle>
        <SessionTitle>{sesssion.sessionName}</SessionTitle>
      </SessionBlock> */}
      <SessionPage
        modalIsOpen={modalIsOpen}
        sesssion={sesssion}
        setModalIsOpen={setModalIsOpen}
        closeModal={closeModal}
      />
    </>
  );
};

export default Session;
