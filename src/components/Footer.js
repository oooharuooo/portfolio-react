import React from "react";

import styled from "styled-components";

import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";

const Footer = () => {
	return (
		<footer>
			<SocialContainer>
				<li>
					<a
						href="https://www.linkedin.com/in/dat-thong-846b8a193/"
						rel="noopener noreferrer"
						target="_blank"
					>
						<LinkedInIcon />
					</a>
				</li>
				<li>
					<a
						href="https://github.com/oooharuooo"
						rel="noopener noreferrer"
						target="_blank"
					>
						<GitHubIcon />
					</a>
				</li>
			</SocialContainer>
		</footer>
	);
};

export default Footer;
const SocialContainer = styled.ul`
	display: flex;
`;
