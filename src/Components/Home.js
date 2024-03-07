import React from "react";
import backgrdImg from "../Assets/main_background.png";
const Home = () => {
  return <div >
    <img className="md:w-full md:max-h-screen
" src={backgrdImg}/>
<div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
  <h5 className="text-4xl font-bold">Building Engineering Professionals</h5>
  <hr className="max-w-[900px] mt-4 border-blue-950"/>
  <p className="mt-4 text-2xl">New Construction | Restoration | Inspection | Testing</p>

<button type="button" class="text-white bg-gradient-to-br from-blue-900 px-sm 
     to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none 
      focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mt-6 w-60 transition 
      shadow-md cursor-pointer hover:-translate-y-3">See What We Do
</button>

</div>
    
  </div>;
};
export default Home;
