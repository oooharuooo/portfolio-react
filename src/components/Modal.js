import React from "react";

import styled from "styled-components";
import { motion } from "framer-motion";

import CloseIcon from "@material-ui/icons/Close";
import Button from "@material-ui/core/Button";

const container = {
	hidden: {
		opacity: 0,
		y: 200,
		scale: 0.5,
	},
	visible: {
		opacity: 1,
		y: [100, 200, 0],
		scale: 1,
		transition: {
			ease: "easeInOut",
			duration: 0.25,
			when: "beforeChildren",
		},
	},
	exit: {
		opacity: 0,
		y: 200,
		scale: 0.5,
		transition: {
			ease: "easeInOut",
			duration: 0.5,
		},
	},
};

const stagger = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: {
			staggerChildren: 0.2,
		},
	},
};

const item = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
	},
};

const Modal = ({ position, others, setShowModal }) => {
	const { description, title, skill, url } = others;
	return (
		<>
			<EmptyContainer onClick={() => setShowModal(false)} />
			<Wrapper
				as={motion.div}
				variants={container}
				initial="hidden"
				animate="visible"
				exit="exit"
				className={` ${position !== "activeSlide" && "non-active-slide"}`}
			>
				<motion.div variants={stagger} className="project-detail">
					<motion.button variants={item}>
						<CloseIcon onClick={() => setShowModal(false)} />
					</motion.button>
					<motion.h1 variants={item} className="project-detail-title">
						{title}
					</motion.h1>
					<motion.h3 variants={item} className="project-detail-description">
						{description}
					</motion.h3>
					<motion.p variants={item} className="project-detail-skill">
						Skills used: {skill}
					</motion.p>

					<motion.div variants={item} className="project-detail-link">
						<Button
							variant="contained"
							color="secondary"
							href={url.live}
							rel="noopener noreferrer"
							target="_blank"
						>
							Live
						</Button>

						<Button
							variant="contained"
							color="secondary"
							href={url.github}
							rel="noopener noreferrer"
							target="_blank"
						>
							Github
						</Button>
					</motion.div>
				</motion.div>
			</Wrapper>
		</>
	);
};

export default Modal;

const Wrapper = styled.div`
	font-family: "Open Sans", sans-serif;

	display: flex;
	align-items: center;

	position: absolute;
	height: 55%;
	width: 100%;
	@media (min-width: 768px) {
		width: 55%;
	}
	@media (min-width: 1024px) {
		width: 40%;
	}

	@media (min-width: 1440px) {
		width: 25%;
	}

	background-color: #f8f8ff;

	.project-detail {
		display: flex;
		flex-direction: column;

		padding: 0 1rem;

		@media (min-width: 1024px) {
			padding: 0 3rem;
		}

		&-title {
			font-family: "Viaoda Libre", cursive;
			color: #ff003b;
		}
		button {
			width: fit-content;
			border: none;
			background: none;

			align-self: flex-end;

			svg {
				font-size: 2rem;
				cursor: pointer;
			}
		}
		&-link {
			display: flex;
			justify-content: space-evenly;
		}
	}
`;

const EmptyContainer = styled.div`
	position: absolute;
	height: 100%;
	width: 100%;
`;
