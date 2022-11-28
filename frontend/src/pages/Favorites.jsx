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
    const cardData = localStorage.getItem("favorites");
    setDisplayCardTrip(JSON.parse(cardData));
  }, []);
  const datas = JSON.parse(localStorage.getItem("favorites"));

  return (
    <div className="flex justify-center align-center">
      <div className="flex flex-col  justify-center text-center  ">
        <h1 className="text-3xl mt-5 mb-5 py-3 text-randomize">
          My food trip{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            fill="#C40000"
            className="bi bi-airplane-fill inline-block ml-2 transform rotate-45"
            viewBox="0 0 16 16"
          >
            <path d="M6.428 1.151C6.708.591 7.213 0 8 0s1.292.592 1.572 1.151C9.861 1.73 10 2.431 10 3v3.691l5.17 2.585a1.5 1.5 0 0 1 .83 1.342V12a.5.5 0 0 1-.582.493l-5.507-.918-.375 2.253 1.318 1.318A.5.5 0 0 1 10.5 16h-5a.5.5 0 0 1-.354-.854l1.319-1.318-.376-2.253-5.507.918A.5.5 0 0 1 0 12v-1.382a1.5 1.5 0 0 1 .83-1.342L6 6.691V3c0-.568.14-1.271.428-1.849Z" />
          </svg>
        </h1>
        <div className=" md:flex md:align-center md:justify-center m-5  gap-10 md:flex-row md:flex-wrap">
          {datas?.map((data) => (
            <FavoriteCard key={data.id} data={data} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Favorites;
