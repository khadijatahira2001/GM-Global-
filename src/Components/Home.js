import { Box, Typography } from "@mui/material";
import React from "react";
import { useState, useEffect } from "react";
import cd1 from "../Assets/cd1.png";
import cd2 from "../Assets/cd2.png";
import cd3 from "../Assets/cd3.png";

import Slider from "./Slider";
import Content from "./Content";
import "../Styles/Home.css";
import SimpleCards from "../Shared/SimpleCards";
const Home = () => {
  const cardData = [
    {
      title: "Creative Plan & Design",
      icon: <img src={cd1} alt="" className="rounded-xl w-32 h-32 ml-10" />,
      description:
        "Unleash the power of creativity and watch your projects come to life with precision and style. ",
    },
    {
      title: "Restoration",
      icon: <img src={cd2} alt="" className="rounded-xl w-32 h-32 ml-10" />,
      description:
        "Discover our restoration services that bring new life to old structures, We specialize in preserving the past while invorporating modern techniques for lasting results.",
    },
    {
      title: " Inspection & Testing",
      icon: <img src={cd3} alt="" className="rounded-xl w-32 h-32 ml-10" />,
      description:
        " Ensure the structural integrity of your building with our thorough inspection and testing services. Our experts provide detailed assessments to meet safety standards.",
    },
  ];
  return (
    <div style={{ backgroundColor: "white" }}>
      <Slider />
      <div className="flex content-center items-center justify-center flex-wrap space-x-4 ">
        {cardData.map((card, index) => (
          <SimpleCards key={index} {...card} />
        ))}
      </div>

      <Content />
      <hr className=" w-3/4 ml-44 items-center" />

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
