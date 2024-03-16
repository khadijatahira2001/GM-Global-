import React from "react";

function AboutUs() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 mt-10 ml-20 mb-32">
      <div className="flex items-center">
        <img
          src="https://img1.wsimg.com/isteam/stock/6103/:/rs=w:600,cg:true,m"
          alt=""
          className="max-w-full h-auto"
        />
      </div>
      <div className="w-full ">
        <h5 className="text-4xl font-bold">
          Your Partner in Excellent <br />
          Project Execution
        </h5>
        <p className=" mt-6 font-normal text-gray-500 ">
          GM Global is the result of our more than 20 years of dedication to the
          engineering field. We have been privileged enough to work on various
          projects across different industries, honing our skills and knowledge
          until we are prepared to establish our business.
        </p>
        <p className="mt-6 font-normal text-gray-500">
          GM Global is the result of our more than 20 years of dedication to the
          engineering field. We have been privileged enough to work on various
          projects across different industries, honing our skills and knowledge
          until we are prepared to establish our business.
        </p>
      </div>

    </div>
  );
}

export default AboutUs;
