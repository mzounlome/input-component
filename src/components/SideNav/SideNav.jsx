import "./SideNacv.scss";

import React from "react";

const SideNav = () => {
  return (
    <div className="sidenav-container">
      <div className="header-container">
        <h1 className="header">DevChallenges.io</h1>
      </div>
      <div className="nav-container">
        <nav className="nav" id="navbar">
          <ul className="nav-list">
            <li>
              {" "}
              <a href="/">Typography</a>
            </li>
            <li>
              <a href="/">Grid</a>
            </li>
            <li>
              <a href="/">Buttons</a>
            </li>
            <li>
              <a href="/">Inputs</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default SideNav;
