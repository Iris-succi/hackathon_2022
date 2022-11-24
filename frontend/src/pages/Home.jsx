/* eslint-disable react/prop-types */
import React from "react";
import Lottie from "react-lottie";
/* import { useEffect, useState } from "react"; */
import animationData from "../lotties/Animation_Home.json";
import SearchBar from "../components/SearchBar";
import arrowfly from "../assets/arrow-fly.svg";

export default function Home({ countries, setCountries, setSearch, search }) {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <main className="w-screen h-screen bg-backgroundMain">
      {/* Main content */}
      <div className="md:flex justify-center items-center">
        <h1 className="text-redtitle text-center text-3xl	font-bold ">
          Lazy to cross the border? <br />
          Create your culinary journey!
        </h1>
        <div className="block md:hidden w-100">
          {" "}
          <img src={arrowfly} alt="" className="w-100" />
        </div>
        <div>
          <div>
            <Lottie options={defaultOptions} height={300} width={300} />
          </div>
        </div>
      </div>
      {/* Search bar and arrow flight */}
      <div className="md:flex  justify-around items-center ">
        <div className="hidden md:block w-1/2 ">
          {" "}
          <img src={arrowfly} alt="" className="w-100 " />
        </div>
        <div className="flex justify-center">
          <SearchBar
            countries={countries}
            setCountries={setCountries}
            setSearch={setSearch}
            search={search}
          />
        </div>
      </div>
    </main>
  );
}
