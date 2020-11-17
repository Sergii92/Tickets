import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { dataActions } from "../reducers/Session/actions";
import { selectPlaces } from "../reducers/Session/selectors";
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

  const placesData = useSelector(selectPlaces);

  const freePlaces = placesData
    .filter((playces) => playces.sessionID === sesssion.id)
    .filter((place) => place.boocked === false);

  const sessionID = localStorage.getItem("id");

  useEffect(() => {
    const openModal = localStorage.getItem("openModal");
    if (sesssion.id === sessionID) {
      setModalIsOpen(openModal);
    }
  }, []);

  const selectchair = (id) => {
    console.log(id);
    dispatch(dataActions.bookedPlace(id));
  };

  const pudPlacesData = (data) => {
    dispatch(dataActions.putPlaces(data));
  };

  return (
    <>
      {modalIsOpen && (
        <SessionPageWrapper>
          <CloseModalButton
            aria-label="Close modal"
            onClick={() => {
              closeModal();
            }}
          />
          <Row>
            <Col>
              <Info>{sesssion.sessionName}</Info>
              <Info>Начало сеанса:{sesssion.time}</Info>
              <Info>
                Свободных мест:
                {freePlaces.length}
              </Info>
            </Col>
            <Col>
              <Description>{sesssion.description}</Description>
            </Col>
          </Row>
          <Row>
            <Space>
              <Row>
                {placesData &&
                  placesData
                    .filter((places) => places.sessionID === sesssion.id)
                    .map((place) => {
                      return (
                        <Сhair
                          key={place.id}
                          onClick={() => selectchair(place.id)}
                          boocked={place.boocked}
                        ></Сhair>
                      );
                    })}
              </Row>
              <Row>
                <Col>
                  <Button
                    variant="primary"
                    size="lg"
                    onClick={() => pudPlacesData(placesData)}
                  >
                    Reserve
                  </Button>
                </Col>
              </Row>
            </Space>
          </Row>
        </SessionPageWrapper>
      )}
    </>
  );
};

export default SessionPage;
