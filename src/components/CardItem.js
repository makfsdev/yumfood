import { ArrowSmRightIcon } from "@heroicons/react/outline";

const CardItem = ({ item }) => {
  return (
    <div className="border-none hover:scale-105 duration-300">
      <img
        className="w-full h-[200px] object-cover rounded-lg"
        src={item.img}
        alt={item.name}
      />
      <div className="flex justify-between py-2 px-2">
        <p className="font-bold">{item.name}</p>
        <p className="bg-orange-700 h-18 w-18 rounded-full -mt-10 text-white py-4 px-2 border-8 border-white font-bold">
          {item.price}
        </p>
      </div>
      <div className="pl-2 py-4 -mt-7">
        <p className="flex items-center text-indigo-600 cursor-pointer">
          View More <ArrowSmRightIcon className="w-5 ml-2" />
        </p>
      </div>
    </div>
  );
};

export default CardItem;
