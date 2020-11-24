import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import MainPage from "../pages/MainPage";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { Iday } from "../interfaces";
import { dataActions, selectDays } from "../redux/ducks/session";

const App: React.FC = () => {
  const dispatch = useDispatch();

  const days: Array<Iday> = useSelector(selectDays);

  useEffect(() => {
    dispatch(dataActions.fetchData());
  }, []);

  return (
    <Container>
      <Row>
        <MainPage days={days} />
      </Row>
    </Container>
  );
};

export default App;
