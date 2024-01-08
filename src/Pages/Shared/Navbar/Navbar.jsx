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
import { useEffect, useState } from "react";

const Navbar = () => {
  // const [isSticky, setIsSticky] = useState(false);
  // const [prevScrollPos, setPrevScrollPos] = useState(0);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const scrollPosition = window.scrollY;

  //     if (scrollPosition > prevScrollPos) {
  //       // Scrolling down
  //       setIsSticky(true);
  //     } else {
  //       // Scrolling up
  //       setIsSticky(false);
  //     }

  //     setPrevScrollPos(scrollPosition);
  //   };

  //   window.addEventListener("scroll", handleScroll);
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, [prevScrollPos]);
  //{`mt-12  ${isSticky ? 'sticky top-0 z-10 bg-base-100' : ''}`}
  return (
    <div className={`mt-12  relative`}>
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
     <section  className=" px-6">
        <div className="grid grid-cols-9 items-center">
          <div className="col-span-2">
            <div className="hover-menu relative w-full">
              <div className=" bg-orange-500 flex items-center justify-between px-2 py-4 rounded-t-lg uppercase font-bold text-xs">
                <IoMdMenu className="text-2xl" />
                <p>browser categories</p>
                <IoIosArrowDown className="text-xl text-gray-600" />
              </div>
              <ul className="bg-base-100 menuitem absolute z-10 w-full shadow-md rounded-b-lg font-bold text-sm text-gray-600">
                <li className="hover:bg-gray-200 p-3  border-b">
                  <div className="flex justify-between">
                    <p>Makeup</p>
                    <IoIosArrowForward />
                  </div>
                  <ul className="bg-base-100  submenu absolute left-full top-0 z-10 w-full shadow-md rounded-lg font-bold text-sm text-gray-600">
                    <li className="hover:bg-gray-200 p-3  border-b">
                      <div className="flex justify-between">
                        <p>Face Makeup</p>
                        <IoIosArrowForward />
                      </div>
                      <ul className="bg-base-100  submenu2 absolute left-full top-2 z-10 w-full shadow-md rounded-lg font-bold text-sm text-gray-600">
                        <li className="hover:bg-gray-200 p-3  border-b">
                          <Link to={"/"}>Face Primer</Link>
                        </li>
                        <li className="hover:bg-gray-200 p-3 border-b">
                          <Link to={"/"}>Face Primer</Link>
                        </li>
                        <li className="hover:bg-gray-200 p-3 border-b">
                          <Link to={"/"}>Face Primer</Link>
                        </li>
                        <li className="hover:bg-gray-200 p-3 border-b">
                          <Link to={"/"}>Face Primer</Link>
                        </li>
                      </ul>
                    </li>
                    <li className="hover:bg-gray-200 p-3 border-b relative">
                      <div className="flex justify-between">
                        <p>Eye Makeup</p>
                        <IoIosArrowForward />
                      </div>
                      <ul className="bg-base-100  submenu2 absolute left-full top-2 z-10 w-full shadow-md rounded-lg font-bold text-sm text-gray-600">
                        <li className="hover:bg-gray-200 p-3  border-b">
                          <Link to={"/"}>Face Primer</Link>
                        </li>
                        <li className="hover:bg-gray-200 p-3 border-b">
                          <Link to={"/"}>Face Primer</Link>
                        </li>
                        <li className="hover:bg-gray-200 p-3 border-b">
                          <Link to={"/"}>Face Primer</Link>
                        </li>
                        <li className="hover:bg-gray-200 p-3 border-b">
                          <Link to={"/"}>Face Primer</Link>
                        </li>
                      </ul>
                    </li>
                    <li className="hover:bg-gray-200 p-3 border-b relative">
                      <div className="flex justify-between">
                        <p>Lip Makeup</p>
                        <IoIosArrowForward />
                      </div>
                      <ul className="bg-base-100  submenu2 absolute left-full top-2 z-10 w-full shadow-md rounded-lg font-bold text-sm text-gray-600">
                        <li className="hover:bg-gray-200 p-3  border-b">
                          <Link to={"/"}>Face Primer</Link>
                        </li>
                        <li className="hover:bg-gray-200 p-3 border-b">
                          <Link to={"/"}>Face Primer</Link>
                        </li>
                        <li className="hover:bg-gray-200 p-3 border-b">
                          <Link to={"/"}>Face Primer</Link>
                        </li>
                        <li className="hover:bg-gray-200 p-3 border-b">
                          <Link to={"/"}>Face Primer</Link>
                        </li>
                      </ul>
                    </li>
                    <li className="hover:bg-gray-200 p-3 border-b relative">
                      <div className="flex justify-between">
                        <p>Tools</p>
                        <IoIosArrowForward />
                      </div>
                      <ul className="bg-base-100  submenu2 absolute left-full top-2 z-10 w-full shadow-md rounded-lg font-bold text-sm text-gray-600">
                        <li className="hover:bg-gray-200 p-3  border-b">
                          <Link to={"/"}>Face Primer</Link>
                        </li>
                        <li className="hover:bg-gray-200 p-3 border-b">
                          <Link to={"/"}>Face Primer</Link>
                        </li>
                        <li className="hover:bg-gray-200 p-3 border-b">
                          <Link to={"/"}>Face Primer</Link>
                        </li>
                        <li className="hover:bg-gray-200 p-3 border-b">
                          <Link to={"/"}>Face Primer</Link>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li className="hover:bg-gray-200 p-3 border-b relative">
                  <div className="flex justify-between">
                    <p>Bath & Beauty</p>
                    <IoIosArrowForward />
                  </div>
                  <ul className="bg-base-100  submenu absolute left-full top-0 z-10 w-full shadow-md rounded-lg font-bold text-sm text-gray-600">
                    <li className="hover:bg-gray-200 p-3  border-b">
                      <Link to={"/"}>Face Primer</Link>
                    </li>
                    <li className="hover:bg-gray-200 p-3 border-b">
                      <Link to={"/"}>Face Primer</Link>
                    </li>
                    <li className="hover:bg-gray-200 p-3 border-b">
                      <Link to={"/"}>Face Primer</Link>
                    </li>
                    <li className="hover:bg-gray-200 p-3 border-b">
                      <Link to={"/"}>Face Primer</Link>
                    </li>
                  </ul>
                </li>
                <li className="hover:bg-gray-200 p-3 border-b relative">
                  <div className="flex justify-between">
                    <p>Here Care</p>
                    <IoIosArrowForward />
                  </div>
                  <ul className="bg-base-100  submenu absolute left-full top-0 z-10 w-full shadow-md rounded-lg font-bold text-sm text-gray-600">
                    <li className="hover:bg-gray-200 p-3  border-b">
                      <Link to={"/"}>Face Primer</Link>
                    </li>
                    <li className="hover:bg-gray-200 p-3 border-b">
                      <Link to={"/"}>Face Primer</Link>
                    </li>
                    <li className="hover:bg-gray-200 p-3 border-b">
                      <Link to={"/"}>Face Primer</Link>
                    </li>
                    <li className="hover:bg-gray-200 p-3 border-b">
                      <Link to={"/"}>Face Primer</Link>
                    </li>
                  </ul>
                </li>
                <li className="hover:bg-gray-200 p-3 border-b relative">
                  <div className="flex justify-between">
                    <p>Health & Beauty</p>
                    <IoIosArrowForward />
                  </div>
                  <ul className="bg-base-100  submenu absolute left-full top-0 z-10 w-full shadow-md rounded-lg font-bold text-sm text-gray-600">
                    <li className="hover:bg-gray-200 p-3  border-b">
                      <Link to={"/"}>Face Primer</Link>
                    </li>
                    <li className="hover:bg-gray-200 p-3 border-b">
                      <Link to={"/"}>Face Primer</Link>
                    </li>
                    <li className="hover:bg-gray-200 p-3 border-b">
                      <Link to={"/"}>Face Primer</Link>
                    </li>
                    <li className="hover:bg-gray-200 p-3 border-b">
                      <Link to={"/"}>Face Primer</Link>
                    </li>
                  </ul>
                </li>
                <li className="hover:bg-gray-200 p-3 border-b relative">
                  <div className="flex justify-between">
                    <p>Skin Care</p>
                    <IoIosArrowForward />
                  </div>
                  <ul className="bg-base-100  submenu absolute left-full top-0 z-10 w-full shadow-md rounded-lg font-bold text-sm text-gray-600">
                    <li className="hover:bg-gray-200 p-3  border-b">
                      <Link to={"/"}>Face Primer</Link>
                    </li>
                    <li className="hover:bg-gray-200 p-3 border-b">
                      <Link to={"/"}>Face Primer</Link>
                    </li>
                    <li className="hover:bg-gray-200 p-3 border-b">
                      <Link to={"/"}>Face Primer</Link>
                    </li>
                    <li className="hover:bg-gray-200 p-3 border-b">
                      <Link to={"/"}>Face Primer</Link>
                    </li>
                  </ul>
                </li>
                <li className="hover:bg-gray-200 p-3 border-b">
                  <Link to={"/"}>Electronics</Link>
                </li>
                <li className="hover:bg-gray-200 p-3 border-b">
                  <Link to={"/"}>Accessories</Link>
                </li>
                <li className="hover:bg-gray-200 p-3 border-b">
                  <Link to={"/"}>Kids & Baby</Link>
                </li>
                <li className="hover:bg-gray-200 p-3 border-b">
                  <Link to={"/"}>Fashion</Link>
                </li>
                <li className="hover:bg-gray-200 p-3 border-b">
                  <Link to={"/"}>Perfume</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-span-5 justify-start">
            <ul className="flex uppercase text-xs font-bold">
              <li className="border-e px-2 ">all product</li>
              <li className="border-e px-2 ">brand</li>
              <li className="border-e px-2 ">combo</li>
              <li className="border-e px-2 ">clearance sales</li>
              <li className="border-e px-2 ">flash seals</li>
              <li className=" px-2 ">blog</li>
            </ul>
          </div>
          <div className="col-span-2 ">
            <div className="flex items-center uppercase text-xs font-bold">
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
