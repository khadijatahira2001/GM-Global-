import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import 'swiper/css/navigation';
import '../Styles/Swiper.css';

// import required modules
import {Autoplay, FreeMode, Pagination , Mousewheel,Navigation } from 'swiper/modules';


const Testimonials = ({ cardData }) => {
  return (
    // <div className="mt-10 p-10 mb-10">
    //   <h4 className="text-center text-4xl">Testimonials</h4>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        mousewheel={true}
        // centeredSlides={true}
        loop={true}
        navigation={true}
        autoplay={{
          delay: 1500,
          disableOnInteraction: true,
        }}
                pagination={{
          clickable: true,
        }}
        modules={[Autoplay,FreeMode, Mousewheel,Navigation, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide className='swiper-slide-custom' >Slide 1</SwiperSlide>
        <SwiperSlide className='swiper-slide-custom' >Slide 2</SwiperSlide>
        <SwiperSlide className='swiper-slide-custom' >Slide 3</SwiperSlide>
        <SwiperSlide className='swiper-slide-custom' >Slide 4</SwiperSlide>
        <SwiperSlide className='swiper-slide-custom' >Slide 5</SwiperSlide>
        <SwiperSlide className='swiper-slide-custom' >Slide 6</SwiperSlide>
        <SwiperSlide className='swiper-slide-custom' >Slide 7</SwiperSlide>
        <SwiperSlide className='swiper-slide-custom' >Slide 8</SwiperSlide>
        <SwiperSlide className='swiper-slide-custom' >Slide 9</SwiperSlide>
      </Swiper>
    // </div>
  );
};

export default Testimonials;
