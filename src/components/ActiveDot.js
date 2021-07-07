import React from "react";
import RadioButtonUncheckedIcon from "@material-ui/icons/RadioButtonUnchecked";

import styled from "styled-components";
import { motion } from "framer-motion";

const container = {
	hidden: {
		opacity: 0,
	},
	visible: {
		opacity: 1,
		transition: {
			ease: "easeInOut",
			duration: 2,
		},
	},
};

const item = {
	hidden: { opacity: 0, scale: 0.5 },
	visible: {
		opacity: 1,
		scale: [0.2, 0.5, 1, 1.25, 1],
		transition: {
			ease: "easeInOut",
			duration: 0.5,
		},
	},
};

const ActiveDot = ({ workData, index, animation }) => {
	return (
		<Wrapper
			as={motion.div}
			variants={container}
			initial="hidden"
			animate="visible"
		>
			{animation && (
				<>
					{workData.map((project, projectIndex) => {
						return (
							<React.Fragment key={projectIndex}>
								<RadioButtonUncheckedIcon
									component={motion.svg}
									variants={projectIndex === index && item}
									className={`${index === projectIndex ? "active-dot" : ""}`}
								/>
							</React.Fragment>
						);
					})}
				</>
			)}
		</Wrapper>
	);
};

export default ActiveDot;

const Wrapper = styled.div`
	position: absolute;
	top: 90%;
	left: 0;
	right: 0;
	z-index: 49;

	.active-dot {
		border-radius: 50%;
		background-color: #bac6f2;
		color: #fff;
	}
`;
