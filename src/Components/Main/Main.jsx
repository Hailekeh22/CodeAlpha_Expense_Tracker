import React from "react";
import "./Main.css";
import Card from "./Card/Card";
import userdata from "../../assets/data";

function Main() {
  return (
    <div className="main">
      <div className="cardcontainer">
        {userdata.map((user) => (
          <Card key={user.id} userData={user} />
        ))}
      </div>
    </div>
  );
}

export default Main;
