import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { dataActions } from "../reducers/Session/actions";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Button } from "react-bootstrap";
import {
  SessionPageWrapper,
  Info,
  Description,
  CloseModalButton,
  Space,
  Сhair,
} from "../styled/pages";

const SessionPage = ({ sesssion, modalIsOpen, setModalIsOpen, closeModal }) => {
  const dispatch = useDispatch();

  const data = localStorage.getItem("modal");
  localStorage.setItem("openModal", modalIsOpen);

  useEffect(() => {
    const openModal = localStorage.getItem("openModal");
    if (sesssion.name === data) {
      setModalIsOpen(openModal);
    }
  }, []);

  const selectchair = (id) => {
    dispatch(dataActions.bookPlace(id));
  };

  return (
    <>
      {modalIsOpen ? (
        <SessionPageWrapper>
          <CloseModalButton
            aria-label="Close modal"
            onClick={() => {
              closeModal();
            }}
          />
          <Row>
            <Col>
              <Info>{sesssion.name}</Info>
              <Info>Начало сеанса:{sesssion.time}</Info>
              <Info>
                Свободных мест {sesssion.totalPlaces - sesssion.booked}
              </Info>
            </Col>
            <Col>
              <Description>{sesssion.description}</Description>
            </Col>
          </Row>
          <Row>
            <Space>
              <Row>
                {sesssion.places.map((place) => {
                  return (
                    <Сhair
                      key={place.id}
                      onClick={() => selectchair(place.id)}
                    ></Сhair>
                  );
                })}
              </Row>
              <Row>
                <Col>
                  <Button variant="primary" size="lg">
                    Reserve
                  </Button>
                </Col>
              </Row>
            </Space>
          </Row>
        </SessionPageWrapper>
      ) : null}
    </>
  );
};

export default SessionPage;
