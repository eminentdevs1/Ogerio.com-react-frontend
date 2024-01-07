import logo from "../../../assets/navbar-logo.webp";
import { FaFacebookF, FaYoutube } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import { FiPhoneCall } from "react-icons/fi";
import { GiShoppingBag } from "react-icons/gi";

const Navbar = () => {
  return (
    <div className="mt-12 px-6 shadow-lg">
      {/* section 1 sub-nav*/}
      <section>
        <div className="flex justify-between border-b-2">
          <ul className="flex px-1 uppercase lg:text-[14px]">
            <li className="border-r-2 p-3">newslatter</li>
            <li className="border-r-2 p-3">contact us</li>
            <li className="border-r-2 p-3">faqs</li>
            <li className=" p-3">
              FREE SHIPPING FOR ALL ORDERS OF 1000 TAKA(Condition)
            </li>
          </ul>

          <ul className="flex px-1 uppercase lg:text-[14px]">
            <li className="border-r-2 p-3">compare</li>
            <li className="p-3">login/register</li>
          </ul>
        </div>
      </section>
      {/* section 2 main nav with logo */}
      <section className="my-4">
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
      <section className="py-4">
        <div className="grid grid-cols-9 items-center">
          <div className="col-span-2">
            <ul className="uppercase text-[12px] font-bold">
              <li>browser categories</li>
            </ul>
          </div>
          <div className="col-span-5 justify-start">
            <ul className="flex uppercase text-[12px] font-bold">
              <li className="border-e px-2 ">all product</li>
              <li className="border-e px-2 ">brand</li>
              <li className="border-e px-2 ">combo</li>
              <li className="border-e px-2 ">clearance sales</li>
              <li className="border-e px-2 ">flash seals</li>
              <li className=" px-2 ">blog</li>
            </ul>
          </div>
          <div className="col-span-2 ">
            <div className="flex items-center uppercase text-[12px] font-bold">
              <p className=" px-2 ">low price</p>
              <div className=" px-2 flex items-center">
                <p className="text-3xl mr-2 text-gray-300">
                  <FiPhoneCall />
                </p>
                <div>
                  <p>24/7 support</p>
                  <p>01856575222</p>
                </div>
              </div>
              <p className="text-3xl">
                <GiShoppingBag />
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Navbar;
