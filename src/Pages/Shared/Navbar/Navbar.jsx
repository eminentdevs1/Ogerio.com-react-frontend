import logo from "../../../assets/navbar-logo.webp";
import { FaFacebookF, FaYoutube } from "react-icons/fa";
import {
  IoIosArrowDown,
  IoIosArrowForward,
  IoLogoInstagram,
  IoMdMenu,
} from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import { FiPhoneCall } from "react-icons/fi";
import { GiShoppingBag } from "react-icons/gi";
import "./navbar.css";
import { Link } from "react-router-dom";
import BottomNavbar from "./bottomNavbar";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;

      // Adjust the threshold as needed
      if (offset > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


  return (
    <div className={`mt-12 `}>
      {/* section 1 sub-nav*/}
      <section className={`px-6 `}>
        <div className="flex justify-between border-b-2">
          <ul className="flex px-1 uppercase lg:text-[11px]">
            <li className="border-r-2 p-3">newslatter</li>
            <li className="border-r-2 p-3">contact us</li>
            <li className="border-r-2 p-3">faqs</li>
            <li className=" p-3">
              FREE SHIPPING FOR ALL ORDERS OF 1000 TAKA(Condition)
            </li>
          </ul>

          <ul className="flex px-1 uppercase lg:text-[11px]">
            <li className="border-r-2 p-3">compare</li>
            <li className="p-3">login/register</li>
          </ul>
        </div>
      </section>
      {/* section 2 main nav with logo */}
      <section className={`my-4 px-6 `}>
        <div className="grid grid-cols-8 items-center">
          <div className="col-span-2">
            <img className="w-56" src={logo} alt="" />
          </div>
          <div className="col-span-5">
            <div className="flex items-center">
              <input
                type="text"
                placeholder="Search for products"
                className="input focus:outline-none rounded-e-none border-gray-300  w-full"
              />
              <span className="text-4xl bg-orange-600 py-1 px-2 input rounded-s-none cursor-pointer text-white">
                <CiSearch />
              </span>
            </div>
          </div>
          <div className="col-span-1">
            <div className="flex  items-center justify-center">
              <div className="border-2 ml-2 p-2 rounded-full cursor-pointer text-gray-400  hover:text-white hover:bg-blue-600 hover:border-blue-600">
                <FaFacebookF className="  " />
              </div>
              <div className="border-2 ml-2 p-2 rounded-full cursor-pointer text-gray-400  hover:text-white hover:bg-pink-500 hover:border-pink-500">
                <IoLogoInstagram className="  " />
              </div>
              <div className="border-2 ml-2 p-2 rounded-full cursor-pointer text-gray-400  hover:text-white hover:bg-red-600 hover:border-red-600">
                <FaYoutube className="  " />
              </div>
              {/* <div>
                <IoLogoInstagram />
              </div>
              <div>
                <FaYoutube />
              </div> */}
            </div>
          </div>
        </div>
      </section>
      {/* section 3 product menu and link  */}
    <section className="">
    <BottomNavbar />
    </section>
    </div>
  );
};

export default Navbar;
