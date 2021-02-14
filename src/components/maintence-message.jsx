import React from "react";
import styled, { keyframes } from "styled-components";

const fade = keyframes`
0% { opacity: 1 }
100% { opacity: 0 }
`;

const StyledMessageDiv = styled.div`
  width: 50em;
  top: 116px;
  left: 100px;
  text-align: center;
  position: absolute;
  border: solid 1px black;
  background-color: yellow;
  height: 184px;
  padding: 22px;
  z-index: 242;
  line-height: 41px;
  opacity: 0;
  animation: ${fade} 10s linear;
  transform: rotate(-13deg);
`;

export const MaintenanceMessage = () => {
  return (
    <StyledMessageDiv>
      <h2>THIS SITE IS UNDER MAINTENANCE</h2>
      My AWS account was hacked and my old site was deleted. I'm using this
      opportunity to rebuild this with React. Please bare with me as I get this
      site back up to what it used to be
    </StyledMessageDiv>
  );
};

export default MaintenanceMessage;
