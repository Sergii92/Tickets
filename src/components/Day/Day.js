import React from "react";

import styled from "styled-components";
import Session from "../Session/Session";

import "./style.css";

const DayBlock = styled.div`
  min-width: 120px;

  padding: 0 10px;
  background-color: darkslategrey;
  text-align: center;
`;

const Title = styled.p`
  color: white;
  font-size: 25px;
`;
const SessionsBlock = styled.div`
  width: 1000px;
  display: flex;
  heigth: auto;
  flex-wrap: wrap;
  justify-content: space-around;
`;

const Day = ({ item }) => {
  console.log(item);
  return (
    <div className="day">
      <DayBlock>
        <Title>{item.dayName}</Title>
      </DayBlock>
      <SessionsBlock>
        {item &&
          item.sessions.map((sesssion) => {
            return <Session key={sesssion.id} sesssion={sesssion} />;
          })}
      </SessionsBlock>
    </div>
  );
};

export default Day;
