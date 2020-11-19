import styled from "styled-components";
import { Card } from "react-bootstrap";

export const DayBlock = styled.div`
  padding: 0 10px;
  background-color: darkslategrey;
  text-align: center;
`;

export const CustomCard = styled(Card)`
  cursor: pointer;
`;

export const Title = styled.p`
  color: white;
  font-size: 25px;
  cursor: pointer;
`;
export const SessionsBlock = styled.div`
  width: 100%;
  height: 200px;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  heigth: auto;
  flex-wrap: wrap;
  justify-content: space-around;
`;

export const Block = styled.div`
  max-width: 1400px;
  background-color: black;
`;

export const SessionTitle = styled.p`
  margin: 0;
`;

export const SessionBlock = styled.div`
  width: 150px;
  padding: 5px;
  background-color: #ccc;
  cursor: pointer;
`;
