import React from "react";
import "./Card.css";
import { GoStarFill } from "react-icons/go";
function Card(props) {
  return (
    <div className="carta">
      <img className="foto" src={props.img} />
      <div className="texto">
        {props.superHost ? <span className="super">SuperHost</span> : null}
        <p className="type">{props.type}</p>
        <span className="star">
          <GoStarFill />
        </span>
        <p className="rating">{props.rating}</p>
        <p className="beds">{props.beds}</p>
        <p className="title">{props.title}</p>
        <p className="maxg">{props.maxGuests}</p>
      </div>
    </div>
  );
}

export default Card;
