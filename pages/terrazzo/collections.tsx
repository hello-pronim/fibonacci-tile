import { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import client from "@utils/apolloClient";
import { withGlobalData } from "@hoc/withGlobalData";
import { PageQuery } from "@gql/pageGQL";
import { ProductsQuery } from "@gql/productGQL";
import { CategoriesQuery } from "@gql/categoriesGQL";
import { sampleCta1Query, sampleCta2Query } from "@gql/globalGQL";
import Footer from "@components/common/footer";
import CollectionsPage from "@components/pages/products/collectionList";

interface CollectionsPageProps {
  pageData: any;
  terrazzoPageData: any;
  collections: any;
  collectionProducts: any;
  notifications: any;
  sampleCta1: any;
  sampleCta2: any;
}

const Collections: NextPage<CollectionsPageProps> = ({
  pageData,
  terrazzoPageData,
  collections,
  collectionProducts,
  notifications,
  sampleCta1,
  sampleCta2,
}) => {
  return (
    <>
      <Head>
        <title>Collections | Fibonacci</title>
        <meta name="description" content="Fibonacci Collections page" />
      </Head>
      <CollectionsPage
        pageData={pageData}
        terrazzoPageData={terrazzoPageData}
        collections={collections}
        collectionProducts={collectionProducts}
        notifications={notifications}
        cta1={sampleCta1}
        cta2={sampleCta2}
      />
      <Footer />
    </>
  );
};

export const getStaticProps: GetStaticProps = withGlobalData(async function () {
  const {
    data: { entry: pageData },
  } = await client.query({
    query: PageQuery,
    variables: {
      slug: "collections",
    },
  });
  const {
    data: { entry: terrazzoPageData },
  } = await client.query({
    query: PageQuery,
    variables: {
      slug: "terrazzo",
    },
  });
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
  const {
    data: { globalSet: sampleCta1 },
  } = await client.query({
    query: sampleCta1Query,
  });

  const {
    data: { globalSet: sampleCta2 },
  } = await client.query({
    query: sampleCta2Query,
  });
  return {
    props: {
      pageData,
      terrazzoPageData,
      collections,
      collectionProducts,
      sampleCta1,
      sampleCta2,
    },
    revalidate: 500,
  };
});

export default Collections;
