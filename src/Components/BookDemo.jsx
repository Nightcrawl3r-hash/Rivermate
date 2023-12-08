import React from "react";
import { PiHandPalmFill } from "react-icons/pi";
const BookDemo = () => {
  return (
    <div>
      <button className="flex gap-2 flex-row items-center px-4 py-2 bg-black text-gray-100 rounded-lg hover:bg-gray-800">
        Book a demo
        <PiHandPalmFill className="  animate-bounce ease-linear text-yellow-400" />
      </button>
    </div>
  );
};

export default BookDemo;
