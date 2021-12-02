import Head from "next/head";
import Footer from "@components/common/footer";
import ProductSinglePage from "@components/pages/products/single";
const Products = () => {
  return (
    <>
      <Head>
        <title>Products | Fibonacci</title>
        <meta name="description" content="Fibonacci Products page" />
      </Head>
      <ProductSinglePage />
      <Footer />
    </>
  );
};

export default Products;
