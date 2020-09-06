import React from "react";
import "./NavDiv.css";
import { Link } from "react-router-dom";

class NavDiv extends React.Component {
  render() {
    return (
      <div className="container">
        <ul className="nav-list">
          <Link to="/about" style={{ textDecoration: "none" }}>
            <li>ABOUT</li>
          </Link>
          <Link to="/project" style={{ textDecoration: "none" }}>
            <li>PROJECT</li>
          </Link>
          <Link to="/contact" style={{ textDecoration: "none" }}>
            <li>CONTACT</li>
          </Link>
        </ul>
      </div>
    );
  }
}
export default NavDiv;
