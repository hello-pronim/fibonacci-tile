import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import Head from "next/head";
import { initializeApollo } from "@utils/apolloClient";
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
  const client = initializeApollo();
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
  const client = initializeApollo();

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
  console.log("revalidate on", process.env.NEXT_PAGE_REVALIDATE);
  return {
    props: {
      collection,
      products,
    },
    revalidate: parseInt(process.env.NEXT_PAGE_REVALIDATE),
  };
});

export default Collection;
