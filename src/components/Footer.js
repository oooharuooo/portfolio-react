import React from "react";

import styled from "styled-components";
import { motion } from "framer-motion";

const container = {
	hidden: { opacity: 0 },
	show: {
		opacity: 1,
		transition: { ease: "easeOut", duration: 1.5 },
	},
};

const Footer = () => {
	return (
		<CopyRight
			as={motion.footer}
			initial="hidden"
			animate="show"
			variants={container}
		>
			<h4>Copy right@ Dat V Thong 2021</h4>
		</CopyRight>
	);
};

export default Footer;
const CopyRight = styled.footer`
	background-color: black;
	z-index: 1000;

	display: flex;
	justify-content: center;
	align-self: flex-end;
	height: fit-content;

	padding: 0 1rem;
	border-top: 1px solid white;
	h4 {
		color: white;
	}
`;
