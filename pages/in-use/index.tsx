import Head from "next/head";
import { GetStaticProps } from "next";
import { PageQuery } from "@gql/pageGQL";
import { CategoriesQuery } from "@gql/categoriesGQL";
import Footer from "@components/common/footer";
import ProjectsPage from "@components/pages/projects";
import client from "@utils/apolloClient";

const Projects = ({ heroDetails }) => {
  const projects = [
    {
      id: "1",
      slug: "project-1",
      title: "Project Name Goes Here",
      location: "City, Country",
      type: "explore",
      date: "Month, 2021",
      thumbnail: {
        src: "/assets/temp/project-thumb-1.png",
        width: 800,
        height: 400,
      },
    },
    {
      id: "2",
      slug: "project-2",
      title: "Project Name Goes Here",
      location: "City, Country",
      type: "residential",
      date: "Month, 2021",
      thumbnail: {
        src: "/assets/temp/project-thumb-2.png",
        width: 800,
        height: 932,
      },
    },
    {
      id: "3",
      slug: "project-3",
      title: "Project Name Goes Here",
      location: "City, Country",
      type: "residential",
      date: "Month, 2021",
      thumbnail: {
        src: "/assets/temp/project-thumb-2.png",
        width: 800,
        height: 932,
      },
    },
    {
      id: "4",
      slug: "project-4",
      title: "Project Name Goes Here",
      location: "City, Country",
      type: "workplaces",
      date: "Month, 2021",
      thumbnail: {
        src: "/assets/temp/project-thumb-3.png",
        width: 560,
        height: 617,
      },
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
      <ProjectsPage heroDetails={heroDetails} projects={projects} types={types} />
      <Footer />
    </>
  );
};


export const getStaticProps: GetStaticProps = async function () {
  const {
    data: { entry: heroDetails },
  } = await client.query({
    query: PageQuery,
    variables: { slug: "in-use" },
  });
  const {
    data: { entry: types },
  } = await client.query({
    query: CategoriesQuery,
    variables: { group: "Sector" },
  });
  console.log("types", types);
  return {
    props: {
      heroDetails
    },
    revalidate: 500,
  };
}

export default Projects;
