import React from "react";

const Carousel = ({ items }) => {
  return (
    <div className="carousel carousel-center bg-neutral rounded-box max-w-md space-x-4 p-4">
      {items.map((item, index) => {
        return (
          <div className="carousel-item" key={index}>
            <img
              src={item}
              className="rounded-box h-96"
            />
          </div>
        );
      })}
    </div>
  );
};

export default Carousel;
