import { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import client from "@utils/apolloClient";
import { PageQuery } from "@gql/pageGQL";
import { withGlobalData } from "@hoc/withGlobalData";
import Footer from "@components/common/footer";
import AboutPage from "@components/pages/about";

interface AboutPageProps {
  notifications: Array<any>;
}

const About: NextPage<AboutPageProps> = ({ notifications }) => {
  return (
    <>
      <Head>
        <title>Our story | Fibonacci</title>
        <meta name="description" content="Fibonacci About page" />
      </Head>
      <AboutPage notifications={notifications} />
      <Footer />
    </>
  );
};

export const getStaticProps: GetStaticProps = withGlobalData(
  async () => {
    const {
      data: { entry: page },
    } = await client.query({
      query: PageQuery,
      variables: {
        slug: "our-story",
      },
    });
    return {
      props: {
        page,
      },
      revalidate: 500,
    };
  }
);

export default About;
