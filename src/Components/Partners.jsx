import React from "react";
import Newsletter from "./Newsletter";
import image1 from "../assets/10.webp";
import Button from "./Button";
import Tile from "./Tile";
import image5 from "../assets/2.webp";
import image2 from "../assets/11.webp";
import image3 from "../assets/12.webp";
import image4 from "../assets/13.webp";
import image14 from "../assets/14.webp";
import image15 from "../assets/15.webp";
import image16 from "../assets/6.webp";
const Partners = () => {
  return (
    <div className="container m-auto px-2 lg:px-0">
      <div className="grid lg:grid-cols-2 lg:gap-8 items-center justify-center py-16 h-screen">
        <div className="overflow-hidden">
          <h1 data-aos="zoom-in-up" className=" text-5xl md:text-6xl font-extrabold text-gray-800 pb-4">
            Do you offer Employer of Record services in your country? Partner up
            with us.
          </h1>
          <p data-aos="fade-up" className="text-xl font-extralight pb-4">
            You offer local Employer of Record services in your country and you
            would like to get more business in? Join our preferred partner
            network to unlock your services to millions of employers.
          </p>
          <Button text={`Talk to us`} />
        </div>
        <div className=" overflow-hidden order-first lg:order-last">
          <img data-aos="zoom-in" src={image1} alt="image" className="md:p-6 lg:p-0" />
        </div>
      </div>
      <div className=" grid md:grid-cols-2 lg:grid-cols-4 gap-4 my-8">
        <Tile
          image={image5}
          title={`Free sales channel`}
          subtitle={`Get access to an extra sales channel without any extra costs`}
        />
        <Tile
          image={image2}
          title={`Global customers`}
          subtitle={`Directly get access to millions of customers around the globe.`}
        />
        <Tile
          image={image3}
          title={`No risk`}
          subtitle={`Only pay a management fee once you have sold a service.`}
        />
        <Tile
          image={image4}
          title={`Take control of service`}
          subtitle={`Control pricing and services for your team and customers.`}
        />
      </div>
      <div className="flex flex-col gap-8 py-8">
        <PricingTile
          image={image16}
          title={`Are you a fit?`}
          description={`We offer Employer of Record services, payroll services and work permits in 150 countries. We do this through a large partner network. If you offer these services in your country or multiple countries without outsourcing the service, then you are a good fit for a partnership!`}
        />
        <PricingTile
          image={image14}
          title={`How does it work?`}
          description={`You sign up to our partner platform and select the services and countries you serve. Set a price, and you are in! We will promote the service through our marketing and platform channels. Once you get a lead, we will notify you. We collect the payment and send you the monthly payroll.`}
          order={`order-first`}
        />
        <PricingTile
          image={image15}
          title={`Next steps?`}
          description={`Plan in a call with us to get started. During our 30 minute call we discover if there's a potential for a partnership. Once we have identified a potential partnership, we sent you the onboarding link and you can onboard yourself.`}
        />
      </div>
      <Newsletter />
    </div>
  );
};

function PricingTile({ title, description, image,order }) {
  return (
    <div data-aos="fade-right" className="grid md:grid-cols-2 gap-12">
      <div className="flex flex-col  justify-center">
        <h2 className="text-4xl font-semibold pb-2 text-gray-800">{title}</h2>
        <p className="text-xl font-extralight text-gray-700">{description}</p>
      </div>
      <div className={` ${order}`}>
        <img src={image} alt="image" className="rounded-xl  w-full" />
      </div>
    </div>
  );
}

export default Partners;
