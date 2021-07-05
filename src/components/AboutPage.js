import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import Typewriter from "typewriter-effect";

import WorkingPerson from "../img/WorkingPerson";

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
	exit: {
		rotateX: 90,
		transition: {
			ease: "easeInOut",
			duration: 0.5,
		},
	},
};

const AboutPage = () => {
	return (
		<Wrapper
			as={motion.div}
			variants={container}
			initial="hidden"
			animate="visible"
			exit="exit"
		>
			<motion.div className="container">
				<Typewriter
					options={{
						cursor: "",
					}}
					onInit={(typewriter) => {
						typewriter.typeString("<h1>Hello,</h1>").stop().start();
					}}
				/>

				<div className="container-intro">
					<Typewriter
						options={{
							loop: true,
							delay: 100,
							wrapperClassName: "type-container",
						}}
						onInit={(typewriter) => {
							typewriter
								.pauseFor(1000)
								.typeString("<h2>My name is <span>Dat</span>.</h2>")
								.pauseFor(1000)
								.deleteChars(15)
								.typeString("<h2>I am a <span>Web Developer</span>.</h2>")
								.pauseFor(1000)
								.start();
						}}
					/>
				</div>
			</motion.div>
			<div className="container-clip-path">
				<WorkingPerson />
			</div>
		</Wrapper>
	);
};

export default AboutPage;

const Wrapper = styled.div`
	background-color: white;
	flex-grow: 1;
	display: flex;

	position: relative;

	h2 span {
		color: red;
	}

	.container {
		display: flex;
		flex-direction: column;
		justify-content: center;
		&-intro {
			height: 50px;
		}
	}
	.container-clip-path {
		background-color: green;
		clip-path: circle(50% at 100% 10%);

		width: 100%;
		height: 50%;
		position: absolute;
	}
`;
