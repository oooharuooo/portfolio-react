import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import styled from "styled-components";

import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import HomePage from "./components/HomePage";
import AboutPage from "./components/AboutPage";
import WorkPage from "./components/WorkPage";

const App = () => {
	return (
		<Router>
			<MainContainer>
				<NavBar />
				<Switch>
					<Route exact path="/" component={HomePage} />
					<Route exact path="/about" component={AboutPage} />
					<Route exact path="/work" component={WorkPage} />
				</Switch>
				<Footer />
			</MainContainer>
		</Router>
	);
};

export default App;

const MainContainer = styled.div`
	height: 100vh;
	display: grid;
	grid-auto-rows: 1fr 70% 1fr;
`;
