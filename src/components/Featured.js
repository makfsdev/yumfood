import React, { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";

const Featured = () => {
  const sliders = [
    {
      url: "https://images.pexels.com/photos/3682837/pexels-photo-3682837.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      url: "https://images.pexels.com/photos/248444/pexels-photo-248444.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      url: "https://images.pexels.com/photos/2725744/pexels-photo-2725744.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  const handleChangeImage = (operator) => {
    setCurrentIndex((prev) => {
      if (prev === sliders.length - 1 && operator === 1) {
        return 0;
      } else if (prev === 0 && operator === -1) {
        return sliders.length - 1;
      } else {
        return prev + operator;
      }
    });
  };

  const moveToNextSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className=" max-w-[1520] h-[500px] w-full py-4 px-4 relative group">
      <div
        className="w-full h-full rounded-2xl bg-center duration-500 bg-cover"
        style={{ backgroundImage: `url(${sliders[currentIndex].url})` }}
      ></div>
      <div
        onClick={() => handleChangeImage(-1)}
        className="hidden group-hover:block absolute top-[50%] translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-orange-700 text-white cursor-pointer"
      >
        <BsChevronCompactLeft />
      </div>
      <div
        onClick={() => handleChangeImage(1)}
        className="hidden group-hover:block absolute top-[50%] translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-orange-700 text-white cursor-pointer "
      >
        <BsChevronCompactRight />
      </div>
      <div className="flex top-4 justify-center py-2">
        {sliders.map((sliderItem, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => moveToNextSlide(slideIndex)}
            className="text-2xl cursor-pointer"
          >
            <RxDotFilled />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Featured;
