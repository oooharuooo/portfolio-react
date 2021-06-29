import React from "react";
import styled from "styled-components";
import FlyingPerson from "../img/FlyingPerson";
import Cloud from "../img/Cloud";
import { motion } from "framer-motion";
import City from "../img/City";

const container = {
	hidden: { opacity: 0, x: "-100%" },
	visible: {
		opacity: 1,
		x: 0,
		transition: {
			ease: "easeInOut",
			duration: 1,
		},
	},
};

const HomePage = () => {
	return (
		<Home
			as={motion.div}
			variants={container}
			initial="hidden"
			animate="visible"
		>
			<Cloud />
			<FlyingPerson />
			<City />
		</Home>
	);
};

export default HomePage;

const Home = styled.div`
	${
		"" /* background: #e9edfa url("projectImg/city.svg") center / cover no-repeat fixed; */
	}
	background-color: #fff;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
`;
