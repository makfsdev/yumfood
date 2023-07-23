import { AiOutlineClose } from "react-icons/ai";
import { BsPerson } from "react-icons/bs";
import { TbTruckReturn } from "react-icons/tb";
import { FaGoogleWallet } from "react-icons/fa";
import { MdHelp, MdOutlineFavorite } from "react-icons/md";

const SideNave = ({ sideNav, setSideNav }) => {
  return (
    <div
      className={
        sideNav
          ? "fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-300"
          : "fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-300"
      }
    >
      <AiOutlineClose
        onClick={() => setSideNav(!sideNav)}
        className="absolute right-4 top-4 cursor-pointer"
        size={25}
      />
      <h2 className="text-2xl p-4">
        Yum <span className="text-orange-700 font-bold">Food</span>
      </h2>
      <nav>
        <ul className=" flex flex-col p-4 text-gray-900 ">
          <li className="text-xl py-4 flex">
            <BsPerson
              size={25}
              className=" mr-4 text-white bg-black rounded-full "
            />
            My Account
          </li>
          <li className="text-xl py-4 flex">
            <TbTruckReturn
              size={25}
              className=" mr-4 text-white bg-black rounded-full "
            />
            Delivery
          </li>
          <li className="text-xl py-4 flex">
            <MdOutlineFavorite
              size={25}
              className=" mr-4 text-white bg-black rounded-full "
            />
            My Favorite
          </li>
          <li className="text-xl py-4 flex">
            <FaGoogleWallet
              size={25}
              className=" mr-4 text-white bg-black rounded-full "
            />
            My Wallet
          </li>
          <li className="text-xl py-4 flex">
            <MdHelp
              size={25}
              className=" mr-4 text-white bg-black rounded-full "
            />
            Help
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default SideNave;
