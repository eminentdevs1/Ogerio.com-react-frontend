import { Link } from "react-router-dom";

const HotDeals = () => {
  const data = [
    {
      img: "https://www.ogerio.com/wp-content/uploads/2024/01/New-year-offer-banners-2024-post.jpg",
      id: 1,
      title: "free Delivery",
    },
    {
      img: "https://www.ogerio.com/wp-content/uploads/2024/01/New-year-offer-banners-2024-post.jpg",
      id: 2,
      title: "free Delivery",
    },
    {
      img: "https://www.ogerio.com/wp-content/uploads/2024/01/New-year-offer-banners-2024-post.jpg",
      id: 3,
      title: "free Delivery",
    },
    {
      img: "https://www.ogerio.com/wp-content/uploads/2024/01/New-year-offer-banners-2024-post.jpg",
      id: 4,
      title: "free Delivery",
    },
    
  ];
  return (
    <div className="py-6 ">
      <h2 className=" font-bold tracking-wide text-2xl mt-2 mb-4 text-gray-600 text-center">Deals You Can't Miss</h2>
      <p className="w-full h-[2px]  bg-gray-400">
      <hr className="border-b-[1.5px]  border-orange-500 w-[243px] mx-auto"/>
      </p>
      
      <div className="grid grid-cols-4 gap-6 items-center mt-9">
        {data.map((item, index) => (
          <Link to={"/"} key={index} className="col-span-1 overflow-hidden rounded-lg ">
            <div className="overflow-hidden rounded-lg">
            <img className="rounded-lg transition-transform hover:scale-110 overflow-hidden  duration-700" src={item.img} alt="" />
            </div>
            <p className="text-lg font-bold text-center uppercase mt-2"> {item.title}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default HotDeals;
