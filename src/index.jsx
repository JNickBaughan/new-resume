import React from "react";
import ReactDOM from "react-dom";
import Container from "./container";
import config from "../config";

const App = () => {
    return (
    <React.Fragment>
        <Container config={config} />
    </React.Fragment>
    )
}

ReactDOM.render(
  <App />,
  document.getElementById("root")
);
