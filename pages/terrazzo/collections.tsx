import { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import client from "@utils/apolloClient";
import { ProductsQuery } from "@gql/productGQL";
import { CategoriesQuery } from "@gql/categoriesGQL";
import Footer from "@components/common/footer";
import CollectionsPage from "@components/pages/products/collectionList";

interface CollectionsPageProps {
  collections: any;
  collectionProducts: any;
}

const Collections: NextPage<CollectionsPageProps> = ({
  collections,
  collectionProducts,
}) => {
  return (
    <>
      <Head>
        <title>Collections | Fibonacci</title>
        <meta name="description" content="Fibonacci Collections page" />
      </Head>
      <CollectionsPage collections={collections} collectionProducts={collectionProducts} />
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
  const collectionProducts = {};
  for (const collection of collections) {
    const {
      data: { entries: products },
    } = await client.query({
      query: ProductsQuery,
      variables: {
        collections: [collection.id],
      },
    });
    collectionProducts[collection.slug] = products;
  }
  return {
    props: {
      collections,
      collectionProducts,
    },
    revalidate: 500,
  };
};

export default Collections;
