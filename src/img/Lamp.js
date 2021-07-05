import React from "react";
import styled from "styled-components";

const Lamp = () => {
	return (
		<Wrapper>
			<svg
				width="65"
				height="105"
				viewBox="0 0 65 105"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<g id="lamp">
					<path
						id="Vector"
						d="M31.4989 0L32.087 28.3856L32.8008 28.2641L33.4339 0H31.4989Z"
						fill="#7F8394"
					/>
					<path
						id="Vector_2"
						d="M16.0862 51.6408C16.0862 51.6408 10.4293 27.9372 32.8143 27.7108C53.9916 27.497 48.5592 52.8605 48.5592 52.8605L16.0862 51.6408Z"
						fill="#7F8394"
					/>
					<path
						id="Vector_3"
						d="M15.8886 51.6449C15.8886 51.6449 33.9007 44.3641 48.6131 52.7683C48.6131 52.7683 33.1286 60.4599 15.8886 51.6449Z"
						fill="white"
					/>
					<path
						id="Vector_4"
						d="M24.6029 31.9485C24.6029 31.9485 16.7507 34.6815 18.3489 47.1054L24.6029 31.9485Z"
						fill="white"
					/>
					<path
						id="light"
						d="M15.8841 51.6449L0 105L65 104.405L48.6086 52.7682L15.8841 51.6449Z"
						fill="url(#paint0_linear)"
					/>
				</g>
				<defs>
					<linearGradient
						id="paint0_linear"
						x1="32.3833"
						y1="22.8778"
						x2="32.5007"
						y2="115.831"
						gradientUnits="userSpaceOnUse"
					>
						<stop stopColor="#7AA976" />
						<stop offset="1" stopColor="#D2E8D0" stopOpacity="0" />
					</linearGradient>
				</defs>
			</svg>
		</Wrapper>
	);
};

export default Lamp;

const Wrapper = styled.div`
	position: absolute;
	z-index: 20;
	inset: 0;
	left: 50%;
	transform: translateX(-50%);

	width: fit-content;
	height: fit-content;

	cursor: pointer;
`;
