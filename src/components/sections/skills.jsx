import React from "react";
import styled from "styled-components";

import Section from "./section";
import SectionTitle from "./section-title";
import SkillContainer from "./skill-container";

const SkillSubSection = styled.div`
  display: flex;
`;

const TitleSection = styled.div`
  flex-grow: 2;
`;

const SkillRow = styled.div`
  display: flex;
`;

const SkillPanel = styled.div`
  flex-grow: 1;
  grid-area: one;
  height: 100%;
`;

const Container = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(auto-fill, 120px);
  grid-row-gap: 0.5em;
  grid-column-gap: 1em;
`;

const SkillsSection = React.forwardRef((props, ref) => {
  const { skills, sectionTitle } = props.section;
  return (
    <Section ref={ref}>
      <SectionTitle sectionTitle={sectionTitle} width={200} centerWidth={1} />
      <h4>Languages, Scripts, & Markups</h4>
      {/* <SkillRow>
        <SkillPanel>
          <SkillContainer progress={60} />
          <SkillContainer progress={60} />
          <SkillContainer progress={60} />
          <SkillContainer progress={60} />
        </SkillPanel>
        <SkillPanel>
          <SkillContainer progress={60} />
          <SkillContainer progress={60} />
          <SkillContainer progress={60} />
          <SkillContainer progress={60} />
        </SkillPanel>
      </SkillRow> */}
    </Section>
  );
});

export default SkillsSection;
