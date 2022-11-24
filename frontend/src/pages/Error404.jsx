import React from "react";
import "../style/error404.css";
import { Link } from "react-router-dom";
import error404image from "../images/error404image.jpg";

function Error404() {
  return (
    <div>
      <img className="error404" alt="error404" src={error404image} />
      <p style={{ textAlign: "center" }}>
        <Link to="/">Go to Home </Link>
      </p>
    </div>
  );
}
export default Error404;
