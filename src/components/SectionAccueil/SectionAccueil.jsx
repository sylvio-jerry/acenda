import React from "react";
import Navbar from "../Navbar/Navbar";
import HomeBg from "../../assets/images/home_bg.png";
import Filter from "../Filter/Filter";

function SectionAccueil() {
  const bgImage = {
    backgroundImage: `url(${HomeBg})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "bottom right",
  };
  return (
      <div
        className="bg-red-50s w-full lg:h-[55vh] lg:relative"
        style={bgImage}
        id="home"
      >
        <Navbar />
        <Filter />
      </div>
  );
}

export default SectionAccueil;
