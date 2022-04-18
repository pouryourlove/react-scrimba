import React from "react";
import Group from "./Group.png";

export default function Main() {
  return (
    <div
      className="main"
      style={{
        backgroundImage: `url(${Group})`,
      }}
    >
      <h1 className="main--title">Fun facts about React</h1>
      <ul className="main--text">
        <li>Was first released in 2013</li>
        <li>Was originally created by Jordan Walke</li>
        <li>Has well over 100K stars on GitHub</li>
        <li>Is maintained by Facebook</li>
        <li>Powers thousands of enterprise apps, including mobile apps</li>
      </ul>
    </div>
  );
}
