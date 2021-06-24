import React, { useState } from "react";
import { Link } from "react-router-dom";

import MenuIcon from "@material-ui/icons/Menu";
import MenuOpenIcon from "@material-ui/icons/MenuOpen";

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
			{showMenu ? (
				<MenuOpenIcon onClick={() => setShowMenu(!showMenu)} />
			) : (
				<MenuIcon onClick={() => setShowMenu(!showMenu)} />
			)}
			{showMenu && (
				<motion.ul variants={container} initial="hidden" animate="show">
					<motion.li variants={item}>
						<Link to="/">Home</Link>
					</motion.li>
					<motion.li variants={item}>
						<Link to="/about">About</Link>
					</motion.li>
					<motion.li variants={item}>
						<Link to="/work">Work</Link>
					</motion.li>
					<motion.li variants={item}>
						<a href="mailto:haruthong@gmail.com">Contact</a>
					</motion.li>
				</motion.ul>
			)}
		</NavBarContainer>
	);
};

export default NavBar;

const NavBarContainer = styled.nav`
	display: flex;
	justify-content: space-between;
	align-self: flex-start;
	justify-content: flex-end;
	ul {
		position: absolute;
	}
`;
