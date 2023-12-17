import React from "react";
import PricingTile from "./PricingTile";
import { TiTick } from "react-icons/ti";
import Newsletter from "./Newsletter";
import FAQ from "./FAQ";


const Pricing = () => {
  return (
    <div className=" overflow-hidden container m-auto pt-20 px-2 lg:p-0">
      <h1 data-aos="fade-down" className=" text-6xl font-extrabold text-gray-800 text-center pt-20">
        Pricing finally done right
      </h1>

      <p data-aos="flip-down" className="text-lg font-extralight lg:px-60 text-center pt-4">
        Our billing is monthly and you will only be charged a flat rate once you
        have added a new employee. No minimum costs, no contracts, no hidden
        costs. Just simple, transparent pricing.
      </p>

      <h2 data-aos="fade-down" className=" text-xl text-center font-bold text-gray-800 ">
        Cancel anytime
      </h2>
      <div className="grid md:grid-cols-2  gap-x-4 lg:gap-x-16 py-8">
        <div className="bg-white p-8 rounded-2xl ">
          <PricingTile
            title={`Hire remote employees`}
            subtitle={`From €239 per employee per month`}
            link={`Click here to view our pricing per country`}
            description={`Hire full-time employees in 150+ countries without having to set up a legal entity and pay them in one single invoice`}
            text1={`Hire employees in 150+ countries`}
          />
          <section className=" flex flex-col gap-2">
            <TickText text1={`Hire employees in 250+ countries`} />
            <TickText text1={`Employee self-onboarding`} />
            <TickText text1={`Locally compliant contracts`} />
            <TickText
              text1={`Manage payroll, compliance and onboarding, all in one place`}
            />
            <TickText text1={`Pay your team in over 120 currencies`} />
            <TickText text1={`Fund payroll in just one click`} />
            <TickText text1={`IP Protection`} />
            <TickText text1={`24/7 customer service`} />
            <TickText text1={`Add-on: Health insurance`} />
          </section>
        </div>

        <div className="bg-white p-8 rounded-2xl ">
          <PricingTile
            title={`Hire contractors`}
            subtitle={`From €39 per contractor per month`}
            link={`Coming soon!`}
            description={`Hire contractors in 150+ countries without having to worry about compliance or payroll and pay them in one single invoice`}
            text1={`Hire contractors in 150+ countries`}
          />
          <section className=" flex flex-col gap-2">
            <TickText text1={`Hire contractors in 250+ countries`} />
            <TickText text1={`Contractors self-onboarding`} />
            <TickText text1={`Locally compliant contracts`} />
            <TickText
              text1={`Manage payroll, compliance and onboarding, all in one place`}
            />
            <TickText text1={`Pay your team in over 120 currencies`} />
            <TickText text1={`Fund payroll in just one click`} />
            <TickText text1={`IP Protection`} />
            <TickText text1={`24/7 customer service`} />
            <TickText text1={`Add-on: Health insurance`} />
          </section>
        </div>
      </div>
      <section className="flex flex-col gap-y-8 py-8">
        <div data-aos="fade-right" className="bg-white p-6 rounded-2xl">
          <FullTile
            title={`Global health insurance`}
            subtitle={`From €70 to €840 per employee per month`}
            description={`Add global health insurance to your contractors and employees in your team`}
          />
          <div className="flex flex-col gap-y-2">
            <TickText text1={`Worldwide coverage`} />
            <TickText text1={`Screenings & vaccines`} />
            <TickText text1={`€0 deductible`} />
            <TickText text1={`Outpatient`} />
            <TickText text1={`Dental`} />
            <TickText text1={`Maternity`} />
            <TickText text1={`Vision`} />
            <TickText text1={`Family members`} />
          </div>
        </div>
        <div data-aos="fade-right" className="bg-white p-6 rounded-2xl">
          <FullTile
            title={`Visa & mobility sponsorship`}
            subtitle={`€2500 per visa`}
            description={`Give your employees the option to move anywhere they want`}
          />
          <div className="flex flex-col gap-y-2">
            <TickText text1={`Coverage in 150 countries`} />
            <TickText text1={`A-Z process taken care off.`} />
          </div>
        </div>
      </section>
      <FAQ/>
      <Newsletter/>
    </div>
  );
};

function FullTile({ title, subtitle, description }) {
  return (
    <div  className="flex flex-col gap-y-2 py-2">
      <p className="text-3xl font-extrabold text-gray-800">{title}</p>
      <h2 className="font-semibold text-gray-800">{subtitle}</h2>
      <h3 className="text-gray-800 font-extralight">{description}</h3>
    </div>
  );
}

function TickText({ text1 }) {
  return (
    <>
      <p className="flex gap-1 items-center text-gray-800">
        <span className="">
          <TiTick />
        </span>
        {text1}
      </p>
    </>
  );
}

export default Pricing;
