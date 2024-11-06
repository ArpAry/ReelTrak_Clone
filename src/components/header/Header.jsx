const Header = () => {
  return (
    <div className="overflow-x-hidden">
      <div
        className="bg-cover bg-center h-screen"
        style={{
          backgroundImage:
            "url('https://t4.ftcdn.net/jpg/03/08/69/75/360_F_308697506_9dsBYHXm9FwuW0qcEqimAEXUvzTwfzwe.jpg')",
          height: "600px",
        }}
      >
        <div className=" absolute top-60 left-8  lg:w-1/3 md: w-1/2 ">
          <h1 className="text-white text-3xl font-bold">
            Technology for the entertainment industry
          </h1>
          <p className=" text-lg  text-[#d6d3d1] mt-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
            nesciunt sed recusandae dolorum tenetur ipsam totam fuga!
            Accusantium odio, ratione rerum
          </p>
        </div>
      </div>
    </div>
  );
};
export default Header;
