/* eslint-disable */
import React from "react";
import "../style/RestoDisplay.css";

function RestoDisplay({ country, name, adress, number, pictures }) {
  return (
    <>
      <div className="Div">
        <div className="restos">
          <img className="RestoImg" alt="pictures" src={pictures} />
          <h1 className="restoDisplay">
            {country} <br /> <span className="span">{name} </span>
            <br /> {adress} <br />
            {" 0"}
            {number}
          </h1>
        </div>
      </div>
    </>
  );
}

export default RestoDisplay;
