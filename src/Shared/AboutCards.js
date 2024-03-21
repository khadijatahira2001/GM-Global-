import React from "react";
import { AboutOptionCardInfo } from '../Constants';

const AboutCards = ({ title, icon, description }) => {
  return (
    <div className="shadow-2xl rounded-xl text-center  relative bg-white  mt-4">
      <div className="card w-96 bg-base-100 min-h-96 ">
        <figure className="px-20 pt-10 mb-10 text-center">{icon}</figure>
        <div className="card-body items-center ">
          <h2 className="card-title text-2xl  ">{title}</h2>
          <p className="text-content_color p-10">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default AboutCards;
