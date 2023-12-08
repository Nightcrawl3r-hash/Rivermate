import React from "react";
import image1 from "../assets/1.jpeg";
import image2 from "../assets/1.jpg";
const Testimonial = () => {
  return (
    <div className="container m-auto py-16 ">
      <h2 className="text-3xl font-semibold text-center text-gray-800 py-2">
        Why clients trust Rivermate
      </h2>
      <div className="grid grid-cols-2 gap-4 ">
        <TestimonialTile
          image={image2}
          name={`Naresh Rajbanshi`}
          position={`Founder of YXz`}
          text={`Highly recommended!`}
          description={`Hiring international employees was always a challenge for our company, but Rivermate's employer of record service streamlined everything. Their professionalism and expertise have been invaluable, allowing us to focus on growth while they handle the complexities. Highly recommended!`}
        />

        <TestimonialTile
          image={image1}
          name={`Skah van Bijnen`}
          position={`founder of Boloo`}
          text={`Their commitment is unmatched`}
          description={`We needed to hire someone in India. We don't have an entity in India so the process was quite complex, we thought. We sought the help of Rivermate. Their attention to detail, swift responses, and commitment to our company's needs have been unmatched. I can't imagine expanding our global team without them.`}
        />
      </div>
    </div>
  );
};

function TestimonialTile({ text, description, name, position, image }) {
  return (
    <div className="">
      <h2 className="">{text}</h2>
      <p className="">{description}</p>
      <section className="">
        <img src={image} alt="imageof a person" />
        <div className="">
          <span className="">{name}</span>
          <span className="">{position}</span>
        </div>
      </section>
    </div>
  );
}

export default Testimonial;
