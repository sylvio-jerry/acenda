import React from "react";
import rectangle2 from "../../assets/images/maldive.png";

function Offer() {
  return (
    <div className="container container-margin container-padding"  data-aos="fade-up"
    data-aos-duration="500 " id="contact">
      <div className="bg-gray-100 w-full md:h-[360px] grid md:grid-cols-2 lg:grid-cols-3 place-items-center rounded-xl overflow-hidden gap-y-5">
        <div className="w-full h-full ">
          <img src={rectangle2} className="w-full h-full  object-cover" />
        </div>
        <form className="p-5 lg:p-10 lg:col-span-2 max-w-[600px]">
          <div className="space-y-8" >
            <h1 className="text-center">
              Get special offers, and more from travelworld
            </h1>
            <div className="bg-white w-full  px-3 rounded-full shadow-xl  flex justify-between items-center h-[60px] py-2">
              <input
                type="text"
                placeholder="Enter your email"
                className="w-[50%] lg:w-[300px] h-full outline-none bg-transparent"
              />
              <button className="px-3 h-full bg-primary text-white rounded-full ">
                Subscribe
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Offer;
