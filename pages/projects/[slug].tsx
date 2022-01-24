import Head from "next/head";
import ProjectPage from "@components/pages/projectIndividual";
import Header from "@components/common/header";
import Footer from "@components/common/footer";

const Project = () => {
  return (
    <>
      <Head>
        <title>Project | Fibonacci</title>
        <meta name="description" content="Fibonacci project" />
        <meta name="robots" content="index, follow" />
      </Head>
      <Header mode="dark" position="absolute" />
      <ProjectPage />
      <Footer />
    </>
  );
};

export default Project;
