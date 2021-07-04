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

const AboutPage = () => {
	return (
		<Wrapper
			as={motion.div}
			variants={container}
			initial="hidden"
			animate="visible"
			exit="exit"
		>
			About
		</Wrapper>
	);
};

export default AboutPage;

const Wrapper = styled.div`
	background-color: white;
	flex-grow: 1;
`;
