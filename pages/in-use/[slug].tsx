import Head from "next/head";
import { GetStaticProps, GetStaticPaths, NextPage } from "next";
import { initializeApollo } from "@utils/apolloClient";
import { withGlobalData } from "@hoc/withGlobalData";
import { ProjectQuery, ProjectsQuery } from "@gql/projectGQL";
import ProjectPage from "@components/pages/projectIndividual";
import Header from "@components/common/header";
import Footer from "@components/common/footer";

interface ProjectPageProps {
  project: any;
  notifications: Array<any>;
}

const Project: NextPage<ProjectPageProps> = ({ project, notifications }) => {
  return (
    <>
      <Head>
        <title>Project | Fibonacci</title>
        <meta name="description" content="Fibonacci project" />
        <meta name="robots" content="index, follow" />
      </Head>
      <Header mode="dark" notifications={notifications} />
      <ProjectPage project={project} />
      <Footer />
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const client = initializeApollo();
  const {
    data: { entries: projects },
  } = await client.query({
    query: ProjectsQuery,
  });
  const paths = projects.map((project: any) => ({
    params: {
      slug: project.slug,
    },
  }));
  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = withGlobalData(async function ({
  params,
}) {
  const client = initializeApollo();
  const {
    data: { entry: project },
  } = await client.query({
    query: ProjectQuery,
    variables: { slug: params.slug },
  });
  return {
    props: {
      project,
    },
    revalidate: parseInt(process.env.NEXT_PAGE_REVALIDATE),
  };
});

export default Project;
