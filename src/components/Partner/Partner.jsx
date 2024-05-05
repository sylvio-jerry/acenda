import React from "react";
import Slider from "react-slick";
import partner1 from "../../assets/images/partner_1.png";
import partner2 from "../../assets/images/partner_2.png";
import partner3 from "../../assets/images/partner_3.png";
import partner4 from "../../assets/images/partner_4.png";
import partner5 from "../../assets/images/partner_5.png";
import partner6 from "../../assets/images/partner_6.png";

function Partner() {
  const partners = [
    {
      img: partner1,
    },
    {
      img: partner2,
    },
    {
      img: partner3,
    },
    {
      img: partner4,
    },
    {
      img: partner5,
    },
    {
      img: partner6,
    },
  ];
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    initialSlide: 0,
    mobileFirst: true,
    lazyLoad: true,
    centerMode: true,
    responsive: [
      {
        breakpoint: 1590,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2.5,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 580,
        settings: {
          slidesToShow: 1.5,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 420,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    // <div className="my-[15%] lg:my-[25%] xl:my-[20%] 2xl:my-[15%] bg-green-500">
    <div className="container-margin">
      <div className="flex flex-col items-center text-center gap-y-10">
        <h1 data-aos="fade-down" data-aos-duration="500">
          OUR PARTNERS
        </h1>
        <div className="w-full">
          <Slider {...settings}>
            {partners.map(({ img }, index) => (
              <img
                key={index}
                src={img}
                className="h-[66px]  object-contain w-[200px]"
              />
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default Partner;
