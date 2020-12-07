import React from "react";
import styled from "styled-components";

const TitleGrid = styled.div`
  display: grid;
  width: ${(props) => `${props.width}px`};
  grid-template-columns: ${(props) => `1fr ${props.centerWidth}fr 1fr`};
  grid-template-areas: "start title end";
`;

const StartTitle = styled.div`
  grid-area: start;
  background-color: black;
  height: 3px;
  position: relative;
  bottom: -27px;
`;

const EndTitle = styled.div`
  grid-area: end;
  background-color: black;
  height: 3px;
  position: relative;
  bottom: -27px;
`;

const Title = styled.div`
  grid-area: title;
  margin: auto;
`;

const SectionTitle = ({ sectionTitle, width, centerWidth }) => {
  return (
    <TitleGrid width={width} centerWidth={centerWidth}>
      <StartTitle />
      <Title>
        <h3>{sectionTitle}</h3>
      </Title>
      <EndTitle />
    </TitleGrid>
  );
};

export default SectionTitle;
