import React from "react";
import styled from "styled-components";

import Section from "./section";
import SectionTitle from "./section-title";

const Content = styled.div`
  color: rgb(102, 119, 136);
`;

const mapSkills = (skill, index, arr) => {
  return `${skill}${arr.length - 1 === index ? "" : ", "}`;
};

const SkillsSection = React.forwardRef((props, ref) => {
  const { skills, sectionTitle } = props.section;
  return (
    <Section ref={ref}>
      <SectionTitle sectionTitle={sectionTitle} width={200} centerWidth={1} />
      <Content>
        <h6>Deep Knowledge - work with them everyday</h6>
        <strong>{skills.deep.map(mapSkills)}</strong>
        <hr />
        <h6>Broad Knowledge</h6>
        <strong>{skills.broad.map(mapSkills)}</strong>
        <hr />
        <h6>Personal Projects</h6>
        <strong>{skills.hobby.map(mapSkills)}</strong>
        <hr />
        <h6>Used them... but it's been a while</h6>
        <strong>{skills.awhile.map(mapSkills)}</strong>
        <hr />
      </Content>
    </Section>
  );
});

export default SkillsSection;
