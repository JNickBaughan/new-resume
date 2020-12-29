import React from "react";
import styled from "styled-components";

const Logo = styled.div`
  width: ${(props) => `${props.width}px`};
  height: ${(props) => `${props.height}px`};
  background: url(${(props) => props.logo});
  background-repeat: no-repeat;
  padding: 10px;
`;

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
  margin: 15px 0;
`;

const ExperienceContainer = ({
  logo,
  company,
  sub,
  title,
  tenure,
  width,
  height
}) => {
  return (
    <Container>
      <h2>{company}</h2>
      {sub && <p>{sub}</p>}
      <p>{title}</p>
      <p>{tenure}</p>
      <Logo logo={logo} width={width} height={height}></Logo>
    </Container>
  );
};

export default ExperienceContainer;
