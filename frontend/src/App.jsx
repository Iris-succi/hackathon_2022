// import RecipeCards from "@components/RecipeCards";
import Randomizer from "@components/Randomizer";
import React, { useState } from "react";
import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import "./style/App.css";

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
      <Home
        countries={countries}
        setCountries={setCountries}
        search={search}
        setSearch={setSearch}
      />
      <Randomizer />
      {/* <RecipeCards /> */}
    </div>
  );
}

export default App;
