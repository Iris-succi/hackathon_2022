/* eslint-disable react/prop-types */
import React from "react";

function FavoriteCard({ data }) {
  const [isFavorite, setIsFavorite] = React.useState(true);
  function handleFavorite() {
    setIsFavorite(!isFavorite);
    const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");
    let recipes = favorites.find((element) => element.recipe === data.strMeal);

    if (!isFavorite) {
      if (recipes === undefined) {
        recipes = {
          recipefav: [],
        };
        favorites.push(recipes);
      }
      recipes.recipefav.push(data);
      localStorage.setItem("favorites", JSON.stringify(favorites));
    } else {
      if (recipes !== undefined) {
        const recipesIndex = recipes.recipefav.findIndex(
          (element) => element === data.id
        );
        recipes.recipefav.splice(recipesIndex, 1);
      }
      localStorage.setItem("favorites", JSON.stringify(favorites));
    }
  }

  return isFavorite ? (
    <div className="w-64 mb-6 md:w-96 bg-white border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
      <img
        className="rounded-t-lg"
        src={data.recipefav[0].strMealThumb}
        alt=""
      />
      <div className="p-5">
        <h5 className="mb-2 text-lg text-center md:text-xl tracking-tight text-gray-900 dark:text-white">
          {data.recipefav[0].strMeal}
        </h5>
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="#A6122D"
        className="w-6 h-6 m-3"
        onClick={handleFavorite}
      >
        <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
      </svg>
    </div>
  ) : null;
}

export default FavoriteCard;
