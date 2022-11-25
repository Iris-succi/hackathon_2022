import React from "react";
import "../style/About.css";
import AboutUs from "../images/AboutUs.jpg";
import AboutUs2 from "../images/AboutUs2.jpg";

function About() {
  return (
    <div className="container">
      <h1 className="text-center mt-3 text-2xl">
        Team Presentation : "Les petits nems"
      </h1>
      <div className="images flex flex-row pt-5">
        <div className="cards max-w-sm bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
          <img className="rounded-t-lg" src={AboutUs} alt="aboutus" />
          <div className="p-5">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              On est nem'barqué dans l'aventure !
            </h5>
          </div>
        </div>
        <div className="cards max-w-sm bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
          <img className="rounded-t-lg" src={AboutUs2} alt="aboutus" />
          <div className="p-5">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Hard midnight...
            </h5>
          </div>
        </div>
        <div className="cards max-w-sm bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
          <img className="rounded-t-lg" src={AboutUs} alt="aboutus" />
          <div className="p-5">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Grand finish en mode déchets.
            </h5>
          </div>
        </div>
      </div>
      <div className="description bg-indigo-900 flex justify-center">
        <p className="paragraphes border rounded-md text-center mt-9 mb-5 w-8/12">
          "Les petits nems" is a french team of coder who like not to sleep and
          eat pizza !
        </p>
      </div>
    </div>
  );
}

export default About;
