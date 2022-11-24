/* eslint-disable react/prop-types */
import React from "react";
import Modal from "./Modale";
// import { Link } from "react-router-dom";

function RecipeCards({ randomizer }) {
  const [showModal, setShowModal] = React.useState(false);
  return (
    <div className="mb-6 bg-white  border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
      <div className="flex h-64  justify-center ">
        <img
          className="rounded w-full h-full object-cover"
          src={randomizer[0].strMealThumb}
          alt=""
        />
      </div>
      <div className="p-5">
        {/* <Link to="test"> */}
        <h5 className="mb-2 text-lg text-center md:text-xl tracking-tight text-gray-900 dark:text-white">
          {randomizer[0].strMeal}
        </h5>
        {/* </Link> */}
        <Modal
          showModal={showModal}
          setShowModal={setShowModal}
          randomizer={randomizer}
        />
      </div>
    </div>
  );
}

export default RecipeCards;
