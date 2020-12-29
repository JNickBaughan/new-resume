import React from "react";

import Section from "./section";
import SectionTitle from "./section-title";
import ExperienceContainer from "./experience";
import PopoutContainer from "./popout-container";

const ExperienceSection = React.forwardRef((props, ref) => {
  return (
    <Section ref={ref}>
      <SectionTitle sectionTitle={props.title} width={400} centerWidth={3} />
      {props.positions.map((position) => (
        <PopoutContainer>
          <ExperienceContainer {...position}></ExperienceContainer>
        </PopoutContainer>
      ))}
    </Section>
  );
});

export default ExperienceSection;
