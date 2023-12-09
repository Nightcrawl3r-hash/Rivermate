import React from "react";
import Button from "./Button";
import BookDemo from "./BookDemo";

const PricingTile = ({ title, subtitle, link, description }) => {
  return (
    <div className="flex flex-col gap-y-4">
      <h2 className="text-3xl font-bold text-gray-800">{title}</h2>
      <h3 className="font-semibold text-gray-800">{subtitle}</h3>
      <p className="font-semibold text-gray-800">{link}</p>
      <p className="text-gray-800 font-extralight">{description}</p>
      <div className="flex gap-x-4 pb-4">
        <Button text={`Create account`} />
        <BookDemo />
      </div>
    </div>
  );
};

export default PricingTile;
