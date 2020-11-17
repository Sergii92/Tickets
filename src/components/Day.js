import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { dataActions } from "../reducers/Session/actions";
import { selectSessions } from "../reducers/Session/selectors";
import Session from "./Session";
import { DayBlock, Block, Title, SessionsBlock } from "../styled/components";

const Day = ({ day }) => {
  const dispatch = useDispatch();

  const [openSessions, setOpenSessions] = useState(false);

  const open = () => {
    if (openSessions) {
      setOpenSessions(!openSessions);
    } else {
      setOpenSessions(!openSessions);
      dispatch(dataActions.fetchSession());
    }
  };

  const sessionsData = useSelector(selectSessions);

  return (
    <Block>
      <DayBlock onClick={() => open()}>
        <Title>{day.name}</Title>
      </DayBlock>
      {openSessions && (
        <SessionsBlock>
          {sessionsData &&
            sessionsData
              .filter((item) => item.daysId === day.id)
              .map((sesssion) => (
                <Session key={sesssion.id} sesssion={sesssion} />
              ))}
        </SessionsBlock>
      )}
    </Block>
  );
};

export default Day;
