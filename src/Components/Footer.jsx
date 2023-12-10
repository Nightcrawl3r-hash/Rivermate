import React from "react";
import Logo from "./Logo";
import { FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-gray-950 rounded-t-xl  container m-auto  mt-12 justify-center">
      <div className="grid grid-cols-4  lg:grid-cols-5 gap-4 text-gray-300 p-16 ">
        <div className="flex md:col-span-4 lg:col-span-1 md:items-center lg:items-start  flex-col gap-y-6">
          <Logo />
          <h2 className="text-gray-400">
            We will help you hire anyone, anywhere
          </h2>
          <div className="flex flex-col">
            <span className="">
              Email:
              <a href="mailto:xyz@gmail.com" className="">
                Xyz@gmail.com
              </a>
            </span>
            <span className="">
              Phone:<a href="#">+977 980000000000</a>
            </span>
          </div>
          <section className="flex gap-x-4">
            <FaLinkedin
              size={24}
              className="hover:text-blue-700 cursor-pointer"
            />
            <FaTwitter
              size={24}
              className="hover:text-blue-700 cursor-pointer"
            />
          </section>
          <p className="text-gray-500">Copyright &copy;Rivemate</p>
        </div>
        <div className="">
          <h2 className="text-gray-400 text-xl  font-semibold pb-3">Product</h2>
          <section className="flex flex-col gap-y-2">
            <SecondaryLink text={`Hire employees`} />
            <SecondaryLink text={`Manage your team`} />
            <SecondaryLink text={`Provide benefits`} />
            <SecondaryLink text={`Stay compliant`} />
            <SecondaryLink text={`Pricing`} />
          </section>
        </div>
        <div className="">
          <h2 className="text-gray-400 text-xl  font-semibold pb-3">Company</h2>
          <section className="flex flex-col gap-y-2">
            <SecondaryLink text={`Manifest`} />
            <SecondaryLink text={`About`} />
            <SecondaryLink text={`Security`} />
            <SecondaryLink text={`Blog`} />
            <SecondaryLink text={`Contact`} />
            <SecondaryLink text={`EoR guides`} />
            <SecondaryLink text={`Hiring guides`} />
            <SecondaryLink text={`Payroll guides`} />
          </section>
        </div>
        <div className="">
          <h2 className="text-gray-400 text-xl  font-semibold pb-3">
            Dashboard
          </h2>
          <section className="flex flex-col gap-y-2">
            <SecondaryLink text={`Register account`} />
            <SecondaryLink text={`Log in`} />
          </section>
        </div>
        <div className="">
          <h2 className="text-gray-400 text-xl  font-semibold pb-3">Legal</h2>
          <section className="flex flex-col gap-y-2">
            <SecondaryLink text={`Disclaimer`} />
            <SecondaryLink text={`Terms of Service`} />
            <SecondaryLink text={`Privacy Policy`} />
            <SecondaryLink text={`Cookie Policy`} />
            <SecondaryLink text={`EoR agreement`} />
          </section>
        </div>
      </div>
    </div>
  );
};

function SecondaryLink({ text }) {
  return <h3 className="">{text}</h3>;
}
export default Footer;
