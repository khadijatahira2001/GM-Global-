import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/free-mode";
import "swiper/css";
import { EffectFade } from "swiper/modules";
import "../Styles/CardStyle.css";
import { serviceCards } from '../Constants';
import { Navigation, Pagination,Autoplay, FreeMode,Mousewheel, Scrollbar, A11y } from "swiper/modules";

const CardSlider = () => {
  return (
    <div>
      <h4 className="text-center text-4xl">Our Services</h4>
      <Swiper 
             slidesPerView={3}
             centeredSlides
             spaceBetween={30}
             freeMode={true}
             mousewheel={true}
             loop={true}
            
             navigation
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
             modules={[FreeMode,Mousewheel,Navigation,Pagination]}
             className=""
             
      >
        {serviceCards.map((card) => (
          <SwiperSlide className="swiper-slide-custom ">
            {/* <figure className="w-full"> */}
              <img className="w-full object-cover h-80 img" src={card.icon}/>
              {/* </figure> */}
              <div className="p-8">
                <h2 className="font-bold hover:text-primary">
                  {card.title}
                </h2>
                <p className="mt-4">
                  {card.description}
                </p>
              </div>
              
            
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CardSlider;
