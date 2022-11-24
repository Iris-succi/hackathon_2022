import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import RecipeCards from "./RecipeCards";
import About from "../pages/About";
import Favorites from "../pages/Favorites";

function AllRoutes() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/recipecards" element={<RecipeCards />} />
          <Route path="/about" element={<About />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </Router>
    </div>
  );
}

export default AllRoutes;
