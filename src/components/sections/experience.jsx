import React from "react";
import styled from "styled-components";
import Stock from "./stock";

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
  height,
  stockComponent
}) => {
  const ImportComponent =
    (stockComponent && React.lazy(() => import(`./${stockComponent}`))) || null;

  return (
    <React.Fragment>
      <h2>{company}</h2>
      {sub && <p>{sub}</p>}
      <p>{title}</p>
      <p>{tenure}</p>
      <Logo logo={logo} width={width} height={height}></Logo>
      {ImportComponent && (
        <React.Suspense fallback={<div>Loading...</div>}>
          <ImportComponent />
        </React.Suspense>
      )}
    </React.Fragment>
  );
};

export default ExperienceContainer;
