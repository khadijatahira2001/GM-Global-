import React from "react";
// import img from "../Assets/footer_img.jpg";

const FooterBar = () => {
  return (
    <div className="relative mt-20 bg-red-500">
      <img className="h-52 w-full object-cover" src="https://proest.com/wp-content/uploads/2021/11/construction-types-1024x493.jpg" alt="Footer Image" />
      <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-around px-10 items-center md:flex-row md:space-x-16 lg:space-x-32">
        <p className="text-orange-400 font-bold text-lg md:text-2xl lg:text-2xl text-center md:text-left">
          Are you looking for Construction <br />
          and Industrial Experts?
        </p>
        <button
          type="button"
          className="text-black bg-primary font-bold text-xl px-8 py-3.5 cursor-pointer hover:bg-orange-300 w-52 mt-4 md:mt-0"
        >
          Contact Us
        </button>
      </div>
    </div>
  );
};

export default FooterBar;
