import React from "react";
import Features from "../../components/home/features/Features";
import Bootcamps from "../../components/home/bootcamps/Bootcamps";
import Hero from "../../components/home/hero/Hero";
import Reviews from "../../components/home/reviews/Reviews";

function Homepage() {
  return (
    <div>
      <Hero />
      <Features />
      <Bootcamps />
      <Reviews />
    </div>
  );
}

export default Homepage;
