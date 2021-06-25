import React, { useState } from "react";
import links from "../constant/links";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

import LogoD from "../img/LogoD";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";

import styled from "styled-components";
import { motion } from "framer-motion";

const container = {
	hidden: { opacity: 0 },
	show: {
		opacity: 1,
		transition: {
			staggerChildren: 0.3,
		},
	},
};

const item = {
	hidden: { opacity: 0 },
	show: { opacity: 1 },
};

const NavBar = () => {
	const [showMenu, setShowMenu] = useState(false);

	return (
		<NavBarContainer>
			<NavMenu>
				<LogoD />
				{showMenu ? (
					<CloseIcon
						color="primary"
						fontSize="large"
						onClick={() => setShowMenu(!showMenu)}
					/>
				) : (
					<MenuIcon
						color="primary"
						fontSize="large"
						onClick={() => setShowMenu(!showMenu)}
					/>
				)}
			</NavMenu>
			<LinkMenu>
				{showMenu && (
					<motion.ul variants={container} initial="hidden" animate="show">
						{links.map(({ name, url }) => (
							<motion.li key={url} variants={item}>
								<NavLink
									exact
									to={url}
									activeClassName="active-link"
									onClick={() => setShowMenu(false)}
								>
									{name}
								</NavLink>
							</motion.li>
						))}
					</motion.ul>
				)}
			</LinkMenu>
		</NavBarContainer>
	);
};

export default NavBar;

const NavBarContainer = styled.nav`
	display: flex;
	flex-direction: column;
	position: relative;
`;

const NavMenu = styled.div`
	display: flex;
	justify-content: space-between;
	background-color: black;
	padding: 0.5rem 1rem;
`;
const LinkMenu = styled.div`
	position: absolute;
	width: 100%;
	top: 20%;
	background-color: black;
	ul {
		border-top: 1px solid white;
		padding: 1rem;

		text-align: right;
		font-size: 2rem;
	}
	a {
		color: white;
		&:hover {
			border-bottom: 1px solid white;
			font-weight: bolder;
		}
	}

	.active-link {
		border-bottom: 1px solid white;
		font-weight: bolder;
	}
`;
