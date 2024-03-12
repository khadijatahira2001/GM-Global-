import React from "react";
import { Box } from "@mui/material";
import { useState, useEffect } from "react";

import "../Styles/Home.css";

const Slider = () => {
  const imagePaths = [
    "https://img.freepik.com/free-photo/beautiful-view-construction-site-city-during-sunset_181624-9347.jpg?w=996&t=st=1710190860~exp=1710191460~hmac=567b5cce350c3cc23faa65605c8a0e2c1afb4e01db6acae961492c049cb34b75",
    "https://img.freepik.com/free-photo/construction-works-frankfurt-downtown-germany_1268-20907.jpg?w=1060&t=st=1710190953~exp=1710191553~hmac=a741c5fdbc9fe3cb95347ce9155e8b98944997cdb270aa2dfc9eabd8a45ce5b9",
    "https://img.freepik.com/free-photo/thinking-sketch_1098-14336.jpg?w=996&t=st=1710190964~exp=1710191564~hmac=6052270b07517866434e11c07e1784e0def1df7dddd2abcdaa3409a0e7fbb040",
    "https://img.freepik.com/free-photo/construction-work-site_1398-3934.jpg?w=826&t=st=1710191076~exp=1710191676~hmac=e4b9403fd80348901ff4b230c80481ae82aeb1abb69e3df857884b1c0e152a2b",
    "https://img.freepik.com/free-photo/medium-shot-low-angle-view-engineer-architect-looking-plans_23-2148233796.jpg?w=996&t=st=1710191081~exp=1710191681~hmac=b6470c7b77327d2fa235155524e48cc0874d32efe385d826d3deed75fdb6b370",
    "https://img.freepik.com/free-photo/engineer-group-worker-meeting-discussion-with-construction-blueprint-site-work-point-finger-work-site_1439-10.jpg?t=st=1710191208~exp=1710194808~hmac=6ba560dc4dec0bfa70054ec275785a104dcd0bf5f3198fbb40010433896f51f8&w=996",
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === imagePaths.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);
    return () => clearInterval(intervalId);
  }, []);

  const handleNext = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === imagePaths.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? imagePaths.length - 1 : prevIndex - 1
    );
  };

  return (
    <Box
      className="hero_container"
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.25) 0%, rgba(0, 0, 0, 0.25) 100%), url(${imagePaths[currentImageIndex]})`,
      }}
    >
      <button
        onClick={handlePrev}
        type="button"
        class="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        data-carousel-prev
      >
        <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-white-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <svg
            class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M5 1 1 5l4 4"
            />
          </svg>
          <span class="sr-only">Previous</span>
        </span>
      </button>
      <button
        onClick={handleNext}
        type="button"
        class="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        data-carousel-next
      >
        <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-white-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <svg
            class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m1 9 4-4-4-4"
            />
          </svg>
          <span class="sr-only">Next</span>
        </span>
      </button>
      {/* <div className="hero_text_container"> */}
      <div className="hero_text_container absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
        <h5 className="text-4xl font-bold">
          Building Engineering Professionals
        </h5>
        <hr className="max-w-[900px] mt-4 border-white" />
        <p className="mt-4 text-2xl">
          New Construction | Restoration | Inspection | Testing
        </p>

        <button
          type="button"
          class="text-black color:'#fb923c' bg-primary	 font-bold	text-xl px-5 py-2.5 text-center me-2 mt-6 w-60 h-16  
      cursor-pointer hover:bg-orange-300	"
        >
          See What We Do
        </button>
      </div>
      {/* </div> */}
    </Box>
  );
};

export default Slider;
