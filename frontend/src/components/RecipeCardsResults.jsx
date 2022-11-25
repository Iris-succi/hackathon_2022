import React, { useEffect } from "react";
import ModaleResults from "./ModaleResults";
/* eslint-disable import/no-duplicates */
/* eslint-disable react/prop-types */

function RecipeCardsResults({ recipe }) {
  const [showModal, setShowModal] = React.useState(false);
  const [recipeDetails, setRecipeDetails] = React.useState([]);
  const recipeMeal = recipe.idMeal;
  const [isFavorite, setIsFavorite] = React.useState(false);

  function handleFavorite() {
    setIsFavorite(!isFavorite);
    const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");
    let recipes = favorites.find(
      (element) => element.recipe === recipe.strMeal
    );

    if (!isFavorite) {
      if (recipes === undefined) {
        recipes = {
          recipefav: [],
        };
        favorites.push(recipes);
      }
      recipes.recipefav.push(recipe);
      localStorage.setItem("favorites", JSON.stringify(favorites));
    }
  }

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
      {isFavorite ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="#C40000"
          className="w-6 h-6 m-3"
          onClick={handleFavorite}
        >
          <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6 m-3"
          onClick={handleFavorite}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
          />
        </svg>
      )}
    </div>
  );
}

export default RecipeCardsResults;
