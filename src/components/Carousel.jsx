import React from "react";
import { useState } from "react";

const Carousel = ({ items }) => {
  const [currentIndex, setcurrentIndex] = useState(0);

  const gotoPrevious = () => {
    setcurrentIndex((prev) => (prev === 0 ? items.length - 1 : prev - 1));
  };

  const gotoNext = () => {
    setcurrentIndex((prev) => (prev === items.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="flex gap-2 items-center justify-center w-full overflow-hidden p-4">
      <button className="bg-white border border-black text-black p-4 rounded-lg hover:bg-black hover:text-white transition-colors" onClick={gotoPrevious}>
        Prev
      </button>
      <div className="flex transition-all 0.5s ease-in">
        {items.map((item, index) => {
          return (
            <div
              key={index}
              className={`transition-opacity duration-500 ease-in-out ${
              index === currentIndex ? "block opacity-100 z-10" : " hidden opacity-0 z-0"
            }`}>
              {" "}
              <img src={item} alt="img" className="w-full rounded-md" />
            </div>
          );
        })}
      </div>

      <button className="bg-white border border-black text-black p-4 rounded-lg hover:bg-black hover:text-white transition-colors"  onClick={gotoNext}>
        Next
      </button>
    </div>
  );
};

export default Carousel;
