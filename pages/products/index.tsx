import Head from "next/head";
import Footer from "@components/common/footer";
import ProductPage from "@components/pages/products";
import client from "@utils/apolloClient";
import { ProductsQuery } from "@gql/productGQL";
import { CategoriesQuery } from "@gql/categoriesGQL";
import Abstrakt from "public/tmp/prod/abstrakt.jpeg";
import ActThree from "public/tmp/prod/actThree.jpeg";
import Assemblage from "public/tmp/prod/assemblage.jpeg";
import Bloc from "public/tmp/prod/bloc.jpeg";
import Brackish from "public/tmp/prod/brackish.jpeg";
import Carmelita from "public/tmp/prod/carmelita.jpeg";
import CloudBurst from "public/tmp/prod/cloudBurst.jpeg";
import CoolStream from "public/tmp/prod/coolStream.jpeg";

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
