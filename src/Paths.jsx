import React from "react";

const Paths = () => {
  return (
  <>
    <div className="container">
        <ul>
            <li><a className="list-group-item list-group-item-action" href="/">Home</a></li>
            <li><a className="list-group-item list-group-item-action" href="/About">About</a></li>
            <li><a className="list-group-item list-group-item-action" href="/Service">Services</a></li>
            <li><a className="list-group-item list-group-item-action" href="/Contact">Contact</a></li>
        </ul>
    </div>
  </>
  );
};

export default Paths;