import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import styled from "styled-components";

import { NavBar, Footer, AboutPage, WorkPage, HomePage } from "./components/";

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
	display: flex;
	flex-direction: column;
	justify-content: space-between;
`;
