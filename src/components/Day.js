import React from "react";

import Session from "./Session";
import { DayBlock, Block, Title, SessionsBlock } from "../styled/components";

const Day = ({ item }) => {
  return (
    <Block>
      <DayBlock>
        <Title>{item.dayName}</Title>
      </DayBlock>
      <SessionsBlock>
        {item &&
          item.sessions.map((sesssion) => (
            <Session key={sesssion.id} sesssion={sesssion} />
          ))}
      </SessionsBlock>
    </Block>
  );
};

export default Day;
