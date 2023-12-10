import React from "react";
import Hero from "./Hero";
import Trusted from "./Trusted";
import HirePay from './HirePay'
import Featured from "./Featured";
import Testimonial from './Testimonial'
import Newsletter from './Newsletter'
const Home = () => {
  return (
    <div className="px-2 lg:px-0">
      <Hero/>
      <Trusted />
      <HirePay />
      <Featured />
      <Testimonial />
      <Newsletter />
    </div>
  );
};

export default Home;
