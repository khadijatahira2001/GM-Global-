import React from "react";
import Header from "./Header";
import  "./HomeStyle.css";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";

const Home = () => {
  return (
    <div>
      <Header />
      <section className="image-container ">
        <img className="home"
          src="/images/img (1).png"
          alt="Logo"
         /* style={{ width: "100%", height: 600, margin: 0 }}*/
        />
        <div className="text-overlay">
        <h1 className="title ">Building Engineering Professionals</h1>
        <p className="text">
         Planning, Building, Rehabitilitating and maintaining Infrastructure locally and globally.
        </p>
        </div>
        
      </section>
    </div>
  );
};
export default Home;
