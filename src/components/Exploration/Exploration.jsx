import React from "react";
import Maldive from "../../assets/images/maldive.png";
import ExplorationBox from "../ExplorationBox/ExplorationBox";
import Exploration1 from "../../assets/images/explorartion1.png";
import Exploration2 from "../../assets/images/explorartion2.png";
import Exploration3 from "../../assets/images/explorartion3.png";
import CustomButton from "../CustomButton/CustomButton";
3;

function Exploration() {
  const bgImage = {
    backgroundImage: `url(${Maldive})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "top right",
  };
  return (
    <div className="w-full container-padding text-white" style={bgImage}>
      <div
        className="text-center py-10 bg-green-500d border-b"
        data-aos="fade-down"
        data-aos-duration="500"
      >
        <p className="text-3xl lg:text-4xl  xl:text-6xl font-extrabold tracking-widest">
          EXPLORE MALDIVE
        </p>
      </div>
      <div className="py-10 grid place-items-center w-full xl:grid-cols-2 px-5">
        <div
          className=" space-y-20 sm:w-full sm:grid sm:grid-cols-3 sm:justify-items-center sm:place-items-end xl:order-1 gap-5"
          data-aos="zoom-in-down"
          data-aos-duration="500"
        >
          <ExplorationBox location="Azure Haven" image={Exploration1} />
          <ExplorationBox location="Serene Sanctuary" image={Exploration2} />
          <ExplorationBox location="Verdant Vista" image={Exploration3} />
        </div>
        <div
          className="space-y-10 container-margin bg-green-100s flex flex-col items-center text-center max-w-2xl xl:px-16 "
          data-aos="zoom-in-down"
          data-aos-duration="500"
        >
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s.
          </p>
          <CustomButton className="bg-white text-black" name="See all" />
        </div>
      </div>
    </div>
  );
}

export default Exploration;
