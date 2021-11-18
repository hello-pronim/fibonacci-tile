import Head from "next/head";
import ProductPage from "@components/pages/products";

const Products = () => {
  return (
    <>
      <Head>
        <title>Products | Fibonacci</title>
        <meta name="description" content="Fibonacci Products page" />
      </Head>
      <ProductPage />
    </>
  );
};

export default Products;
