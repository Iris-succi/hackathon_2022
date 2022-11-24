import React from "react";
import "../style/About.css";
import AboutUs from "../images/AboutUs.jpg";

function About() {
  return (
    <div className="border">
      <div className="h-36">
        <img className="border w-97" alt="aboutus" src={AboutUs} />
      </div>
      <div>
        <p>
          "Les petits nems" is a french team of coder who like not to slepp and
          to eat pizza!
        </p>
      </div>
    </div>
  );
}

export default About;
