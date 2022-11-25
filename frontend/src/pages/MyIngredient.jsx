/* eslint-disable no-lone-blocks */
import React, { useEffect, useState } from "react";
import IngredientCard from "../components/IngredientCard";

export default function MyIngredient() {
  const [ingredient, setIngredient] = useState();
  const [searchIngredient, setSearchIngredient] = useState();

  const getIngredient = () => {
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`)
      .then((response) => response.json())
      .then((response) => setSearchIngredient(response.meals))
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    getIngredient();
  }, []);

  return (
    <div className="flex justify-center text-center">
      <div className="flex-col">
        <h1 className="text-3xl mt-5 mb-5">
          Travel thanks to your last ingredients remaining in your fridge
        </h1>
        <div className="flex justify-center text-center mb-5">
          <input
            className="block w-50 p-4 pl-10 text-2xl text-gray-900   rounded-lg  focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700  searchbar"
            required
            type="text"
            placeholder="Indicate type of food"
            onChange={(e) => setIngredient(e.target.value)}
          />
          <button
            type="submit"
            className="p-2.5 text-sm font-medium text-white bg-blue-700 rounded-r-lg  b hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            onClick={() => {
              getIngredient();
            }}
          >
            <svg
              aria-hidden="true"
              className="w-5 h-5"
              fill="#2D4059"
              stroke="#F6F6F6"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
        </div>
        {searchIngredient?.map((dataIngredient) => (
          <IngredientCard dataIngredient={dataIngredient} />
        ))}
      </div>
    </div>
  );
}
