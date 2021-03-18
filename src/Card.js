import React from "react";
import './CardInfo.css'
const Card = (props) => {
  return (
    <div>
      <div className="card">
        <div className="card_body">
          <img
            src={props.image}
            alt={props.altTag}
            height="200px"
            width="300px"
          />
          <h2>{props.header}</h2>
          <p>{props.text}</p>
          <button>{props.button}</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
