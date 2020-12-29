import React from "react";
import styled from "styled-components";

const Logo = styled.div`
  width: ${(props) => `${props.width}px`};
  height: ${(props) => `${props.height}px`};
  background: url(${(props) => props.logo});
  background-repeat: no-repeat;
  padding: 10px;
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
    <React.Fragment>
      <h2>{company}</h2>
      {sub && <p>{sub}</p>}
      <p>{title}</p>
      <p>{tenure}</p>
      <Logo logo={logo} width={width} height={height}></Logo>
    </React.Fragment>
  );
};

export default ExperienceContainer;
