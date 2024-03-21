import React from "react";
import { ServiceCardInfo2 } from "../Constants";

const ServiceCards = ({ title, icon, description }) => {
  return (
    <div className="shadow-2xl rounded-xl text-center relative bg-white mt-4 group overflow-hidden">
      <div className="card w-96 bg-base-100 min-h-96 group-hover:scale-110 transform transition-transform duration-300 ease-in-out">
        <figure className="px-20 pt-10 mb-10 items-center text-center">
          {icon}
        </figure>
        <div className="card-body items-center">
          <h2 className="card-title text-2xl">{title}</h2>
          <p className="text-content_color p-10">{description}</p>
        </div>
      </div>
      <div className="pb-4 mb-8">
      <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg border border-primary text-primary p-2 hover:bg-primary hover:text-white rounded-md">
        Learn More
      </button>
      </div>
   
    </div>
  );
};

export default ServiceCards;