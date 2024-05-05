import React from "react";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import FeatureNewsBox from "../FeatureNewsBox/FeatureNewsBox";
import news1 from "../../assets/images/news1.png";
import news2 from "../../assets/images/news2.png";
import news3 from "../../assets/images/news3.png";
import Slider from "react-slick";
import ArrowBox from "../ArrowBox/ArrowBox";

function FeatureNews() {
  const features = [
    {
      image: news1,
      date: "February 20, 2024",
      title: "Delicious restaurant at Hanalei Bay",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typeset industry. Lorem Ipsum has been lorem.",
    },
    {
      image: news2,
      date: "Mach 27, 2024",
      title: "Top 10 most beautiful check-in spots in Ph ...",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typeset industry. Lorem Ipsum has been lorem.",
    },
    {
      image: news3,
      date: "April 13, 2024",
      title: "Top 5 newest services at Navagio Beach",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typeset industry. Lorem Ipsum has been lorem.",
    },
  ];
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    mobileFirst: true,
    lazyLoad: true,
    centerMode: true,
    arrows:false,
    responsive: [
      {
        breakpoint: 1590,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1355,
        settings: {
          slidesToShow: 1.5,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1.4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1.2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 580,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 420,
        settings: {
          slidesToShow: 0.9,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="container container-padding container-margin" id="news" >
      <div className="space-y-10">
        <div className="flex items-center justify-between">
          <h1>Feature News</h1>
          <div className="flex gap-x-3 text-4xl">
            {
              <ArrowBox
                icon={<MdOutlineKeyboardArrowLeft />}
                background="bg-white"
              />
            }
            {
              <ArrowBox
                icon={<MdOutlineKeyboardArrowRight />}
                background="bg-white"
              />
            }
          </div>
        </div>
        <div className="w-full py-10 ">
          <Slider {...settings}>
            {features.map((feature, index) => (
              <FeatureNewsBox key={index} {...feature} />
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default FeatureNews;
