import React, { useState } from "react";
import links from "../constant/links";
import social from "../constant/social";

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
		transition: { ease: "easeOut", duration: 0.5, delay: 0.9 },
	},
};

const stagger = {
	show: {
		transition: {
			staggerChildren: 0.25,
		},
	},
};

const turningAnimation = {
	hidden: { rotateZ: 365 },
	show: {
		rotateZ: 0,
		transition: { ease: "easeOut", duration: 0.25 },
	},
};

const item = {
	hidden: { opacity: 0 },
	show: {
		opacity: 1,
	},
};

const NavBar = () => {
	const [showMenu, setShowMenu] = useState(false);

	return (
		<NavBarContainer
			initial="hidden"
			animate="show"
			variants={container}
			as={motion.nav}
		>
			<NavMenu>
				<LogoD />
				{showMenu ? (
					<CloseIcon
						className="menu-icon"
						variants={showMenu && turningAnimation}
						component={motion.svg}
						onClick={() => setShowMenu(!showMenu)}
					/>
				) : (
					<MenuIcon
						className="menu-icon"
						variants={showMenu && turningAnimation}
						component={motion.svg}
						onClick={() => setShowMenu(!showMenu)}
					/>
				)}
			</NavMenu>
			<motion.div className="links-menu-container">
				{showMenu && (
					<>
						<motion.ul className="links-menu" variants={stagger}>
							{links.map(({ name, url }) => (
								<motion.li key={url} variants={item}>
									<NavLink
										exact
										to={url}
										activeClassName="active-link"
										className="links-hover-effect"
										onClick={() => setShowMenu(false)}
									>
										{name}
									</NavLink>
								</motion.li>
							))}
						</motion.ul>
					</>
				)}
			</motion.div>
			<motion.div className="social-menu-container">
				{showMenu && (
					<motion.ul variants={stagger}>
						{social.map(({ name, url, icon }) => (
							<motion.li key={name} variants={item}>
								<a
									className="links-hover-effect"
									href={url}
									rel="noopener noreferrer"
									target="_blank"
								>
									{icon}
								</a>
							</motion.li>
						))}
					</motion.ul>
				)}
			</motion.div>
		</NavBarContainer>
	);
};

export default NavBar;

const NavBarContainer = styled.nav`
	display: flex;
	flex-direction: column;
	position: relative;

	.menu-icon {
		font-size: 2rem;
		color: white;
		cursor: pointer;
	}
	.links-menu-container {
		position: absolute;
		width: 100%;
		z-index: 999;

		background-color: black;
		.links-menu {
			display: flex;
			gap: 0.5rem;
			border-bottom: 1px solid white;
			padding: 1rem;

			text-align: right;
			font-size: 2rem;
		}

		.active-link {
			border-bottom: 1px solid white;
			font-weight: bolder;
		}
	}
	.links-hover-effect {
		color: white;
		&:hover {
			border-bottom: 1px solid white;
			font-weight: bolder;
		}
	}
	.social-menu-container {
		border-left: 1px solid white;
		background-color: black;

		align-self: flex-end;

		height: 100vh;
		position: absolute;
		z-index: 500;

		ul {
			display: flex;
			flex-direction: column;
			height: 100%;
			justify-content: space-evenly;
			padding: 1rem;
		}

		svg {
			font-size: 2.5rem;
		}
	}
`;

const NavMenu = styled.div`
	display: flex;
	justify-content: space-between;

	padding: 1.25rem 1rem;

	border-bottom: 1px solid white;

	svg:last-child {
		z-index: 1000;
	}
`;
