import { Link } from "react-router-dom";

const HotDeals = () => {
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
    
  ];
  return (
    <div className="my-6">
      <h2>Deals You Can't Miss</h2>
      <div className="grid grid-cols-4 gap-6 items-center">
        {data.map((item, index) => (
          <Link to={"/"} key={index} className="col-span-1 ">
            <img className="rounded-lg" src={item.img} alt="" />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default HotDeals;
