import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { dataActions } from "../reducers/Session/actions";
import { selectDays } from "../reducers/Session/selectors";

import Day from "../components/Day";
import { MainPageWrapper } from "../styled/pages";

const MainPage = () => {
  const dispatch = useDispatch();

  const days = useSelector(selectDays);
  useEffect(() => {
    dispatch(dataActions.fetchData());
  }, []);

  return (
    <MainPageWrapper>
      {days && days.map((day) => <Day day={day} key={day.id} />)}
    </MainPageWrapper>
  );
};

export default MainPage;
