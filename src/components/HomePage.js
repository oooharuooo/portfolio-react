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
	exit: {
		rotateX: 90,
		transition: {
			ease: "easeInOut",
			duration: 0.5,
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
			exit="exit"
		>
			<Cloud />
			<FlyingPerson />
			<City />
		</Home>
	);
};

export default HomePage;

const Home = styled.div`
	background-color: #fff;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	flex-grow: 1;
`;
