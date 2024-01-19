import BiggestSaleYear from "../BiggestSaleYear/BiggestSaleYear";
import FeaturedCategory from "../FeaturedCategory/FeaturedCategory";
import HotDeals from "../HotDeals/HotDeals";
import MostPopularMakeup from "../MostPopularMakeup/MostPopularMakeup";
import TopSlider from "../TopSlider/TopSlider";

const HomePage = () => {
  return (
    <div className="shadow-lg px-6">
      {/* top section banner */}
      <section className="grid grid-cols-7 ">
        <div className="col-span-2"></div>
        <div className="col-span-5">
          <TopSlider />
        </div>
      </section>
      <section>
        <HotDeals />
        <BiggestSaleYear />
        <FeaturedCategory />
      </section>
      <section>
        <MostPopularMakeup/>
      </section>
    </div>
  );
};

export default HomePage;
