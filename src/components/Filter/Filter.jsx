import React from "react";
import { SlLocationPin } from "react-icons/sl";
import { MdDateRange } from "react-icons/md";
import { FiSearch } from "react-icons/fi";
import { BsPeople } from "react-icons/bs";

function Filter() {
  return (
    <div className="w-full px-2  xl:container lg:bg-white lg:drop-shadow-xl lg:rounded-2xl max-sm:pt-[45%] max-sm:pb-[20%] sm:max-lg:pt-[30%] sm:max-lg:pb-[10%]  lg:py-10 lg:space-y-5 max-lg:space-y-20 max-lg:bg-gradient-to-b max-lg:from-white/70 from-30% max-lg:via-primary/60 via-40% max-lg:to-transparent  lg:absolute lg::transform lg:-bottom-0 lg:left-1/2 lg:-translate-x-1/2 lg:translate-y-1/2  ">
      <div
        className="space-y-8 lg:space-y-5 "
        data-aos="zoom-in-down"
        data-aos-duration="500"
        data-aos-once="true"
      >
        <p className="text-3xl lg:text-4xl font-extrabold max-lg:text-center text-primary">
          Good Morning !
        </p>
        <p className="text-xl lg:text-2xl font-extrabold max-lg:text-center max-lg:px-5">
          Explore beautiful places in the world with Acenda
        </p>
      </div>
      <form className="lg:bg-transparent lg:rounded-full grid grid-cols-1 lg:grid-cols-4 gap-8 lg:border px-5 lg:py-4">
        <div
          className="filter-item-container lg:border-r"
          data-aos="zoom-out-right"
          data-aos-duration="500"
        >
          <div className="filter-item ">
            <SlLocationPin className="text-2xl" />
            <div>
              <p className="">Location</p>
              <input
                type="text"
                className="input-style"
                placeholder="Add destination"
                required
              />
            </div>
          </div>
        </div>
        <div
          className="filter-item-container lg:border-r"
          data-aos="zoom-out-right"
          data-aos-duration="500"
        >
          <div className="filter-item">
            <MdDateRange className="text-2xl" />
            <div>
              <p className="">Check in</p>
              <input type="date" className="input-style" required />
            </div>
          </div>
        </div>
        <div
          className="filter-item-container lg:border-r"
          data-aos="zoom-out-right"
          data-aos-duration="500"
        >
          <div className="filter-item">
            <MdDateRange className="text-2xl" />
            <div>
              <p className="">Check out</p>
              <input type="date" className="input-style" required />
            </div>
          </div>
        </div>
        <div
          className="filter-item-container"
          data-aos="zoom-out-right"
          data-aos-duration="500"
        >
          <div className="lg:flex lg:justify-between w-full">
            <div className="filter-item ">
              <BsPeople className="text-2xl" />
              <div>
                <p className="">Guests</p>
                <input
                  type="text"
                  className="input-style"
                  placeholder="Add guests"
                  required
                />
              </div>
            </div>
            <div className="max-lg:hidden bg-primary hover:scale-105 duration-300 text-white min-w-[60px] min-h-[60px] flex justify-center items-center cursor-pointer rounded-full ">
              <FiSearch className="text-4xl" />
            </div>
          </div>
        </div>

        <div
          className="lg:hidden flex justify-center lg:justify-center items-center"
          data-aos="zoom-out-right"
          data-aos-duration="500"
        >
          <button className="bg-primary hover:scale-105 duration-300 text-white py-4 px-4 rounded-full w-full">
            Search
          </button>
        </div>
      </form>
    </div>
  );
}

export default Filter;
