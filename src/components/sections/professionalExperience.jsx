import React from "react";

import Section from "./section";
import SectionTitle from "./section-title";
import ExperienceContainer from "./experience";

const ExperienceSection = React.forwardRef((props, ref) => {
  return (
    <Section ref={ref}>
      <SectionTitle sectionTitle={props.title} width={400} centerWidth={3} />
      {props.positions.map((position) => (
        <ExperienceContainer {...position}></ExperienceContainer>
      ))}
    </Section>
  );
});

export default ExperienceSection;
