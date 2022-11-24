// import RecipeCards from "@components/RecipeCards";
import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
// import Error404 from "./pages/Error404";
import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import "./style/App.css";
import RecipeCards from "./components/RecipeCards";
import About from "./pages/About";
import Favorites from "./pages/Favorites";

function App() {
  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState([]);
  return (
    <div className="App w-screen">
      <Navbar
        countries={countries}
        setCountries={setCountries}
        search={search}
        setSearch={setSearch}
      />
      <Routes>
        {/* <Route path="*" element={<Error404 theme={theme} />} /> */}
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
        <Route
          path="/recipecards"
          element={
            <RecipeCards
              countries={countries}
              setCountries={setCountries}
              search={search}
              setSearch={setSearch}
            />
          }
        />
        <Route path="/about" element={<About />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
      {/* <RecipeCards /> */}
    </div>
  );
}

export default App;
