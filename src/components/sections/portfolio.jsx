import React from "react";

import Section from "./section";
import SectionTitle from "./section-title";
import PopoutContainer from "./popout-container";

const PortfolioSection = React.forwardRef((props, ref) => {
  return (
    <Section ref={ref}>
      <SectionTitle sectionTitle={props.title} width={180} centerWidth={3} />
      {props.projects.map((project, index) => (
        <PopoutContainer
          bottom={index + 1 === props.projects.length ? "275px" : ""}
        >
          {project.name}
          <a target="_blank" href={project.link}>
            {project.linkText}
          </a>
          <a target="_blank" href={project.gitLink}>
            {project.gitText}
          </a>
          <div>{project.description}</div>
        </PopoutContainer>
      ))}
    </Section>
  );
});

export default PortfolioSection;
