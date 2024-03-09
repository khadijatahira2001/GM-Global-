import React from "react";
import ChatBubbleOutlineRoundedIcon from "@mui/icons-material/ChatBubbleOutlineRounded";
function Footer() {
  return (
    <div
      className="text-center"
      style={{ backgroundColor: "", height: "150px" }}
    >
      <hr className="mr-32 ml-32 mb-8" />
      Copyright © 2024 GM Global Inc. All Rights Reserved.
      <hr class="mx-auto my-6 w-14 bg-blue-500" />
      <div class=" flex items-center justify-end">
        <button
          type="button"
          class=" bg-orange-400  px-5 py-2.5 me-2 w-16 h-16 cursor-pointer rounded-full mb-6 mr-6 fixed bottom-0 right-0"
        >
          <ChatBubbleOutlineRoundedIcon class="" />
        </button>
      </div>
    </div>
  );
}

export default Footer;
