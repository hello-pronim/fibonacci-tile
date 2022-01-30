import Head from "next/head";
import Footer from "@components/common/footer";
import ProductPage from "@components/pages/products";
import client from "@utils/apolloClient";
import { ProductsQuery } from "@gql/productGQL";
import { CategoriesQuery } from "@gql/categoriesGQL";

const Products = ({ products, colourSchemes }) => {
  return (
    <>
      <Head>
        <title>Products | Fibonacci</title>
        <meta name="description" content="Fibonacci Products page" />
      </Head>
      <ProductPage products={products} colourSchemes={colourSchemes} />
      <Footer />
    </>
  );
};

export const getStaticProps = async function () {
  const {
    data: { entries: products },
  } = await client.query({
    query: ProductsQuery,
  });
  const {
    data: { categories: colourSchemes },
  } = await client.query({
    query: CategoriesQuery,
    variables: {
      group: "colourSchemes",
    },
  });
  return {
    props: {
      products,
      colourSchemes,
    },
    revalidate: 500,
  };
};

export default Products;
