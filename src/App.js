import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import styled from "styled-components";

import { NavBar, Footer, AboutPage, WorkPage, HomePage } from "./components/";

import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";

const theme = createMuiTheme({
	palette: {
		primary: {
			main: "#fff",
		},
	},
});

const App = () => {
	return (
		<ThemeProvider theme={theme}>
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
		</ThemeProvider>
	);
};

export default App;

const MainContainer = styled.div`
	height: 100vh;
	display: grid;
	grid-auto-rows: 1fr 50% 1fr;
`;
