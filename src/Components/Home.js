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

import "swiper/css";
import { EffectFade } from "swiper/modules";

import HeroSection from "./HeroSection.js";
import Content from "./Content";
import "../Styles/Home.css";
import SimpleCards from "../Shared/SimpleCards.js";
import FooterBar from "./FooterBar.js";
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
  const cardData1 = [
    {
      title: "BUILDING CONSTRUCTION",
      icon: S1,
      description:
        "Unleash the power of creativity and watch your projects come to life with precision and style,Discover our restoration services that bring new life to old structures. ",
    },
    {
      title: " PRE-CONSTRUCTION",
      icon: S1,
      description:
        "Unleash the power of creativity and watch your projects come to life with precision and style,Discover our restoration services that bring new life to old structures. ",
    },
    {
      title: "MAINTENANCE & REPAIR",
      icon: "https://preview.colorlib.com/theme/constructo/img/service/1.png.webp",
      description:
        "Discover our restoration services that bring new life to old structures, We specialize in preserving the past while invorporating modern techniques for lasting results.",
    },
    {
      title: "HOUSE RENOVATION",
      icon: "https://preview.colorlib.com/theme/pivot/img/work_thumb_1.jpg.webp",
      description:
        " Ensure the structural integrity of your building with our thorough inspection and testing services. Our experts provide detailed assessments to meet safety standards.",
    },
    {
      title: "GENERAL CONTRACTING",
      icon: "https://preview.colorlib.com/theme/pivot/img/work_thumb_2.jpg.webp",
      description:
        " Ensure the structural integrity of your building with our thorough inspection and testing services. Our experts provide detailed assessments to meet safety standards.",
    },
  ];
  const Testimonial = [
    {
      title: "Restoration",
      icon: p1,
      description:
        "Discover our restoration services that bring new life to old structures, We specialize in preserving the past while invorporating modern techniques for lasting results.",
    },
    {
      title: "Restoration",
      icon:p2,
      description:
        "Discover our restoration services that bring new life to old structures, We specialize in preserving the past while invorporating modern techniques for lasting results.",
    },
    {
      title: "Restoration",
      icon: "https://preview.colorlib.com/theme/pivot/img/person_3.jpg.webp",
      description:
        "Discover our restoration services that bring new life to old structures, We specialize in preserving the past while invorporating modern techniques for lasting results.",
    },
    {
      title: "Restoration",
      icon:p2,
      description:
        "Discover our restoration services that bring new life to old structures, We specialize in preserving the past while invorporating modern techniques for lasting results.",
    },
    {
      title: "Restoration",
      icon: "https://preview.colorlib.com/theme/pivot/img/person_1.jpg.webp",
      description:
        "Discover our restoration services that bring new life to old structures, We specialize in preserving the past while invorporating modern techniques for lasting results.",
    },
  ];
  return (
    <div style={{ backgroundColor: "white" }}>
      <HeroSection />
      <div className="flex content-center justify-center flex-wrap items-stretch space-x-6 ">
        {cardData.map((card, index) => (
          <SimpleCards key={index} {...card} />
        ))}
      </div>

      <Content />
      <hr className=" w-3/4 ml-44 mb-20" />
      {/* <div className="flex content-center items-center justify-center flex-wrap space-x-4 "> */}
      <CardSlider cardData={cardData1} />
      {/* </div> */}
      <hr className=" w-3/4 ml-44 mb-20" />

      <Testimonials cardData={Testimonial} />
     
       <FooterBar/>
      

      
     
    </div>
  );
};
export default Home;
