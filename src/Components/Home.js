import { Box, Typography } from "@mui/material";
import React from "react";

import "../Styles/Home.css";
const Home = () => {
  return (
    <div style={{ backgroundColor: "white" }}>
      <Box className="hero_container">
        {/* <div className="hero_text_container"> */}
        <div className="hero_text_container absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
          <h5 className="text-4xl font-bold">
            Building Engineering Professionals
          </h5>
          <hr className="max-w-[900px] mt-4 border-white" />
          <p className="mt-4 text-2xl">
            New Construction | Restoration | Inspection | Testing
          </p>

          <button
            type="button"
            class="text-black color:'#fb923c' bg-orange-400	 font-bold	text-xl px-5 py-2.5 text-center me-2 mt-6 w-60 h-16  
      cursor-pointer hover:bg-orange-300	"
          >
            See What We Do
          </button>
        </div>
        {/* </div> */}
      </Box>
      <div className="mt-10 flex flex-col items-center">
        <h1 className="text-4xl font-bold text-black ">
          Specializing in Engineering Solutions
        </h1>
        <p className=" text-center w-1/2	 mt-6 font-medium text-gray-500">
          Transform your vision into reality by partnering with US. Whether you
          have to design functional spaces or conduct thorough building
          inspections, we exist to ensure your project gets nothing less than
          our reliable engineering services. Partner with us, and let's restore,
          build, and innovate together.
        </p>
      </div>

      <div className="mt-20 flex flex-col items-center">
        <h1 className="text-4xl font-bold text-yellow-600 ">Why Choose Us?</h1>
        <p className=" text-center w-1/3 mt-6 font-medium text-gray-500">
          With more than 20 years of extensive industry experience, we have
          worked and impressed various clients, especially multinational
          companies. Our unwavering dedication to excellence always inspires us
          to give our best on every project. From quick responses to remarkable
          executions, we go above and beyond to exceed client satisfaction.
        </p>

      </div>
      <div className=" flex justify-center items-center ">
      <button
            type="button"
            class="text-black color:'#fb923c' bg-orange-400 font-bold	text-xl px-5 py-2.5 text-center me-2 w-60 h-16  mt-20 mb-28
      cursor-pointer hover:bg-orange-300	"
          >
            Get To Know Us
          </button>
      </div>
     
      

    </div>
  );
};
export default Home;
