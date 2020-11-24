import React from "react";

import { Card } from "react-bootstrap";

import { CustomCard } from "../styled/components";

interface CardProps {
  id: number;
  sessionName: string;
  time: string;
  onClick: () => void;
}

const SingleCard = ({ id, sessionName, time, onClick }: CardProps) => {
  return (
    <>
      <CustomCard className="text-center" onClick={onClick}>
        <Card.Body>
          <Card.Title>{sessionName}</Card.Title>
          <Card.Text>Open For get more Information</Card.Text>
          <Card.Text>
            <small className="text-muted">Session Time:{time}</small>
          </Card.Text>
        </Card.Body>
      </CustomCard>
    </>
  );
};

export default SingleCard;
