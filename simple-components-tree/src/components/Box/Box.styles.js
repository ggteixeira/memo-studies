import styled from "styled-components";

export const BoxContainer = styled.div`
  // display: flex;
  margin: 1rem;
  min-width: 250px;
  min-height: 250px;
  margin-inline: 0;
  // border: ${(props) => props.$boxColor} 5px solid;
  border: #223647 5px solid;
  padding: 1rem;
  background-color: ${(props) =>
    props.$blinkSelf || props.$forceBlink
      ? (props) => props.$boxColor
      : "#FFFFFF"};
  transition: 0.5s;
`;
