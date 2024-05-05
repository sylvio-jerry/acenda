import React from "react";
import BookBox from "../BookBox/BookBox";
import CustomButton from "../CustomButton/CustomButton";
import rectangle1 from "../../assets/images/rectangle1.png";
import rectangle2 from "../../assets/images/rectangle2.png";
import rectangle3 from "../../assets/images/rectangle3.png";
import rectangle4 from "../../assets/images/rectangle4.png";
import rectangle5 from "../../assets/images/rectangle5.png";
import rectangle6 from "../../assets/images/rectangle6.png";
import rectangle7 from "../../assets/images/rectangle7.png";
import rectangle8 from "../../assets/images/rectangle8.png";

function Book() {
  const books = [
    {
      image: rectangle1,
      name: "The Oasis",
      location: "Rio de Janeiro, Brazil",
      stars: 4.8,
      price: "$ 10,000",
    },
    {
      image: rectangle2,
      name: "The Sanctuary",
      location: "Bali, Indonesia",
      stars: 4.9,
      price: "$ 9,000",
    },
    {
      image: rectangle3,
      name: "The Infinity",
      location: "Sydney, Australia",
      stars: 5,
      price: "$ 7,500",
    },
    {
      image: rectangle4,
      name: "La Maison",
      location: "Barcelona, Spain",
      stars: 4.1,
      price: "$ 8,000",
    },
    {
      image: rectangle5,
      name: "Serenity Shores",
      location: "Sydney, Australia",
      stars: 5,
      price: "$ 7,000",
    },
    {
      image: rectangle6,
      name: "Azure Haven",
      location: "Barcelona, Spain",
      stars: 3.9,
      price: "$ 8,000",
    },
    {
      image: rectangle7,
      name: "Ocean Breeze",
      location: "Bali, Indonesia",
      stars: 4.3,
      price: "$ 7,000",
    },
    {
      image: rectangle8,
      name: "Palm Breeze",
      location: "Phuket, Thailand",
      stars: 3.5,
      price: "$ 6,000",
    },
  ];
  return (
    <div className="w-full container-padding container-margin" id="destination" >
      <div className="container">
        <div className="w-full space-y-10">
          <h1
            className="text-black text-center"
            data-aos="fade-down"
            data-aos-duration="800"
          >
            TOP BOOK NOW
          </h1>
          <div className="container-margin container-padding ">
            <div className="grid md:grid-cols-2 xl:grid-cols-4  place-items-center container gap-16">
              {books.map((book, index) => (
                <BookBox key={index} {...book} />
              ))}
            </div>
            <div
              className="container-padding flex justify-center"
              data-aos="zoom-in"
              data-aos-duration="1500"
            >
              <CustomButton name="See All" className="border" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Book;
