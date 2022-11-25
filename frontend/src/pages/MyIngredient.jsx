/* eslint-disable */
/* eslint-disable no-lone-blocks */
import React, { useEffect, useState } from "react";
import Lottie from "react-lottie";
import IngredientCard from "../components/IngredientCard";
import animationData from "../lotties/cook.json";

export default function MyIngredient() {
  const [ingredient, setIngredient] = useState();
  const [searchIngredient, setSearchIngredient] = useState();

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

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
    <div>
      <div className="flex-col">
        <div className="flex justify-center text-center">
          <h1 className="text-2xl md:text-5xl py-5 text-randomize">
            Find a trip with last ingredients <br />
            remaining in your fridge
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              fill="#C40000"
              className="bi bi-airplane-fill inline-block ml-2 transform rotate-45"
              viewBox="0 0 16 16"
            >
              <path d="M6.428 1.151C6.708.591 7.213 0 8 0s1.292.592 1.572 1.151C9.861 1.73 10 2.431 10 3v3.691l5.17 2.585a1.5 1.5 0 0 1 .83 1.342V12a.5.5 0 0 1-.582.493l-5.507-.918-.375 2.253 1.318 1.318A.5.5 0 0 1 10.5 16h-5a.5.5 0 0 1-.354-.854l1.319-1.318-.376-2.253-5.507.918A.5.5 0 0 1 0 12v-1.382a1.5 1.5 0 0 1 .83-1.342L6 6.691V3c0-.568.14-1.271.428-1.849Z" />
            </svg>
          </h1>
        </div>
        <div className="m-10 w-100 flex justify-center">
          <label
            htmlFor="search-dropdown"
            className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
          />

          <div className="relative w-5/6 flex">
            <input
              className="block w-full p-4  pl-10 text-2xl text-gray-900   rounded-lg  focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700  searchbar"
              required
              type="text"
              placeholder="Remaining ingredients"
              onChange={(e) => setIngredient(e.target.value)}
            />
            <button
              type="submit"
              className="absolute top-2 right-0 p-2.5 text-sm font-medium text-white bg-blue-700 rounded-r-lg  b hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              onClick={() => {
                getIngredient();
              }}
            >
              <svg
                aria-hidden="true"
                className="w-5 h-5 my-1"
                fill="none"
                stroke="#F6F6F6"
                viewBox="0 0 20 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
              <span className="sr-only">Search</span>
            </button>
          </div>
        </div>
      </div>
      {searchIngredient ? null : (
        <Lottie options={defaultOptions} height={300} width={300} />
      )}
      <div className="flex flex-wrap justify-center gap-5">
        {searchIngredient?.map((dataIngredient, index) => (
          <IngredientCard key={index} dataIngredient={dataIngredient} />
        ))}
      </div>
    </div>
  );
}
