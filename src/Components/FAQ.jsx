import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { RiArrowDropDownLine } from "react-icons/ri";

const FAQ = () => {
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (dropdownNumber) => {
    setOpenDropdown(openDropdown === dropdownNumber ? null : dropdownNumber);
  };

  return (
    <div className=" overflow-hidden container m-auto py-16">
      <h1 className="text-center text-5xl font-extrabold text-gray-800 pb-2">
        Frequently asked questions
      </h1>
      <p className="text-center text-gray-700 font-extralight text-xl">
        Our team is here to answer any questions you might have.
      </p>
      <section className="text-center">
        <NavLink className="text-gray-800">Get in touch</NavLink>
      </section>

      <div className=" flex flex-col gap-y-8 py-8">
        {[1, 2, 3, 4].map((dropdownNumber) => (
          <div
            key={dropdownNumber}
            className="bg-white p-8 cursor-pointer hover:bg-[#D6CBC1] grid lg:w-1/2 m-auto rounded-lg transition-all duration-300 ease-in"
          >
            <button
              className="flex flex-row items-center justify-between"
              onClick={() => toggleDropdown(dropdownNumber)}
            >
              <p className="text-2xl font-bold text-gray-800">
                {dropdownNumber === 1 && "What does employer of record mean?"}
                {dropdownNumber === 2 && "Can I cancel anytime?"}
                {dropdownNumber === 3 &&
                  "What is the difference between a contractor and an employee?"}
                {dropdownNumber === 4 &&
                  "How does invoicing and billing work?"}
              </p>
              <RiArrowDropDownLine size={36} className="" />
            </button>
            <div
              className={` ${
                openDropdown === dropdownNumber
                  ? "opacity-100 max-h-[1000px]"
                  : "opacity-0 max-h-0 overflow-hidden"
              }`}
            >
              {/* Content for the current dropdown */}
              {dropdownNumber === 1 && (
                <p data-aos="fade-down" className="font-extralight text-gray-800">
                  On the 10th of every month, we issue you with an invoice bill.
                  This includes payroll, taxes, benefits, expenses, and any
                  bonuses or commissions. Within this invoice, you will also
                  find our management fee which is how much we charge for a
                  contractor or employee. The invoice will be in your home
                  currency. You pay Rivermate, and we will distribute the
                  payments to your team in their currency. We also file and pay
                  their taxes compliantly in their home country.
                </p>
              )}
              {dropdownNumber === 2 && (
                <p data-aos="fade-down" className="font-extralight text-gray-800">
                  Our pricing plan is a monthly plan, which means you can
                  cancel any time. The payments will stop as soon as you
                  offboard a contractor or an employee. No minimum costs, no
                  contracts, no hidden costs. Just simple, transparent pricing.
                </p>
              )}
              {dropdownNumber === 3 && (
                <div>
                  <p data-aos="fade-down" className="font-extralight text-gray-800">
                    An independent contractor is a worker outside of the
                    business. They are “independent” which means that they
                    could run their own businesses or do work outside your
                    company. A contractor is hired by a company to perform
                    tasks for the business. Typically, a contractor is given a
                    discrete project or a set of tasks to complete with minimal
                    direct supervision.
                  </p>
                  <p data-aos="fade-down" className="font-extralight text-gray-800">
                    An employee is employed to do any work-for-hire or reward
                    under an employment agreement. The hire or reward is almost
                    always a wage or salary.
                  </p>
                  <ul data-aos="fade-down" className="text-gray-800 font-extralight">
                    <li>At least the minimum wage</li>
                    <li>Holiday and leave enlightments</li>
                    <li>An employee agreement</li>
                  </ul>
                </div>
              )}
              {dropdownNumber === 4 && (
                <p data-aos="fade-down" className="font-extralight text-gray-800">
                  On the 10th of every month, we issue you with an invoice bill.
                  This includes payroll, taxes, benefits, expenses, and any
                  bonuses or commissions. Within this invoice, you will also
                  find our management fee which is how much we charge for a
                  contractor or employee. The invoice will be in your home
                  currency. You pay Rivermate, and we will distribute the
                  payments to your team in their currency. We also file and pay
                  their taxes compliantly in their home country.
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
