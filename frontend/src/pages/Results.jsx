/* eslint-disable react/prop-types */
import RecipeCardsResults from "../components/RecipeCardsResults";
// import React from "react";

function Results({ search, countries }) {
  return (
    <div className="flex justify-center align-center">
      <div className="flex-col ">
        <h1 className="text-center text-3xl mt-5 mb-5">
          {countries.charAt(0).toUpperCase() + countries.substring(1)} food !
        </h1>
        {search?.map((recipe) => (
          <RecipeCardsResults
            key={recipe.idMeal}
            recipe={recipe}
            countries={countries}
          />
        ))}
      </div>
    </div>
  );
}

export default Results;
