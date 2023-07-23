import React, { useState } from "react";
import { mealData } from "../data/data";
import CardItem from "./CardItem.js";
// import { ArrowSmRightIcon } from "@heroicons/react/outline";

const Meal = () => {
  const [foods, setFoods] = useState(mealData);
  const filterCategory = (event) => {
    event.preventDefault();
    const category = event.target.name;
    setFoods(
      mealData.filter((item) => (category ? item.category === category : item))
    );
  };
  return (
    <div className="max-w-[1520px] m-auto py-12 px-4">
      <h1 className="text-orange-500 font-bold text-2xl text-center py-2">
        Our Meal
      </h1>
      <div className="flex flex-col lg:flex-row justify-center">
        <div className="flex justify-center md:justify-center">
          <button
            onClick={filterCategory}
            className="m-1 border-orange-700 bg-orange-700 text-white hover:bg-white hover:text-orange-700 hover:border-orange-700"
          >
            All
          </button>
          <button
            onClick={filterCategory}
            name="pizza"
            className="m-1 border-orange-700 bg-orange-700 text-white hover:bg-white hover:text-orange-700 hover:border-orange-700"
          >
            Pizza
          </button>
          <button
            onClick={filterCategory}
            name="chicken"
            className="m-1 border-orange-700 bg-orange-700 text-white hover:bg-white hover:text-orange-700 hover:border-orange-700"
          >
            Chicken
          </button>
          <button
            onClick={filterCategory}
            name="salad"
            className="m-1 border-orange-700 bg-orange-700 text-white hover:bg-white hover:text-orange-700 hover:border-orange-700"
          >
            Salad
          </button>
        </div>
      </div>
      <div className="grid md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-4 gap-6 py-4">
        {foods.map((item) => (
          <CardItem key={item.id} item={item} />
          // <div className="border-none hover:scale-105 duration-300">
          //   <img
          //     className="w-full h-[200px] object-cover rounded-lg"
          //     src={item.img}
          //     alt={item.name}
          //   />
          //   <div className="flex justify-between py-2 px-2">
          //     <p className="font-bold">{item.name}</p>
          //     <p className="bg-orange-700 h-18 w-18 rounded-full -mt-10 text-white py-4 px-2 border-8 font-bold">
          //       {item.price}
          //     </p>
          //   </div>
          //   <div className="pl-2 py-4 -mt-7">
          //     <p className="flex items-center text-indigo-600 cursor-pointer">
          //       View More <ArrowSmRightIcon className="w-5 ml-2" />
          //     </p>
          //   </div>
          // </div>
        ))}
      </div>
    </div>
  );
};

export default Meal;
