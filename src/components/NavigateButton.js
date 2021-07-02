import React from "react";



import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";

const NavigateButton = ({ index, setIndex, setAnimation }) => {
	const NavigateButton = (num) => {
		setIndex(index + num);
		setAnimation(false);
	};

	return (
		<>
			<button className="btn btn-next">
				<NavigateBeforeIcon onClick={() => NavigateButton(-1)} />
			</button>
			<button className="btn btn-prev">
				<NavigateNextIcon onClick={() => NavigateButton(1)} />
			</button>
		</>
	);
};

export default NavigateButton;

