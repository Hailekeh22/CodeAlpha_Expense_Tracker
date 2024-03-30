import React from "react";
import "./Userinfo.css";
import user from "../../assets/user.png";

function Userinfo() {
  return (
    <div className="userinfocontaner">
      <div className="userdetails">
        <div>
          <img src={user}></img>
          <div className="userinf">
            <p>John Doe</p>
            <p>London, UK</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Userinfo;
