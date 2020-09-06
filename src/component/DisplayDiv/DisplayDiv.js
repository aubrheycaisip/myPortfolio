import React from "react";
import { Switch, Route } from "react-router-dom";
import About from "../About/About.js";
import Contact from "../Contact/Contact.js";
import Project from "../Project/Project.js";

class DisplayDiv extends React.Component {
  render() {
    return (
      <div style={{ width: "718px", height: "100%" }}>
        <Switch>
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/project" component={Project} />
        </Switch>
      </div>
    );
  }
}
export default DisplayDiv;
