import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import Day from "../components/Day";
import { MainPageWrapper } from "../styled/pages";

import { dataActions, selectDays } from "../redux/ducks/session";
import { Iday } from "../interfaces";

const MainPage = () => {
  const dispatch = useDispatch();

  const days: Array<Iday> = useSelector(selectDays);
  useEffect(() => {
    dispatch(dataActions.fetchData());
  }, []);

  return (
    <MainPageWrapper>
      {days && days.map((day: Iday) => <Day day={day} key={day.id} />)}
    </MainPageWrapper>
  );
};

export default MainPage;
