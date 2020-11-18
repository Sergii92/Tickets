import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Accordion, Card, CardDeck } from "react-bootstrap";

import Session from "./Session";

import { dataActions, selectSessions } from "../redux/ducks/session";
import { ComponentProps, IsessionData } from "../interfaces";

const Day = ({ day }: ComponentProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const dispatch = useDispatch();

  const open = () => {
    if (isOpen) {
      setIsOpen(!isOpen);
    } else {
      setIsOpen(!isOpen);
      dispatch(dataActions.fetchSession());
    }
  };

  const sessionsData: Array<IsessionData> = useSelector(selectSessions);

  return (
    <Accordion>
      <Card onClick={open}>
        <Accordion.Toggle
          as={Card.Header}
          eventKey={`${day.id}`}
          style={{ cursor: "pointer" }}
        >
          {day.name}
        </Accordion.Toggle>
        <Accordion.Collapse eventKey={`${day.id}`}>
          <Card.Body>
            <CardDeck>
              {sessionsData &&
                sessionsData
                  .filter((item) => item.daysId === day.id)
                  .map((sesssion) => (
                    <Session key={sesssion.id} sesssion={sesssion} />
                  ))}
            </CardDeck>
          </Card.Body>
        </Accordion.Collapse>
      </Card>
    </Accordion>
  );
};

export default Day;
