import React from "react";

import styled from "styled-components";
import { motion } from "framer-motion";

import CloseIcon from "@material-ui/icons/Close";

const Modal = ({ position, others, setShowModal }) => {
	const { description, title, skill, url } = others;
	return (
		<Wrapper
			className={`project-detail ${
				position !== "activeSlide" && "non-active-slide"
			}`}
		>
			<CloseIcon onClick={() => setShowModal(false)} />
			<h1 className="project-detail-title">{title}</h1>
			<h3 className="project-detail-description">{description}</h3>
			<h3 className="project-detail-skill">Skills used: {skill}</h3>
			<div className="project-detail-link">
				<a href={url.live} rel="noopener noreferrer" target="_blank">
					Live
				</a>
				<a href={url.github} rel="noopener noreferrer" target="_blank">
					Github
				</a>
			</div>
		</Wrapper>
	);
};

export default Modal;

const Wrapper = styled.div`
	position: absolute;
	height: 100%;
	width: 100%;
	background-color: white;
`;
