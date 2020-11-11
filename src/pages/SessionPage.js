import React from "react";

import {
  SessionPageWrapper,
  MainBlock,
  InfoBlock,
  Info,
  DescriptionBlock,
  Description,
  CloseModalButton,
} from "../styled/pages";

const SessionPage = ({ sesssion, modalIsOpen, setModalIsOpen }) => {
  return (
    <>
      {modalIsOpen ? (
        <SessionPageWrapper>
          <CloseModalButton
            aria-label="Close modal"
            onClick={setModalIsOpen((prev) => !prev)}
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
