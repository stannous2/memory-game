import React from "react";
// import { Link } from "react-router-dom";

const NavTabs = () => (
  <container>
    <nav class="navbar navbar-expand-lg navbar-dark bg-info sticky-top">
      <a class="navbar-brand" href="/">Memory Game</a>

    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item mr-sm-2">
          <a class="nav-link">Click an image to begin!</a>
        </li>
        <li class="nav-item">
          <a class="nav-link">Score:  0 | Top Score: 0</a>
        </li>
        
      </ul>
    </div>
  </nav>

<header class="jumbotron jumbotron-fluid bg-dark">
  <div class="container">
    <h1>Memory Game</h1>
    <p class="lead">Click on an image to earn points, but don't click on any more than once!</p>
  </div>
</header>

</container>

  
);

export default NavTabs;
