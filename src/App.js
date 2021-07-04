import React from "react";
import { Switch, Route, useLocation } from "react-router-dom";

import styled from "styled-components";

import { AnimatePresence } from "framer-motion";

import { NavBar, Footer, AboutPage, WorkPage, HomePage } from "./components/";

const App = () => {
	let location = useLocation();

	console.log(location);
	return (
		<MainContainer>
			<NavBar />
			<AnimatePresence exitBeforeEnter>
				<Switch location={location} key={location.key}>
					<Route exact path="/" component={HomePage} />
					<Route exact path="/about" component={AboutPage} />
					<Route exact path="/work" component={WorkPage} />
				</Switch>
			</AnimatePresence>
			<Footer />
		</MainContainer>
	);
};

export default App;

const MainContainer = styled.div`
	height: 100vh;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
`;
