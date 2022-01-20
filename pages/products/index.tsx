import Head from "next/head";
import Footer from "@components/common/footer";
import ProjectsPage from "@components/pages/projects";

const Projects = () => {
  const projects = [
    {
      id: "1",
      slug: "project-1",
      title: "Project Name Goes Here",
      location: "City, Country",
      type: "explore",
      date: "Month, 2021",
      thumbnail: "/public/assets/temp/project-thumb-1.png",
    },
    {
      id: "2",
      slug: "project-2",
      title: "Project Name Goes Here",
      location: "City, Country",
      type: "residential",
      date: "Month, 2021",
      thumbnail: "/public/assets/temp/project-thumb-2.png",
    },
    {
      id: "3",
      slug: "project-3",
      title: "Project Name Goes Here",
      location: "City, Country",
      type: "commercial",
      date: "Month, 2021",
      thumbnail: "/public/assets/temp/project-thumb-3.png",
    },
  ];
  const types = [
    "all",
    "explore",
    "residential",
    "commercial",
    "workplaces",
    "recreation",
    "retails",
  ];

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
