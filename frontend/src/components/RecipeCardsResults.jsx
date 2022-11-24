/* eslint-disable react/prop-types */
import React from "react";
// import { Link } from "react-router-dom";

function RecipeCardsResults({ recipe }) {
  return (
    <div className="w-64 mb-6 md:w-96 bg-white border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
      <img
        className="rounded-t-lg"
        src={recipe.strMealThumb}
        alt={recipe.strMeal}
      />
      <div className="p-5">
        {/* <Link to="test"> */}
        <h5 className="mb-2 text-lg text-center md:text-xl tracking-tight text-gray-900 dark:text-white">
          {recipe.strMeal}
        </h5>
        {/* </Link> */}
      </div>
    </div>
  );
}

export default RecipeCardsResults;
