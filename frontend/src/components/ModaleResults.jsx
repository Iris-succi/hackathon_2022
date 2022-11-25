import React, { useEffect } from "react";
import youtube from "../assets/youtube.png";
/* eslint-disable react/prop-types */
/* eslint-disable react/button-has-type */

export default function Modal({ showModal, setShowModal, recipeDetails }) {
  const [ingredients, setIngredients] = React.useState([]);

  useEffect(() => {
    if (recipeDetails.length > 0) {
      for (const ingredient in recipeDetails[0]) {
        if (ingredient.includes("strIngredient")) {
          ingredients.push(recipeDetails[0][ingredient]);
        }
      }
      setIngredients([...ingredients]);
    }
  }, [recipeDetails.length]);

  return recipeDetails.length > 0 ? (
    <>
      <button
        className="bg-bluetitle text-backgroundMain font-bold py-2 px-4 mt-6 mb-6 rounded"
        type="button"
        onClick={() => setShowModal(true)}
      >
        More details
      </button>
      {showModal ? (
        <div className="modal max-h-80">
          <div className="rounded justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="shadow-lg h-100 relative w-auto my-6 mx-auto max-w-3xl bg-bluetitle rnded-modale">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className=" text-backgroundMain backgroundMain text-center justify-between pt-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold text-center">
                    {recipeDetails[0].strMeal}
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
                <div className="relative p-6 flex flex-col text-backgroundMain w-screen">
                  <div
                    style={{
                      backgroundImage: `url('${recipeDetails[0].strMealThumb}')`,
                    }}
                    className="img-modale   rounded shadow-lg"
                  />
                  <div className="flex ">
                    <div className="text-left p-2  mt-5">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="17"
                        height="17"
                        fill="#A6122D"
                        className="bi bi-airplane-fill inline-block ml-2 transform rotate-45"
                        viewBox="0 0 16 16"
                      >
                        <path d="M6.428 1.151C6.708.591 7.213 0 8 0s1.292.592 1.572 1.151C9.861 1.73 10 2.431 10 3v3.691l5.17 2.585a1.5 1.5 0 0 1 .83 1.342V12a.5.5 0 0 1-.582.493l-5.507-.918-.375 2.253 1.318 1.318A.5.5 0 0 1 10.5 16h-5a.5.5 0 0 1-.354-.854l1.319-1.318-.376-2.253-5.507.918A.5.5 0 0 1 0 12v-1.382a1.5 1.5 0 0 1 .83-1.342L6 6.691V3c0-.568.14-1.271.428-1.849Z" />
                      </svg>{" "}
                      {recipeDetails[0].strArea} -{" "}
                      {recipeDetails[0].strCategory}
                    </div>
                  </div>
                  Ingredient :{" "}
                  {ingredients?.map((ingredient) =>
                    ingredient ? <p>-{ingredient}</p> : null
                  )}
                  <a href={recipeDetails[0].strYoutube}>
                    <img src={youtube} alt="" className="w-12 m-1 p-1" />
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
  ) : null;
}
