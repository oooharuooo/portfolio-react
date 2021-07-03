import React from "react";
import { motion } from "framer-motion";

import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";

const NavigateButton = ({ index, setIndex, setAnimation }) => {
	const NavigateButton = (num) => {
		setIndex(index + num);
		setAnimation(false);
	};

	return (
		<>
			<motion.button
				whileHover={{ scale: 1.5 }}
				whileTap={{ scale: 0.8 }}
				className="btn btn-next"
			>
				<NavigateBeforeIcon onClick={() => NavigateButton(-1)} />
			</motion.button>
			<motion.button
				whileHover={{ scale: 1.5 }}
				whileTap={{ scale: 0.8 }}
				className="btn btn-prev"
			>
				<NavigateNextIcon onClick={() => NavigateButton(1)} />
			</motion.button>
		</>
	);
};

export default NavigateButton;
