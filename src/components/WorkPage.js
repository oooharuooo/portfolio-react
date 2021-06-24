import React from "react";
import projects from "../constant/projects";

import styled from "styled-components";

const WorkPage = () => {
	return (
		<WorkPageContainer>
			{projects.map((project) => (
				<img src={project.url} alt="project"></img>
			))}
		</WorkPageContainer>
	);
};

export default WorkPage;

const WorkPageContainer = styled.div``;
