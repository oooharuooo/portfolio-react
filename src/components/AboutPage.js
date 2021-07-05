import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styled from "styled-components";
import Typewriter from "typewriter-effect";

import WorkingPerson from "../img/WorkingPerson";
import Lamp from "../img/Lamp";
import skills from "../constant/skills";

const wrapper = {
	hidden: {
		opacity: 0,
	},
	visible: {
		opacity: 1,
		x: 0,
		transition: {
			ease: "easeInOut",
			duration: 2,
		},
	},
	exit: {
		opacity: 0,
		transition: {
			ease: "easeInOut",
			duration: 0.5,
		},
	},
};

const container = {
	hidden: {
		opacity: 0,
		clipPath: "circle(5% at 50% 50%)",
	},
	visible: {
		opacity: 1,

		clipPath: "circle(100% at 50% 50%)",
		transition: {
			ease: "easeInOut",
			duration: 1.5,
		},
	},
	exit: {
		opacity: 0,
		clipPath: "circle(5% at 50% 50%)",
		transition: {
			ease: "easeInOut",
			duration: 1,
		},
	},
};

const mission = {
	hidden: {
		opacity: 0,
	},
	visible: {
		opacity: 1,
		transition: {
			ease: "easeInOut",
			delay: 6.5,
			duration: 1,
		},
	},
};

const AboutPage = () => {
	const [lightOpening, setLightOpening] = useState(false);

	return (
		<Wrapper
			as={motion.div}
			variants={wrapper}
			initial="hidden"
			animate="visible"
			exit="exit"
		>
			<Lamp lightOpening={lightOpening} setLightOpening={setLightOpening} />

			<AnimatePresence>
				{lightOpening && (
					<motion.div
						variants={container}
						initial="hidden"
						animate="visible"
						exit="exit"
						className="container"
					>
						<div className="container-intro">
							<Typewriter
								options={{
									delay: 50,
									deleteSpeed: 20,
									wrapperClassName: "type-container",
									cursorClassName: "none-cursor",
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
							<motion.div variants={mission} className="container-mission">
								<h3>
									It is <span>my mission</span> to build fast, attractive, and
									easy-to-use websites.
								</h3>
								<h4>Tools I use:</h4>
								<div className="container-skills">
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
							</motion.div>
						</div>
						<WorkingPerson lightOpening={lightOpening} />
					</motion.div>
				)}
			</AnimatePresence>
		</Wrapper>
	);
};

export default AboutPage;

const Wrapper = styled.div`
	flex-grow: 1;
	position: relative;

	font-family: "Open Sans", sans-serif;

	.none-cursor {
		display: none;
	}

	h1,
	h3 {
		span {
			color: #ff003b;
			font-size: 3rem;
			font-family: "Viaoda Libre", cursive;
		}
	}

	h3 span {
		font-size: 2rem;
	}

	.container {
		display: flex;
		height: 100%;
		background-color: white;

		&-intro {
			align-self: center;
			padding: 0 2rem;
		}

		&-skills {
			display: flex;
			justify-content: space-around;
		}
	}
`;
