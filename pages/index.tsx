import { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import client from "@utils/apolloClient";
import { ProductsQuery } from "@gql/productGQL";
import { sampleCta2Query } from "@gql/globalGQL";
import Homepage from "@components/pages/home";
import Header from "@components/common/header";
import Footer from "@components/common/footer";
import { withGlobalData } from "@hoc/withGlobalData";
interface HomePageProps {
  products: Array<any>;
  notifications: Array<any>;
  sampleCta: any;
}

const Home: NextPage<HomePageProps> = ({ products, sampleCta, notifications }) => {
  return (
    <>
      <Head>
        <title>Home | Fibonacci</title>
        <meta name="description" content="Fibonacci Homepage" />
        <meta name="robots" content="index, follow" />
      </Head>
      <Header mode="light" position="absolute" notifications={notifications} />
      <Homepage products={products} cta={sampleCta} />
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

  const {
    data: { globalSet: sampleCta },
  } = await client.query({
    query: sampleCta2Query,
  });

  return {
    props: {
      products,
      sampleCta
    },
    revalidate: 500,
  };
});

export default Home;
