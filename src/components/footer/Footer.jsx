import { FaInstagram } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { FaXTwitter } from "react-icons/fa6";
import { LiaTwitterSquare } from "react-icons/lia";
const Footer = () => {
  return (
    <div className=" ">
      <div className="flex flex-col bg-black md:flex-row justify-around  text-[white] pt-12 border-b-2 border-b-4">
        {/* left-half */}
        <div className="md:w-1/2 px-4">
          <h1>Lets start a </h1>
          <h1>Work together</h1>
          <p className="my-4 text-lg text-[white] text-sm  md:w-1/2 md:text-left">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod,
            quibusdam tempora in doloribus eius beatae accusamus ad blanditiis
            qui est.
          </p>
          <div className="my-4 text-lg text-[white] text-sm md:w-1/2 md:text-left">
            <p>Address</p>
            <p>132 my Street Kington New York 12401</p>
          </div>
          <div className="my-4 text-lg text-[white] text-sm md:w-1/2 md:text-left">
            <p>Give us a call</p>
            <p>(123) 456-7890</p>
          </div>
          <div className="my-4 text-lg text-[white] text-sm md:w-1/2 md:text-left">
            <p>Send us an email </p>
            <p>instareeltrak.com</p>
          </div>
        </div>
        {/* right-half */}
        <div className="flex flex-col md:flex-row list-none justify-around md:w-3/12">
          <div className="text-lg text-[white] text-sm  lg:text-left px-4">
            <h1 className="mb-4 text-xl">Company</h1>
            <div>
              <li className="mb-4">Contact Us</li>
              <li className="mb-4">Privacy Policy</li>
              <li className="mb-4">Terms & Condition</li>
            </div>
          </div>
          <div className="text-lg text-[white] text-sm lg:text-left px-4">
            <h3 className="mb-4 text-xl">Legal</h3>
            <div>
              <li className="mb-4">Privacy Policy</li>

              <li className="mb-4">Terms & Condition</li>
              <li className="mb-4">Return Policy</li>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
