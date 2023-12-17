import React from "react";
import image1 from "../assets/1.svg";
import image2 from "../assets/2.svg";
import image3 from "../assets/3.svg";
import image4 from "../assets/4.svg";
import image5 from "../assets/5.svg";
import image6 from "../assets/6.svg";
import image7 from '../assets/featured.svg'
const Trusted = () => {
  return (
    <div className="container overflow-hidden m-auto py-12">
      <h2 data-aos="fade-up" className=" text-3xl font-semibold text-center text-gray-800 py-2 ">
        Trusted by many
      </h2>
      <div data-aos="flip-up" className="grid grid-cols-6 gap-6 items-center  justify-center py-4">
        <img src={image1} alt="company-image"  />
        <img src={image2} alt="company-image" />
        <img src={image3} alt="company-image" />
        <img src={image4} alt="company-image" />
        <img src={image5} alt="company-image" />
        <img src={image6} alt="company-image" />
      </div>
      <div data-aos="zoom-out" className="flex justify-center items-center py-4">
        <img src={image7} alt="image" />
      </div>
    </div>
  );
};

export default Trusted;
