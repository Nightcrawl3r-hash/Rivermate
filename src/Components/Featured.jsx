import React from "react";
import image1 from "../assets/6.webp";
import image7 from "../assets/7.webp";
import image8 from "../assets/8.webp";
import image9 from "../assets/9.webp";
import Home_grid from "./Home_grid";
const Featured = () => {
  return (
    <div className="container m-auto py-16">
      <div className="flex flex-col gap-8">
        <Home_grid
          image={image1}
          title={`Hire remote exployees`}
          subtitle={`Effortlessly hire remote employees in 150 countries - in just a few clicks. 6x cheaper than other vendors and 10x cheaper than old-school vendors.`}
          text3={`You don't have to open an entity, we hire the employee for you`}
          text1={`We take care of payroll, benefits, taxes and compliance`}
          text2={`Onboard employees in less than 10 minutes via the platform`}
          text={"See global employment"}
          order={`order-last`}
        />

        <Home_grid image={image7}
        title={`All things in one dashboard`}
        subtitle={`Onboard, manage and pay your employees from one place. Invite your employees to the dashboard, so they can self-onboard.`}
        text1={`Manage time off and expense reimbursements`}
        text2={`
        Pay your entire team in just a few clicks`}
        text={`Check out the dashboard`}
        order={``}/>

        <Home_grid image={image8}
        title={`Offer benefits to your global team`}
        subtitle={`In a few clicks you can add global health insurance coverage to your team. Fully integrated into the platform.`}
        text1={`Offer your employees a global health insurance plan`}
        text2={`Automatically cover all statuory benefits`}
        text={`View benefits`}
        order={` order-last`}/>

        <Home_grid image={image9}
        title={`Stay 100% compliant`}
        subtitle={`With a local team in every single country, we make sure that you and your employees stay compliant with the ever-changing laws.`}
        text1={`We monitor local law changes and communicate this with you`}
        text2={`Our contracts are 100% compliant with local law`}
        text={`See compliance`}
        order={``}/>
      </div>
    </div>
  );
};

export default Featured;
