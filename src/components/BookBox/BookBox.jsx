import React from "react";
import { SlLocationPin } from "react-icons/sl";
import { LiaStarSolid } from "react-icons/lia";

function BookBox({ stars, name, location, image, price }) {
  return (
    <div
      className=" w-[250px] h-[350px] relative rounded-t-2xl overflow-hidden"
      data-aos="fade-down"
      data-aos-duration="500"
    >
      <div className="overflow-hidden">
        <img
          src={image}
          className="h-[250px] cursor-pointer w-full object-cover transition duration-700 hover:-skew-x-2 hover:scale-110  rounded-2xl "
        />
      </div>
      <div className="flex items-center h-[30px]s gap-x-1 bg-black/50 w-fit px-2 py-1 rounded-md absolute top-5 right-5">
        <LiaStarSolid className="text-yellow-500 text-base lg:text-lg" />
        <p className="text-xs lg:text-sm text-white/75">{stars}</p>
      </div>
      <div className="flex justify-between items-start my-5 px-2">
        <div>
          <p className="font-semibold text-sm">{name}</p>
          <div className="flex gap-x-2 items-center">
            <SlLocationPin className="text-2xl" />
            <p className="text-xs md:text-sm text-black/60">{location}</p>
          </div>
        </div>
        <p className="font-semibold text-sm">{price}</p>
      </div>
    </div>
  );
}

export default BookBox;
