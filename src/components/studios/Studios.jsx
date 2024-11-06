import Marquee from "react-fast-marquee";

const Studios = () => {
  return (
    <div className="py-16 my-12 border-b-2 border-b-slate-500">
      <h1 className="text-xl text-center text-[#0891b2]">Studios</h1>
      <div className=" px-16 ">
        <div className=" text-center my-4 text-2xl font-extrabold">
          <h1>Studios that are associated with us </h1>
        </div>
        <div className="text-center my-4  text-[#3f3f46] text-sm">
          <p>
            Lorem, ipsum dolor sit amet consectet uramet Lorem, ipsum dolor sit
            amet consectet uramet dolor{" "}
          </p>
          <p>
            cum dolorem. Lorem, ipsum dolor sit amet con Lorem, ipsum dolor sit
            amet consectet uramet{" "}
          </p>
        </div>
      </div>
      <div className="mx-4 lg:mx-12 mt-12">
        <Marquee gradient={true} pauseOnHover={true}>
          <img
            className=" h-[60px] mx-4"
            src="https://cdn.prod.website-files.com/63a0538938e93f296a0bfaa4/63a053c07670a15ad7511f5f_638a74dbbfbd826622febb84_Marvel_Studios_2016_logo-bw.svg"
            alt="image1"
          />
          <img
            className="h-[60px] mx-4"
            src="https://cdn.prod.website-files.com/63a0538938e93f296a0bfaa4/63a053c0d532a8f13b27c233_638a78ce6a8a2728b3824e09_FocusFeatures-Logo88pxH.svg"
            alt="image2"
          />
          <img
            className=" h-[60px] mx-4"
            src="https://cdn.prod.website-files.com/63a0538938e93f296a0bfaa4/63a053c07670a150d6511f5c_63894cd30e53ef9aaee404ec_Hulu_Logo.svg"
            alt="image3"
          />
          <img
            className="h-[60px] mx-4"
            src="https://cdn.prod.website-files.com/63a0538938e93f296a0bfaa4/63a053c084d8d475c9a300b5_638a78db5b1f462e5eee1635_Showtime-Logo88pxH.svg"
            alt="image4"
          />

          <img
            className="h-[60px] mx-4"
            src="https://cdn.prod.website-files.com/63a0538938e93f296a0bfaa4/63a053c0b78efe61a8a04cdd_638aa07a0787c790eec6a028_Sony-Logo88pxH-sm.svg"
            alt="image6"
          />
          <img
            className="h-[60px] mx-4"
            src="https://cdn.prod.website-files.com/63a0538938e93f296a0bfaa4/63a053c0bbab0a358673a889_638a793244a03fbf6d8de93b_Netflix-Logo88pxH.svg"
            alt="image7"
          />
          <img
            className=" h-[60px] mx-4"
            src="https://cdn.prod.website-files.com/63a0538938e93f296a0bfaa4/63a053c0d1f9580dba52b825_638a798f0787c7447ac3b183_NBC-Logo88pxH.svg"
            alt="image8"
          />
          <img
            className=" h-[60px] mx-4"
            src="https://cdn.prod.website-files.com/63a0538938e93f296a0bfaa4/63a053c13c2d58f4c998f33f_638a7a0ec429347d0371378d_Universal-Logo88pxH.svg"
            alt="image9"
          />
          <img
            className="h-[60px] mx-4"
            src="https://cdn.prod.website-files.com/63a0538938e93f296a0bfaa4/63a053c08d2793797ee4df2c_638a797d85632536dad5e179_Paramount-Logo88pxH.svg"
            alt="image10"
          />
          <img
            className=" h-[60px] mx-4"
            src="https://cdn.prod.website-files.com/63a0538938e93f296a0bfaa4/63a053c0d1f958bbaf52b822_638a7a17b9a23c49fdb176a3_HBO-Logo88pxH.svg"
            alt="image11"
          />
        </Marquee>
      </div>
    </div>
  );
};
export default Studios;
