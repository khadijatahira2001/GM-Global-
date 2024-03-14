import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/free-mode";

import { EffectFade } from "swiper/modules";
import { Navigation, Pagination,Autoplay, FreeMode,Mousewheel, Scrollbar, A11y } from "swiper/modules";

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
            delay:1500,
            pauseOnMouseEnter:true,
        }}
        navigation
        pagination={{
            clickable: true,
        }}
        modules={[Autoplay,FreeMode,Mousewheel,Navigation,Pagination]}
        className=""
      >
        {cardData.map((card) => (
             
          <SwiperSlide className="">
            <div className="  card w-96 lg:w-96 bg-base-100 mt-20 min-h-96 ml-14 shadow-xl rounded-xl text-center  bg-white hover:bg-gray-100 cursor-pointer">
              <figure className=" pt-10 mb-6  text-center flex ml-24">{card.icon}</figure>
              <div className="card-body items-center ">
                <h2 className="card-title text-lg md:text-xl lg:text-2xl font-bold hover:text-primary">
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

export default Testimonial;
