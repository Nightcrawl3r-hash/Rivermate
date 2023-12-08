import React from "react";
import { GoArrowUpRight } from "react-icons/go";
import BookDemo from "./BookDemo";
import Button from "./Button";
const Navbar = () => {
  return (
    <div className=" py-6 px-8 z-30 bg-transparent ">
      <div className="grid grid-cols-2 gap-4 ">
        <div className="flex items-center">
          <div className="flex justify-center items-center">
            <h2 className="text-3xl font-bold pr-6">rivermate</h2>
          </div>
          <div className="flex justify-center items-center gap-4   cursor-pointer text-gray-800 font-medium ">
            <h2 className="">How it works</h2>
            <h2 className="">Pricing</h2>
            <h2 className="">Countries</h2>
            <h2 className="">Partners</h2>
            <h2 className="">Company</h2>
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
