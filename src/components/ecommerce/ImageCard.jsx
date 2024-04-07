"use client";
import { useState } from "react";
function ImageCard({ slides }) {
  console.log(slides);

  const [index, setIndex] = useState(0);

  function clickLeft() {
    if (index === 0) {
      setIndex(slides.length - 1);
    } else {
      setIndex(index - 1);
    }
  }
  function clickRigth() {
    if (index + 1 === slides.length) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  }
  function obtenerImage(indice) {
    setIndex(indice);
  }

  return (
    <div className="col-span-2 ">
      <div className=" relative rounded-t-md">
        <img
          className="rounded-md w-full h-full object-cover "
          src={slides[index]}
          alt=""
        />
        <div className="flex absolute top-0 bottom-0 items-center w-full px-2 justify-between">
          <button onClick={clickLeft} className="bg-zinc-700 p-1 rounded-full">
            <svg
              className="w-6 h-6 text-gray-800 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m15 19-7-7 7-7"
              />
            </svg>
          </button>
          <button onClick={clickRigth} className="bg-zinc-700 p-1 rounded-full">
            <svg
              classNames="w-6 h-6 text-gray-800 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m9 5 7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>

      <div className="h-16  flex  shadow-md justify-center gap-4 mt-1 rounded-b-md">
        {slides.map((slides, indice) => (
          <img
            key={indice}
            onClick={() => obtenerImage(indice)}
            className={`rounded-md ${indice===index?'border':''} border-red-500 cursor-pointer`}
            src={slides}
            alt=""
          />
        ))}
      </div>
    </div>
  );
}

export default ImageCard;
