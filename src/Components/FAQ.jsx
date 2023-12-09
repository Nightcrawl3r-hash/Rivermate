import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { RiArrowDropDownLine } from "react-icons/ri";

const FAQ = () => {
  const [show, setShow] = useState(false);

  const toggleDropdown = () => {
    setShow(!show);
  };

  return (
    <div className="container m-auto py-16">
      <h1 className="text-center text-5xl font-extrabold text-gray-800 pb-2">
        Frequently asked questions
      </h1>
      <p className="text-center text-gray-700 font-extralight text-xl">
        Our team is here to answer any questions you might have.
      </p>
      <section className="text-center">
        <NavLink className="text-gray-800">Get in touch</NavLink>
      </section>

      <div className="py-8">
        <div className="bg-white p-8 cursor-pointer hover:bg-[#D6CBC1] grid w-1/2 m-auto rounded-lg transition-all duration-300 ease-in">
          <button
            className="flex flex-row items-center justify-between"
            onClick={toggleDropdown}
          >
            <p className="text-2xl font-bold text-gray-800">
              Can I cancel anytime?
            </p>
            <RiArrowDropDownLine size={36} className="" />
          </button>
          <div
            className={` ${
              show
                ? "opacity-100 max-h-[1000px]"
                : "opacity-0 max-h-0 overflow-hidden"
            }`}
          >
            <p className="font-extralight text-gray-800">
              Our pricing plan is a monthly plan, which means you can cancel any
              time. The payments will stop as soon as you offboard a contractor
              or an employee. No minimum costs, no contracts, no hidden costs.
              Just simple, transparent pricing.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
