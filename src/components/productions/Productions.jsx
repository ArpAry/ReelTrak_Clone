import Carousel from "../../utils/carousels/Carousels";

const Productions = () => {
  return (
    <div className="border-b-2 border-b-slate-500">
      <h1 className="lg:text-left text-xl text-center lg:ml-16 text-[#0891b2]">
        Productions
      </h1>

      <div className="lg:flex  justify-between px-16 ">
        <div className="lg:text-left text-center my-4 text-2xl font-extrabold">
          <h1>We make your</h1>
          <h1>Business stand out </h1>
        </div>
        <div className=" text-center my-4 text-lg text-[#3f3f46] text-sm lg:w-1/2 lg:text-left">
          <p>
            Lorem, ipsum Lorem, ipsum dolor sit amet con dolor sit amet
            consectet uramet
          </p>
          <p>
            cum dolorem. Lorem, Lorem, ipsum dolor sit amet con Lorem, ipsum
            dolor sit amet conipsum dolor sit amet con{" "}
          </p>
        </div>
      </div>
      <div>
        <Carousel></Carousel>
      </div>
    </div>
  );
};

export default Productions;
