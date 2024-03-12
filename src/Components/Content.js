import React from "react";

function Content() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 mt-10 ml-20 mb-20">
      <div className="flex items-center">
        <img
          src="https://preview.colorlib.com/theme/constructo/img/about/about.png.webp"
          alt=""
          className="max-w-full h-auto ml-24"
        />
      </div>
      <div className="w-3/4 justify">
        <h5 className="text-4xl font-bold">
          WE ARE EXPERT IN
          <br />
          CONSTRUCTION FIELD
        </h5>
        <p className=" mt-6 font-normal text-content_color ">
          GM Global is the result of our more than 20 years of dedication to the
          engineering field. We have been privileged enough to work on various
          projects across different industries, honing our skills and knowledge
          until we are prepared to establish our business.
        </p>
        <p className="mt-6 font-normal text-content_color">
          GM Global is the result of our more than 20 years of dedication to the
          engineering field. We have been privileged enough to work on various
          projects across different industries, honing our skills and knowledge
          until we are prepared to establish our business.
        </p>
        <div>
          <button
            type="button"
            class="text-black color:'#fb923c' bg-primary font-bold	text-xl px-5 py-2.5 text-center me-2 w-60 h-16  mt-20 mb-28
      cursor-pointer hover:bg-orange-300	"
          >
            About Us
          </button>
        </div>
      </div>
    </div>
  );
}

export default Content;
