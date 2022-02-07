import Head from "next/head";
import { GetStaticProps } from "next";
import { OurStoryPageQuery } from "@gql/pageGQL";
import Footer from "@components/common/footer";
import AboutPage from "@components/pages/about";
import client from "@utils/apolloClient";


const About = ({ pageData }) => {
  return (
    <>
      <Head>
        <title>Our story | Fibonacci</title>
        <meta name="description" content="Fibonacci About page" />
      </Head>
      <AboutPage pageData={pageData} />
      <Footer />
    </>
  );
};


export const getStaticProps: GetStaticProps = async function () {   
  const {
    data: { entry: pageData },
  } = await client.query({
    query: OurStoryPageQuery,
    variables: { slug: "our-story-page" },
  });
  return {
    props: {
      pageData,
    },
    revalidate: 500,
  };
};

export default About;
