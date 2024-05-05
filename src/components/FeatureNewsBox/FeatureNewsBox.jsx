import React from "react";
import { TfiArrowCircleRight } from "react-icons/tfi";
import { MdDateRange } from "react-icons/md";

function FeatureNewsBox({ image, date, title, description }) {
  return (
    <div
      className="bg-white w-[225px] h-[450px] sm:w-[250px]  md:w-[300px]  rounded-2xl overflow-hidden drop-shadow-md cursor-pointer"
      data-aos="fade-right"
      data-aos-duration="1000"
    >
      <img
        src={image}
        alt="image"
        className="w-full h-[40%] object-cover object-top hover:scale-110 transition duration-700 hover:skew-x-2"
      />
      <div className=" flex flex-col justify-between gap-y-5 p-5">
        <div className="space-y-2">
          <div className="flex items-center gap-x-3 text-sm">
            <MdDateRange className="text-xl" />
            <p className="">{date}</p>
          </div>
          <h2 className="line-clamp-2">{title}</h2>
        </div>
        <p className="line-clamp-3">{description}</p>
        <div className="flex items-center gap-x-3 text-sm text-primary">
          <TfiArrowCircleRight />
          <p>See more</p>
        </div>
      </div>
    </div>
  );
}

export default FeatureNewsBox;
