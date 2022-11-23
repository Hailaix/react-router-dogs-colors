import React from "react";
import { NavLink } from "react-router-dom";
import './Navbar.css'

function NavBar({ dogs }) {
    return (
      <nav className="navbar">
        <NavLink to="/dogs">
          Dogs
        </NavLink>
        <NavLink to="/colors">
          Colors
        </NavLink>
      </nav>
    );
  }
  
  export default NavBar;