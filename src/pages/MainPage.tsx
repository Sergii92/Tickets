import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import Day from "../components/Day";

import { dataActions, selectDays } from "../redux/ducks/session";

import { MainPageWrapper } from "../styled/pages";

const MainPage = () => {
  const dispatch = useDispatch();

  const days = useSelector(selectDays);
  useEffect(() => {
    dispatch(dataActions.fetchData());
  }, []);

  return (
    <MainPageWrapper>
      {days && days.map((day: any) => <Day day={day} key={day.id} />)}
    </MainPageWrapper>
  );
};

export default MainPage;
