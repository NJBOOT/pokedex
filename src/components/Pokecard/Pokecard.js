import React from "react";
import "./Pokecard.css";

const Pokecard = props => {
  return (
    <div className="Pokecard">
      <h2>{props.name}</h2>
      <img src={props.image} alt={props.name} />
      <p className="Pokecard-type">Type: {props.type}</p>
      <p>EXP: {props.exp}</p>
    </div>
  );
};

export default Pokecard;
