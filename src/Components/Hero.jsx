import React from "react";
import image1 from "../assets/1.webp";
import { TiTick } from "react-icons/ti";
import { FaGlobeAmericas } from "react-icons/fa";
import Button from "./Button";
import BookDemo from "./BookDemo";
const Hero = () => {
  return (
    <div className="container m-auto flex flex-col justify-center items-center py-32">
      <img src={image1} alt="" />
      <h1 className="text-6xl font-extrabold text-gray-800 pb-4">Hire anyone, anywhere.</h1>
      <h3 className="flex items-center gap-2 text-xl font-thin text-gray-800">
        The HR platform for global teams
        <span className="">
          <FaGlobeAmericas />
        </span>
      </h3>
      <div className="py-2 flex gap-4 ">
        <TickText text={`Guaranteed best pricing`}/>
        <TickText text={`Same-day onboarding`}/>
        <TickText text={`Available in 150+ countries`}/>
      </div>
      <div className="flex gap-4 my-2">
        <Button text={`Create account`}/>
        <BookDemo/>
      </div>
    </div>
  );
};

function TickText({ text }) {
  return (
    <div className=" flex gap-1 items-center">
      <TiTick  className="text-green-600 " size={16}/>
      <h3 className=" text-gray-700">{text}</h3>
    </div>
  );
}
export default Hero;
