import React from "react";
import styled from "styled-components";
import axios from "axios";

const StockPrice = styled.span`
  color: ${(props) => (props.stockUp ? "green" : "red")};
`;

export const Stock = () => {
  const [stock, setStock] = React.useState({ stockUp: false, lastClose: "" });
  React.useEffect(() => {
    const getTicker = async () => {
      const response = await axios.get("/costar");
      const {
        data: { lastClose, stockUp }
      } = response;

      setStock({ lastClose, stockUp });
    };
    getTicker();
  }, []);
  return (
    <React.Fragment>
      <StockPrice stockUp={stock.stockUp}>{stock.lastClose}</StockPrice>
    </React.Fragment>
  );
};

export default Stock;
