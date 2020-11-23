import React from "react";

import Day from "../components/Day";
import { MainPageWrapper } from "../styled/pages";
import { Iday } from "../interfaces";

interface Props {
  days: Array<Iday>;
}

const MainPage = ({ days }: Props) => {
  return (
    <MainPageWrapper>
      {days && days.map((day: Iday) => <Day day={day} key={day.id} />)}
    </MainPageWrapper>
  );
};

export default MainPage;
