import React from "react";

function ExplorationBox({ location, image }) {
  return (
    <div
      className="space-y-5 w-[200px] h-[250px] xl:w-[180px]  lg:h-[240px] overflow-hidden rounded-xl"
    >
      <img
        src={image}
        className="w-full h-full object-contain object-top rounded-xl hover:scale-110 transition duration-700 hover:skew-x-2 cursor-pointer"
      />
      <p className="text-center">{location}</p>
    </div>
  );
}

export default ExplorationBox;
