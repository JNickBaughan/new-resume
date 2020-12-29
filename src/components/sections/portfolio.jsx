import React from "react";

import Section from "./section";
import SectionTitle from "./section-title";
import PopoutContainer from "./popout-container";

const PortfolioSection = React.forwardRef((props, ref) => {
  return (
    <Section ref={ref}>
      <SectionTitle sectionTitle={props.title} width={180} centerWidth={3} />
      {props.projects.map((project) => (
        <PopoutContainer>
          {project.name}
          <a target="_blank" href="http://tax-assessor.JNickBaughan.com">
            Formik React tax-assessor site
          </a>
          <a
            target="_blank"
            href="https://github.com/JNickBaughan/tax-assessor-form"
          >
            github repository
          </a>
        </PopoutContainer>
      ))}
    </Section>
  );
});

export default PortfolioSection;
