import React from "react";
import Cards from "../Shared/Cards";

const Services = () => {
  return (
    <div class="mr-32 ml-32 mt-16">
      <div>
        <h5 class="text-6xl">Our Areas of Expertise</h5>
        <hr className=" mt-8 mb-32" />
      </div>
      <div className="ml-4 mb-12">
        <img
          src="https://img1.wsimg.com/isteam/stock/39834/:/cr=t:12.53%25,l:0%25,w:100%25,h:74.93%25/rs=w:1240,h:620,cg:true"
          alt="image"
        />
      </div>
      <div className="ml-4 mb-12">
        <h1 className="text-4xl font-bold text-black text-center mb-20">
          Design Review
        </h1>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-12 ">
          <div>
            <img
              class="h-auto max-w-full  "
              src="https://img1.wsimg.com/isteam/ip/94953300-27f2-45f6-a137-8c68f6ffb407/blob-503d7c9.png/:/rs=w:600,h:300,cg:true,m/cr=w:600,h:300"
              alt=""
            />
            <h4 className="text-center text-2xl text-bold mt-12">
              Garage Restoration
            </h4>
          </div>
          <div>
            <img
              class="h-auto max-w-full "
              src="https://img1.wsimg.com/isteam/ip/94953300-27f2-45f6-a137-8c68f6ffb407/Restoration.JPG/:/cr=t:16.67%25,l:0%25,w:100%25,h:66.67%25/rs=w:600,h:300,cg:true"
              alt=""
            />
            <h4 className="text-center text-2xl text-bold mt-12">
              Balcony Restoration
            </h4>
          </div>
        </div>
      </div>
      <div className="mb-32 mt-32">
        <Cards />
      </div>
      <div className="ml-6 mr-auto mb-12 mt-16">
        <img
          class="size-full content-center"
          src="https://img1.wsimg.com/isteam/ip/94953300-27f2-45f6-a137-8c68f6ffb407/Restoration-1.JPG/:/rs=w:719,h:360,cg:true,m/cr=w:719,h:360/qt=q:10"
          alt="image"
        />
      </div>
      <div className="ml-4 mb-12 mt-32">
        <h1 className="text-4xl font-bold text-black text-center mb-20">
          Building Science
        </h1>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-12 ">
          <div>
            <img
              class="h-auto max-w-full  "
              src="https://img1.wsimg.com/isteam/ip/94953300-27f2-45f6-a137-8c68f6ffb407/110728%20044.jpg/:/cr=t:16.67%25,l:0%25,w:100%25,h:66.67%25/rs=w:600,h:300,cg:true"
              alt=""
            />
            <h4 className="text-center text-2xl text-bold mt-12">
              Condition Assessment
            </h4>
          </div>
          <div>
            <img
              class="h-auto max-w-full "
              src="https://img1.wsimg.com/isteam/ip/94953300-27f2-45f6-a137-8c68f6ffb407/Fire%20Safety%20System-b5da532.JPG/:/cr=t:16.67%25,l:0%25,w:100%25,h:66.67%25/rs=w:600,h:300,cg:true"
              alt=""
            />
            <h4 className="text-center text-2xl text-bold mt-12">
              Fire Safety System
            </h4>
          </div>
        </div>
      </div>
      <div className="mb-32 mt-32">
        <Cards />
      </div>
      <div className="ml-6 mr-auto mb-12 mt-16">
        <img
          class="size-full content-center"
          src="https://img1.wsimg.com/isteam/ip/94953300-27f2-45f6-a137-8c68f6ffb407/Inspection-2.JPG/:/cr=t:16.67%25,l:0%25,w:100%25,h:66.67%25/rs=w:1240,h:620,cg:true"
          alt="image"
        />
      </div>
      <div className="ml-4 mb-12 mt-32">
        <h1 className="text-4xl font-bold text-black text-center mb-20">
          Below Grade Waterproofing
        </h1>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-12 ">
          <div>
            <img
              class="h-auto max-w-full  "
              src="https://img1.wsimg.com/isteam/ip/94953300-27f2-45f6-a137-8c68f6ffb407/New%20Construction-3.JPG/:/cr=t:16.67%25,l:0%25,w:100%25,h:66.67%25/rs=w:600,h:300,cg:true"
              alt=""
            />
            <h4 className="text-center text-2xl text-bold mt-12">
              Foundation Waterproofing
            </h4>
          </div>
          <div>
            <img
              class="h-auto max-w-full "
              src="https://img1.wsimg.com/isteam/ip/94953300-27f2-45f6-a137-8c68f6ffb407/Inspection-1.JPG/:/rs=w:600,h:300,cg:true,m/cr=w:600,h:300"
            />
            <h4 className="text-center text-2xl text-bold mt-12">
              Garage Slab Protection
            </h4>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-20 mb-40 ml-40">
        <a
          href="#"
          className="max-w-sm h-96 p-10 dark:bg-orange-500 dark:hover:bg-orange-400 flex items-center"
        >
          <h5 className="mb-2 text-4xl font-bold tracking-tight text-center text-black transition-transform transform hover:text-shadow hover:-translate-y-1">
            Condominium projects
          </h5>
        </a>

        <a
          href="#"
          className="flex items-center max-w-sm p-6 dark:bg-orange-500 dark:hover:bg-orange-400 "
        >
          <h5 className="mb-2 text-4xl font-bold tracking-tight text-center text-black px-16 transition-transform transform hover:text-shadow hover:-translate-y-1">
            Field Testing
          </h5>
        </a>
      </div>
    </div>
  );
};

export default Services;
