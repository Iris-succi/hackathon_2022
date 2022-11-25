/* eslint-disable */
/* eslint-disable import/no-named-as-default */
/* eslint-disable import/no-named-as-default-member */
import React, { useEffect, useState } from "react";
import "./style/App.css";
import { Routes, Route } from "react-router-dom";
import SearchValueResults from "@components/SearchValueResults";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Results from "./pages/Results";
import About from "./pages/About";
import Favorites from "./pages/Favorites";
import Error404 from "./pages/Error404";
import Randomizer from "./components/Randomizer";
import Loader from "./components/Loader";

import MyIngredient from "./pages/MyIngredient";
import "./fonts/Cafe Francoise_D.otf";
import Resto from "./components/Resto";

function App() {
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoader(false);
    }, 3000);
  }, []);

  const [searchValue, setSearchValue] = useState("");
  const [result, setResult] = useState([]);

  const getResult = () => {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchValue}`)
      .then((response) => response.json())
      .then((response) => {
        setResult(response.meals);
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    getResult();
  }, []);

  const [countries, setCountries] = useState("");
  const [search, setSearch] = useState([]);
  return loader ? (
    <Loader />
  ) : (
    <div className="App w-screen bg-backgroundMain">
      <Navbar
        countries={countries}
        setCountries={setCountries}
        search={search}
        setSearch={setSearch}
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        getResult={getResult}
      />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              countries={countries}
              setCountries={setCountries}
              search={search}
              setSearch={setSearch}
            />
          }
        />
        <Route path="*" element={<Error404 />} />
        <Route
          path="/listrecipes"
          element={<Results countries={countries} search={search} />}
        />
        <Route path="/about" element={<About />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/randomizer" element={<Randomizer />} />
        <Route path="/restos" element={<Resto />} />
        <Route path="/myingredient" element={<MyIngredient />} />
        <Route
          path="/search/:searchValue"
          element={
            <SearchValueResults
              /* searchValue={searchValue}
              getResult={getResult} */
              result={result}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
