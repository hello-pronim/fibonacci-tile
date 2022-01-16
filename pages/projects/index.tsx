import Head from "next/head";
import Footer from "@components/common/footer";
import ProjectsPage from "@components/pages/projects";

import { projects, types } from "./constants";

const Projects = () => {
  return (
    <>
      <Head>
        <title>Projects | Fibonacci</title>
        <meta name="description" content="Fibonacci Projects page" />
      </Head>
      <ProjectsPage projects={projects} types={types} />
      <Footer />
    </>
  );
};

export default Projects;
