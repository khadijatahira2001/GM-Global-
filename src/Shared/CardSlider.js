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
import "../Styles/Swiper.css"
const CardSlider = ({ cardData }) => {
  return (
    <div >
      <h4 className="text-center text-4xl">Our Services</h4>
    
      <Swiper
      slidesPerView={3}
      spaceBetween={30}
      // freeMode={true}
      // mousewheel={true}
      // loop={true}
      // navigation={true}
      // autoplay={{
      //   delay: 1500,
      //   pauseOnMouseEnter: true,
      // }}
      // pagination={{
      //   clickable: true,
      // }}
      modules={[Autoplay, FreeMode, Mousewheel, Navigation, Pagination]}
      className="mySwiper"
    >

        {cardData.map((card) => (
          <SwiperSlide className="swiper-slide-custom ">
            {card.title}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CardSlider;
