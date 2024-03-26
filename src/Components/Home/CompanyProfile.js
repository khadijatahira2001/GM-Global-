import React from "react";
import Button from "../../Shared/Button";

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
        <p className="mt-6 font-normal text-content_color mb-20">
          GM Global is the result of our more than 20 years of dedication to the
          engineering field. We have been privileged enough to work on various
          projects across different industries, honing our skills and knowledge
          until we are prepared to establish our business.
        </p>
        <Button>About Us</Button>
      </div>
    </div>
  );
}

export default CompanyProfile;
