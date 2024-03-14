import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import "swiper/css/navigation";
import "../Styles/Swiper.css";
import cd1 from "../Assets/cd1.png";

// import required modules
import {
  Autoplay,
  FreeMode,
  Pagination,
  Mousewheel,
  Navigation,
} from "swiper/modules";

const Testimonials = ({ cardData }) => {
  return (
    // <div className="mt-10 p-10 mb-10">
    
    <>
     <h4 className="text-center text-4xl">Testimonials</h4>
    
    <Swiper
      slidesPerView={3}
      spaceBetween={30}
      freeMode={true}
      mousewheel={true}
      loop={true}
      navigation={true}
      autoplay={{
        delay: 1500,
        pauseOnMouseEnter: true,
      }}
      pagination={{
        clickable: true,
      }}
      modules={[Autoplay, FreeMode, Mousewheel, Navigation, Pagination]}
      className="mySwiper"
    >
      <SwiperSlide className="swiper-slide-custom ">
          
          <img src={cd1} alt="" className="hadow-xl w-auto h-14" />
          <div className="mt-1 p-4 auto ">
            <h2 className="text-lg md:text-xl lg:text-2xl font-bold">
              Adil Mustafa
            </h2>
            <p className="text-sm md:text-base lg:text-lg">
              Working with [Construction Consultant Company] was an absolute
              game-changer for our project. Their expert guidance and insightful
              strategies t
            </p>
          </div>
      </SwiperSlide>
      <SwiperSlide className="swiper-slide-custom">Slide 2</SwiperSlide>
      <SwiperSlide className="swiper-slide-custom">Slide 3</SwiperSlide>
      <SwiperSlide className="swiper-slide-custom">Slide 4</SwiperSlide>
      <SwiperSlide className="swiper-slide-custom">Slide 5</SwiperSlide>
      <SwiperSlide className="swiper-slide-custom">Slide 6</SwiperSlide>
      <SwiperSlide className="swiper-slide-custom">Slide 7</SwiperSlide>
      <SwiperSlide className="swiper-slide-custom">Slide 8</SwiperSlide>
      <SwiperSlide className="swiper-slide-custom">Slide 9</SwiperSlide>
    </Swiper>
    </>

    // </div>
  );
};

export default Testimonials;
