import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

function CustomButton({ name, className }) {
  return (
    <div
      className={`flex justify-center items-center gap-x-2 w-[200px]  border rounded-full px-4 py-3 hover:scale-105 transition cursor-pointer duration-300 ${className}`}
    >
      <p className="text-center text-base font-bold">{name}</p>
      <FaArrowRightLong />
    </div>
  );
}

export default CustomButton;
