import React, { FunctionComponent } from "react";
import styled from "styled-components";

const StyledSection = styled.div`
  font-family: proxima-nova, Helvetica, Arial, sans-serif;
  padding: 40px;
`;

export const Section = React.forwardRef((props, ref) => {
  return (
    <StyledSection ref={ref}>
      <h1>{props.sectionName}</h1>
      {props.children}
    </StyledSection>
  );
});

export default Section;
