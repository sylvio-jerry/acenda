import React from "react";
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";
import Maldive from "../../assets/images/maldive3.jpg";
import user1 from "../../assets/images/user1.png";
import user2 from "../../assets/images/user2.png";
import user3 from "../../assets/images/user3.png";
import TestimonialBox from "../TestimonialBox/TestimonialBox";
import Slider from "react-slick";
import ArrowBox from "../ArrowBox/ArrowBox";

function Testimonial() {
  const bgImage = {
    backgroundImage: `url(${Maldive})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "top right",
  };
  const testimonials = [
    {
      image: user1,
      name: "Sebastian",
      job: "Graphic design",
      profile:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.",
      stars: 4.8,
    },
    {
      image: user2,
      name: "Evangeline",
      job: "Model",
      profile:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.",
      stars: 4.2,
    },
    {
      image: user3,
      name: "Software engineer",
      job: "Graphic design",
      profile:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.",
      stars: 3.4,
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
    <div className="w-full container-padding container-margin" style={bgImage} id="blog" >
      <div className="container">
        <div className="space-y-10">
          <div className="flex items-center justify-between">
            <h1 className="text-white">Testimonials</h1>
            <div className="flex gap-x-3 text-4xl">
              {
                <ArrowBox
                  icon={<MdOutlineKeyboardArrowLeft color="white" />}
                  background="bg-transparent"
                />
              }
              {
                <ArrowBox
                  icon={<MdOutlineKeyboardArrowRight color="white" />}
                  background="bg-transparent"
                />
              }
            </div>
          </div>
          <div className="w-full py-10">
            <Slider {...settings}>
              {testimonials.map((item, index) => (
                <TestimonialBox key={index} {...item} />
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
