import React from "react";
import Features from "../../components/home/Features";
import Hero from "../../components/home/Hero";
import Bootcamps from "../../components/home/bootcamp/Bootcamps";
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
