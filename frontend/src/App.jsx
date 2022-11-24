/* eslint-disable import/no-named-as-default-member */
// import RecipeCards from "@components/RecipeCards";
import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Results from "./pages/Results";
import "./style/App.css";
import About from "./pages/About";
import Favorites from "./pages/Favorites";
import Error404 from "./pages/Error404";
import Randomizer from "./components/Randomizer";

import "./fonts/Cafe Francoise_D.otf";

function App() {
  const [countries, setCountries] = useState("");
  const [search, setSearch] = useState([]);
  return (
    <div className="App w-screen bg-backgroundMain">
      <Navbar
        countries={countries}
        setCountries={setCountries}
        search={search}
        setSearch={setSearch}
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
      </Routes>
    </div>
  );
}

export default App;
