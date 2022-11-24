import Lottie from "react-lottie";
/* import { useEffect, useState } from "react";
 */ import animationData from "../lotties/Animation_Home.json";
import SearchBar from "../components/SearchBar";
import Navbar from "../components/Navbar";
import arrowfly from "../assets/arrow-fly.svg";

export default function Home() {
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
      <Navbar />
      {/* Main content */}
      <div className="md:flex justify-center items-center">
        <h1 className="text-redtitle text-center text-3xl	font-bold	 ">
          Lazy to cross the border? <br />
          Create your culinary journey!
        </h1>
        <div className="block md:hidden w-100">
          {" "}
          <img src={arrowfly} alt="" className="w-100" />
        </div>
        <div>
          <div>
            <Lottie options={defaultOptions} height={400} width={400} />
          </div>
        </div>
      </div>

      {/* Search bar and arrow flight */}
      <div className="md:flex  justify-around items-center ">
        <div className="hidden md:block w-1/2 ">
          {" "}
          <img src={arrowfly} alt="" className="w-100 " />
        </div>
        <SearchBar />
      </div>
    </main>
  );
}
