import React, { useState, useEffect } from "react";
import projects from "../constant/projects";
import Modal from "./Modal";
import ActiveDot from "./ActiveDot";

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

const item = {
	hidden: { x: [-100, 0], rotateY: [-150, 0], scale: [0.25, 1] },
	visible: {
		x: 0,
		rotateY: 0,
		scale: 1,
		transition: {
			ease: "easeInOut",
			duration: 0.5,
		},
	},
};

const WorkPage = () => {
	const [workData, setWorkData] = useState([]);
	const [index, setIndex] = useState(0);
	const [showModal, setShowModal] = useState(false);

	// Fetch Data
	useEffect(() => {
		const fetchData = () => {
			setWorkData(projects);
		};
		fetchData();
	}, []);

	// Restart index if ran out of array length
	useEffect(() => {
		const lastIndex = workData.length - 1;

		if (index < 0) {
			setIndex(lastIndex);
		} else if (index > lastIndex) {
			setIndex(0);
		}
	}, [index, workData]);

	// Auto go to next slide
	// useEffect(() => {
	// 	let slider = setInterval(() => {
	// 		setIndex(index + 1);
	// 	}, 5000);
	// 	return () => clearInterval(slider);
	// }, [index]);

	return (
		<Wrapper
			as={motion.div}
			variants={container}
			initial="hidden"
			animate="visible"
		>
			<button className="btn btn-next">
				<NavigateBeforeIcon onClick={() => setIndex(index - 1)} />
			</button>
			<button className="btn btn-prev">
				<NavigateNextIcon onClick={() => setIndex(index + 1)} />
			</button>

			<ActiveDot workData={workData} index={index} />

			{workData.map((project, projectIndex) => {
				let position = "nextSlide";
				if (projectIndex === index) position = "activeSlide";
				if (
					projectIndex === index - 1 ||
					(index === 0 && projectIndex === project.length - 1)
				) {
					position = "prevSlide";
				}
				return (
					<motion.div
						// variants={
						// 	(position === "nextSlide" && item) ||
						// 	(position === "prevSlide" && item)
						// }
						key={project.title}
						className={`project-container ${position} ${
							projectIndex === index + 1 ? "overlap" : ""
						}`}
					>
						<motion.div
							whileHover={{ rotateZ: 5 }}
							className="project-image"
							onClick={() => setShowModal(true)}
						>
							<img src={project.url.path} alt={project.title} />
						</motion.div>
						{showModal && (
							<Modal
								position={position}
								others={project}
								setShowModal={setShowModal}
							/>
						)}
					</motion.div>
				);
			})}
		</Wrapper>
	);
};

export default WorkPage;

const Wrapper = styled.div`
	background-color: white;
	display: flex;
	align-items: center;
	text-align: center;
	overflow: hidden;

	.btn {
		position: absolute;
		z-index: 50;
		border: none;
		background: none;
		svg {
			font-size: 4rem;
		}
		&-next {
			left: 0;
		}
		&-prev {
			right: 0;
		}
	}

	.project-container {
		height: 100%;
		width: 100%;

		position: absolute;
		top: 0;
		left: 0;

		${"" /* opacity: 0; */}

		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: space-evenly;
	}
	.activeSlide {
		${"" /* opacity: 1; */}
		${"" /* transform: translateX(0); */}

		z-index: 15;
		.project-image {
			cursor:pointer;
			width: 700px;
			box-shadow: 5px 5px 15px 5px #bac6f2;
			}
		}
	}
	.non-active-slide {
		display: none;
	}
	.overlap {
		z-index: 11;
	}
	 {
		.prevSlide {
			${
				"" /* transform: translateX(-100%);
			transform: rotate3d(1, 1, 0, 65deg); */
			}
			width: 100px;
			left: 15%;
			top: -15%;
		}
		.nextSlide {
			${
				"" /* transform: translateX(100%);
			transform: rotate3d(-1, 1, 0, 65deg); */
			}
			width: 100px;
			left: 80%;
			top: -15%;
		}
	}

	.project-image {
		width: 300px;
	}
`;
