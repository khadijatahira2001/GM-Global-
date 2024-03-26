import { red } from "@mui/material/colors";
import { color } from "@mui/system";
import React, { Children } from "react";

const Button = ({ children }) => {
  return (
    <button
      className="text-black color:'#fb923c' bg-primary	 font-bold	text-xl px-5 py-2.5 text-center me-2 mt-6 w-60 h-16  
      cursor-pointer hover:bg-orange-300 rounded-md"
    >
      {children}
    </button>
  );
};

export default Button;
