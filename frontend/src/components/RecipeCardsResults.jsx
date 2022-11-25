/* eslint-disable import/no-duplicates */
/* eslint-disable react/prop-types */
import React from "react";
import { useEffect } from "react";
import ModaleResults from "./ModaleResults";
// import { Link } from "react-router-dom";

function RecipeCardsResults({ recipe }) {
  const [showModal, setShowModal] = React.useState(false);
  const [recipeDetails, setRecipeDetails] = React.useState([]);
  const recipeMeal = recipe.idMeal;

  const getRandom = () => {
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${recipeMeal}`)
      .then((response) => response.json())
      .then((response) => setRecipeDetails(response.meals))
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    getRandom();
  }, []);

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
        <ModaleResults
          showModal={showModal}
          setShowModal={setShowModal}
          recipeDetails={recipeDetails}
        />
      </div>
    </div>
  );
}

export default RecipeCardsResults;
