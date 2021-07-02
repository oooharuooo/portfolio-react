import React, { useState, useEffect } from "react";
import projects from "../constant/projects";
import Modal from "./Modal";
import ActiveDot from "./ActiveDot";
import NavigateButton from "./NavigateButton";

import styled from "styled-components";
import { motion } from "framer-motion";

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
	hidden: { opacity: 0, x: 100, rotateY: 150, scale: 0.5 },
	visible: {
		opacity: 1,
		x: 0,
		rotateY: 0,
		scale: [0.5, 1, 1.25, 1],
		transition: {
			ease: "easeInOut",
			duration: 0.8,
		},
	},
};

const item2 = {
	hidden: { opacity: 0, x: 100 },
	visible: {
		opacity: 1,
		x: 0,
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
	const [animation, setAnimation] = useState(false);

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
		setAnimation(true);
		if (index < 0) {
			setIndex(lastIndex);
		} else if (index > lastIndex) {
			setIndex(0);
		}
	}, [index, workData, animation]);

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
			<NavigateButton
				index={index}
				setIndex={setIndex}
				setAnimation={setAnimation}
			/>
			<ActiveDot workData={workData} index={index} animation={animation} />
			{animation && (
				<>
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
								variants={projectIndex === index ? item : item2}
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
				</>
			)}
		</Wrapper>
	);
};

export default WorkPage;

const Wrapper = styled.div`
	background-color: white;

	display: flex;
	align-items: center;
	flex-grow: 1;

	text-align: center;
	overflow: hidden;

	.btn {
		position: absolute;
		z-index: 50;
		cursor: pointer;

		border: none;
		background: none;
		color: #bac6f2;
		bottom: 2%;
		&-next {
			left: 0;
			@media (min-width: 1024px) {
				left: 30%;
			}
		}
		&-prev {
			right: 0;
			@media (min-width: 1024px) {
				right: 30%;
			}
		}
		svg {
			font-size: 4rem;
		}
	}

	.project-container {
		height: 100%;
		width: 100%;

		position: absolute;
		top: 0;
		left: 0;

		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: space-evenly;
	}
	.activeSlide {
		z-index: 15;
		.project-image {
			cursor: pointer;
			width: 100%;
			box-shadow: 5px 5px 15px 5px #bac6f2;
			@media (min-width: 1024px) {
				width: 700px;
			}
		}
	}

	.non-active-slide {
		display: none;
	}
	.overlap {
		z-index: 11;
	}

	.prevSlide,
	.nextSlide {
		display: none;
	}

	@media (min-width: 1024px) {
		.prevSlide {
			width: 100px;
			left: 15%;
			top: -15%;
			display: flex;
		}
		.nextSlide {
			width: 100px;
			left: 80%;
			top: -15%;
			display: flex;
		}
	}

	.project-image {
		width: 200px;
	}
`;
