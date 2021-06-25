import React from "react";

import styled from "styled-components";

import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";

const Footer = () => {
	return (
		<CopyRight>
			<h4>Copy right@ Dat V Thong 2021</h4>
		</CopyRight>
	);
};

export default Footer;
const CopyRight = styled.footer`
	background-color: black;

	display: flex;
	justify-content: center;
	align-self: flex-end;
	height: fit-content;

	padding: 0 1rem;
	h4 {
		color: white;
	}
`;
