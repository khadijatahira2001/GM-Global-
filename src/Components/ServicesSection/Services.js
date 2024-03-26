import React from "react";
//import Cards from "../../Shared/Cards";
import ServiceCards from "../../Shared/ServiceCards.js";
import { ServiceCardInfo } from "../../Constants/index.js";
import { ServiceCardInfo2 } from "../../Constants/index.js";

import serviceImg from "../../Assets/cd1.png";
import serviceImg1 from "../../Assets/cd2.png";
import serviceImg2 from "../../Assets/cd3.png";
import Button from "../../Shared/Button.js";
const Services = () => {
  return (
    <div className="items-center ">
      <h1 className="font-bold text-4xl text-center items-center  p-10">
        Our Area Of Expertise
      </h1>
      <div className=" bg-amber-50 p-10">
        <div className="flex content-center justify-center flex-wrap items-stretch min-[920px]:space-x-6 mx-20">
          {ServiceCardInfo.map((card, index) => (
            <ServiceCards key={index} {...card} />
          ))}
        </div>
        <div className="flex content-center justify-center flex-wrap items-stretch min-[920px]:space-x-6 mx-20">
          {ServiceCardInfo2.map((card, index) => (
            <ServiceCards key={index} {...card} />
          ))}
        </div>
      </div>
      <div className="mt-20 mb-10 p-10">
        <h1 className="font-bold text-4xl text-center mb-6">
          SEE OUR RECENT PROJECTS
        </h1>
        <p className="text-center text-lg lg:text-2xl text-content_color mx-auto max-w-4xl mb-6">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi unde
          impedit, necessitatibus, soluta sit quam minima expedita atque
          corrupti reiciendis.
        </p>
        <div className="flex justify-center">
          <Button>View All Projects</Button>
        </div>
      </div>
    </div>
  );
};

export default Services;
