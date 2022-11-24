/* eslint-disable react/prop-types */
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
      .then((response2) => response2.json())
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

  return (
    <div>
      <section className="flex items-center">
        <div className="flex border border-bluetitle-200 rounded">
          <input
            type="text"
            placeholder="Indicate type of food"
            value={countries}
            onBlur={getSearchMealByCountry}
            onChange={(event) => setCountries(event.target.value)} // indicate the function to active onClick
            onKeyDown={handleEnterSubmit} // indicates if the key Enter was pressed
          />
          <button
            className="px-4 text-white"
            type="button"
            onClick={() => {
              getSearchMealByCountry(); // onClick, fetch is made with the type of food selected
              navigate("/listrecipes");
            }}
          >
            Let's go !
          </button>
        </div>
      </section>
    </div>
  );
}

export default SearchBar;
