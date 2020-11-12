import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { dataActions } from "../reducers/Session/actions";
import { selectData } from "../reducers/Session/selectors";

import Day from "../components/Day";
import { MainPageWrapper } from "../styled/pages";

// import { data } from "../constants/data";

const MainPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(dataActions.fetchData());
  }, []);

  const data = useSelector(selectData);

  return (
    <MainPageWrapper>
      {data &&
        data.map((item) => {
          return <Day item={item} key={item.id}></Day>;
        })}
    </MainPageWrapper>
  );
};

export default MainPage;
