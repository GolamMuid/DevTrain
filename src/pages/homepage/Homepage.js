import React from "react";
import Bootcamps from "../../components/home/Bootcamp/Bootcamps";
import Features from "../../components/home/Features";
import Hero from "../../components/home/Hero";
import Container from "../../layouts/container/Container";

function Homepage() {
	return (
		<div>
			<Hero />
			<Features />
			<Bootcamps />
		</div>
	);
}

export default Homepage;
