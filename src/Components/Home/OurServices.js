import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import "swiper/css/free-mode";
import "swiper/css";
import "../../Styles/CardStyle.css";

import "swiper/css/navigation";

import {
  FreeMode,
  Mousewheel,
  Navigation,
} from "swiper/modules";
import "../../Styles/Swiper.css";
const OurServices = ({ cardData }) => {
  return (
    <div>
      <h4 className="text-center text-4xl">Our Services</h4>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        freeMode={true}
        mousewheel={true}
        loop={true}
        navigation
      
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

        modules={[FreeMode, Mousewheel, Navigation]}
        className=""
      >
        {cardData.map((card) => (
          <SwiperSlide className="swiper-slide-custom" style={{ minHeight: 400  }}>
            <img className="w-full object-cover h-48" src={card.icon} />
            <div className="p-8">
              <h2 className="font-bold hover:text-primary">{card.title}</h2>
              <p className="mt-4">{card.description}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default OurServices;
