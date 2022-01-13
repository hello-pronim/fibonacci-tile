import React from "react";

import Hero from "./hero";
import ProjectList from "./ProjectList";
import ProjectsHeader from "./Header";
import styles from "./styles.module.scss";

const ProjectPage = ({ projects, types }) => {
  return (
    <div className={styles.container}>
      <ProjectsHeader mode="dark" />
      <Hero />
      <ProjectList projects={projects} types={types} />
    </div>
  );
};
export default ProjectPage;
