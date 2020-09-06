import React from "react";
import "./App.css";
import InnerDiv from "./component/InnerDiv/InnerDiv.js";
import DisplayDiv from "./component/DisplayDiv/DisplayDiv.js";
import { BrowserRouter as Router } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <div className="outer-layer">
        <Router>
          <InnerDiv></InnerDiv>
          <DisplayDiv></DisplayDiv>
        </Router>
      </div>
    );
  }
}

export default App;
