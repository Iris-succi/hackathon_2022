import React from "react";
import "../style/About.css";
import AboutUs from "../images/AboutUs.jpg";
import AboutUs2 from "../images/AboutUs2.jpg";

function About() {
  return (
    <div className="w-screen">
      <h1 className="text-3xl text-center mt-5 mb-5 py-3 text-randomize">
        Team Presentation :<br /> "Les petits nems"{" "}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="25"
          height="25"
          fill="#A6122D"
          className="bi bi-airplane-fill inline-block ml-2 transform rotate-45"
          viewBox="0 0 16 16"
        >
          <path d="M6.428 1.151C6.708.591 7.213 0 8 0s1.292.592 1.572 1.151C9.861 1.73 10 2.431 10 3v3.691l5.17 2.585a1.5 1.5 0 0 1 .83 1.342V12a.5.5 0 0 1-.582.493l-5.507-.918-.375 2.253 1.318 1.318A.5.5 0 0 1 10.5 16h-5a.5.5 0 0 1-.354-.854l1.319-1.318-.376-2.253-5.507.918A.5.5 0 0 1 0 12v-1.382a1.5 1.5 0 0 1 .83-1.342L6 6.691V3c0-.568.14-1.271.428-1.849Z" />
        </svg>
      </h1>
      <div className="description bg-indigo-900 flex justify-center">
        <p className="paragraphes  rounded-md text-center mt-9 mb-5 w-8/12">
          "Les petits nems" is a french team of coder who like not to sleep and
          eat pizza !
        </p>
      </div>
      <div className="images  md:gap-6 flex-row md:flex-row pt-5 m-3 md:m-10">
        <div className="cards max-w-sm bg-white   border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
          <img className="rounded-t-lg" src={AboutUs} alt="aboutus" />
          <div className="p-5">
            <h5 className="mb-2 text-2xl text-center tracking-tight text-gray-900 dark:text-white">
              On est nem'barqué dans l'aventure !{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                fill="#A6122D"
                className="bi bi-airplane-fill inline-block ml-2 transform rotate-45"
                viewBox="0 0 16 16"
              >
                <path d="M6.428 1.151C6.708.591 7.213 0 8 0s1.292.592 1.572 1.151C9.861 1.73 10 2.431 10 3v3.691l5.17 2.585a1.5 1.5 0 0 1 .83 1.342V12a.5.5 0 0 1-.582.493l-5.507-.918-.375 2.253 1.318 1.318A.5.5 0 0 1 10.5 16h-5a.5.5 0 0 1-.354-.854l1.319-1.318-.376-2.253-5.507.918A.5.5 0 0 1 0 12v-1.382a1.5 1.5 0 0 1 .83-1.342L6 6.691V3c0-.568.14-1.271.428-1.849Z" />
              </svg>
            </h5>
          </div>
        </div>
        <div className="cards max-w-sm bg-white  border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
          <img className="rounded-t-lg" src={AboutUs2} alt="aboutus" />
          <div className="p-5">
            <h5 className="mb-2 text-2xl text-centertracking-tight text-gray-900 dark:text-white">
              Hard midnight...
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                fill="#A6122D"
                className="bi bi-airplane-fill inline-block ml-2 transform rotate-90"
                viewBox="0 0 16 16"
              >
                <path d="M6.428 1.151C6.708.591 7.213 0 8 0s1.292.592 1.572 1.151C9.861 1.73 10 2.431 10 3v3.691l5.17 2.585a1.5 1.5 0 0 1 .83 1.342V12a.5.5 0 0 1-.582.493l-5.507-.918-.375 2.253 1.318 1.318A.5.5 0 0 1 10.5 16h-5a.5.5 0 0 1-.354-.854l1.319-1.318-.376-2.253-5.507.918A.5.5 0 0 1 0 12v-1.382a1.5 1.5 0 0 1 .83-1.342L6 6.691V3c0-.568.14-1.271.428-1.849Z" />
              </svg>
            </h5>
          </div>
        </div>
        <div className="cards max-w-sm bg-white  border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
          <img className="rounded-t-lg" src={AboutUs} alt="aboutus" />
          <div className="p-5">
            <h5 className="mb-2 text-2xl text-center tracking-tight text-gray-900 dark:text-white">
              Grand finish en mode déchets.{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                fill="#A6122D"
                className="bi bi-airplane-fill inline-block ml-2 transform rotate-180"
                viewBox="0 0 16 16"
              >
                <path d="M6.428 1.151C6.708.591 7.213 0 8 0s1.292.592 1.572 1.151C9.861 1.73 10 2.431 10 3v3.691l5.17 2.585a1.5 1.5 0 0 1 .83 1.342V12a.5.5 0 0 1-.582.493l-5.507-.918-.375 2.253 1.318 1.318A.5.5 0 0 1 10.5 16h-5a.5.5 0 0 1-.354-.854l1.319-1.318-.376-2.253-5.507.918A.5.5 0 0 1 0 12v-1.382a1.5 1.5 0 0 1 .83-1.342L6 6.691V3c0-.568.14-1.271.428-1.849Z" />
              </svg>
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
