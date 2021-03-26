import React from "react";
import { Link } from "react-router-dom";
import {HomeStyle} from "./HomeStyle"


function Home() {
  return (
    <HomeStyle>
      <p>Do you love space and all things astronomy related?</p>
      <Link to="/Photo-Of-The-Day">
      <img src="https://picsum.photos/id/683/700/300" alt="Space" />
      </Link>
      <p>
        If you answered yes, I don't blame you! Space is the last great
        frontier. A mysterious and beautiful place with many secrets still left
        to uncover
      </p>
      <Link to="/PhotoOfTheDay">
        <img src="https://picsum.photos/id/120/700/300" alt="Space" />
      </Link>
      <p>It's a gold mine for any adventurer or academic</p>
      <Link to="/Photo-Of-The-Day">
        <img src="https://picsum.photos/id/120/700/300" alt="Space" />
      </Link>
      <p>
        That's why we're pleased to offer this astronomy photo of the day. If it
        were merely mind blowing pictures of outer space, that would be enough!
        But also included are information and educational explanations{" "}
      </p>
      <p>
        It's never too late or too early to indulge in your love of astronomy.
        SO checkout our photo of the day
      </p>
      <Link to="/Photo-Of-The-Day" className="button">
        Photo Of The Day
      </Link>
    </HomeStyle>
  );
}
export default Home;
