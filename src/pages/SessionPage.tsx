import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button, Col, Row } from "react-bootstrap";

import { dataActions, selectPlaces } from "../redux/ducks/session";

import {
  SessionPageWrapper,
  Info,
  Description,
  CloseModalButton,
  Space,
  Сhair,
} from "../styled/pages";

const SessionPage = ({
  sesssion,
  modalIsOpen,
  setModalIsOpen,
  closeModal,
}: any) => {
  const dispatch = useDispatch();

  const placesData: Array<any> = useSelector(selectPlaces);

  const freePlaces = placesData
    .filter((places: any) => places.sessionID === sesssion.id)
    .filter((place: any) => place.boocked === false);

  const sessionID = localStorage.getItem("id");

  useEffect(() => {
    const openModal = localStorage.getItem("openModal");
    if (sesssion.id === sessionID) {
      setModalIsOpen(openModal);
    }
  }, []);

  const selectchair = (id: number) => {
    dispatch(dataActions.bookedPlace(id));
  };

  const putPlacesData = (data: Array<any>) => {
    dispatch(dataActions.putPlaces(data));
  };

  return (
    <>
      {modalIsOpen && (
        <SessionPageWrapper>
          <CloseModalButton
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
                        />
                      );
                    })}
              </Row>
              <Row>
                <Col>
                  <Button
                    variant="primary"
                    size="lg"
                    onClick={() => putPlacesData(placesData)}
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
