import React, { useState, useEffect } from "react";
import styled from "styled-components";

import { data } from "../../constants/data";
import Day from "../../components/Day/Day";

const MainPageWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  width: 80%;
  max-width: 1400px;
  background-color: white;
  position: absolute;
  padding-top: 20px;
  padding-bottom: 20px;
  margin-top: 20px;
  margin-bottom: 20px;
  left: 50%;

  transform: translate(-50%);
`;

const MainPage = () => {
  const [sessionDays, setsessionDays] = useState(null);

  const getSessionDays = async () => {
    try {
      const responce = await fetch(" http://localhost:3004/sessionsDays");
      const data = await responce.json();
      setsessionDays(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getSessionDays();
  }, []);

  console.log(sessionDays);

  return (
    <MainPageWrapper>
      {data.sessionsDays.map((item) => {
        return <Day item={item} key={item.id}></Day>;
      })}
    </MainPageWrapper>
  );
};

export default MainPage;
