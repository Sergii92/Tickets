import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { dataActions } from "../reducers/Session/actions";
import SessionPage from "../pages/SessionPage";
import { SessionTitle, SessionBlock } from "../styled/components";
import { history } from "../constants/history";

const Session = ({ sesssion }) => {
  const dispatch = useDispatch();

  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = (id) => {
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
      <SessionBlock onClick={() => openModal(sesssion.id)}>
        <SessionTitle>{sesssion.time}</SessionTitle>
        <SessionTitle>{sesssion.sessionName}</SessionTitle>
      </SessionBlock>
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
