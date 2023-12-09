import React from "react";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Trusted from "./Components/Trusted";
import HirePay from "./Components/HirePay";

import Featured from "./Components/Featured";
import Testimonial from "./Components/Testimonial";
import Footer from "./Components/Footer";
import Newsletter from "./Components/Newsletter";
const App = () => {
  return (
    <div className="bg-[#fff5ed]">
      <Navbar />
      <Hero />
      <Trusted />
      <HirePay />
      <Featured />
      <Testimonial/>
      <Newsletter/>
      <Footer/>
    </div>
  );
};

export default App;
