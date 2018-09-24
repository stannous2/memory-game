import React from "react";
import "./Title.css";

const Title = props => 
// <h1 className="title">{props.children}</h1>;

<div className="jumbotron jumbotron-fluid bg-dark">
  <div className="container">
    <h1>Memory Game</h1>
    <p className="lead">Click on an image to earn points, but don't click on any more than once!</p>
  </div>
</div>




export default Title;
