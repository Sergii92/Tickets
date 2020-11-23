import React from "react";
import { ToastContainer, toast, Zoom } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSelector, useDispatch } from "react-redux";
import { Modal, Button } from "react-bootstrap";
import { Col, Row } from "react-bootstrap";

import { Сhair } from "../styled/pages";

import { dataActions, selectPlaces } from "../redux/ducks/session";
import { IplaceData } from "../interfaces";

const MyModal = ({ show, handleClose, sesssion }: any) => {
  const dispatch = useDispatch();

  const notify = () => {
    toast.success("Booled Success !", {
      position: "top-center",
      autoClose: 2000,
      transition: Zoom,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  const placesData: Array<IplaceData> = useSelector(selectPlaces);

  const freePlaces: Array<IplaceData> = placesData
    .filter((places: IplaceData) => places.sessionID === sesssion.id)
    .filter((place: IplaceData) => place.booked === false);

  const selectchair = (id: number) => dispatch(dataActions.bookedPlace(id));

  const putPlacesData = (data: Array<IplaceData>) => {
    dispatch(dataActions.putPlaces(data));

    notify();
    setTimeout(() => {
      handleClose();
    }, 2000);
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{sesssion.sessionName}</Modal.Title>
      </Modal.Header>
      <Modal.Header>
        <Modal.Title>Время Сеанса:{sesssion.time}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{sesssion.description}</Modal.Body>
      <Modal.Footer style={{ justifyContent: "center" }}>
        <Row>
          {placesData &&
            placesData
              .filter((places) => places.sessionID === sesssion.id)
              .map((place) => {
                return (
                  <Сhair
                    key={place.id}
                    onClick={() => selectchair(place.id)}
                    booked={place.booked}
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
            <ToastContainer
              position="top-center"
              autoClose={2000}
              hideProgressBar={false}
              newestOnTop={false}
              transition={Zoom}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
            />
          </Col>
          <Col>Свободных мест:{freePlaces.length}</Col>
        </Row>
      </Modal.Footer>
    </Modal>
  );
};

export default MyModal;
