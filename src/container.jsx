import React, { useRef, useState } from "react";
import styled from "styled-components";
import Header from "./components/header";
import Bio from "./components/bio";
import ScrollContainer from "./components/scroll";
import renderSections from "./components/sections";

const Wrapper = styled.div`
  overflow-y: hidden;
  overflow-x: hidden;
  margin: 0 auto;
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 2fr 22fr;
  grid-template-areas:
    "header header header header"
    "side main main main";
`;

const HeaderWrapper = styled.div`
  grid-area: header;
  height: 100%;
  width: 100%;
  z-index: 2;
`;

const BioWrapper = styled.div`
  grid-area: side;
  height: 100%;
  width: 100%;
`;

const MainWrapper = styled.div`
  grid-area: main;
  height: 52em;
  overflow-y: hidden;
  overflow-x: hidden;
  width: 100%;
`;

export const Container = ({ config }) => {
  const { sections } = config;

  const scrollRef = useRef(null);
  const scrollToRef = (ref) => {
    scrollRef.current.scrollTo({
      top: ref.current.offsetTop,
      behavior: "smooth"
    });
  };

  const getScrollPosition = () => {
    const scrollHeight = scrollRef.current.clientHeight / 2;
    var scrollBottom = scrollRef.current.scrollTop + scrollHeight;
    Object.keys(sections).forEach((section) => {
      const top = sections[section].ref.current.offsetTop;
      const bottom = top + sections[section].ref.current.offsetHeight + 160;

      if (
        (scrollBottom < bottom && section === "Skill Set") ||
        (scrollBottom > top && scrollBottom < bottom)
      ) {
        const index = getSectionIndex(sections[section].linkText);
        updateActiveSection(index);
      }
    });
  };

  const getSectionIndex = (linkText) => {
    return Object.keys(sections).findIndex((section) => {
      return sections[section].linkText === linkText;
    });
  };

  Object.keys(sections).forEach((section) => {
    const index = getSectionIndex(sections[section].linkText);
    sections[section][`ref`] = useRef(null);
    sections[section][`scrollToRef`] = () => {
      updateActiveSection(index);
      scrollToRef(sections[section][`ref`]);
    };
  });

  const [activeSection, updateActiveSection] = useState(0);
  const [activeSections] = useState(
    Object.keys(sections).map((section) => {
      return sections[section].linkText;
    })
  );

  return (
    <Wrapper>
      <HeaderWrapper>
        <Header
          sections={sections}
          activeSection={activeSections[activeSection]}
        />
      </HeaderWrapper>
      <BioWrapper>
        <Bio
          photoUrl={config.bio.photoUrl}
          blurb={config.bio.blurb}
          title={config.bio.title}
          name={config.bio.name}
        />
      </BioWrapper>
      <MainWrapper>
        <ScrollContainer ref={scrollRef} getScrollPosition={getScrollPosition}>
          {renderSections(config.sections)}
        </ScrollContainer>
      </MainWrapper>
    </Wrapper>
  );
};

export default Container;
