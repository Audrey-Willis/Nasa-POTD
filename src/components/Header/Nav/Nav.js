import React from "react";
import { Link } from "react-router-dom";
import {NavStyle} from "./NavStyle";

function Nav() {
  return (
    <NavStyle>
      <Link to="/Photo-Of-The-Day" className="navLinks">
        Photo of the Day
      </Link>
      <Link to="/" className="navLinks">
        Home
      </Link>
    </NavStyle>
  );
}

export default Nav;
