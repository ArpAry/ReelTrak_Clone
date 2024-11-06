import CountUp from "react-countup";

const Milestones = () => {
  return (
    <div className="mt-12 border-b-2 border-b-slate-500 pb-20 ">
      <h1 className="lg:text-left text-xl text-center lg:ml-16 text-[#0891b2]">
        Milestones
      </h1>

      <div className="lg:flex  justify-between px-16 ">
        <div className="lg:text-left text-center my-4 text-2xl font-extrabold">
          <h1>Discover the</h1>
          <h1>Industry's Finest Vendors</h1>
        </div>
        <div className=" text-center my-4 lg:text-left text-[#3f3f46] text-sm">
          <p>
            Lorem, ipsum dolor sit amet consectet uramet sit amet consectet
            urame sandjksn
          </p>
          <p>
            sit amet consectet urame cum dolorem. Lorem, ipsum dolor sit amet
            con{" "}
          </p>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row lg:justify-center mt-12 px-10 m-auto gap-10">
        <div>
          <img
            className=" m-auto mb-4  lg:mb-0 w-9/12 lg:w-[700px] border-5  bg-blue-500 rounded-3xl"
            src="https://media.licdn.com/dms/image/sync/v2/D5627AQFt_9rcU0DdiA/articleshare-shrink_800/articleshare-shrink_800/0/1716300155964?e=2147483647&v=beta&t=bgR3lyPQTFlXZQRLOYY3Jd_GdmXXowTDBLV0fZbPUsE"
            alt="image2"
          />
        </div>
        <div className="bg-[#020617] m-auto w-9/12 lg:w-1/4 text-center py-8 rounded-xl">
          <div className="border-b-2 border-b-slate-500 pb-4  mx-12">
            <CountUp
              className="text-[#facc15]"
              start={1}
              end={100}
              duration={2}
              enableScrollSpy
            />
            <span className="text-[#facc15]">+</span>

            <h1 className="text-[white] text-xl">Contact for Security</h1>
          </div>
          <div className="my-8 border-b-2 border-b-slate-500 pb-4  mx-12">
            <CountUp
              className="text-[#facc15]"
              start={1}
              end={1000}
              duration={2}
              enableScrollSpy
            />
            <span className="text-[#facc15]">+</span>

            <h1 className="text-[white] text-xl">Contact for Equipment</h1>
          </div>
          <div className="border-b-2 border-b-slate-500 pb-4  mx-12">
            <CountUp
              className="text-[#facc15]"
              start={1}
              end={110}
              duration={2}
              enableScrollSpy
            />
            <span className="text-[#facc15]">%</span>
            <h1 className="text-[white] text-xl">Contact for Security</h1>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Milestones;
