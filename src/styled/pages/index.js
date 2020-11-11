import styled from "styled-components";
import { MdClose } from "react-icons/md";

export const MainPageWrapper = styled.div`
  width: 80%;
  max-width: 1400px;
  background-color: white;
  text-align: center;
  position: relative;
  padding-top: 20px;
  padding-bottom: 20px;
  margin-top: 20px;
  margin-bottom: 20px;
  left: 50%;

  transform: translate(-50%);
`;

export const SessionPageWrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgb(87, 97, 63);
  position: relative;
  z-index: 10;
  position: fixed;
  left: 0;
  top: 0;
`;
export const MainBlock = styled.div`
  width: 100%;
  display: flex;
  height: 400px;
`;

export const DescriptionBlock = styled.div`
  color: #9d9d9d;
`;
export const InfoBlock = styled.div`
  padding: 20px;
  color: white;
  font-size: 27px;
  width: 100%;
`;

export const Description = styled.p`
  font-size: 30px;
  color: white;
`;

export const Info = styled.p`
  font-size: 20px;
  color: white;
`;

export const CloseModalButton = styled(MdClose)`
  cursore: pointer;
  position: absolute;
  top: 20px;
  left: 20px;
  width: 32px;
  height: 32px;
  padding: 0;
  z-index: 10;
`;
