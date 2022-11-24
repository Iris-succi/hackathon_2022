/* eslint-disable react/button-has-type */
import React, { useEffect, useState } from "react";
import RecipeCards from "./RecipeCards";

export default function Randomizer() {
  const [randomizer, setRandomizer] = useState();

  const getRandom = () => {
    fetch("https://www.themealdb.com/api/json/v1/1/random.php")
      .then((response) => response.json())
      .then((response) => setRandomizer(response.meals))
      .catch((err) => console.error(err));
    console.warn(randomizer);
  };

  useEffect(() => {
    getRandom();
  }, []);

  return randomizer ? (
    <div className="flex justify-center m-50 text-center">
      <div className="flex-col mt-6">
        <h3 className="text-5xl py-5">You have no idea for your meal ?</h3>
        <button
          className="bg-bluetitle text-backgroundMain font-bold py-2 px-4 mt-6 mb-9 rounded"
          onClick={getRandom}
        >
          Click here !
        </button>
        <RecipeCards randomizer={randomizer} />
      </div>
    </div>
  ) : null;
}
