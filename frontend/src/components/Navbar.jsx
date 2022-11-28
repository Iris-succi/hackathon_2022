/* eslint-disable react/prop-types */
/* eslint-disable */
import React, { useState } from "react";
import "../style/Navbar.css";
import { Link, useNavigate } from "react-router-dom";
import logo from "../images/logo.png";

function Navbar({ searchValue, setSearchValue, getResult }) {
  const navigate = useNavigate();

  /* Function to press enter key and reset  */
  const [navbar, setNavbar] = useState(false);
  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      setSearchValue(event.target.value);
      getResult();
      navigate("/search/${searchValue}");
      setSearchValue("");
    }
  };

  return (
    <nav className="navbar  shadow">
      <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
        <div>
          <div className="flex items-center justify-between py-3 md:py-5 md:block">
            <a href="/" className="flex items-center">
              <img
                src={logo}
                className=" z-20 relative w-10 grayscale "
                alt="Logo"
              />
              <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white" />
            </a>
            <div className="md:hidden">
              <button
                type="button"
                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border "
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        <div>
          <div
            className={`flex-1 justify-self-center   pb-5 mt-8 md:block md:pb-0 md:mt-0 ${
              navbar
                ? "block absolute top-7 left-0 bg-[#2d4059] w-screen z-10"
                : "hidden"
            }`}
          >
            {/* border-box bug */}
            <ul className="items-center p-3 justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
              <li className="text-gray-600 hover:text-blue-600 text-right pr-3">
                <Link to="/">
                  Home
                </Link>
              </li>

              <li className="text-gray-600 hover:text-blue-600 text-right pr-3">
                <Link to="/favorites">
                  Favorites
                </Link>
              </li>
              <li className="text-gray-600 hover:text-blue-600 text-right pr-3">
                <Link to="/randomizer">
                  Randomizer
                </Link>
              </li>
              <li className="text-gray-600 hover:text-blue-600 text-right pr-3">
                <Link to="/myingredient">
                  Last Ingredient
                </Link>
              </li>
              <li className="text-gray-600 hover:text-blue-600 text-right pr-3">
                <Link  to="/restos">
                  Restos of all countries
                </Link>
              </li>
              <li className="text-gray-600 hover:text-blue-600 text-right pr-3">
                <Link to="/about">
                  About Us
                </Link>
              </li>
              <li className="flex justify-center">
                {/*  another search bar */}{" "}
                <form className="flex items-center">
                  {/* Search bar result */}
                  <label htmlFor="simple-search" className="sr-only">
                    Search
                  </label>
                  <div className="relative w-full">
                    <Link to={`/search/${searchValue}`}>
                      {" "}
                      <button
                        type="button"
                        className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"
                        onClick={() => {
                          getResult();
                          setSearchValue("");
                          navigate("/search");
                        }}
                      >
                        <svg
                          aria-hidden="true"
                          className="w-5 h-5 text-gray-500 dark:text-gray-400"
                          fill="#2d4059"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </button>
                    </Link>

                    <input
                      type="text"
                      id="simple-search"
                      className="bg-gray-50 border border-gray-300  text-sm rounded-lg  block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white   txt-perso-search"
                      placeholder="Search recipe"
                      onChange={(e) => setSearchValue(e.target.value)}
                      value={searchValue}
                      onKeyPress={(e) => {
                        handleKeyPress(e);
                      }}
                      required
                    />
                  </div>
                </form>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
