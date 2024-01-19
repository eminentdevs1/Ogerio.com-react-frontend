import { FiPhoneCall } from "react-icons/fi";
import { GiShoppingBag } from "react-icons/gi";
import { IoIosArrowDown, IoIosArrowForward, IoMdMenu } from "react-icons/io";
import { Link } from "react-router-dom";
import './navbar.css'
import { useEffect, useState } from "react";

const BottomNavbar = () => {
    const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    let prevScrollPos = window.pageYOffset;

    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;

      if (prevScrollPos > currentScrollPos) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }

      prevScrollPos = currentScrollPos;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <section className={`px-6 ${isSticky ? "fixed top-0 z-50 shadow-2xl bg-white w-full" : ""}`}>
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
  );
};

export default BottomNavbar;
