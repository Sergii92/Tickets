import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Card } from "react-bootstrap";

import { CustomCard } from "../styled/components";
import MyModal from "./Modal";

import { dataActions } from "../redux/ducks/session";
import { history } from "../constants/history";
import { IsessionProps } from "../interfaces";
import SingleCard from "./SingleCard";

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
      <SingleCard
        id={sesssion.id}
        sessionName={sesssion.sessionName}
        time={sesssion.time}
        onClick={() => handleShow(sesssion.id)}
      />
      <MyModal handleClose={handleClose} show={show} sesssion={sesssion} />
    </>
  );
};

export default Session;
