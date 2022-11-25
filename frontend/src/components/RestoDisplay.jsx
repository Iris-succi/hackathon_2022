/* eslint-disable */
import React from "react";
import "../style/RestoDisplay.css";

function RestoDisplay({ country, name, adress, number, pictures }) {
  return (
    <div className="border flex justify-center align-center text-center">
      <div className="restos">
        <div className="picturesResto">
          <img alt="pictures" src={pictures} />
        </div>
        <h1 className="restoDisplay">
          Type of food : {country} Name : {name} Adress : {adress} Number :
          {" 0"}
          {number}
        </h1>
      </div>
    </div>
  );
}

export default RestoDisplay;
