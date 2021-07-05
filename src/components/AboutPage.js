import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import Typewriter from "typewriter-effect";

import WorkingPerson from "../img/WorkingPerson";
import Lamp from "../img/Lamp";
import skills from "../constant/skills";

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
				<div className="container-intro">
					<Typewriter
						options={{
							delay: 80,
							deleteSpeed: 80,
							wrapperClassName: "type-container",
							cursor: "",
						}}
						onInit={(typewriter) => {
							typewriter
								.pauseFor(1000)
								.typeString("<h1>Hello,</h1>")
								.typeString("<h1>My name is <span>Dat</span>.</h1>")
								.pauseFor(1000)
								.deleteChars(15)
								.typeString("<h1>I am a <span>Web Developer</span>.</h1>")
								.stop()
								.start();
						}}
					/>
					<h3>
						It is my mission to build clean, beautiful, and easy-to-use
						websites.
					</h3>
					<h4>Tools I use:</h4>
					<div className="skills">
						{skills.map(({ title, items }) => {
							return (
								<ul key={title} className={title}>
									{items.map((item, index) => (
										<li key={index}>{item}</li>
									))}
								</ul>
							);
						})}
					</div>
				</div>
			</motion.div>
			<Lamp />
			<WorkingPerson />
		</Wrapper>
	);
};

export default AboutPage;

const Wrapper = styled.div`
	background-color: white;
	flex-grow: 1;
	display: flex;

	position: relative;

	h1 span {
		color: red;
	}

	.container {
		display: flex;
		flex-direction: column;

		padding: 6rem 2rem;
		&-intro {
			height: 100px;
		}
	}

	.skills {
		display: flex;
		justify-content: space-around;
	}
`;
