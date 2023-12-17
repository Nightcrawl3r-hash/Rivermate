import React from "react";

const Tile = ({ image, title, subtitle }) => {
  return (
    <div>
      <div data-aos="zoom-in" className=" overflow-hidden flex flex-col gap-2 items-center bg-white p-6 rounded-lg cursor-pointer hover:bg-gray-100">
        <img src={image} alt="image" className="h-16" />
        <h2 className="text-xl font-bold text-gray-700">{title}</h2>
        <h3 className="text-gzray-600 w-3/4 text-center ">{subtitle}</h3>
      </div>
    </div>
  );
};

export default Tile;
