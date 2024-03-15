import React from "react";
import img from "../Assets/footer_img.jpg";

const FooterBar = () => {
  return (
    <div className="relative mt-20 bg-slate-500">
      <img className="h-80 w-full object-cover" src="https://proest.com/wp-content/uploads/2021/11/construction-types-1024x493.jpg" alt="Footer Image" />
      <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center md:flex-row md:space-x-16 lg:space-x-32">
        <p className="text-black font-bold text-3xl md:text-4xl lg:text-6xl text-center md:text-left">
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
