import styled from "styled-components";

export const DayBlock = styled.div`
  padding: 0 10px;
  background-color: darkslategrey;
  text-align: center;
`;

export const Title = styled.p`
  color: white;
  font-size: 25px;
`;
export const SessionsBlock = styled.div`
  width: 100%;
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

export const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    background: "#ccc",
  },
};
