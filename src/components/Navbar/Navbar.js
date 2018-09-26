import React from "react";
import "./Navbar.css";

const Navbar = ({score, topscore}) => (
  <container>
    <nav className="navbar navbar-expand-lg navbar-dark bg-info sticky-top d-flex justify-content-between">
      <div>
        <h5>Memory Game</h5>
      </div>
      <div>
        <h5 >Click an image to begin!</h5>
      </div>
      <div>
        <h5 >{`Score:  ${score} | Top Score: ${topscore}`}</h5>
      </div>    
    </nav>
  </container>
);

export default Navbar;
