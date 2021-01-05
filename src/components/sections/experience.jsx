import React from "react";
import styled from "styled-components";
import Stock from "./stock";

const Wrapper = styled.div`
  overflow-y: hidden;
  overflow-x: hidden;
  margin: 0 auto;
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-template-rows: 1fr;
  grid-template-areas: "header content";
  column-gap: 5px;
`;

const HeaderSection = styled.div`
  grid-area: header;
`;

const ContentSection = styled.div`
  grid-area: content;
  margin: 20px;
  font-size: smaller;
`;

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
  lastClose,
  stockUp,
  content
}) => {
  return (
    <React.Fragment>
      <Wrapper>
        <HeaderSection>
          <h2>{company}</h2>
          {sub && <p>{sub}</p>}
          <p>{title}</p>
          <p>{tenure}</p>
          <Logo logo={logo} width={width} height={height}></Logo>
          <Stock lastClose={lastClose} stockUp={stockUp} />
        </HeaderSection>
        <ContentSection>
          {content && content.length && content.map((c) => <p>{c}</p>)}
        </ContentSection>
      </Wrapper>
    </React.Fragment>
  );
};

export default ExperienceContainer;
