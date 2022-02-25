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
  instaFeed: Array<any>;
  notifications: Array<any>;
}

const Home: NextPage<HomePageProps> = ({
  pageData,
  notifications,
  instaFeed,
}) => {
  return (
    <>
      <Head>
        <title>Home | Fibonacci</title>
      </Head>
      <Header
        mode="light"
        notifications={notifications}
        hideBorderOnScroll={true}
      />
      <Homepage pageData={pageData} instaFeed={instaFeed} />
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
  let instaFeed: any = [];
  try {
    instaFeed = await getIGUserData("fibonaccistone");
  } catch (e) {
    console.log("error fetching ig data", e);
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
