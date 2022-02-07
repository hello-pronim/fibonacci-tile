import React from "react";
import Hero from "./hero";
import ProjectList from "./ProjectList";
import ProjectsHeader from "./Header";
import { Container } from "./styles";

const ProjectPage = ({ heroDetails, projects, types, notifications }) => {
  return (
    <Container>
      <ProjectsHeader mode="dark" notifications={notifications} />
      <Hero heroDetails={heroDetails} />
      <ProjectList projects={projects} types={types} />
    </Container>
  );
};

export default ProjectPage;
