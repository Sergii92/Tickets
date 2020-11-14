import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { dataActions } from "../reducers/Session/actions";
import { selectDays } from "../reducers/Session/selectors";

import Day from "../components/Day";
import { MainPageWrapper } from "../styled/pages";

const MainPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(dataActions.fetchData());
  }, []);

  const days = useSelector(selectDays);
  console.log(days);
  return (
    <MainPageWrapper>
      {days && days.map((day) => <Day day={day} key={day.id} />)}
    </MainPageWrapper>
  );
};

export default MainPage;
