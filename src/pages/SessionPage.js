import React, { useEffect } from "react";

import {
  SessionPageWrapper,
  MainBlock,
  InfoBlock,
  Info,
  DescriptionBlock,
  Description,
  CloseModalButton,
} from "../styled/pages";

const SessionPage = ({ sesssion, modalIsOpen, setModalIsOpen, closeModal }) => {
  const data = localStorage.getItem("modal");
  localStorage.setItem("openModal", modalIsOpen);

  console.log(data);
  useEffect(() => {
    const openModal = localStorage.getItem("openModal");
    if (sesssion.name === data) {
      setModalIsOpen(openModal);
    }
  }, []);

  return (
    <>
      {modalIsOpen ? (
        <SessionPageWrapper>
          <CloseModalButton
            aria-label="Close modal"
            onClick={() => {
              closeModal();
            }}
          />
          <MainBlock>
            <InfoBlock>
              <Info>{sesssion.name}</Info>
              <Info>Начало сеанса:{sesssion.time}</Info>
              <Info>
                Свободных мест {sesssion.totalPlaces - sesssion.booked}
              </Info>
            </InfoBlock>
            <DescriptionBlock>
              <Description>{sesssion.description}</Description>
            </DescriptionBlock>
          </MainBlock>
        </SessionPageWrapper>
      ) : null}
    </>
  );
};

export default SessionPage;
