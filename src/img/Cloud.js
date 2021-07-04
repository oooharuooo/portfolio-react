import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const container = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: { delay: 1 },
	},
};

const clouds = {
	hidden: {
		x: 0,
	},
	visible: {
		x: "-100vw",
		transition: {
			ease: "easeIn",
			duration: 30,
			repeat: Infinity,
		},
	},
};

const cloud2 = {
	hidden: {
		x: 0,
	},
	visible: {
		x: "-100vw",
		transition: {
			ease: "easeIn",
			duration: 25,
			repeat: Infinity,
		},
	},
};

const Cloud = () => {
	return (
		<Wrapper>
			<motion.svg
				variants={container}
				initial="hidden"
				animate="visible"
				width="696"
				height="196"
				viewBox="0 0 696 196"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<g id="cloud 4">
					<g id="cloud">
						<motion.g variants={clouds} id="cloud 1">
							<path
								id="Vector"
								d="M83.4029 128C98.5926 128 110.906 112.027 110.906 92.3234C110.906 72.6197 98.5926 56.6463 83.4029 56.6463C68.213 56.6463 55.8994 72.6197 55.8994 92.3234C55.8994 112.027 68.213 128 83.4029 128Z"
								fill="#bac6f2"
							/>
							<path
								id="Vector 2"
								d="M113.274 116.448C123.616 116.448 132 105.572 132 92.1571C132 78.7418 123.616 67.8668 113.274 67.8668C102.932 67.8668 94.5487 78.7418 94.5487 92.1571C94.5487 105.572 102.932 116.448 113.274 116.448Z"
								fill="#bac6f2"
							/>
							<path
								id="Vector 3"
								d="M52.0683 111.205C60.3903 111.205 67.1366 102.454 67.1366 91.6592C67.1366 80.8638 60.3903 72.1128 52.0683 72.1128C43.7463 72.1128 37 80.8638 37 91.6592C37 102.454 43.7463 111.205 52.0683 111.205Z"
								fill="#bac6f2"
							/>
						</motion.g>
						<motion.g variants={clouds} id="cloud 3">
							<path
								id="Vector 4"
								d="M636.291 71.4586C651.828 71.4586 664.425 55.4618 664.425 35.7292C664.425 15.9965 651.828 0 636.291 0C620.754 0 608.158 15.9965 608.158 35.7292C608.158 55.4618 620.754 71.4586 636.291 71.4586Z"
								fill="#bac6f2"
							/>
							<path
								id="Vector 5"
								d="M666.846 59.8891C677.426 59.8891 686 48.9981 686 35.5629C686 22.1279 677.426 11.2366 666.846 11.2366C656.269 11.2366 647.691 22.1279 647.691 35.5629C647.691 48.9981 656.269 59.8891 666.846 59.8891Z"
								fill="#bac6f2"
							/>
							<path
								id="Vector 6"
								d="M604.238 54.6391C612.751 54.6391 619.654 45.8753 619.654 35.0641C619.654 24.2531 612.751 15.489 604.238 15.489C595.728 15.489 588.825 24.2531 588.825 35.0641C588.825 45.8753 595.728 54.6391 604.238 54.6391Z"
								fill="#bac6f2"
							/>
						</motion.g>
						<motion.g variants={cloud2} id="cloud 2">
							<path
								id="Vector 7"
								d="M347.748 196C368.772 196 385.815 174.062 385.815 147C385.815 119.938 368.772 98 347.748 98C326.724 98 309.68 119.938 309.68 147C309.68 174.062 326.724 196 347.748 196Z"
								fill="#bac6f2"
							/>
							<path
								id="Vector 8"
								d="M389.082 180.134C403.394 180.134 415 165.197 415 146.772C415 128.347 403.394 113.41 389.082 113.41C374.766 113.41 363.162 128.347 363.162 146.772C363.162 165.197 374.766 180.134 389.082 180.134Z"
								fill="#bac6f2"
							/>
							<path
								id="Vector 9"
								d="M304.378 172.933C315.896 172.933 325.234 160.914 325.234 146.088C325.234 131.261 315.896 119.242 304.378 119.242C292.859 119.242 283.521 131.261 283.521 146.088C283.521 160.914 292.859 172.933 304.378 172.933Z"
								fill="#bac6f2"
							/>
						</motion.g>
					</g>
				</g>
			</motion.svg>
		</Wrapper>
	);
};

export default Cloud;

const Wrapper = styled.div`
	#cloud {
		@media (min-width: 1024px) {
			transform: translateX(30%);
		}
		@media (min-width: 1440px) {
			transform: translateX(50%);
		}
	}
`;
