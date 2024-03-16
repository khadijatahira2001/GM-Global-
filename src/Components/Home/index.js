import React from "react";

import { ServiceOptionCardInfo, OurServicesInfo } from "../../Constants";

import OurServices from "./OurServices.js";
import Testimonials from "../../Shared/Testimonials.js";
import HeroSection from "./HeroSection.js";
import CompanyProfile from "./CompanyProfile.js";
import ServiceOptionCard from "../../Shared/ServiceOptionCard.js";
import "../../Styles/Home.css";
const Home = () => {
  return (
    <div style={{ backgroundColor: "white" }}>
      <HeroSection />
      <div className="flex content-center justify-center flex-wrap items-stretch min-[920px]:space-x-6 mx-20">
        {ServiceOptionCardInfo.map((card, index) => (
          <ServiceOptionCard key={index} {...card} />
        ))}
      </div>
      <div style={{ margin: 20 }} className="">
        <hr className=" w-3/4 my-10" />
        <CompanyProfile />
        <hr className=" w-3/4 my-10" />
        <OurServices cardData={OurServicesInfo} />
        {/* <Testimonials cardData={Testimonial} /> */}
      </div>
    </div>
  );
};
export default Home;
