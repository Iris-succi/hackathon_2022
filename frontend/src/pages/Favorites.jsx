/* eslint-disable no-unused-vars */
/* eslint-disable react/no-array-index-key */
import React from "react";
import FavoriteCard from "../components/FavoriteCard";

function Favorites() {
  /* Use state for stock data in the localstorage */
  const [displayCardTrip, setDisplayCardTrip] = React.useState();
  // const [displayCardHotels, setDisplayCardHotels] = React.useState();
  /* use effect for get the data in the localstorage */
  React.useEffect(() => {
    const cardData = localStorage.getItem("favorite");
    setDisplayCardTrip(JSON.parse(cardData));
  }, []);
  const datas = JSON.parse(localStorage.getItem("favorites"));

  return (
    <div className="flex justify-center align-center">
      <div className="flex-col text-center">
        <h1 className="text-3xl mt-5 mb-5">My favorites recipes</h1>
        {datas.map((data) => (
          <FavoriteCard key={data.id} data={data} />
        ))}
      </div>
    </div>
  );
}

export default Favorites;
