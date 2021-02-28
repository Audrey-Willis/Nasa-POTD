import React from "react";
import {PotdContainerStyle} from "./PotdContainerStyle"

function PotdContainer({ title, date, explanation, copyright, imgUrl }) {
  return (
    <PotdContainerStyle>
      <h2>{title}</h2>
      <h3>{date}</h3>
      <div className="photo-box">
        <img src={imgUrl} alt="space" />
      </div>
      <p>{explanation}</p>
      <p>{copyright}</p>
    </PotdContainerStyle>
  );
}
export default PotdContainer;
