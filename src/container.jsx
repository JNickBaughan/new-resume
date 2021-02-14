import React, { useRef, useState } from "react";
import styled from "styled-components";
import Header from "./components/header";
import Bio from "./components/bio";
import ScrollContainer from "./components/scroll";
import renderSections from "./components/sections";
import MaintenanceMessage from "./components/maintence-message";
const axios = require("axios");

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
  const [configState, setConfig] = React.useState(config);
  React.useEffect(() => {
    const getCostarStockPrice = async () => {
      const response = await axios.get("/costar");
      const {
        data: { lastClose, stockUp }
      } = response;
      const t = {
        ...configState,
        ...{
          sections: {
            ...configState.sections,
            experience: {
              ...configState.sections.experience,
              positions: [
                ...config.sections.experience.positions.map((position) => {
                  return position.company === "Costar Group"
                    ? { ...position, lastClose, stockUp }
                    : position;
                })
              ]
            }
          }
        }
      };
      setConfig(t);
    };
    getCostarStockPrice();
  }, []);
  let { sections } = configState;

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
          photoUrl={configState.bio.photoUrl}
          blurb={configState.bio.blurb}
          title={configState.bio.title}
          name={configState.bio.name}
        />
      </BioWrapper>
      <MainWrapper>
        <ScrollContainer ref={scrollRef} getScrollPosition={getScrollPosition}>
          {renderSections(configState.sections)}
        </ScrollContainer>
      </MainWrapper>
      <MaintenanceMessage />
    </Wrapper>
  );
};

export default Container;
