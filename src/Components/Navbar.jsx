import React from "react";
import { GoArrowUpRight } from "react-icons/go";
import BookDemo from "./BookDemo";
import Button from "./Button";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <div className=" py-6 px-8 z-30 bg-transparent ">
      <div className="grid grid-cols-2 gap-4 ">
        <div className="flex items-center">
          <div className="flex justify-center items-center">
            <NavLink to='/' className='text-3xl font-bold pr-6'>rivermate</NavLink>
          </div>
          <div className="flex justify-center items-center gap-4   cursor-pointer text-gray-800 font-medium ">
            <NavLink to='HowitWorks' className="">How it works</NavLink>
            <NavLink to='pricing' className="">Pricing</NavLink>
            <NavLink to='countries' className="">Countries</NavLink>
            <NavLink to='partners' className="">Partners</NavLink>
            <NavLink to='company' className="">Company</NavLink>
          </div>
        </div>
        <div className="flex items-center gap-4 justify-end">
          <div className="flex">
            <span className="flex items-center px-4">
              Login
              <GoArrowUpRight />
            </span>
          </div>
            <>
              <Button text={`Create account`} />
            </>
            <>
              <BookDemo />
            </>
        </div>
      </div>
    </div>
  );
};



export default Navbar;
