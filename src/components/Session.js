import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { dataActions } from "../reducers/Session/actions";
import SessionPage from "../pages/SessionPage";
import { SessionTitle, SessionBlock } from "../styled/components";
import { history } from "../constants/history";

const Session = ({ sesssion }) => {
  const dispatch = useDispatch();

  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = (e) => {
    history.push(`/session`);
    setModalIsOpen(!modalIsOpen);
    localStorage.setItem("modal", sesssion.name);
    dispatch(dataActions.getPlaces(sesssion.id));
  };

  const closeModal = () => {
    setModalIsOpen(!modalIsOpen);

    history.push(`/home`);
    localStorage.clear();
  };

  return (
    <>
      <SessionBlock onClick={openModal}>
        <SessionTitle>{sesssion.time}</SessionTitle>
        <SessionTitle>{sesssion.name}</SessionTitle>
        <SessionTitle>
          Free places:{sesssion.totalPlaces - sesssion.booked}
        </SessionTitle>
        <SessionTitle>Booked places:{sesssion.booked}</SessionTitle>
      </SessionBlock>
      <SessionPage
        sesssion={sesssion}
        modalIsOpen={modalIsOpen}
        setModalIsOpen={setModalIsOpen}
        closeModal={closeModal}
      />
    </>
  );
};

export default Session;
