import React, { useState } from "react";
import json from "./data.json";
import { MdFlight } from "react-icons/md";
import "./styles.css";

const NavBar = ({handleAirline}) => {
  const [links, setLinks] = useState(json.links);

  return (
    <div className="navbar">
      <div className="brand">
        <a href="/">
          <i>
            <MdFlight /> Flight
          </i>
          <span>App</span>
        </a>
      </div>

      <ul className="navigation">
        {links.map(({ id, name }) => (
          <li key={id} onClick={(e) => handleAirline(e.target.innerText)}>
            {name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NavBar;
