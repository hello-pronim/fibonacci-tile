import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import Head from "next/head";
import client from "@utils/apolloClient";
import { withGlobalData } from "@hoc/withGlobalData";
import { ProductsQuery } from "@gql/productGQL";
import { CategoriesQuery, CategoryQuery } from "@gql/categoriesGQL";
import Footer from "@components/common/footer";
import CollectionPage from "@components/pages/products/collection";

interface CollectionPageProps {
  collection: any;
  products: any;
  notifications: any;
}

const Collection: NextPage<CollectionPageProps> = ({
  collection,
  products,
  notifications,
}) => {
  if (!collection) return null;
  return (
    <>
      <Head>
        <title>Collection | Fibonacci</title>
        <meta name="description" content="Fibonacci Collection page" />
      </Head>
      <CollectionPage
        collection={collection}
        products={products}
        notifications={notifications}
      />
      <Footer />
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const {
    data: { categories: collections },
  } = await client.query({
    query: CategoriesQuery,
    variables: { group: "collections" },
  });
  const paths = collections.map((collection: any) => ({
    params: { "collection-slug": collection.slug },
  }));
  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = withGlobalData(async function ({
  params,
}) {
  const {
    data: { category: collection },
  } = await client.query({
    query: CategoryQuery,
    variables: { slug: params["collection-slug"] },
  });
  const {
    data: { entries: products },
  } = await client.query({
    query: ProductsQuery,
    variables: {
      collections: [collection.id],
    },
  });

  return {
    props: {
      collection,
      products,
    },
    revalidate: 1,
  };
});

export default Collection;
