import React from "react";
import "../style/error404.css";
import { Link } from "react-router-dom";
import error404image from "../images/error404image.jpg";

function Error404() {
  return (
    <div className="error404">
      <img className="image404" alt="error404" src={error404image} />
      <p className="paragraphe pt-8" style={{ textAlign: "center" }}>
        <Link to="/">
          Error 404 <br />
          Go to Home and sleep!
        </Link>
      </p>
    </div>
  );
}
export default Error404;
