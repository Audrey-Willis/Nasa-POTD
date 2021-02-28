import React from "react";
import Nav from "./Nav/Nav";
import {HeaderStyle} from "./HeaderStyle"

function Header() {
  return (
    <HeaderStyle>
      <Nav />
      <h1>Astronomy Photo of The Day</h1>
      <blockquote>
        "The day we stop exploring is the day we commit ourselves to live in a stagnant world, devoid of curiosity, empty of dreams." - Neil DeGrasse Tyson
      </blockquote>
    </HeaderStyle>
  );
}
export default Header;


