import React from "react";
import ProfilePic from "./blank-profile-picture-973460_640.png";
import "./ProfileDiv.css";

class ProfileDiv extends React.Component {
  render() {
    return (
      <div className="profile-div">
        <div className="inner-container">
          <img src={ProfilePic} alt="avatar" />
        </div>
      </div>
    );
  }
}

export default ProfileDiv;
