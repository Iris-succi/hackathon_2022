/* eslint-disable */
import React from "react";

function RestoDisplay({ country, name, adress, number, pictures }) {
  return (
    <div className="restos">
      <h1>{country}</h1>
      <h1>{name}</h1>
      <h1>{adress}</h1>
      <h1>{number}</h1>
      <img alt="pictures" src={pictures} />
    </div>
  );
}

export default RestoDisplay;
