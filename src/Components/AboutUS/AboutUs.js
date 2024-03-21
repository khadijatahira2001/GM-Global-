import React from "react";
import { AboutOptionCardInfo } from "../../Constants/index.js";
import AboutCards from "../../Shared/AboutCards.js";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faTelegram } from "@fortawesome/free-brands-svg-icons";
import aboutImg from "../../Assets/aboutImg.png";
import aboutImg1 from "../../Assets/aboutImg1.png";
import aboutImg2 from "../../Assets/aboutImg2.png";

function AboutUs() {
  return (
    <div>
      <div className="grid lg:grid-cols-2 sm:grid-cols-1 lg:p-32 items-center gap-20 sm:gap-6 ">
        <div className="mb-10 mt-10 mr-10 pl-20 sm:items-center  items-stretch ">
          <h1 className="uppercase text-bold text-4xl">
            Your Partner in Excellent Project Execution
          </h1>
          <p className="">
            GM Global is the result of our more than 20 years of dedication to
            the engineering field. We have been privileged enough to work on
            various projects across different industries, honing our skills and
            knowledge until we are prepared to establish our business.
          </p>
          <br />
          <p>
            Now, with the help of our team members, we have been providing
            remarkable engineering services to clients through this company. We
            continuously utilize our expertise and experience to turn simple
            ideas into impressive realities.
          </p>
        </div>
        <div className="mx-10 ">
          <img
            className="sm:h-52 sm:w-72 sm:ml-4 sm:mr-4 sm:p-5 "
            style={{ height: "600px", width: "800px" }}
            src="https://preview.colorlib.com/theme/pivot/img/slider-1.jpg"
          />
        </div>
      </div>
      <div className="flex flex-col justify-center items-center ">
        <h1 className="text-center text-bold text-4xl text-primary">WHAT WE DO</h1>
        <br/>
        <p className="text-center text-2xl">
          We Are Leading Industry of Engineering
          <br/>
        </p>
      </div>
      <div className="flex content-center justify-center flex-wrap items-stretch min-[920px]:space-x-6 mx-20">
        {AboutOptionCardInfo.map((card, index) => (
          <AboutCards key={index} {...card} />
        ))}
      </div>

      <div className="grid lg:grid-cols-2 sm:grid-cols-1  lg:p-32 items-center gap-20 sm:gap-6">
        <div className="mx-10">
          <img
            className="sm:h-48 sm:w-64 sm:ml-4 sm:mr-4 sm:p-5 "
            style={{ height: "600px", width: "800px" }}
            src="https://img1.wsimg.com/isteam/stock/6103/:/rs=w:600,cg:true,m"
          />
        </div>
        <div className="mb-40 mt-20 pt-10 sm:items-center mx-5 w-full ">
          <h1 className="uppercase text-bold text-4xl text-primary">WHY CHOOSE US</h1>
          <br/>
          <h2 className="text-2xl">More than 50 year experience in industry</h2>
          <p className="">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi
            unde impedit, necessitatibus, soluta sit quam minima expedita atque
            corrupti reiciendis.
          </p>
          <br/>

          <div className="lg:col-span-3 md:col-span-4">
            <div className="flex items-center">
              <img src={aboutImg} className="h-10 w-10 mr-4"/>
              <h5 className="tracking-[1px] text-black font-semibold text-4xl hover:text-orange-400">Expert in Buildings</h5>
            </div>
            <br/>
            <div className="flex items-center">
              <img src={aboutImg1} className="h-10 w-10 mr-4"/>
              <h5 className="tracking-[1px] text-black font-semibold text-4xl hover:text-orange-400">Modern Design</h5>
            </div>
            <br/>
            <div className="flex items-center">
              <img src={aboutImg2} className="h-10 w-10 mr-4"/>
              <h5 className="tracking-[1px] text-black font-semibold text-4xl hover:text-orange-400">Leading In Floor Planning</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
