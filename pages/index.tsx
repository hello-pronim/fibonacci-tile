import { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import client from "@utils/apolloClient";
// import { ProductsQuery } from "@gql/productGQL";
// import { sampleCta2Query } from "@gql/globalGQL";
import { HomePageQuery } from "@gql/pageGQL";
import { withGlobalData } from "@hoc/withGlobalData";
import Homepage from "@components/pages/home";
import Header from "@components/common/header";
import Footer from "@components/common/footer";
interface HomePageProps {
  pageData: any;
  products: Array<any>;
  notifications: Array<any>;
  sampleCta: any;
}

const Home: NextPage<HomePageProps> = ({
  pageData,
  products,
  sampleCta,
  notifications,
}) => {
  return (
    <>
      <Head>
        <title>Home | Fibonacci</title>
        <meta name="description" content="Fibonacci Homepage" />
        <meta name="robots" content="index, follow" />
      </Head>
      <Header mode="light" position="absolute" notifications={notifications} />
      <Homepage pageData={pageData} />
      <Footer />
    </>
  );
};

export const getStaticProps: GetStaticProps = withGlobalData(async () => {
  const {
    data: { entry: pageData },
  } = await client.query({
    query: HomePageQuery,
    variables: {
      slug: "home-page",
    },
  });
  return {
    props: {
      pageData,
    },
    revalidate: 500,
  };
});

export default Home;
