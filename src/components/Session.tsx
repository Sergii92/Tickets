import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Card } from "react-bootstrap";

import { CustomCard } from "../styled/components";
import MyModal from "./Modal";

import { dataActions } from "../redux/ducks/session";
import { history } from "../constants/history";
import { IsessionProps } from "../interfaces";

const Session = ({ sesssion }: IsessionProps) => {
  const dispatch = useDispatch();

  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
    history.push(`/home`);
  };
  const handleShow = (id: number) => {
    setShow(true);

    dispatch(dataActions.fetchPlaces());
    history.push(`/sesssion${id}`);
  };

  return (
    <>
      <CustomCard
        className="text-center"
        onClick={() => handleShow(sesssion.id)}
      >
        <Card.Body>
          <Card.Title>{sesssion.sessionName}</Card.Title>
          <Card.Text>Open For get more Information</Card.Text>
          <Card.Text>
            <small className="text-muted">Session Time:{sesssion.time}</small>
          </Card.Text>
        </Card.Body>
      </CustomCard>

      <MyModal handleClose={handleClose} show={show} sesssion={sesssion} />
    </>
  );
};

export default Session;
