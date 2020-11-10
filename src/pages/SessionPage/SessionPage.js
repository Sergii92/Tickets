import React from "react";

import styled from "styled-components";

const SessionPageWrapper = styled.div`
  width: 800px;
  height: 800px;
  background-color: black;
  position: relative;
`;
const MainBlock = styled.div`
  width: 100%;
  display: flex;
  height: 400px;
`;

const DescriptionBlock = styled.div`
  color: #9d9d9d;
`;
const InfoBlock = styled.div`
  padding: 20px;
  color: white;
  font-size: 27px;
  width: 100%;
`;

const Description = styled.p`
  font-size: 30px;
  color: white;
`;

const Info = styled.p`
  font-size: 20px;
  color: white;
`;

const Spaces = styled.div``;

const SessionPage = ({ sesssion }) => {
  return (
    <SessionPageWrapper>
      <MainBlock>
        <InfoBlock>
          <Info>{sesssion.name}</Info>
          <Info>Начало сеанса:{sesssion.time}</Info>
          <Info>Свободных мест {sesssion.totalPlaces - sesssion.booked}</Info>
        </InfoBlock>
        <DescriptionBlock>
          <Description>{sesssion.description}</Description>
        </DescriptionBlock>
      </MainBlock>
    </SessionPageWrapper>
  );
};

export default SessionPage;
