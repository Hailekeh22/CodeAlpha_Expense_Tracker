import React from "react";
import "./Userinfo.css";
import user from "../../assets/user.png";

function Userinfo() {
  return (
    <div className="userinfocontaner">
      <div className="userdetails">
        <div className="usersection">
          <img className="userimg" src={user}></img>
          <div className="userinf">
            <p className="username">John Doe</p>
            <p className="location">London, UK</p>
          </div>
        </div>
        <div className="usersectionright">
          <button className="btn1">Total Likes</button>
          <button className="btn2">Summery</button>
        </div>
      </div>
    </div>
  );
}

export default Userinfo;
