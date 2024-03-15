import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "../Styles/TestimonialStyle.css";
import { EffectFade } from "swiper/modules";
import {
  Navigation,
  Pagination,
  Autoplay,
  FreeMode,
  Mousewheel,
  Scrollbar,
  A11y,
} from "swiper/modules";

const Testimonial = ({ cardData }) => {
  return (
    <div>
      <h4 className="text-center font-bold text-4xl">Testimonials</h4>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        mousewheel={true}
        loop={true}
        autoplay={{
          delay: 1500,
          pauseOnMouseEnter: true,
        }}
        navigation
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          '@0.00': {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          '@0.75': {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          '@1.00': {
            slidesPerView: 3,
            spaceBetween: 40,
          },
        
        }}
        modules={[Autoplay, FreeMode, Mousewheel, Navigation, Pagination]}
        className=""
      >
        {cardData.map((card) => (
          <SwiperSlide className="swiper-slide-custom ">
              {/* <figure className=" pt-10 mb-6  mr-20"> */}
             <img className="rounded-full w-20 h-20 ml-10 mr-16 mt-10" src={card.icon}/>   
              {/* </figure> */}
              <div className="card-body items-center ">
                <h2 className="p-4 font-bold hover:text-primary">
                  {card.title}
                </h2>
                <p className="p-6 "><q>
                  {card.description}</q>
                </p>
              </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimonial;
