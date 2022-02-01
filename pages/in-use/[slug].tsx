import Head from "next/head";
import { GetStaticProps, GetStaticPaths } from "next";
import { ProjectQuery, ProjectsQuery } from "@gql/projectGQL";
import ProjectPage from "@components/pages/projectIndividual";
import client from "@utils/apolloClient";
import Header from "@components/common/header";
import Footer from "@components/common/footer";

const Project = ({project}) => {
  return (
    <>
      <Head>
        <title>Project | Fibonacci</title>
        <meta name="description" content="Fibonacci project" />
        <meta name="robots" content="index, follow" />
      </Head>
      <Header mode="dark" position="absolute" />
      <ProjectPage project={project} />
      <Footer />
    </>
  );
};


export const getStaticPaths: GetStaticPaths = async () => {
  const {
    data: { entries: projects },
  } = await client.query({
    query: ProjectsQuery,
  });
  const paths = projects.map((project: any) => ({
    params: {
      "slug": project.slug,
    },
  }));
  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async function ({ params }) {
  const {
    data: { entry: project },
  } = await client.query({
    query: ProjectQuery,
    variables: { slug: params["slug"] },
  });
  return {
    props: {
      project
    },
    revalidate: 500,
  };
};

export default Project;
