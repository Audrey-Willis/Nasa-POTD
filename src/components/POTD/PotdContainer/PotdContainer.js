import React from "react";

function PotdContainer({ title, date, explanation, copyright, imgUrl }) {
  return (
    <div>
      <h2>{title}</h2>
      <h3>{date}</h3>
      <div className="photo-box">
        <img src={imgUrl} alt="space" />
      </div>
      <p>{explanation}</p>
      <p>{copyright}</p>
    </div>
  );
}
export default PotdContainer;
