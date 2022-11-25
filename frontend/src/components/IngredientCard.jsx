/* eslint-disable react/prop-types */
import React from "react";

export default function IngredientCard({ dataIngredient }) {
  return (
    <div className="mb-6 bg-white  border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
      <div className="flex h-64  justify-center ">
        <img
          className="rounded w-full h-full object-cover"
          src={dataIngredient.strMealThumb}
          alt=""
        />
      </div>
      <div className="p-5">
        <h5 className="mb-2 text-lg text-center md:text-xl tracking-tight text-gray-900 dark:text-white">
          {dataIngredient.strMeal}
        </h5>
      </div>
    </div>
  );
}
