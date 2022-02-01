import { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import client from "@utils/apolloClient";
import { ProductsQuery } from "@gql/productGQL";
import { CategoriesQuery } from "@gql/categoriesGQL";
import Footer from "@components/common/footer";
import CollectionsPage from "@components/pages/products/collectionList";

interface CollectionsPageProps {
  collections: any;
}

const Collections: NextPage<CollectionsPageProps> = ({ collections }) => {
  return (
    <>
      <Head>
        <title>Collections | Fibonacci</title>
        <meta name="description" content="Fibonacci Collections page" />
      </Head>
      <CollectionsPage collections={collections} />
      <Footer />
    </>
  );
};

export const getStaticProps: GetStaticProps = async function () {
  const {
    data: { categories: collections },
  } = await client.query({
    query: CategoriesQuery,
    variables: {
      group: "collections",
    },
  });
  return {
    props: {
      collections,
    },
    revalidate: 500,
  };
};

export default Collections;
