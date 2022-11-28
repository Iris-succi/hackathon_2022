/* eslint-disable react/prop-types */
/* eslint-disable */
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function SearchBar({ countries, setCountries, setSearch, search }) {
  const navigate = useNavigate();

  // useEffect(() => {
  //   fetch(`https://www.themealdb.com/api/json/v1/1/list.php?a=list`) // call the list of type of food
  //     .then((response) => response.json())
  //     .then((result) => setCountries(result.meals))
  //     .catch((err) => console.error(err));
  // }, []);
  const getSearchMealByCountry = () => {
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${countries}`) // fetch when choice of food is made
      .then((response) => response.json())
      .then((result) => {
        setSearch(result.meals);
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    getSearchMealByCountry();
  }, []);

  const handleEnterSubmit = (e) => {
    if (e.keyCode === 13) getSearchMealByCountry();
  };
  console.warn(search);

  function getCountry(e) {
    e.preventDefault();

    setCountries(e.target.value);
  }

  return (
    <div>
      <label
        htmlFor="search-dropdown"
        className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
      />

      <div className="relative w-full flex">
        <input
          className="block w-full p-4  pl-10 text-2xl text-gray-900   rounded-lg  focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700  searchbar"
          required
          type="text"
          placeholder="Indicate type of food"
          onChange={getCountry}
          onBlur={getSearchMealByCountry} // indicate the function to active onClick
          // indicates if the key Enter was pressed
        />
        <button
          type="submit"
          className="absolute top-2 right-0 p-2.5 text-sm font-medium text-white bg-blue-700 rounded-r-lg  b hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          onClick={() => {
            getSearchMealByCountry();
            navigate("/listrecipes");
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
  );
}

export default SearchBar;
