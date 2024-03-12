import React from "react";

const SimpleCards = ({ title, icon, description }) => {
  return (
    <div className="shadow-2xl rounded-xl text-center  relative -top-20 bg-white">
      <div className="card w-96 bg-base-100  min-h-96 ">
        <figure className="px-20 pt-10 mb-10 text-center">{icon}</figure>
        <div className="card-body items-center ">
          <h2 className="card-title text-2xl mb-4">{title}</h2>
          <p className="text-content_color mb-4">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default SimpleCards;
