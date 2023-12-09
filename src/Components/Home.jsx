import React from "react";
import Hero from "./Hero";
import Trusted from "./Trusted";
import HirePay from './HirePay'
import Featured from "./Featured";
import Testimonial from './Testimonial'
import Newsletter from './Newsletter'
const Home = () => {
  return (
    <div>
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
