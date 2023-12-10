import React from "react";
import Newsletter from "./Newsletter";
import image20 from "../assets/20.webp";
const Manifesto = () => {
  return (
    <div className="container m-auto pt-16">
      <div className="flex flex-col justify-center items-center py-16 ">
        <img src={image20} alt="image" />
        <h1 className="text-6xl w-1/2 text-center font-extrabold text-gray-800 ">
          Enable companies to hire anyone, anywhere
        </h1>
      </div>
      <section className="text-center flex flex-col gap-y-4 justify-center items-center py-4">
        <h2 className="text-3xl font-extrabold text-gray-800">The problem</h2>
        <p className="w-1/2  text-gay-700 font-extralight">
          Remote working is becoming the standard and this allows companies to
          attract talent from all around the globe.
        </p>
        <p className="w-1/2  text-gay-700 font-extralight">
          However hiring remote employees comes is extremely complex. Think
          about payroll, benefits, compliance, local taxes, which is different
          in every country.
        </p>
        <p className="w-1/2  text-gay-700 font-extralight">
          There is no one service that solves everything. The market is
          fragmented and in order to employ employees in more than one country,
          you would need to work with multiple vendors.
        </p>
      </section>

      <section className="text-center flex flex-col gap-y-4 justify-center items-center py-4 ">
        <h2 className="text-3xl font-extrabold text-gray-800">The options</h2>
        <p className="w-1/2  text-gay-700 font-extralight">
          There are three options to solve this problem. One of them is the
          best.
        </p>

        <Usable
          title={`  1.You could hire your employees as 'freelancers'.`}
          subtitle={`In most cases this means that your employees need to start a company
          themselves in order to send you an invoice for their work. A
          freelancer is not protected by local law, it's hard to get a mortgage
          and a pension is not available.`}
        />
        <Usable
          title={`2. You could set up an entity in the country where you want to hire an employee.`}
          subtitle={`However, setting up an entity comes with a lot of overhead. You might need a local director in the country you want to set up shop. You need a bank account, an office for an address, a local accountancy firm and some lawyers. The cost and time are simply not worth it.`}
        />
        <Usable
          title={`3. You make use of an 'Employer of Record' company.`}
          subtitle={`Basically this means that your employee is officially hired by a local company. They become the employer on record. You pay a monthly invoice to the company for the payroll. Your employee can now reap the benefits of employment and you don't have to set up your own entity. What a breeze! `}
        />
      </section>

      <section className="text-center flex flex-col gap-y-4 justify-center items-center py-4">
        <h2 className="text-3xl font-extrabold text-gray-800">The solution</h2>
        <p className="text-gray-700 font-extralight w-1/2">
          The last Employer of Record service is what most companies would want
          to use.
        </p>
        <p className="text-gray-700 font-extralight w-1/2">
          And that's where Rivermate comes in. We offer Employer of Record
          services in 150 countries. By working together with local payroll
          partners, we leverage their local expertise, without having to hire
          hundreds of employees to keep up with local regulations.
        </p>
        <p className="text-gray-700 font-extralight w-1/2">
          That means we can offer competitive pricing, while offering superior
          expertise in every corner of the world.
        </p>
      </section>
      <Newsletter />
    </div>
  );
};

function Usable({ title, subtitle }) {
  return (
    <>
      <div className="flex flex-col items-center">
        <h2 className=" text-xl font-semibold text-gray-800">{title}</h2>
        <p className="text-gray-700 font-extralight w-1/2">{subtitle}</p>
      </div>
    </>
  );
}

export default Manifesto;
