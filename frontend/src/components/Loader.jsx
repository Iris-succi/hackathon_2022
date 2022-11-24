import { NavLink } from "react-router-dom";
import "../style/Loader.css";
import Lottie from "react-lottie";
import animationData from "../lotties/Loader.json";

function Loader() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div className="">
      <Lottie options={defaultOptions} height={700} width={700} />
      <NavLink to="/">
        <span className="loaderText text-5xl font-bold">Wait for it...</span>
      </NavLink>
    </div>
  );
}

export default Loader;
