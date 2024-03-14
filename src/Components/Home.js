import { Box, Typography } from "@mui/material";
import React from "react";
import { useState, useEffect } from "react";
import cd1 from "../Assets/cd1.png";
import cd2 from "../Assets/cd2.png";
import cd3 from "../Assets/cd3.png";
import S1 from "../Assets/S1.jpg";
import p1 from "../Assets/p1.jpg";
import p2 from "../Assets/p2.jpg";
import CardSlider from "../Shared/CardSlider.js";
import Testimonials from "../Shared/Testimonials.js";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css";
import { EffectFade } from "swiper/modules";

import HeroSection from "./HeroSection.js";
import Content from "./Content";
import "../Styles/Home.css";
import SimpleCards from "../Shared/SimpleCards.js";
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
        "Discover our restoration services that bring new life to old structures We specialize in preserving the past while invorporating modern techniques for lasting results.",
    },
    {
      title: " Inspection & Testing",
      icon: <img src={cd3} alt="" className="rounded-xl w-32 h-32 ml-10" />,
      description:
        " Ensure the structural integrity of your building with our thorough inspection and testing services. Our experts provide detailed assessments to meet safety standards.",
    },
  ];
  const cardData1 = [
    {
      title: "BUILDING CONSTRUCTION",
      icon: <img src={S1} alt="" className=" w-96 h-48 " />,
      description:
        "Unleash the power of creativity and watch your projects come to life with precision and style,Discover our restoration services that bring new life to old structures. ",
    },
    {
      title: " PRE-CONSTRUCTION",
      icon: (
        <img
          src="https://preview.colorlib.com/theme/pivot/img/work_thumb_3.jpg.webp"
          alt=""
          className=" w-96 h-48"
        />
      ),
      description:
        "Unleash the power of creativity and watch your projects come to life with precision and style,Discover our restoration services that bring new life to old structures. ",
    },
    {
      title: "MAINTENANCE & REPAIR",
      icon: (
        <img
          src="https://preview.colorlib.com/theme/constructo/img/service/1.png.webp"
          alt=""
          className=" w-96 h-48"
        />
      ),
      description:
        "Discover our restoration services that bring new life to old structures, We specialize in preserving the past while invorporating modern techniques for lasting results.",
    },
    {
      title: "HOUSE RENOVATION",
      icon: (
        <img
          src="https://preview.colorlib.com/theme/pivot/img/work_thumb_1.jpg.webp"
          alt=""
          className=" w-96 h-48"
        />
      ),
      description:
        " Ensure the structural integrity of your building with our thorough inspection and testing services. Our experts provide detailed assessments to meet safety standards.",
    },
    {
      title: "GENERAL CONTRACTING",
      icon: (
        <img
          src="https://preview.colorlib.com/theme/pivot/img/work_thumb_2.jpg.webp"
          alt=""
          className=" w-96 h-48"
        />
      ),
      description:
        " Ensure the structural integrity of your building with our thorough inspection and testing services. Our experts provide detailed assessments to meet safety standards.",
    },
  ];
  const Testimonial = [
    {
      title: "Restoration",
      icon: <img src={p1} alt="" className="rounded-full w-20 h-20 ml-10" />,
      description:
        "Discover our restoration services that bring new life to old structures, We specialize in preserving the past while invorporating modern techniques for lasting results.",
    },
    {
      title: "Restoration",
      icon: <img src={p2} alt="" className="rounded-full w-20 h-20 ml-10" />,
      description:
        "Discover our restoration services that bring new life to old structures, We specialize in preserving the past while invorporating modern techniques for lasting results.",
    },
    {
      title: "Restoration",
      icon: <img src={p1} alt="" className="rounded-full w-20 h-20 ml-10" />,
      description:
        "Discover our restoration services that bring new life to old structures, We specialize in preserving the past while invorporating modern techniques for lasting results.",
    },
    {
      title: "Restoration",
      icon: <img src={p2} alt="" className="rounded-full w-20 h-20 ml-10" />,
      description:
        "Discover our restoration services that bring new life to old structures, We specialize in preserving the past while invorporating modern techniques for lasting results.",
    },
    {
      title: "Restoration",
      icon: <img src={p1} alt="" className="rounded-full w-20 h-20 ml-10" />,
      description:
        "Discover our restoration services that bring new life to old structures, We specialize in preserving the past while invorporating modern techniques for lasting results.",
    },
  ];
  return (
    <div style={{ backgroundColor: "white" }}>
      <HeroSection />
      <div className="flex content-center items-stretch justify-center flex-wrap space-x-6  ">
        {cardData.map((card, index) => (
          <SimpleCards key={index} {...card} />
        ))}
      </div>

      <Content />
      <hr className=" w-3/4 ml-44 items-center mb-20" />
      <h4 className="text-center text-4xl">Our Services</h4>
      {/* <div className="flex content-center items-center justify-center flex-wrap space-x-4 "> */}
      <CardSlider cardData={cardData1} />
      {/* </div> */}
      <hr className="mt-20 w-3/4 ml-44 items-center" />

      <Testimonials cardData={Testimonial} />
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
