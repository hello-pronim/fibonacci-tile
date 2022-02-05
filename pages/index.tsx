import { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import client from "@utils/apolloClient";
import { ProductsQuery } from "@gql/productGQL";
import Homepage from "@components/pages/home";
import Header from "@components/common/header";
import Footer from "@components/common/footer";
import { withGlobalData } from "@hoc/withGlobalData";
interface HomePageProps {
  products: Array<any>;
  notifications: Array<any>;
}

const Home: NextPage<HomePageProps> = ({ products, notifications }) => {
  return (
    <>
      <Head>
        <title>Home | Fibonacci</title>
        <meta name="description" content="Fibonacci Homepage" />
        <meta name="robots" content="index, follow" />
      </Head>
      <Header mode="light" position="absolute" notifications={notifications} />
      <Homepage products={products} />
      <Footer />
    </>
  );
};

export const getStaticProps: GetStaticProps = withGlobalData(async () => {
  const {
    data: { entries: products },
  } = await client.query({
    query: ProductsQuery,
    variables: {
      limit: 10,
    },
  });
  return {
    props: {
      products,
    },
    revalidate: 500,
  };
});

export default Home;
