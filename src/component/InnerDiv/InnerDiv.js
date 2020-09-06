import React from "react";
import "./InnerDiv.css";
import NavDiv from "../NavDiv/NavDiv.js";
import ProfileDiv from "../ProfileDiv/ProfileDiv.js";

class InnerDiv extends React.Component {
  render() {
    return (
      <div className="inner-layer">
        <ProfileDiv></ProfileDiv>
        <NavDiv></NavDiv>
      </div>
    );
  }
}

export default InnerDiv;
