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
	},
};

const item = {
	hidden: { opacity: [0, 0.5, 1], scale: [1, 0.5, 1] },
	visible: {
		opacity: 1,
		scale: 1,
		transition: {
			ease: "easeInOut",
			duration: 1,
		},
	},
};

const ActiveDot = ({ workData, index }) => {
	return (
		<Wrapper
			as={motion.div}
			variants={container}
			initial="hidden"
			animate="visible"
		>
			{workData.map((project, projectIndex) => {
				return (
					<React.Fragment key={projectIndex}>
						<RadioButtonUncheckedIcon
							component={motion.svg}
							variants={(projectIndex !== index || index === 0) && item}
							className={`${index === projectIndex ? "active-dot" : ""}`}
						/>
					</React.Fragment>
				);
			})}
		</Wrapper>
	);
};

export default ActiveDot;

const Wrapper = styled.div`
	position: absolute;
	top: 90%;
	left: 0;
	right: 0;

	.active-dot {
		border-radius: 50%;
		background-color: #bac6f2;
		color: #fff;
	}
`;
