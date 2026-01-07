import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <div className="navigation">
      <ul>
        <NavLink to="/">
          <li>Home</li>
        </NavLink>
        <NavLink to="/services">
          <li>Services</li>
        </NavLink>
        <NavLink to="/achievements">
          <li>Portfolio</li>
        </NavLink>
        <NavLink to="/about">
          <li>Contact</li>
        </NavLink>
        <NavLink to="/copyrights">
          <li>Mentions Légales</li>
        </NavLink>
      </ul>
    </div>
  );
};

export default Nav;
