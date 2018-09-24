import React from "react";
import "./Navbar.css";
// import { Link } from "react-router-dom";

const Navbar = props => (
  <container>
    <nav className="navbar navbar-expand-lg navbar-dark bg-info sticky-top">
      <a className="navbar-brand" href="/">Memory Game</a>
    <div>
      <ul className="navbar-nav">
        <li className="nav-item mr-sm-2">
          <a className="nav-link">Click an image to begin!</a>
        </li>
        <li className="nav-item">
          <a className="nav-link">Score:  0 | Top Score: 0</a>
        </li>
        
      </ul>
    </div>
  </nav>

</container>

  
);

export default Navbar;
