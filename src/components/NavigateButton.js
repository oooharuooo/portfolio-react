import React from "react";
import { motion } from "framer-motion";

import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";

const NavigateButton = ({ index, setIndex, setAnimation }) => {
	const NavigateButton = (num) => {
		setIndex(index + num);
		setAnimation(false);
	};

	const buttonHover = {
		hover: {
			scale: 1.5,
			color: "rgb(255 0 59)",
		},
		tap: {
			scale: 0.8,
		},
	};

	return (
		<>
			<motion.button
				variants={buttonHover}
				whileHover="hover"
				whileTap="tap"
				className="btn btn-next"
			>
				<NavigateBeforeIcon onClick={() => NavigateButton(-1)} />
			</motion.button>
			<motion.button
				variants={buttonHover}
				whileHover="hover"
				whileTap="tap"
				className="btn btn-prev"
			>
				<NavigateNextIcon onClick={() => NavigateButton(1)} />
			</motion.button>
		</>
	);
};

export default NavigateButton;
