import React from "react";

import styled from "styled-components";
import { motion } from "framer-motion";

import CloseIcon from "@material-ui/icons/Close";

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
			duration: 0.5,
		},
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
				className={` ${position !== "activeSlide" && "non-active-slide"}`}
			>
				<div className="project-detail">
					<button>
						<CloseIcon onClick={() => setShowModal(false)} />
					</button>
					<h1 className="project-detail-title">{title}</h1>
					<h3 className="project-detail-description">{description}</h3>
					<p className="project-detail-skill">Skills used: {skill}</p>
					<div className="project-detail-link">
						<a href={url.live} rel="noopener noreferrer" target="_blank">
							Live
						</a>
						<a href={url.github} rel="noopener noreferrer" target="_blank">
							Github
						</a>
					</div>
				</div>
			</Wrapper>
		</>
	);
};

export default Modal;

const Wrapper = styled.div`
	font-family: "Open Sans", sans-serif;

	position: absolute;
	height: 60%;
	width: 100%;

	background-color: #f8f8ff;

	.project-detail {
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
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
	}
`;

const EmptyContainer = styled.div`
	position: absolute;
	height: 100%;
	width: 100%;
`;
