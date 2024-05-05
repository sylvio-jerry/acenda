import React from "react";
import { LiaStarSolid } from "react-icons/lia";

function TestimonialBox({ image, name, profile, stars, job }) {
  const starArray = Array.from({ length: 5 }, (_, index) => (
    <LiaStarSolid
      key={index}
      className={`text-sm ${
        index < Math.round(stars) ? "text-yellow-500" : "text-gray-400"
      }`}
    />
  ));
  return (
    <div
      className="bg-white w-[225px] h-[240px] sm:w-[250px]  md:w-[300px] h-fitd rounded-xl drop-shadow-xl p-5 gap-y-5 relative flex flex-col justify-between"
      data-aos="fade-right"
      data-aos-duration="1500"
    >
      <div className="drop-shadow-md absolute  transform -translate-y-3/4 translate-x-1/4 border-2 md:border-4 border-white rounded-full cursor-pointer">
        <img
          src={image}
          alt="image"
          className="w-[60px] h-[60px] object-cover object-center hover:scale-110 transition duration-700 hover:skew-x-2 "
        />
      </div>
      <div className="flex justify-between pt-10 ">
        <div>
          <p className="text-sm font-semibold">{name}</p>
          <p className="text-xs text-black ">{job}</p>
        </div>
        <div className="flex items-center  ">
          {starArray.map((star, index) => (
            <div key={index}>{star}</div>
          ))}
        </div>
      </div>
      <div className=" ">
        <p className="text-sm text-black/80 tracking-wider line-clamp-4">
          {profile}
        </p>
      </div>
    </div>
  );
}

export default TestimonialBox;
