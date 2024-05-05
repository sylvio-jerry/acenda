import React from "react";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";

function ArrowBox({ icon,background }) {
  return (
    <div className={`cursor-pointer p-1 border drop-shadow-md rounded-xl ${background} `}>
      {icon}
    </div>
  );
}

export default ArrowBox;
