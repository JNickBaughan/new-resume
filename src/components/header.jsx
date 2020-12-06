import React from "react";
import styled from "styled-components";

const HeaderContainer = styled.header`
    width: 100%;
    height: 60px;
    border-bottom-style: solid;
    border-bottom-color: #352d31;
    border-bottom-width: 2px;
    box-shadow: 0px 2px #888888;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family "gotham rounded", sans-serif;
`;

const SectionLink = styled.div`
  padding: 0 15px 5px;
  cursor: pointer;
  border-bottom: ${(props) => (props.isActive ? "3px solid #D35B3F" : "")};
`;

export const Header = ({ sections, activeSection }) => {
  return (
    <HeaderContainer>
      {Object.keys(sections).map((key) => {
        return (
          <SectionLink
            key={key}
            isActive={sections[key].linkText === activeSection}
          >
            <a onClick={sections[key].scrollToRef}>{sections[key].linkText}</a>
          </SectionLink>
        );
      })}
    </HeaderContainer>
  );
};

export default Header;
