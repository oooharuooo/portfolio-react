import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";

const container = {
	hidden: {
		opacity: 0,
		x: "-100%",
	},
	visible: {
		opacity: 1,
		x: 0,
		backgroundColor: "white",
		transition: {
			ease: "easeInOut",
			duration: 1,
		},
	},
};

const AboutPage = () => {
	return (
		<About
			as={motion.div}
			variants={container}
			initial="hidden"
			animate="visible"
		>
			About
		</About>
	);
};

export default AboutPage;

const About = styled.div``;
