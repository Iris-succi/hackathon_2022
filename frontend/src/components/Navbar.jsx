import React, { useState } from "react";
import "../style/Navbar.css";
import { BrowserRouter as Router, Link } from "react-router-dom";
import logo from "../images/logo.png";
// import AllRoutes from "./AllRoutes";

function Navbar() {
  const [navbar, setNavbar] = useState(false);
  return (
    <Router>
      <nav className="navbar w-full bg-white shadow">
        <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
          <div>
            <div className="flex items-center justify-between py-3 md:py-5 md:block">
              <a href="logo.png" className="flex items-center">
                <img src={logo} className="h-6 mr-3 sm:h-9" alt="Logo" />
                <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
                  Les petits nems{" "}
                </span>
              </a>
              <div className="md:hidden">
                <button
                  type="button"
                  className="burgerbutton p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
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
              className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                navbar ? "block" : "hidden"
              }`}
            >
              <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                <li className="text-gray-600 hover:text-blue-600">
                  <Link to="/">Home</Link>
                </li>
                <li className="text-gray-600 hover:text-blue-600">
                  <Link to="/recipecards">Cards Recipes</Link>
                </li>
                <li className="text-gray-600 hover:text-blue-600">
                  <Link to="/about">About Us</Link>
                </li>
                <li className="text-gray-600 hover:text-blue-600">
                  <Link to="/favorites">Favorites</Link>
                </li>
                <li>
                  {" "}
                  <input
                    type="text"
                    id="search-navbar"
                    className="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Search a country"
                  />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </Router>
  );
}

export default Navbar;
