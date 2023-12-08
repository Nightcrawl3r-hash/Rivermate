import React from "react";
import Button from "./Button";
import { TiTick } from "react-icons/ti";

const Home_grid = ({
  image,
  title,
  subtitle,
  text1,
  text2,
  text3,
  text,
  order,
}) => {
  return (
    <div className="">
      <div className="grid grid-cols-2 gap-4   ">
        <div className={`  ${order}`}>
          <img src={image} alt="image" className="rounded-lg h-4/5 " />
        </div>
        <div className="py-2 ">
          <div className="flex flex-col gap-2">
            <h2 className="text-3xl font-bold">{title}</h2>
            <h3 className="text-lg font-bold text-gray-900">{subtitle}</h3>
            <h4 className="flex items-center gap-1  text-thin text-gray-800">
              <TiTick />
              {text1}
            </h4>
            <h4 className="flex items-center gap-1  text-thin text-gray-800">
              <TiTick />
              {text2}
            </h4>
            {text3 ? (
              <h4 className="flex items-center gap-1  text-thin text-gray-800">
                <TiTick />
                {text3}
              </h4>
            ) : null}
          </div>
          <div className="pt-4">
            <Button text={text} />
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default Home_grid;
