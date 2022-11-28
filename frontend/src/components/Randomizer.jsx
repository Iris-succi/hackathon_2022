import React, { useEffect, useState } from "react";
import RecipeCards from "./RecipeCards";
/* eslint-disable react/button-has-type */

export default function Randomizer() {
  const [randomizer, setRandomizer] = useState();

  const getRandom = () => {
    fetch("https://www.themealdb.com/api/json/v1/1/random.php")
      .then((response) => response.json())
      .then((response) => setRandomizer(response.meals))
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    getRandom();
  }, []);

  return randomizer ? (
    <div className="flex h-screen justify-center m-50 text-center">
      <div className="flex-col mt-6  ">
        <h3 className="text-2xl md:text-5xl py-5 text-randomize">
          If you have no idea
          <br /> for your meal today
        </h3>
        <button
          className="bg-bluetitle text-backgroundMain font-bold py-2 px-4 mt-6 mb-9 rounded "
          onClick={getRandom}
        >
          Travel !
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="#C40000"
              className="bi bi-airplane-fill inline-block ml-2 transform rotate-45"
              viewBox="0 0 16 16"
            >
              <path d="M6.428 1.151C6.708.591 7.213 0 8 0s1.292.592 1.572 1.151C9.861 1.73 10 2.431 10 3v3.691l5.17 2.585a1.5 1.5 0 0 1 .83 1.342V12a.5.5 0 0 1-.582.493l-5.507-.918-.375 2.253 1.318 1.318A.5.5 0 0 1 10.5 16h-5a.5.5 0 0 1-.354-.854l1.319-1.318-.376-2.253-5.507.918A.5.5 0 0 1 0 12v-1.382a1.5 1.5 0 0 1 .83-1.342L6 6.691V3c0-.568.14-1.271.428-1.849Z" />
            </svg>
          </span>
        </button>
        <RecipeCards key={randomizer} randomizer={randomizer} />
      </div>
    </div>
  ) : null;
}
