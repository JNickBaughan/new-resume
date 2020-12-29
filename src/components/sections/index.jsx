import React from "react";

import ExperienceSection from "./professionalExperience";
import EducationSection from "./education";
import SkillsSection from "./skills";

const renderSkills = (section, key) => {
  return <SkillsSection key={key} ref={section.ref} section={section} />;
};

const renderExperience = (section, key) => {
  return (
    <ExperienceSection
      key={key}
      ref={section.ref}
      title={section.sectionTitle}
      positions={section.positions}
    />
  );
};

const renderEducation = (section, key) => {
  return (
    <EducationSection
      key={key}
      ref={section.ref}
      title={section.sectionTitle}
      positions={section.positions}
    />
  );
};

const renderMap = {
  skills: renderSkills,
  experience: renderExperience,
  education: renderEducation
};

const renderSections = (sections) => {
  const keys = Object.keys(sections);
  return keys.map((section) => {
    return renderMap[section](sections[section], section);
  });
};

export default renderSections;
