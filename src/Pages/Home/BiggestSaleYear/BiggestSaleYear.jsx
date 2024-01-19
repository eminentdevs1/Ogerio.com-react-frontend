import { Link } from "react-router-dom";

const BiggestSaleYear = () => {
  const data = [
    {
      img: "https://www.ogerio.com/wp-content/uploads/2024/01/New-year-offer-banners-2024-post.jpg",
      id: 1,
    },
    {
      img: "https://www.ogerio.com/wp-content/uploads/2024/01/New-year-offer-banners-2024-post.jpg",
      id: 2,
    },
    {
      img: "https://www.ogerio.com/wp-content/uploads/2024/01/New-year-offer-banners-2024-post.jpg",
      id: 3,
    },
    {
      img: "https://www.ogerio.com/wp-content/uploads/2024/01/New-year-offer-banners-2024-post.jpg",
      id: 4,
    },
    {
      img: "https://www.ogerio.com/wp-content/uploads/2024/01/New-year-offer-banners-2024-post.jpg",
      id: 5,
    },
    {
      img: "https://www.ogerio.com/wp-content/uploads/2024/01/New-year-offer-banners-2024-post.jpg",
      id: 6,
    },
    {
      img: "https://www.ogerio.com/wp-content/uploads/2024/01/New-year-offer-banners-2024-post.jpg",
      id: 7,
    },
    {
      img: "https://www.ogerio.com/wp-content/uploads/2024/01/New-year-offer-banners-2024-post.jpg",
      id: 8,
    },
    
  ];
  return (
    <div className="py-6 ">
      <h2 className=" font-bold tracking-wide text-2xl mt-2 mb-4 text-gray-600 text-center">BIGGEST SALE OF THE YEAR</h2>
      <p className="w-full h-[2px]  bg-gray-400">
      <hr className="border-b-[1.5px]  border-orange-500 w-[328px] mx-auto"/>
      </p>
      
      <div className="grid grid-cols-4 gap-6 items-center mt-9">
        {data.map((item, index) => (
          <Link to={"/"} key={index} className="col-span-1 ">
            <img className="rounded-lg" src={item.img} alt="" />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BiggestSaleYear;
