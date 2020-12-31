import React from "react";
import styled from "styled-components";

import Section from "./section";
import SectionTitle from "./section-title";
import PopoutContainer from "./popout-container";

const Wrapper = styled.div`
  color: rgb(102, 119, 136);
  overflow-y: hidden;
  overflow-x: hidden;
  margin: 0 auto;
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  grid-template-areas:
    "one one two two"
    "three three four four";
`;

const Container = styled.div`
  grid-area: ${(props) => `${props.section}`};
  height: 100%;
  width: 100%;
  padding: -9px;
`;

const Anchor = styled.a`
  text-decoration: none;
  color: #d35b3f;
  &:hover {
    border-bottom: 2px solid #d35b3f;
  }
`;

const mapSkills = (skill, index, arr) => {
  const separator = arr.length - 1 === index ? "" : ",  ";
  return skill.skill ? (
    <Anchor
      target="_blank"
      href={skill.url}
    >{`${skill.skill}${separator}`}</Anchor>
  ) : (
    <span>{`${skill}${separator}`}</span>
  );
};

const SkillsSection = React.forwardRef((props, ref) => {
  const { skills, sectionTitle } = props.section;
  return (
    <Section ref={ref}>
      <SectionTitle sectionTitle={sectionTitle} width={200} centerWidth={1} />
      <Wrapper>
        <Container section={"one"}>
          <PopoutContainer margin={"15px 15px"}>
            <h6>Deep Knowledge - work with them everyday</h6>
            <strong>{skills.deep.map(mapSkills)}</strong>
          </PopoutContainer>
        </Container>
        <Container section={"two"}>
          <PopoutContainer margin={"15px 15px"}>
            <h6>Broad Knowledge</h6>
            <strong>{skills.broad.map(mapSkills)}</strong>
          </PopoutContainer>
        </Container>
        <Container section={"three"}>
          <PopoutContainer margin={"15px 15px"}>
            <h6>Played around with them on Personal Projects</h6>
            <strong>{skills.hobby.map(mapSkills)}</strong>
          </PopoutContainer>
        </Container>
        <Container section={"four"}>
          <PopoutContainer margin={"15px 15px"}>
            <h6>Used them... but it's been a while</h6>
            <strong>{skills.awhile.map(mapSkills)}</strong>
          </PopoutContainer>
        </Container>
      </Wrapper>
    </Section>
  );
});

export default SkillsSection;
