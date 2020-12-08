import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  height: 2em;
  margin: 0.5em 0.75em;
`;

const SkillTitle = styled.div`
  flex-grow: 1;
  line-height: 0;
`;

const ProgressBarContainer = styled.div`
  width: 100px;
  height: 5px;
`;

const ProgressBar = styled.div`
  width: ${(props) => `${props.progress}%`};
  height: 5px;
  border-bottom: 1px solid black;
`;

const ProgressIndicator = styled.div`
  width: 60%;
  width: ${(props) => `${props.progress}%`};
  height: 5px;
  background-color: grey;
`;

const SkillContainer = ({ progress }) => {
  return (
    <Container>
      <SkillTitle>JavaScript</SkillTitle>
      <ProgressBarContainer>
        <ProgressBar>
          <ProgressIndicator progress={progress}></ProgressIndicator>
        </ProgressBar>
      </ProgressBarContainer>
    </Container>
  );
};

export default SkillContainer;
