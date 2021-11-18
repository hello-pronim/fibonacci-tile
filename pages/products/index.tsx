import Head from "next/head";
import Footer from "@components/common/footer";
import ProductPage from "@components/pages/products";

const Products = () => {
  return (
    <>
      <Head>
        <title>Products | Fibonacci</title>
        <meta name="description" content="Fibonacci Products page" />
      </Head>
      <ProductPage />
      <Footer />
    </>
  );
};

export default Products;
