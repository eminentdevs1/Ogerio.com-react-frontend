import { useEffect, useState } from "react";
import { GoDot, GoDotFill } from "react-icons/go";
const TopSlider = () => {
  const slides = [
    {
      url: "https://www.ogerio.com/wp-content/uploads/2024/01/square-2.jpg.webp",
    },
    {
      url: "https://www.ogerio.com/wp-content/uploads/2024/01/square-7.jpg.webp",
    },
    {
      url: "https://www.ogerio.com/wp-content/uploads/2024/01/New-year-offer-banners-2024-post.jpg.webp",
    },

    {
      url: "https://www.ogerio.com/wp-content/uploads/2024/01/square-6.jpg.webp",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

//   const prevSlide = () => {
//     const isFirstSlide = currentIndex === 0;
//     const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
//     setCurrentIndex(newIndex);
//   };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  const autoPlayInterval = 5000; // 5 seconds

  useEffect(() => {
    const autoPlayTimer = setInterval(() => {
      nextSlide();
    }, autoPlayInterval);

    return () => {
      clearInterval(autoPlayTimer);
    };
  }, [currentIndex]);

  return (
    <div className="h-[580px] w-full m-auto py-10 ">
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        className="w-full h-full rounded-2xl bg-center bg-cover duration-500 relative"
      >
        <div className="flex justify-center py-2 absolute bottom-2 right-[25%] left-[25%]">
        {slides.map((slide, slideIndex) => (
          <div
          key={slideIndex}
          onClick={() => goToSlide(slideIndex)}
          className={`text-2xl cursor-pointer text-gray-400 hover:text-blue-600`}
          >
            {
                slideIndex === currentIndex ? <GoDotFill className="text-gray-800"/> :   <GoDot />
            }
          
          </div>
        ))}
      </div>
      </div>

      
    </div>
  );
};

export default TopSlider;
