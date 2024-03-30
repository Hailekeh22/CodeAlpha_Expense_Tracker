import React from "react";
import "./Card.css";

function Card(props) {
  const { image, value, text, influence, likes, reach } = props.userData;

  return (
    <div className="card">
      <div className="topcard">
        <img className="socialmedialogo" src={image} alt={text}></img>
      </div>
      <div className="middlecard">
        <div className="totalcount">
          <p className="count">{value}</p>
          <p className="countinfo">{text}</p>
        </div>
      </div>
      <div className="bottomcard">
        <div className="details">
          <p className="individualinfo">INFLUENCE</p>
          <p className="influencecount">{influence}</p>
        </div>
        <div className="details">
          <p className="individualinfo">LIKES</p>
          <p className="likescount">{likes}</p>
        </div>
        <div className="details">
          <p className="individualinfo">REACH</p>
          <p className="reachcount">{reach}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
