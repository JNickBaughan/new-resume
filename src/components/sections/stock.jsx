import React from "react";
import styled from "styled-components";

const StockPrice = styled.span`
  color: ${(props) => (props.stockUp ? "green" : "red")};
`;

export const Stock = ({ stockUp, lastClose }) => {
  return (
    (lastClose && <StockPrice stockUp={stockUp}>${lastClose}</StockPrice>) ||
    null
  );
};

export default Stock;
