import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css";
import { EffectFade } from "swiper/modules";

const Testimonials = ({ cardData }) => {
  return (
    <div className="mt-10 p-10 mb-10">
      <h4 className="text-center text-4xl">Testimonials</h4>
      <Swiper slidesPerView={2} navigation modules={[Navigation]}>
        {cardData.map((card) => (
          <SwiperSlide>
            <div className="card w-96 lg:w-96 bg-base-100 mt-20 min-h-96 mx-2 ml-40 shadow-xl rounded-xl text-center  bg-white">
              <figure className="px-20 pt-10 mb-6 text-center">
                {card.icon}
              </figure>
              <div className="card-body items-center ">
                <h2 className="card-title text-lg md:text-xl lg:text-2xl mb-2">
                  {card.title}
                </h2>
                <p className="text-content_color text-sm md:text-base lg:text-lg ">
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

export default Testimonials;
