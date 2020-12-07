import React from "react";
import styled from "styled-components";

import Section from "./section";

const Grid = styled.div`
  overflow-y: hidden;
  overflow-x: hidden;
  margin: 0 auto;
  height: 620px;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-template-rows: 1fr 1fr 1fr 1fr;
  grid-template-areas:
    "languages-header languages-section"
    "tools-header tools-section"
    "header section"
    "header section";
`;

const Content = styled.p`
  color: rgb(102, 119, 136);
`;

const mapSkills = (skill, index, arr) => {
  return `${skill}${arr.length - 1 === index ? "" : ", "}`;
};

const SkillsSection = React.forwardRef((props, ref) => {
  const { skills, sectionTitle } = props.section;
  return (
    <Section ref={ref}>
      <h3>{sectionTitle}</h3>
      <Content>
        <h6>work with them everyday</h6>
        <strong>{skills.deep.map(mapSkills)}</strong>
        <h6>Broad Knowledge</h6>
        <strong>{skills.broad.map(mapSkills)}</strong>
        <h6>Used them... but it's been a while</h6>
        <strong>{skills.awhile.map(mapSkills)}</strong>
        <h6>Personal Projects</h6>
        <strong>{skills.hobby.map(mapSkills)}</strong>
      </Content>
    </Section>
  );
});

export default SkillsSection;
