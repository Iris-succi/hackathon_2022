/* eslint-disable */
import React, { useState, useEffect } from "react";
import RestoDisplay from "./RestoDisplay";

function Resto() {
  const [restos, setRestos] = useState([]);
  const getResto = () => {
    fetch(`http://localhost:4000/api/restos`)
      .then((response) => response.json())
      .then((result) => {
        console.log(restos);
        setRestos(result);
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    getResto();
  }, []);

  return (
    <div>
      {/*
        Display the API call of restos
      */}
      {restos?.map((resto) => {
        return <RestoDisplay key={resto.id} {...resto} />;
      })}
    </div>
  );
}

export default Resto;
