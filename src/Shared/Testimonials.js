import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";

import "../Styles/TestimonialStyle.css";
import {
  Navigation,
  Pagination,
  Autoplay,
  FreeMode,
  Mousewheel,
} from "swiper/modules";

const Testimonial = () => {
  return (
    <div>
      <h4 className="text-center font-bold text-4xl">Testimonials</h4>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        freeMode={true}
        mousewheel={true}
        loop={true}
        breakpoints={{
          900: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          1380: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
        autoplay={{
          delay: 1500,
          pauseOnMouseEnter: true,
        }}
        navigation
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, FreeMode, Mousewheel, Navigation, Pagination]}
        className=""
      >
        {/* {testiMonial.map((card) => (
          <SwiperSlide className="swiper-slide-custom ">
            <img
              className="rounded-full w-20 h-20 ml-10 mr-16 mt-10"
              src={card.icon}
            />
            <div className="card-body items-center ">
              <h2 className="p-4 font-bold hover:text-primary">{card.title}</h2>
              <p className="p-6 ">
                <q>{card.description}</q>
              </p>
            </div>
          </SwiperSlide>
        ))} */}
      </Swiper>
    </div>
  );
};

export default Testimonial;
