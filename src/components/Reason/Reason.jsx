import React from "react";
import ReasonBox from "../ReasonBox/ReasonBox";
import DollarIcon from "../../assets/icons/dollar.png";
import SecurityIcon from "../../assets/icons/security.png";
import RefreshIcon from "../../assets/icons/refresh.png";

function Reason() {
  const Reasons = [
    {
      icon: DollarIcon,
      title: "Competitive Prices",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum",
    },
    {
      icon: SecurityIcon,
      title: "Secure Booking",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum",
    },
    {
      icon: RefreshIcon,
      title: "Seamless Experience",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum",
    },
  ];
  return (
    <div className="mt-[15%] lg:mt-[25%] xl:mt-[20%] 2xl:mt-[15%]">
      <div className="flex flex-col items-center text-center gap-y-10">
        <h1 
        data-aos="fade-down" data-aos-duration="500"
        >
          WHY CHOOSE US ?
        </h1>
        <div className="grid lg:grid-cols-3 place-items-center max-lg:gap-16 w-full container-padding">
          {Reasons.map((reason, index) => (
            <ReasonBox key={index} {...reason} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Reason;
