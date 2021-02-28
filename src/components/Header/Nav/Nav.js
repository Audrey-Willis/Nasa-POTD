import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <div>
      <Link to="/Photo-Of-The-Day" className="navLinks">
        Photo of the Day
      </Link>
      <Link to="/" className="navLinks">
        Home
      </Link>
    </div>
  );
}

export default Nav;
