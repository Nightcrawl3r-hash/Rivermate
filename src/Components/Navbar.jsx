import React, { useState } from "react";
import { FiAlignRight } from "react-icons/fi";
import { NavLink } from "react-router-dom";
import Logo from "./Logo";
import Button from "./Button";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="fixed top-0 left-0 w-full z-50 bg-gray-100 shadow-xl">
      <div className="py-2 container mx-auto px-2 md:px-0 lg:px-0">
        <div className="grid md:grid-cols-3 lg:grid-cols-4 items-center">
          <Logo />

          {/* Hamburger Icon for Mobile */}
          <div className="md:hidden col-start-3 flex justify-end">
            <button className="text-xl focus:outline-none" onClick={toggleMenu}>
              <FiAlignRight size={32} className="text-[#dc2626]" />
            </button>
          </div>

          {/* Navigation Links for Larger Screens */}
          <div className="hidden md:flex col-span-2 gap-x-4 lg:gap-x-8 justify-center">
            <NavLink to="/" className="hover:text-[#dc2626]">
              Home
            </NavLink>
            <NavLink to="pricing" className="hover:text-[#dc2626]">
              Pricing
            </NavLink>
            <NavLink to="HowitWorks" className="hover:text-[#dc2626]">
              How it works
            </NavLink>
            <NavLink to="manifesto" className="hover:text-[#dc2626]">
              Manifesto
            </NavLink>
            <NavLink to="partners" className="hover:text-[#dc2626]">
              Partners
            </NavLink>
            <NavLink to="company" className="hover:text-[#dc2626]">
              Company
            </NavLink>
          </div>

          {/* Join Class Now Button for Larger Screens */}
          <NavLink to="contact" className="hidden lg:flex justify-end">
            <Button text={"Create account"} />
          </NavLink>
        </div>

        {/* Mobile Navigation Menu */}
        {menuOpen && (
          <div className="md:hidden flex flex-col items-center mt-4">
            <NavLink to="/" className="hover:text-[#dc2626] mb-4">
              Home
            </NavLink>
            <NavLink to="pricing" className="hover:text-[#dc2626] mb-4">
              Pricing
            </NavLink>
            <NavLink to="HowitWorks" className="hover:text-[#dc2626] mb-4">
              How it works
            </NavLink>
            <NavLink to="manifesto" className="hover:text-[#dc2626] mb-4">
              Manifesto
            </NavLink>
            <NavLink to="partners" className="hover:text-[#dc2626] mb-4">
              Partners
            </NavLink>
            <NavLink to="company" className="hover:text-[#dc2626] mb-4">
              Company
            </NavLink>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
