import { Box, Typography } from "@mui/material";
import React from "react";
import { useState, useEffect } from "react";
import "tailwindcss/tailwind.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  } from '@fortawesome/free-solid-svg-icons';

import "../Styles/Home.css";

const Home = () => {
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
    // Change the image every 5 seconds (adjust the interval as needed)
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === imagePaths.length - 1 ? 0 : prevIndex + 1
      );
    }, 2000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div style={{ backgroundColor: "white" }}>
      <Box
        className="hero_container"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.25) 0%, rgba(0, 0, 0, 0.25) 100%), url(${imagePaths[currentImageIndex]})`,
        }}
      >
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

      {/* {Cards} */}

      <div
        className="card flex space-x-3 w-3/4 h-72 shadow-md ml-44 mr-40 p-10 content-start items-center rounded-lg  justify-between"
        style={{}}
      >
        <div className="card-body ">
        <FontAwesomeIcon icon="fa-solid fa-pen-to-square" />
          <h2 className="card-title text-2xl ">Creative Plan & Design</h2>
          <p class="text-content_color">
          From conceptualizing unique ideas to crafting meticulous designs, we are here to turn your dreams into awe-inspiring realities. 
          </p>
        </div>
        <div className="card-body">
          <h2 className="card-title card-title text-2xl">Restoration</h2>
          <p class="text-content_color">
            Discover our restoration services that bring new life to old
            structures. We specialize in preserving the past while incorporating
            modern techniques for lasting results.
          </p>
        </div>
        <div className="card-body">
          <h2 className="card-title card-title text-2xl">
            Inspection & Testing
          </h2>
          <p class="text-content_color">
            Ensure the structural integrity of your building with our thorough
            inspection and testing services. Our experts provide detailed
            assessments to meet safety standards.
          </p>
        </div>
      </div>
      <div className="mt-10 flex flex-col items-center">
        <h1 className="text-4xl font-bold text-black ">
          Specializing in Engineering Solutions
        </h1>
        <p className=" text-center w-1/2	 mt-6 font-medium text-gray-500">
          Transform your vision into reality by partnering with US. Whether you
          have to design functional spaces or conduct thorough building
          inspections, we exist to ensure your project gets nothing less than
          our reliable engineering services. Partner with us, and let's restore,
          build, and innovate together.
        </p>
      </div>

      <div className="mt-20 flex flex-col items-center">
        <h1 className="text-4xl font-bold text-yellow-600 ">Why Choose Us?</h1>
        <p className=" text-center w-1/3 mt-6 font-medium text-gray-500">
          With more than 20 years of extensive industry experience, we have
          worked and impressed various clients, especially multinational
          companies. Our unwavering dedication to excellence always inspires us
          to give our best on every project. From quick responses to remarkable
          executions, we go above and beyond to exceed client satisfaction.
        </p>
      </div>
      <div className=" flex justify-center items-center ">
        <button
          type="button"
          class="text-black color:'#fb923c' bg-orange-400 font-bold	text-xl px-5 py-2.5 text-center me-2 w-60 h-16  mt-20 mb-28
      cursor-pointer hover:bg-orange-300	"
        >
          Get To Know Us
        </button>
      </div>
    </div>
  );
};
export default Home;
