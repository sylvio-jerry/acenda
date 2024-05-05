import React from "react";
function ReasonBox({ icon, title, description }) {
  return (
    <div
      className=" flex flex-col items-center gap-y-8 w-[250px]"
      data-aos="fade-down-right"
      data-aos-duration="1500"
    >
      <div className="flex justify-center items-center bg-primary/20 p-3 rounded-2xl">
        <img src={icon} alt="icon" className="w-[40px] h-[40px] object-cover" />
      </div>
      <div className="space-y-3">
        <h2>{title}</h2>
        <p className="line-clamp-3">{description}</p>
      </div>
    </div>
  );
}

export default ReasonBox;
