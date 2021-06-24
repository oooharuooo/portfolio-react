import React, { useState } from "react";
import { Link } from "react-router-dom";

import MenuIcon from "@material-ui/icons/Menu";
import MenuOpenIcon from "@material-ui/icons/MenuOpen";

import { motion } from "framer-motion";

const NavBar = () => {
	const [showMenu, setShowMenu] = useState(false);

	return (
		<nav>
			{showMenu ? (
				<MenuOpenIcon onClick={() => setShowMenu(!showMenu)} />
			) : (
				<MenuIcon onClick={() => setShowMenu(!showMenu)} />
			)}
			{showMenu && (
				<ul>
					<li>
						<Link to="/">Home</Link>
					</li>
					<li>
						<Link to="/about">About</Link>
					</li>
					<li>
						<Link to="/work">Work</Link>
					</li>
					<li>
						<a href="mailto:haruthong@gmail.com">Contact</a>
					</li>
				</ul>
			)}
		</nav>
	);
};

export default NavBar;
