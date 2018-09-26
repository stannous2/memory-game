import React from "react";
import "./AnimalCard.css";

const AnimalCard = props => (

  <div className="card">
      <img alt={props.name} src={props.image} onClick={() => props.clickAnimal(props.id)}/>
  </div>

);

export default AnimalCard;
