import { IoIosArrowRoundForward } from "react-icons/io";
const Aboutus = () => {
  return (
    <div className=" flex flex-col lg:flex-row pb-28 my-16 border-b-2 border-b-slate-500  ">
      <div className="lg:w-1/2 sm:w-full">
        <div className=" flex  justify-center">
          <img
            className="h-60 rounded-md border-2 border-black"
            src="https://cdn.pixabay.com/photo/2019/05/19/10/41/cinema-4213755_640.jpg"
            alt="image1"
          />
          <img
            className="h-60 ml-8 mt-8 rounded-md border-2 border-black"
            src="https://cdn.pixabay.com/photo/2016/01/13/22/54/man-1139066_640.jpg"
            alt="image2"
          />
        </div>
        <div className="flex  justify-center">
          <img
            className="h-60 rounded-md border-2 border-black"
            src="https://cdn.pixabay.com/photo/2015/02/12/11/54/popcorn-633627_640.png"
            alt="image3"
          />
          <img
            className="h-60 mt-8 ml-8  rounded-md border-2 border-black"
            src="https://cdn.pixabay.com/photo/2017/02/02/18/14/lace-2033434_640.png"
            alt="image4"
          />
        </div>
      </div>
      <div className=" flex flex-col content-center justify-center lg:w-1/2 w-full ">
        <div className=" text-center lg:text-left text-xl text-[blue] mt-12 mb-4  ">
          About us
        </div>
        <h1 className="text-center lg:text-left lg:w-2/4 font-extrabold mb-4">
          ReelTrak: Who We Are
        </h1>
        <h1 className="text-center lg:text-left lg:w-2/4 font-extrabold mb-4">
          and What We Do
        </h1>
        <p className="text-center lg:text-left text-sm lg:w-3/4 text-[grey]">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem quo
          sit dolores voluptatibus, omnis necessitatibus voluptatem inventore
          eius pariatur veniam? Excepturi sapiente minus tempora totam
          distinctio aspernatur aliquid, cumque laboriosam, maxime ullam eos
          consequuntur veritatis perferendis iure, nemo quae.tempora totam
          distinctio aspernatur aliquid, cumque laboriosam, maxime ullam eos
          consequuntur veritatis perferendis iure, nemo quae.
        </p>
        <button className="  flex lg:mx-0 m-auto justify-center items-center mt-4 bg-blue-500 text-xl p-[4px] rounded-sm text-[white] w-1/4">
          Read More
          <IoIosArrowRoundForward className="h-8"></IoIosArrowRoundForward>
        </button>
      </div>
    </div>
  );
};
export default Aboutus;
