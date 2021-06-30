import React, { useState, useEffect } from "react";
import axios from "axios";
import projects from "../constant/projects";

import styled from "styled-components";
import { motion } from "framer-motion";

import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";

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
};

const WorkPage = () => {
	const [workData, setWorkData] = useState([]);

	useEffect(() => {
		const fetchData = () => {
			setWorkData(projects);
		};
		fetchData();
	}, []);

	return (
		<Wrapper
			as={motion.div}
			variants={container}
			initial="hidden"
			animate="visible"
		>
			<button>
				<NavigateBeforeIcon />
			</button>
			{workData.map((project) => (
				<div key={project.url} className="project-container">
					<div
						className="project-image"
						style={{
							backgroundImage: `url(${project.url})`,
						}}
					></div>
					<div className="project-description">dfafd</div>
				</div>
			))}
			<button>
				<NavigateNextIcon />
			</button>
		</Wrapper>
	);
};

export default WorkPage;

const Wrapper = styled.div`
	background-color: white;
	display: flex;
	align-items: center;

	.project-container {
		height: 100%;
		width: 100%;

		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.project-image {
		background-position: center;
		background-repeat: no-repeat;
		background-size: contain;

		flex-basis: 50%;
		height: 100%;
		width: 100%;
	}
`;
