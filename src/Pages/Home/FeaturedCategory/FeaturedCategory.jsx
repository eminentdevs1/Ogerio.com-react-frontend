import { Link } from "react-router-dom";

const FeaturedCategory = () => {
    const data = [
        {
          img: "https://www.ogerio.com/wp-content/uploads/2024/01/New-year-offer-banners-2024-post.jpg",
          id: 1,
          title: "tools",
        },
        {
          img: "https://www.ogerio.com/wp-content/uploads/2024/01/New-year-offer-banners-2024-post.jpg",
          id: 2,
          title: "LifeStyle",
        },
        {
          img: "https://www.ogerio.com/wp-content/uploads/2024/01/New-year-offer-banners-2024-post.jpg",
          id: 3,
          title: "skin care",
        },
        {
          img: "https://www.ogerio.com/wp-content/uploads/2024/01/New-year-offer-banners-2024-post.jpg",
          id: 4,
          title: "here care",
        },
        {
          img: "https://www.ogerio.com/wp-content/uploads/2024/01/New-year-offer-banners-2024-post.jpg",
          id: 5,
          title: "makeup",
        },
        {
          img: "https://www.ogerio.com/wp-content/uploads/2024/01/New-year-offer-banners-2024-post.jpg",
          id: 6,
            title: "lip makeup",
        },
        {
          img: "https://www.ogerio.com/wp-content/uploads/2024/01/New-year-offer-banners-2024-post.jpg",
          id: 7,
          title: "bath & body",
        },
        {
          img: "https://www.ogerio.com/wp-content/uploads/2024/01/New-year-offer-banners-2024-post.jpg",
          id: 8,
            title: "eye makeup",
        },
        
      ];
  return (
    <div className="py-6 ">
      <h2 className=" font-bold tracking-wide text-2xl mt-2 mb-4 text-gray-600">Featured Category</h2>
      <p className="w-full h-[2px]  bg-gray-400">
      <hr className="border-b-[1px]  border-orange-500 w-[220px] "/>
      </p>
      
      <div className="grid grid-cols-4 gap-6 items-center mt-9">
        {data.map((item, index) => (
          <Link to={"/"} key={index} className="col-span-1 rounded-lg overflow-hidden">
            <div className="overflow-hidden rounded-lg">
            <img className="rounded-lg transition-transform hover:scale-110 overflow-hidden  duration-700" src={item.img} alt="" />
           
            </div>
            <p className="tracking-wide font-semibold text-center mt-1 uppercase">{item.title}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default FeaturedCategory;
