import React from "react";
import user from "../../assets/user.png";
import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-solid-svg-icons";

function Header() {
  return (
    <div className="header">
      <div className="logo">
        <h3>Social Media Dashboard</h3>
      </div>
      <div className="right">
        <FontAwesomeIcon className="notificationicon" icon={faBell} />
        <img className="usericon" src={user}></img>
      </div>
    </div>
  );
}

export default Header;
