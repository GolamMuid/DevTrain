import React from "react";
import Features from "../../components/home/Features";
import Bootcamps from "../../components/home/bootcamps/Bootcamps";
import Hero from "../../components/home/Hero";
import Container from "../../layouts/container/Container";
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
