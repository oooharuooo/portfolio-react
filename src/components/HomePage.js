import React from "react";
import styled from "styled-components";
import FlyingPerson from "../img/FlyingPerson";
import Cloud from "../img/Cloud";

const HomePage = () => {
	return (
		<Home>
			<Cloud />
			<FlyingPerson />
		</Home>
	);
};

export default HomePage;

const Home = styled.div`
	background: #e9edfa url("projectImg/city.svg") center / cover no-repeat fixed;
`;
