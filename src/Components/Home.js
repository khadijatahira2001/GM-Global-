import { Box, Typography } from "@mui/material";
import React from "react";
import { useState, useEffect } from "react";


import CardSlider from "../Shared/CardSlider.js";
import Testimonials from "../Shared/Testimonials.js";

import "swiper/css";
import { EffectFade } from "swiper/modules";

import HeroSection from "./HeroSection.js";
import Content from "./Content";
import "../Styles/Home.css";
import SimpleCards from "../Shared/SimpleCards.js";
import FooterBar from "./FooterBar.js";
import { serviceCards } from "../Constants/index.js";
import { testiMonial } from "../Constants/index.js";
import { simplecard } from "../Constants/index.js";

const Home = () => {
 
  
  return (
    <div style={{ backgroundColor: "white" }}>
      <HeroSection />
      <div className="flex content-center justify-center flex-wrap items-stretch space-x-6 ">
        {simplecard.map((card, index) => (
          <SimpleCards key={index} {...card} />
        ))}
      </div>

      <Content />
      <hr className=" w-3/4 ml-44 mb-20" />
      {/* <div className="flex content-center items-center justify-center flex-wrap space-x-4 "> */}
      <CardSlider cardData={serviceCards} />
      {/* </div> */}
      <hr className=" w-3/4 ml-44 mb-20" />

      <Testimonials cardData={testiMonial} />
     
       <FooterBar/>
      

      
     
    </div>
  );
};
export default Home;
