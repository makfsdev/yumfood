import React from "react";

const Delivery = () => {
  return (
    <div className="bg-white w-full py-16 px-4">
      <h3 className="text-orange-500 font-bold text-2xl text-center">
        Quick Delivery App
      </h3>
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <img
          className="w-[550px] mx-auto my-4"
          src="https://techieloops.com/wp-content/uploads/2021/10/food-delivery-apps.png"
          alt=""
        />
        <div className="flex flex-col justify-center">
          <p className="text-[#00df9a] font-bold">Get The App</p>
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
            Limitless Convenience on-demande
          </h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique,
            rerum eveniet. Nobis eum itaque id molestiae rem porro assumenda
            eos, odio tenetur pariatur veritatis quia facilis officiis ex
            cumque, velit repellendus harum aut praesentium. Quo dicta eos sequi
            ipsam porro possimus ipsum asperiores ab repellat quas dolores,
            officiis quae quisquam.
          </p>
          <button className="bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Delivery;
