/* eslint-disable react/prop-types */
/* eslint-disable react/button-has-type */
import React from "react";
import youtube from "../assets/youtube.png";

export default function Modal({ showModal, setShowModal, randomizer }) {
  return (
    <>
      <button
        className="bg-bluetitle text-backgroundMain font-bold py-2 px-4 mt-6 mb-6 rounded"
        type="button"
        onClick={() => setShowModal(true)}
      >
        More details
      </button>
      {showModal ? (
        <div className="modal">
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="h-100 relative w-auto my-6 mx-auto max-w-3xl bg-bluetitle">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className=" text-backgroundMain backgroundMain text-center justify-between pt-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold text-center">
                    {randomizer[0].strMeal}
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                <div className="relative p-6 flex-auto text-backgroundMain">
                  <img src={randomizer[0].strMealThumb} alt="recipe" />
                  <div className="mt-5">Country : {randomizer[0].strArea}</div>
                  <div className="mt-5">
                    Categorie : {randomizer[0].strCategory}
                  </div>
                  <a href={randomizer[0].strYoutube}>
                    <img src={youtube} alt="" className="w-12" />
                  </a>
                </div>
                <div className="flex text-backgroundMain items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
