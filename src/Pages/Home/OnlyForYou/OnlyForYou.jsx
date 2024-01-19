import { Link } from "react-router-dom";
import { CiCircleMinus, CiStar } from "react-icons/ci";
import { CiCirclePlus } from "react-icons/ci";
import { useState } from "react";
import "../MostPopularMakeup/makeup.css";
import { IoIosGitCompare } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import { MdFavoriteBorder } from "react-icons/md";

const OnlyForYou = () => {
  const [itemQuantities, setItemQuantities] = useState({});
  const [hoveredItemId, setHoveredItemId] = useState(null);

  const handleIncrement = (itemId) => {
    setItemQuantities((prevQuantities) => ({
      ...prevQuantities,
      [itemId]: (prevQuantities[itemId] || 0) + 1,
    }));
  };

  const handleDecrement = (itemId) => {
    setItemQuantities((prevQuantities) => ({
      ...prevQuantities,
      [itemId]: Math.max((prevQuantities[itemId] || 0) - 1, 0),
    }));
  };

  const handleMouseEnter = (itemId) => {
    setHoveredItemId(itemId);
  };

  const handleMouseLeave = () => {
    setHoveredItemId(null);
  };

  const data = [
    {
      img: "https://www.ogerio.com/wp-content/uploads/2024/01/New-year-offer-banners-2024-post.jpg",
      img2: "https://www.ogerio.com/wp-content/uploads/2023/09/photo_2023-09-13_16-47-32-700x700.jpg",
      id: 1,
      title: "tools",
      newPrice: 642,
      oldPrice: 1000,
      rating: 4.5,
    },
    {
      img: "https://www.ogerio.com/wp-content/uploads/2024/01/New-year-offer-banners-2024-post.jpg",
      img2: "https://www.ogerio.com/wp-content/uploads/2022/06/Wet-n-wild-impossible-primer-700x700.jpg",
      id: 2,
      title: "tools",
      newPrice: 642,
      oldPrice: 1000,
      rating: 4.5,
    },
    {
      img: "https://www.ogerio.com/wp-content/uploads/2024/01/New-year-offer-banners-2024-post.jpg",
      img2: "https://www.ogerio.com/wp-content/uploads/2022/06/Wet-n-wild-impossible-primer-700x700.jpg",
      id: 3,
      title: "tools",
      newPrice: 642,
      oldPrice: 1000,
      rating: 4.5,
    },
    {
      img: "https://www.ogerio.com/wp-content/uploads/2024/01/New-year-offer-banners-2024-post.jpg",
      img2: "https://www.ogerio.com/wp-content/uploads/2022/06/Wet-n-wild-impossible-primer-700x700.jpg",
      id: 4,
      title: "tools",
      newPrice: 642,
      oldPrice: 1000,
      rating: 4.5,
    },
    {
      img: "https://www.ogerio.com/wp-content/uploads/2024/01/New-year-offer-banners-2024-post.jpg",
      img2: "https://www.ogerio.com/wp-content/uploads/2022/06/Wet-n-wild-impossible-primer-700x700.jpg",
      id: 5,
      title: "tools",
      newPrice: 642,
      oldPrice: 1000,
      rating: 4.5,
    },
    {
      img: "https://www.ogerio.com/wp-content/uploads/2024/01/New-year-offer-banners-2024-post.jpg",
      img2: "https://www.ogerio.com/wp-content/uploads/2022/06/Wet-n-wild-impossible-primer-700x700.jpg",
      id: 6,
      title: "tools",
      newPrice: 642,
      oldPrice: 1000,
      rating: 4.5,
    },
    {
      img: "https://www.ogerio.com/wp-content/uploads/2024/01/New-year-offer-banners-2024-post.jpg",
      img2: "https://www.ogerio.com/wp-content/uploads/2022/06/Wet-n-wild-impossible-primer-700x700.jpg",
      id: 7,
      title: "tools",
      newPrice: 642,
      oldPrice: 1000,
      rating: 4.5,
    },
    {
      img: "https://www.ogerio.com/wp-content/uploads/2024/01/New-year-offer-banners-2024-post.jpg",
      img2: "https://www.ogerio.com/wp-content/uploads/2022/06/Wet-n-wild-impossible-primer-700x700.jpg",
      id: 8,
      title: "tools",
      newPrice: 642,
      oldPrice: 1000,
      rating: 4.5,
    },
  ];
  const reviews = { href: "#", average: 4, totalCount: 117 };

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  return (
    <div className="py-6 ">
      <h2 className=" font-bold tracking-wide text-2xl mt-2 mb-4 text-gray-600">
            ONLY FOR YOU
      </h2>
      <p className="w-full h-[2px]  bg-gray-400">
        <hr className="border-b-[1.5px]  border-orange-500 w-[170px]" />
      </p>

      <div className="grid grid-cols-4 gap-6 items-center mt-9">
        {data.map((item, index) => (
          <div key={index} className="col-span-1 shadow-lg rounded-lg">
            <div className="text-center">
              {/* img hover  */}
              <div
                className="p-3 relative overflow-hidden"
                onMouseEnter={() => handleMouseEnter(item.id)}
                onMouseLeave={handleMouseLeave}
              >
                <Link to={"/"}>
                  <div className="relative img-main w-full ">
                    <img
                      className=" rounded-lg  "
                      src={hoveredItemId === item.id ? item.img2 : item.img}
                      alt=""
                    />
                    <p className="bg-orange-500 w-16 font-semibold absolute top-2">
                      {" "}
                      -61%{" "}
                    </p>
                    <p className="bg-orange-500 w-16 font-semibold absolute top-10">
                      {" "}
                      HOT{" "}
                    </p>
                    <div className="absolute top-2 right-4 img-side bg-gray-300 shadow-2xl border p-2 text-3xl">
                      <IoIosGitCompare className="mb-4"/>
                      <CiSearch />
                      <MdFavoriteBorder className="mt-4"/>
                    </div>
                  </div>
                </Link>
              </div>
              <h2>{item.title}</h2>
              {/* <p>{item.rating}</p> */}
              {/* Reviews */}
              <div className="flex items-center justify-center mt-2">
                {[0, 1, 2, 3, 4].map((rating) => (
                  <CiStar
                    key={rating}
                    className={classNames(
                      reviews.average > rating
                        ? "text-gray-900"
                        : "text-gray-200",
                      "h-5 w-5 flex-shrink-0"
                    )}
                    aria-hidden="true"
                  />
                ))}
              </div>
              <p className="font-semibold mt-2">
                <span className="line-through text-gray-300 ps-2 pe-1">
                  {item.oldPrice} ৳
                </span>
                <span className="text-orange-700 ps-1 pe-2">
                  {item.newPrice} <span className="">৳</span>
                </span>
              </p>
              {/* item plus minus start */}
              <div className="flex items-center justify-center gap-x-2 pb-4 mt-2">
                <div className="flex">
                  <button
                    className="border px-1 py-1 rounded-s-md hover:text-red-600 hover:bg-gray-300 transition delay-100 text-lg font-extrabold"
                    onClick={() => handleDecrement(item.id)}
                  >
                    <CiCircleMinus />
                  </button>
                  <span className="border px-2 py-1">
                    {itemQuantities[item.id] || 1}
                  </span>

                  <button
                    className="border px-1 py-1 rounded-e-md hover:text-green-600 hover:bg-gray-300 transition delay-100 text-lg font-extrabold"
                    onClick={() => handleIncrement(item.id)}
                  >
                    <CiCirclePlus />
                  </button>
                </div>
                <button className="bg-orange-600 uppercase font-semibold text-xs text-white rounded-md py-2 px-2">
                  add to cart
                </button>
              </div>
              {/* item plus minus end */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OnlyForYou;
