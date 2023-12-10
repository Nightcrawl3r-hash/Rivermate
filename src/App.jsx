import React from "react";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import HowitWorks from "./Components/HowitWorks";
import Pricing from "./Components/Pricing";
import Manifesto from './Components/Manifesto'
import Partners from "./Components/Partners";
import Company from "./Components/Company";
const App = () => {
  return (
    <div className="bg-[#fff5ed]">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/HowitWorks" element={<HowitWorks />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/manifesto" element={<Manifesto/>} />
          <Route path="/partners" element={<Partners />} />
          <Route path="/company" element={<Company />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
