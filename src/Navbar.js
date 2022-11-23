import React from "react";
import { NavLink } from "react-router-dom";

function NavBar({ dogs }) {
    return (
      <nav className="NavBar">
        <NavLink end to="/dogs">
          Home
        </NavLink>
        {dogs.map(dog => (
            <NavLink key={dog.id} to={`/dogs/${dog.name}`}>
                {dog.name}
            </NavLink>
        ))}
      </nav>
    );
  }
  
  export default NavBar;