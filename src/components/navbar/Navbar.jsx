import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className=" overflow-x-hidden flex justify-between items-center my-[10px] px-[30px]">
      <div>
        <img
          className="h-4 w-40 my-[10px]"
          src="https://cdn.prod.website-files.com/639c4f6c935459cee66e821d/639c5df7c9a6a24b0d1f067f_ReelTrak-Logo-Horizontal-NoPadding.svg"
          alt="Logo"
        />
      </div>

      <div className="hidden md:flex gap-8 text-lg list-none px-4">
        <li>Production</li>
        <li>Store</li>
        <li>About us</li>
        <li>Sign Up</li>
        <li>
          <button className="rounded-md px-5 bg-sky-400">Login</button>
        </li>
      </div>

      {/* Hamburger icon for mobile */}
      <div className="md:hidden">
        <button onClick={toggleMenu} className="focus:outline-none">
          {isMenuOpen ? (
            <span className="text-xl">✖</span> // Close icon
          ) : (
            <span className="text-xl">☰</span> // Hamburger icon
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-12 left-0 right-0 bg-white shadow-md z-10">
          <ul className="flex flex-col items-center py-4">
            <li className="text-xl py-2">Production</li>
            <li className="text-xl py-2">Store</li>
            <li className="text-xl py-2">About us</li>
            <li className="text-xl py-2">Sign Up</li>
            <li>
              <button className="text-xl rounded-md px-5 bg-sky-400">
                Login
              </button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
