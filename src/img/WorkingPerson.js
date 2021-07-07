import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const container = {
	hidden: {
		opacity: 0,
		clipPath: "circle(10% at 100% 0%)",
	},
	visible: {
		opacity: 1,
		clipPath: "circle(25% at 100% 10%)",
		transition: {
			ease: "easeInOut",
			duration: 2,
			delay: 0.5,
			when: "beforeChildren",
		},
	},
};

const dropPerson = {
	hidden: {
		y: -500,
	},
	visible: {
		y: 0,
		transition: {
			ease: "easeInOut",
			duration: 0.5,
			when: "beforeChildren",
		},
	},
};

const handTyping = {
	hidden: {
		y: 0,
	},
	visible: {
		y: [-2, 1, 0, -2, 0],
		transition: {
			ease: "easeInOut",
			duration: 1,
			delay: 0.5,
			repeat: Infinity,
			repeatType: "reverse",
		},
	},
};

const monitor = {
	hidden: {
		opacity: 0,
	},
	visible: {
		opacity: 1,
		fill: "black",
		transition: {
			ease: "easeInOut",
			duration: 1,
			delay: 0.5,
			repeat: Infinity,
			repeatType: "reverse",
		},
	},
};

const WorkingPerson = ({ lightOpening }) => {
	return (
		<>
			{lightOpening && (
				<Wrapper
					as={motion.div}
					variants={container}
					initial="hidden"
					animate="visible"
				>
					<div>
						<svg
							width="232"
							height="270"
							viewBox="0 0 232 270"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<g id="working-person">
								<g id="chair">
									<path
										id="Vector"
										d="M127.064 198.204L123.53 255.916H127.064L131.186 196.83L127.064 198.204Z"
										fill="#3F3D56"
									/>
									<path
										id="Vector_2"
										d="M170.051 191.333L166.518 249.046H170.051L174.173 189.959L170.051 191.333Z"
										fill="#3F3D56"
									/>
									<path
										id="Vector_3"
										d="M176.529 198.204L172.995 255.916H176.529L180.651 196.83L176.529 198.204Z"
										fill="#3F3D56"
									/>
									<path
										id="Vector_4"
										d="M121.764 192.707L118.231 250.42H121.764L125.886 191.333L121.764 192.707Z"
										fill="#3F3D56"
									/>
									<path
										id="Vector_5"
										d="M191.124 116.359L181.113 200.179L121.637 197.431L122.037 189.695L122.815 174.758L168.746 177.506L176.402 116.359H191.124Z"
										fill="#3F3D56"
									/>
									<path
										id="Vector_6"
										opacity="0.1"
										d="M189.682 116.359L179.672 200.179L120.196 197.431L120.596 189.695C133.009 190.251 174.961 187.125 174.961 187.125C174.961 176.16 183.217 133.233 186.549 116.359L189.682 116.359Z"
										fill="black"
									/>
								</g>
								<g id="desk">
									<path
										id="Vector_7"
										d="M112.99 270C175.392 270 225.979 262.547 225.979 253.353C225.979 244.16 175.392 236.707 112.99 236.707C50.5872 236.707 0 244.16 0 253.353C0 262.547 50.5872 270 112.99 270Z"
										fill="#3F3D56"
									/>
									<path
										id="Vector_8"
										opacity="0.1"
										d="M112.99 261.929C168.388 261.929 213.297 256.701 213.297 250.252C213.297 243.803 168.388 238.575 112.99 238.575C57.5916 238.575 12.6825 243.803 12.6825 250.252C12.6825 256.701 57.5916 261.929 112.99 261.929Z"
										fill="black"
									/>
									<path
										id="Vector_9"
										d="M63.4657 151.484H57.577V255.916H63.4657V151.484Z"
										fill="#3F3D56"
									/>
									<path
										id="Vector_10"
										d="M109.986 148.736V151.484L14.0006 152.858V150.11L14.1361 150.007L31.0779 137.056H102.331L109.986 148.736Z"
										fill="#3F3D56"
									/>
									<path
										id="Vector_11"
										opacity="0.1"
										d="M109.986 148.819V151.484L14.0006 152.858V150.11L14.1361 150.007L109.986 148.819Z"
										fill="black"
									/>
									<path
										id="Vector_12"
										d="M74.0653 244.236H46.9773V256.603H74.0653V244.236Z"
										fill="#3F3D56"
									/>
								</g>
								<motion.g variants={dropPerson} id="person">
									<path
										id="Vector_13"
										d="M85.8427 220.877C85.8427 220.877 84.0761 236.679 80.5429 239.427C77.0097 242.175 95.2647 245.61 95.2647 245.61L96.4424 224.999L85.8427 220.877Z"
										fill="#FFB9B9"
									/>
									<path
										id="Vector_14"
										d="M145.319 227.747C145.319 227.747 148.263 231.869 148.852 234.618C149.441 237.366 158.274 238.74 158.274 238.74L164.751 230.495C164.751 230.495 156.507 222.251 154.152 222.251C151.796 222.251 145.319 227.747 145.319 227.747Z"
										fill="#FFB9B9"
									/>
									<path
										id="Vector_15"
										d="M129.714 85.8709C137.519 85.8709 143.846 78.4884 143.846 69.3816C143.846 60.2749 137.519 52.8924 129.714 52.8924C121.908 52.8924 115.581 60.2749 115.581 69.3816C115.581 78.4884 121.908 85.8709 129.714 85.8709Z"
										fill="#FFB9B9"
									/>
									<path
										id="Vector_16"
										d="M125.886 80.718C125.886 80.718 132.952 96.5202 131.775 99.2684C130.597 102.017 147.085 86.2144 147.085 86.2144C147.085 86.2144 141.196 75.2216 141.196 71.7863C141.196 68.351 125.886 80.718 125.886 80.718Z"
										fill="#FFB9B9"
									/>
									<path
										id="Vector_17"
										d="M132.363 161.79C132.363 161.79 87.0205 153.546 85.2538 172.783C83.4872 192.02 77.0097 216.754 76.4208 218.815C75.8319 220.877 95.8535 232.556 98.209 228.434C100.564 224.312 104.687 191.333 103.509 188.585C102.331 185.837 101.742 182.402 104.098 183.089C106.453 183.776 132.363 189.959 137.663 187.898C142.963 185.837 156.507 158.355 156.507 158.355L132.363 161.79Z"
										fill="#2F2E41"
									/>
									<path
										id="Vector_18"
										opacity="0.1"
										d="M132.363 161.79C132.363 161.79 87.0205 153.546 85.2538 172.783C83.4872 192.02 77.0097 216.754 76.4208 218.815C75.8319 220.877 95.8535 232.556 98.209 228.434C100.564 224.312 104.687 191.333 103.509 188.585C102.331 185.837 101.742 182.402 104.098 183.089C106.453 183.776 132.363 189.959 137.663 187.898C142.963 185.837 156.507 158.355 156.507 158.355L132.363 161.79Z"
										fill="black"
									/>
									<path
										id="Vector_19"
										d="M131.186 157.668L132.952 174.844C132.952 174.844 104.687 187.211 115.286 207.136C125.886 227.06 137.663 238.053 137.663 238.053C137.663 238.053 156.507 225.686 156.507 222.251C156.507 218.815 133.541 199.578 136.486 199.578C139.43 199.578 181.829 196.83 172.996 169.348C164.162 141.866 131.186 157.668 131.186 157.668Z"
										fill="#2F2E41"
									/>
									<path
										id="Vector_20"
										d="M85.2539 240.114C85.2539 240.114 80.5429 233.931 80.5429 235.305C80.5429 236.679 66.9989 244.923 64.6434 245.61C62.2879 246.298 58.7547 247.672 63.4657 249.733C68.1766 251.794 98.209 252.481 98.209 251.107C98.209 249.733 99.3867 236.679 97.0313 238.053C94.6758 239.427 85.8427 242.862 85.2539 240.114Z"
										fill="#2F2E41"
									/>
									<path
										id="Vector_21"
										d="M154.74 235.305C154.74 235.305 148.263 233.244 147.674 235.305C147.085 237.366 146.496 245.61 141.196 248.359C135.897 251.107 134.13 255.229 141.196 255.916C148.263 256.603 167.696 240.801 167.696 238.053C167.696 235.305 165.34 227.06 164.162 227.747C162.985 228.434 160.04 234.618 154.74 235.305Z"
										fill="#2F2E41"
									/>
									<path
										id="Vector_22"
										d="M147.085 82.0921C147.085 82.0921 144.881 75.215 140.978 79.3406C137.074 83.4662 129.419 93.772 129.419 93.772C129.419 93.772 124.708 95.8331 122.942 99.2684C121.175 102.704 121.175 125.376 124.708 132.934C128.241 140.492 128.241 153.545 129.419 156.981C130.597 160.416 129.419 163.851 133.541 163.851C137.663 163.851 131.186 158.355 144.73 163.851C158.274 169.348 173.584 176.218 174.762 171.409C175.94 166.6 172.995 163.851 174.762 161.79C176.529 159.729 174.762 159.042 173.584 154.233C172.407 149.423 171.229 148.736 170.64 142.553C170.051 136.369 170.64 130.186 169.462 127.438C168.284 124.689 168.284 120.567 168.284 113.696C168.284 106.826 164.751 93.0849 158.274 88.9626C151.796 84.8403 147.085 82.0921 147.085 82.0921Z"
										fill="#575A89"
									/>
									<path
										id="Vector_23"
										d="M115.914 51.0462C119.197 47.3076 122.647 43.4487 127.016 41.8204C132.849 39.647 139.351 41.9276 144.372 46.0152C145.455 46.8971 146.516 47.8955 147.167 49.2364C147.764 50.4665 147.973 51.894 148.162 53.2902C148.829 58.2071 149.375 63.1898 149.049 68.1533C148.723 73.1168 147.469 78.1057 144.849 82.0348C142.526 79.1393 140.744 75.7131 139.614 71.9726C139.316 70.9828 139.048 69.9398 138.446 69.1608C137.843 68.3819 136.783 67.9627 136.027 68.5306C134.976 69.3196 135.108 71.4267 133.999 72.0976C133.619 72.2986 133.194 72.3506 132.786 72.2459C129.894 71.6645 128.887 67.5306 127.005 64.9037C124.231 61.0318 120.347 61.2768 116.556 60.1641C112.156 58.8728 113.246 54.0851 115.914 51.0462Z"
										fill="#2F2E41"
									/>
									<g id="person-hand">
										<g id="person-hand-right">
											<motion.path
												variants={handTyping}
												id="Vector_24"
												d="M92.9091 132.247C92.9091 132.247 71.7099 134.308 78.7763 140.491C85.8427 146.675 92.9091 136.369 92.9091 136.369V132.247Z"
												fill="#FFB9B9"
											/>
											<path
												id="Vector_25"
												d="M124.708 98.5813L125.224 96.3258C125.224 96.3258 118.231 110.948 117.642 112.322C117.053 113.696 107.042 125.376 105.864 127.437C105.061 128.774 104.065 129.936 102.92 130.873H91.7315C91.7315 130.873 89.376 139.804 92.9092 140.492C96.4424 141.179 107.631 143.927 109.986 143.927C112.342 143.927 127.064 128.125 127.064 128.125L124.708 98.5813Z"
												fill="#575A89"
											/>
										</g>
										<g id="person-hand-left">
											<motion.path
												variants={handTyping}
												id="Vector_26"
												d="M113.255 138.202C113.255 138.202 93.7373 132.162 92.1455 137.357C90.5537 142.553 108.809 147.362 108.809 147.362H116.464L113.255 138.202Z"
												fill="#FFB9B9"
											/>
											<path
												id="Vector_27"
												d="M154.152 93.0849C154.152 93.0849 145.319 100.642 142.963 111.635C140.608 122.628 138.841 134.308 138.841 134.308L111.753 138.43C111.753 138.43 109.398 149.423 112.931 150.11C116.464 150.797 142.963 152.858 147.085 150.11C151.207 147.362 165.34 113.009 164.751 109.574C164.162 106.139 162.985 93.772 154.152 93.0849Z"
												fill="#575A89"
											/>
										</g>
									</g>
								</motion.g>
								<g id="monitor">
									<path
										id="Vector_28"
										d="M48.4786 141.57L58.047 142.466L71.6908 141.432L71.4533 141.406L58.8148 139.985C55.9206 138.744 57.9288 131.44 57.9288 131.44L48.2447 132.014L47.4745 132.06C44.0488 141.432 48.4786 141.57 48.4786 141.57Z"
										fill="#D1D9EC"
									/>
									<path
										id="Vector_29"
										opacity="0.1"
										d="M48.4786 141.57L58.047 142.466L71.6908 141.432L71.4533 141.406L57.663 141.983L48.4195 140.812C45.7971 140.007 47.2985 134.694 48.2447 132.014L47.4745 132.06C44.0488 141.432 48.4786 141.57 48.4786 141.57Z"
										fill="black"
									/>
									<motion.path
										variants={monitor}
										id="Vector_30"
										d="M32.6196 74.8617L35.4853 123.342V129.194C35.5727 130.664 36.172 133.224 37.436 133.215L39.7838 130.865H82.0529C82.7806 130.86 80.3339 129.621 80.2618 128.776L83.226 126.97L80.1239 91.4212C80.0749 90.8597 79.8894 90.3262 79.5893 89.8835C79.2892 89.4408 78.887 89.1074 78.43 88.9224L36.4366 71.9563C35.0072 71.3788 33.5531 71.5842 32.6435 72.4663C32.0198 73.0713 32.5475 73.6544 32.6196 74.8617Z"
									/>
									<path
										id="Vector_31"
										d="M34.6493 124.189L35.0332 130.617C35.0752 131.325 35.3471 131.988 35.7935 132.471C36.24 132.954 36.8273 133.22 37.4359 133.215L38.3243 133.208L82.3837 132.896C82.5556 132.895 82.7254 132.852 82.8823 132.77C83.0391 132.687 83.1794 132.568 83.2944 132.419C83.4093 132.269 83.4964 132.094 83.5499 131.903C83.6034 131.713 83.6222 131.511 83.6051 131.311L83.2259 126.97L34.6493 124.189Z"
										fill="#DFE6F5"
									/>
									<path
										id="Vector_32"
										d="M64.1896 130.888C64.5158 130.888 64.7803 130.271 64.7803 129.51C64.7803 128.749 64.5158 128.132 64.1896 128.132C63.8634 128.132 63.599 128.749 63.599 129.51C63.599 130.271 63.8634 130.888 64.1896 130.888Z"
										fill="white"
									/>
									<path
										id="Vector_33"
										d="M31.7245 75.2021L35.0332 130.617C35.0752 131.325 35.3471 131.988 35.7935 132.471C36.24 132.954 36.8273 133.22 37.436 133.215L38.3243 133.208C37.7151 132.528 37.196 131.746 36.7839 130.888C36.7839 130.888 33.5354 75.2076 33.2991 73.8294C33.1956 73.3117 32.9683 72.839 32.6435 72.4663C32.3096 72.7992 32.0511 73.223 31.8908 73.7001C31.7305 74.1773 31.6734 74.6931 31.7245 75.2021V75.2021Z"
										fill="#DFE6F5"
									/>
									<path
										id="Vector_34"
										opacity="0.1"
										d="M31.7245 75.2021L35.0332 130.617C35.0752 131.325 35.3471 131.988 35.7935 132.471C36.24 132.954 36.8273 133.22 37.436 133.215L38.3243 133.208C37.7151 132.528 37.196 131.746 36.7839 130.888C36.7839 130.888 33.5354 75.2076 33.2991 73.8294C33.1956 73.3117 32.9683 72.839 32.6435 72.4663C32.3096 72.7992 32.0511 73.223 31.8908 73.7001C31.7305 74.1773 31.6734 74.6931 31.7245 75.2021V75.2021Z"
										fill="black"
									/>
								</g>
							</g>
						</svg>
					</div>
				</Wrapper>
			)}
		</>
	);
};

export default WorkingPerson;

const Wrapper = styled.div`
	background-color: #eef9ee;
	clip-path: circle(35% at 100% 10%);

	width: 100%;
	height: 50%;
	position: absolute;
	z-index: 19;

	div {
		display: flex;
		flex-direction: column;
		align-items: flex-end;

		svg {
			width: 25%;
			height: auto;
			@media (min-width: 768px) {
				width: 15%;
			}
			@media (min-width: 1024px) {
				width: 12%;
			}
		}
	}
`;
