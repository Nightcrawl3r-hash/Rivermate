import React from "react";
import image1 from "../assets/2.webp";
import image2 from "../assets/3.webp";
import image3 from "../assets/4.webp";
import image4 from "../assets/5.webp";
const HirePay = () => {
  return (
    <div className="container m-auto py-16">
      <h2 className="text-3xl text-gray-800 font-semibold text-center pb-6">
        Hire, pay and manage your global team
      </h2>
      <div className="grid grid-cols-4 gap-8">
        <Tile
          image={image1}
          title={`Hire global employees`}
          subtitle={`Hire remote employees in over 150 countries`}
        />
        <Tile
          image={image2}
          title={`Manage your team`}
          subtitle={`Manage time off, expenses and payroll in one dashboard`}
        />
        <Tile
          image={image3}
          title={`Provide benefits`}
          subtitle={`Provide statuory benefits and global health insurance`}
        />
        <Tile
          image={image4}
          title={`Stay compliant`}
          subtitle={`Stay 100% compliant in all countries with all our platform`}
        />
      </div>
    </div>
  );
};

function Tile({ image, title, subtitle }) {
  return (
    <div className="flex flex-col gap-2 items-center bg-white p-6 rounded-lg cursor-pointer hover:bg-gray-100">
      <img src={image} alt="image" className="h-16" />
      <h2 className="text-xl font-bold text-gray-700">{title}</h2>
      <h3 className="text-gray-600 w-3/4 text-center">{subtitle}</h3>
    </div>
  );
}

export default HirePay;
