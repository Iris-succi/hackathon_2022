/* eslint-disable import/no-named-as-default-member */
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
    <main className=" h-96 my-8 bg-backgroundMain border border-transparent flex-col ">
      {/* Main content */}
      <div className="md:flex justify-around items-center border border-transparent my-5  my-8">
        <h1 className="text-[#C40000] text-center text-3xl	md:text-5xl font-bold	 ">
          Lazy to cross the border ! <br />
          Create your culinary journey !
        </h1>
        <div className="block md:hidden w-100 ">
          {" "}
          <img src={arrowfly} alt="" className="w-100" />
        </div>
        <div className="block w-100 md:hidden">
          <Lottie options={defaultOptions} height={300} width={300} />
        </div>
        <div className="hidden w-100 md:block">
          <Lottie options={defaultOptions} height={300} width={400} />
        </div>
      </div>
      {/* Search bar and arrow flight */}
      <div className="flex flex-col-reverse  justify-center items-center ">
        <div className="hidden md:block  ">
          {" "}
          <img src={arrowfly} alt="" className="w-100  h-60" />
        </div>
        <div className=" w-5/6 md:w-3/6  p-5">
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
