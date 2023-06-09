import { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import { OurStoryPageQuery } from "@gql/pageGQL";
import { initializeApollo } from "@utils/apolloClient";
import { withGlobalData } from "@hoc/withGlobalData";
import Footer from "@components/common/footer";
import AboutPage from "@components/pages/about";

interface AboutPageProps {
  pageData: any;
  notifications: Array<any>;
}

const About: NextPage<AboutPageProps> = ({ pageData, notifications }) => {
  return (
    <>
      <Head>
        <title>Our story | Fibonacci</title>
        <meta name="description" content="Fibonacci About page" />
      </Head>
      <AboutPage pageData={pageData} notifications={notifications} />
      <Footer />
    </>
  );
};

export const getStaticProps: GetStaticProps = withGlobalData(async () => {
  const client = initializeApollo();

  const {
    data: { entry: pageData },
  } = await client.query({
    query: OurStoryPageQuery,
    variables: { slug: "our-story" },
  });
  return {
    props: {
      pageData,
    },
    revalidate: parseInt(process.env.NEXT_PAGE_REVALIDATE),
  };
});

export default About;
