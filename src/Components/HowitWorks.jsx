import React from "react";
import Newsletter from "./Newsletter";
import image21 from "../assets/21.webp";
import Button from "./Button";
import BookDemo from "./BookDemo";
import Tile from "./Tile";
import image30 from '../assets/30.webp'
import image31 from '../assets/31.webp'
import image32 from '../assets/4.webp'
import image33 from '../assets/33.webp'
import image34 from '../assets/34.webp'
import image35 from '../assets/35.webp'
const HowitWorks = () => {
  return (
    <div className="container m-auto pt-16 px-2 lg:px-0">
      <div className="grid md:grid-cols-2 gap-4 justify-center items-center h-screen md:px-12">
        <div className="order-last md:order-first">
          <h1 className="text-6xl font-extrabold text-gray-800 py-2 ">Offer the benefits your team deserves</h1>
          <p className="text-gray-700 font-extralight py-2 ">
            Pensions, health insurance, statutory benefits. In every country in
            the world - all at affordable rates.
          </p>
          <div className="py-6 flex gap-4 ">
            <Button text={`Create account`} />
            <BookDemo/>
          </div>
        </div>
        <img src={image21} alt="image" />
      </div>

      <div className="grid  md:grid-cols-2 lg:grid-cols-4 gap-4 py-8 ">
        <Tile image={image30} title={`Statuory benefits`} subtitle={`We take care of the statutory benefits that are required by law for all your employees hired by us.
`}/>
        <Tile image={image31} title={`Custom benefits`} subtitle={` We can offer your employees  benefits & perks, depending on the country they are in.
`}/>
        <Tile image={image32} title={`Health insurance`} subtitle={`Offer your team a global health insurance package, no matter where they are located.`}/>
        <Tile image={image33} title={`Competitive rates`} subtitle={`Because of our collective buying power, our rates are typically cheaper than individual plan rates.`}/>
      </div>
      <LearnMore/>
      <Newsletter />
    </div>
  );
};



function LearnMore(){
  return (
    <div className="py-8">
      <h2 className="text-3xl text-gray-800 font-semibold text-center pb-6">
        Learn more about Rivermate
      </h2>
      <div className="grid md:grid-cols-3 gap-8 py-4">
        <LearnMoreTile
          image={image34}
          title={`Manage your team`}
          subtitle={`Manage time off, expenses and payroll in one dashboard`}
          bg={`ecf8f4`}
        />
        <LearnMoreTile
          image={image35}
          title={`Provide benefits`}
          subtitle={`Provide statuory benefits and global health insurance`}
          bg={`f2ecf8`}
        />
        <LearnMoreTile
          image={image35}
          title={`Stay compliant`}
          subtitle={`Stay 100% compliant in all countries with our platform`}
          bg={`f8ecec`}
        />
      </div>
    </div>
  );
}

function LearnMoreTile({image,title,subtitle,bg}){
  return(
    <div className="">
       <div className={`flex flex-col gap-2 items-center   p-6 rounded-lg cursor-pointer `} style={{backgroundColor:`#${bg}`}}>
        <img src={image} alt="image" className="h-16" />
        <h2 className="text-xl font-bold text-gray-700">{title}</h2>
        <h3 className="text-gzray-600 w-3/4 text-center ">{subtitle}</h3>
      </div>
    </div>
  )
}
export default HowitWorks;
