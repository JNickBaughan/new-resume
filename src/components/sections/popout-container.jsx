import React from "react";
import styled from "styled-components";

const Container = styled.div`
  padding: 1rem;
  display: grid;
  min-height: 11.25rem;
  border-width: 1px;
  border-radius: 2px;
  border-style: solid;
  align-items: center;
  background-color: #ffffff;
  color: #10162f;
  border-color: #10162f;
  position: relative;
  padding: 25px;
  margin: ${(props) => (props.margin ? props.margin : "15px 0")};
  margin-bottom: ${(props) => (props.bottom ? props.bottom : "15px")};
  &:hover {
    border-left-width: 4px;
    border-bottom-width: 4px;
  }
`;

const PopoutContainer = (props) => {
  return (
    <Container bottom={props.bottom} margin={props.margin}>
      {props.children}
    </Container>
  );
};

export default PopoutContainer;
