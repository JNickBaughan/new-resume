import React, { useEffect } from "react";
import styled from "styled-components";

const Scroll = styled.div`
  width: 93%;
  height: 93%;
  padding: 20px 20px 20px 80px;
  overflow-y: scroll;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  &::-webkit-scrollbar {
    display: none;
  }
  position: relative;
`;

const TopFade = styled.div`
  pointer-events: none;
  width: 100%;
  height: 200px;
  z-index: 200;
  position: fixed;
  top: 72px;
  background: url(/top-fade.png) bottom center repeat;
`;

const BottomFade = styled.div`
  pointer-events: none;
  width: 100%;
  height: 200px;
  z-index: 200;
  position: fixed;
  bottom: 0px;
  background: url(/bottom-fade.png) bottom center repeat;
`;

export const ScrollContainer = React.forwardRef((props, ref) => {
  useEffect(() => {
    let timer = null;
    ref.current.addEventListener(
      "scroll",
      function () {
        if (timer !== null) {
          clearTimeout(timer);
        }
        timer = setTimeout(function () {
          props.getScrollPosition();
        }, 300);
      },
      false
    );
  });

  return (
    <Scroll ref={ref}>
      <TopFade />
      {props.children}
      <BottomFade />
    </Scroll>
  );
});

export default ScrollContainer;
