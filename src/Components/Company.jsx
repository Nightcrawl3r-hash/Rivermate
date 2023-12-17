import React from "react";
import image1 from "../assets/4.webp";
import image2 from "../assets/1.jpg";
import signature from "../assets/signature.png";
import Newsletter from "./Newsletter";
import image3 from "../assets/20.webp";
import { TiTick } from "react-icons/ti";
const Company = () => {
  return (
    <div className=" overflow-hidden container m-auto pt-16">
      <div className="flex flex-col justify-center items-center py-16">
        <img data-aos="zoom-in" src={image1} alt="image" />
        <h1 data-aos="fade-up" className=" text-5xl md:text-6xl lg:w-1/2 text-center font-extrabold text-gray-800 ">
          Our mission is to enable companies to hire anyone, anywhere
        </h1>
      </div>
      <Founder />
      <WhatWeValue />
      <Newsletter />
    </div>
  );
};

function Founder() {
  return (
    <div className="flex flex-col gap-y-6 justify-center items-center py-16">
      <h2 data-aos="fade-up" className="text-5xl font-extrabold text-gray-800">The Founder</h2>
      <img
        data-aos="flip-down"
        src={image2}
        alt="image"
        className="rounded-full h-72 drop-shadow-2xl"
      />
      <p data-aos="zoom-in-up" className="md:w-1/2 text-center text-gray-700 font-extralight">
        Before founding Rivermate, Naresh co-founded a remote company called
        Boloo. He experienced first-hand the troubles of hiring remote employees
        compliantly. During the COVID-19 pandemic he witnessed many companies
        going remote and struggling with the same problem. Then in December 2020
        he decided to sell his company and focus on fixing the problem with
        remote hiring.
      </p>
      <img data-aos="fade-up"
     data-aos-duration="3000" src={signature} alt="image" className="" />
    </div>
  );
}

function WhatWeValue() {
  return (
    <div className="py-16 ">
      <h2 data-aos="fade-up" className=" text-center text-5xl font-extrabold text-gray-800">
        What we value
      </h2>
      <div className="grid md:grid-cols-3 gap-2 py-4 ">
        <div className="flex flex-col gap-4 justify-center items-center">
          <Text
            title={`Speed`}
            subtitle={`We want to automate the entire process, so users will directly get a payroll calculation, and directly get an employment contract. All within a few clicks`}
          />
          <Text
            title={`Price`}
            subtitle={`We want to be the cheapest in the market. We can achieve that by keeping the team small and agile, automating the entire process and opening entities ourselves.`}
          />
        </div>
        <div  className="flex items-center order-first md:order-2">
          <img data-aos="zoom-in" src={image3} alt="image" className=""/>
        </div>

        <div className="flex flex-col gap-4 justify-center items-center order-last">
          <Text
            title={`Convenience`}
            subtitle={`The product needs to be extremely straightforward. A user would not need customer support in order to onboard them`}
          />
          <Text
            title={`Coverage`}
            subtitle={`A user wants to manage payroll for all of their employees in one place. This means we have to cover as many countries as possible.`}
          />
        </div>
      </div>
    </div>
  );
}

function Text({ title, subtitle }) {
  return (
    <div data-aos="flip-left" className=" lg:p-4 ">
      <h1 className="flex gap-1 items-center text-xl text-gray-800 font-bold">
        <span className="">
          <TiTick size={24} />
        </span>
        {title}
      </h1>
      <p className="text-gray-700 w-3/4 pl-8">{subtitle}</p>
    </div>
  );
}
export default Company;
