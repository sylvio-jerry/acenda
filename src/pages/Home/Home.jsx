import React from "react";
import SectionAccueil from "../../components/SectionAccueil/SectionAccueil";
import Reason from "../../components/Reason/Reason";
import Partner from "../../components/Partner/Partner";
import Book from "../../components/Book/Book";
import Exploration from "../../components/Exploration/Exploration";
import FeatureNews from "../../components/FeatureNews/FeatureNews";
import Testimonial from "../../components/Testimonial/Testimonial";
import Offer from "../../components/Offer/Offer";

function Home() {
  return (
    <>
      <SectionAccueil />
      <Reason />
      <Partner />
      <Book />
      <Exploration />
      <FeatureNews />
      <Testimonial />
      <Offer />
    </>
  );
}

export default Home;
