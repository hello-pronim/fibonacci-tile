import { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import { initializeApollo } from "@utils/apolloClient";
import { HomePageQuery } from "@gql/pageGQL";
import { getIGUserData } from "@utils/igData";
import { withGlobalData } from "@hoc/withGlobalData";
import Homepage from "@components/pages/home";
import Header from "@components/common/header";
import Footer from "@components/common/footer";

interface HomePageProps {
  pageData: any;
  notifications: Array<any>;
}

const Home: NextPage<HomePageProps> = ({ pageData, notifications }) => {
  return (
    <>
      <Head>
        <title>Home | Fibonacci</title>
        <meta name="description" content="Fibonacci Homepage" />
        <meta name="robots" content="index, follow" />
      </Head>
      <Header
        mode="light"
        notifications={notifications}
        hideBorderOnScroll={true}
      />
      <Homepage pageData={pageData} />
      <Footer />
    </>
  );
};

export const getStaticProps: GetStaticProps = withGlobalData(async () => {
  const client = initializeApollo();
  const {
    data: { entry: pageData },
  } = await client.query({
    query: HomePageQuery,
    variables: {
      slug: "home-page",
    },
  });
  let instaFeed: any = []
  try {
    instaFeed = await getIGUserData("fibonaccistone");
  } catch (e) {
    console.log(e);
  }
  return {
    props: {
      pageData,
      instaFeed,
    },
    revalidate: parseInt(process.env.NEXT_PAGE_REVALIDATE),
  };
});

export default Home;
