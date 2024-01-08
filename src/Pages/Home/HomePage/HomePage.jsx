import TopSlider from "../TopSlider/TopSlider";

const HomePage = () => {
  return (
    <div className="shadow-lg">
      {/* top section banner */}
      <section className="grid grid-cols-7 ">
        <div className="col-span-2">

        </div>
        <div className="col-span-5">
          <TopSlider />
        </div>
      </section>
    </div>
  );
};

export default HomePage;
