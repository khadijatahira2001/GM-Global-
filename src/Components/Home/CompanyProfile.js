import React from "react";

function CompanyProfile() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        flexDirection: "row",
        flexWrap:"wrap"
      }}
    >
      <img
        src="https://preview.colorlib.com/theme/constructo/img/about/about.png.webp"
        alt=""
        className="size-auto"
      />

      <div
        id="expert_main_content_ontainer"
        className=""
        style={{
          display: "flex",
          paddingLeft:20,
          flexDirection:"column",
          width: "50%",
        }}
      >
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

        <button
          type="button"
          class="text-black color:'#fb923c' bg-primary font-bold	text-xl px-5 py-2.5 text-center lg:w-60  h-16  mt-20 mb-28
      cursor-pointer hover:bg-orange-300	"
        >
          About Us
        </button>
      </div>
    </div>
  );
}

export default CompanyProfile;
