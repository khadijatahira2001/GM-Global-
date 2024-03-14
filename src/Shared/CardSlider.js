import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css";
import { EffectFade } from "swiper/modules";

const CardSlider = ({ cardData }) => {
  return (
    <div className="flex">
      <Swiper
        slidesPerView={3}
        spaceBetween={10}
        navigation
        modules={[Navigation]}
        className="flex items-stretch"
      >
        {cardData.map((card) => (
          <SwiperSlide>
            <div className="  card w-96 lg:w-96 bg-base-100 mt-20 min-h-96 ml-14 shadow-xl rounded-xl text-center  bg-white hover:bg-gray-100 cursor-pointer">
              <figure className=" pt-10 mb-6  text-center">{card.icon}</figure>
              <div className="card-body items-center ">
                <h2 className="card-title text-lg md:text-xl lg:text-2xl hover:text-primary">
                  {card.title}
                </h2>
                <p className="text-content_color text-sm md:text-base lg:text-lg p-10">
                  {card.description}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CardSlider;
